import React from 'react';

/**
 * GoldCorner — Jali-inspired corner ornaments for cards.
 * Fine filigree geometric lines, gold stroke, no fill.
 * Hidden on small screens when `hideOnMobile` is true.
 */
export default function GoldCorner({
  className = '',
  hideOnMobile = false,
}: {
  className?: string;
  hideOnMobile?: boolean;
}) {
  const wrapperClass = hideOnMobile ? 'hidden md:block' : '';
  const svgClass = `w-7 h-7 text-gold/40 pointer-events-none select-none ${className}`;

  return (
    <span className={wrapperClass}>
      {/* Top Left */}
      <svg className={`absolute top-2 left-2 ${svgClass}`} viewBox="0 0 40 40" fill="none">
        {/* L-shaped corner bracket */}
        <path d="M 2 18 L 2 2 L 18 2" stroke="currentColor" strokeWidth="1" />
        {/* Inner arc flourish */}
        <path d="M 6 14 Q 6 6 14 6" stroke="currentColor" strokeWidth="0.6" fill="none" />
        {/* Corner dot */}
        <circle cx="3" cy="3" r="1.2" fill="currentColor" opacity={0.6} />
        {/* Small diamond */}
        <polygon points="10,2 12,4 10,6 8,4" stroke="currentColor" strokeWidth="0.5" fill="none" opacity={0.4} />
      </svg>
      {/* Top Right */}
      <svg className={`absolute top-2 right-2 ${svgClass}`} viewBox="0 0 40 40" fill="none">
        <path d="M 22 2 L 38 2 L 38 18" stroke="currentColor" strokeWidth="1" />
        <path d="M 26 6 Q 34 6 34 14" stroke="currentColor" strokeWidth="0.6" fill="none" />
        <circle cx="37" cy="3" r="1.2" fill="currentColor" opacity={0.6} />
        <polygon points="30,2 32,4 30,6 28,4" stroke="currentColor" strokeWidth="0.5" fill="none" opacity={0.4} />
      </svg>
      {/* Bottom Right */}
      <svg className={`absolute bottom-2 right-2 ${svgClass}`} viewBox="0 0 40 40" fill="none">
        <path d="M 38 22 L 38 38 L 22 38" stroke="currentColor" strokeWidth="1" />
        <path d="M 34 26 Q 34 34 26 34" stroke="currentColor" strokeWidth="0.6" fill="none" />
        <circle cx="37" cy="37" r="1.2" fill="currentColor" opacity={0.6} />
        <polygon points="30,38 32,36 30,34 28,36" stroke="currentColor" strokeWidth="0.5" fill="none" opacity={0.4} />
      </svg>
      {/* Bottom Left */}
      <svg className={`absolute bottom-2 left-2 ${svgClass}`} viewBox="0 0 40 40" fill="none">
        <path d="M 18 38 L 2 38 L 2 22" stroke="currentColor" strokeWidth="1" />
        <path d="M 14 34 Q 6 34 6 26" stroke="currentColor" strokeWidth="0.6" fill="none" />
        <circle cx="3" cy="37" r="1.2" fill="currentColor" opacity={0.6} />
        <polygon points="10,38 12,36 10,34 8,36" stroke="currentColor" strokeWidth="0.5" fill="none" opacity={0.4} />
      </svg>
    </span>
  );
}
