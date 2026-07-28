"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import GlowButton from "../ui/GlowButton";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed");
      }

      setSubmitted(true);

      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

    } catch (err) {
      console.error(err);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-[36px] border border-white/10 bg-slate-900/70 p-10 backdrop-blur-2xl"
    >

      {submitted ? (

        <div className="py-10 text-center">

          <CheckCircle2 className="mx-auto h-14 w-14 text-cyan-400" />

          <h3
  className="
    mt-6
    text-3xl
    font-bold
    text-white
  "
>
  You're All Set!
</h3>

<p
  className="
    mx-auto
    mt-4
    max-w-2xl
    text-lg
    leading-8
    text-slate-300
  "
>
  Thanks for reaching out.
  <br /><br />
  We've received your request, and one of our specialists will get back to you within 1 business day with the next steps.
  <br /><br />
  We look forward to helping you build smarter business systems.
</p>

        </div>

      ) : (

        <form onSubmit={handleSubmit} className="space-y-7">

          {/* Name */}

          <div>
            <label
  htmlFor="name"
  className="mb-3 block text-sm font-medium text-slate-300"
>
  Full Name
</label>

            <input
  id="name"
  name="name"
  required
  type="text"
              placeholder="John Smith"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white/[0.06]"
            />
          </div>

          {/* Company */}

          <div>
            <label
  htmlFor="company"
  className="mb-3 block text-sm font-medium text-slate-300"
>
  Business / Company
</label>

            <input
  id="company"
  name="company"
  required
  type="text"
              placeholder="ABC Manufacturing"
              value={formData.company}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  company: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white/[0.06]"
            />
          </div>

          {/* Email */}

          <div>
            <label
  htmlFor="email"
  className="mb-3 block text-sm font-medium text-slate-300"
>
  Email Address
</label>

            <input
  id="email"
  name="email"
  required
  type="email"
              placeholder="you@company.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white/[0.06]"
            />
          </div>

          {/* Phone */}

          <div>
            <label
  htmlFor="phone"
  className="mb-3 block text-sm font-medium text-slate-300"
>
  Phone Number (Optional)
</label>

            <input
  id="phone"
  name="phone"
  type="text"
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white/[0.06]"
            />
          </div>

          {/* Service */}

          <div>
            <label
  htmlFor="service"
  className="mb-3 block text-sm font-medium text-slate-300"
>
  I'm Interested In
</label>

            <select
  id="service"
  name="service"
  required
              value={formData.service}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  service: e.target.value,
                })
              }
              className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white outline-none transition-all duration-300 focus:border-cyan-400"
            >
              <option value="" disabled className="text-black">
                Select a service
              </option>

              <option className="text-black">
                Business Intelligence & Dashboards
              </option>

              <option className="text-black">
                Automation & Workflow Improvements
              </option>

              <option className="text-black">
                AI Solutions
              </option>

              <option className="text-black">
                System Integration
              </option>

              <option className="text-black">
  Business Assessment
</option>

              <option className="text-black">
                Business Consultation
              </option>

              <option className="text-black">
                Not Sure Yet
              </option>
            </select>
          </div>

          {/* Message */}

          <div>
            <label
  htmlFor="message"
  className="mb-3 block text-sm font-medium text-slate-300"
>
  Tell Us About Your Business
</label>

            <textarea
  id="message"
  name="message"
  required
              rows={6}
              placeholder="Tell us a little about your business, your current challenges and what you're hoping to achieve..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value,
                })
              }
              className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-white placeholder:text-slate-400 outline-none transition-all duration-300 focus:border-cyan-400 focus:bg-white/[0.06]"
            />
          </div>

          {/* Submit */}

          <GlowButton
  type="submit"
  disabled={loading}
>
  <Send className="mr-2 h-5 w-5" />

  {loading
    ? "Sending..."
    : "Request A Free Strategy Call"}
</GlowButton>

          {/* Bottom */}

          <div className="flex flex-wrap gap-6 pt-5 text-sm text-slate-400">
            <span>✓ No Spam</span>
            <span>✓ Free Consultation</span>
            <span>✓ Response Within 1 Business Day</span>
          </div>

        </form>

      )}

    </motion.div>
  );
}