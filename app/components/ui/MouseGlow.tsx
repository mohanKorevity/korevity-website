"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const glow = glowRef.current;

    if (!glow) return;

    const desktopPointer = window.matchMedia(
      "(min-width: 768px) and (pointer: fine)"
    );

    if (!desktopPointer.matches) {
      return;
    }

    let frameId: number | null = null;
    let mouseX = -500;
    let mouseY = -500;

    const updateGlow = () => {
      glow.style.background = `
        radial-gradient(
          420px circle at ${mouseX}px ${mouseY}px,
          rgba(34,211,238,0.14),
          rgba(59,130,246,0.08),
          transparent 70%
        )
      `;

      frameId = null;
    };

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;

      if (frameId === null) {
        frameId = requestAnimationFrame(updateGlow);
      }
    };

    window.addEventListener("mousemove", handleMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMove);

      if (frameId !== null) {
        cancelAnimationFrame(frameId);
      }
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
        hidden
        md:block
      "
    />
  );
}