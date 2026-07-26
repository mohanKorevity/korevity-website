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
          description="KoreVity helps businesses improve operations, reduce manual work and make better decisions with practical solutions designed around their unique goals."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <FadeIn delay={0}>
            <IndustryCard
              icon="factory"
              title="Manufacturing"
              description="Improve operational visibility, track performance and identify opportunities to make production more efficient."
            />
          </FadeIn>

          <FadeIn delay={0.1}>
            <IndustryCard
              icon="health"
              title="Healthcare"
              description="Improve administrative workflows, organize information and support better decision-making with connected systems."
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <IndustryCard
              icon="finance"
              title="Finance"
              description="Create clearer reporting, improve financial visibility and help teams make confident decisions."
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <IndustryCard
              icon="retail"
              title="Retail"
              description="Understand customer trends, improve inventory visibility and simplify sales reporting."
            />
          </FadeIn>

          <FadeIn delay={0.4}>
            <IndustryCard
              icon="logistics"
              title="Logistics"
              description="Improve delivery visibility, streamline operations and make better decisions with clearer business insights."
            />
          </FadeIn>

          <FadeIn delay={0.5}>
            <IndustryCard
              icon="education"
              title="Education"
              description="Improve administration, organize information and gain clearer insights into institutional performance."
            />
          </FadeIn>

        </div>

      </div>
    </section>
  );
}