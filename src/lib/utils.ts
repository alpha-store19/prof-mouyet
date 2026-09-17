import type { FilterId } from "@/data/schedule";

export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToId(id: string): void {
  const el = document.getElementById(id);
  if (!el) return;
  const behavior: ScrollBehavior = prefersReducedMotion() ? "auto" : "smooth";
  const rect = el.getBoundingClientRect();
  if (rect.top < 0 || rect.top > window.innerHeight) {
    el.scrollIntoView({ behavior, block: "start" });
  }
  if (history.replaceState) {
    history.replaceState(null, "", `#${id}`);
  }
}

const EVENT_NAME = "schedule:filter";

export function requestScheduleFilter(filter: FilterId): void {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<FilterId>(EVENT_NAME, { detail: filter }),
  );
}

export function onScheduleFilter(callback: (filter: FilterId) => void): () => void {
  const handler = (event: Event) => {
    callback((event as CustomEvent<FilterId>).detail);
  };
  window.addEventListener(EVENT_NAME, handler);
  return () => window.removeEventListener(EVENT_NAME, handler);
}