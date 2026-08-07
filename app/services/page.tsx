import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  alternates: {
  canonical: "/services",
},
  title: "Business Intelligence Services",
  description:
    "Business Intelligence, AI Automation, dashboards, analytics and workflow automation services that help businesses work smarter.",
};

export default function Page() {
  return <ServicesClient />;
}