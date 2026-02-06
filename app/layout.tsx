import React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import { Toaster } from "sonner"
import "./globals.css"
import { OrganizationJsonLd, LocalBusinessJsonLd } from "@/components/seo/json-ld"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
})

export const metadata: Metadata = {
  title: "TechCrunchy | Best IT Solutions & Digital Agency",
  description:
    "We build scalable apps, high-performance websites, and ROI-driven marketing campaigns. Your trusted 360-degree IT & digital partner.",
  keywords: [
    "IT solutions",
    "digital agency",
    "web development",
    "app development",
    "digital marketing",
    "SEO",
  ],
  openGraph: {
    title: "TechCrunchy | Best IT Solutions & Digital Agency",
    description:
      "We build scalable apps, high-performance websites, and ROI-driven marketing campaigns.",
    type: "website",
  },
}

export const viewport: Viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable}`}>
      <body className="font-sans antialiased">
        {children}
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: "hsl(222 47% 14%)",
              border: "1px solid hsl(217 33% 20%)",
              color: "hsl(210 40% 98%)",
            },
          }}
        />
      </body>
    </html>
  )
}
