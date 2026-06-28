import React from 'react';

/**
 * SectionSeparator — Full-width decorative temple frieze band.
 * Repeating geometric lotus-chain pattern in gold on dark.
 */
export default function SectionSeparator({ className = '' }: { className?: string }) {
  // Each "unit" is a small lotus/diamond motif repeated horizontally
  const patternWidth = 60;
  const h = 24;
  const cx = patternWidth / 2;
  const cy = h / 2;

  return (
    <div className={`w-full py-2 select-none pointer-events-none ${className}`}>
      <svg
        width="100%"
        height={h}
        viewBox={`0 0 ${patternWidth * 5} ${h}`}
        preserveAspectRatio="xMidYMid slice"
        className="w-full opacity-30"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="frieze-pattern" x="0" y="0" width={patternWidth} height={h} patternUnits="userSpaceOnUse">
            {/* Central diamond */}
            <polygon
              points={`${cx},${cy - 6} ${cx + 6},${cy} ${cx},${cy + 6} ${cx - 6},${cy}`}
              stroke="#C9A84C"
              strokeWidth="0.6"
              fill="none"
            />
            {/* Inner diamond */}
            <polygon
              points={`${cx},${cy - 3} ${cx + 3},${cy} ${cx},${cy + 3} ${cx - 3},${cy}`}
              stroke="#C9A84C"
              strokeWidth="0.4"
              fill="none"
            />
            {/* Center dot */}
            <circle cx={cx} cy={cy} r={1} fill="#C9A84C" fillOpacity={0.5} />
            {/* Connecting horizontal lines */}
            <line x1={cx + 6} y1={cy} x2={patternWidth} y2={cy} stroke="#C9A84C" strokeWidth="0.4" />
            <line x1={0} y1={cy} x2={cx - 6} y2={cy} stroke="#C9A84C" strokeWidth="0.4" />
            {/* Small chevron marks at edges */}
            <line x1={cx + 10} y1={cy - 2} x2={cx + 13} y2={cy} stroke="#C9A84C" strokeWidth="0.3" />
            <line x1={cx + 10} y1={cy + 2} x2={cx + 13} y2={cy} stroke="#C9A84C" strokeWidth="0.3" />
            <line x1={cx - 10} y1={cy - 2} x2={cx - 13} y2={cy} stroke="#C9A84C" strokeWidth="0.3" />
            <line x1={cx - 10} y1={cy + 2} x2={cx - 13} y2={cy} stroke="#C9A84C" strokeWidth="0.3" />
            {/* Top and bottom border lines */}
            <line x1={0} y1={2} x2={patternWidth} y2={2} stroke="#C9A84C" strokeWidth="0.2" />
            <line x1={0} y1={h - 2} x2={patternWidth} y2={h - 2} stroke="#C9A84C" strokeWidth="0.2" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#frieze-pattern)" />
      </svg>
    </div>
  );
}
