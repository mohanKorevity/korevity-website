"use client";

import FAQSection from "./FAQSection";

const faqs = [
  {
    question: "What is KoreVity?",
    answer:
      "KoreVity is an intelligent operations platform that brings an organization's business knowledge, operational information and connected capabilities into an environment where employees can find answers, understand context, identify patterns, uncover insights and receive useful recommendations.",
  },
  {
    question: "Is KoreVity just another AI chatbot?",
    answer:
      "No. KoreVity is much broader than a general-purpose chatbot. KoreVity's AI assistant works with your organization's business knowledge, users, permissions and connected environment, making it useful for everyday business work rather than general conversation."
  },
  {
    question: "What can employees use KoreVity for?",
    answer:
      "Employees can use KoreVity's AI assistant to find business information, ask questions about organizational knowledge, understand documents and procedures, summarize relevant information, explore business context and receive insights or recommendations based on the information available to them.",
  },
  {
    question: "What kind of business knowledge can KoreVity work with?",
    answer:
      "KoreVity can work with organizational knowledge such as policies, procedures, SOPs, operational documentation, internal guidance and other approved business information. The exact knowledge available depends on what your organization chooses to include and how access is configured.",
  },
  {
    question: "Can KoreVity understand long or complicated business documents?",
    answer:
      "KoreVity is designed to transform business documents into structured knowledge so employees can work with the information more naturally. Instead of manually searching through lengthy documents, users can ask relevant questions and navigate the knowledge they are permitted to access.",
  },
  {
    question: "Can KoreVity summarize documents?",
    answer:
      "Yes. KoreVity's AI assistant can help summarize relevant business information so users can understand important points more quickly. The original business knowledge remains important, while summaries provide a faster way to understand and navigate it.",
  },
  {
    question: "Can KoreVity identify patterns and uncover insights?",
    answer:
      "Yes. Where appropriate information is available, KoreVity can help identify patterns, uncover insights and provide recommendations that support better-informed decisions. The objective is not simply to show what is happening, but to help users understand information in useful business context.",
  },
  {
    question: "Does KoreVity make business decisions for us?",
    answer:
      "Not by default. KoreVity is designed to support human decision-making rather than remove human responsibility. It can organize information, identify patterns, uncover insights and provide recommendations, while your organization retains control over important business decisions.",
  },
  {
    question: "Will every employee see the same information in KoreVity?",
    answer:
      "No. KoreVity is designed around controlled access. Different users can be given access to the knowledge and capabilities appropriate to their roles, helping organizations make information useful without making everything available to everyone.",
  },
  {
    question: "What happens when our policies or business information change?",
    answer:
      "Your KoreVity knowledge environment can be updated as the organization evolves. New information can be introduced and existing knowledge can be revised so employees can work with the current approved business information rather than relying permanently on outdated material.",
  },
  {
    question: "Can KoreVity work with information from different departments?",
    answer:
      "Yes. KoreVity can bring approved knowledge from different parts of the organization into a connected environment while respecting access controls. This helps reduce information silos without requiring every employee to have access to every department's information.",
  },
  {
    question: "Can KoreVity connect with our other business systems?",
    answer:
      "Yes. KoreVity is designed to operate as part of a connected business environment. Depending on the systems involved and the implementation requirements, relevant data sources, workflows and business applications can be integrated so information works together more effectively.",
  },
  {
    question: "Does KoreVity replace our dashboards, automation or existing software?",
    answer:
      "No. KoreVity is designed to work alongside your dashboards, automations and existing software. Business intelligence provides visibility, automation handles repeatable processes, integrations connect systems, and KoreVity brings these capabilities together with business knowledge and intelligence in one connected environment.",
  },
  {
    question: "Can KoreVity give incorrect answers?",
    answer:
      "AI systems can sometimes produce incomplete or incorrect responses, so KoreVity should not be treated as infallible. We design the environment around controlled business knowledge, appropriate context and responsible use, while important decisions should still follow your organization's required review and approval processes.",
  },
  {
    question: "What if KoreVity cannot find enough information to answer a question?",
    answer:
      "KoreVity should not invent business facts simply because information is missing. When sufficient approved information is unavailable, the appropriate behavior is to make that limitation clear rather than present unsupported information as certain.",
  },
  {
    question: "Does KoreVity automatically know everything about our company?",
    answer:
      "No. KoreVity only becomes useful in your business context through the knowledge, data, integrations and permissions configured for your environment. It does not automatically have access to every piece of information within your organization.",
  },
  {
    question: "Does KoreVity replace employees?",
    answer:
      "KoreVity is designed to help employees work more effectively, not simply remove people from business processes. It can reduce time spent searching for information, interpreting repetitive material and performing certain routine tasks so people can focus more attention on judgment, customers, collaboration and higher-value work.",
  },
  {
    question: "Can KoreVity grow as we add more users, knowledge and processes?",
    answer:
      "Yes. KoreVity is designed to evolve with the organization. Additional users, knowledge, permissions, integrations and capabilities can be introduced as business requirements grow and change.",
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