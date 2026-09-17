const getSiteUrl = () =>
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/+$/, "") ?? "http://localhost:3000";

export const teacher = {
  name: "Mouyet Barae Abd Allah",
  nameArabic: "الأستاذ مويات براء عبد الله",
  title: "أستاذ الرياضيات – التعليم الثانوي",
  tagline: "Mathematics Teacher",
  heroRole: "أستاذ الرياضيات في التعليم الثانوي",
  heroDescription:
    "دروس دعم ومرافقة منهجية تساعد التلاميذ على فهم الرياضيات، تطوير مستواهم والاستعداد للفروض والاختبارات.",
  about:
    "الأستاذ مويات براء عبد الله، أستاذ مادة الرياضيات في الطور الثانوي، يقدم دروس دعم ومرافقة للتلاميذ بمختلف المستويات والشعب، مع التركيز على الفهم، المنهجية، حل التمارين والتحضير للفروض والاختبارات.",
  links: {
    instagram: "https://www.instagram.com/prof_mouyet_math/",
    telegram3AS: "https://t.me/mouyet_math",
    telegram1And2AS: "https://t.me/mouyet_math",
    telegramMath: "https://t.me/mouyet_math_MT",
    googleDrive:
      "https://drive.google.com/drive/folders/1F1nncva7_IKVWpmGrTdDlN0Y03g6ZEYk",
    googleMaps: "https://maps.app.goo.gl/cXhqB8iL3VwwCqKi7",
  },
  school: {
    name: "مدرسة حارة حفرة",
    phone: "0659739647",
    phoneHref: "tel:0659739647",
    phoneLabel: "للتواصل مع المدرسة",
  },
  siteUrl: getSiteUrl(),
} as const;