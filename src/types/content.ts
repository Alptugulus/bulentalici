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
  sourceNote: string;
  lead: string;
  sections: readonly BiographySection[];
  closing: string;
};

export type NewsItem = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  status: ContentStatus;
  order: number;
  listedOn: string;
  body: readonly string[];
  sourceName: string;
  sourceUrl: string;
};

export type Brand = {
  id: string;
  name: string;
  description: string;
  status: ContentStatus;
  order: number;
  sourceNote: string;
};
