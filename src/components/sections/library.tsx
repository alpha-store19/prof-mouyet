import { teacher } from "@/data/teacher";
import { Container } from "@/components/shared/container";
import { Section, SectionHeading } from "@/components/shared/section";
import { Reveal } from "@/components/shared/reveal";
import { buttonClasses } from "@/components/shared/button";
import {
  FolderIcon,
  BookIcon,
  PencilIcon,
  ClipboardIcon,
  FileCheckIcon,
  BookStackIcon,
} from "@/components/shared/icons";

const resources = [
  { icon: <BookIcon width={22} height={22} />, title: "دروس", subtile: "ملخصات الدروس" },
  { icon: <PencilIcon width={22} height={22} />, title: "سلاسل وتمارين", subtile: "للتطبيق والمراجعة" },
  { icon: <ClipboardIcon width={22} height={22} />, title: "فروض", subtile: "نماذج الفروض" },
  { icon: <FileCheckIcon width={22} height={22} />, title: "اختبارات", subtile: "نماذج الاختبارات" },
  { icon: <BookStackIcon width={22} height={22} />, title: "مراجع", subtile: "كتب ومراجع مساعدة" },
];

export function Library() {
  return (
    <Section id="library" className="bg-surface">
      <Container>
        <Reveal>
          <SectionHeading
            overline="المكتبة التعليمية"
            english="Resources"
            title="المكتبة التعليمية"
            description="مكتبة تعليمية تضم العديد من المراجع لمختلف الشعب والمستويات، وتشمل الدروس، السلاسل، الفروض والاختبارات."
          />
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-5 sm:gap-4">
          {resources.map((res, i) => (
            <Reveal
              key={res.title}
              delay={(i % 5) * 60}
              className="group flex flex-col items-center gap-3 rounded-2xl border border-line bg-background p-5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-gold/50 hover:shadow-md sm:p-6"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold-soft text-gold-strong transition-colors duration-200 group-hover:bg-gold group-hover:text-charcoal">
                {res.icon}
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-extrabold text-ink sm:text-base">
                  {res.title}
                </span>
                <span className="text-xs text-muted">{res.subtile}</span>
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center">
          <a
            href={teacher.links.googleDrive}
            target="_blank"
            rel="noopener noreferrer"
            className={buttonClasses({ size: "lg" })}
          >
            <FolderIcon width={18} height={18} />
            فتح المكتبة التعليمية
          </a>
          <p className="mt-3 text-xs text-muted">
            المكتبة التعليمية متاحة عبر Google Drive.
          </p>
        </Reveal>
      </Container>
    </Section>
  );
}