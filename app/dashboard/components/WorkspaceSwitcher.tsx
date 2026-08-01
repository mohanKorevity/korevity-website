"use client";

import {
  Building2,
  ChevronDown,
  Check,
} from "lucide-react";

import { useState } from "react";


const workspaces = [
  "Acme Logistics",
  "Demo Company",
  "Test Workspace",
];


export default function WorkspaceSwitcher() {

  const [selected, setSelected] = useState(
    "Acme Logistics"
  );

  const [open, setOpen] = useState(false);


  return (

    <div
      className="
        relative
        w-full
        max-w-sm
      "
    >


      {/* Current Workspace */}

      <button

        onClick={() => setOpen(!open)}

        className="
          flex

          w-full

          items-center

          justify-between

          rounded-2xl

          border

          border-white/10

          bg-white/5

          px-5

          py-4

          text-left

          transition

          hover:border-cyan-400/40
        "
      >


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

            <Building2
              className="
                h-5
                w-5
                text-cyan-300
              "
            />

          </div>



          <div>

            <p
              className="
                text-xs
                uppercase
                tracking-wider
                text-slate-400
              "
            >
              Current Workspace
            </p>


            <p
              className="
                mt-1
                font-semibold
                text-white
              "
            >
              {selected}
            </p>


          </div>


        </div>




        <ChevronDown
          className={`
            h-5
            w-5
            text-slate-400

            transition

            ${
              open
              ?
              "rotate-180"
              :
              ""
            }
          `}
        />


      </button>





      {/* Dropdown */}

      {
        open && (

          <div
            className="
              absolute

              z-50

              mt-3

              w-full

              rounded-2xl

              border

              border-white/10

              bg-slate-900

              p-3

              shadow-2xl
            "
          >

            {
              workspaces.map((workspace)=>(

                <button

                  key={workspace}

                  onClick={() => {

                    setSelected(workspace);

                    setOpen(false);

                  }}

                  className="
                    flex

                    w-full

                    items-center

                    justify-between

                    rounded-xl

                    px-4

                    py-3

                    text-left

                    transition

                    hover:bg-white/5
                  "
                >


                  <span
                    className="
                      text-sm
                      text-slate-300
                    "
                  >
                    {workspace}
                  </span>



                  {
                    selected === workspace && (

                      <Check
                        className="
                          h-4
                          w-4
                          text-cyan-300
                        "
                      />

                    )
                  }


                </button>

              ))
            }


          </div>

        )
      }



    </div>

  );

}