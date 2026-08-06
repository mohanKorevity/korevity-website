"use client";

export default function FlowConnector() {
  return (
    <div className="relative flex h-16 items-center justify-center">

      <div
        className="
          absolute
          h-full
          w-[2px]
          bg-gradient-to-b
          from-cyan-300
          via-cyan-300
          to-transparent
        "
      />

      <div
        className="
          absolute
          h-3
          w-3
          rounded-full
          bg-cyan-300
          shadow-[0_0_16px_rgba(34,211,238,.8)]
          
        "
      />

    </div>
  );
}