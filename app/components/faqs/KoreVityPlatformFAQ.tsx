"use client";

import FAQSection from "./FAQSection";

const faqs = [
  {
    question: "What is KORTEX?",
    answer:
      "KoreVity is an intelligent operations platform that brings an organization's business knowledge, operational information and connected capabilities into an environment where employees can find answers, understand context, identify patterns, uncover insights and receive useful recommendations.",
  },
  {
    question: "Is KORTEX just another AI chatbot?",
    answer:
      "No. A general-purpose chatbot primarily responds using broad AI knowledge and whatever information a user provides during a conversation. KORTEX is designed around your organization's own business knowledge, users, permissions and connected environment, making it useful for everyday business work rather than general conversation.",
  },
  {
    question: "What can employees use KORTEX for?",
    answer:
      "Employees can use KORTEX to find business information, ask questions about organizational knowledge, understand documents and procedures, summarize relevant information, explore business context and receive insights or recommendations based on the information available to them.",
  },
  {
    question: "What kind of business knowledge can KORTEX work with?",
    answer:
      "KORTEX can work with organizational knowledge such as policies, procedures, SOPs, operational documentation, internal guidance and other approved business information. The exact knowledge available depends on what your organization chooses to include and how access is configured.",
  },
  {
    question: "Can KORTEX understand long or complicated business documents?",
    answer:
      "KORTEX is designed to transform business documents into structured knowledge so employees can work with the information more naturally. Instead of manually searching through lengthy documents, users can ask relevant questions and navigate the knowledge they are permitted to access.",
  },
  {
    question: "Can KORTEX summarize documents?",
    answer:
      "Yes. KORTEX can help summarize relevant business information so users can understand important points more quickly. The original business knowledge remains important, while summaries provide a faster way to understand and navigate it.",
  },
  {
    question: "Can KORTEX identify patterns and uncover insights?",
    answer:
      "Yes. Where appropriate information is available, KORTEX can help identify patterns, uncover insights and provide recommendations that support better-informed decisions. The objective is not simply to show what is happening, but to help users understand information in useful business context.",
  },
  {
    question: "Does KORTEX make business decisions for us?",
    answer:
      "Not by default. KORTEX is designed to support human decision-making rather than remove human responsibility. It can organize information, identify patterns, uncover insights and provide recommendations, while your organization retains control over important business decisions.",
  },
  {
    question: "Will every employee see the same information in KORTEX?",
    answer:
      "No. KORTEX is designed around controlled access. Different users can be given access to the knowledge and capabilities appropriate to their roles, helping organizations make information useful without making everything available to everyone.",
  },
  {
    question: "What happens when our policies or business information change?",
    answer:
      "Your KORTEX knowledge environment can be updated as the organization evolves. New information can be introduced and existing knowledge can be revised so employees can work with the current approved business information rather than relying permanently on outdated material.",
  },
  {
    question: "Can KORTEX work with information from different departments?",
    answer:
      "Yes. KORTEX can bring approved knowledge from different parts of the organization into a connected environment while respecting access controls. This helps reduce information silos without requiring every employee to have access to every department's information.",
  },
  {
    question: "Can KORTEX connect with our other business systems?",
    answer:
      "Yes. KORTEX is designed to operate as part of a connected business environment. Depending on the systems involved and the implementation requirements, KoreVity can integrate relevant data sources, workflows and business applications so information can work together more effectively.",
  },
  {
    question: "Does KORTEX replace our dashboards, automation or existing software?",
    answer:
      "No. KORTEX is intended to work alongside these capabilities. Business intelligence provides visibility, automation handles repeatable processes, integrations connect systems, and KORTEX provides an intelligence layer that helps people interact with business knowledge and information more effectively.",
  },
  {
    question: "Can KORTEX give incorrect answers?",
    answer:
      "AI systems can sometimes produce incomplete or incorrect responses, so KORTEX should not be treated as infallible. We design the environment around controlled business knowledge, appropriate context and responsible use, while important decisions should still follow your organization's required review and approval processes.",
  },
  {
    question: "What if KORTEX cannot find enough information to answer a question?",
    answer:
      "KORTEX should not invent business facts simply because information is missing. When sufficient approved information is unavailable, the appropriate behavior is to make that limitation clear rather than present unsupported information as certain.",
  },
  {
    question: "Does KORTEX automatically know everything about our company?",
    answer:
      "No. KORTEX only becomes useful in your business context through the knowledge, data, integrations and permissions configured for your environment. It does not automatically have access to every piece of information within your organization.",
  },
  {
    question: "Does KORTEX replace employees?",
    answer:
      "KORTEX is designed to help employees work more effectively, not simply remove people from business processes. It can reduce time spent searching for information, interpreting repetitive material and performing certain routine tasks so people can focus more attention on judgment, customers, collaboration and higher-value work.",
  },
  {
    question: "Can KORTEX grow as we add more users, knowledge and processes?",
    answer:
      "Yes. KORTEX is designed to evolve with the organization. Additional users, knowledge, permissions, integrations and capabilities can be introduced as business requirements grow and change.",
  },
];

export default function KoreVityPlatformFAQ() {
  return (
    <FAQSection
      id="korevity-platform"
      eyebrow="KOREVITY PLATFORM"
      title="Your Business Intelligence Layer"
      description="Understand how the KoreVity platform works, how your team can use it and how it turns business knowledge and connected information into practical intelligence."
      faqs={faqs}
    />
  );
}