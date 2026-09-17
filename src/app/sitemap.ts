import type { MetadataRoute } from "next";
import { teacher } from "@/data/teacher";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: teacher.siteUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}