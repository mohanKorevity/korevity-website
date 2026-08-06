import SectionTitle from "../ui/SectionTitle";
import FadeIn from "../ui/FadeIn";
import IndustryCard from "./IndustryCard";

export default function Industries() {
  return (
    <section
      id="industries"
      className="bg-slate-950 py-28 text-white"
    >
      <div className="mx-auto max-w-7xl px-6">

        <SectionTitle
          eyebrow="INDUSTRIES"
          title="Helping Businesses Across Industries Work Smarter"
          description="KoreVity connects business knowledge, data and existing systems to help organizations automate work, improve visibility and make better-informed decisions."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <FadeIn delay={0}>
            <IndustryCard
              icon="factory"
              title="Manufacturing"
              description="Connect operational data, monitor production performance and automate routine processes to improve visibility across manufacturing operations."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <IndustryCard
              icon="health"
              title="Healthcare"
              description="Connect operational information, streamline administrative workflows and give teams clearer visibility across everyday healthcare operations."
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <IndustryCard
              icon="finance"
              title="Finance"
description="Connect financial data, automate reporting and give teams clearer visibility into performance, KPIs, financial trends and key business insights."            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <IndustryCard
              icon="retail"
              title="Retail"
              description="Connect sales and inventory data, monitor performance and automate routine processes to improve visibility across retail operations."
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <IndustryCard
              icon="logistics"
              title="Logistics"
              description="Connect operational data, improve shipment visibility and automate routine workflows to help logistics teams operate more efficiently."
            />
          </FadeIn>

          <FadeIn delay={0.5}>
            <IndustryCard
              icon="education"
              title="Education"
              description="Connect institutional information, streamline administrative workflows and give teams clearer visibility into operations and performance."
            />
          </FadeIn>

        </div>

      </div>
    </section>
  );
}