export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "flowArrow";
      text: string;
    }
  | {
      type: "flow";
      steps: string[];
    }
  | {
      type: "list";
      listType: "ordered" | "unordered";
      items: string[];
    }
  | {
      type: "note";
      text: string;
    }
  | {
      type: "warning";
      text: string;
    }
  | {
      type: "risk";
      text: string;
    }
  | {
      type: "decision";
      text: string;
    }
  | {
      type: "deliverable";
      text: string;
    }
  | {
      type: "info";
      text: string;
    }
  | {
      type: "success";
      text: string;
    }
  | {
      type: "tip";
      text: string;
    }
  | {
      type: "definition";
      title: string;
      text: string;
    }
  | {
      type: "timeline";
      label: string;
      description: string;
    }
  | {
      type: "phase";
      title: string;
      description: string;
    }
  | {
      type: "milestone";
      title: string;
      description: string;
    }
  | {
      type: "table";
      rows: string[][];
    }
  | {
      type: "code";
      language?: string;
      filename?: string;
      code: string;
    };

export interface Section {
  id: string;
  title: string;
  blocks: ContentBlock[];
}