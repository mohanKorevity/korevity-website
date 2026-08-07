import type { Metadata } from "next";
import PlatformClient from "./PlatformClient";

export const metadata: Metadata = {
  title: "KoreVity Platform",
  description:
    "Explore the KoreVity Intelligent Operations Platform, bringing together business knowledge, AI, intelligent automation and operational intelligence.",
  alternates: {
    canonical: "/platform",
  },
};

export default function Page() {
  return <PlatformClient />;
}