"use client";

import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

type GlowButtonProps = {
  children: ReactNode;
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function GlowButton({
  children,
  className = "",
  href,
  ...buttonProps
}: GlowButtonProps) {
  const classes = `
    group
    relative
    overflow-hidden
    inline-flex
    items-center
    justify-center

    rounded-xl

    bg-gradient-to-r
    from-cyan-500
    via-blue-500
    to-indigo-600

    px-8
    py-4

    font-bold
    text-white

    shadow-lg
    shadow-cyan-500/30

    transition-all
    duration-300

    hover:-translate-y-1
    hover:scale-[1.03]

    hover:shadow-xl
    hover:shadow-cyan-500/50

    active:scale-95

    disabled:opacity-60
    disabled:cursor-not-allowed
    disabled:hover:scale-100
    disabled:hover:translate-y-0

    ${className}
  `;

  const content = (
    <>
      {/* Animated sweep */}
      <span
        className="
          absolute
          inset-0
          -translate-x-full

          bg-gradient-to-r
          from-transparent
          via-white/40
          to-transparent

          transition-transform
          duration-700

          group-hover:translate-x-full
        "
      />

      {/* Glow */}
      <span
        className="
          absolute
          inset-0
          rounded-xl

          opacity-0

          bg-cyan-300/20

          blur-xl

          transition-opacity
          duration-300

          group-hover:opacity-100
        "
      />

      <span className="relative z-10 flex items-center">
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      {...buttonProps}
    >
      {content}
    </button>
  );
}