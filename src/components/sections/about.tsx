import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import {
  LightbulbIcon,
  PencilIcon,
  ClipboardIcon,
  ChartUpIcon,
  BookStackIcon,
} from "@/components/shared/icons";

const points = [
  {
    icon: <LightbulbIcon width={21} height={21} />,
    title: "الفهم قبل الحفظ",
    text: "التركيز على بناء فهم حقيقي للمفاهيم قبل أي حفظ.",
  },
  {
    icon: <PencilIcon width={21} height={21} />,
    title: "تطبيق وتمارين",
    text: "حل تمارين متنوعة لتثبيت المكتسبات وتنمية المنهجية.",
  },
  {
    icon: <ClipboardIcon width={21} height={21} />,
    title: "التحضير للفروض والاختبارات",
    text: "مراجعة مكثفة ومقترحات تقرب التلميذ من صيغ الفروض.",
  },
  {
    icon: <ChartUpIcon width={21} height={21} />,
    title: "متابعة حسب المستوى",
    text: "أفواج منظمة تراعي مختلف المستويات والسيرورات.",
  },
  {
    icon: <BookStackIcon width={21} height={21} />,
    title: "موارد تعليمية",
    text: "مكتبة من الدروس والسلاسل والمراجع لدعم العمل.",
  },
];

export function About() {
  return (
    <Section id="about" className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-16">
          <Reveal className="lg:col-span-2">
            <SectionHeading
              overline="عن الأستاذ"
              english="About"
              title="عن الأستاذ"
              description={teacher.about}
              align="start"
              className="items-start"
            />
            <div className="mt-9 rounded-3xl bg-charcoal p-7 text-white shadow-sm">
              <span className="font-display text-xs uppercase tracking-[0.35em] text-gold">
                Mathematics
              </span>
              <p className="mt-3 text-lg font-extrabold leading-snug">
                مرافقة منهجية منظمة لمسار دراسي أوضح.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-3">
            {points.map((point, i) => (
              <Reveal
                key={point.title}
                delay={(i % 2) * 80}
                className="group rounded-2xl border border-line bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold-strong transition-colors duration-200 group-hover:bg-gold group-hover:text-charcoal">
                  {point.icon}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-ink">
                  {point.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">
                  {point.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}