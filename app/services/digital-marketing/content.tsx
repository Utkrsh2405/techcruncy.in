"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  TrendingUp,
  Search,
  Target,
  FileText,
  Loader2,
  CheckCircle,
} from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { toast } from "sonner"

const tabs = [
  {
    id: "seo",
    label: "SEO",
    icon: Search,
    title: "Technical SEO & Organic Growth",
    points: [
      "Comprehensive technical audits covering crawlability, indexation, and site architecture",
      "Strategic backlink acquisition from high-authority domains in your industry",
      "Keyword research and mapping aligned with user intent and buying journey",
      "Core Web Vitals optimization and page speed improvements",
      "Local SEO and Google Business Profile management",
    ],
  },
  {
    id: "ppc",
    label: "PPC",
    icon: Target,
    title: "Paid Advertising & Retargeting",
    points: [
      "Google Ads campaign setup, optimization, and bid management",
      "Meta (Facebook & Instagram) Ads with advanced audience targeting",
      "Dynamic retargeting campaigns to recover abandoned users",
      "Landing page A/B testing for maximum conversion rates",
      "Weekly performance reports with actionable insights",
    ],
  },
  {
    id: "content",
    label: "Content",
    icon: FileText,
    title: "Content Strategy & Creation",
    points: [
      "SEO-optimized blog articles and thought leadership pieces",
      "High-converting copywriting for landing pages and funnels",
      "Video scripts and storyboards for social media content",
      "Email marketing sequences for lead nurturing",
      "Content calendar planning aligned with business goals",
    ],
  },
]

export function MarketingContent() {
  const [activeTab, setActiveTab] = useState("seo")
  const [auditUrl, setAuditUrl] = useState("")
  const [auditEmail, setAuditEmail] = useState("")
  const [auditSubmitted, setAuditSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const currentTab = tabs.find((t) => t.id === activeTab)!

  const handleAuditSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!auditUrl || !auditEmail) return
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1200))
    setAuditSubmitted(true)
    setLoading(false)
    toast.success("Audit request received! We will email you within 24 hours.")
    setAuditUrl("")
    setAuditEmail("")
  }

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
            <TrendingUp size={32} className="text-[#06b6d4]" />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl"
          >
            Data-Driven ROI.{" "}
            <span className="gradient-text">Not Just Vanometrics.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            We craft marketing campaigns that move the needle on the metrics
            that matter: revenue, qualified leads, and customer acquisition
            cost.
          </motion.p>
        </motion.div>
      </section>

      {/* Service Pillars Tabs */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6366f1]">
                Our Pillars
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Full-Spectrum Marketing
              </h2>
            </motion.div>

            {/* Tab buttons */}
            <motion.div
              variants={fadeUp}
              className="mb-8 flex justify-center gap-2"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? "bg-[#6366f1] text-foreground"
                      : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                  }`}
                >
                  <tab.icon size={16} />
                  {tab.label}
                </button>
              ))}
            </motion.div>

            {/* Tab content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-xl p-8"
            >
              <h3 className="mb-6 font-heading text-xl font-semibold text-foreground">
                {currentTab.title}
              </h3>
              <ul className="space-y-4">
                {currentTab.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <CheckCircle
                      size={18}
                      className="mt-0.5 flex-shrink-0 text-[#06b6d4]"
                    />
                    <span className="leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SEO Audit Lead Magnet */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass rounded-2xl p-8 text-center md:p-12"
          >
            <motion.div
              variants={fadeUp}
              className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#06b6d4]/10"
            >
              <Search size={28} className="text-[#06b6d4]" />
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-2xl font-bold text-foreground md:text-3xl"
            >
              Get a Free SEO Audit of Your Current Site
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-3 max-w-lg text-muted-foreground"
            >
              Enter your website URL and email below. Our team will analyze
              your site and send a comprehensive audit report within 24 hours.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8">
              {auditSubmitted ? (
                <div className="flex items-center justify-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
                  <CheckCircle size={20} className="text-emerald-400" />
                  <p className="text-sm font-medium text-emerald-400">
                    Audit request submitted! Check your email within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleAuditSubmit}
                  className="mx-auto flex max-w-md flex-col gap-3"
                >
                  <input
                    type="url"
                    placeholder="https://yoursite.com"
                    value={auditUrl}
                    onChange={(e) => setAuditUrl(e.target.value)}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#06b6d4] focus:outline-none focus:ring-1 focus:ring-[#06b6d4]"
                    required
                  />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={auditEmail}
                    onChange={(e) => setAuditEmail(e.target.value)}
                    className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#06b6d4] focus:outline-none focus:ring-1 focus:ring-[#06b6d4]"
                    required
                  />
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="flex items-center justify-center gap-2 rounded-lg bg-[#06b6d4] px-6 py-3 text-sm font-medium text-[#0f172a] transition-colors hover:bg-[#05a3be] disabled:opacity-70"
                  >
                    {loading ? (
                      <Loader2 size={16} className="animate-spin" />
                    ) : (
                      <Search size={16} />
                    )}
                    {loading ? "Submitting..." : "Request Free Audit"}
                  </motion.button>
                </form>
              )}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
