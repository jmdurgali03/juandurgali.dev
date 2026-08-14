import { ImageResponse } from "next/og";

export const alt = "Juan Martín Durgali — Full Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          color: "white",
          background: "linear-gradient(135deg, #0a101e 0%, #111827 55%, #3b0764 100%)",
        }}
      >
        <div style={{ color: "#c084fc", fontSize: 28, letterSpacing: 6, textTransform: "uppercase" }}>
          Portfolio
        </div>
        <div style={{ fontSize: 72, fontWeight: 800, marginTop: 24 }}>Juan Martín Durgali</div>
        <div style={{ color: "#cbd5e1", fontSize: 36, marginTop: 18 }}>
          Full Stack Developer · Automation · AI
        </div>
      </div>
    ),
    size
  );
}
