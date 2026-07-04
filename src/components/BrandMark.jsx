import { site } from '../data/site.js';

export default function BrandMark({ compact = false, markOnly = false, className = '' }) {
  if (markOnly) {
    return <CronhozSymbol className={className} />;
  }

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <CronhozSymbol />
      {!compact ? (
        <span className="leading-none">
          <span className="brand-wordmark block text-[1.05rem] font-black text-white">CRONHOZ<span className="text-mintlab">_</span></span>
          <span className="brand-subword block text-[0.72rem] font-bold text-mintlab">LABS</span>
          <span className="sr-only">{site.name} · {site.primaryDomain}</span>
        </span>
      ) : null}
    </span>
  );
}

export function CronhozSymbol({ className = '' }) {
  return (
    <span className={`brand-mark-v8 ${className}`} aria-hidden="true">
      <svg viewBox="0 0 128 128" className="h-full w-full" role="img" focusable="false">
        <defs>
          <linearGradient id="cursorGradient" x1="68" y1="90" x2="103" y2="90" gradientUnits="userSpaceOnUse">
            <stop stopColor="#10B981" />
            <stop offset="1" stopColor="#38BDF6" />
          </linearGradient>
        </defs>
        <path
          d="M82 36H48C40.268 36 34 42.268 34 50V78C34 85.732 40.268 92 48 92H82"
          className="brand-mark-c"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M70 92H100"
          stroke="url(#cursorGradient)"
          strokeWidth="14"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
