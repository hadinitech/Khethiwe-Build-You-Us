type PhoneMockProps = {
  title: string;
  subtitle: string;
  lines: string[];
};

export default function PhoneMock({ title, subtitle, lines }: PhoneMockProps) {
  return (
    <article className="gold-border w-[210px] rounded-[2.2rem] bg-gradient-to-b from-[#2c1c16] to-[#170f0c] p-2 shadow-soft">
      <div className="h-full rounded-[1.8rem] border border-copper/20 bg-noir/90 p-4">
        <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-copper/60" />
        <p className="text-xs uppercase tracking-[0.2em] text-caramel">{subtitle}</p>
        <h4 className="mt-2 text-lg font-semibold text-cream">{title}</h4>
        <div className="mt-4 space-y-2">
          {lines.map((line) => (
            <div key={line} className="rounded-xl border border-copper/25 bg-[#2a1b16]/60 p-2 text-sm text-beige">
              {line}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
