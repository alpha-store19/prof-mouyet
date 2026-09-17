import { cn } from "@/lib/utils";
import { GoldLine } from "./container";

export function SectionHeading({
  overline,
  english,
  title,
  description,
  align = "center",
  className,
}: {
  overline?: string;
  english?: string;
  title: string;
  description?: string;
  align?: "center" | "start";
  className?: string;
}) {
  const centered = align === "center";
  return (
    <div
      className={cn(
        "flex flex-col gap-3",
        centered ? "items-center text-center" : "items-start text-start",
        className,
      )}
    >
      {overline ? (
        <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/60 px-4 py-1 text-sm font-semibold text-gold-strong">
          {overline}
        </span>
      ) : null}
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {english ? (
        <p className="font-display text-xs font-medium uppercase tracking-[0.35em] text-gold-strong">
          {english}
        </p>
      ) : null}
      <GoldLine className="mt-1" />
      {description ? (
        <p
          className={cn(
            "mt-2 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg",
            centered ? "mx-auto" : "",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 py-16 sm:py-24", className)}>
      {children}
    </section>
  );
}