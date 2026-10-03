function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}) {
  const alignment =
    align === "center" ? "mx-auto text-center" : "text-left";

  return (
    <div className={`min-w-0 w-full max-w-2xl ${alignment}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[var(--accent)]">
          {eyebrow}
        </p>
      )}

      <h2 className="min-w-0 max-w-full text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 min-w-0 max-w-full text-base leading-7 text-[var(--muted)] sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeading;