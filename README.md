# موقع الأستاذ مويات براء عبد الله

موقع تعريفي كامل (Production-Ready) بالعربية وبتصميم RTL للأستاذ **مويات براء عبد الله** — أستاذ الرياضيات في التعليم الثانوي.

يتضمّن: تقديم الأستاذ، برنامج دروس الدعم (الأفواج الرسمية)، بحث ذكي عن الفوج، المكتبة التعليمية، قنوات التلغرام، حساب الإنستغرام، ومكان الدراسة (مدرسة حارة حفرة).

## التقنيات

- [Next.js 16](https://nextjs.org) (App Router / Turbopack)
- React 19 + TypeScript
- Tailwind CSS v4
- خطوط `Cairo` و`Playfair Display` عبر `next/font`

## التشغيل محليًا

```bash
npm install
npm run dev
```

ثم افتح [http://localhost:3000](http://localhost:3000).

## الأوامر

```bash
npm run dev     # خادم التطوير
npm run build   # بناء الإنتاج
npm run start   # تشغيل نسخة الإنتاج
npm run lint    # فحص ESLint
```

## متغيّر البيئة

| المتغيّر | الوصف | القيمة الافتراضية |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | الرابط النهائي للموقع، يُستخدم في `metadata` و`sitemap` و`robots` وروابط المشاركة | `http://localhost:3000` |

قبل النشر، أنشئ ملف `.env.local` (أو أضف المتغيّر في منصة الاستضافة):

```bash
NEXT_PUBLIC_SITE_URL=https://example.com
```

## بنية المشروع

```
src/
  app/                 # التوجيه والـmetadata (layout, page, manifest, sitemap, robots, not-found)
  components/
    layout/            # navbar, footer, floating-actions, theme
    sections/          # hero, about, levels, schedule, schedule-finder, instagram, telegram, library, location, contact
    shared/            # icons, container, section, button, reveal
    widgets/           # qr-code, share-button
  data/                # site, teacher, schedule (مصدر الحقيقة الوحيد للبيانات)
  lib/                 # utils
scripts/
  generate-icons.mjs   # توليد أيقونات PNG في public/ و src/app/
```

> كل معلومات الموقع (الروابط، الجدول، أرقام التواصل) معرّفة مركزيًا في `src/data/`. لتحديث أي محتوى، عدّل هذه الملفات فقط.

## توليد الأيقونات

```bash
node scripts/generate-icons.mjs
```

يُنشئ `src/app/icon.png`، `src/app/apple-icon.png`، `public/icon-192.png`، `public/icon-512.png`، وصورة المشاركة `public/og.png` (1200×630).

## النشر

الموقع ثابت بالكامل (Static) ويمكن نشره على منصات مثل [Vercel](https://vercel.com/new) مباشرة — فقط تأكّد من ضبط `NEXT_PUBLIC_SITE_URL`.
