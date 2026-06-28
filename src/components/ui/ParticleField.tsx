'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  opacity: number;
  isPetal: boolean;
  angle: number;
  spinSpeed: number;
  color: string;
  waveSpeed: number;
  waveOffset: number;
}

const GOLD_TONES = ['#DA7A05', '#F59E0B', '#FBBF24', '#D4600A'];
const EMBER_COLOR = '#DA7A05';

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles = useRef<Particle[]>([]);

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

    // Fewer, larger, slower particles for a composed feel
    const count = Math.min(35, Math.floor((window.innerWidth * window.innerHeight) / 35000));

    const createParticle = (index: number, initial = false): Particle => {
      const isPetal = index % 3 !== 0; // 2/3 petals, 1/3 embers
      if (isPetal) {
        return {
          x: Math.random() * canvas.width,
          y: initial ? Math.random() * canvas.height : -20,
          size: Math.random() * 2.5 + 2,
          speedX: (Math.random() - 0.5) * 0.35,
          speedY: Math.random() * 0.4 + 0.3,
          opacity: Math.random() * 0.35 + 0.2,
          isPetal: true,
          angle: Math.random() * Math.PI * 2,
          spinSpeed: (Math.random() - 0.5) * 0.02,
          color: GOLD_TONES[Math.floor(Math.random() * GOLD_TONES.length)],
          waveSpeed: Math.random() * 0.008 + 0.003,
          waveOffset: Math.random() * Math.PI * 2,
        };
      } else {
        return {
          x: Math.random() * canvas.width,
          y: initial ? Math.random() * canvas.height : canvas.height + 20,
          size: Math.random() * 1.2 + 0.4,
          speedX: (Math.random() - 0.5) * 0.2,
          speedY: -(Math.random() * 0.5 + 0.25),
          opacity: Math.random() * 0.4 + 0.2,
          isPetal: false,
          angle: 0,
          spinSpeed: 0,
          color: EMBER_COLOR,
          waveSpeed: 0,
          waveOffset: 0,
        };
      }
    };

    particles.current = Array.from({ length: count }, (_, i) => createParticle(i, true));

    let animId: number;
    let time = 0;

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current.forEach((p, idx) => {
        if (p.isPetal) {
          p.angle += p.spinSpeed;
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(p.waveOffset + time * p.waveSpeed) * 0.3;

          ctx.save();
          ctx.translate(p.x, p.y);
          ctx.rotate(p.angle);
          ctx.beginPath();
          ctx.ellipse(0, 0, p.size * 1.6, p.size * 0.7, 0, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = p.opacity;
          ctx.shadowBlur = 3;
          ctx.shadowColor = p.color;
          ctx.fill();

          // Inner petal vein
          ctx.beginPath();
          ctx.moveTo(-p.size, 0);
          ctx.lineTo(p.size * 0.6, 0);
          ctx.strokeStyle = 'rgba(253, 242, 233, 0.2)';
          ctx.lineWidth = 0.4;
          ctx.stroke();
          ctx.restore();

          if (p.y > canvas.height + 20 || p.x < -20 || p.x > canvas.width + 20) {
            particles.current[idx] = createParticle(idx);
          }
        } else {
          p.y += p.speedY;
          p.x += p.speedX + Math.sin(time * 0.015 + idx) * 0.08;

          ctx.save();
          ctx.globalAlpha = p.opacity;
          ctx.shadowBlur = 8;
          ctx.shadowColor = '#DA7A05';

          const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 4);
          gradient.addColorStop(0, 'rgba(251, 191, 36, 1)');
          gradient.addColorStop(0.3, 'rgba(218, 122, 5, 0.5)');
          gradient.addColorStop(1, 'rgba(18, 7, 8, 0)');

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size * 4, 0, Math.PI * 2);
          ctx.fillStyle = gradient;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = '#FDF2E9';
          ctx.fill();
          ctx.restore();

          if (p.y < -20 || p.x < -20 || p.x > canvas.width + 20) {
            particles.current[idx] = createParticle(idx);
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
    <canvas
      ref={canvasRef}
      className="hidden md:block fixed inset-0 pointer-events-none z-0"
      style={{ mixBlendMode: 'screen' }}
    />
  );
}
