import { BlogPost } from "@/types"

export const blogPosts: BlogPost[] = [
  {
    id: "red-light-therapy-benefits",
    title: "The Science-Backed Benefits of Red Light Therapy: A Complete Guide",
    excerpt: "Elite athletes use it for recovery, dermatologists recommend it for skin health. Discover the science behind red light therapy and which devices deliver results.",
    category: "Longevity & Recovery",
    date: "Nov 20, 2025",
    author: {
      name: "Next Wave Wellness Research Team",
    },
    link: "/blog/red-light-therapy-benefits",
    icon: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop",
    readTime: "15 min read",
  },
  {
    id: "muse-s-review",
    title: "Muse S: Your Mind's Best Friend",
    excerpt: "OMG, this is seriously THE breakthrough in meditation and sleep technology! Real-time brainwave feedback that actually works.",
    category: "Brain Tech",
    date: "Nov 18, 2025",
    author: {
      name: "Sarah Chen",
      bio: "Health & Wellness Journalist",
    },
    link: "/article/muse-s-headband-review",
    icon: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop",
    readTime: "8 min read",
  },
  {
    id: "oura-ring-review",
    title: "Oura Ring Gen 3 Review",
    excerpt: "Comprehensive review of the latest Oura Ring with detailed analysis of sleep tracking, heart rate variability, and readiness scores.",
    category: "Wearables",
    date: "Nov 15, 2025",
    author: {
      name: "Sarah Chen",
    },
    link: "/product/oura-ring",
    icon: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=800&h=600&fit=crop",
    readTime: "10 min read",
  },
  {
    id: "eight-sleep-deep-dive",
    title: "Eight Sleep Pod Deep Dive",
    excerpt: "Is temperature-controlled sleep worth the investment? We tested the Eight Sleep Pod and break down all the science behind it.",
    category: "Sleep Tech",
    date: "Nov 12, 2025",
    author: {
      name: "Sarah Chen",
    },
    link: "/product/eight-sleep-pod",
    icon: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    readTime: "12 min read",
  },
  {
    id: "whoop-4-elite",
    title: "WHOOP 4.0: Elite Athlete Tool",
    excerpt: "What makes WHOOP different from other fitness trackers? We explore the recovery metrics and strain analysis that athletes love.",
    category: "Fitness",
    date: "Nov 10, 2025",
    author: {
      name: "Sarah Chen",
    },
    link: "/product/whoop-4",
    icon: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=800&h=600&fit=crop",
    readTime: "9 min read",
  },
]

export const getRecentPosts = (limit?: number) => {
  const sorted = [...blogPosts].sort((a, b) =>
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  return limit ? sorted.slice(0, limit) : sorted
}

export const getPostsByCategory = (category: string) => {
  return blogPosts.filter((post) => post.category === category)
}
