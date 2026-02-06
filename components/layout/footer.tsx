"use client"

import React from "react"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const serviceLinks = [
  { href: "/services/app-development", label: "App Development" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/contact", label: "Contact Us" },
]

const legalLinks = [
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
  { href: "#", label: "Cookie Policy" },
]

export function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      toast.success("Thanks for subscribing! We'll keep you updated.")
      setEmail("")
    }
  }

  return (
    <footer className="border-t border-white/10 bg-[#0a0f1a]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/images/logo.png"
                alt="TechCrunchy Logo"
                className="h-10 w-auto object-contain"
              />
              <span className="font-heading text-xl font-bold text-foreground">
                TechCrunchy
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Transforming ideas into digital reality. We build scalable apps,
              high-performance websites, and ROI-driven marketing campaigns.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#6366f1]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h3>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-[#6366f1]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-4 font-heading text-sm font-semibold uppercase tracking-wider text-foreground">
              Newsletter
            </h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Get the latest insights on tech and digital growth delivered to
              your inbox.
            </p>
            <form onSubmit={handleNewsletter} className="flex gap-2">
              <div className="relative flex-1">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-white/5 py-2.5 pl-10 pr-4 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="rounded-lg bg-[#6366f1] px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-[#5558e6]"
              >
                Join
              </motion.button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 TechCrunchy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
