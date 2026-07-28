import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient";

export const metadata: Metadata = {
  alternates: {
  canonical: "/solutions",
},
  title: "AI Automation Solutions",
  description:
    "Discover AI Automation, Business Intelligence, dashboards and intelligent digital solutions designed to help businesses work smarter.",
};

export default function Page() {
  return <SolutionsClient />;
}