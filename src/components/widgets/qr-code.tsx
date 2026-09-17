"use client";

import { useEffect, useRef, useState } from "react";

export function QrCode({
  label = "مسح الرمز لمشاركة الموقع",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [url] = useState(() =>
    typeof window === "undefined" ? "" : window.location.href,
  );

  useEffect(() => {
    if (!url || !canvasRef.current) return;
    let cancelled = false;
    import("qrcode").then(({ default: QRCode }) => {
      if (cancelled || !canvasRef.current) return;
      QRCode.toCanvas(canvasRef.current, url, {
        width: 128,
        margin: 1,
        color: {
          dark: "#16120c",
          light: "#ffffff",
        },
        errorCorrectionLevel: "M",
      });
    });
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <div className={`flex flex-col items-center gap-2 ${className}`}>
      <canvas
        ref={canvasRef}
        aria-label="رمز QR لمشاركة الموقع"
        className="rounded-xl border border-line bg-white p-1"
      />
      <p className="text-center text-xs font-bold text-muted">{label}</p>
    </div>
  );
}