import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tanvirtraders.com",
      lastModified: new Date("2026-10-04"),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          bn: "https://tanvirtraders.com",
          en: "https://tanvirtraders.com",
        },
      },
    },
  ];
}
