import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Rate Limiting (In-Memory IP tracking)
const RATE_LIMIT_WINDOW_MS = 30_000; // 30 seconds window
const requestMap = new Map<string, number>();

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function getErrorMessage(error: unknown) {
  return error instanceof Error ? error.message : "Ocurrió un error al intentar enviar el mensaje.";
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();

    // 1. IP extraction & Rate Limiting
    const forwardedFor = req.headers.get("x-forwarded-for");
    const clientIp = forwardedFor?.split(",")[0]?.trim() || "unknown";
    const now = Date.now();

    // Clean up expired rate limit records
    for (const [ip, timestamp] of requestMap.entries()) {
      if (now - timestamp > RATE_LIMIT_WINDOW_MS) {
        requestMap.delete(ip);
      }
    }

    const lastRequestTime = requestMap.get(clientIp);
    if (lastRequestTime && now - lastRequestTime < RATE_LIMIT_WINDOW_MS) {
      return NextResponse.json(
        {
          success: false,
          error: "Por favor espera unos segundos antes de enviar otro mensaje.",
        },
        { status: 429 }
      );
    }

    // 2. Input Sanitization & Trimming
    const name = body.name?.trim() || "";
    const email = body.email?.trim() || "";
    const subject = body.subject?.trim() || "";
    const message = body.message?.trim() || "";

    // 3. Validation & Length Constraints
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { success: false, error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    if (name.length > 100 || subject.length > 150 || message.length > 3000) {
      return NextResponse.json(
        { success: false, error: "El mensaje o alguno de los campos excede el tamaño máximo permitido." },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { success: false, error: "El correo electrónico no es válido." },
        { status: 400 }
      );
    }

    // Record rate limit timestamp
    requestMap.set(clientIp, now);

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
    });

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
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #ffffff; font-size: 14px; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; color: #94a3b8; font-size: 13px; font-weight: 600;">Email:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #1e293b; font-size: 14px; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #c084fc; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">Asunto:</td>
                <td style="padding: 10px 0; color: #ffffff; font-size: 14px; font-weight: 600;">${subject}</td>
              </tr>
            </table>

            <!-- Message Content -->
            <div style="background-color: #111827; border: 1px solid #1f2937; border-left: 4px solid #a855f7; border-radius: 14px; padding: 20px; margin-bottom: 28px;">
              <p style="margin: 0 0 10px 0; color: #a855f7; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px;">Mensaje:</p>
              <p style="margin: 0; color: #e2e8f0; font-size: 14px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
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
        error: getErrorMessage(error),
      },
      { status: 500 }
    );
  }
}
