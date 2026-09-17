import Link from "next/link";
import { Container } from "@/components/shared/container";
import { buttonClasses } from "@/components/shared/button";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[92svh] flex-col items-center justify-center overflow-hidden bg-background pt-24 pb-24 text-center">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(60%_55%_at_50%_0%,var(--gold-soft),transparent_70%)] opacity-70" />
        <span className="math-symbol left-[10%] top-[18%] text-6xl">π</span>
        <span className="math-symbol right-[12%] top-[30%] text-5xl">Δ</span>
        <span className="math-symbol left-[18%] bottom-[20%] text-5xl">√</span>
        <span className="math-symbol right-[20%] bottom-[26%] text-6xl">∑</span>
      </div>

      <Container className="relative">
        <p className="font-display text-7xl font-black leading-none text-gold sm:text-8xl">
          404
        </p>
        <h1 className="mt-6 text-3xl font-extrabold text-ink sm:text-4xl">
          الصفحة غير موجودة
        </h1>
        <p className="mx-auto mt-3 max-w-md text-base leading-relaxed text-muted">
          يبدو أنك وصلت إلى صفحة لا وجود لها. ربما تغيّر الرابط أو تم حذف الصفحة.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/" className={buttonClasses({ size: "lg" })}>
            العودة إلى الرئيسية
          </Link>
          <a
            href="#planning"
            className={buttonClasses({ variant: "outline", size: "lg" })}
          >
            برنامج الدروس
          </a>
        </div>
      </Container>
    </main>
  );
}