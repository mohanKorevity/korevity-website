"use client";

import {
  User,
  ShieldCheck,
  Settings,
  LogOut,
  ChevronUp,
} from "lucide-react";

import { useState } from "react";


export default function UserProfile() {

  const [open, setOpen] = useState(false);


  return (

    <div
      className="
        relative
        w-full
      "
    >


      {/* Profile Button */}

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

          transition

          hover:border-cyan-400/30
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
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              bg-gradient-to-br
              from-cyan-400
              to-blue-600
            "
          >

            <User
              className="
                h-5
                w-5
                text-white
              "
            />

          </div>




          <div
            className="
              text-left
            "
          >

            <p
              className="
                font-semibold
                text-white
              "
            >
              Mohan Kumar
            </p>


            <p
              className="
                text-sm
                text-cyan-300
              "
            >
              Founder & Admin
            </p>


          </div>


        </div>



        <ChevronUp
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

              bottom-full

              mb-3

              w-full

              rounded-2xl

              border

              border-white/10

              bg-slate-900

              p-3

              shadow-2xl
            "
          >


            <div
              className="
                rounded-xl

                border

                border-cyan-400/10

                bg-cyan-400/5

                p-4
              "
            >

              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >

                <ShieldCheck
                  className="
                    h-5
                    w-5
                    text-cyan-300
                  "
                />


                <div>

                  <p
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    KoreVity
                  </p>


                  <p
                    className="
                      text-xs
                      text-slate-400
                    "
                  >
                    Organization Admin
                  </p>

                </div>


              </div>


            </div>





            <button
              className="
                mt-3

                flex
                w-full
                items-center
                gap-3

                rounded-xl

                px-4
                py-3

                text-sm

                text-slate-300

                transition

                hover:bg-white/5
              "
            >

              <Settings
                className="
                  h-4
                  w-4
                "
              />

              Settings

            </button>





            <button
              className="
                flex
                w-full
                items-center
                gap-3

                rounded-xl

                px-4
                py-3

                text-sm

                text-red-300

                transition

                hover:bg-red-400/10
              "
            >

              <LogOut
                className="
                  h-4
                  w-4
                "
              />

              Logout

            </button>


          </div>

        )
      }



    </div>

  );

}