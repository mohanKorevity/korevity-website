"use client";

import { motion } from "framer-motion";
import { Send, ShieldCheck } from "lucide-react";
import { useState } from "react";

export default function ContactForm() {

  const [submitted, setSubmitted] = useState(false);

const [loading, setLoading] = useState(false);

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
      throw new Error("Failed to send");
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
    alert("Something went wrong. Please try again.");
  } finally {
    setLoading(false);
  }
}


 return (
  <section className="relative py-24">
    <div className="mx-auto max-w-5xl px-6">

    <motion.div
          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          className="
            rounded-[40px]
            border
            border-cyan-500/20
            bg-gradient-to-br
            from-slate-900
            via-slate-950
            to-blue-950/40
            p-8
            backdrop-blur-xl
            lg:p-12
          "
        >



          <div className="mb-12 text-center">


            <h2
              className="
                text-4xl
                font-black
                text-white
                lg:text-5xl
              "
            >

              Tell Us About

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-300
                  via-white
                  to-blue-400
                  bg-clip-text
                  text-transparent
                "
              >
                {" "}Your Business
              </span>

            </h2>



            <p
              className="
                mx-auto
                mt-5
                max-w-2xl
                text-lg
                text-slate-400
              "
            >

              Share your challenges and our team will identify
              opportunities where AI, automation and business intelligence
              can create measurable improvements.

            </p>


          </div>




          {submitted ? (

            <div
              className="
                rounded-3xl
                border
                border-cyan-500/20
                bg-cyan-500/10
                p-10
                text-center
              "
            >

              <Send className="mx-auto h-12 w-12 text-cyan-300" />

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


          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >



            <div className="grid gap-6 md:grid-cols-2">


              <div>

                <label className="mb-2 block text-sm text-slate-300">
                  Name
                </label>

                <input
  required
  type="text"
  placeholder="Your name"
  value={formData.name}
  onChange={(e) =>
    setFormData({
      ...formData,
      name: e.target.value,
    })
  }
  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-slate-950
    px-5
    py-4
    text-white
    outline-none
    transition
    placeholder:text-slate-500
    focus:border-cyan-400
  "
/>

              </div>




              <div>

                <label className="mb-2 block text-sm text-slate-300">
                  Company
                </label>

                <input
  required
  type="text"
  placeholder="Company name"
  value={formData.company}
  onChange={(e) =>
    setFormData({
      ...formData,
      company: e.target.value,
    })
  }
  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-slate-950
    px-5
    py-4
    text-white
    outline-none
    transition
    placeholder:text-slate-500
    focus:border-cyan-400
  "
/>

              </div>


            </div>





            <div className="grid gap-6 md:grid-cols-2">


              <div>

                <label className="mb-2 block text-sm text-slate-300">
                  Email
                </label>


                <input
  required
  type="email"
  placeholder="business@email.com"
  value={formData.email}
  onChange={(e) =>
    setFormData({
      ...formData,
      email: e.target.value,
    })
  }
  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-slate-950
    px-5
    py-4
    text-white
    outline-none
    placeholder:text-slate-500
    focus:border-cyan-400
  "
/>


              </div>





              <div>

                <label className="mb-2 block text-sm text-slate-300">
                  Phone
                </label>


                <input
  type="tel"
  placeholder="+1 234 567 890"
  value={formData.phone}
  onChange={(e) =>
    setFormData({
      ...formData,
      phone: e.target.value,
    })
  }
  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-slate-950
    px-5
    py-4
    text-white
    outline-none
    placeholder:text-slate-500
    focus:border-cyan-400
  "
/>


              </div>


            </div>






            <div>

              <label className="mb-2 block text-sm text-slate-300">
                How can we help?
              </label>


              <select
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
                Business Consultation
              </option>

              <option className="text-black">
                Not Sure Yet
              </option>
            </select>
          </div>






            <textarea
  required
  rows={6}
  placeholder="Tell us about your business challenges..."
  value={formData.message}
  onChange={(e) =>
    setFormData({
      ...formData,
      message: e.target.value,
    })
  }
  className="
    w-full
    rounded-xl
    border
    border-white/10
    bg-slate-950
    px-5
    py-4
    text-white
    outline-none
    placeholder:text-slate-500
    focus:border-cyan-400
  "
/>





            <button
              type="submit"
              className="
                flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                py-4
                font-bold
                text-white
                shadow-xl
                shadow-cyan-500/20
                transition
                hover:scale-[1.02]
              "
            >

              {loading ? "Sending..." : "Send Message"}

              <Send className="h-5 w-5" />

            </button>





            <div
              className="
                flex
                items-center
                justify-center
                gap-2
                text-sm
                text-slate-500
              "
            >

              <ShieldCheck className="h-4 w-4" />

              Your information is kept confidential.

            </div>



          </form>

          )}

        </motion.div>

    </div>
  </section>
);
}