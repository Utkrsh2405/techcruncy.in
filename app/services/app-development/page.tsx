import type { Metadata } from "next"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import { ServiceJsonLd } from "@/components/seo/json-ld"
import { AppDevContent } from "./content"

export const metadata: Metadata = {
  title: "Custom Mobile App Development Services | iOS & Android | TechCrunchy",
  description:
    "Build high-performance native and cross-platform mobile applications with TechCrunchy. From iOS to Android, we deliver apps that users love.",
  keywords: [
    "mobile app development",
    "iOS development",
    "Android development",
    "React Native",
    "Flutter",
    "cross-platform apps",
  ],
}

export default function AppDevelopmentPage() {
  return (
    <>
      <ServiceJsonLd
        name="Mobile App Development"
        description="Custom native and cross-platform mobile app development for iOS and Android."
      />
      <Navbar />
      <main>
        <AppDevContent />
      </main>
      <Footer />
    </>
  )
}
