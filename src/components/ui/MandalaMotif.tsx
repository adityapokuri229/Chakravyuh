import React from 'react';

/**
 * MandalaMotif — Large parametric SVG mandala for backgrounds.
 * Uses concentric circles, polygon star patterns, and lotus petals via SVG math.
 */
export default function MandalaMotif({
  size = 600,
  opacity = 0.06,
  className = '',
}: {
  size?: number;
  opacity?: number;
  className?: string;
}) {
  const cx = 50;
  const cy = 50;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`pointer-events-none select-none ${className}`}
      style={{ opacity }}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={46} stroke="#C9A84C" strokeWidth="0.4" />
      <circle cx={cx} cy={cy} r={44} stroke="#C9A84C" strokeWidth="0.2" strokeDasharray="2 2" />

      {/* 16-point star polygon — outer */}
      <polygon
        points={Array.from({ length: 16 }, (_, i) => {
          const angle = (i * 360) / 16 - 90;
          const r = i % 2 === 0 ? 42 : 34;
          const x = cx + r * Math.cos((angle * Math.PI) / 180);
          const y = cy + r * Math.sin((angle * Math.PI) / 180);
          return `${x},${y}`;
        }).join(' ')}
        stroke="#C9A84C"
        strokeWidth="0.3"
      />

      {/* Middle concentric rings */}
      <circle cx={cx} cy={cy} r={30} stroke="#C9A84C" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r={28} stroke="#C9A84C" strokeWidth="0.2" strokeDasharray="1.5 1" />

      {/* 12-point star polygon — middle */}
      <polygon
        points={Array.from({ length: 12 }, (_, i) => {
          const angle = (i * 360) / 12 - 90;
          const r = i % 2 === 0 ? 26 : 20;
          const x = cx + r * Math.cos((angle * Math.PI) / 180);
          const y = cy + r * Math.sin((angle * Math.PI) / 180);
          return `${x},${y}`;
        }).join(' ')}
        stroke="#C9A84C"
        strokeWidth="0.3"
      />

      {/* Lotus petals — 8 around the center */}
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i * 360) / 8;
        return (
          <ellipse
            key={`petal-${i}`}
            cx={cx}
            cy={cy - 15}
            rx={3}
            ry={8}
            stroke="#C9A84C"
            strokeWidth="0.35"
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}

      {/* Inner star polygon — 8-point */}
      <polygon
        points={Array.from({ length: 8 }, (_, i) => {
          const angle = (i * 360) / 8 - 90;
          const r = i % 2 === 0 ? 12 : 7;
          const x = cx + r * Math.cos((angle * Math.PI) / 180);
          const y = cy + r * Math.sin((angle * Math.PI) / 180);
          return `${x},${y}`;
        }).join(' ')}
        stroke="#C9A84C"
        strokeWidth="0.3"
      />

      {/* Center circle */}
      <circle cx={cx} cy={cy} r={4} stroke="#C9A84C" strokeWidth="0.5" />
      <circle cx={cx} cy={cy} r={2} fill="#C9A84C" fillOpacity={0.3} />

      {/* Radial lines from center to outer ring */}
      {Array.from({ length: 24 }, (_, i) => {
        const angle = (i * 360) / 24;
        const x2 = cx + 46 * Math.cos((angle * Math.PI) / 180);
        const y2 = cy + 46 * Math.sin((angle * Math.PI) / 180);
        const x1 = cx + 4 * Math.cos((angle * Math.PI) / 180);
        const y1 = cy + 4 * Math.sin((angle * Math.PI) / 180);
        return (
          <line
            key={`ray-${i}`}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#C9A84C"
            strokeWidth="0.12"
            strokeDasharray={i % 3 === 0 ? 'none' : '1 2'}
          />
        );
      })}

      {/* Dots on outer ring */}
      {Array.from({ length: 16 }, (_, i) => {
        const angle = (i * 360) / 16;
        const x = cx + 44 * Math.cos((angle * Math.PI) / 180);
        const y = cy + 44 * Math.sin((angle * Math.PI) / 180);
        return <circle key={`dot-${i}`} cx={x} cy={y} r={0.8} fill="#C9A84C" />;
      })}
    </svg>
  );
}
