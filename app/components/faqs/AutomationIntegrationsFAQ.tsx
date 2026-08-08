"use client";

import FAQSection from "./FAQSection";

const faqs = [
  {
    question: "What kinds of business processes can KoreVity automate?",
    answer:
      "KoreVity can automate many repetitive and rules-based processes such as approvals, notifications, data movement, recurring reporting, task creation, document routing and other operational workflows. The right opportunities depend on how your business currently works and which processes create unnecessary manual effort.",
  },
  {
    question: "How do we know which processes should be automated?",
    answer:
      "We first understand how the process works today, who is involved, what systems are used and where delays or repetitive work occur. Automation is then applied where it creates practical business value rather than automating a process simply because it is technically possible.",
  },
  {
    question: "Do we need to replace our existing software before automating?",
    answer:
      "Usually not. KoreVity is designed to work with existing business systems wherever practical. We look for ways to connect and improve the tools you already use before recommending unnecessary replacement.",
  },
  {
    question: "Can KoreVity connect different software systems together?",
    answer:
      "Yes. Where the systems provide suitable integration methods, KoreVity can connect applications and data sources so information can move between them more efficiently and teams spend less time transferring information manually.",
  },
  {
    question: "What if our software does not have a direct integration?",
    answer:
      "A direct integration is not always required. Depending on the system, other supported methods such as APIs, data exports, databases or approved integration approaches may be available. We assess what is technically possible and appropriate before designing the workflow.",
  },
  {
    question: "What is an API, and do we need to understand it?",
    answer:
      "An API is a way for different software systems to exchange information and perform approved actions. Your team does not need to understand the technical details. We handle the integration work and explain what information is being connected in practical business terms.",
  },
  {
    question: "Can approval processes be automated?",
    answer:
      "Yes. Many approval workflows can be streamlined by automatically routing requests to the appropriate person, tracking their status, sending reminders and continuing the process after approval or rejection.",
  },
  {
    question: "Can the system automatically send notifications or alerts?",
    answer:
      "Yes. Workflows can generate notifications when relevant business events occur, such as an approval being required, a process reaching a particular stage, an exception being detected or another defined condition being met.",
  },
  {
    question: "Can workflows run without someone manually starting them?",
    answer:
      "Yes. Where appropriate, workflows can be triggered automatically by events, schedules or defined conditions. Other workflows can remain user-initiated when human control is preferable.",
  },
  {
    question: "Does automation mean employees lose control of the process?",
    answer:
      "No. Automation can be designed with human review, approvals and decision points wherever they are needed. The goal is to remove unnecessary repetitive work while preserving human control over activities that require judgment or authorization.",
  },
  {
    question: "Can KoreVity work with automated workflows?",
    answer:
      "Yes. KoreVity, integrations and automation are designed to work as parts of the same connected environment. Depending on the implementation, users can work with business knowledge and intelligence while connected workflows handle appropriate operational actions and information movement.",
  },
  {
    question: "Can automation reduce manual data entry?",
    answer:
      "Yes. When systems can be connected appropriately, information can often move between applications automatically instead of employees repeatedly entering or copying the same data. This can save time and reduce avoidable errors.",
  },
  {
    question: "What happens if an automated workflow fails?",
    answer:
      "Business-critical automation should not simply fail silently. Workflows can be designed with appropriate error handling, status tracking and notifications so problems can be identified and addressed rather than remaining unnoticed.",
  },
  {
    question: "Can we automate everything in our business?",
    answer:
      "Technically possible does not always mean advisable. Some activities are better handled by people because they involve judgment, relationships, exceptions or significant business decisions. We focus automation on areas where it improves reliability, speed or efficiency without removing necessary human oversight.",
  },
  {
    question: "Can automations be changed after they are launched?",
    answer:
      "Yes. Business processes evolve, so workflows can be reviewed and modified as requirements, systems and responsibilities change. Ongoing improvement is part of maintaining an effective automation environment.",
  },
  {
    question: "Can KoreVity connect multiple departments into the same workflow?",
    answer:
      "Yes. A workflow can move across teams or departments when the underlying business process requires it. Permissions, responsibilities and approval points can be designed so each participant interacts with the appropriate part of the process.",
  },
];

export default function AutomationIntegrationsFAQ() {
  return (
    <FAQSection
      id="automation-integrations"
      eyebrow="AUTOMATION & INTEGRATIONS"
      title="Connect Systems. Remove Repetitive Work."
      description="Understand how KoreVity connects business systems and automates repeatable processes while keeping people in control where judgment and approval matter."
      faqs={faqs}
    />
  );
}