import { PostSchema } from '@lib/schemas';
import { storyblokLoader } from '@lib/storyblokLoader';
import { defineCollection } from 'astro:content';

const posts = defineCollection({
  loader: storyblokLoader,
  schema: PostSchema,
});

export const collections = { posts };
