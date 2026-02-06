"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { fadeUp, staggerContainer } from "@/lib/animations"

const projects = [
  {
    id: 1,
    title: "FinTech Mobile Banking App",
    category: "Mobile App",
    description:
      "A secure, feature-rich mobile banking solution with biometric authentication and real-time transactions.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    tags: ["React Native", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    category: "Web Development",
    description:
      "High-conversion e-commerce platform with AI-powered recommendations and seamless checkout experience.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "Stripe", "AI/ML"],
  },
  {
    id: 3,
    title: "Healthcare SaaS Dashboard",
    category: "SaaS",
    description:
      "Comprehensive patient management system with analytics, scheduling, and telehealth integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "TypeScript", "AWS"],
  },
  {
    id: 4,
    title: "Real Estate Marketplace",
    category: "Web App",
    description:
      "Modern property marketplace with 3D tours, mortgage calculators, and instant messaging.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    tags: ["Next.js", "Three.js", "MongoDB"],
  },
]

export function Portfolio() {
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
              Our Work
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl"
          >
            Projects We're Proud Of
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            Real solutions for real businesses. See how we've helped companies
            transform digitally.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:border-primary/50"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90" />
                
                <div className="absolute right-4 top-4">
                  <span className="rounded-full bg-primary/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-primary">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-primary p-4">
                    <ExternalLink className="text-primary-foreground" size={24} />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 font-heading text-2xl font-semibold text-foreground">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
