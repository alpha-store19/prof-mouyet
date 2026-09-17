"use client";

import { useState } from "react";
import { buttonClasses } from "@/components/shared/button";
import { ShareIcon, CheckIcon } from "@/components/shared/icons";

export function ShareButton({
  variant = "primary",
  size = "md",
  className = "",
  label = "مشاركة الموقع",
}: {
  variant?: "primary" | "dark" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
  label?: string;
}) {
  const [toast, setToast] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 2600);
  };

  const handleShare = async () => {
    const url = window.location.href;
    const title = "Mouyet Barae Abd Allah | أستاذ الرياضيات";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title, text: title, url });
        return;
      } catch {
        /* user cancelled or failed — fall through to clipboard */
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      showToast("تم نسخ رابط الموقع ✓");
    } catch {
      showToast("تعذر نسخ الرابط، جرب يدويًا.");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleShare}
        className={buttonClasses({ variant, size, className })}
      >
        <ShareIcon width={17} height={17} />
        {label}
      </button>

      {toast ? (
        <div
          role="status"
          className="fixed bottom-24 left-1/2 z-[70] flex -translate-x-1/2 items-center gap-2 rounded-full bg-charcoal px-5 py-2.5 text-sm font-bold text-white shadow-xl"
        >
          <CheckIcon width={15} height={15} className="text-gold" />
          {toast}
        </div>
      ) : null}
    </>
  );
}