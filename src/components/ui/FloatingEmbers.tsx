'use client';

import { useEffect, useRef } from 'react';

interface Ember {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  opacity: number;
  life: number;
  maxLife: number;
  drift: number;
}

export default function FloatingEmbers({ count = 20 }: { count?: number }) {
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

    const embers: Ember[] = Array.from({ length: count }, () => createEmber(canvas));

    function createEmber(c: HTMLCanvasElement): Ember {
      return {
        x: Math.random() * c.width,
        y: c.height + Math.random() * 100,
        size: Math.random() * 3 + 1,
        speedY: -(Math.random() * 0.8 + 0.3),
        speedX: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        life: 0,
        maxLife: Math.random() * 300 + 200,
        drift: Math.random() * 2 - 1,
      };
    }

    let animId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      embers.forEach((ember) => {
        ember.life++;
        ember.y += ember.speedY;
        ember.x += ember.speedX + Math.sin(ember.life * 0.02) * ember.drift * 0.3;
        ember.opacity = Math.max(0, (1 - ember.life / ember.maxLife) * 0.6);

        const gradient = ctx.createRadialGradient(ember.x, ember.y, 0, ember.x, ember.y, ember.size * 4);
        gradient.addColorStop(0, `rgba(218, 122, 5, ${ember.opacity})`);
        gradient.addColorStop(0.3, `rgba(218, 122, 5, ${ember.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(218, 122, 5, 0)');

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size * 4, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(ember.x, ember.y, ember.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 215, 0, ${ember.opacity * 0.8})`;
        ctx.fill();

        if (ember.life > ember.maxLife || ember.y < -50) {
          Object.assign(ember, createEmber(canvas));
        }
      });

      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
