import Navbar from "./components/sections/Navbar";
import TrustedBy from "./components/sections/TrustedBy";
import Services from "./components/sections/Services";
import Stats from "./components/sections/Stats";
import WhyChoose from "./components/sections/WhyChoose";
import Process from "./components/sections/Process";
import HeroDashboard from "./components/sections/HeroDashboard";

import Button from "./components/ui/Button";
import BackgroundGlow from "./components/ui/BackgroundGlow";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden bg-slate-950 text-white">
        <BackgroundGlow />

        <section className="relative flex min-h-screen items-center">
          <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-20 px-6 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold tracking-wider text-blue-400">
                AI • AUTOMATION • BUSINESS INTELLIGENCE
              </span>

              <h1 className="mt-10 text-6xl font-black leading-tight md:text-7xl">
                Transform Your
                <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                  Business With AI
                </span>
              </h1>

              <p className="mt-10 max-w-2xl text-xl leading-9 text-slate-400">
                KoreVity helps organizations automate operations, unlock powerful
                business intelligence, and deploy AI solutions that increase
                productivity while reducing operational costs.
              </p>

              <div className="mt-14 flex flex-wrap gap-5">
                <Button>
                  Book Free Consultation
                </Button>

                <Button variant="secondary">
                  Explore Services
                </Button>
              </div>

              <div className="mt-16 flex gap-12">
                <div>
                  <h3 className="text-4xl font-black text-blue-400">
                    50+
                  </h3>
                  <p className="mt-2 text-slate-400">
                    AI Solutions
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-blue-400">
                    95%
                  </h3>
                  <p className="mt-2 text-slate-400">
                    Satisfaction
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-blue-400">
                    24/7
                  </h3>
                  <p className="mt-2 text-slate-400">
                    Automation
                  </p>
                </div>
              </div>
            </div>

            <HeroDashboard />
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