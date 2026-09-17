import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { TelegramIcon } from "@/components/shared/icons";

const channels = [
  {
    icon: "📘",
    title: "السنة الثالثة ثانوي",
    description: "محتوى وإعلانات وموارد خاصة بطلاب السنة الثالثة ثانوي.",
    href: teacher.links.telegram3AS,
  },
  {
    icon: "📗",
    title: "السنة الأولى والثانية ثانوي",
    description: "",
    href: teacher.links.telegram1And2AS,
  },
  {
    icon: "📐",
    title: "قناة السند في الرياضيات",
    description: "لشعبتي الرياضيات وتقني رياضي.",
    href: teacher.links.telegramMath,
  },
];

export function Telegram() {
  return (
    <Section id="telegram" className="bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            overline="قنوات Telegram"
            english="Telegram"
            title="قنوات Telegram"
            description="انضم إلى القنوات الرسمية لمتابعة الإعلانات والموارد التعليمية."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {channels.map((channel, i) => (
            <Reveal key={channel.title} delay={(i % 3) * 70}>
              <a
                href={channel.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-lg hover:shadow-gold/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-2xl transition-colors group-hover:bg-gold">
                  {channel.icon}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-ink">
                  {channel.title}
                </h3>
                {channel.description ? (
                  <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                    {channel.description}
                  </p>
                ) : (
                  <span className="flex-1" />
                )}
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-sm font-extrabold text-ink-soft transition-colors group-hover:border-gold group-hover:bg-gold group-hover:text-charcoal">
                  <TelegramIcon width={16} height={16} />
                  انضم للقناة
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}