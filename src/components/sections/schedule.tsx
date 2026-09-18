"use client";

import { useCallback, useEffect, useState } from "react";
import {
  FILTERS,
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
  SchoolIcon,
  UsersIcon,
  CalendarIcon,
  ClockIcon,
} from "@/components/shared/icons";
import { ScheduleFinder } from "./schedule-finder";

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
        "group relative flex flex-col rounded-2xl border bg-background p-5 shadow-sm transition-all duration-200",
        highlighted
          ? "border-2 border-gold bg-gold-soft/30 shadow-lg shadow-gold/10 ring-1 ring-gold"
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
            : "border-line bg-surface text-ink-soft hover:border-gold hover:text-gold-strong",
        )}
        aria-pressed={highlighted}
      >
        {highlighted ? "✓ هو برنامجي" : "هذا برنامجي"}
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

  return (
    <Section id="planning" className="bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            overline="📅 برنامج دروس الدعم"
            english="Planning"
            title="برنامج دروس الدعم"
            description="اختر مستواك أو شعبتك لمعرفة الفوج، الأيام والتوقيت."
          />
          <p className="mt-4 text-center text-sm font-bold text-muted">
            اختر مستواك لمعرفة موعد حصتك.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <ScheduleFinder onMatch={handleMatch} />
        </Reveal>

        <Reveal className="mt-12" delay={60}>
          <div
            role="tablist"
            aria-label="تصفية البرنامج حسب المستوى أو الشعبة"
            className="no-scrollbar flex gap-2 overflow-x-auto pb-1"
          >
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                role="tab"
                aria-selected={filter === f.id}
                onClick={() => setFilter(f.id)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition-all duration-200",
                  filter === f.id
                    ? "border-gold bg-gold text-charcoal shadow-sm shadow-gold/30"
                    : "border-line bg-background text-ink-soft hover:border-gold/50 hover:text-gold-strong",
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
            <p className="col-span-full rounded-2xl border border-dashed border-line bg-background p-8 text-center text-sm font-bold text-muted">
              لا توجد بيانات برنامج مطابقة لهذا الفلتر حالياً.
            </p>
          )}
        </div>
      </Container>
    </Section>
  );
}