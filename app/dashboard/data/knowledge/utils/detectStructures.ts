export function detectStructures<
  T extends {
    type: string;
    text?: string;
  }
>(blocks: T[]): T[] {
  const result: any[] = [];

  let i = 0;

  while (i < blocks.length) {
    const block = blocks[i];

    // Anything except paragraphs passes through.
    if (block.type !== "paragraph") {
      result.push(block);
      i++;
      continue;
    }

    const steps: string[] = [];
    let j = i;

    while (j < blocks.length) {
      const current = blocks[j];

      if (current.type !== "paragraph") break;

      const text = current.text?.trim();

      if (!text) break;

      // Ignore arrow separator paragraphs
      if (text === "↓" || text === "→" || text === "←") {
        j++;
        continue;
      }

      // Stop when we hit a real sentence
      if (
        text.length > 60 ||
        text.endsWith(".") ||
        text.endsWith(":")
      ) {
        break;
      }

      steps.push(text);
      j++;
    }

    // 4+ labels = flow
    if (steps.length >= 4) {
      result.push({
        type: "flow",
        steps,
      });

      i = j;
      continue;
    }

    result.push(block);
    i++;
  }

  return result as T[];
}