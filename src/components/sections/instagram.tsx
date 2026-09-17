import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { Section } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { InstagramIcon } from "@/components/shared/icons";
import { buttonClasses } from "@/components/shared/button";

export function Instagram() {
  return (
    <Section>
      <Container>
        <Reveal className="relative overflow-hidden rounded-3xl bg-charcoal px-6 py-12 text-white shadow-xl sm:px-12 sm:py-16">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -end-20 -top-20 h-72 w-72 rounded-full bg-gold/10 blur-3xl" />
            <div className="absolute -bottom-24 -start-16 h-64 w-64 rounded-[2rem] rotate-12 border border-gold/15" />
            <span className="math-symbol left-[8%] top-[18%] text-6xl opacity-10" style={{ color: "var(--gold)" }}>
              f(x)
            </span>
            <span className="math-symbol right-[14%] bottom-[14%] text-5xl opacity-10" style={{ color: "var(--gold)" }}>
              π
            </span>
          </div>

          <div className="relative flex flex-col items-center text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] shadow-lg shadow-[#ee2a7b]/30">
              <InstagramIcon width={30} height={30} className="text-white" />
            </span>
            <h2 className="mt-6 text-2xl font-extrabold sm:text-3xl">
              تابع الأستاذ على Instagram
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-white/70">
              تابع آخر المستجدات، أخبار الدروس، الإعلانات والمحتوى التعليمي.
            </p>
            <a
              href={teacher.links.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClasses({ size: "lg", className: "mt-8" })}
            >
              <InstagramIcon width={19} height={19} />
              تواصل معي على Instagram
            </a>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}