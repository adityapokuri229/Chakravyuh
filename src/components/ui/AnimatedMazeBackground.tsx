'use client';

import { useEffect, useRef } from 'react';

export default function AnimatedMazeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const cols = Math.ceil(canvas.width / 80);
    const rows = Math.ceil(canvas.height / 80);

    const paths: { x: number; y: number; w: number; h: number; phase: number; speed: number }[] = [];

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        if (Math.random() > 0.4) {
          paths.push({
            x: c * 80,
            y: r * 80,
            w: Math.random() > 0.5 ? 40 + Math.random() * 30 : 0,
            h: Math.random() > 0.5 ? 0 : 40 + Math.random() * 30,
            phase: Math.random() * Math.PI * 2,
            speed: 0.005 + Math.random() * 0.01,
          });
        }
      }
    }

    let animId: number;
    let time = 0;

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      paths.forEach((p) => {
        const glow = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = glow * 0.08;

        ctx.strokeStyle = `rgba(218, 122, 5, ${alpha})`;
        ctx.lineWidth = 1;

        if (p.w > 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x + p.w, p.y);
          ctx.stroke();
        }
        if (p.h > 0) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p.x, p.y + p.h);
          ctx.stroke();
        }

        if (glow > 0.7) {
          ctx.strokeStyle = `rgba(218, 122, 5, ${alpha * 2})`;
          ctx.lineWidth = 2;
          if (p.w > 0) {
            ctx.beginPath();
            ctx.arc(p.x + p.w / 2, p.y, 3, 0, Math.PI * 2);
            ctx.stroke();
          }
          if (p.h > 0) {
            ctx.beginPath();
            ctx.arc(p.x, p.y + p.h / 2, 3, 0, Math.PI * 2);
            ctx.stroke();
          }
        }
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-[3]" />
  );
}
