"use client";

import FlowDiagram from "./FlowDiagram";
import ListBlock from "./ListBlock";
import TableBlock from "./TableBlock";
import NoteCard from "./cards/NoteCard";
import WarningCard from "./cards/WarningCard";
import DecisionCard from "./cards/DecisionCard";
import RiskCard from "./cards/RiskCard";
import DeliverableCard from "./cards/DeliverableCard";
import TimelineCard from "./cards/TimelineCard";
import PhaseCard from "./cards/PhaseCard";
import MilestoneCard from "./cards/MilestoneCard";
import InfoCard from "./cards/InfoCard";
import SuccessCard from "./cards/SuccessCard";
import TipCard from "./cards/TipCard";
import DefinitionCard from "./cards/DefinitionCard";
import HighlightText from "./HighlightText";
import CodeBlock from "./cards/CodeBlock";
interface BlockRendererProps {
  block: any;
  search: string;
}

export default function BlockRenderer({
  block,
  search,
}: BlockRendererProps) {

  switch (block.type) {

    case "paragraph":
  return (
    <p className="leading-8 text-slate-300">
      <HighlightText
        text={block.text ?? ""}
        search={search}
      />
    </p>
  );

    case "note":
  return (
    <NoteCard
      text={block.text ?? ""}
      search={search}
    />
  );

    case "warning":
     
  return (
    <WarningCard
      text={block.text ?? ""}
      search={search}
    />
  );

    case "decision":
  return (
    <DecisionCard
      text={block.text ?? ""}
      search={search}
    />
  );

    case "risk":
    
  return (
    <RiskCard
      text={block.text ?? ""}
      search={search}
    />
  );

    case "deliverable":
      
  return (
    <DeliverableCard
      text={block.text ?? ""}
      search={search}
    />
  );

    case "flow":
      return (
        <FlowDiagram
          steps={block.steps ?? []}
        />
      );

    case "timeline":
      return (
        <TimelineCard
          label={block.label}
          description={block.description}
        />
      );

    case "phase":
      return (
        <PhaseCard
          title={block.title}
          description={block.description}
        />
      );

    case "milestone":
      return (
        <MilestoneCard
          title={block.title}
          description={block.description}
        />
      );

    case "info":
  return (
    <InfoCard
      text={block.text ?? ""}
      search={search}
    />
  );

    case "success":
  return (
    <SuccessCard
      text={block.text ?? ""}
      search={search}
    />
  );

   case "tip":
  return (
    <TipCard
      text={block.text ?? ""}
      search={search}
    />
  );

    case "definition":
  return (
    <DefinitionCard
      title={block.title ?? ""}
      text={block.text ?? ""}
      search={search}
    />
  );
case "list":
  return (
    <ListBlock
      items={block.items ?? []}
      listType={block.listType}
      search={search}
    />
  );
  case "table":
  return (
    <TableBlock
  rows={block.rows ?? []}
  search={search}
/>
  );

  case "code":
  return (
    <CodeBlock
      language={block.language}
      filename={block.filename}
      code={block.code ?? ""}
    />
  );
    default:
      return null;
  }
}