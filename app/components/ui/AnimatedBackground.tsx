export default function AnimatedBackground() {
  return (
    <div
      className="
        pointer-events-none
        absolute
        inset-0
        overflow-hidden
      "
      aria-hidden="true"
    >
      {/* Left Blue Orb */}

      <div
        className="
          absolute
          -left-32
          top-20

          h-[420px]
          w-[420px]

          rounded-full

          bg-blue-500/10

          blur-[160px]
        "
      />

      {/* Right Cyan Orb */}

      <div
        className="
          absolute
          -right-32
          top-40

          h-[520px]
          w-[520px]

          rounded-full

          bg-cyan-400/10

          blur-[190px]
        "
      />

      {/* Bottom Intelligence Glow */}

      <div
        className="
          absolute
          bottom-[-120px]
          left-1/2

          h-[380px]
          w-[380px]

          -translate-x-1/2

          rounded-full

          bg-indigo-500/10

          blur-[170px]
        "
      />

      {/* Center AI Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/3

          h-64
          w-64

          -translate-x-1/2

          rounded-full

          bg-cyan-300/5

          blur-[120px]
        "
      />
    </div>
  );
}