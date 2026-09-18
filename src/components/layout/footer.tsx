import { teacher } from "@/data/teacher";
import { site, navLinks } from "@/data/site";
import { Container } from "@/components/shared/container";
import {
  InstagramIcon,
  TelegramIcon,
  MapPinIcon,
  PhoneIcon,
  FolderIcon,
} from "@/components/shared/icons";
import { QrCode } from "@/components/widgets/qr-code";

const social = [
  {
    label: "Instagram",
    href: teacher.links.instagram,
    icon: <InstagramIcon width={16} height={16} />,
  },
  {
    label: "Telegram",
    href: teacher.links.telegram3AS,
    icon: <TelegramIcon width={16} height={16} />,
  },
];

export function Footer() {
  return (
    <footer className="border-t border-line bg-charcoal pb-28 pt-16 text-white md:pb-12">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/5 font-display text-xl font-black text-gold">
                π
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-extrabold">{site.name}</span>
                <span className="text-sm font-medium text-white/60">
                  {teacher.nameArabic}
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-sm text-sm font-bold text-white/75">
              {teacher.title}
            </p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/55">
              {teacher.school.name} — دروس دعم ومرافقة منهجية لمختلف المستويات
              والشعب.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-bold text-white/80 transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
                >
                  {item.icon}
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mt-8">
              <QrCode
                label="امسح الرمز لمشاركة الموقع"
                className="max-w-[8rem]"
              />
            </div>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-sm font-extrabold tracking-wide text-gold">
              روابط سريعة
            </h3>
            <ul className="mt-4 space-y-2.5">
              <li>
                <a href="#home" className="text-sm font-bold text-white/70 transition-colors hover:text-gold">
                  الرئيسية
                </a>
              </li>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    className="text-sm font-bold text-white/70 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="text-sm font-extrabold tracking-wide text-gold">
              معلومات التواصل
            </h3>
            <ul className="mt-4 space-y-3 text-sm font-bold text-white/70">
              <li className="flex items-start gap-2.5">
                <MapPinIcon width={16} height={16} className="mt-0.5 shrink-0 text-gold" />
                <span>{teacher.school.name}</span>
              </li>
              <li>
                <a
                  href={teacher.school.phoneHref}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <PhoneIcon width={16} height={16} className="shrink-0 text-gold" />
                  <span dir="ltr">{teacher.school.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={teacher.links.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <MapPinIcon width={16} height={16} className="shrink-0 text-gold" />
                  الموقع على الخريطة
                </a>
              </li>
              <li>
                <a
                  href={teacher.links.googleDrive}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <FolderIcon width={16} height={16} className="shrink-0 text-gold" />
                  المكتبة التعليمية
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-center text-xs text-white/50 sm:flex-row sm:text-start">
          <p>
            © {site.year} {site.name} — جميع الحقوق محفوظة.
          </p>
          <p className="font-display uppercase tracking-[0.2em]">
            {site.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}