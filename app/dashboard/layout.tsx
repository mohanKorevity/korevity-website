import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className="
        min-h-screen
        bg-slate-950
        text-white
      "
    >
      {/* Background Glow */}
      <div
        className="
          fixed
          inset-0
          pointer-events-none
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-0

            h-[600px]
            w-[600px]

            -translate-x-1/2

            rounded-full

            bg-cyan-500/10

            blur-[180px]
          "
        />
      </div>

      <Sidebar />

      <section
        className="
          relative
          z-10

          lg:ml-80

          px-8
          py-10
        "
      >
        <DashboardHeader />

        <div className="mt-10">
          {children}
        </div>
      </section>
    </main>
  );
}