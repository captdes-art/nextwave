import { getAllPosts } from '@/app/blog/lib/posts'
import RSS from 'rss'

export async function GET() {
  const posts = getAllPosts()

  const feed = new RSS({
    title: 'Next Wave Wellness Blog',
    description: 'Expert insights on biohacking, wellness technologies, and optimizing your health for peak performance',
    feed_url: 'https://nextwavewellness.com/rss.xml',
    site_url: 'https://nextwavewellness.com',
    language: 'en',
    pubDate: new Date().toUTCString(),
    copyright: `© ${new Date().getFullYear()} Next Wave Wellness`,
  })

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.excerpt,
      url: `https://nextwavewellness.com/blog/${post.slug}`,
      date: post.date,
      categories: [post.category, ...post.tags],
      author: post.author,
    })
  })

  return new Response(feed.xml({ indent: true }), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  })
}
