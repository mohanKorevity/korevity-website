const activity: {
  title: string;
  time: string;
}[] = [
  {
    title: "Opened Mission",
    time: "10:34 AM",
  },
  {
    title: "Viewed Revenue Dashboard",
    time: "10:28 AM",
  },
  {
    title: "Asked AI Assistant",
    time: "10:15 AM",
  },
  {
    title: "Read Brand Identity",
    time: "Yesterday",
  },
];

export default function RecentActivity() {
  return (
    <section
      className="
        rounded-3xl
        border
        border-white/10
        bg-slate-900/60
        p-8
      "
    >
      <h2
        className="
          text-2xl
          font-semibold
          text-white
        "
      >
        Recent Activity
      </h2>

      <div className="mt-8 space-y-5">

  {activity.length === 0 ? (

    <div
      className="
        rounded-2xl
        border
        border-dashed
        border-white/10
        bg-white/5
        p-8
        text-center
      "
    >

      <p
        className="
          text-lg
          font-semibold
          text-white
        "
      >
        No recent activity
      </p>

      <p
        className="
          mt-2
          text-slate-500
        "
      >
        Your recent actions will appear here.
      </p>

    </div>

  ) : (

    activity.map((item) => (

          <div
            key={item.title}
            className="
              flex
              items-center
              justify-between

              rounded-xl
              border
              border-white/10
              bg-white/5

              px-5
              py-4
            "
          >

            <p className="text-white">
              {item.title}
            </p>

            <span
              className="
                text-sm
                text-slate-500
              "
            >
              {item.time}
            </span>

          </div>

        ))

  )}

</div>

    </section>
  );
}