import { biographyDraft } from "@/content/biography";
import { brands } from "@/content/brands";
import { news } from "@/content/news";
import { projects } from "@/content/projects";
import type { Biography, Brand, ContentStatus, NewsItem, Project } from "@/types/content";

function isShown(status: ContentStatus) {
  return status === "published" || process.env.NODE_ENV !== "production";
}

export function getVisibleProjects(): Project[] {
  return projects
    .filter((project) => isShown(project.status))
    .sort((left, right) => left.order - right.order);
}

export function getVisibleProject(slug: string): Project | undefined {
  return getVisibleProjects().find((project) => project.slug === slug);
}

export function getVisibleBiography(): Biography | null {
  return isShown(biographyDraft.status) ? biographyDraft : null;
}

export function getVisibleNews(): NewsItem[] {
  return news
    .filter((item) => isShown(item.status))
    .sort((left, right) => left.order - right.order);
}

export function getVisibleNewsItem(slug: string): NewsItem | undefined {
  return getVisibleNews().find((item) => item.slug === slug);
}

export function getRelatedNews(slugs: readonly string[] | undefined): NewsItem[] {
  if (!slugs) {
    return [];
  }

  return slugs.flatMap((slug) => {
    const item = getVisibleNewsItem(slug);
    return item ? [item] : [];
  });
}

export function getVisibleBrands(): Brand[] {
  return brands
    .filter((brand) => isShown(brand.status))
    .sort((left, right) => left.order - right.order);
}
