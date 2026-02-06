"use client"

import { motion } from "framer-motion"
import { Zap, Code, Headphones } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const features = [
  {
    icon: Zap,
    title: "Agile Development",
    description:
      "We follow iterative sprints with continuous feedback loops, delivering features fast without compromising quality.",
  },
  {
    icon: Code,
    title: "SEO-First Code",
    description:
      "Every line of code is optimized for search engines. Server-rendered, semantic HTML, and structured data are baked in.",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Support",
    description:
      "Our team is always available to resolve issues, push updates, and ensure your digital products run flawlessly.",
  },
]

export function WhyUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]"
          >
            Why NexaByte
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl"
          >
            Built Different. Built Better.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeUp}
              className="glass relative overflow-hidden rounded-xl p-8"
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
              {/* Subtle glow */}
              <div className="pointer-events-none absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-[#06b6d4]/5 blur-3xl" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
