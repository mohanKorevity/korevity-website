"use client";

export default function HeroBackground() {
  return (
    <>

      {/* Base */}

      <div className="absolute inset-0 bg-slate-950" />


      {/* Soft AI Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.035]

          [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)]

          [background-size:70px_70px]
        "
      />


      {/* Main Blue Intelligence Glow */}

      <div
        className="
          absolute
          -top-40
          left-1/2
          h-[900px]
          w-[900px]
          -translate-x-1/2

          rounded-full

          bg-blue-500/10

          blur-[180px]
        "
      />


      {/* Cyan Dashboard Glow */}

      <div
        className="
          absolute
          right-[-200px]
          top-[20%]

          h-[650px]
          w-[650px]

          rounded-full

          bg-cyan-400/10

          blur-[180px]
        "
      />


      {/* Left Text Glow */}

      <div
        className="
          absolute
          left-[-200px]
          bottom-[20%]

          h-[450px]
          w-[450px]

          rounded-full

          bg-blue-500/10

          blur-[150px]
        "
      />


      {/* Bottom Transition */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0

          h-72

          bg-gradient-to-t
          from-slate-950
          via-slate-950/80
          to-transparent
        "
      />

    </>
  );
}