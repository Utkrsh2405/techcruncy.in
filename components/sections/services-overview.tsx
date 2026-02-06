"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Smartphone, Globe, TrendingUp, ArrowRight } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const services = [
  {
    icon: Smartphone,
    title: "App Development",
    description:
      "Native and cross-platform mobile applications that deliver seamless user experiences on iOS and Android.",
    href: "/services/app-development",
    color: "#6366f1",
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "High-performance websites built with modern frameworks, optimized for speed, SEO, and conversions.",
    href: "/services/web-development",
    color: "#06b6d4",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description:
      "Data-driven SEO, PPC, and content strategies that deliver measurable ROI and sustainable growth.",
    href: "/services/digital-marketing",
    color: "#6366f1",
  },
]

export function ServicesOverview() {
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
            className="text-sm font-semibold uppercase tracking-wider text-[#6366f1]"
          >
            What We Do
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-2 font-heading text-3xl font-bold text-foreground text-balance md:text-4xl"
          >
            End-to-End Digital Solutions
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            From concept to launch, we provide a full spectrum of IT and
            digital services to elevate your brand and accelerate growth.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 md:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={fadeUp}>
              <Link href={service.href} className="group block">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="glass h-full rounded-xl p-8 transition-all"
                >
                  <div
                    className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg"
                    style={{ backgroundColor: `${service.color}20` }}
                  >
                    <service.icon size={24} style={{ color: service.color }} />
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-foreground">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-medium text-[#6366f1] opacity-0 transition-opacity group-hover:opacity-100">
                    Learn More <ArrowRight size={14} />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
