import { ImageResponse } from "next/og";

export const alt = "Morocco Family Trips";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", width: "100%", height: "100%", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "linear-gradient(135deg, #47151f 0%, #722632 55%, #d9a75e 100%)", color: "#fffaf0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 24, letterSpacing: 2, textTransform: "uppercase" }}><span style={{ display: "flex", width: 46, height: 46, alignItems: "center", justifyContent: "center", borderRadius: 24, background: "#fffaf0", color: "#722632", fontSize: 32 }}>M</span> MOROCCO FAMILY TRIPS</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 22, maxWidth: 900 }}><div style={{ fontSize: 78, lineHeight: 1.05, fontWeight: 700 }}>Private Morocco Tours for Families</div><div style={{ fontSize: 29, color: "#f6e9cf" }}>Private journeys planned around your family.</div></div>
      <div style={{ display: "flex", fontSize: 21, color: "#f6e9cf" }}>Planned with local operator Morocco Travel Experts</div>
    </div>,
    size,
  );
}
