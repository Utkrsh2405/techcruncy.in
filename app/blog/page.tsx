import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { BlogContent } from "./content"

export const metadata: Metadata = {
  title: "Blog | TechCrunchy",
  description:
    "Explore insights, tutorials, and industry trends in web development, app development, digital marketing, and technology.",
  keywords: [
    "tech blog",
    "web development blog",
    "app development tutorials",
    "digital marketing insights",
    "technology trends",
  ],
}

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        <BlogContent />
      </main>
      <Footer />
    </>
  )
}
