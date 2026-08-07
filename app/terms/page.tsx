import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms of Service | KoreVity",
  description:
    "Read the KoreVity Terms of Service covering website use, intellectual property, service information, client engagements, third-party services, privacy and liability.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}