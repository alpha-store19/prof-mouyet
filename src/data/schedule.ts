export type LevelKey = "1as" | "2as" | "3as";

export type Stream = "علوم تجريبية" | "الهندسة" | "رياضيات" | "تسيير واقتصاد";

export const LEVEL_LABEL: Record<LevelKey, string> = {
  "1as": "السنة الأولى ثانوي",
  "2as": "السنة الثانية ثانوي",
  "3as": "السنة الثالثة ثانوي",
};

export interface ScheduleEntry {
  id: string;
  levelKey: LevelKey;
  badge?: string;
  streams?: Stream[];
  group?: string;
  days: string[];
  start: string;
  end: string;
}

export const schedule: ScheduleEntry[] = [
  // طلاب البكالوريا — العلوم التجريبية + الهندسة
  {
    id: "3as-se-01",
    levelKey: "3as",
    badge: "طلاب البكالوريا",
    streams: ["علوم تجريبية", "الهندسة"],
    group: "الفوج 01",
    days: ["الجمعة", "السبت"],
    start: "07:30",
    end: "09:00",
  },
  {
    id: "3as-se-02",
    levelKey: "3as",
    badge: "طلاب البكالوريا",
    streams: ["علوم تجريبية", "الهندسة"],
    group: "الفوج 02",
    days: ["الجمعة", "السبت"],
    start: "09:15",
    end: "10:45",
  },
  {
    id: "3as-se-03",
    levelKey: "3as",
    badge: "طلاب البكالوريا",
    streams: ["علوم تجريبية", "الهندسة"],
    group: "الفوج 03",
    days: ["السبت", "الثلاثاء"],
    start: "13:15",
    end: "14:45",
  },
  {
    id: "3as-se-04",
    levelKey: "3as",
    badge: "طلاب البكالوريا",
    streams: ["علوم تجريبية", "الهندسة"],
    group: "الفوج 04",
    days: ["السبت", "الثلاثاء"],
    start: "15:00",
    end: "16:30",
  },
  {
    id: "3as-se-05",
    levelKey: "3as",
    badge: "طلاب البكالوريا",
    streams: ["علوم تجريبية", "الهندسة"],
    group: "الفوج 05",
    days: ["السبت", "الثلاثاء"],
    start: "16:45",
    end: "18:15",
  },
  {
    id: "3as-se-06",
    levelKey: "3as",
    badge: "طلاب البكالوريا",
    streams: ["علوم تجريبية", "الهندسة"],
    group: "الفوج 06",
    days: ["الأحد", "الخميس"],
    start: "18:00",
    end: "19:30",
  },
  {
    id: "3as-se-special",
    levelKey: "3as",
    badge: "طلاب البكالوريا",
    streams: ["علوم تجريبية", "الهندسة"],
    group: "الفوج الخاص",
    days: ["الأحد", "الخميس"],
    start: "19:45",
    end: "21:15",
  },
  // طلاب البكالوريا — شعبة الرياضيات
  {
    id: "3as-math",
    levelKey: "3as",
    badge: "طلاب البكالوريا",
    streams: ["رياضيات"],
    days: ["الجمعة", "السبت"],
    start: "11:00",
    end: "12:30",
  },
  // طلاب البكالوريا — شعبة تسيير واقتصاد
  {
    id: "3as-economy",
    levelKey: "3as",
    badge: "طلاب البكالوريا",
    streams: ["تسيير واقتصاد"],
    days: ["الجمعة"],
    start: "14:15",
    end: "16:15",
  },
  // السنة الثانية ثانوي
  {
    id: "2as-1",
    levelKey: "2as",
    group: "فوج 1",
    days: ["الجمعة"],
    start: "16:30",
    end: "18:30",
  },
  {
    id: "2as-2",
    levelKey: "2as",
    group: "فوج 2",
    days: ["السبت"],
    start: "18:45",
    end: "20:45",
  },
  // السنة الأولى ثانوي
  {
    id: "1as-1",
    levelKey: "1as",
    group: "فوج 1",
    days: ["الجمعة"],
    start: "18:45",
    end: "20:45",
  },
  {
    id: "1as-2",
    levelKey: "1as",
    group: "فوج 2",
    days: ["الثلاثاء"],
    start: "18:45",
    end: "20:45",
  },
];

