  "use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

  import { motion } from "framer-motion";
  import ServiceCard from "./ServiceCard";

  const services = [
    {
      title: "Save Time",
      description:
        "Automate repetitive processes, reduce manual effort and give your team more time to focus on important business priorities.",
      icon: "time",
    },
    {
      title: "Make Better Decisions",
      description:
        "Transform scattered business information into clear insights, dashboards and reports that help you act with confidence.",
      icon: "analytics",
    },
    {
      title: "Connect Your Systems",
      description:
        "Bring your tools and platforms together so information flows smoothly across your entire business.",
      icon: "systems",
    },
    {
      title: "AI That Works For You",
      description:
        "Implement practical AI solutions that support your team, improve efficiency and simplify everyday operations.",
      icon: "ai",
    },
    {
      title: "Business Strategy",
      description:
        "Design technology solutions around your goals so every system creates measurable long-term value.",
      icon: "strategy",
    },
    {
      title: "Long-Term Partnership",
      description:
        "Continuously improve, optimize and support your systems as your business evolves and grows.",
      icon: "partnership",
    },
  ];

  export default function Services() {
    return (
      <section
      id="services"
        className="
          relative
          py-36
          bg-slate-950
        "
      >

        <div className="mx-auto max-w-7xl px-8">


          {/* Heading */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once:true,
            }}

            transition={{
              duration:0.7,
            }}

            className="
              mx-auto
              max-w-4xl
              text-center
            "
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
              WHAT WE HELP YOU ACHIEVE
            </span>


            <h2
              className="
                mt-8

                text-5xl
                font-black
                leading-[1.05]

                tracking-tight

                text-white

                lg:text-6xl
              "
            >

              Helping Your Business

              <br />

              Work Smarter,

              <br />

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-300
                  via-white
                  to-blue-400

                  bg-clip-text
                  text-transparent
                "
              >
                Not Harder.
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
              We build intelligent business systems that simplify operations,
              automate everyday work and give your team the clarity,
              visibility and tools needed to grow with confidence.
            </p>


          </motion.div>



          {/* Service Cards */}


          <div
            className="
              mt-24

              grid
              gap-8

              md:grid-cols-2

              xl:grid-cols-3
            "
          >

            {services.map((service,index)=>(

              <motion.div

                key={service.title}

                initial={{
                  opacity:0,
                  y:40,
                }}

                whileInView={{
                  opacity:1,
                  y:0,
                }}

                viewport={{
                  once:true,
                }}

                transition={{
                  duration:0.6,
                  delay:index * 0.08,
                }}

              >

                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                />

              </motion.div>

            ))}

          </div>


        </div>

      </section>
    );
  }