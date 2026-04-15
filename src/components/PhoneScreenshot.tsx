type PhoneScreenshotProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function PhoneScreenshot({ src, alt, className = '' }: PhoneScreenshotProps) {
  return (
    <article
      className={`gold-border relative w-[220px] rounded-[2.4rem] bg-gradient-to-b from-[#2c1c16] to-[#170f0c] p-2 shadow-soft ${className}`}
      aria-label={alt}
    >
      <div className="relative h-full overflow-hidden rounded-[2rem] border border-copper/20 bg-noir/95">
        <div className="pointer-events-none absolute left-1/2 top-2 z-10 h-1.5 w-14 -translate-x-1/2 rounded-full bg-copper/65" />
        <img src={src} alt={alt} className="h-[460px] w-full object-cover object-top" loading="lazy" />
      </div>
    </article>
  );
}
