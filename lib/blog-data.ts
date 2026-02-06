export interface BlogPost {
  id: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  slug: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "10 Essential UI/UX Design Principles for Modern Web Apps",
    excerpt:
      "Discover the fundamental design principles that separate good interfaces from great ones. Learn how to create intuitive, accessible experiences.",
    author: "Sarah Chen",
    date: "Jan 15, 2026",
    readTime: "8 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80",
    slug: "ui-ux-design-principles",
  },
  {
    id: "2",
    title: "React 19 and Next.js 16: What's New and Why It Matters",
    excerpt:
      "Explore the latest features in React 19 and Next.js 16, including the React Compiler, Server Actions improvements, and enhanced caching.",
    author: "Mike Rodriguez",
    date: "Jan 12, 2026",
    readTime: "10 min read",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=80",
    slug: "react-19-nextjs-16",
  },
  {
    id: "3",
    title: "AI-Powered Marketing: Tools That Actually Deliver ROI",
    excerpt:
      "Cut through the hype and discover AI marketing tools that provide measurable results. Real case studies with actionable insights.",
    author: "Emily Johnson",
    date: "Jan 10, 2026",
    readTime: "6 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=80",
    slug: "ai-powered-marketing-roi",
  },
  {
    id: "4",
    title: "Building Scalable Mobile Apps with React Native",
    excerpt:
      "A comprehensive guide to architecting React Native apps that scale. From state management to performance optimization.",
    author: "David Kim",
    date: "Jan 8, 2026",
    readTime: "12 min read",
    category: "Mobile",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
    slug: "scalable-react-native-apps",
  },
  {
    id: "5",
    title: "SEO in 2026: Voice Search and AI-Generated Content",
    excerpt:
      "How voice search and AI content are reshaping SEO strategies. Learn the tactics that work in the new search landscape.",
    author: "Lisa Thompson",
    date: "Jan 5, 2026",
    readTime: "7 min read",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?w=800&auto=format&fit=crop&q=80",
    slug: "seo-2026-voice-search",
  },
  {
    id: "6",
    title: "Serverless Architecture: When and Why to Use It",
    excerpt:
      "Understand the trade-offs of serverless computing. Real-world scenarios where serverless shines and where it doesn't.",
    author: "Alex Martinez",
    date: "Jan 3, 2026",
    readTime: "9 min read",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=80",
    slug: "serverless-architecture-guide",
  },
]
