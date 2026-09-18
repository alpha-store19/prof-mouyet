import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import {
  InstagramIcon,
  TelegramIcon,
  PhoneIcon,
  MapPinIcon,
  ChevronLeftIcon,
  GraduationCapIcon,
  BookOpenIcon,
  CalculatorIcon,
} from "@/components/shared/icons";
import { ShareButton } from "@/components/widgets/share-button";
import { QrCode } from "@/components/widgets/qr-code";

const channels = [
  {
    icon: <InstagramIcon width={22} height={22} />,
    title: "Instagram",
    text: "تابع آخر المستجدات، أخبار الدروس، الإعلانات والمحتوى التعليمي.",
    action: "تابع على Instagram",
    href: teacher.links.instagram,
    external: true,
    tile: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white shadow-md shadow-[#ee2a7b]/25",
  },
  {
    icon: <TelegramIcon width={22} height={22} />,
    title: "Telegram",
    text: "انضم إلى قنوات Telegram الرسمية لمتابعة الإعلانات والموارد التعليمية.",
    action: "انضم إلى القناة",
    href: teacher.links.telegram3AS,
    external: true,
    tile: "bg-[#229ED9] text-white shadow-md shadow-[#229ED9]/25",
  },
  {
    icon: <PhoneIcon width={22} height={22} />,
    title: "الهاتف",
    text: teacher.school.phoneLabel,
    meta: teacher.school.phone,
    action: "اتصل بالمدرسة",
    href: teacher.school.phoneHref,
    external: false,
    tile: "bg-gold-soft text-gold-strong",
  },
  {
    icon: <MapPinIcon width={22} height={22} />,
    title: "Google Maps",
    text: "الوصول المباشر إلى مكان دروس الدعم.",
    action: "افتح الموقع",
    href: teacher.links.googleMaps,
    external: true,
    tile: "bg-gold-soft text-gold-strong",
  },
];

const telegramChannels = [
  {
    icon: <GraduationCapIcon width={20} height={20} />,
    title: "السنة الثالثة ثانوي",
    description: "محتوى وإعلانات وموارد خاصة بطلاب السنة الثالثة ثانوي.",
    href: teacher.links.telegram3AS,
  },
  {
    icon: <BookOpenIcon width={20} height={20} />,
    title: "السنة الأولى والثانية ثانوي",
    description: "",
    href: teacher.links.telegram1And2AS,
  },
  {
    icon: <CalculatorIcon width={20} height={20} />,
    title: "قناة السند في الرياضيات",
    description: "لشعبتي الرياضيات وتقني رياضي.",
    href: teacher.links.telegramMath,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            overline="تابع الأستاذ"
            english="Contact"
            title="تواصل معنا"
            description="للاستفسار حول برنامج دروس الدعم أو مكان الدراسة، أو لمتابعة آخر الإعلانات والمستجدات، اختر القناة المناسبة."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {channels.map((channel, i) => (
            <Reveal key={channel.title} delay={(i % 4) * 70}>
              <a
                href={channel.href}
                {...(channel.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group flex h-full flex-col rounded-2xl border border-line bg-background p-6 transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/10"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ${channel.tile}`}
                >
                  {channel.icon}
                </span>
                <h3 className="mt-4 text-base font-extrabold text-ink">
                  {channel.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted">
                  {channel.text}
                  {channel.meta ? (
                    <span
                      className="mt-1 block text-[15px] font-black text-gold-strong"
                      dir="ltr"
                    >
                      {channel.meta}
                    </span>
                  ) : null}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-extrabold text-gold-strong transition-colors group-hover:text-ink">
                  {channel.action}
                  <ChevronLeftIcon
                    width={15}
                    height={15}
                    className="transition-transform duration-200 group-hover:-translate-x-1"
                  />
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10" delay={60}>
          <div className="rounded-3xl border border-line bg-background p-6 sm:p-8">
            <div className="flex flex-col items-center gap-1 text-center">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#229ED9] text-white">
                <TelegramIcon width={19} height={19} />
              </span>
              <h3 className="mt-3 text-xl font-extrabold text-ink">
                قنوات Telegram
              </h3>
              <p className="mt-1 text-sm text-muted">
                اختر قناتك حسب المستوى أو الشعبة.
              </p>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {telegramChannels.map((channel) => (
                <a
                  key={channel.title}
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col items-center rounded-2xl border border-line bg-surface p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-gold/60 hover:bg-background hover:shadow-md"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold-soft text-gold-strong">
                    {channel.icon}
                  </span>
                  <h4 className="mt-3 text-[15px] font-extrabold text-ink">
                    {channel.title}
                  </h4>
                  {channel.description ? (
                    <p className="mt-1 flex-1 text-sm leading-relaxed text-muted">
                      {channel.description}
                    </p>
                  ) : (
                    <span className="flex-1" />
                  )}
                  <span className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#229ED9]/10 px-4 py-2 text-sm font-extrabold text-[#1d86b8] transition-colors group-hover:bg-[#229ED9] group-hover:text-white">
                    <TelegramIcon width={15} height={15} />
                    انضم للقناة
                  </span>
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-14">
          <div className="flex flex-col items-center gap-8 rounded-3xl border border-line bg-background p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-md text-center sm:text-start">
              <h3 className="text-xl font-extrabold text-ink">
                شارك موقع الأستاذ مع زملائك
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                ساعد تلاميذك وزملاءك على الوصول إلى برنامج الدروس والمكتبة
                التعليمية بسهولة.
              </p>
              <div className="mt-5 flex justify-center sm:justify-start">
                <ShareButton />
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <QrCode />
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}