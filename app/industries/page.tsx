import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  alternates: {
  canonical: "/industries",
},
  title: "Industries We Serve",
  description:
    "Explore how KoreVity delivers Business Intelligence and AI Automation solutions across multiple industries.",
};

export default function Page() {
  return <IndustriesClient />;
}