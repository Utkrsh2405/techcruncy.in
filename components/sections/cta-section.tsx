"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#06b6d4]/10" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#6366f140_1px,transparent_1px),linear-gradient(to_bottom,#6366f140_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000,transparent)]" />

      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="glass relative overflow-hidden rounded-3xl border border-white/10 p-12 text-center lg:p-16"
        >
          {/* Sparkle Icon */}
          <motion.div
            variants={fadeUp}
            className="mb-6 inline-flex rounded-full bg-primary/10 p-4"
          >
            <Sparkles className="text-primary" size={32} />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mb-6 font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl"
          >
            Ready to Transform Your Digital Presence?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            Let's discuss your project and create a custom solution that drives
            real results. Get a free consultation and project estimate today.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Start Your Project
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <Link href="#portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-8 py-4 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                View Our Work
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#10b981]" />
              <span>Free Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#10b981]" />
              <span>No Obligation Quote</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#10b981]" />
              <span>Fast Response Time</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
