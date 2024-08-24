"use client";

export function Summary({ summary }: { summary: string }) {
  if (!summary) return null;

  return (
    <div className="flex flex-col text-center mb-10">
      {summary
        .split("\n")
        .filter((section) => section)
        .map((section, i) => (
          <p className="text-base text-left mb-2" key={`${section}-${i}`}>
            {section}
          </p>
        ))}
    </div>
  );
}
