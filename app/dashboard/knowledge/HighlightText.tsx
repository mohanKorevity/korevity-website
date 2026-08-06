interface HighlightTextProps {
  text: string;
  search: string;
}

export default function HighlightText({
  text,
  search,
}: HighlightTextProps) {
  if (!search.trim()) return <>{text}</>;

  const escaped = search.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );

  const regex = new RegExp(`(${escaped})`, "gi");

  const parts = text.split(regex);

  return (
    <>
      {parts.map((part, index) =>
        regex.test(part) ? (
          <mark
            key={index}
            className="
              rounded
              bg-yellow-300
              px-1
              text-black
            "
          >
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}