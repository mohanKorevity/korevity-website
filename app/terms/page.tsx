"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute inset-0">

        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />

        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[160px]" />

      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-8 py-24">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
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
            KOREVITY TERMS OF SERVICE
          </span>

          <h1 className="mt-8 text-5xl font-black text-white lg:text-6xl">
            Terms of Service
          </h1>

          <p className="mt-4 text-slate-400">
            Last Updated: July 25, 2026
          </p>

          <div className="mt-16 space-y-12 text-slate-300 leading-8">

            <section>
              <h2 className="text-2xl font-bold text-white">
                1. Agreement
              </h2>

              <p className="mt-4">
                Welcome to KoreVity. By accessing or using this website,
                you agree to comply with these Terms of Service. If you
                do not agree with these terms, please discontinue use of
                this website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                2. Our Services
              </h2>

              <p className="mt-4">
                KoreVity provides Business Intelligence, AI Automation,
                Dashboard Development, System Integration and Business
                Consulting services. Information presented on this website
                is intended for general informational purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                3. Website Usage
              </h2>

              <ul className="mt-4 list-disc space-y-3 pl-6">
                <li>Use this website only for lawful purposes.</li>
                <li>Do not attempt unauthorized access.</li>
                <li>Do not interfere with website functionality.</li>
                <li>Do not distribute malicious software.</li>
                <li>Do not copy website content without permission.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                4. Intellectual Property
              </h2>

              <p className="mt-4">
                All branding, graphics, text, software, designs and
                materials displayed on this website are the property of
                KoreVity unless otherwise stated. Unauthorized use,
                reproduction or distribution is prohibited.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                5. Service Information
              </h2>

              <p className="mt-4">
                While we strive to keep all information accurate and up to
                date, KoreVity makes no guarantee that information on this
                website will always be complete, current or error-free.
                Service offerings and availability may change without
                prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                6. Client Engagement
              </h2>

              <p className="mt-4">
                Any consulting or implementation project undertaken with
                KoreVity will be governed by a separate written agreement.
                Those agreements take precedence over these website terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                7. Third-Party Services
              </h2>

              <p className="mt-4">
                Our solutions may integrate with third-party platforms
                including Microsoft, OpenAI, Google and other cloud
                providers. KoreVity is not responsible for changes,
                outages or limitations imposed by third-party services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                8. Limitation of Liability
              </h2>

              <p className="mt-4">
                KoreVity shall not be liable for indirect, incidental,
                consequential or business losses arising from the use of
                this website or its contents, except where required by
                applicable law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                9. Website Availability
              </h2>

              <p className="mt-4">
                We aim to keep this website available at all times.
                However, temporary interruptions may occur due to
                maintenance, updates or unforeseen technical issues.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                10. Privacy
              </h2>

              <p className="mt-4">
                Your use of this website is also governed by our Privacy
                Policy, which explains how personal information is
                collected and used.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                11. Changes to These Terms
              </h2>

              <p className="mt-4">
                KoreVity may update these Terms of Service periodically.
                Continued use of this website after updates constitutes
                acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                12. Governing Law
              </h2>

              <p className="mt-4">
                These Terms shall be governed by the applicable laws of
                the jurisdiction in which KoreVity operates.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white">
                13. Contact
              </h2>

              <p className="mt-4">
                If you have questions regarding these Terms of Service,
                please contact us at:
              </p>

              <p className="mt-3 font-semibold text-cyan-300">
                hello@korevity.com
              </p>
            </section>

          </div>

          {/* Back Home Button */}

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
                transition
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