import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { buttonClasses } from "@/components/shared/button";
import { MapPinIcon, PhoneIcon } from "@/components/shared/icons";

export function Location() {
  return (
    <Section id="location" className="bg-surface">
      <Container>
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <SectionHeading
              overline="مكان دروس الدعم"
              english="Location"
              title="مكان دروس الدعم"
              description="تقدم دروس الدعم بمدرسة حارة حفرة. للاستفسار حول الأوقات أو الالتحاق يمكنكم التواصل مع المدرسة مباشرة."
              align="start"
              className="items-start"
            />
            <ul className="mt-6 space-y-2 text-[15px] font-bold text-ink">
              <li className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-soft text-gold-strong">
                  <MapPinIcon width={16} height={16} />
                </span>
                {teacher.school.name}
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold-soft text-gold-strong">
                  <PhoneIcon width={16} height={16} />
                </span>
                <span dir="ltr">{teacher.school.phone}</span>
              </li>
            </ul>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={teacher.links.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className={buttonClasses({})}
              >
                <MapPinIcon width={17} height={17} />
                فتح الموقع على Google Maps
              </a>
              <a
                href={teacher.school.phoneHref}
                className={buttonClasses({ variant: "dark" })}
              >
                <PhoneIcon width={17} height={17} />
                الاتصال بالمدرسة
              </a>
            </div>
            <p className="mt-3 text-xs font-semibold text-muted">
              للتواصل مع المدرسة — {teacher.school.phone}
            </p>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-line bg-background p-8 shadow-md sm:p-10">
              <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 opacity-60 [background:linear-gradient(var(--line)_1px,transparent_1px),linear-gradient(90deg,var(--line)_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="absolute -start-16 -top-16 h-48 w-48 rounded-full bg-gold/10 blur-2xl" />
                <span className="math-symbol right-[10%] top-[14%] text-5xl opacity-15">
                  ∑
                </span>
                <span className="math-symbol left-[8%] bottom-[12%] text-5xl opacity-15">
                  √
                </span>
              </div>

              <div className="relative flex flex-col items-center text-center">
                <span className="flex h-20 w-20 items-center justify-center rounded-full border-2 border-gold/30 bg-gold-soft text-gold-strong">
                  <MapPinIcon width={36} height={36} />
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-ink">
                  هل تبحث عن مكان الدروس؟
                </h3>
                <p className="mt-2 text-base font-bold text-gold-strong">
                  {teacher.school.name}
                </p>
                <p className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-muted">
                  <PhoneIcon width={15} height={15} />
                  <span dir="ltr">{teacher.school.phone}</span>
                </p>

                <div className="mt-7 grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
                  <a
                    href={teacher.links.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonClasses({ size: "sm", className: "w-full" })}
                  >
                    فتح Google Maps
                  </a>
                  <a
                    href={teacher.school.phoneHref}
                    className={buttonClasses({
                      variant: "outline",
                      size: "sm",
                      className: "w-full",
                    })}
                  >
                    اتصل بالمدرسة
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </Section>
  );
}