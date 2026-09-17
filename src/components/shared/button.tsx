import { cn } from "@/lib/utils";

type Variant = "primary" | "dark" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-gold text-charcoal shadow-sm shadow-gold/30 hover:bg-gold/90 hover:shadow-md hover:shadow-gold/40",
  dark: "bg-charcoal text-white hover:bg-charcoal/85",
  outline:
    "border border-line bg-transparent text-ink hover:border-gold hover:text-gold-strong",
  ghost: "text-ink-soft hover:text-gold-strong hover:bg-gold-soft/60",
};

const sizes: Record<Size, string> = {
  sm: "h-9 gap-1.5 px-4 text-sm",
  md: "h-11 gap-2 px-6 text-[15px]",
  lg: "h-13 gap-2.5 px-7 text-base sm:h-14",
};

export type ButtonStyle = {
  variant?: Variant;
  size?: Size;
  className?: string;
};

export function buttonClasses({
  variant = "primary",
  size = "md",
  className,
}: ButtonStyle = {}) {
  return cn(
    "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50",
    variants[variant],
    sizes[size],
    className,
  );
}

type ButtonBaseProps = ButtonStyle & {
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  type = "button",
  ...rest
}: ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type={type}
      className={buttonClasses({ variant, size, className })}
      {...rest}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...rest
}: ButtonBaseProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  return (
    <a href={href} className={buttonClasses({ variant, size, className })} {...rest}>
      {children}
    </a>
  );
}