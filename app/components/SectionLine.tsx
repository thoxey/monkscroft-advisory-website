export default function SectionLine({
  align = "left",
}: {
  align?: "left" | "center";
}) {
  return (
    <div
      className={`mb-4 h-px w-8 bg-accent ${align === "center" ? "mx-auto" : ""}`}
    />
  );
}
