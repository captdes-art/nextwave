import { BlogPost } from "@/types"

export const blogPosts: BlogPost[] = [
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
    icon: "🧘‍♀️",
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
    icon: "💍",
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
    icon: "🛏️",
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
    icon: "⌚",
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
