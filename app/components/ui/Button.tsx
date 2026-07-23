import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const primary =
    "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-[0_0_35px_rgba(59,130,246,0.45)]";

  const secondary =
    "border border-slate-700 bg-slate-900/60 text-white hover:border-blue-500 hover:bg-slate-800";

  return (
    <button
      className={`
        inline-flex
        items-center
        justify-center
        rounded-xl
        px-8
        py-4
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        active:scale-95
        ${variant === "primary" ? primary : secondary}
      `}
    >
      {children}
    </button>
  );
}