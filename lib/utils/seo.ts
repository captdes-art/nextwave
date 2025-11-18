import { BlogPost } from '../types/blog'

export function generateMetaTags(post: BlogPost, baseUrl: string = 'https://nextwavewellness.com') {
  const url = `${baseUrl}/blog/${post.slug}`
  const imageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `${baseUrl}${post.featuredImage}`

  return {
    title: `${post.title} | Next Wave Wellness`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [imageUrl],
    },
  }
}

export function generateJSONLD(post: BlogPost, baseUrl: string = 'https://nextwavewellness.com') {
  const url = `${baseUrl}/blog/${post.slug}`
  const imageUrl = post.featuredImage.startsWith('http')
    ? post.featuredImage
    : `${baseUrl}${post.featuredImage}`

  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Next Wave Wellness',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  }
}

export function generateBreadcrumbJSONLD(
  post: BlogPost,
  baseUrl: string = 'https://nextwavewellness.com'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Blog',
        item: `${baseUrl}/blog`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: post.category,
        item: `${baseUrl}/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-')}`,
      },
      {
        '@type': 'ListItem',
        position: 4,
        name: post.title,
        item: `${baseUrl}/blog/${post.slug}`,
      },
    ],
  }
}
