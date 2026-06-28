import React from 'react';

/**
 * OrnateDivider — Mandala-based horizontal divider.
 * Geometric lotus star motif at center with gradient gold lines.
 */
export default function OrnateDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 my-8 select-none pointer-events-none ${className}`}>
      {/* Left gradient line */}
      <div className="h-px bg-gradient-to-r from-transparent to-gold/40 flex-1 max-w-[200px]" />

      {/* Center mandala motif */}
      <svg
        className="w-12 h-12 shrink-0"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle cx="50" cy="50" r="38" stroke="#DA7A05" strokeWidth="0.8" opacity={0.5} />
        
        {/* Dashed middle circle */}
        <circle cx="50" cy="50" r="28" stroke="#DA7A05" strokeWidth="0.5" strokeDasharray="3 2" opacity={0.4} />

        {/* 8-point star */}
        <polygon
          points={Array.from({ length: 8 }, (_, i) => {
            const angle = (i * 360) / 8 - 90;
            const r = i % 2 === 0 ? 22 : 13;
            const x = 50 + r * Math.cos((angle * Math.PI) / 180);
            const y = 50 + r * Math.sin((angle * Math.PI) / 180);
            return `${x},${y}`;
          }).join(' ')}
          stroke="#DA7A05"
          strokeWidth="0.6"
          opacity={0.6}
        />

        {/* Lotus petals */}
        {Array.from({ length: 8 }, (_, i) => (
          <ellipse
            key={i}
            cx={50}
            cy={50 - 18}
            rx={3.5}
            ry={8}
            stroke="#DA7A05"
            strokeWidth="0.5"
            opacity={0.35}
            transform={`rotate(${i * 45} 50 50)`}
          />
        ))}

        {/* Inner circle */}
        <circle cx="50" cy="50" r="6" stroke="#DA7A05" strokeWidth="0.7" opacity={0.6} />
        
        {/* Center dot */}
        <circle cx="50" cy="50" r="2.5" fill="#DA7A05" fillOpacity={0.4} />

        {/* Outer dots */}
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 45 + 22.5) * (Math.PI / 180);
          return (
            <circle
              key={`dot-${i}`}
              cx={50 + 34 * Math.cos(angle)}
              cy={50 + 34 * Math.sin(angle)}
              r={1.5}
              fill="#DA7A05"
              fillOpacity={0.5}
            />
          );
        })}
      </svg>

      {/* Right gradient line */}
      <div className="h-px bg-gradient-to-l from-transparent to-gold/40 flex-1 max-w-[200px]" />
    </div>
  );
}