export const FILTERS = [
  { id: "all", label: "الكل" },
  { id: "1as", label: "1 ثانوي" },
  { id: "2as", label: "2 ثانوي" },
  { id: "3as", label: "3 ثانوي" },
  { id: "stream-science", label: "علوم تجريبية" },
  { id: "stream-engineering", label: "الهندسة" },
  { id: "stream-math", label: "رياضيات" },
  { id: "stream-economy", label: "تسيير واقتصاد" },
] as const;

export type FilterId = (typeof FILTERS)[number]["id"];

export const STREAM_FILTER: Record<string, Stream> = {
  "stream-science": "علوم تجريبية",
  "stream-engineering": "الهندسة",
  "stream-math": "رياضيات",
  "stream-economy": "تسيير واقتصاد",
};

export function matchesFilter(entry: ScheduleEntry, filter: FilterId): boolean {
  if (filter === "all") return true;
  if (filter === "1as" || filter === "2as" || filter === "3as") {
    return entry.levelKey === filter;
  }
  const stream = STREAM_FILTER[filter];
  return entry.streams?.includes(stream) ?? false;
}

export const LEVELS = [
  {
    id: "level-3as-science",
    levelKey: "3as" as LevelKey,
    title: "الثالثة ثانوي",
    subtitle: "علوم تجريبية",
    filter: "stream-science" as FilterId,
    icon: "🔬",
  },
  {
    id: "level-3as-engineering",
    levelKey: "3as" as LevelKey,
    title: "الثالثة ثانوي",
    subtitle: "شعبة الهندسة",
    filter: "stream-engineering" as FilterId,
    icon: "📐",
  },
  {
    id: "level-3as-math",
    levelKey: "3as" as LevelKey,
    title: "الثالثة ثانوي",
    subtitle: "شعبة الرياضيات",
    filter: "stream-math" as FilterId,
    icon: "🧮",
  },
  {
    id: "level-3as-economy",
    levelKey: "3as" as LevelKey,
    title: "الثالثة ثانوي",
    subtitle: "تسيير واقتصاد",
    filter: "stream-economy" as FilterId,
    icon: "📊",
  },
  {
    id: "level-2as",
    levelKey: "2as" as LevelKey,
    title: "الثانية ثانوي",
    subtitle: "فوج 1 • فوج 2",
    filter: "2as" as FilterId,
    icon: "📗",
  },
  {
    id: "level-1as",
    levelKey: "1as" as LevelKey,
    title: "الأولى ثانوي",
    subtitle: "فوج 1 • فوج 2",
    filter: "1as" as FilterId,
    icon: "📘",
  },
] as const;

export interface FinderSelection {
  levelKey: LevelKey | null;
  stream: Stream | null;
  group: string | null;
}

export const STREAMS_3AS: Stream[] = [
  "علوم تجريبية",
  "الهندسة",
  "رياضيات",
  "تسيير واقتصاد",
];

export function groupsFor(levelKey: LevelKey | null, stream: Stream | null): string[] {
  if (levelKey === "1as" || levelKey === "2as") return ["فوج 1", "فوج 2"];
  if (levelKey === "3as") {
    if (stream === "علوم تجريبية" || stream === "الهندسة")
      return ["الفوج 01", "الفوج 02", "الفوج 03", "الفوج 04", "الفوج 05", "الفوج 06", "الفوج الخاص"];
  }
  return [];
}

export function findScheduleEntry(selection: FinderSelection): ScheduleEntry | null {
  const { levelKey, stream, group } = selection;
  if (!levelKey) return null;
  if (levelKey === "3as") {
    if (!stream) return null;
    if (stream === "علوم تجريبية" || stream === "الهندسة") {
      if (!group) return null;
    }
  }
  return (
    schedule.find((entry) => {
      if (entry.levelKey !== levelKey) return false;
      if (stream) {
        if (!entry.streams?.includes(stream)) return false;
      }
      if (group) {
        if (entry.group !== group) return false;
      }
      return true;
    }) ?? null
  );
}