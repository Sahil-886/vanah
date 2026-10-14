import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#4D5A4C", // placemat sage
          borderRadius: "2px",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#EDE7DA" // line
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Hand-drawn leaf shape */}
          <path d="M12 22C12 22 20 18 20 10C20 4 12 2 12 2C12 2 4 4 4 10C4 18 12 22 12 22Z" />
          <path d="M12 2V22" />
          <path d="M12 8L16 6" />
          <path d="M12 12L8 10" />
          <path d="M12 16L16 14" />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  );
}
