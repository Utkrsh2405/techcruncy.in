"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Loader2, Send } from "lucide-react"
import { toast } from "sonner"
import { contactFormSchema, type ContactFormData } from "@/lib/schemas"
import { sendContactEmail } from "@/actions/sendEmail"
import { fadeUp, staggerContainer } from "@/lib/animations"

export function ContactContent() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    try {
      const result = await sendContactEmail(data)
      if (result.success) {
        toast.success("Message Sent Successfully! We will be in touch shortly.")
        reset()
      } else {
        toast.error(result.error || "Something went wrong. Please try again.")
      }
    } catch {
      toast.error("An unexpected error occurred. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="relative min-h-screen pt-28 pb-20">
      <div className="pointer-events-none absolute left-1/4 top-20 h-[400px] w-[400px] rounded-full bg-[#6366f1]/5 blur-[100px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-20 h-[400px] w-[400px] rounded-full bg-[#06b6d4]/5 blur-[100px]" />

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mb-16 text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-wider text-[#6366f1]"
          >
            Get In Touch
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-2 font-heading text-4xl font-bold text-foreground text-balance md:text-5xl"
          >
            Let&apos;s Build Something{" "}
            <span className="gradient-text">Great Together</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-muted-foreground"
          >
            Fill out the form below and our team will get back to you within
            24 hours with a tailored proposal for your project.
          </motion.p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Left: Contact Info + Map */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 lg:col-span-2"
          >
            <motion.div variants={fadeUp} className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#6366f1]/10">
                  <MapPin size={20} className="text-[#6366f1]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Office
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    123 Innovation Drive, Suite 400
                    <br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#06b6d4]/10">
                  <Phone size={20} className="text-[#06b6d4]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Phone
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    +1 (800) 555-0199
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-[#6366f1]/10">
                  <Mail size={20} className="text-[#6366f1]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    Email
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    hello@nexabyte.dev
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              variants={fadeUp}
              className="overflow-hidden rounded-xl border border-white/10"
            >
              <iframe
                title="NexaByte office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019789879959!2d-122.39941248468168!3d37.78994197975663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807f619a0a01%3A0x7f1ac9d3a3b0e849!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass space-y-6 rounded-2xl p-8"
            >
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Phone <span className="text-xs text-muted-foreground">(optional)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {/* Service Interest */}
                <div>
                  <label
                    htmlFor="service"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Service Interest <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="service"
                    {...register("service")}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#0f172a] text-muted-foreground">
                      Select a service
                    </option>
                    <option value="web" className="bg-[#0f172a]">Web Development</option>
                    <option value="app" className="bg-[#0f172a]">App Development</option>
                    <option value="marketing" className="bg-[#0f172a]">Digital Marketing</option>
                    <option value="other" className="bg-[#0f172a]">Other</option>
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Budget */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-1.5 block text-sm font-medium text-foreground"
                  >
                    Budget Range <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="budget"
                    {...register("budget")}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                    defaultValue=""
                  >
                    <option value="" disabled className="bg-[#0f172a] text-muted-foreground">
                      Select budget range
                    </option>
                    <option value="5k-10k" className="bg-[#0f172a]">$5,000 - $10,000</option>
                    <option value="10k-25k" className="bg-[#0f172a]">$10,000 - $25,000</option>
                    <option value="25k-50k" className="bg-[#0f172a]">$25,000 - $50,000</option>
                    <option value="50k+" className="bg-[#0f172a]">$50,000+</option>
                    <option value="not-sure" className="bg-[#0f172a]">Not Sure Yet</option>
                  </select>
                  {errors.budget && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.budget.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-foreground"
                >
                  Message <span className="text-red-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#6366f1] focus:outline-none focus:ring-1 focus:ring-[#6366f1]"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#6366f1] px-8 py-3.5 font-medium text-foreground shadow-lg shadow-[#6366f1]/25 transition-colors hover:bg-[#5558e6] disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
