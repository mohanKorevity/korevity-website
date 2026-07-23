type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      className={
        variant === "primary"
          ? "px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-700 transition font-semibold"
          : "px-8 py-4 rounded-xl border border-slate-600 hover:border-blue-500 transition"
      }
    >
      {children}
    </button>
  );
}