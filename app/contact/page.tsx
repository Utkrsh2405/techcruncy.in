import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ContactContent } from "./content"

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Proposal | NexaByte",
  description:
    "Ready to start your next digital project? Contact NexaByte for a free consultation. We respond within 24 hours.",
  keywords: [
    "contact",
    "free proposal",
    "consultation",
    "hire developers",
    "digital agency contact",
  ],
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <ContactContent />
      </main>
      <Footer />
    </>
  )
}
