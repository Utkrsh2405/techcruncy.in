import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ServiceJsonLd } from "@/components/seo/json-ld"
import { WebDevContent } from "./content"

export const metadata: Metadata = {
  title: "High-Performance Web Development Services | Next.js & SEO | NexaByte",
  description:
    "Websites that load fast and rank high. Built with Next.js, headless CMS, and scalable cloud hosting. Every site ships with Schema Markup and Core Web Vitals optimization.",
  keywords: [
    "web development",
    "Next.js",
    "SEO",
    "headless CMS",
    "performance optimization",
    "responsive design",
  ],
}

export default function WebDevelopmentPage() {
  return (
    <>
      <ServiceJsonLd
        name="Web Development"
        description="High-performance websites that load fast and rank high, built with Next.js and modern web technologies."
      />
      <Navbar />
      <main>
        <WebDevContent />
      </main>
      <Footer />
    </>
  )
}
