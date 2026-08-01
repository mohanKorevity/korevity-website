import {
  CheckCircle2,
  Clock3,
  Activity,
  AlertTriangle,
  Workflow,
} from "lucide-react";


const workflows = [
  {
    name: "Order Processing",
    status: "Running",
    time: "2 min ago",
    active: true,
  },
  {
    name: "Customer Notifications",
    status: "Running",
    time: "5 min ago",
    active: true,
  },
  {
    name: "Report Generation",
    status: "Completed",
    time: "18 min ago",
    active: false,
  },
];


export default function AutomationPanel() {


  return (

    <div
      className="
        rounded-3xl

        border
        border-white/10

        bg-slate-900/60

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

          <Workflow
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
            Automation Monitor
          </h3>


          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Track intelligent workflows and automated processes.
          </p>


        </div>


      </div>





      {/* Stats */}

      <div
        className="
          mt-8

          grid

          gap-5

          md:grid-cols-3
        "
      >


        <div
          className="
            rounded-2xl

            border
            border-white/10

            bg-white/5

            p-5
          "
        >

          <Activity
            className="
              text-cyan-300
            "
          />

          <p
            className="
              mt-4
              text-3xl
              font-black
            "
          >
            24
          </p>

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Active Workflows
          </p>


        </div>





        <div
          className="
            rounded-2xl

            border
            border-white/10

            bg-white/5

            p-5
          "
        >

          <CheckCircle2
            className="
              text-emerald-300
            "
          />

          <p
            className="
              mt-4
              text-3xl
              font-black
            "
          >
            98.5%
          </p>

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Success Rate
          </p>


        </div>





        <div
          className="
            rounded-2xl

            border
            border-white/10

            bg-white/5

            p-5
          "
        >

          <AlertTriangle
            className="
              text-yellow-300
            "
          />

          <p
            className="
              mt-4
              text-3xl
              font-black
            "
          >
            3
          </p>

          <p
            className="
              text-sm
              text-slate-400
            "
          >
            Issues Detected
          </p>


        </div>


      </div>






      {/* Workflow List */}

      <div
        className="
          mt-8

          flex

          flex-col

          gap-4
        "
      >

        {
          workflows.map((workflow)=>(

            <div
              key={workflow.name}

              className="
                flex

                items-center

                justify-between

                rounded-2xl

                border
                border-white/10

                bg-white/5

                p-4
              "
            >


              <div
                className="
                  flex
                  items-center
                  gap-4
                "
              >

                {
                  workflow.active
                  ?
                  <Clock3
                    className="
                      h-5
                      w-5
                      text-cyan-300
                    "
                  />
                  :
                  <CheckCircle2
                    className="
                      h-5
                      w-5
                      text-emerald-300
                    "
                  />
                }


                <div>

                  <p
                    className="
                      font-semibold
                      text-white
                    "
                  >
                    {workflow.name}
                  </p>


                  <p
                    className="
                      text-sm
                      text-slate-400
                    "
                  >
                    {workflow.time}
                  </p>


                </div>


              </div>




              <span
                className={`
                  rounded-full

                  px-3

                  py-1

                  text-xs

                  font-semibold

                  ${
                    workflow.active
                    ?
                    "bg-cyan-400/10 text-cyan-300"
                    :
                    "bg-emerald-400/10 text-emerald-300"
                  }
                `}
              >

                {workflow.status}

              </span>


            </div>

          ))
        }


      </div>



    </div>

  );

}