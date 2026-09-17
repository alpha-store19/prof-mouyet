import { Container } from "@/components/shared/container";
import { Reveal } from "@/components/shared/reveal";

const items = [
  { icon: "📚", title: "رياضيات – التعليم الثانوي", sub: "فهم، منهجية وتطبيق" },
  { icon: "📅", title: "برنامج دروس منظم", sub: "أفواج وأوقات واضحة" },
  { icon: "📍", title: "مدرسة حارة حفرة", sub: "مكان دروس الدعم" },
  { icon: "📖", title: "مكتبة تعليمية متاحة", sub: "دروس، سلاسل وفروض" },
];

export function QuickInfo() {
  return (
    <div className="relative z-10 -mt-12 pb-4">
      <Container>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 70}
              className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-4 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-gold/50 hover:shadow-md"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold-soft text-xl transition-colors group-hover:bg-gold group-hover:text-charcoal">
                {item.icon}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-extrabold text-ink">{item.title}</span>
                <span className="text-xs text-muted">{item.sub}</span>
              </span>
            </Reveal>
          ))}
        </div>
      </Container>
    </div>
  );
}