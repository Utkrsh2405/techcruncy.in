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
    title: "Top Software Company in Jaipur: Your Complete Guide to Choosing the Right Tech Partner",
    excerpt:
      "Discover why Jaipur has become a thriving hub for software development companies and how to choose the perfect technology partner for your business needs in 2026.",
    author: "Rahul Sharma",
    date: "Feb 6, 2026",
    readTime: "10 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    slug: "software-company-in-jaipur",
  },
]
