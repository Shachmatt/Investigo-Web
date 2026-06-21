import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../anim.js';
import CountUp from './CountUp.jsx';
import Candle from './Candle.jsx';

const STATS = [
  { to: 5, suffix: '+', label: 'Typů cvičení', up: true },
  { to: 100, suffix: ' %', label: 'Bez rizika', up: true },
  { to: 3, suffix: '', label: 'Zakladatelé', up: true },
  { to: 2026, suffix: '', label: 'Rok spuštění', up: false },
];

export default function Stats() {
  return (
    <section className="relative py-16 sm:py-20">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-content section-px"
      >
        <motion.div
          variants={fadeUp}
          className="grid grid-cols-2 gap-y-10 rounded-[2rem] border border-primary/10 bg-gradient-to-b from-lilac/25 to-white px-6 py-10 sm:px-10 md:grid-cols-4 md:divide-x md:divide-primary/10"
        >
          {STATS.map((s) => (
            <div key={s.label} className="flex flex-col items-center px-4 text-center">
              <Candle up={s.up} className="mb-3 h-8 w-3" />
              <div className="font-display text-4xl font-700 tracking-tight text-primary sm:text-5xl">
                <CountUp to={s.to} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-ink/45">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
