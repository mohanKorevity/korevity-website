export default function BackgroundGlow() {
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
      {/* Top Left Blue Glow */}
      <div
        className="
          absolute
          left-10
          top-20

          h-96
          w-96

          rounded-full

          bg-blue-500/10

          blur-[150px]
        "
      />

      {/* Bottom Right Cyan Glow */}
      <div
        className="
          absolute
          bottom-20
          right-10

          h-[450px]
          w-[450px]

          rounded-full

          bg-cyan-400/10

          blur-[170px]
        "
      />

      {/* Center Purple Depth Glow */}
      <div
        className="
          absolute

          left-1/2
          top-1/2

          h-[320px]
          w-[320px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-indigo-500/10

          blur-[140px]
        "
      />
    </div>
  );
}