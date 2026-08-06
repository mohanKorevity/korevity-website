"use client";

import FAQSection from "./FAQSection";

const faqs = [
  {
    question: "What exactly does KoreVity do?",
    answer:
      "KoreVity helps businesses connect knowledge, data, systems and workflows into one intelligent operating environment. We combine KORTEX, business intelligence, automation and integrations so teams can reduce manual work, improve visibility and make better-informed decisions.",
  },
  {
    question: "Is KoreVity a software company or a consulting company?",
    answer:
      "KoreVity combines software with implementation. KORTEX is our enterprise intelligence platform, while our team helps configure, integrate and improve the surrounding dashboards, automations and business systems around each client's workflows and goals.",
  },
  {
    question: "What types of businesses is KoreVity designed for?",
    answer:
      "KoreVity is designed for organizations that want to reduce manual work, connect disconnected systems, improve access to business knowledge and gain clearer operational visibility. The platform can support different industries and business sizes because each environment is configured around the organization's own systems, workflows and priorities.",
  },
  {
    question: "Do we need a large IT team to use KoreVity?",
    answer:
      "No. KoreVity is designed so business users can benefit from the platform without needing to understand the technical architecture behind it. We handle the implementation and integration work, while your team uses the dashboards, workflows and KORTEX capabilities relevant to their roles.",
  },
  {
    question: "Do you replace the software we already use?",
    answer:
      "Usually not. KoreVity is built around connecting and improving the systems your business already relies on. Where practical, we integrate existing tools rather than forcing your organization to replace software that is already working well.",
  },
  {
    question: "What makes KoreVity different from a normal automation or BI company?",
    answer:
      "Traditional projects often deliver a dashboard, an automation or an AI tool separately. KoreVity connects these capabilities through KORTEX so business knowledge, operational data, systems, workflows and intelligence can work together as one coordinated environment.",
  },
  {
    question: "Does every KoreVity client receive exactly the same system?",
    answer:
      "No. The core KORTEX platform is consistent, but each business environment is configured around the client's users, permissions, knowledge, integrations, workflows, dashboards and operational priorities.",
  },
  {
  question: "What business problems can KoreVity help solve?",
  answer:
    "KoreVity can help address problems such as repetitive manual work, disconnected systems, scattered business knowledge, slow reporting, limited operational visibility and difficulty finding the information employees need. The exact solution depends on how your business currently operates and where the greatest opportunities for improvement exist.",
},
{
  question: "Is KoreVity only for companies that already use advanced technology?",
  answer:
    "No. A business does not need an advanced technology environment to work with KoreVity. We assess the systems, data and processes you already have and design an appropriate path forward rather than expecting your organization to already have a complex technology stack.",
},
{
  question: "Can KoreVity work across multiple departments?",
  answer:
    "Yes. KoreVity can support different parts of an organization while keeping their information, workflows and access requirements appropriately separated. This can allow teams such as operations, finance, sales, management and other departments to work within a connected environment without everyone needing access to the same information.",
},
{
  question: "Will KoreVity change as our business grows?",
  answer:
    "Yes. KoreVity is designed to evolve with your organization. New knowledge, users, workflows, integrations, dashboards and capabilities can be introduced as your requirements change, allowing the environment to grow without rebuilding everything from the beginning.",
},
];

export default function AboutKoreVityFAQ() {
  return (
    <FAQSection
      id="about-korevity"
      eyebrow="ABOUT KOREVITY"
      title="Understanding KoreVity"
      description="Start here if you're new to KoreVity and want to understand what we do, who we help and how our approach is different."
      faqs={faqs}
    />
  );
}