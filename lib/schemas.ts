import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.enum(["web", "app", "marketing", "other"], {
    required_error: "Please select a service",
  }),
  budget: z.enum(["5k-10k", "10k-25k", "25k-50k", "50k+", "not-sure"], {
    required_error: "Please select a budget range",
  }),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactFormData = z.infer<typeof contactFormSchema>

export const leadMagnetSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
})

export type LeadMagnetData = z.infer<typeof leadMagnetSchema>

export const seoAuditSchema = z.object({
  url: z.string().url("Please enter a valid URL"),
  email: z.string().email("Please enter a valid email address"),
})

export type SEOAuditData = z.infer<typeof seoAuditSchema>
