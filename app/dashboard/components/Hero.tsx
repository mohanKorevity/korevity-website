
import DashboardSearch from "./DashboardSearch";
import ProfileMenu from "./ProfileMenu";
export default function Hero() {

    
  const greeting = (() => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";

    return "Good Evening";
  })();

  const today = new Date().toLocaleDateString("en-US", {
    
    
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });
const lastSync = "2 minutes ago";
  return (
    <section
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-10
      "
    >
      <div className="flex items-start justify-between gap-8">

        <div>

          <div
  className="
    flex
    items-center
    gap-2

    text-sm
    text-slate-500
  "
>

  <span>Workspace</span>

  <span>/</span>

  <span className="text-cyan-300">
    Dashboard
  </span>

</div>



          <h1
            className="
              mt-4
              text-5xl
              font-bold
              text-white
            "
          >
            {greeting}, Mohan 👋
          </h1>

          <p
  className="
    mt-6
    max-w-2xl
    text-lg
    leading-8
    text-slate-400
  "
>
  Your AI-powered operating system is ready.
  Monitor business intelligence, automate workflows,
  manage company knowledge, and make smarter decisions
  from one intelligent workspace.
</p>

<div className="mt-8 max-w-2xl">
  <DashboardSearch />
</div>

        </div>

        <div className="flex flex-col items-end gap-4">
          <p className="text-sm text-slate-500">
            Today
          </p>
<div
  className="
    mt-4
    flex
    items-center
    justify-end
    gap-2
  "
>

  <span
    className="
      h-2
      w-2
      rounded-full
      bg-emerald-400
    "
  />

  <span
    className="
      text-sm
      text-emerald-300
    "
  >
    Workspace Online
  </span>

</div>
          <p
            className="
              mt-2
              font-semibold
              text-white
            "
          >
            {today}
          </p>
<div
  className="
    mt-4

    rounded-xl

    border
    border-white/10

    bg-white/5

    px-4
    py-3
  "
>

  <p
    className="
      text-xs
      uppercase
      tracking-wide
      text-slate-500
    "
  >
    Last Synced
  </p>

  <p
    className="
      mt-1
      text-sm
      font-medium
      text-cyan-300
    "
  >
    {lastSync}
  </p>

</div>
        </div>

      </div>
      
    </section>
  );
}