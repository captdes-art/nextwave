import Header from '@/components/Header'
import BlogCard from '@/components/blog/BlogCard'
import { getPostsByCategory, getAllCategories } from '@/app/blog/lib/posts'
import { slugToTitle } from '@/lib/utils/generateSlug'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const categories = getAllCategories()
  return categories.map((category) => ({
    category: category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and'),
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryTitle = slugToTitle(category.replace(/and/g, '&'))

  return {
    title: `${categoryTitle} Articles | Next Wave Wellness Blog`,
    description: `Explore our latest articles about ${categoryTitle.toLowerCase()}. Expert insights and reviews from the Next Wave Wellness team.`,
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = await params
  const categoryTitle = slugToTitle(category.replace(/and/g, '&'))
  const posts = getPostsByCategory(categoryTitle)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-4 px-6 max-w-7xl mx-auto">
        <nav className="text-sm text-gray-600">
          <Link href="/" className="hover:text-teal-600">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-teal-600">Blog</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">{categoryTitle}</span>
        </nav>
      </section>

      {/* Header */}
      <section className="pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">{categoryTitle}</h1>
          <p className="text-xl text-gray-700">
            {posts.length} {posts.length === 1 ? 'article' : 'articles'} in this category
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

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
