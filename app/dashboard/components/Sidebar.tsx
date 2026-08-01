"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Bot,
  FileText,
  BarChart3,
  Workflow,
  Settings,
  Sparkles,
  FileBarChart,
  Users,
  Plug,
  CreditCard,
} from "lucide-react";


const menuSections = [

  {
    title: "MAIN",

    items: [

      {
        name: "Overview",
        icon: LayoutDashboard,
        href: "/dashboard",
      },

      {
        name: "Analytics",
        icon: BarChart3,
        href: "/dashboard/analytics",
      },

      {
        name: "Reports",
        icon: FileBarChart,
        href: "/dashboard/reports",
      },

    ],

  },


  {
    title: "AI PLATFORM",

    items: [

      {
  name: "AI Assistant",
  icon: Bot,
  href: "/dashboard/assistant",
},

      {
        name: "Knowledge Base",
        icon: FileText,
        href: "/dashboard/knowledge",
      },

    ],

  },


  {
    title: "AUTOMATION",

    items: [

      {
        name: "Workflows",
        icon: Workflow,
        href: "/dashboard/automation",
      },

      {
        name: "Integrations",
        icon: Plug,
        href: "/dashboard/integrations",
      },

    ],

  },


  {
  title: "SYSTEM",

  items: [

    {
      name: "Team",
      icon: Users,
      href: "/dashboard/team",
    },

    {
      name: "Billing",
      icon: CreditCard,
      href: "/dashboard/billing",
    },

    {
      name: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },

  ],
},


];



export default function Sidebar() {

const pathname = usePathname();
  return (

    <aside
  className="
    hidden
    lg:flex
    fixed
    left-6
    top-6
    bottom-6

    w-72

    flex-col

    overflow-hidden

        rounded-3xl

        border
        border-white/10

        bg-slate-950/80

        backdrop-blur-2xl

        p-5

        shadow-2xl
        shadow-cyan-500/5
      "
    >



      {/* Logo Area */}

      <div
        className="
          flex
          items-center
          gap-3

          border-b
          border-white/10

          pb-6
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

            bg-gradient-to-r

            from-cyan-400

            to-blue-600
          "
        >

          <Sparkles
            className="
              h-5
              w-5
              text-white
            "
          />

        </div>



        <div>

          <h2
            className="
              font-bold
              text-white
            "
          >
            KoreVity
          </h2>


          <p
            className="
              text-xs
              text-cyan-300
            "
          >
            Intelligence Hub
          </p>


        </div>


      </div>






      {/* Navigation */}


      <nav
  className="
    mt-8

    flex-1

    overflow-y-auto

    flex
    flex-col

    gap-6

    pr-2

    scrollbar-thin
  "
>


        {
          menuSections.map((section)=>(


            <div
              key={section.title}
            >


              <p
                className="
                  mb-3

                  px-3

                  text-[11px]

                  font-semibold

                  tracking-[0.2em]

                  text-slate-500
                "
              >

                {section.title}

              </p>





              <div
                className="
                  flex

                  flex-col

                  gap-2
                "
              >

                {
                  section.items.map((item)=>{


                    const Icon = item.icon;


                    return (

                      <Link
  key={item.name}
  href={item.href}
  className={`
    group
    flex
    items-center
    gap-4
    rounded-xl
    px-4
    py-3
    transition

    ${
      pathname === item.href
        ? "bg-cyan-500/15 border border-cyan-500/30 text-cyan-300"
        : "text-slate-400 hover:bg-cyan-500/10 hover:text-cyan-300"
    }
  `}
>

                        <Icon
                          className="
                            h-5
                            w-5
                          "
                        />


                        <span
                          className="
                            font-medium
                          "
                        >
                          {item.name}
                        </span>


                      </Link>

                    );


                  })
                }


              </div>


            </div>


          ))
        }


      </nav>







      {/* Bottom AI Card */}


      <div
        className="
          mt-auto

          rounded-2xl

          border

          border-cyan-400/20

          bg-cyan-400/10

          p-4
        "
      >

        <Sparkles
          className="
            h-6
            w-6

            text-cyan-300
          "
        />



        <h3
          className="
            mt-4

            font-bold

            text-white
          "
        >
          AI Ready
        </h3>




        <p
          className="
            mt-2

            text-sm

            text-slate-400
          "
        >
          Transform your business data into intelligent decisions.
        </p>


      </div>



    </aside>

  );

}