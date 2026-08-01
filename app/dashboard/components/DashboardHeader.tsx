"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import {
  Bell,
  ChevronDown,
  UserCircle,
  User,
  Settings,
  CreditCard,
  LogOut,
} from "lucide-react";


export default function DashboardHeader() {

  const [openProfile, setOpenProfile] = useState(false);
  
  
const pathname = usePathname();
  const profileRef = useRef<HTMLDivElement>(null);
  


useEffect(() => {

  function handleClickOutside(event: MouseEvent) {

    if (
      profileRef.current &&
      !profileRef.current.contains(event.target as Node)
    ) {
      setOpenProfile(false);
    }


  }


  document.addEventListener(
    "mousedown",
    handleClickOutside
  );


  return () => {
    document.removeEventListener(
      "mousedown",
      handleClickOutside
    );
  };


}, []);


  return (

    <div
  className="
    relative
    z-50

    flex
    items-center
    justify-between

    rounded-3xl

        border
        border-white/10

        bg-slate-950/60

        px-6
        py-4

        backdrop-blur-xl
      "
    >


      {/* Left Workspace */}

      <div>

        <p
          className="
            text-sm
            text-slate-400
          "
        >
          Workspace
        </p>


        <div
          className="
            mt-1
            flex
            items-center
            gap-2

            font-bold
            text-white
          "
        >

          KoreVity Business Intelligence


          <ChevronDown
            className="
              h-4
              w-4
              text-cyan-300
            "
          />

        </div>

      </div>





      {/* Right Side */}

      <div
        className="
          flex
          items-center
          gap-5
        "
      >



        {/* Notification */}

        <Link
  href="/dashboard/notifications"
  className="
    relative
    rounded-xl
    border
    border-white/10
    bg-white/5
    p-3
    text-slate-300
    transition
    hover:border-cyan-400/40
    hover:bg-white/10
    hover:text-cyan-300
  "
>

          <Bell
            className="
              h-5
              w-5
            "
          />


          <span
            className="
              absolute
              right-2
              top-2

              h-2
              w-2

              rounded-full

              bg-cyan-400
            "
          />

        </Link>






        {/* Profile Button */}

       <div
  ref={profileRef}
  className="
    relative
  "
>


          <button
            onClick={() => setOpenProfile(!openProfile)}

            className="
              flex
              items-center
              gap-3

              rounded-xl

              border
              border-white/10

              bg-slate-900/70

              px-4
              py-2

              transition-all

hover:border-cyan-400/40

hover:bg-white/10
            "
          >

            <UserCircle
              className="
                h-8
                w-8
                text-cyan-300
              "
            />


            <div
              className="
                text-left
              "
            >

              <p
                className="
                  text-sm
                  font-semibold
                  text-white
                "
              >
                Mohan Kumar
              </p>


              <p
                className="
                  text-xs
                  text-slate-400
                "
              >
                Admin
              </p>

            </div>



            <ChevronDown
              className="
                h-4
                w-4
                text-slate-400
              "
            />


          </button>







          {/* Dropdown */}

          {
            openProfile && (

              <div
                className="
                
                  absolute
                  right-0
                  top-16

                  z-[999]

                  w-64

                  rounded-2xl

                  border
                  border-white/10

                  bg-slate-900/95
backdrop-blur-xl
                  p-3

                  shadow-2xl
                "
              >


                {/* User Info */}

                <div
                  className="
                    border-b
                    border-white/10

                    px-3
                    py-3
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
                      text-slate-400
                    "
                  >
                    Admin
                  </p>

                </div>





                {/* Menu Items */}

<Link
  href="/dashboard/profile"
  onClick={() => setOpenProfile(false)}
  className={`
  flex
  w-full
  items-center
  gap-3
  rounded-xl
  px-3
  py-3
  transition

  ${
    pathname === "/dashboard/profile"
      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30"
      : "text-slate-300 hover:bg-white/5"
  }
`}
>

  <User className="h-5 w-5" />

  Profile

</Link>



                <Link
  href="/dashboard/settings"
  onClick={() => setOpenProfile(false)}
  className={`
  flex
  w-full
  items-center
  gap-3
  rounded-xl
  px-3
  py-3
  transition

  ${
    pathname === "/dashboard/settings"
      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30"
      : "text-slate-300 hover:bg-white/5"
  }
`}
>

                  <Settings className="h-5 w-5" />

                  Settings

                </Link>





                <Link
  href="/dashboard/billing"
  onClick={() => setOpenProfile(false)}
  className={`
  flex
  w-full
  items-center
  gap-3
  rounded-xl
  px-3
  py-3
  transition

  ${
    pathname === "/dashboard/billing"
      ? "bg-cyan-500/15 text-cyan-300 border border-cyan-400/30"
      : "text-slate-300 hover:bg-white/5"
  }
`}
>

  <CreditCard className="h-5 w-5" />

  Billing

</Link>



                <div
                  className="
                    my-2

                    border-t
                    border-white/10
                  "
                />





                <button
                  className="
                    flex
                    w-full
                    items-center
                    gap-3

                    rounded-xl

                    px-3
                    py-3

                    text-red-400
hover:text-red-300

                    hover:bg-red-500/10
                  "
                >

                  <LogOut className="h-5 w-5" />

                  Logout

                </button>



              </div>

            )
          }



        </div>


      </div>


    </div>

  );

}