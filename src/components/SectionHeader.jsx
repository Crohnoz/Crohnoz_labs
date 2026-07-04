export default function SectionHeader({ eyebrow, title, children, align = 'left' }) {
  const center = align === 'center';

  return (
    <div className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className="mb-3 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {children ? <div className="mt-5 text-base leading-8 text-slate-300 md:text-lg">{children}</div> : null}
    </div>
  );
}
