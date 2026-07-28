"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Learn how KoreVity collects, uses and protects your information when you use our website or contact our team.",
  alternates: {
    canonical: "/privacy",
  },
};
export default function PrivacyClient() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-8 py-20">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[760px]"
        >

          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              font-semibold
              tracking-[0.18em]
              text-cyan-300
            "
          >
            KOREVITY PRIVACY POLICY
          </span>

          {/* Title */}

          <h1
            className="
              mt-8
              text-5xl
              font-black
              tracking-tight
              text-white
              lg:text-6xl
            "
          >
            Privacy Policy
          </h1>

          <p className="mt-5 text-base text-slate-400">
            Last Updated: July 25, 2026
          </p>

          {/* Content */}

          <div className="mt-16 space-y-14 text-[17px] leading-9 text-slate-300">

            <section>

              <h2 className="text-3xl font-bold text-white">
                Introduction
              </h2>

              <p className="mt-6">
                KoreVity respects your privacy and is committed to protecting
                any personal information you share with us. This Privacy Policy
                explains how we collect, use and safeguard information when you
                interact with our website or services.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-white">
                Information We Collect
              </h2>

              <ul className="mt-6 list-disc space-y-4 pl-6">

                <li>Name and company information</li>

                <li>Email address and phone number</li>

                <li>Project enquiries submitted through our contact forms</li>

                <li>Website usage analytics and device information</li>

              </ul>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-white">
                How We Use Your Information
              </h2>

              <ul className="mt-6 list-disc space-y-4 pl-6">

                <li>Respond to enquiries</li>

                <li>Deliver requested services</li>

                <li>Improve our website and user experience</li>

                <li>Communicate important service updates</li>

              </ul>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-white">
                Data Protection
              </h2>

              <p className="mt-6">
                We implement industry-standard technical and organizational
                measures to protect your information from unauthorized access,
                disclosure, alteration or destruction.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-white">
                Third-Party Services
              </h2>

              <p className="mt-6">
                Our solutions may integrate with trusted third-party platforms
                including Microsoft, OpenAI, Google Cloud and other business
                technology providers. These services operate under their own
                privacy policies.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-white">
                Cookies
              </h2>

              <p className="mt-6">
                We may use cookies and similar technologies to improve website
                functionality, understand visitor behaviour and enhance the
                overall user experience.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-white">
                Your Rights
              </h2>

              <p className="mt-6">
                Depending on your jurisdiction, you may have the right to
                access, update or request deletion of your personal information.
                Contact us if you would like to exercise these rights.
              </p>

            </section>

            <section>

              <h2 className="text-3xl font-bold text-white">
                Contact
              </h2>

              <p className="mt-6">
                If you have any questions regarding this Privacy Policy,
                please contact us at:
              </p>

              <p className="mt-4 font-semibold text-cyan-300">
                hello@korevity.com
              </p>

            </section>

          </div>

          {/* Back Button */}

          <div className="mt-20">

            <Link
              href="/"
              className="
                inline-flex
                items-center
                gap-3
                rounded-full
                bg-gradient-to-r
                from-cyan-500
                to-blue-600
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-105
              "
            >

              <ArrowLeft className="h-5 w-5" />

              Back to Home

            </Link>

          </div>

        </motion.div>

      </div>

    </main>
  );
}