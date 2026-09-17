import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import {
  InstagramIcon,
  TelegramIcon,
  PhoneIcon,
  MapPinIcon,
} from "@/components/shared/icons";
import { ShareButton } from "@/components/widgets/share-button";
import { QrCode } from "@/components/widgets/qr-code";

const channels = [
  {
    icon: <InstagramIcon width={22} height={22} />,
    title: "Instagram",
    text: "تواصل مع الأستاذ",
    href: teacher.links.instagram,
    external: true,
  },
  {
    icon: <TelegramIcon width={22} height={22} />,
    title: "Telegram",
    text: "انضم إلى القنوات التعليمية",
    href: teacher.links.telegram3AS,
    external: true,
  },
  {
    icon: <PhoneIcon width={22} height={22} />,
    title: "الهاتف",
    text: "التواصل مع مدرسة حارة حفرة",
    href: teacher.school.phoneHref,
    phone: teacher.school.phone,
    external: false,
  },
  {
    icon: <MapPinIcon width={22} height={22} />,
    title: "Google Maps",
    text: "الوصول إلى مكان الدراسة",
    href: teacher.links.googleMaps,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            overline="تواصل معنا"
            english="Contact"
            title="تواصل معنا"
            description="للاستفسار حول برنامج دروس الدعم أو مكان الدراسة، يمكنكم التواصل عبر القنوات المتاحة."
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
                className="group flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-background p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-gold hover:shadow-lg hover:shadow-gold/5"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold-strong transition-colors group-hover:bg-gold group-hover:text-charcoal">
                  {channel.icon}
                </span>
                <h3 className="text-base font-extrabold text-ink">
                  {channel.title}
                </h3>
                <p className="-mt-1 text-sm text-muted">{channel.text}</p>
                {"phone" in channel && channel.phone ? (
                  <p className="text-sm font-black text-gold-strong" dir="ltr">
                    {channel.phone}
                  </p>
                ) : (
                  <span className="text-sm font-black text-gold-strong">
                    ↔
                  </span>
                )}
              </a>
            </Reveal>
          ))}
        </div>

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