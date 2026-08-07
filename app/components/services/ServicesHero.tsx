
import Link from "next/link";

import GlowButton from "../ui/GlowButton";

export default function ServicesHero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-32">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-5xl text-center">

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
            OUR SERVICES
          </span>


          <h1
            className="
              mt-8
              text-5xl
              font-black
              leading-tight
              text-white
              lg:text-7xl
            "
          >

            Technology Services


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
              Built Around Your Business
            </span>

          </h1>


          <p
            className="
              mx-auto
              mt-10
              max-w-3xl
              text-xl
              leading-9
              text-slate-400
            "
          >
            From business intelligence and workflow automation to AI and system
integrations, KoreVity designs and implements solutions around your
existing workflows, systems and business priorities.
          </p>


          <div
            className="
              mt-14
              flex
              flex-wrap
              justify-center
              gap-6
            "
          >

           <GlowButton
  href="https://calendly.com/mohan-korevity/30min"
  target="_blank"
  rel="noopener noreferrer"
>
  Book Free Consultation
</GlowButton>


            <a
              href="#services-grid"
              className="
                rounded-xl
                border
                border-white/10
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:border-cyan-400
                hover:bg-white/5
              "
            >
              Explore Services
            </a>

          </div>


        </div>

      </div>

    </section>
  );
}