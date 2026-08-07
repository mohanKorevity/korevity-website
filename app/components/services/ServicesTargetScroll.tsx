"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ServicesTargetScroll() {
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("target") !== "how-we-help") {
      return;
    }

    const timer = setTimeout(() => {
      const section = document.getElementById("services-grid");

      if (!section) return;

      const y =
        section.getBoundingClientRect().top +
        window.pageYOffset -
        100;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchParams]);

  return null;
}