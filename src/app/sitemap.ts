import type { MetadataRoute } from "next";
import { articles } from "@/data/articles";
import { editorialPages, unpublishedEditorialSlugs } from "@/data/content";
import { tours } from "@/data/tours";
import { AUTHOR_PATH, canonical } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const fixed = ["", "morocco-family-tours", "tours", "destinations", "family-guide"];
  const editorial = editorialPages.filter((page) => !unpublishedEditorialSlugs.has(page.slug)).map((page) => page.slug);
  const routes = [
    ...fixed,
    ...editorial,
    ...tours.map((tour) => `tours/${tour.slug}`),
    ...articles.map((article) => `blog/${article.slug}`),
    AUTHOR_PATH,
  ];
  return routes.map((path) => ({ url: canonical(path) }));
}
