import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
import { cn } from "@/lib/utils";
import {
  BookIcon,
  CalendarIcon,
  MapPinIcon,
  BookStackIcon,
} from "@/components/shared/icons";

const items = [
  {
    icon: <BookIcon width={22} height={22} />,
    title: "رياضيات – التعليم الثانوي",
    sub: "فهم، منهجية وتطبيق",
  },
  {
    icon: <CalendarIcon width={22} height={22} />,
    title: "برنامج دروس منظم",
    sub: "أفواج وأوقات واضحة",
  },
  {
    icon: <MapPinIcon width={22} height={22} />,
    title: "مدرسة حارة حفرة",
    sub: "مكان دروس الدعم",
  },
  {
    icon: <BookStackIcon width={22} height={22} />,
    title: "مكتبة تعليمية متاحة",
    sub: "دروس، سلاسل وفروض",
  },
];

export function QuickInfo() {
  return (
    <div className="relative z-10 -mt-10 pb-4 sm:-mt-12">
      <Container>
        <Reveal className="overflow-hidden rounded-2xl border border-line bg-background shadow-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((item, i) => (
              <div
                key={item.title}
                className={cn(
                  "group flex items-center gap-3.5 border-line p-5",
                  i > 0 && "border-t sm:border-t-0",
                  i > 1 && "sm:border-t lg:border-t-0",
                  i > 0 && "sm:border-s",
                )}
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-strong transition-colors duration-200 group-hover:bg-gold group-hover:text-charcoal">
                  {item.icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-[15px] font-extrabold text-ink">
                    {item.title}
                  </span>
                  <span className="mt-0.5 text-xs font-semibold text-muted">
                    {item.sub}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </div>
  );
}