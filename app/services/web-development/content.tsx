"use client"

import { motion } from "framer-motion"
import {
  Globe,
  Code,
  Search,
  ImageIcon,
  Tag,
  Server,
  ExternalLink,
} from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const archFeatures = [
  {
    icon: Code,
    title: "Next.js App Router",
    description:
      "Server Components, streaming, and edge rendering for lightning-fast page loads and superior SEO.",
  },
  {
    icon: Server,
    title: "Headless CMS",
    description:
      "Integrate with any CMS. Content editors get a friendly interface while developers maintain full control.",
  },
  {
    icon: Globe,
    title: "Scalable Cloud Hosting",
    description:
      "Deployed on edge networks with automatic scaling. Your site handles traffic spikes without breaking a sweat.",
  },
]

const seoFeatures = [
  {
    icon: Tag,
    title: "Schema Markup",
    description:
      "JSON-LD structured data for rich search results. Products, articles, FAQs, and organization schemas included by default.",
  },
  {
    icon: Search,
    title: "Optimized Meta Tags",
    description:
      "Dynamic meta titles, descriptions, Open Graph images, and canonical URLs generated automatically for every page.",
  },
  {
    icon: ImageIcon,
    title: "Image Optimization",
    description:
      "Automatic WebP/AVIF conversion, lazy loading, responsive sizing, and CDN delivery for minimal LCP impact.",
  },
]

const portfolioItems = [
  { title: "E-Commerce Platform", category: "Retail" },
  { title: "SaaS Dashboard", category: "Technology" },
  { title: "Healthcare Portal", category: "Healthcare" },
  { title: "FinTech Landing", category: "Finance" },
  { title: "EdTech Platform", category: "Education" },
  { title: "Real Estate App", category: "Property" },
]

export function WebDevContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#06b6d4]/10 blur-[100px]" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#06b6d4]/10"
          >
            <Globe size={32} className="text-[#06b6d4]" />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl"
          >
            Websites That{" "}
            <span className="gradient-text">Load Fast & Rank High</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            We build high-performance web experiences with modern frameworks,
            optimized for Core Web Vitals, accessibility, and search engine
            visibility from day one.
          </motion.p>
        </motion.div>
      </section>

      {/* Architecture Focus */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">
                Architecture
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
                Built on Modern Foundations
              </h2>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3">
              {archFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#06b6d4]/10">
                    <feature.icon size={24} className="text-[#06b6d4]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Foundation */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6366f1]">
                SEO Foundation
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl">
                Every Site Ships SEO-Ready
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Search engine optimization is not an afterthought. Schema
                Markup, meta tags, and image optimization are built into every
                project from the start.
              </p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3">
              {seoFeatures.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="glass rounded-xl p-8"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#6366f1]/10">
                    <feature.icon size={24} className="text-[#6366f1]" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">
                Portfolio
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Recent Projects
              </h2>
            </motion.div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  className="group glass cursor-pointer overflow-hidden rounded-xl"
                >
                  <div
                    className="flex h-48 items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${
                        i % 2 === 0 ? "#6366f1" : "#06b6d4"
                      }15, ${i % 2 === 0 ? "#06b6d4" : "#6366f1"}10)`,
                    }}
                  >
                    <Globe
                      size={48}
                      className="text-muted-foreground/30 transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="flex items-center justify-between p-6">
                    <div>
                      <h3 className="font-heading text-sm font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {item.category}
                      </p>
                    </div>
                    <ExternalLink
                      size={16}
                      className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
