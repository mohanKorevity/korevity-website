import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  alternates: {
  canonical: "/contact",
},
  title: "Contact KoreVity",
  description:
    "Get in touch with KoreVity to discuss Business Intelligence, AI Automation and digital transformation for your business.",
};

export default function Page() {
  return <ContactClient />;
}