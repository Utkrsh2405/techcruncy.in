import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ServiceJsonLd } from "@/components/seo/json-ld"
import { MarketingContent } from "./content"

export const metadata: Metadata = {
  title: "Data-Driven Digital Marketing Services | SEO, PPC & Content | NexaByte",
  description:
    "ROI-focused digital marketing campaigns. Technical SEO audits, Google Ads management, content strategy, and performance analytics that drive real results.",
  keywords: [
    "digital marketing",
    "SEO services",
    "PPC management",
    "content marketing",
    "Google Ads",
    "social media marketing",
  ],
}

export default function DigitalMarketingPage() {
  return (
    <>
      <ServiceJsonLd
        name="Digital Marketing"
        description="Data-driven SEO, PPC, and content marketing strategies that deliver measurable ROI."
      />
      <Navbar />
      <main>
        <MarketingContent />
      </main>
      <Footer />
    </>
  )
}
