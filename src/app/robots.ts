import type { MetadataRoute } from "next";
import { teacher } from "@/data/teacher";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${teacher.siteUrl}/sitemap.xml`,
  };
}