import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | KoreVity",
  description:
    "Learn how KoreVity collects, uses, stores and protects personal information when you use our website or interact with our services.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function Page() {
  return <PrivacyClient />;
}