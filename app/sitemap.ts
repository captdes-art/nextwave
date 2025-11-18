import { MetadataRoute } from 'next'
import { getAllPosts, getAllCategories, getAllTags } from '@/app/blog/lib/posts'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nextwavewellness.com'

  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/category/sleep`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product/oura-ring`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product/eight-sleep-pod`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/product/whoop-4`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Blog posts
  const posts = getAllPosts()
  const blogPosts = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Categories
  const categories = getAllCategories()
  const categoryPages = categories.map((category) => ({
    url: `${baseUrl}/blog/category/${category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Tags
  const tags = getAllTags()
  const tagPages = tags.map((tag) => ({
    url: `${baseUrl}/blog/tag/${tag.toLowerCase().replace(/\s+/g, '-')}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }))

  return [...staticPages, ...blogPosts, ...categoryPages, ...tagPages]
}
