type SectionTitleProps = {
  eyebrow: string;
  title: string;
  description: string;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  description,
  center = true,
}: SectionTitleProps) {
  return (
    <div className={center ? "text-center" : ""}>
      <p className="uppercase tracking-[6px] text-blue-500 font-semibold">
        {eyebrow}
      </p>

      <h2 className="mt-5 text-5xl font-black text-white">
        {title}
      </h2>

      <p
        className={`mt-6 text-xl text-slate-400 leading-8 ${
          center ? "mx-auto max-w-3xl" : "max-w-3xl"
        }`}
      >
        {description}
      </p>
    </div>
  );
}