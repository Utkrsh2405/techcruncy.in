"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Clock, Calendar } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { fadeUp, staggerContainer } from "@/lib/animations"

export function BlogSection() {
  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Our Blog
            </span>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="mt-4 font-heading text-4xl font-bold text-balance text-foreground lg:text-5xl"
          >
            Latest Insights & Articles
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-pretty text-lg text-muted-foreground"
          >
            Stay ahead with expert insights on development, design, and digital
            marketing
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card transition-all duration-300 hover:border-primary/50"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="absolute right-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    {post.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="mb-3 font-heading text-xl font-semibold text-balance text-foreground transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>

                  <p className="mb-4 text-sm text-pretty leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                      Read More
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link href="/blog">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 rounded-lg border border-primary bg-transparent px-8 py-3 font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              View All Articles
              <ArrowRight size={18} />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
