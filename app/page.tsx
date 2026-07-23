import Navbar from "./components/sections/Navbar";
import Services from "./components/sections/Services";
import Process from "./components/sections/Process";
import Stats from "./components/sections/Stats";
import TrustedBy from "./components/sections/TrustedBy";
import WhyChoose from "./components/sections/WhyChoose";

import Button from "./components/ui/Button";
import BackgroundGlow from "./components/ui/BackgroundGlow";
export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-slate-950 text-white">

        <BackgroundGlow />

        <section className="relative min-h-screen flex items-center justify-center">

          <div className="text-center max-w-5xl px-8">

            <p className="uppercase tracking-[8px] text-blue-500 font-semibold mb-8">
              AI • AUTOMATION • BUSINESS INTELLIGENCE
            </p>

            <h1 className="text-7xl md:text-8xl font-black leading-tight">
              Build Smarter
              <br />
              Grow Faster
            </h1>

            <p className="mt-10 text-xl text-slate-400 max-w-3xl mx-auto leading-9">
              KoreVity helps businesses automate workflows,
              unlock insights from data,
              and deploy AI solutions that reduce costs while
              increasing productivity.
            </p>

            <div className="flex justify-center gap-6 mt-14">

              <Button>
                Book a Demo
              </Button>

              <Button variant="secondary">
                Learn More
              </Button>

            </div>

          </div>

        </section>

        <TrustedBy />
<Services />
<Stats />
<WhyChoose />
<Process />

      </main>
    </>
  );
}