import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  alternates: {
  canonical: "/about",
},
  title: "About KoreVity",
  description:
    "Learn about KoreVity, our mission and how we help businesses work smarter through Business Intelligence and AI Automation.",
};

export default function Page() {
  return <AboutClient />;
}