"use client"

import { motion } from "framer-motion"
import {
  Smartphone,
  Cpu,
  Layers,
  Rocket,
  Search,
  ShieldCheck,
  ChevronDown,
} from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"
import { useState } from "react"

const techStack = [
  "Flutter",
  "React Native",
  "Swift",
  "Kotlin",
  "Firebase",
  "Supabase",
  "TypeScript",
  "GraphQL",
]

const features = [
  {
    title: "iOS & Android Strategy",
    description:
      "We craft platform-specific strategies that maximize user retention and engagement. Our data-driven approach ensures your app reaches the right audience with the right experience on every device.",
    icon: Smartphone,
    reversed: false,
  },
  {
    title: "High-Performance UI/UX",
    description:
      "Every interaction is designed for buttery-smooth 60fps animations. We obsess over micro-interactions, loading states, and haptic feedback to create apps that feel truly native and delightful to use.",
    icon: Layers,
    reversed: true,
  },
]

const timeline = [
  {
    title: "Discovery",
    description:
      "Deep dive into your vision, market research, competitor analysis, and user persona mapping.",
  },
  {
    title: "Prototyping",
    description:
      "Interactive wireframes and high-fidelity mockups validated through user testing sessions.",
  },
  {
    title: "Development",
    description:
      "Agile sprints with weekly demos, code reviews, and continuous integration pipelines.",
  },
  {
    title: "Quality Assurance",
    description:
      "Automated and manual testing across devices, performance profiling, and security audits.",
  },
  {
    title: "Store Launch",
    description:
      "App Store and Play Store submission, ASO optimization, and post-launch monitoring.",
  },
]

const faqs = [
  {
    q: "How long does it take to build an app?",
    a: "A typical MVP takes 8-12 weeks depending on complexity. Full-featured apps with backend integrations usually take 16-24 weeks.",
  },
  {
    q: "Do you build native or cross-platform apps?",
    a: "We do both. For most projects, we recommend React Native or Flutter for cost efficiency. For performance-critical apps, we build native with Swift and Kotlin.",
  },
  {
    q: "What does the development process look like?",
    a: "We follow Agile methodology with 2-week sprints. You get weekly demos, access to a staging environment, and a dedicated project manager.",
  },
  {
    q: "Do you handle App Store submission?",
    a: "Yes, we manage the entire submission process for both the Apple App Store and Google Play Store, including ASO optimization.",
  },
]

export function AppDevContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden pt-20">
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6366f1]/10 blur-[100px]" />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto max-w-4xl px-6 text-center"
        >
          <motion.div
            variants={fadeUp}
            className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6366f1]/10"
          >
            <Smartphone size={32} className="text-[#6366f1]" />
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-4xl font-bold text-foreground text-balance md:text-5xl lg:text-6xl"
          >
            Native & Cross-Platform{" "}
            <span className="gradient-text">Mobile Excellence</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
          >
            We engineer mobile applications that combine beautiful design with
            rock-solid performance, delivering experiences users love to come
            back to.
          </motion.p>
        </motion.div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="overflow-hidden border-y border-white/10 py-6">
        <div className="flex animate-marquee gap-12">
          {[...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex flex-shrink-0 items-center gap-3"
            >
              <Cpu size={18} className="text-[#6366f1]" />
              <span className="whitespace-nowrap text-sm font-medium text-muted-foreground">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Zig-Zag Features */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-24"
          >
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className={`flex flex-col items-center gap-12 md:flex-row ${
                  feature.reversed ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 space-y-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#6366f1]/10">
                    <feature.icon size={24} className="text-[#6366f1]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center">
                  <div className="glass flex h-64 w-full items-center justify-center rounded-2xl">
                    <feature.icon
                      size={64}
                      className="text-[#6366f1]/30"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#06b6d4]">
                Our Process
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                From Idea to App Store
              </h2>
            </motion.div>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[#6366f1] via-[#06b6d4] to-[#6366f1]/20 md:left-1/2" />

              {timeline.map((step, i) => (
                <motion.div
                  key={step.title}
                  variants={fadeUp}
                  className={`relative mb-12 flex items-start gap-6 ${
                    i % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse md:text-right"
                  }`}
                >
                  <div className="hidden flex-1 md:block" />
                  <div className="relative z-10 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-[#6366f1] bg-background md:absolute md:left-1/2 md:-translate-x-1/2">
                    <span className="text-sm font-bold text-[#6366f1]">
                      {i + 1}
                    </span>
                  </div>
                  <div className="flex-1 pl-4 md:pl-0">
                    <h3 className="font-heading text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="mx-auto max-w-3xl px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="mb-12 text-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#6366f1]">
                FAQ
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold text-foreground md:text-4xl">
                Common Questions
              </h2>
            </motion.div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <motion.div key={faq.q} variants={fadeUp}>
                  <FAQItem question={faq.q} answer={faq.a} />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass overflow-hidden rounded-xl">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-6 text-left"
      >
        <span className="font-heading text-sm font-semibold text-foreground md:text-base">
          {question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} className="text-muted-foreground" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 leading-relaxed text-muted-foreground">
          {answer}
        </p>
      </motion.div>
    </div>
  )
}
