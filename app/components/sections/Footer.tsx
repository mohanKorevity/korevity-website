"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Globe2,
} from "lucide-react";

export default function Footer() {

  const quickLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Solutions",
      href: "/solutions",
    },
    {
      name: "Industries",
      href: "/industries",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];


  const resources = [
  {
    name: "Case Studies",
    href: "/coming-soon",
    soon: true,
  },
  {
    name: "Insights",
    href: "/coming-soon",
    soon: true,
  },
  {
    name: "FAQs",
    href: "/coming-soon",
    soon: true,
  },
  {
    name: "Privacy Policy",
    href: "/privacy",
  },
  {
    name: "Terms of Service",
    href: "/terms",
  },
];


  const legalLinks = [
    {
      name: "Privacy Policy",
      href: "/privacy",
    },
    {
      name: "Terms of Service",
      href: "/terms",
    },
  ];


  return (

    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-slate-950
      "
    >


      {/* Background Glow */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            left-1/2
            top-0
            h-[600px]
            w-[600px]
            -translate-x-1/2
            rounded-full
            bg-cyan-500/5
            blur-[160px]
          "
        />


        <div
          className="
            absolute
            right-0
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/5
            blur-[140px]
          "
        />

      </div>



      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-8
          py-20
        "
      >


        <div
          className="
            grid
            gap-14
            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
          "
        >



          {/* BRAND */}

          <div>


            <Link href="/" className="inline-block">

  <Image
    src="/logo/KoreVity_Logo_Dark_Transparent.png"
    alt="KoreVity"
    width={180}
    height={65}
    className="h-16 w-auto"
  />

</Link>



            <p
              className="
                mt-6
                max-w-sm
                leading-8
                text-slate-400
              "
            >
              Helping businesses work smarter through
              Business Intelligence, AI automation,
              and intelligent business systems.
            </p>



            <div className="mt-8">

              <a
                href="https://www.linkedin.com/company/korevity"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  px-5
                  py-3
                  text-sm
                  font-semibold
                  text-slate-400
                  transition
                  hover:border-cyan-400
                  hover:text-cyan-300
                "
              >
                LinkedIn
              </a>

            </div>


          </div>





          {/* EXPLORE */}

          <div>

            <h3
              className="
                text-lg
                font-bold
                text-white
              "
            >
              Explore
            </h3>


            <div
              className="
                mt-6
                space-y-4
              "
            >

              {quickLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    block
                    text-slate-400
                    transition
                    hover:text-cyan-400
                  "
                >
                  {item.name}
                </Link>

              ))}

            </div>


          </div>





          {/* RESOURCES */}

<div>

  <h3
    className="
      text-lg
      font-bold
      text-white
    "
  >
    Resources
  </h3>


            <div
  className="
    mt-6
    space-y-4
  "
>
  {resources.map((item) => (

    <div key={item.name} className="flex items-center gap-2">

      <Link
        href={item.href}
        className="
          text-slate-400
          transition
          hover:text-cyan-400
        "
      >
        {item.name}
      </Link>

      {item.soon && (
        <span
          className="
            rounded-full
            bg-cyan-500/10
            px-2
            py-0.5
            text-[10px]
            font-semibold
            uppercase
            tracking-wider
            text-cyan-300
          "
        >
          Soon
        </span>
      )}

    </div>

  ))}
</div>


          </div>





          {/* CONTACT */}

          <div>

            <h3
              className="
                text-lg
                font-bold
                text-white
              "
            >
              Contact
            </h3>


            <div
              className="
                mt-6
                space-y-6
              "
            >


              <div
                className="
                  flex
                  gap-3
                "
              >

                <Mail
                  className="
                    mt-1
                    h-5
                    w-5
                    text-cyan-400
                  "
                />


                <Link
                  href="mailto:hello@korevity.com"
                  className="
                    text-slate-400
                    transition
                    hover:text-cyan-300
                  "
                >
                  hello@korevity.com
                </Link>


              </div>




              <div
                className="
                  flex
                  gap-3
                "
              >

                <Globe2
                  className="
                    mt-1
                    h-5
                    w-5
                    text-cyan-400
                  "
                />


                <div>
  <p
    className="
      font-medium
      text-white
    "
  >
    Availability
  </p>

  <p
    className="
      text-slate-400
    "
  >
    Global Time Zones
  </p>
</div>


              </div>


            </div>


          </div>


        </div>





        {/* Divider */}

        <div
          className="
            my-14
            h-px
            bg-white/10
          "
        />





        {/* Bottom */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-8
            lg:flex-row
          "
        >


          <div>

            <p
              className="
                text-sm
                text-slate-400
              "
            >
              © {new Date().getFullYear()} KoreVity.
              All rights reserved.
            </p>


            <div
              className="
                mt-3
                flex
                gap-5
              "
            >

              {legalLinks.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    text-sm
                    text-slate-400
                    transition
                    hover:text-cyan-400
                  "
                >
                  {item.name}
                </Link>

              ))}

            </div>

          </div>





          <motion.button

            aria-label="Back to top"

            whileHover={{
              y: -5,
            }}

            whileTap={{
              scale: 0.95,
            }}

            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }

            className="
              flex
              items-center
              gap-3
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-6
              py-3
              text-white
              transition
              hover:border-cyan-400
            "
          >

            Back To Top


            <ArrowUp
              className="
                h-5
                w-5
                text-cyan-400
              "
            />


          </motion.button>


        </div>


      </div>


    </footer>

  );
}