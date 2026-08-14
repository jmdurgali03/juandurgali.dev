import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { escapeHtml, parseContactPayload } from "@/lib/contact";

const MAX_REQUEST_BYTES = 8_000;

export async function POST(req: Request) {
  try {
    if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return NextResponse.json(
        { success: false, error: "El tipo de contenido no es válido." },
        { status: 415 }
      );
    }

    const contentLength = Number(req.headers.get("content-length") ?? 0);
    if (contentLength > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { success: false, error: "La solicitud excede el tamaño máximo permitido." },
        { status: 413 }
      );
    }

    const rawBody = await req.text();
    if (new TextEncoder().encode(rawBody).length > MAX_REQUEST_BYTES) {
      return NextResponse.json(
        { success: false, error: "La solicitud excede el tamaño máximo permitido." },
        { status: 413 }
      );
    }

    let body: unknown;
    try {
      body = JSON.parse(rawBody);
    } catch {
      return NextResponse.json(
        { success: false, error: "El cuerpo de la solicitud no es válido." },
        { status: 400 }
      );
    }

    const parsed = parseContactPayload(body);
    if (!parsed.success) {
      return NextResponse.json({ success: false, error: parsed.error }, { status: 400 });
    }

    // Silently accept honeypot submissions so bots cannot tune around it.
    if (parsed.data.website) {
      return NextResponse.json({ success: true, message: "¡Mensaje enviado con éxito!" });
    }

    const { name, email, subject, message } = parsed.data;

    // 4. SMTP Configuration
    const host = process.env.SMTP_HOST || "smtp.gmail.com";
    const port = parseInt(process.env.SMTP_PORT || "465", 10);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const receiver = process.env.CONTACT_RECEIVER_EMAIL || user || "juandurgali@gmail.com";

    if (!user || !pass) {
      console.warn("⚠️ SMTP_USER o SMTP_PASS no están configurados en las variables de entorno.");
      return NextResponse.json(
        {
          success: false,
          error: "El servicio de correo no está configurado (variables de entorno SMTP ausentes).",
        },
        { status: 500 }
      );
    }

    // 5. Nodemailer Transporter Creation
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 10_000,
      greetingTimeout: 10_000,
      socketTimeout: 15_000,
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message);

    // 6. Full Dark Mode HTML Mail Content
    const mailOptions = {
      from: `"${name}" <${user}>`,
      replyTo: `"${name}" <${email}>`,
      to: receiver,
      subject: `[Portfolio Contact] ${subject}`,
      text: `Nombre: ${name}\nEmail: ${email}\nAsunto: ${subject}\n\nMensaje:\n${message}`,
      html: `
        <!DOCTYPE html>
        <html lang="es">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <meta name="color-scheme" content="dark">
          <meta name="supported-color-schemes" content="dark">
          <style>
            :root {
              color-scheme: dark;
              supported-color-schemes: dark;
            }
            body {
              background-color: #030712 !important;
              color: #f8fafc !important;
              margin: 0;
              padding: 0;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            }
          </style>
        </head>
        <body style="background-color: #030712; color: #f8fafc; margin: 0; padding: 32px 16px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #0b0f19; border: 1px solid #1e293b; border-radius: 20px; padding: 32px; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);">
            
            <!-- Header -->
            <div style="border-bottom: 1px solid #1e293b; padding-bottom: 20px; margin-bottom: 24px; text-align: left;">
              <span style="font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 2px; color: #c084fc; display: block; margin-bottom: 6px;">📬 Nuevo Mensaje de Contacto</span>
              <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px;">Portfolio Dev</h1>
            </div>

            <!-- Data Table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; font-weight: 600; width: 100px;">Nombre:</td>
                  <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #ffffff; font-size: 14px; font-weight: 600;">${safeName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; font-weight: 600;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; font-size: 14px; font-weight: 600;">
                  <a href="mailto:${safeEmail}" style="color: #c084fc; text-decoration: none;">${safeEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">Asunto:</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: 600;">${safeSubject}</td>
              </tr>
            </table>

            <!-- Message Content -->
            <div style="background-color: #111827; border: 1px solid #1f2937; border-left: 4px solid #a855f7; border-radius: 14px; padding: 20px; margin-bottom: 28px;">
              <p style="margin: 0 0 10px 0; color: #a855f7; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Mensaje:</p>
              <p style="margin: 0; color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
            </div>

            <!-- Footer -->
            <div style="border-top: 1px solid #1e293b; padding-top: 20px; text-align: center;">
              <p style="margin: 0; font-size: 12px; color: #64748b;">
                Este correo fue enviado automáticamente desde el formulario de contacto de tu portfolio.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
    };

    // 7. Dispatch Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "¡Mensaje enviado con éxito!",
    });
  } catch (error: unknown) {
    console.error("Error al enviar email con Nodemailer:", error);
    return NextResponse.json(
      {
        success: false,
        error: "No se pudo enviar el mensaje. Inténtalo nuevamente más tarde.",
      },
      { status: 500 }
    );
  }
}
