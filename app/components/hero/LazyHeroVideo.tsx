"use client";

import { useEffect, useRef, useState } from "react";

export default function LazyHeroVideo() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const element = containerRef.current;

    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "300px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="aspect-[4/3]"
    >
      {shouldLoad ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        >
          <source
            src="/videos/hero-ai-demo.mp4"
            type="video/mp4"
          />
        </video>
      ) : (
        <div className="h-full w-full bg-slate-950" />
      )}
    </div>
  );
}