import { z } from 'astro:content';

const AssetSchema = z.object({
  id: z.number(),
  alt: z.string(),
  name: z.string(),
  title: z.string(),
  filename: z.string(),
});

const MarksSchema = z.object({
  type: z.enum(['italic']),
});

const BodyItemContentSchema = z.object({
  text: z.string(),
  type: z.enum(['text']),
  marks: z.array(MarksSchema).optional(),
});

const BodyItemSchema = z.object({
  type: z.enum(['paragraph']),
  content: z.array(BodyItemContentSchema),
});

const BodySchema = z.object({
  type: z.enum(['doc']),
  content: z.array(BodyItemSchema),
});

const ContentSchema = z.object({
  body: BodySchema,
  teaser: z.string(),
  hero_image: AssetSchema,
});

export const PostSchema = z.object({
  name: z.string(),
  created_at: z.string().datetime(),
  published_at: z.string().datetime().nullable(),
  updated_at: z.string().datetime(),
  uuid: z.string().uuid(),
  content: ContentSchema,
  slug: z.string(), // TODO: Validate slugs?
  full_slug: z.string(),
});
