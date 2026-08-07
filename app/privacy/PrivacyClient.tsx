"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

import Navbar from "../components/sections/Navbar";
import Footer from "../components/sections/Footer";

export default function PrivacyClient() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-slate-950 pt-28 text-white">
        {/* Background Glow */}
        <div className="pointer-events-none absolute inset-0">
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
            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold tracking-[0.18em] text-cyan-300">
              KOREVITY PRIVACY POLICY
            </span>

            <h1 className="mt-8 text-5xl font-black tracking-tight text-white lg:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-5 text-base text-slate-400">
              Last Updated: August 7, 2026
            </p>

            <div className="mt-16 space-y-14 text-[17px] leading-9 text-slate-300">
              <section>
                <h2 className="text-3xl font-bold text-white">
                  Introduction
                </h2>

                <p className="mt-6">
                  KoreVity respects your privacy and is committed to handling
                  personal information responsibly.
                </p>

                <p className="mt-5">
                  This Privacy Policy explains how we collect, use, store and
                  protect personal information when you visit the KoreVity
                  website, contact us, communicate with us or interact with our
                  business services.
                </p>

                <p className="mt-5">
                  Where KoreVity provides services to an organization,
                  additional privacy, confidentiality, security or
                  data-processing terms may apply under the relevant customer
                  agreement.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Information We May Collect
                </h2>

                <p className="mt-6">
                  Depending on how you interact with KoreVity, we may collect:
                </p>

                <ul className="mt-6 list-disc space-y-4 pl-6">
                  <li>Name and contact information</li>
                  <li>Company name, job title and business details</li>
                  <li>Email address and telephone number</li>
                  <li>Information submitted through enquiry or contact forms</li>
                  <li>Communications you send to us</li>
                  <li>
                    Information relating to your business requirements or
                    service enquiries
                  </li>
                  <li>
                    Website usage information such as browser type, device
                    information, referring pages and interaction data
                  </li>
                  <li>
                    Technical information required for website security,
                    operation and diagnostics
                  </li>
                </ul>

                <p className="mt-6">
                  We do not intentionally request sensitive personal information
                  through the public website unless it is necessary for a
                  specific business purpose.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  How We Use Information
                </h2>

                <p className="mt-6">We may use information to:</p>

                <ul className="mt-6 list-disc space-y-4 pl-6">
                  <li>Respond to enquiries and requests</li>
                  <li>
                    Arrange consultations, demonstrations or business
                    discussions
                  </li>
                  <li>
                    Evaluate whether KoreVity services are appropriate for an
                    organization
                  </li>
                  <li>Provide and support requested services</li>
                  <li>
                    Communicate regarding our services or an existing business
                    relationship
                  </li>
                  <li>Operate, secure and improve our website</li>
                  <li>Understand how visitors interact with our website</li>
                  <li>Maintain business and administrative records</li>
                  <li>Meet applicable legal and regulatory obligations</li>
                  <li>
                    Protect KoreVity, our customers and users against misuse,
                    fraud or security threats
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Legal Basis for Processing
                </h2>

                <p className="mt-6">
                  Where applicable privacy law requires a legal basis, we may
                  process personal information because:
                </p>

                <ul className="mt-6 list-disc space-y-4 pl-6">
                  <li>You have provided consent</li>
                  <li>
                    Processing is necessary to respond to your request or enter
                    into a business relationship
                  </li>
                  <li>Processing is necessary to perform a contract</li>
                  <li>
                    We have a legitimate business interest that does not
                    override your rights
                  </li>
                  <li>We are required to comply with a legal obligation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Business and Customer Data
                </h2>

                <p className="mt-6">
                  KoreVity solutions may connect with customer-approved business
                  systems, documents, workflows, data sources and third-party
                  platforms.
                </p>

                <p className="mt-5">
                  Customer information processed through KoreVity services is
                  handled according to the applicable customer agreement,
                  authorized configuration, access permissions and any relevant
                  data-processing terms.
                </p>

                <p className="mt-5">
                  KoreVity does not claim ownership of a customer&apos;s business
                  data.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Service Providers and Third Parties
                </h2>

                <p className="mt-6">
                  We may use trusted service providers to support activities
                  such as:
                </p>

                <ul className="mt-6 list-disc space-y-4 pl-6">
                  <li>Website hosting and infrastructure</li>
                  <li>Communications</li>
                  <li>Analytics</li>
                  <li>Scheduling</li>
                  <li>Cloud infrastructure</li>
                  <li>Business software integrations</li>
                  <li>AI or automation services where applicable</li>
                </ul>

                <p className="mt-6">
                  These providers may process information only where required to
                  provide their services and are subject to their own contractual
                  and privacy obligations.
                </p>

                <p className="mt-5">
                  KoreVity services may also integrate with third-party systems
                  selected or authorized by customers. Use of those systems may
                  also be governed by the third party&apos;s privacy policy and the
                  customer&apos;s own agreements with that provider.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Cookies and Analytics
                </h2>

                <p className="mt-6">
                  Our website may use cookies or similar technologies required
                  for website functionality, security, performance and
                  analytics.
                </p>

                <p className="mt-5">
                  Where required by applicable law, consent will be requested
                  before using non-essential cookies or similar tracking
                  technologies.
                </p>

                <p className="mt-5">
                  Browser settings may also allow you to control or disable
                  certain cookies.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Data Retention
                </h2>

                <p className="mt-6">
                  We retain personal information only for as long as reasonably
                  necessary for the purpose for which it was collected,
                  including responding to enquiries, maintaining business
                  records, fulfilling contractual obligations, resolving
                  disputes and meeting legal requirements.
                </p>

                <p className="mt-5">
                  Retention periods may vary depending on the type of information
                  and the nature of our relationship with you.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Data Security
                </h2>

                <p className="mt-6">
                  We use reasonable technical and organizational safeguards
                  designed to protect information against unauthorized access,
                  loss, alteration, disclosure or misuse.
                </p>

                <p className="mt-5">
                  No internet-based system or method of electronic storage can
                  be guaranteed to be completely secure.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  International Processing
                </h2>

                <p className="mt-6">
                  Because KoreVity may work with customers and technology
                  providers in different countries, information may be processed
                  or stored outside the country in which it was originally
                  collected.
                </p>

                <p className="mt-5">
                  Where required, appropriate contractual or legal safeguards
                  will be used for international transfers of personal
                  information.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Your Privacy Rights
                </h2>

                <p className="mt-6">
                  Depending on your location and applicable law, you may have
                  rights relating to your personal information, including the
                  right to:
                </p>

                <ul className="mt-6 list-disc space-y-4 pl-6">
                  <li>Request access to information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of certain information</li>
                  <li>Object to or restrict certain processing</li>
                  <li>
                    Withdraw consent where processing is based on consent
                  </li>
                  <li>
                    Request information about how your data is processed
                  </li>
                </ul>

                <p className="mt-6">
                  Some rights may be subject to legal exceptions or verification
                  requirements.
                </p>

                <p className="mt-5">
                  To make a privacy request, contact us using the details below.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Children&apos;s Privacy
                </h2>

                <p className="mt-6">
                  KoreVity&apos;s website and business services are intended for
                  organizations and business users and are not directed toward
                  children.
                </p>

                <p className="mt-5">
                  We do not knowingly collect personal information from children
                  through the public website.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Changes to This Privacy Policy
                </h2>

                <p className="mt-6">
                  We may update this Privacy Policy from time to time to reflect
                  changes to our services, technology, legal requirements or
                  business practices.
                </p>

                <p className="mt-5">
                  The latest version will be published on this page with an
                  updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-3xl font-bold text-white">
                  Contact
                </h2>

                <p className="mt-6">
                  For questions regarding this Privacy Policy or requests
                  relating to your personal information, contact:
                </p>

                <p className="mt-5 font-semibold text-white">
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

            <div className="mt-20">
              <Link
                href="/"
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105"
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