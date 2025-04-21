import { getStoryblokApi } from '@lib/getStoryblokApi';

export async function storyblokLoader() {
  const storyblokApi = getStoryblokApi();

  const { data } = await storyblokApi.get('cdn/stories', {
    content_type: 'post',
    version: 'draft',
  });

  return data.stories.map((post: any) => ({
    ...post,
    id: String(post.id),
  }));
}
