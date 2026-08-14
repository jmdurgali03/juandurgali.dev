export const CONTACT_LIMITS = {
  name: 100,
  email: 254,
  subject: 150,
  message: 3000,
} as const;

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  website?: string;
};

export type ContactValidationResult =
  | { success: true; data: ContactPayload }
  | { success: false; error: string };

export function parseContactPayload(value: unknown): ContactValidationResult {
  if (!value || typeof value !== "object") {
    return { success: false, error: "El cuerpo de la solicitud no es válido." };
  }

  const body = value as Record<string, unknown>;
  const fields = ["name", "email", "subject", "message"] as const;
  if (fields.some((field) => typeof body[field] !== "string")) {
    return { success: false, error: "Todos los campos son obligatorios." };
  }

  const data: ContactPayload = {
    name: (body.name as string).trim(),
    email: (body.email as string).trim(),
    subject: (body.subject as string).trim(),
    message: (body.message as string).trim(),
    website: typeof body.website === "string" ? body.website.trim() : "",
  };

  if (!data.name || !data.email || !data.subject || !data.message) {
    return { success: false, error: "Todos los campos son obligatorios." };
  }

  if (
    data.name.length > CONTACT_LIMITS.name ||
    data.email.length > CONTACT_LIMITS.email ||
    data.subject.length > CONTACT_LIMITS.subject ||
    data.message.length > CONTACT_LIMITS.message
  ) {
    return { success: false, error: "Uno o más campos exceden el tamaño máximo permitido." };
  }

  if (!EMAIL_REGEX.test(data.email)) {
    return { success: false, error: "El correo electrónico no es válido." };
  }

  return { success: true, data };
}

export function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };
    return entities[character];
  });
}
