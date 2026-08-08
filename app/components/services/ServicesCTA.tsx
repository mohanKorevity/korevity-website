"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2 } from "lucide-react";

import GlowButton from "../ui/GlowButton";

const benefits = [
  "Free business consultation",
  "No obligation or sales pressure",
  "Practical recommendations for your goals",
];

export default function ServicesCTA() {
  return (
    <section className="relative py-36 overflow-hidden">


      {/* Background Glow */}

      <div
        className="
          absolute
          left-1/2
          top-0
          h-[600px]
          w-[600px]
          -translate-x-1/2
          rounded-full
          bg-cyan-500/10
          blur-[180px]
        "
      />



      <div className="relative mx-auto max-w-5xl px-8">


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
            once: true,
          }}

          transition={{
            duration: 0.6,
          }}

          className="
            rounded-[40px]
            border
            border-cyan-500/20
            bg-gradient-to-br
            from-cyan-500/10
            via-slate-900
            to-slate-900
            p-12
            text-center
            backdrop-blur-xl
            lg:p-16
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
            START YOUR JOURNEY
          </span>



          <h2
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              text-white
              lg:text-6xl
            "
          >

            Ready To Build

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
              Smarter Business Systems?
            </span>

          </h2>



          <p
            className="
              mx-auto
              mt-8
              max-w-3xl
              text-xl
              leading-9
              text-slate-300
            "
          >
            Whether you need business intelligence, workflow automation,
system integration or intelligent operations, KoreVity brings the right capabilities
together around your workflows, systems and business priorities.
          </p>



          <div
            className="
              mx-auto
              mt-10
              max-w-xl
              space-y-4
              text-left
            "
          >

            {benefits.map((benefit) => (

              <div
                key={benefit}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/5
                  bg-white/[0.03]
                  px-5
                  py-3
                "
              >

                <CheckCircle2
                  className="
                    h-5
                    w-5
                    text-cyan-400
                  "
                />

                <span
                  className="
                    text-slate-300
                  "
                >
                  {benefit}
                </span>

              </div>

            ))}

          </div>



          <div className="mt-12">

  <Link
  href="https://calendly.com/mohan-korevity/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  <GlowButton>
    <CalendarDays className="mr-2 h-5 w-5" />
    Book Your Free Consultation
  </GlowButton>
</Link>

</div>



        </motion.div>


      </div>


    </section>
  );
}