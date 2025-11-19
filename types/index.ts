/**
 * Core type definitions for Next Wave Wellness
 */

// Product-related types
export interface Product {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  price: number
  priceLabel?: string
  rating: number
  reviewCount: number
  icon: string
  features: string[]
  benefits: string[]
  link: string
  imageUrl?: string
  affiliate?: boolean
}

export interface ProductFeature {
  title: string
  description: string
  icon?: string
}

export interface PricingTier {
  name: string
  price: number
  period?: string
  features: string[]
  highlighted?: boolean
  buttonText?: string
  buttonLink?: string
}

export interface ComparisonRow {
  feature: string
  thisProduct: string | boolean
  competitors: {
    name: string
    value: string | boolean
  }[]
}

// Category types
export interface Category {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  productCount?: number
  link: string
}

// Review & Testimonial types
export interface Testimonial {
  id: string
  author: string
  role?: string
  avatar?: string
  rating: number
  date: string
  content: string
  verified?: boolean
}

export interface Review {
  rating: number
  title: string
  pros: string[]
  cons: string[]
  summary: string
}

// FAQ types
export interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

// Blog & Article types
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  category: string
  date: string
  author: Author
  link: string
  icon?: string
  imageUrl?: string
  readTime?: string
}

export interface Author {
  name: string
  avatar?: string
  bio?: string
}

// Technology & Innovation types
export interface Technology {
  id: string
  name: string
  description: string
  icon: string
  category: string
}

// Navigation types
export interface NavLink {
  label: string
  href: string
  external?: boolean
}

// Metadata types
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonical?: string
}

// Component prop types
export interface HeaderProps {
  transparent?: boolean
  fixed?: boolean
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  disabled?: boolean
}

export interface CardProps {
  title: string
  description?: string
  icon?: string
  imageUrl?: string
  link?: string
  children?: React.ReactNode
  className?: string
}

// Form types
export interface NewsletterFormData {
  email: string
}

export interface ContactFormData {
  name: string
  email: string
  message: string
}
