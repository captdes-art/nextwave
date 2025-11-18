import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import Header from '@/components/Header'
import AuthorCard from '@/components/blog/AuthorCard'
import CategoryBadge from '@/components/blog/CategoryBadge'
import TagList from '@/components/blog/TagList'
import ShareButtons from '@/components/blog/ShareButtons'
import RelatedPosts from '@/components/blog/RelatedPosts'
import TableOfContents from '@/components/blog/TableOfContents'
import ReadingProgress from '@/components/blog/ReadingProgress'
import NewsletterSignup from '@/components/blog/NewsletterSignup'
import Callout from '@/components/mdx/Callout'
import ImageWithCaption from '@/components/mdx/ImageWithCaption'
import { getPostBySlug, getAllSlugs, getRelatedPosts } from '@/app/blog/lib/posts'
import { formatDate } from '@/lib/utils/formatDate'
import { generateMetaTags, generateJSONLD } from '@/lib/utils/seo'
import Image from 'next/image'
import Link from 'next/link'

const components = {
  Callout,
  ImageWithCaption,
}

export async function generateStaticParams() {
  const slugs = getAllSlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: 'Post Not Found | Next Wave Wellness',
    }
  }

  return generateMetaTags(post)
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(post)
  const jsonLd = generateJSONLD(post)

  return (
    <div className="min-h-screen bg-white">
      <ReadingProgress />
      <Header />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-6 max-w-7xl mx-auto">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-teal-600">Blog</Link>
          <span className="mx-2">/</span>
          <Link
            href={`/blog/category/${post.category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}
            className="hover:text-teal-600"
          >
            {post.category}
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{post.title}</span>
        </nav>
      </section>

      {/* Article Header */}
      <section className="pb-8 px-6 max-w-4xl mx-auto">
        <CategoryBadge category={post.category} />
        <h1 className="text-5xl font-bold text-gray-900 mt-4 mb-6 leading-tight">
          {post.title}
        </h1>
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">{post.excerpt}</p>
        <AuthorCard
          author={post.author}
          date={formatDate(post.date)}
          readingTime={post.readingTime}
        />
      </section>

      {/* Featured Image */}
      <section className="pb-12 px-6 max-w-5xl mx-auto">
        <div className="relative w-full h-96 rounded-lg overflow-hidden">
          <Image
            src={post.featuredImage}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      </section>

      {/* Article Content with TOC */}
      <section className="pb-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Table of Contents - Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <TableOfContents />
          </aside>

          {/* Article Content */}
          <article className="lg:col-span-9 prose prose-lg max-w-none">
            <MDXRemote
              source={post.content}
              components={components}
              options={{
                mdxOptions: {
                  remarkPlugins: [remarkGfm],
                  rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight],
                },
              }}
            />
          </article>
        </div>
      </section>

      {/* Tags and Share Section */}
      <section className="pb-16 px-6 max-w-4xl mx-auto">
        <div className="border-t border-b border-gray-200 py-8">
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase">Tags</h3>
            <TagList tags={post.tags} />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-3 uppercase">Share this article</h3>
            <ShareButtons title={post.title} url={`/blog/${post.slug}`} />
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="pb-16 px-6 max-w-4xl mx-auto">
        <NewsletterSignup />
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div>
              <h4 className="font-bold text-white mb-4">Next Wave Wellness</h4>
              <p className="text-sm">Your trusted source for cutting-edge health and longevity technologies.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Explore</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/" className="hover:text-white">Home</Link></li>
                <li><Link href="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link href="/#products" className="hover:text-white">Products</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Categories</h4>
              <ul className="text-sm space-y-2">
                <li><Link href="/category/sleep" className="hover:text-white">Sleep Optimization</Link></li>
                <li><Link href="/blog/category/mental-wellness" className="hover:text-white">Mental Wellness</Link></li>
                <li><Link href="/blog/category/fitness-tracking" className="hover:text-white">Fitness Tracking</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">Legal</h4>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><Link href="/#contact" className="hover:text-white">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>© 2024 Next Wave Wellness. Information provided for educational purposes only.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
