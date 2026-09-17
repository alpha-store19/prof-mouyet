"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );
    observer.observe(node);

    const safety = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      observer.disconnect();
      window.clearTimeout(safety);
    };
  }, []);

  return (
    <div
      ref={ref}
      data-reveal={visible ? undefined : "true"}
      className={cn(visible && "is-visible", className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}