import { cn } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

export function GoldLine({
  className,
  align = "center",
}: {
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <div
      aria-hidden
      className={cn(
        "flex items-center gap-2",
        align === "center" ? "justify-center" : "justify-start",
        className,
      )}
    >
      <span className="h-px w-8 bg-gold/60" />
      <span className="h-1 w-1 rotate-45 bg-gold" />
      <span className="h-px w-8 bg-gold/60" />
    </div>
  );
}