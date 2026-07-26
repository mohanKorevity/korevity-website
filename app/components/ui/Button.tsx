"use client";

import { ReactNode, ButtonHTMLAttributes } from "react";


type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;



export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {


  const styles = {

    primary: `
      bg-gradient-to-r
      from-cyan-500
      via-blue-500
      to-indigo-600

      text-white

      shadow-lg
      shadow-cyan-500/20

      hover:shadow-xl
      hover:shadow-cyan-500/40
    `,


    secondary: `
      border
      border-white/10

      bg-white/[0.04]

      text-white

      hover:border-cyan-400/50

      hover:bg-white/[0.08]

      hover:text-cyan-300
    `,

  };



  return (

    <button

      {...props}

      className={`
        group

        inline-flex
        items-center
        justify-center
        gap-2

        rounded-xl

        px-8
        py-4

        font-semibold

        transition-all
        duration-300

        hover:-translate-y-1

        active:scale-95

        disabled:pointer-events-none
        disabled:opacity-50
        disabled:hover:translate-y-0

        ${styles[variant]}

        ${className}
      `}

    >

      {children}

    </button>

  );

}