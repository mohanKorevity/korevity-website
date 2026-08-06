"use client";

import FAQSection from "./FAQSection";

const faqs = [
  {
    question: "How does a KoreVity implementation begin?",
    answer:
      "We begin by understanding your business objectives, current systems, workflows, users, data and operational challenges. From there, we define the appropriate implementation roadmap and determine which KORTEX, business intelligence, automation and integration capabilities should be introduced.",
  },
  {
    question: "Do we need to prepare everything before working with KoreVity?",
    answer:
      "No. You do not need to arrive with a complete technical specification. We work with your team to understand the current environment, identify priorities and determine what information, access and resources are required as the implementation progresses.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Implementation time depends on the size and complexity of the environment. Factors include the number of systems being connected, the amount of business knowledge involved, required workflows, dashboards, users and security requirements. We establish a clear implementation roadmap before the main build begins.",
  },
  {
    question: "Do we have to implement everything at once?",
    answer:
      "No. KoreVity can be introduced in phases. A business may begin with the highest-value knowledge, reporting or automation requirements and expand the environment over time as additional priorities are identified.",
  },
  {
    question: "Will implementation disrupt our existing operations?",
    answer:
      "Our objective is to minimize disruption. Because KoreVity is designed to work around existing business systems wherever practical, implementation can be planned progressively with appropriate testing and validation before new capabilities become part of everyday operations.",
  },
  {
    question: "Will our employees need technical knowledge to use KORTEX?",
    answer:
      "No. KORTEX is intended to make business information easier to work with, not require employees to become technical specialists. Users interact with the capabilities relevant to their roles while the underlying technical environment is managed separately.",
  },
  {
    question: "Do you provide onboarding or training?",
    answer:
      "Yes. Appropriate onboarding and guidance are part of helping teams adopt the environment successfully. The exact training approach depends on the users, capabilities and workflows being introduced.",
  },
  {
    question: "Can different users have different permissions?",
    answer:
      "Yes. Access can be configured according to roles and business requirements so users interact only with the knowledge, information and capabilities they are authorized to use.",
  },
  {
    question: "Can sensitive information be restricted from certain employees?",
    answer:
      "Yes. Sensitive business information should not automatically become visible simply because it exists within the organization. Access controls can be used to separate information according to appropriate roles, responsibilities and permissions.",
  },
  {
    question: "How does KoreVity approach data security?",
    answer:
      "Security is considered across the architecture, access controls, integrations and information flows used in each implementation. The exact safeguards depend on the systems and services involved, and we design the environment around appropriate access, controlled information handling and secure integration practices.",
  },
  {
    question: "Does KORTEX automatically have access to all of our company data?",
    answer:
      "No. KORTEX does not automatically gain access to every system or piece of information within your company. The knowledge, data sources, integrations and permissions available to it are deliberately configured as part of your environment.",
  },
  {
    question: "Is our business information shared with other KoreVity clients?",
    answer:
      "No. One client's business environment and information are not intended to become another client's knowledge source. Client environments are designed around their own approved business information, users and access requirements.",
  },
  {
    question: "Is our company data used to train public AI models?",
    answer:
      "KoreVity's production architecture is designed so client business information is not intentionally used to train public AI models. The exact data-handling terms also depend on the AI and infrastructure providers used in the final implementation, and these requirements are evaluated when the production environment is configured.",
  },
  {
    question: "Can we control what information is connected to AI capabilities?",
    answer:
      "Yes. AI access should be deliberate rather than unrestricted. The information and capabilities available within an implementation can be controlled according to the organization's requirements, permissions and approved use cases.",
  },
  {
    question: "What happens if someone leaves our company or changes roles?",
    answer:
      "User access can be updated or removed as responsibilities change. Access management is important so former employees or users who change roles do not retain permissions that are no longer appropriate.",
  },
  {
    question: "Do you test the system before launch?",
    answer:
      "Yes. Relevant functionality, workflows, integrations and reporting should be tested and validated before production use. The exact testing process depends on the capabilities being implemented and the level of business risk involved.",
  },
  {
    question: "What happens after KoreVity is launched?",
    answer:
      "Launch is not necessarily the end of the relationship. The environment can continue to be supported, monitored and improved as business requirements evolve, new opportunities appear and existing processes change.",
  },
  {
    question: "Do you provide ongoing support?",
    answer:
      "Yes. Ongoing support and improvement can form part of the KoreVity relationship. This can include maintaining relevant capabilities, addressing issues and evolving the environment as the client's requirements change.",
  },
  {
    question: "Can we add new departments, users or systems later?",
    answer:
      "Yes. KoreVity is designed to evolve over time. Additional users, departments, knowledge, integrations, dashboards and workflows can be introduced as the organization grows or its priorities change.",
  },
  {
    question: "What happens if one of our connected systems changes?",
    answer:
      "Changes to connected software, APIs, data structures or business processes may require the relevant integration or workflow to be reviewed and updated. Ongoing support helps keep the environment aligned with changes in the systems around it.",
  },
];

export default function ImplementationSecurityFAQ() {
  return (
    <FAQSection
      id="implementation-security"
      eyebrow="IMPLEMENTATION & SECURITY"
      title="Built For Real Business Environments"
      description="Learn how KoreVity is introduced into your organization, how access and business information are controlled, and how the environment continues to evolve after launch."
      faqs={faqs}
    />
  );
}