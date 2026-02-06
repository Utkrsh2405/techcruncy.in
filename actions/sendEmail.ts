"use server"

import nodemailer from "nodemailer"
import { contactFormSchema } from "@/lib/schemas"

export async function sendContactEmail(formData: {
  name: string
  email: string
  phone?: string
  service: string
  budget: string
  message: string
}) {
  // Server-side validation
  const result = contactFormSchema.safeParse(formData)
  if (!result.success) {
    return {
      success: false,
      error: "Invalid form data. Please check your inputs and try again.",
    }
  }

  const { name, email, phone, service, budget, message } = result.data

  const serviceLabels: Record<string, string> = {
    web: "Web Development",
    app: "App Development",
    marketing: "Digital Marketing",
    other: "Other",
  }

  const budgetLabels: Record<string, string> = {
    "5k-10k": "$5,000 - $10,000",
    "10k-25k": "$10,000 - $25,000",
    "25k-50k": "$25,000 - $50,000",
    "50k+": "$50,000+",
    "not-sure": "Not Sure Yet",
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8fafc;">
        <div style="background: linear-gradient(135deg, #6366f1, #06b6d4); padding: 30px; border-radius: 12px 12px 0 0;">
          <h1 style="color: white; margin: 0; font-size: 24px;">New Lead Received</h1>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0 0;">A new inquiry has been submitted via the NexaByte website.</p>
        </div>
        <div style="background: white; padding: 30px; border-radius: 0 0 12px 12px; border: 1px solid #e2e8f0; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #334155; width: 140px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #334155;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;"><a href="mailto:${email}" style="color: #6366f1;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #334155;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">${phone || "Not provided"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #334155;">Service Interest</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">${serviceLabels[service] || service}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; color: #334155;">Budget Range</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b;">${budgetLabels[budget] || budget}</td>
            </tr>
          </table>
          <div style="margin-top: 20px; padding: 16px; background: #f8fafc; border-radius: 8px;">
            <p style="font-weight: bold; color: #334155; margin: 0 0 8px 0;">Message</p>
            <p style="color: #64748b; margin: 0; line-height: 1.6;">${message}</p>
          </div>
        </div>
      </div>
    `

    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: process.env.SMTP_EMAIL,
      replyTo: email,
      subject: `New Lead: ${name} - ${serviceLabels[service] || service}`,
      html: htmlContent,
    })

    return { success: true }
  } catch (error) {
    console.error("SMTP Error:", error)
    return {
      success: false,
      error:
        "We were unable to send your message at this time. Please try again later or reach out to us directly via email.",
    }
  }
}
