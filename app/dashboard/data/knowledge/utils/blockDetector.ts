export type BlockType =
  | "paragraph"
  | "note"
  | "warning"
  | "risk"
  | "decision"
  | "deliverable"
  | "timeline"
  | "phase"
  | "milestone"
  | "code";

export function detectBlockType(text: string): BlockType {

    const lower = text.trim().toLowerCase();

    // Notes
    if (
        lower.startsWith("note:") ||
        lower.startsWith("notes:")
    )
        return "note";

    // Warning
    if (
        lower.startsWith("warning:") ||
        lower.startsWith("important:")
    )
        return "warning";

    // Risks
    if (
        lower.startsWith("risk:") ||
        lower.startsWith("risks:")
    )
        return "risk";

    // Decisions
    if (
        lower.startsWith("decision:")
    )
        return "decision";

    // Deliverables
    if (
        lower.startsWith("deliverable:") ||
        lower.startsWith("deliverables:")
    )
        return "deliverable";

    // Timeline
    if (
        /^week\s+\d+/i.test(text) ||
        /^month\s+\d+/i.test(text) ||
        /^day\s+\d+/i.test(text)
    )
        return "timeline";

    // Phases
    if (
        /^phase\s+\d+/i.test(text)
    )
        return "phase";

    // Milestones
    if (
        lower.startsWith("milestone")
    )
        return "milestone";

    
// Code block
if (
  text.trim().startsWith("```") &&
  text.trim().endsWith("```")
) {
  return "code";
}
// Default
return "paragraph";
}