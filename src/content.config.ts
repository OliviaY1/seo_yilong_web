import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    titleZh: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    excerptZh: z.string(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    tagsZh: z.array(z.string()).default([]),
  }),
});

export const collections = { articles };
