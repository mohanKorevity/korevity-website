"use client";

import { motion } from "framer-motion";
import { Factory } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function IndustrySpotlight() {
  const videoContainerRef = useRef<HTMLDivElement | null>(null);
const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

useEffect(() => {
  const element = videoContainerRef.current;

  if (!element) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setShouldLoadVideo(true);
        observer.disconnect();
      }
    },
    {
      rootMargin: "300px 0px",
    }
  );

  observer.observe(element);

  return () => observer.disconnect();
}, []);
  return (
    <section className="relative py-36">

      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >

          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600">

            <Factory className="h-12 w-12 text-white" />

          </div>

          <span className="text-sm font-semibold tracking-[0.2em] text-cyan-300">
            INDUSTRY SPOTLIGHT
          </span>

          <h2 className="mt-6 text-5xl font-black text-white leading-tight">

            Manufacturing

            <br />

            <span className="bg-gradient-to-r from-cyan-300 via-white to-blue-400 bg-clip-text text-transparent">
              Smarter Operations
            </span>

          </h2>

          <p className="mt-8 text-xl leading-9 text-slate-400">

  Manufacturing businesses generate large amounts of production,
  inventory, quality and operational information.

  KoreVity connects that information with business knowledge,
  systems and workflows to improve real-time visibility, automate
  operations, identify patterns and uncover opportunities for improvement.

</p>

          <div className="mt-10 space-y-4">

            {[
              "Production Monitoring",
              "Inventory Intelligence",
              "Machine Performance",
              "Quality Analytics",
              "Executive Reporting",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 text-lg text-slate-300"
              >
                <div className="h-3 w-3 rounded-full bg-cyan-400" />
                {item}
              </div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
  initial={{ opacity: 0, x: 40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  whileHover={{ scale: 1.02 }}
  transition={{ duration: 0.35 }}
  className="
    overflow-hidden
    rounded-[36px]
    border
    border-white/10
    bg-slate-900
    shadow-[0_40px_100px_rgba(0,0,0,0.45)]
  "
>

  <div className="aspect-[16/10]">

    <div
  ref={videoContainerRef}
  className="aspect-[16/10] w-full"
>
  {shouldLoadVideo ? (
    <video
      className="h-full w-full object-cover"
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
    >
      <source
        src="/videos/manufacturing.mp4"
        type="video/mp4"
      />
    </video>
  ) : (
    <div className="h-full w-full bg-slate-900" />
  )}
</div>

  </div>

</motion.div>

</div>

</section>
  );
}