import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { Hero } from "@/components/sections/hero"
import { LeadMagnet } from "@/components/sections/lead-magnet"
import { ServicesOverview } from "@/components/sections/services-overview"
import { WhyUs } from "@/components/sections/why-us"
import { Testimonials } from "@/components/sections/testimonials"
import { Portfolio } from "@/components/sections/portfolio"
import { TechStack } from "@/components/sections/tech-stack"
import { Process } from "@/components/sections/process"
import { CTASection } from "@/components/sections/cta-section"
import { BlogSection } from "@/components/sections/blog"
import { OrganizationJsonLd } from "@/components/seo/json-ld"

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <Navbar />
      <main>
        <Hero />
        <ServicesOverview />
        <LeadMagnet />
        <WhyUs />
        <Portfolio />
        <TechStack />
        <Process />
        <Testimonials />
        <CTASection />
        <BlogSection />
      </main>
      <Footer />
    </>
  )
}
