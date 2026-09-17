import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";

const points = [
  {
    icon: "🧠",
    title: "الفهم قبل الحفظ",
    text: "التركيز على بناء فهم حقيقي للمفاهيم قبل أي حفظ.",
  },
  {
    icon: "✏️",
    title: "تطبيق وتمارين",
    text: "حل تمارين متنوعة لتثبيت المكتسبات وتنمية المنهجية.",
  },
  {
    icon: "📝",
    title: "التحضير للفروض والاختبارات",
    text: "مراجعة مكثفة ومقترحات تقرب التلميذ من صيغ الفروض.",
  },
  {
    icon: "🎯",
    title: "متابعة حسب المستوى",
    text: "أفواج منظمة تراعي مختلف المستويات والسيرورات.",
  },
  {
    icon: "📚",
    title: "موارد تعليمية",
    text: "مكتبة من الدروس والسلاسل والمراجع لدعم العمل.",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            overline="عن الأستاذ"
            english="About"
            title="عن الأستاذ"
            description={teacher.about}
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((point, i) => (
            <Reveal
              key={point.title}
              delay={(i % 3) * 70}
              className="group rounded-2xl border border-line bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-2xl transition-colors group-hover:bg-gold group-hover:text-charcoal">
                {point.icon}
              </span>
              <h3 className="mt-4 text-lg font-extrabold text-ink">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {point.text}
              </p>
            </Reveal>
          ))}

          <Reveal
            delay={140}
            className="flex flex-col items-start justify-center gap-3 rounded-2xl bg-charcoal p-6 text-white"
          >
            <span className="font-display text-xs uppercase tracking-[0.35em] text-gold">
              Mathematics
            </span>
            <h3 className="text-lg font-extrabold leading-snug">
              مرافقة منهجية منظمة لمسار دراسي أوضح.
            </h3>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}