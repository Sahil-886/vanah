import { ImageResponse } from "next/og";

export const alt = "Café Vanah (वनः) — Crafted coffee, bakehouse & vegetarian dining";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "60px 80px",
          backgroundColor: "#4D5A4C", // placemat sage
          color: "#EDE7DA", // line
          position: "relative",
        }}
      >
        {/* Top Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid rgba(237, 231, 218, 0.25)",
            paddingBottom: "24px",
          }}
        >
          <span style={{ fontSize: "20px", letterSpacing: "0.2em", textTransform: "uppercase" }}>
            CAFÉ VANAH · BANER–AUNDH ROAD, PUNE
          </span>
          <span style={{ fontSize: "18px", letterSpacing: "0.15em", textTransform: "uppercase" }}>
            PURE VEGETARIAN
          </span>
        </div>

        {/* Center: Large Devanagari Wordmark & Tagline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div style={{ fontSize: "110px", lineHeight: 0.9 }}>
            वनः
          </div>
          <div style={{ fontSize: "32px", fontStyle: "italic", opacity: 0.9 }}>
            Crafted coffee · Artisanal bakehouse · Conscious dining
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(237, 231, 218, 0.25)",
            paddingTop: "24px",
            fontSize: "18px",
            opacity: 0.8,
          }}
        >
          <span>Open every day, 8:00 am – 10:00 pm</span>
          <span>https://cafevanah.in</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
