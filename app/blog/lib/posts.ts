import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import { BlogPost, BlogPostMeta } from '@/lib/types/blog'

const postsDirectory = path.join(process.cwd(), 'content/blog')

export function getAllPosts(): BlogPostMeta[] {
  // Check if directory exists
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)

      const stats = readingTime(content)

      return {
        slug,
        title: data.title,
        excerpt: data.excerpt,
        author: data.author,
        date: data.date,
        category: data.category,
        tags: data.tags || [],
        featuredImage: data.featuredImage,
        featured: data.featured || false,
        readingTime: stats.text,
      } as BlogPostMeta
    })

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    const stats = readingTime(content)

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      content,
      author: data.author,
      date: data.date,
      category: data.category,
      tags: data.tags || [],
      featuredImage: data.featuredImage,
      featured: data.featured || false,
      readingTime: stats.text,
    } as BlogPost
  } catch (error) {
    return null
  }
}

export function getPostsByCategory(category: string): BlogPostMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter(
    (post) => post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string): BlogPostMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) =>
    post.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
  )
}

export function getFeaturedPosts(limit: number = 3): BlogPostMeta[] {
  const allPosts = getAllPosts()
  return allPosts.filter((post) => post.featured).slice(0, limit)
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPostMeta[] {
  const allPosts = getAllPosts()

  // Filter out current post and calculate relevance score
  const scoredPosts = allPosts
    .filter((post) => post.slug !== currentPost.slug)
    .map((post) => {
      let score = 0

      // Same category gets high score
      if (post.category === currentPost.category) {
        score += 10
      }

      // Shared tags get points
      const sharedTags = post.tags.filter((tag) =>
        currentPost.tags.includes(tag)
      )
      score += sharedTags.length * 5

      return { post, score }
    })

  // Sort by score and return top posts
  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map((item) => item.post)
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts()
  const categories = new Set(allPosts.map((post) => post.category))
  return Array.from(categories).sort()
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts()
  const tags = new Set(allPosts.flatMap((post) => post.tags))
  return Array.from(tags).sort()
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => fileName.replace(/\.mdx$/, ''))
}
