"use client";

import { useCallback, useEffect, useState } from "react";
import {
  FILTERS,
  LEVELS,
  matchesFilter,
  schedule,
  LEVEL_LABEL,
  type FilterId,
  type ScheduleEntry,
} from "@/data/schedule";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { cn, onScheduleFilter } from "@/lib/utils";
import {
  CheckIcon,
  BookIcon,
  BookOpenIcon,
  SchoolIcon,
  UsersIcon,
  CalendarIcon,
  ClockIcon,
  FlaskIcon,
  TriangleIcon,
  CalculatorIcon,
  ChartBarIcon,
} from "@/components/shared/icons";
import { ScheduleFinder } from "./schedule-finder";

function levelChipIcon(filter: FilterId) {
  const size = 18;
  switch (filter) {
    case "stream-science":
      return <FlaskIcon width={size} height={size} />;
    case "stream-engineering":
      return <TriangleIcon width={size} height={size} />;
    case "stream-math":
      return <CalculatorIcon width={size} height={size} />;
    case "stream-economy":
      return <ChartBarIcon width={size} height={size} />;
    case "1as":
      return <BookOpenIcon width={size} height={size} />;
    default:
      return <BookIcon width={size} height={size} />;
  }
}

function ScheduleCard({
  entry,
  highlighted,
  onToggle,
}: {
  entry: ScheduleEntry;
  highlighted: boolean;
  onToggle: (id: string) => void;
}) {
  return (
    <article
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-surface p-5 shadow-sm transition-all duration-200",
        highlighted
          ? "border-2 border-gold bg-gold-soft/40 shadow-lg shadow-gold/10 ring-1 ring-gold"
          : "border-line hover:-translate-y-1 hover:border-gold/50 hover:shadow-md",
      )}
    >
      {highlighted ? (
        <span className="absolute -top-2.5 end-4 inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-0.5 text-[11px] font-extrabold text-charcoal shadow-sm">
          <CheckIcon width={11} height={11} />
          برنامجي
        </span>
      ) : null}

      <div className="flex items-start justify-between gap-2">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-strong">
              <BookIcon width={17} height={17} />
            </span>
            <p className="text-[15px] font-extrabold text-ink">
              {LEVEL_LABEL[entry.levelKey]}
            </p>
          </div>
          {entry.badge || entry.streams ? (
            <p className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-surface-2 px-3 py-1 text-xs font-bold text-ink-soft">
              <SchoolIcon width={13} height={13} className="text-gold-strong" />
              {entry.streams
                ? entry.streams.join(" + ")
                : entry.badge ?? "بيانات البرنامج"}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-bold text-muted">
        {entry.group ? (
          <span className="inline-flex items-center gap-1.5">
            <UsersIcon width={15} height={15} className="text-gold-strong" />
            الفوج: <span className="text-ink">{entry.group}</span>
          </span>
        ) : null}
        <span className="inline-flex items-center gap-1.5">
          <CalendarIcon width={15} height={15} className="text-gold-strong" />
          <span className="text-ink">{entry.days.join(" + ")}</span>
        </span>
      </div>

      <p
        dir="ltr"
        className="my-4 flex items-center justify-center gap-2.5 rounded-xl bg-surface-2 py-3 text-xl font-black tracking-wide text-gold-strong sm:text-2xl"
      >
        <ClockIcon width={20} height={20} className="hidden sm:block" />
        {entry.start} — {entry.end}
      </p>

      <button
        type="button"
        onClick={() => onToggle(entry.id)}
        className={cn(
          "mt-auto inline-flex h-10 w-full items-center justify-center rounded-full border text-sm font-extrabold transition-all duration-200 active:scale-[0.98]",
          highlighted
            ? "border-gold bg-gold text-charcoal shadow-sm shadow-gold/30"
            : "border-line bg-background text-ink-soft hover:border-gold hover:text-gold-strong",
        )}
        aria-pressed={highlighted}
      >
        {highlighted ? (
          <>
            <CheckIcon width={15} height={15} />
            هو برنامجي
          </>
        ) : (
          "هذا برنامجي"
        )}
      </button>
    </article>
  );
}

