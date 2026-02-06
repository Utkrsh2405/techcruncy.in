"use client"

import { motion } from "framer-motion"
import {
  Lightbulb,
  Pencil,
  Code,
  Rocket,
  CheckCircle2,
  Headphones,
} from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const steps = [
  {
    icon: Lightbulb,
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business goals, target audience, and competitive landscape to create a winning strategy.",
    color: "text-[#6366f1]",
    bgColor: "bg-[#6366f1]/10",
  },
  {
    icon: Pencil,
    title: "Design & Prototype",
    description:
      "Our designers create intuitive, visually stunning interfaces with interactive prototypes for your feedback.",
    color: "text-[#06b6d4]",
    bgColor: "bg-[#06b6d4]/10",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "Expert developers build your solution using best practices, clean code, and cutting-edge technologies.",
    color: "text-[#8b5cf6]",
    bgColor: "bg-[#8b5cf6]/10",
  },
  {
    icon: CheckCircle2,
    title: "Testing & QA",
    description:
      "Rigorous testing across devices and browsers ensures a flawless, bug-free experience for your users.",
    color: "text-[#10b981]",
    bgColor: "bg-[#10b981]/10",
  },
  {
    icon: Rocket,
    title: "Launch & Deploy",
    description:
      "We handle the entire deployment process, ensuring a smooth launch with zero downtime and optimal performance.",
    color: "text-[#f59e0b]",
    bgColor: "bg-[#f59e0b]/10",
  },
  {
    icon: Headphones,
    title: "Support & Growth",
    description:
      "Post-launch support, monitoring, and continuous improvements to help your product evolve and scale.",
    color: "text-[#ec4899]",
    bgColor: "bg-[#ec4899]/10",
  },
]

export function Process() {
  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Process
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl"
          >
            How We Build Your Success
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            A proven, step-by-step approach that turns your vision into a
            powerful digital product
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-8 transition-all duration-300 hover:border-primary/50"
            >
              {/* Step Number */}
              <div className="absolute right-6 top-6 font-heading text-6xl font-bold text-white/5">
                {(index + 1).toString().padStart(2, "0")}
              </div>

              <div className="relative">
                <div
                  className={`mb-6 inline-flex rounded-xl ${step.bgColor} p-3`}
                >
                  <step.icon className={`${step.color}`} size={28} />
                </div>

                <h3 className="mb-3 font-heading text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
