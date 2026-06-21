import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../anim.js';

// App release: end of July 2026.
const TARGET = new Date('2026-07-31T23:59:59');

function getRemaining() {
  const diff = Math.max(0, TARGET.getTime() - Date.now());
  const s = Math.floor(diff / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60,
    done: diff === 0,
  };
}

const UNITS = [
  ['days', 'Dní'],
  ['hours', 'Hodin'],
  ['minutes', 'Minut'],
  ['seconds', 'Sekund'],
];

export default function Countdown() {
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative py-24 sm:py-28">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-content section-px text-center"
      >
        <motion.span variants={fadeUp} className="eyebrow mb-6">
          Brzy spouštíme
        </motion.span>
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl font-700 tracking-tight text-ink sm:text-4xl"
        >
          {t.done ? 'Aplikace je venku! 🎉' : 'Odpočet do spuštění'}
        </motion.h2>
        <motion.p variants={fadeUp} className="mt-3 text-ink/55">
          Konec července 2026
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {UNITS.map(([key, label]) => (
            <div
              key={key}
              className="rounded-3xl border border-primary/10 bg-gradient-to-b from-lilac/40 to-white px-2 py-7 shadow-sm"
            >
              <div className="font-display text-5xl font-700 tabular-nums text-primary sm:text-6xl">
                {String(t[key]).padStart(2, '0')}
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink/45">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
