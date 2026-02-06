"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blog-data"
import { fadeUp, staggerContainer } from "@/lib/animations"

export function BlogContent() {
  return (
    <div className="min-h-screen bg-[#0f172a] pt-24">
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6366f1]/10 via-transparent to-[#8b5cf6]/10" />
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="mb-4 inline-block rounded-full bg-[#6366f1]/10 px-4 py-2 text-sm font-medium text-[#6366f1]">
              Our Blog
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              Insights & <span className="text-[#6366f1]">Ideas</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Stay updated with the latest trends in web development, app development, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-7xl px-6"
        >
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={fadeUp}
                whileHover={{ y: -8 }}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-[#1e293b]/50"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-[#6366f1] px-3 py-1 text-xs font-medium text-white">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="mb-3 font-heading text-xl font-bold text-foreground transition-colors group-hover:text-[#6366f1]">
                    {post.title}
                  </h2>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <Link
                    href={"/blog/" + post.slug}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#6366f1]"
                  >
                    Read More
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-r from-[#6366f1]/20 to-[#8b5cf6]/20 p-12 text-center"
          >
            <h2 className="mb-4 font-heading text-3xl font-bold text-foreground">
              Subscribe to Our Newsletter
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
              Get the latest articles delivered directly to your inbox.
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-lg border border-white/10 bg-[#1e293b] px-4 py-3 text-foreground"
              />
              <button
                type="submit"
                className="rounded-lg bg-[#6366f1] px-6 py-3 font-medium text-white"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
