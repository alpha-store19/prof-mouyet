"use client";

import { teacher } from "@/data/teacher";
import {
  InstagramIcon,
  TelegramIcon,
  MapPinIcon,
  PhoneIcon,
} from "@/components/shared/icons";

const actions = [
  {
    label: "Instagram",
    href: teacher.links.instagram,
    icon: <InstagramIcon width={20} height={20} />,
  },
  {
    label: "Telegram",
    href: teacher.links.telegram3AS,
    icon: <TelegramIcon width={20} height={20} />,
  },
  {
    label: "الموقع على الخريطة",
    href: teacher.links.googleMaps,
    icon: <MapPinIcon width={20} height={20} />,
  },
  {
    label: `الاتصال بالمدرسة ${teacher.school.phone}`,
    href: teacher.school.phoneHref,
    icon: <PhoneIcon width={20} height={20} />,
  },
];

export function FloatingActions() {
  return (
    <>
      {/* Desktop — side rail */}
      <div className="fixed bottom-8 end-5 z-40 hidden flex-col gap-2 md:flex">
        {actions.map((action) => (
          <a
            key={action.label}
            href={action.href}
            target={action.href.startsWith("tel:") ? undefined : "_blank"}
            rel={
              action.href.startsWith("tel:") ? undefined : "noopener noreferrer"
            }
            aria-label={action.label}
            title={action.label}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-line bg-background/90 text-ink-soft shadow-sm backdrop-blur-md transition-all duration-200 hover:border-gold hover:bg-gold hover:text-charcoal hover:shadow-md"
          >
            {action.icon}
          </a>
        ))}
      </div>

      {/* Mobile — bottom bar */}
      <nav
        aria-label="أزرار الوصول السريع"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-background/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 backdrop-blur-md md:hidden"
      >
        <div className="mx-auto grid grid-cols-4 gap-1">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.href.startsWith("tel:") ? undefined : "_blank"}
              rel={
                action.href.startsWith("tel:") ? undefined : "noopener noreferrer"
              }
              aria-label={action.label}
              className="flex flex-col items-center gap-1 rounded-xl py-1.5 text-[10px] font-bold text-ink-soft transition-colors active:bg-gold-soft active:text-gold-strong"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-soft text-gold-strong">
                {action.icon}
              </span>
              {action.label.split(" ")[0]}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}