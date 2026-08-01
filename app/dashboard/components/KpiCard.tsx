import {
  TrendingUp,
} from "lucide-react";


interface KpiCardProps {

  title: string;

  value: string;

  change: string;

  description: string;

  positive?: boolean;

}



export default function KpiCard({

  title,

  value,

  change,

  description,

  positive = true,

}: KpiCardProps) {


  return (

    <div
      className="
        rounded-3xl

        border
        border-white/10

        bg-slate-900/60

        p-6

        backdrop-blur-xl

        transition

        duration-300

        hover:border-cyan-400/30

        hover:-translate-y-1
      "
    >



      <div
        className="
          flex
          items-center
          justify-between
        "
      >

        <p
          className="
            text-sm
            font-medium
            text-slate-400
          "
        >
          {title}
        </p>



        <div
          className={`
            flex
            items-center
            gap-1

            rounded-full

            px-3
            py-1

            text-xs
            font-semibold

            ${
              positive
              ?
              "bg-emerald-400/10 text-emerald-300"
              :
              "bg-red-400/10 text-red-300"
            }
          `}
        >

          <TrendingUp
            className="
              h-3
              w-3
            "
          />

          {change}

        </div>


      </div>




      <h2
        className="
          mt-6

          text-4xl

          font-black

          text-white
        "
      >

        {value}

      </h2>




      <p
        className="
          mt-3

          text-sm

          leading-6

          text-slate-400
        "
      >

        {description}

      </p>



    </div>

  );

}