export function Schedule() {
  const [filter, setFilter] = useState<FilterId>("all");
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const filtered = schedule.filter((entry) => matchesFilter(entry, filter));

  useEffect(() => {
    return onScheduleFilter((f) => {
      setFilter(f);
      setHighlightedId(null);
    });
  }, []);

  const handleToggle = useCallback((id: string) => {
    setHighlightedId((current) => (current === id ? null : id));
  }, []);

  const handleMatch = useCallback((entryId: string | null) => {
    setHighlightedId(entryId);
  }, []);

  const selectFilter = useCallback((f: FilterId) => {
    setFilter(f);
    setHighlightedId(null);
  }, []);

  return (
    <Section id="planning" className="bg-background">
      <Container>
        <Reveal>
          <SectionHeading
            overline="البرنامج"
            english="Program"
            title="برنامج دروس الدعم"
            description="اختر مستواك أو شعبتك لمعرفة الفوج، الأيام والتوقيت — أو ابحث عن برنامجك في الخطوات الثلاثة."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 items-start gap-6 lg:grid-cols-3 lg:gap-8">
          <Reveal className="lg:col-span-1 lg:sticky lg:top-28">
            <ScheduleFinder onMatch={handleMatch} />
          </Reveal>

          <div className="flex min-w-0 flex-col gap-7 lg:col-span-2">
            <Reveal>
              <div>
                <p className="text-sm font-extrabold text-ink-soft">
                  المستويات والشعب
                </p>
                <p className="mt-1 text-xs font-semibold text-muted">
                  اختر مستواك لعرض برنامجه مباشرة.
                </p>
              </div>
              <div className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1">
                {LEVELS.map((level) => (
                  <button
                    key={level.id}
                    type="button"
                    aria-pressed={filter === level.filter}
                    onClick={() => selectFilter(level.filter)}
                    className={cn(
                      "group inline-flex shrink-0 items-center gap-2.5 rounded-2xl border px-3.5 py-2.5 transition-all duration-200",
                      filter === level.filter
                        ? "border-gold bg-gold text-charcoal shadow-sm shadow-gold/30"
                        : "border-line bg-surface text-ink hover:border-gold/60 hover:text-gold-strong",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors",
                        filter === level.filter
                          ? "bg-charcoal/15 text-charcoal"
                          : "bg-gold-soft text-gold-strong",
                      )}
                    >
                      {levelChipIcon(level.filter)}
                    </span>
                    <span className="flex flex-col text-start">
                      <span className="text-[13px] font-extrabold leading-tight">
                        {level.title}
                      </span>
                      <span
                        className={cn(
                          "text-[11px] font-semibold leading-tight",
                          filter === level.filter
                            ? "text-charcoal/70"
                            : "text-muted",
                        )}
                      >
                        {level.subtitle}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>

            <Reveal delay={50}>
              <p className="text-sm font-extrabold text-ink-soft">تصفية حسب:</p>
              <div
                role="tablist"
                aria-label="تصفية البرنامج حسب المستوى أو الشعبة"
                className="no-scrollbar mt-3 flex gap-2 overflow-x-auto pb-1"
              >
                {FILTERS.map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    role="tab"
                    aria-selected={filter === f.id}
                    onClick={() => selectFilter(f.id)}
                    className={cn(
                      "shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-all duration-200",
                      filter === f.id
                        ? "border-gold bg-gold text-charcoal shadow-sm shadow-gold/30"
                        : "border-line bg-surface text-ink-soft hover:border-gold/60 hover:text-gold-strong",
                    )}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {filtered.length > 0 ? (
                filtered.map((entry) => (
                  <ScheduleCard
                    key={entry.id}
                    entry={entry}
                    highlighted={highlightedId === entry.id}
                    onToggle={handleToggle}
                  />
                ))
              ) : (
                <p className="col-span-full rounded-2xl border border-dashed border-line bg-surface p-8 text-center text-sm font-bold text-muted">
                  لا توجد بيانات برنامج مطابقة لهذا الفلتر حالياً.
                </p>
              )}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}