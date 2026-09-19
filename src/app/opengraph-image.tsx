import { ImageResponse } from "next/og";

export const alt = "Regainr — Fraud & Scam Recovery Specialists";
export const size = { width: 1200, height: 630 };
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0b0b0d",
        }}
      >
        <svg width="140" height="140" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"
            fill="#FFD009"
          />
          <path
            d="M9.3 12.2l1.9 1.9L14.9 10"
            stroke="#0b0b0d"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 92,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          Regainr
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 14,
            fontSize: 32,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Fraud &amp; Scam Recovery Specialists
        </div>
      </div>
    ),
    { ...size },
  );
}
