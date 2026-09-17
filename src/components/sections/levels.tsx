"use client";

import { LEVELS } from "@/data/schedule";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { requestScheduleFilter, scrollToId } from "@/lib/utils";

export function Levels() {
  const handleSelect = (filter: (typeof LEVELS)[number]["filter"]) => {
    requestScheduleFilter(filter);
    scrollToId("planning");
  };

  return (
    <Section id="levels">
      <Container>
        <Reveal>
          <SectionHeading
            overline="المستويات والشعب"
            english="Levels"
            title="المستويات والشعب"
            description="اختر مستواك أو شعبتك لتنتقل مباشرة إلى برنامج الدروس الخاص بك."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {LEVELS.map((level, i) => (
            <Reveal key={level.id} delay={(i % 3) * 70}>
              <button
                type="button"
                onClick={() => handleSelect(level.filter)}
                className="group flex w-full items-center gap-4 rounded-2xl border border-line bg-surface p-5 text-start transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:bg-background hover:shadow-lg hover:shadow-gold/10"
                aria-label={`${level.title} ${level.subtitle} — عرض البرنامج`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-2xl transition-colors group-hover:bg-gold">
                  {level.icon}
                </span>
                <span className="flex min-w-0 flex-1 flex-col">
                  <span className="text-base font-extrabold text-ink">
                    {level.title}
                  </span>
                  <span className="text-sm text-muted">{level.subtitle}</span>
                </span>
                <span className="text-gold opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                  ←
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}