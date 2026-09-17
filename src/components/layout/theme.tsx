"use client";

import { useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "@/components/shared/icons";

const STORAGE_KEY = "mouyet-theme";
const CHANGE_EVENT = "mouyet-theme-change";

export function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(){try{var s=localStorage.getItem("${STORAGE_KEY}");var d=s?s==="dark":window.matchMedia("(prefers-color-scheme: dark)").matches;if(d)document.documentElement.classList.add("dark");}catch(e){}})();`,
      }}
    />
  );
}

type Theme = "light" | "dark";

function getSnapshot(): Theme {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerSnapshot(): Theme {
  return "light";
}

function subscribe(callback: () => void): () => void {
  const syncWithSystem = () => {
    try {
      if (!window.localStorage.getItem(STORAGE_KEY)) {
        document.documentElement.classList.toggle(
          "dark",
          window.matchMedia("(prefers-color-scheme: dark)").matches,
        );
      }
    } catch {
      /* ignore */
    }
    callback();
  };

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  window.addEventListener(CHANGE_EVENT, callback);
  media.addEventListener("change", syncWithSystem);

  return () => {
    window.removeEventListener(CHANGE_EVENT, callback);
    media.removeEventListener("change", syncWithSystem);
  };
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    window.dispatchEvent(new Event(CHANGE_EVENT));
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={
        theme === "dark" ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الداكن"
      }
      className={`
        inline-flex h-10 w-10 items-center justify-center rounded-full
        border border-line text-ink-soft transition-colors
        hover:border-gold hover:text-gold-strong ${className}
      `}
    >
      {theme === "dark" ? (
        <SunIcon width={18} height={18} />
      ) : (
        <MoonIcon width={18} height={18} />
      )}
    </button>
  );
}