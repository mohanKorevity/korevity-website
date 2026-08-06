"use client";

import FlowNode from "./FlowNode";
import FlowConnector from "./FlowConnector";

interface FlowDiagramProps {
  steps: string[];
}

export default function FlowDiagram({
  steps,
}: FlowDiagramProps) {
  return (
    <div className="my-10 flex flex-col items-center">
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex w-full max-w-3xl flex-col items-center"
        >
          <FlowNode
  number={index + 1}
  title={step}
/>

          {index < steps.length - 1 && (
            <FlowConnector />
          )}
        </div>
      ))}
    </div>
  );
}