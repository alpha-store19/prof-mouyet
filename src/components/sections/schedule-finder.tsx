"use client";

import { useEffect, useMemo, useState } from "react";
import {
  findScheduleEntry,
  groupsFor,
  STREAMS_3AS,
  type LevelKey,
  type Stream,
  type ScheduleEntry,
} from "@/data/schedule";
import { teacher } from "@/data/teacher";
import {
  CheckIcon,
  MapPinIcon,
  CalendarIcon,
  ClockIcon,
} from "@/components/shared/icons";

type LevelOption = { value: LevelKey; label: string };

const levelOptions: LevelOption[] = [
  { value: "3as", label: "السنة الثالثة ثانوي" },
  { value: "2as", label: "السنة الثانية ثانوي" },
  { value: "1as", label: "السنة الأولى ثانوي" },
];

const selectClass = `
  w-full appearance-none rounded-xl border border-line bg-background px-4 py-3
  text-sm font-bold text-ink outline-none transition-colors
  hover:border-gold/60 focus:border-gold
`;

function FindProgramButton() {
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-muted"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function ResultPanel({
  entry,
  selectionComplete,
}: {
  entry: ScheduleEntry | null;
  selectionComplete: boolean;
}) {
  if (!selectionComplete) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-dashed border-line bg-background p-5 text-sm font-bold text-muted">
        أكمل الاختيارات لمعرفة برنامجك.
      </div>
    );
  }

  if (!entry) {
    return (
      <div className="flex items-center gap-3 rounded-2xl border border-dashed border-line bg-background p-5 text-sm font-bold text-muted">
        لم يتم العثور على برنامج مطابق لاختياراتك.
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-gold bg-gold-soft/40 p-5 shadow-sm">
      <p className="flex items-center gap-2 text-sm font-extrabold text-gold-strong">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-charcoal">
          <CheckIcon width={13} height={13} />
        </span>
        برنامجك
      </p>
      <div className="mt-3 space-y-2.5">
        <p className="flex flex-wrap items-center gap-2 text-base font-black text-ink">
          <CalendarIcon width={19} height={19} className="text-gold-strong" />
          {entry.days.join(" + ")}
        </p>
        <p className="flex items-center gap-2 text-lg font-black text-gold-strong" dir="ltr">
          <ClockIcon width={19} height={19} />
          {entry.start} — {entry.end}
        </p>
        <p className="flex items-center gap-2 text-sm font-bold text-ink-soft">
          <span className="flex h-5 w-5 items-center justify-center text-gold">
            <MapPinIcon width={15} height={15} />
          </span>
          {teacher.school.name}
        </p>
      </div>
    </div>
  );
}

export function ScheduleFinder({
  onMatch,
}: {
  onMatch: (entryId: string | null) => void;
}) {
  const [levelKey, setLevelKey] = useState<LevelKey | null>(null);
  const [stream, setStream] = useState<Stream | null>(null);
  const [group, setGroup] = useState<string | null>(null);

  const groups = useMemo(
    () => (levelKey ? groupsFor(levelKey, stream) : []),
    [levelKey, stream],
  );

  const selectionComplete = useMemo(() => {
    if (!levelKey) return false;
    if (levelKey === "3as") {
      if (!stream) return false;
      if (stream === "علوم تجريبية" || stream === "الهندسة") {
        if (!group) return false;
      }
    }
    return true;
  }, [levelKey, stream, group]);

  const entry = useMemo(() => {
    if (!selectionComplete) return null;
    return findScheduleEntry({ levelKey, stream, group });
  }, [selectionComplete, levelKey, stream, group]);

  useEffect(() => {
    onMatch(entry?.id ?? null);
  }, [entry, onMatch]);

  const changeLevel = (value: string) => {
    setLevelKey(value as LevelKey);
    setStream(null);
    setGroup(null);
  };

  const changeStream = (value: string) => {
    setStream(value as Stream);
    setGroup(null);
  };

  return (
    <div className="space-y-4 rounded-3xl border border-line bg-surface p-5 shadow-sm sm:p-7">
      <div>
        <h3 className="flex items-center gap-2 text-lg font-extrabold text-ink">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-soft text-gold-strong">
            <MapPinIcon width={16} height={16} />
          </span>
          ابحث عن برنامجك
        </h3>
        <p className="mt-2 text-sm text-muted">
          حدد مستواك وشعبتك لتعرف أيام وتوقيت حصتك مباشرة.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-bold text-ink-soft">المستوى</span>
          <span className="relative block">
            <select
              value={levelKey ?? ""}
              onChange={(e) => changeLevel(e.target.value)}
              className={selectClass}
              aria-label="اختر المستوى"
            >
              <option value="" disabled>
                اختر المستوى
              </option>
              {levelOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            <FindProgramButton />
          </span>
        </label>

        {levelKey === "3as" ? (
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-ink-soft">الشعبة</span>
            <span className="relative block">
              <select
                value={stream ?? ""}
                onChange={(e) => changeStream(e.target.value)}
                className={selectClass}
                aria-label="اختر الشعبة"
              >
                <option value="" disabled>
                  اختر الشعبة
                </option>
                {STREAMS_3AS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              <FindProgramButton />
            </span>
          </label>
        ) : null}

        {groups.length > 0 ? (
          <label className="flex flex-col gap-1.5">
            <span className="text-sm font-bold text-ink-soft">الفوج</span>
            <span className="relative block">
              <select
                value={group ?? ""}
                onChange={(e) => setGroup(e.target.value)}
                className={selectClass}
                aria-label="اختر الفوج"
              >
                <option value="" disabled>
                  اختر الفوج
                </option>
                {groups.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
              <FindProgramButton />
            </span>
          </label>
        ) : null}
      </div>

      <ResultPanel entry={entry} selectionComplete={selectionComplete} />
    </div>
  );
}