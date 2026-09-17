import type { Metadata, Viewport } from "next";
import { Cairo, Playfair_Display } from "next/font/google";
import "./globals.css";
import { teacher } from "@/data/teacher";
import { site } from "@/data/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingActions } from "@/components/layout/floating-actions";
import { ThemeScript } from "@/components/layout/theme";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(teacher.siteUrl),
  title: {
    default: "Mouyet Barae Abd Allah | أستاذ الرياضيات",
    template: "%s | Mouyet Barae Abd Allah",
  },
  description: site.description,
  keywords: [...site.keywords],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ar_DZ",
    siteName: site.name,
    title: "Mouyet Barae Abd Allah | أستاذ الرياضيات",
    description: site.description,
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: site.nameArabic,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mouyet Barae Abd Allah | أستاذ الرياضيات",
    description: site.description,
    images: ["/og.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: site.themeColor,
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: site.name,
      alternateName: site.nameArabic,
      description: site.description,
      url: teacher.siteUrl,
    },
    {
      "@type": "Person",
      name: site.name,
      alternateName: site.nameArabic,
      jobTitle: "Mathematics Teacher",
      description: site.description,
      url: teacher.siteUrl,
      worksFor: {
        "@type": "EducationalOrganization",
        name: teacher.school.name,
      },
      sameAs: [
        teacher.links.instagram,
        teacher.links.telegram3AS,
        teacher.links.telegramMath,
      ],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full bg-background font-sans text-ink">
        <ThemeScript />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}