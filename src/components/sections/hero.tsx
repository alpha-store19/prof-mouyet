import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { ButtonLink } from "@/components/shared/button";
import {
  CalendarIcon,
  BookIcon,
  InstagramIcon,
} from "@/components/shared/icons";

const quickLinks = [
  { href: "#planning", label: "برنامج الدروس", icon: <CalendarIcon width={16} height={16} /> },
  { href: "#library", label: "المكتبة", icon: <BookIcon width={16} height={16} /> },
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
        <div className="absolute inset-0 bg-[radial-gradient(65%_55%_at_50%_0%,var(--gold-soft),transparent_72%)] opacity-90" />
        <div className="absolute inset-0 opacity-50 [background:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:44px_44px] [mask-image:radial-gradient(58%_58%_at_50%_32%,black,transparent)]" />
        <span className="math-symbol left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[24rem] opacity-[0.05]">
          π
        </span>
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-surface to-transparent" />
      </div>

      <Container className="relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span
            className="animate-hero-in mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/50 px-4 py-1.5 text-xs font-bold text-gold-strong"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            الموقع الرسمي — تحديث 2026
          </span>

          <h1
            className="animate-hero-in text-4xl font-black leading-[1.2] text-ink sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.12s" }}
          >
            الأستاذ <span className="text-gold-strong">مويات براء عبد الله</span>
          </h1>

          <p
            className="animate-hero-in mt-4 font-display text-xs font-semibold uppercase tracking-[0.4em] text-gold-strong sm:text-sm"
            style={{ animationDelay: "0.2s" }}
          >
            {teacher.heroRole}
          </p>

          <p
            className="animate-hero-in mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
            style={{ animationDelay: "0.28s" }}
          >
            {teacher.heroDescription}
          </p>

          <div
            className="animate-hero-in mt-9 flex w-full max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
            style={{ animationDelay: "0.36s" }}
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
            className="animate-hero-in mt-10 flex flex-wrap items-center justify-center gap-2.5"
            style={{ animationDelay: "0.44s" }}
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