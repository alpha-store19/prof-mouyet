import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";
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
    <div className="relative z-10 -mt-12 pb-4 sm:-mt-16">
      <Container>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 sm:gap-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 70}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-5 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/10"
            >
              <span
                aria-hidden
                className="absolute inset-x-0 top-0 h-0.5 origin-right scale-x-0 bg-gold transition-transform duration-300 group-hover:scale-x-100"
              />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-gold-strong transition-colors group-hover:bg-gold group-hover:text-charcoal">
                {item.icon}
              </span>
              <span className="mt-4 flex flex-col">
                <span className="text-[15px] font-extrabold text-ink">
                  {item.title}
                </span>
                <span className="mt-0.5 text-xs font-semibold text-muted">
                  {item.sub}
                </span>
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}