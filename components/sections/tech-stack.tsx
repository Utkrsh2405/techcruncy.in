"use client"

import { motion } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animations"

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "GraphQL", category: "API" },
  { name: "Redis", category: "Cache" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "React Native", category: "Mobile" },
  { name: "Firebase", category: "Backend" },
  { name: "Supabase", category: "Backend" },
]

export function TechStack() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Technology
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl"
          >
            Cutting-Edge Tech Stack
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            We leverage the most powerful, modern technologies to build scalable
            and performant solutions
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              whileHover={{ scale: 1.1, y: -5 }}
              className="group relative"
            >
              <div className="glass relative rounded-xl border border-white/10 px-6 py-4 transition-all duration-300 hover:border-primary/50 hover:bg-primary/5">
                <span className="relative z-10 font-medium text-foreground">
                  {tech.name}
                </span>
                <span className="absolute -top-2 right-2 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  {tech.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
