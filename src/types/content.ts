export type ContentStatus = "draft" | "published";

export type ProjectExample =
  | "energy"
  | "reservation"
  | "sgk"
  | "tax"
  | "digital"
  | "events"
  | "room-revenue"
  | "transparency";

export type Project = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: ContentStatus;
  order: number;
  example: ProjectExample;
  closing?: string;
};

export type BiographySection = {
  id: string;
  label: string;
  paragraphs: readonly string[];
};

export type Biography = {
  id: string;
  status: ContentStatus;
  lead: string;
  sections: readonly BiographySection[];
  closing: string;
};

export type NewsImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: ContentStatus;
  order: number;
  listedOn: string;
  sourceName: string;
  sourceUrl: string;
  contentType: "image_only" | "text_and_image";
  images: readonly NewsImage[];
};

export type Brand = {
  id: string;
  name: string;
  description: string;
  status: ContentStatus;
  order: number;
};
