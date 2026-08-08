"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

export default function TermsClient() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-28 text-white">

        {/* Background Glow */}

        <div className="pointer-events-none absolute inset-0">

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
              Last Updated: August 7, 2026
            </p>

            <div className="mt-16 space-y-12 text-[17px] leading-9 text-slate-300">

              <section>
                <h2 className="text-2xl font-bold text-white">
                  1. Agreement
                </h2>

                <p className="mt-4">
                  Welcome to KoreVity. These Terms of Service govern your
                  access to and use of the KoreVity website and other public
                  materials made available through it.
                </p>

                <p className="mt-4">
                  By accessing or using this website, you agree to these Terms.
                  If you do not agree, please discontinue use of the website.
                </p>

                <p className="mt-4">
                  Where KoreVity provides services to a customer under a
                  separate proposal, order form, statement of work, master
                  services agreement, data-processing agreement or other written
                  contract, that agreement will govern the relevant customer
                  engagement and will take precedence where there is any
                  conflict with these website Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  2. About KoreVity
                </h2>

                <p className="mt-4">
                  KoreVity provides technology-enabled business solutions
                  designed to help organizations improve how they use business
                  knowledge, operational data, existing systems, automation and
                  intelligent decision-support capabilities.
                </p>

                <p className="mt-4">
                  Our services and platform capabilities may include:
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>Business knowledge and intelligence</li>
                  <li>AI-enabled decision support</li>
                  <li>Intelligent automation</li>
                  <li>Business intelligence and reporting</li>
                  <li>System and workflow integration</li>
                  <li>Operational intelligence</li>
                  <li>
                    Implementation, configuration and related professional
                    services
                  </li>
                </ul>

                <p className="mt-4">
                  Information presented on this website is provided for general
                  business and informational purposes and does not by itself
                  create a contractual customer relationship.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  3. Permitted Use
                </h2>

                <p className="mt-4">
                  You may use this website only for lawful business and
                  informational purposes.
                </p>

                <p className="mt-4">
                  You must not:
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>
                    Attempt to gain unauthorized access to the website, systems
                    or infrastructure
                  </li>
                  <li>
                    Interfere with or disrupt website functionality
                  </li>
                  <li>
                    Introduce malicious software, harmful code or automated
                    attacks
                  </li>
                  <li>
                    Attempt to bypass security or access controls
                  </li>
                  <li>
                    Scrape, copy or systematically extract website content
                    without authorization
                  </li>
                  <li>
                    Use the website in a way that violates applicable law or
                    the rights of others
                  </li>
                  <li>
                    Misrepresent your identity or relationship with KoreVity
                  </li>
                  <li>
                    Use KoreVity branding or materials in a misleading or
                    unauthorized manner
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  4. Intellectual Property
                </h2>

                <p className="mt-4">
                  Unless otherwise stated, the website and its contents,
                  including text, branding, graphics, designs, interfaces,
                  software elements, documentation and other materials, are
                  owned by or licensed to KoreVity.
                </p>

                <p className="mt-4">
                  KoreVity™, KBOM and related names, marks, product
                  concepts and branding may be protected intellectual property.
                </p>

                <p className="mt-4">
                  You may view and use publicly available website content for
                  legitimate informational and business purposes.
                </p>

                <p className="mt-4">
                  You may not reproduce, modify, distribute, sell, sublicense
                  or commercially exploit KoreVity materials without prior
                  written permission, except where permitted by applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  5. Website and Service Information
                </h2>

                <p className="mt-4">
                  We aim to keep the information on this website accurate and
                  current.
                </p>

                <p className="mt-4">
                  However, service descriptions, product capabilities,
                  integrations, availability, pricing, examples,
                  demonstrations and other information may change as KoreVity
                  develops its products and services.
                </p>

                <p className="mt-4">
                  Website content should not be treated as a binding offer,
                  warranty or contractual commitment unless expressly included
                  in a written agreement with KoreVity.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  6. Demonstrations, AI Outputs and Examples
                </h2>

                <p className="mt-4">
                  The website may include demonstrations, example outputs,
                  simulated workflows, business scenarios, analytics examples
                  or AI-generated content designed to illustrate KoreVity
                  capabilities.
                </p>

                <p className="mt-4">
                  Such examples are for demonstration and informational
                  purposes and may not represent live customer data or
                  guaranteed outcomes.
                </p>

                <p className="mt-4">
                  Business decisions should be based on appropriate review,
                  current information, customer-specific context and, where
                  necessary, professional advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  7. Client Engagements
                </h2>

                <p className="mt-4">
                  Any implementation, subscription, consulting engagement,
                  integration project or other paid service provided by
                  KoreVity will normally be governed by separate written terms.
                </p>

                <p className="mt-4">
                  These may include:
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>Proposals</li>
                  <li>Order forms</li>
                  <li>Statements of work</li>
                  <li>Subscription terms</li>
                  <li>Master services agreements</li>
                  <li>Service-level terms</li>
                  <li>Confidentiality agreements</li>
                  <li>Data-processing agreements</li>
                </ul>

                <p className="mt-4">
                  The applicable written customer agreement will define
                  matters such as scope, fees, deliverables, responsibilities,
                  support, data handling, intellectual property, liability and
                  termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  8. Customer Responsibilities
                </h2>

                <p className="mt-4">
                  Where relevant to a customer engagement, customers are
                  responsible for:
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>
                    Providing accurate information required for implementation
                  </li>
                  <li>
                    Ensuring they have authority to provide KoreVity access to
                    relevant systems and data
                  </li>
                  <li>
                    Maintaining appropriate credentials, permissions and access
                    controls
                  </li>
                  <li>
                    Reviewing outputs and decisions where human judgment is
                    appropriate
                  </li>
                  <li>
                    Complying with laws and obligations applicable to their own
                    business and data
                  </li>
                  <li>
                    Maintaining appropriate backups and business-continuity
                    practices for systems they control
                  </li>
                </ul>

                <p className="mt-4">
                  Additional responsibilities may be defined in the applicable
                  customer agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  9. Third-Party Services
                </h2>

                <p className="mt-4">
                  KoreVity solutions may connect with or rely on third-party
                  technology, infrastructure, software, APIs, data sources or
                  business systems selected or authorized by customers.
                </p>

                <p className="mt-4">
                  Third-party services are subject to their own availability,
                  terms, privacy practices and technical limitations.
                </p>

                <p className="mt-4">
                  KoreVity does not control third-party platforms and cannot
                  guarantee their uninterrupted availability, functionality or
                  continued compatibility.
                </p>

                <p className="mt-4">
                  Where a third-party service changes, restricts or
                  discontinues functionality, KoreVity may need to modify the
                  relevant integration or service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  10. Website Availability
                </h2>

                <p className="mt-4">
                  We aim to maintain reliable access to the KoreVity website
                  but do not guarantee uninterrupted or error-free
                  availability.
                </p>

                <p className="mt-4">
                  Access may occasionally be affected by:
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>Maintenance</li>
                  <li>Upgrades</li>
                  <li>Security measures</li>
                  <li>Hosting or infrastructure issues</li>
                  <li>Third-party service outages</li>
                  <li>Circumstances outside our reasonable control</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  11. Disclaimers
                </h2>

                <p className="mt-4">
                  The website and publicly available materials are provided on
                  an &quot;as available&quot; basis.
                </p>

                <p className="mt-4">
                  To the extent permitted by applicable law, KoreVity does not
                  make warranties regarding the completeness, accuracy,
                  reliability or suitability of general website information
                  for a particular business purpose.
                </p>

                <p className="mt-4">
                  Nothing on the website constitutes legal, financial,
                  accounting, tax or other regulated professional advice.
                </p>

                <p className="mt-4">
                  Any warranties applicable to paid KoreVity services will be
                  governed by the relevant customer agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  12. Limitation of Liability
                </h2>

                <p className="mt-4">
                  To the extent permitted by applicable law, KoreVity will not
                  be liable for indirect, incidental, special or consequential
                  losses arising solely from the use of, or inability to use,
                  this public website or its general informational content.
                </p>

                <p className="mt-4">
                  Nothing in these Terms excludes or limits liability that
                  cannot legally be excluded or limited.
                </p>

                <p className="mt-4">
                  Liability relating to paid customer services will be governed
                  by the applicable customer agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  13. Privacy and Data Protection
                </h2>

                <p className="mt-4">
                  Your use of this website is also subject to the KoreVity
                  Privacy Policy.
                </p>

                <p className="mt-4">
                  Where KoreVity processes customer data in connection with
                  paid services, additional privacy, security or
                  data-processing terms may apply under the relevant customer
                  agreement.
                </p>

                <p className="mt-4">
                  You can review our{" "}
                  <Link
                    href="/privacy"
                    className="font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                  >
                    Privacy Policy
                  </Link>
                  .
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  14. Links to Third-Party Websites
                </h2>

                <p className="mt-4">
                  The KoreVity website may contain links to third-party
                  websites or resources.
                </p>

                <p className="mt-4">
                  These links are provided for convenience or informational
                  purposes.
                </p>

                <p className="mt-4">
                  KoreVity does not control and is not responsible for the
                  content, availability, security or privacy practices of
                  third-party websites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  15. Changes to These Terms
                </h2>

                <p className="mt-4">
                  KoreVity may update these Terms from time to time to reflect
                  changes in our website, services, legal requirements or
                  business practices.
                </p>

                <p className="mt-4">
                  The latest version will be published on this page with an
                  updated revision date.
                </p>

                <p className="mt-4">
                  Continued use of the website after updated Terms become
                  effective constitutes acceptance of the revised Terms to the
                  extent permitted by applicable law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  16. Suspension or Restriction of Access
                </h2>

                <p className="mt-4">
                  KoreVity may restrict or suspend access to the website where
                  reasonably necessary to:
                </p>

                <ul className="mt-4 list-disc space-y-3 pl-6">
                  <li>Protect website security</li>
                  <li>Prevent misuse</li>
                  <li>Comply with legal requirements</li>
                  <li>Protect KoreVity, customers or other users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  17. Severability
                </h2>

                <p className="mt-4">
                  If any provision of these Terms is found to be invalid or
                  unenforceable, the remaining provisions will continue in
                  effect to the extent permitted by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  18. No Waiver
                </h2>

                <p className="mt-4">
                  A failure by KoreVity to enforce any provision of these Terms
                  does not waive our right to enforce that provision or any
                  other provision later.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  19. Governing Law
                </h2>

                <p className="mt-4">
                  These Terms will be governed by the laws applicable to
                  KoreVity&apos;s legal operating entity, subject to any
                  mandatory rights available under applicable law.
                </p>

                <p className="mt-4">
                  The specific governing law and dispute-resolution terms for
                  customer engagements may be defined separately in the
                  applicable customer agreement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white">
                  20. Contact
                </h2>

                <p className="mt-4">
                  If you have questions regarding these Terms of Service,
                  contact:
                </p>

                <p className="mt-4 font-semibold text-white">
                  KoreVity
                </p>

                <a
                  href="mailto:hello@korevity.com"
                  className="mt-2 inline-block font-semibold text-cyan-300 transition-colors hover:text-cyan-200"
                >
                  hello@korevity.com
                </a>
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

      <Footer />
    </>
  );
}