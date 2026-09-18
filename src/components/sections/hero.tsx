import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/shared/button";
import {
  CalendarIcon,
  MapPinIcon,
  BookIcon,
  InstagramIcon,
} from "@/components/shared/icons";

const symbols = [
  { char: "π", className: "top-[12%] right-[6%] text-6xl sm:text-7xl animate-float-slow", delay: "0s" },
  { char: "∑", className: "top-[24%] left-[4%] text-5xl sm:text-6xl animate-float-slower", delay: "0.8s" },
  { char: "√", className: "bottom-[22%] right-[12%] text-5xl sm:text-6xl animate-float-slow", delay: "1.6s" },
  { char: "x²", className: "top-[10%] left-[18%] text-4xl sm:text-5xl animate-float-slower", delay: "0.4s" },
  { char: "f(x)", className: "bottom-[16%] left-[26%] text-4xl sm:text-5xl animate-float-slow", delay: "2.2s" },
  { char: "Δ", className: "top-[46%] right-[24%] text-4xl sm:text-5xl animate-float-slower", delay: "1.2s" },
];

const quickLinks = [
  { href: "#planning", label: "برنامج الدروس", icon: <CalendarIcon width={16} height={16} /> },
  { href: "#library", label: "المكتبة", icon: <BookIcon width={16} height={16} /> },
  { href: "#location", label: "المكان", icon: <MapPinIcon width={16} height={16} /> },
  {
    href: teacher.links.instagram,
    label: "Instagram",
    icon: <InstagramIcon width={16} height={16} />,
    external: true,
  },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-background pt-28 pb-20 sm:min-h-[92svh]"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_0%,var(--gold-soft),transparent_72%)] opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(42%_30%_at_86%_18%,var(--gold-soft),transparent_70%)] opacity-60 md:opacity-80" />
        <div className="absolute inset-y-0 left-1/2 w-px bg-line/70" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-surface to-transparent" />
        {symbols.map((s) => (
          <span
            key={s.char}
            className={`math-symbol ${s.className}`}
            style={{ animationDelay: s.delay }}
          >
            {s.char}
          </span>
        ))}
        <span className="absolute top-1/2 left-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/20 sm:h-96 sm:w-96" />
        <span className="absolute top-1/2 left-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-[2rem] rotate-12 border border-gold/10 sm:h-72 sm:w-72" />
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span
            className="animate-hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/50 px-4 py-1.5 text-xs font-bold text-gold-strong"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            الموقع الرسمي • Official Website
          </span>

          <p
            className="animate-hero-in font-display text-xs font-semibold uppercase tracking-[0.45em] text-gold-strong sm:text-sm"
            style={{ animationDelay: "0.12s" }}
          >
            {teacher.name}
          </p>

          <h1
            className="animate-hero-in mt-4 text-4xl font-black leading-[1.2] text-ink sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.2s" }}
          >
            الأستاذ <span className="text-gold-strong">مويات براء عبد الله</span>
          </h1>

          <p
            className="animate-hero-in mt-5 text-lg font-bold text-ink-soft sm:text-xl"
            style={{ animationDelay: "0.28s" }}
          >
            {teacher.heroRole}
          </p>

          <p
            className="animate-hero-in mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "0.36s" }}
          >
            {teacher.heroDescription}
          </p>

          <div
            className="animate-hero-in mt-9 flex w-full max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "0.44s" }}
          >
            <ButtonLink href="#planning" size="lg" className="w-full sm:w-auto">
              <CalendarIcon width={19} height={19} />
              اكتشف برنامج الدروس
            </ButtonLink>
            <ButtonLink
              href="#contact"
              size="lg"
              variant="dark"
              className="w-full sm:w-auto"
            >
              تواصل مع الأستاذ
            </ButtonLink>
          </div>

          <div
            className="animate-hero-in mt-4 flex items-center gap-3"
            style={{ animationDelay: "0.52s" }}
          >
            <ButtonLink
              href="#location"
              variant="ghost"
              size="md"
              className="rounded-full"
            >
              <MapPinIcon width={17} height={17} />
              مكان الدراسة
            </ButtonLink>
          </div>

          <div
            className="animate-hero-in mt-12 flex flex-wrap items-center justify-center gap-2.5"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="text-xs font-bold text-muted">وصول سريع:</span>
            {quickLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-bold text-ink-soft transition-colors hover:border-gold hover:text-gold-strong"
                >
                  {link.icon}
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-bold text-ink-soft transition-colors hover:border-gold hover:text-gold-strong"
                >
                  {link.icon}
                  {link.label}
                </a>
              ),
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}