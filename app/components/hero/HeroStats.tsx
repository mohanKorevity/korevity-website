import {
  CheckCircle2,
  Clock3,
  BrainCircuit,
} from "lucide-react";

const items = [
  {
    icon: Clock3,

    title: "Less Manual Work",

    description:
      "Automate repetitive tasks and free your team to focus on growth.",

    gradient:
      "from-cyan-400 via-blue-500 to-indigo-600",

    glow:
      "bg-cyan-500/40",
  },

  {
    icon: BrainCircuit,

    title: "Smarter Decisions",

    description:
      "Turn business data into clear insights you can act on.",

    gradient:
      "from-purple-400 via-fuchsia-500 to-indigo-600",

    glow:
      "bg-purple-500/40",
  },

  {
    icon: CheckCircle2,

    title: "Long-Term Partner",

    description:
      "Support, improvement and guidance as your business grows.",

    gradient:
      "from-emerald-400 via-green-500 to-teal-600",

    glow:
      "bg-emerald-500/40",
  },
];

export default function HeroStats() {
  return (
    <div
      className="
        grid
        gap-4
        md:grid-cols-3
      "
    >
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="
              group
              relative
              overflow-hidden

              rounded-2xl

              border
              border-white/10

              bg-slate-900/60

              px-5
              py-5

              backdrop-blur-xl

              transition-all
              duration-300

              hover:-translate-y-2
              hover:scale-[1.03]

              hover:border-white/20
            "
          >
            {/* Static Glow */}

            <div
              className={`
                pointer-events-none

                absolute

                -right-10
                -top-10

                h-28
                w-28

                rounded-full

                blur-3xl

                opacity-30

                transition-opacity
                duration-300

                group-hover:opacity-50

                ${item.glow}
              `}
            />

            {/* Icon */}

            <div
              className={`
                relative

                flex

                h-10
                w-10

                items-center
                justify-center

                rounded-xl

                bg-gradient-to-br

                shadow-lg

                transition-transform
                duration-300

                group-hover:-translate-y-1
                group-hover:rotate-3

                ${item.gradient}
              `}
            >
              <Icon
                className="
                  h-5
                  w-5
                  text-white
                "
              />
            </div>

            <p
              className="
                relative

                mt-5

                text-sm
                font-bold

                text-white
              "
            >
              {item.title}
            </p>

            <p
              className="
                relative

                mt-3

                text-xs
                leading-6

                text-slate-400
              "
            >
              {item.description}
            </p>

            {/* Hover Line */}

            <div
              className="
                absolute

                bottom-0
                left-0

                h-[2px]
                w-0

                bg-gradient-to-r

                from-cyan-400
                via-blue-500
                to-purple-500

                transition-[width]
                duration-300

                group-hover:w-full
              "
            />
          </div>
        );
      })}
    </div>
  );
}