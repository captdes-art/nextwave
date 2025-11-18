export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  date: string
  category: string
  tags: string[]
  featuredImage: string
  featured?: boolean
  readingTime?: string
}

export interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  author: string
  date: string
  category: string
  tags: string[]
  featuredImage: string
  featured?: boolean
  readingTime?: string
}

export type Category =
  | 'Sleep Optimization'
  | 'Mental Wellness'
  | 'Nutrition & Gut Health'
  | 'Fitness Tracking'
  | 'Longevity & Anti-Aging'
  | 'Product Reviews'
  | 'Biohacking Tips'

export interface SearchResult {
  item: BlogPostMeta
  score?: number
}
