"use client";

import { useEffect, useState } from "react";
import { site, navLinks } from "@/data/site";
import { teacher } from "@/data/teacher";
import { cn } from "@/lib/utils";
import {
  MenuIcon,
  CloseIcon,
  CalendarIcon,
  PhoneIcon,
} from "@/components/shared/icons";
import { ButtonLink } from "@/components/shared/button";
import { ThemeToggle } from "./theme";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled || open
          ? "border-b border-line bg-background/90 shadow-sm backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-charcoal font-display text-xl font-black text-gold shadow-sm transition-transform duration-200 group-hover:scale-105">
            π
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-extrabold text-ink sm:text-[15px]">
              {site.name}
            </span>
            <span className="text-[11px] font-medium text-muted">
              {site.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="التنقل الرئيسي">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={() => setOpen(false)}
              className="link-underline text-sm font-bold text-ink-soft transition-colors hover:text-gold-strong"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle className="hidden sm:inline-flex" />
          <ButtonLink
            href="#planning"
            size="sm"
            className="hidden md:inline-flex"
          >
            <CalendarIcon width={17} height={17} />
            برنامج الدروس
          </ButtonLink>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-background/60 text-ink lg:hidden"
          >
            {open ? (
              <CloseIcon width={20} height={20} />
            ) : (
              <MenuIcon width={20} height={20} />
            )}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-line bg-background lg:hidden"
          aria-label="قائمة الهاتف"
        >
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-3 sm:px-8">
            {navLinks.map((link) => (
              <li key={link.id} className="border-b border-line/60 last:border-0">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[15px] font-bold text-ink transition-colors hover:text-gold-strong"
                >
                  <span>{link.label}</span>
                  <span className="font-display text-[10px] uppercase tracking-[0.2em] text-muted">
                    {link.english}
                  </span>
                </a>
              </li>
            ))}
            <li className="flex items-center justify-between gap-3 py-4">
              <ButtonLink
                href="#planning"
                size="md"
                className="flex-1"
                onClick={() => setOpen(false)}
              >
                <CalendarIcon width={18} height={18} />
                برنامج الدروس
              </ButtonLink>
              <ThemeToggle />
            </li>
            <li className="flex items-center justify-between gap-3 pb-4">
              <a
                href={teacher.school.phoneHref}
                className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-line text-[15px] font-extrabold text-ink transition-colors hover:border-gold hover:text-gold-strong"
              >
                <PhoneIcon width={18} height={18} />
                الاتصال بالمدرسة
              </a>
            </li>
            <li className="pb-2 text-center text-xs text-muted">
              {teacher.title}
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}