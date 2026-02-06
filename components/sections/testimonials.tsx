"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "CEO, TechForge Solutions",
    content:
      "NexaByte transformed our outdated platform into a modern, high-performance application. Our page load times dropped by 60% and conversions increased by 35%.",
    rating: 5,
  },
  {
    name: "James Rodriguez",
    role: "CMO, GrowthLab",
    content:
      "The digital marketing team at NexaByte delivered exceptional results. Our organic traffic tripled within six months, and our cost per acquisition dropped significantly.",
    rating: 5,
  },
  {
    name: "Emily Chen",
    role: "Founder, HealthSync",
    content:
      "From the initial discovery call to the App Store launch, the NexaByte team was professional, responsive, and deeply technical. They built our health app on time and under budget.",
    rating: 5,
  },
  {
    name: "David Okafor",
    role: "CTO, FinEdge",
    content:
      "Their SEO-first approach to web development is a game-changer. We ranked on the first page of Google within three months of our site launch.",
    rating: 5,
  },
  {
    name: "Laura Petersen",
    role: "VP Marketing, CloudNova",
    content:
      "NexaByte's PPC management reduced our ad spend by 40% while increasing qualified leads by 55%. Truly data-driven marketing at its best.",
    rating: 5,
  },
  {
    name: "Michael Tanaka",
    role: "Product Lead, UrbanShift",
    content:
      "The cross-platform mobile app NexaByte built for us is flawless. Smooth animations, great UX, and zero crash reports since launch.",
    rating: 5,
  },
]

// Double the array for seamless infinite scroll
const doubled = [...testimonials, ...testimonials]

export function Testimonials() {
  return (
    <section className="overflow-hidden py-24">
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
            className="text-sm font-semibold uppercase tracking-wider text-[#6366f1]"
          >
            Client Success Stories
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl"
          >
            Trusted by Industry Leaders
          </motion.h2>
        </motion.div>
      </div>

      {/* Infinite scroll container */}
      <div className="relative mt-16">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex animate-marquee gap-6">
          {doubled.map((testimonial, i) => (
            <div
              key={`${testimonial.name}-${i}`}
              className="glass w-[350px] flex-shrink-0 rounded-xl p-6"
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
              </div>
              <p className="leading-relaxed text-muted-foreground">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="mt-4 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
