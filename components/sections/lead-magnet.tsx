"use client"

import React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Download, CheckCircle, Loader2 } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { toast } from "sonner"

export function LeadMagnet() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setLoading(true)
    // Simulate saving email
    await new Promise((r) => setTimeout(r, 1000))
    setSubmitted(true)
    setLoading(false)
    toast.success("Check your inbox! Your checklist is on its way.")
    setEmail("")
  }

  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/10 via-[#06b6d4]/10 to-[#6366f1]/10" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-gradient-to-r from-background via-transparent to-background" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 mx-auto max-w-3xl px-6 text-center"
      >
        <motion.div
          variants={fadeUp}
          className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6366f1]/30 bg-[#6366f1]/10 px-4 py-1.5"
        >
          <Download size={16} className="text-[#6366f1]" />
          <span className="text-sm font-medium text-[#6366f1]">
            Free Resource
          </span>
        </motion.div>
        <motion.h2
          variants={fadeUp}
          className="font-heading text-3xl font-bold text-foreground text-balance md:text-4xl"
        >
          Download Our 2026 Digital Growth Checklist
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mx-auto mt-4 max-w-xl text-muted-foreground"
        >
          A comprehensive 30-point checklist covering SEO, performance, UX,
          and marketing strategies to future-proof your digital presence.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-8">
          {submitted ? (
            <div className="flex items-center justify-center gap-3 rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-4">
              <CheckCircle size={20} className="text-emerald-400" />
              <p className="text-sm font-medium text-emerald-400">
                Success! Check your email for the download link.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                required
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-lg bg-[#6366f1] px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-[#5558e6] disabled:opacity-70"
              >
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Download size={16} />
                )}
                {loading ? "Processing..." : "Download Now"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
  )
}
