"use client";

import FAQSection from "./FAQSection";

const faqs = [
  {
    question: "How do we get started with KoreVity?",
    answer:
      "The first step is a conversation about your business, current systems, workflows and the challenges you want to solve. From there, we identify the highest-value opportunities and define the right path forward.",
  },
  {
    question: "Do we need to know exactly what solution we want before contacting you?",
    answer:
      "No. Many businesses know the problems they want to solve but are not sure which technology should be used. We help translate those business challenges into the right combination of business knowledge, automation, integrations and business intelligence.",
  },
  {
    question: "What should we prepare before the first discussion?",
    answer:
      "It helps to have a basic understanding of the processes you want to improve, the systems your team currently uses and where manual work, delays or information gaps are causing problems. You do not need to prepare a technical specification.",
  },
  {
    question: "Who from our company should join the first conversation?",
    answer:
      "The most useful participants are usually people who understand the business problem, the current workflow and the systems involved. Depending on the project, this may include a business owner, department leader, operations manager or someone responsible for the relevant technology.",
  },
  {
    question: "What happens after the first consultation?",
    answer:
      "If there is a good fit, we move into a more detailed discovery and assessment process. We map the relevant workflows, systems, users, information and operational requirements before defining the implementation approach.",
  },
  {
    question: "Can we start with one department or one business problem?",
    answer:
      "Yes. A focused starting point can be a practical way to introduce KoreVity. You can begin with a high-value problem or department and expand the connected environment as additional opportunities are identified.",
  },
  {
    question: "Can we start with KoreVity and add automation or dashboards later?",
    answer:
      "Yes. The environment can be introduced in stages. A business may begin with KoreVity's business knowledge capabilities, business intelligence, automation or integrations depending on the most valuable initial use case, then expand over time.",
  },
  {
    question: "Can we begin with automation and add other KoreVity capabilities later?",
    answer:
      "Yes. The implementation can follow the priorities of your business. Existing automation, reporting or integration projects can later become part of a broader connected KoreVity environment.",
  },
  {
    question: "Do we need clean and perfectly organized data before starting?",
    answer:
      "No. Many businesses begin with information spread across spreadsheets, documents and multiple systems. Part of discovery is understanding the current state of your information and determining what needs to be organized, connected or improved.",
  },
  {
    question: "Do we need to move all of our documents into KoreVity immediately?",
    answer:
      "No. Knowledge can be introduced progressively. Organizations can begin with the documents and information that are most important to the initial use case and expand the knowledge environment over time.",
  },
  {
    question: "Can KoreVity work with a business that has never used automation or AI before?",
    answer:
      "Yes. The implementation is designed around the maturity of your current environment. Your team does not need prior AI or automation experience, and the solution should make work easier rather than introduce unnecessary technical complexity.",
  },
  {
    question: "What if we already have dashboards or automations?",
    answer:
      "They do not automatically need to be replaced. We assess what is already working, what can be improved and how existing capabilities can fit into the wider connected environment.",
  },
  {
    question: "Can we see how KoreVity works before committing to a full implementation?",
    answer:
      "Yes. KoreVity can demonstrate the platform experience and discuss how it would apply to your business use cases before a full implementation is defined.",
  },
  {
    question: "How involved will our team need to be during implementation?",
    answer:
      "Your team provides the business context we cannot obtain from technology alone. Key users help us understand workflows, validate requirements and confirm that the solution reflects how the organization actually operates.",
  },
  {
    question: "How do you decide what should be implemented first?",
    answer:
      "We prioritize opportunities based on business value, operational impact, feasibility and how quickly the capability can improve the way your team works. The goal is to solve meaningful problems rather than implement technology simply because it is available.",
  },
  {
    question: "What if we are not sure whether KoreVity is right for us?",
    answer:
      "That is exactly what the initial conversation is for. We can discuss your current challenges and determine whether KoreVity is a sensible fit. If the problem does not require the platform or the wider KoreVity approach, we would rather identify that early than recommend unnecessary technology.",
  },
];

export default function GettingStartedFAQ() {
  return (
    <FAQSection
      id="getting-started"
      eyebrow="GETTING STARTED"
      title="Starting With KoreVity"
      description="Understand what happens from your first conversation through discovery and the beginning of implementation."
      faqs={faqs}
    />
  );
}