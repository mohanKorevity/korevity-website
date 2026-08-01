import {
  Sparkles,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";


const recommendations = [
  "Automate supplier notifications to reduce manual follow-ups.",
  "Review delayed orders to improve operational efficiency.",
  "Connect more data sources for deeper business insights.",
];


export default function InsightPanel() {


  return (

    <div
      className="
        rounded-3xl

        border
        border-cyan-400/20

        bg-cyan-400/5

        p-8

        backdrop-blur-xl
      "
    >



      {/* Header */}

      <div
        className="
          flex
          items-center
          gap-3
        "
      >

        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-xl

            bg-cyan-400/20
          "
        >

          <Sparkles
            className="
              h-5
              w-5
              text-cyan-300
            "
          />

        </div>



        <div>

          <h3
            className="
              text-xl
              font-bold
              text-white
            "
          >
            AI Business Insights
          </h3>


          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Intelligent recommendations from your business data.
          </p>


        </div>


      </div>





      {/* Main Insight */}

      <div
        className="
          mt-8

          rounded-2xl

          border
          border-white/10

          bg-slate-950/50

          p-6
        "
      >

        <div
          className="
            flex
            gap-3
          "
        >

          <Lightbulb
            className="
              h-6
              w-6
              text-yellow-300
              shrink-0
            "
          />


          <p
            className="
              leading-7
              text-slate-300
            "
          >
            Revenue increased by 12.5% this month.
            Order processing efficiency is your biggest
            improvement opportunity.
          </p>


        </div>


      </div>





      {/* Recommendations */}

      <div
        className="
          mt-8
        "
      >

        <h4
          className="
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-cyan-300
          "
        >
          Recommended Actions
        </h4>



        <div
          className="
            mt-5
            flex
            flex-col
            gap-4
          "
        >

          {
            recommendations.map((item)=>(
              
              <div
                key={item}
                className="
                  flex
                  items-start
                  gap-3

                  rounded-xl

                  border
                  border-white/10

                  bg-white/5

                  p-4
                "
              >

                <CheckCircle2
                  className="
                    mt-0.5

                    h-5
                    w-5

                    text-emerald-300
                  "
                />


                <p
                  className="
                    text-sm
                    text-slate-300
                  "
                >
                  {item}
                </p>


              </div>

            ))
          }


        </div>


      </div>



    </div>

  );

}