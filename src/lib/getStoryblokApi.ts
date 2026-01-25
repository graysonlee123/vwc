import { apiPlugin, storyblokInit } from '@storyblok/js';
import { STORYBLOK_ACCESS_TOKEN } from 'astro:env/server';

export function getStoryblokApi() {
  const { storyblokApi } = storyblokInit({
    accessToken: STORYBLOK_ACCESS_TOKEN,
    use: [apiPlugin],
  });

  if (!storyblokApi) {
    throw new Error('storyblokApi is undefined');
  }

  return storyblokApi;
}
