"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CalendarCheck,
  Mail,
  BrainCircuit,
  ClipboardCheck,
  ArrowRight,
} from "lucide-react";

const options = [
  {
    icon: CalendarCheck,
    title: "Schedule A Consultation",
    description:
      "Discuss your business challenges with our experts and discover where AI, automation and analytics can create measurable value.",
    action: "Open Calendar",
    href: "https://calendly.com/mohan-korevity/30min",
    color: "from-cyan-500 to-blue-600",
  },
  {
    icon: Mail,
    title: "Email Our Team",
    description:
      "Share your requirements and our team will review your goals and suggest the best next steps.",
    action: "Send Email",
    href: "mailto:hello@korevity.com",
    color: "from-violet-500 to-indigo-600",
  },
  {
    icon: BrainCircuit,
    title: "Explore AI Solutions",
    description:
      "Identify practical AI opportunities that improve productivity, automate workflows and support smarter decisions.",
    action: "View Solutions",
    href: "/services",
    color: "from-emerald-500 to-green-600",
  },
  {
    icon: ClipboardCheck,
    title: "Business Assessment",
    description:
      "Understand your current processes and discover opportunities for automation and digital improvement.",
    action: "Send Assessment Request",
    href: "/contact?service=Business%20Assessment#contact-form",
    color: "from-orange-500 to-red-500",
  },
];

export default function ContactOptions() {
  return (
    <section className="relative py-32">

      <div className="mx-auto max-w-7xl px-6">


        {/* Heading */}

        <motion.div
          initial={{
            opacity:0,
            y:30,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
          }}

          className="mx-auto mb-20 max-w-4xl text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-500/20
              bg-cyan-500/10
              px-5
              py-2
              text-sm
              font-semibold
              tracking-[0.18em]
              text-cyan-300
            "
          >
            HOW CAN WE HELP
          </span>


          <h2
            className="
              mt-8
              text-5xl
              font-black
              text-white
              lg:text-6xl
            "
          >

            Choose How You'd Like

            <span
              className="
                mt-3
                block
                bg-gradient-to-r
                from-cyan-300
                via-white
                to-blue-400
                bg-clip-text
                text-transparent
              "
            >
              To Connect
            </span>

          </h2>


          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-xl
              leading-9
              text-slate-400
            "
          >
            Choose the option that best fits your needs—from scheduling a consultation to requesting a business assessment or simply sending us a message.
          </p>


        </motion.div>



        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">


          {options.map((option,index)=>{

            const Icon = option.icon;


            return (

              <motion.div
                key={option.title}

                initial={{
                  opacity:0,
                  y:35,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  delay:index * 0.08,
                }}

                whileHover={{
                  y:-10,
                }}

                className="
                  group
                  rounded-[32px]
                  border
                  border-white/10
                  bg-slate-900/60
                  p-8
                  backdrop-blur-xl
                  transition
                  hover:border-cyan-400/30
                  hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
                "
              >


                <div
                  className={`
                    mb-8
                    flex
                    h-20
                    w-20
                    items-center
                    justify-center
                    rounded-3xl
                    bg-gradient-to-br
                    ${option.color}
                  `}
                >

                  <Icon className="h-10 w-10 text-white" />

                </div>



                <h3
                  className="
                    text-2xl
                    font-bold
                    text-white
                  "
                >
                  {option.title}
                </h3>



                <p
                  className="
                    mt-5
                    leading-7
                    text-slate-400
                  "
                >
                  {option.description}
                </p>




                <Link
                  href={option.href}
                  target={option.href.startsWith("http") ? "_blank" : undefined}
                  className="
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    font-semibold
                    text-cyan-400
                    transition
                    group-hover:text-cyan-300
                  "
                >

                  {option.action}

                  <ArrowRight className="h-4 w-4" />

                </Link>



              </motion.div>

            );

          })}


        </div>


      </div>

    </section>
  );
}