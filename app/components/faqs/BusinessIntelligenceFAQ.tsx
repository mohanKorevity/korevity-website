"use client";

import FAQSection from "./FAQSection";

const faqs = [
  {
    question: "What is Business Intelligence in simple terms?",
    answer:
      "Business Intelligence turns business data into clear dashboards, reports and insights that help people understand performance and make better-informed decisions. Instead of working through multiple spreadsheets or systems, important information can be brought together in a more useful view.",
  },
  {
    question: "What kind of dashboards can KoreVity build?",
    answer:
      "KoreVity can build operational, management and executive dashboards around the metrics that matter to your organization. These may include sales, finance, inventory, operations, logistics, productivity, customer performance and other business-specific KPIs.",
  },
  {
    question: "Do we need to already use Power BI?",
    answer:
      "No. Your organization does not need to already use Power BI. We assess your current data environment and requirements and determine the appropriate business intelligence approach as part of the implementation.",
  },
  {
    question: "Can KoreVity work with data from different systems?",
    answer:
      "Yes. Where suitable integrations and data access are available, information from multiple business systems can be brought together so teams can understand performance without manually comparing separate sources.",
  },
  {
    question: "Can you work with our existing spreadsheets?",
    answer:
      "Yes. Spreadsheets can be useful data sources, particularly for businesses that have not yet centralized all of their information. We can assess how your spreadsheets are currently used and determine how that information can become part of a more reliable reporting environment.",
  },
  {
    question: "Will our dashboards update automatically?",
    answer:
      "They can. Dashboard refresh schedules and data flows are configured according to the systems involved, the availability of the underlying data and the operational requirements of the business. This can significantly reduce the need to rebuild recurring reports manually.",
  },
  {
    question: "Does real-time always mean the data updates every second?",
    answer:
      "No. Real-time should reflect what the business actually needs and what the connected systems support. Some information may require near-instant updates, while other metrics may be refreshed periodically. We design the reporting approach around the usefulness and availability of the data rather than using real-time as a marketing label.",
  },
  {
    question: "Can different departments have different dashboards?",
    answer:
      "Yes. Dashboards can be designed around different responsibilities and information needs. Executives may require organization-wide KPIs, while operations, finance, sales or other teams may need more detailed views relevant to their work.",
  },
  {
    question: "Can we drill down into the numbers shown on a dashboard?",
    answer:
      "Yes, where the underlying data supports it. Interactive dashboards can allow users to move from high-level KPIs into more detailed information, helping them understand what is contributing to a particular result rather than seeing only a headline number.",
  },
  {
    question: "Can KoreVity identify patterns instead of just showing charts?",
    answer:
      "Yes. The objective is not simply to display charts. By combining business intelligence with connected business knowledge and appropriate AI capabilities, the KoreVity environment can help users identify patterns, uncover insights and understand information in business context.",
  },
  {
    question: "Can the system provide recommendations based on our data?",
    answer:
      "Where appropriate data and business context are available, the system can help provide recommendations for consideration. These recommendations are intended to support human judgment rather than automatically replace important business decisions.",
  },
  {
    question: "Can KoreVity automatically create our recurring reports?",
    answer:
      "Many recurring reporting processes can be automated or significantly reduced. The exact approach depends on where the data comes from, how the report is produced and who needs to receive or interact with it.",
  },
  {
    question: "What if our business data is messy or inconsistent?",
    answer:
      "That is common. Before reliable reporting can be created, we assess the relevant data sources, definitions and quality issues. Where necessary, the implementation can include steps to clean, structure or standardize information so dashboards are based on more dependable data.",
  },
  {
    question: "How do we know the numbers on our dashboards can be trusted?",
    answer:
      "Reliable business intelligence depends on clearly defined metrics and dependable source data. During implementation, we work to establish how important KPIs are calculated, where their data originates and how information moves into the reporting environment.",
  },
  {
    question: "Can we change our KPIs and dashboards later?",
    answer:
      "Yes. Business requirements change over time. Dashboards, metrics and reporting views can evolve as your organization introduces new priorities, systems, processes or management requirements.",
  },
];

export default function BusinessIntelligenceFAQ() {
  return (
    <FAQSection
      id="business-intelligence"
      eyebrow="BUSINESS INTELLIGENCE"
      title="From Data To Better Decisions"
      description="Learn how KoreVity brings business data together through dashboards, reporting and intelligence that helps teams understand what is happening and why it matters."
      faqs={faqs}
    />
  );
}