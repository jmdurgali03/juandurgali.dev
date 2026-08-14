import { describe, expect, it } from "vitest";
import { escapeHtml, parseContactPayload } from "./contact";

const validPayload = {
  name: "Juan",
  email: "juan@example.com",
  subject: "Consulta",
  message: "Hola",
};

describe("parseContactPayload", () => {
  it("normalizes a valid payload", () => {
    expect(parseContactPayload({ ...validPayload, name: "  Juan  " })).toEqual({
      success: true,
      data: { ...validPayload, website: "" },
    });
  });

  it("rejects missing, invalid and oversized fields", () => {
    expect(parseContactPayload({})).toMatchObject({ success: false });
    expect(parseContactPayload({ ...validPayload, email: "not-an-email" })).toMatchObject({ success: false });
    expect(parseContactPayload({ ...validPayload, message: "x".repeat(3001) })).toMatchObject({ success: false });
  });
});

describe("escapeHtml", () => {
  it("escapes user-controlled markup", () => {
    expect(escapeHtml('<a href="x">Tom & Jerry</a>')).toBe(
      "&lt;a href=&quot;x&quot;&gt;Tom &amp; Jerry&lt;/a&gt;"
    );
  });
});
