import {
  BarChart3,
  Bot,
  TrendingUp,
  Brain,
} from "lucide-react";

import SectionTitle from "../ui/SectionTitle";
import GlassCard from "../ui/GlassCard";
import FadeIn from "../ui/FadeIn";

export default function Services() {
  const services = [
    {
      title: "Business Intelligence",
      icon: BarChart3,
      description:
        "Interactive dashboards, KPI tracking, and data visualization to help leaders make better decisions.",
    },
    {
      title: "AI Automation",
      icon: Bot,
      description:
        "Automate repetitive work with AI assistants, workflows, and intelligent business processes.",
    },
    {
      title: "Data Analytics",
      icon: TrendingUp,
      description:
        "Transform raw business data into actionable insights that improve performance and profitability.",
    },
    {
      title: "Custom AI Solutions",
      icon: Brain,
      description:
        "Tailor-made AI applications designed specifically for your business goals and operations.",
    },
  ];

  return (
    <section
      id="services"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="OUR SERVICES"
          title="What We Build"
          description="We combine Business Intelligence, Automation and Artificial Intelligence to help businesses scale faster while reducing operational complexity."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <FadeIn key={service.title} delay={0.15 * services.indexOf(service)}>
  <GlassCard>

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-500/20 bg-blue-600/10">

                  <Icon
                    size={34}
                    className="text-blue-400"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold transition-colors group-hover:text-blue-400">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-400">
                  {service.description}
                </p>

              </GlassCard>
</FadeIn>
            );
          })}

        </div>

      </div>
    </section>
  );
}