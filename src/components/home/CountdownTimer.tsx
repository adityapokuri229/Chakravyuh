'use client';

import { useState, useEffect } from 'react';
import { calculateTimeLeft } from '@/lib/utils';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date('2026-07-02T07:30:00');
    const tick = () => setTimeLeft(calculateTimeLeft(target));
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-xl px-4 py-3 flex gap-3 md:gap-4">
      {[
        { label: 'Days', value: timeLeft.days },
        { label: 'Hrs', value: timeLeft.hours },
        { label: 'Min', value: timeLeft.minutes },
        { label: 'Sec', value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="text-center">
          <div className="text-lg md:text-xl font-heading text-secondary">{item.value}</div>
          <div className="text-[10px] uppercase tracking-wider text-white/40">{item.label}</div>
        </div>
      ))}
    </div>
  );
}
