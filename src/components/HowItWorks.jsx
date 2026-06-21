import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../anim.js';
import Sparkline from './Sparkline.jsx';

const STEPS = [
  {
    n: '01',
    icon: '📚',
    title: 'Interaktivní lekce',
    desc:
      'Krátké lekce krok za krokem — kvízy, přiřazování, výpočty i konverzace s našimi průvodci. Učení, které tě baví a dává smysl.',
  },
  {
    n: '02',
    icon: '📈',
    title: 'Virtuální investiční platforma',
    desc:
      'Zkus si investovat nanečisto. Analyzuj firmy, sleduj vývoj portfolia a obchoduj — vše bez rizika skutečných peněz.',
    chart: true,
  },
  {
    n: '03',
    icon: '📝',
    title: 'Poznámky a shrnutí',
    desc:
      'Ke každé dokončené lekci najdeš přehledné shrnutí a prostor pro vlastní poznámky. Tvoje znalosti vždy po ruce.',
  },
  {
    n: '04',
    icon: '🔥',
    title: 'Gamifikace, která tě udrží',
    desc:
      'Životy, denní série, mince a obchod s odměnami. Drobné návyky, které z tebe udělají investora.',
  },
];

export default function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="relative overflow-hidden bg-butter/40 py-28 sm:py-36">
      {/* faint trading-chart grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(#850f8d0d 1px, transparent 1px), linear-gradient(90deg, #850f8d0d 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 55%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 55%, transparent 100%)',
        }}
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-content section-px relative"
      >
        <div className="max-w-2xl">
          <motion.span variants={fadeUp} className="eyebrow mb-6">
            Jak to funguje
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-display text-4xl font-700 leading-[1.1] tracking-tight text-ink sm:text-5xl"
          >
            Vše, co potřebuješ, na{' '}
            <span className="text-gradient">jednom místě.</span>
          </motion.h2>
        </div>

        <div className="mt-16 divide-y divide-primary/10 border-y border-primary/10">
          {STEPS.map((s) => (
            <motion.div
              key={s.n}
              variants={fadeUp}
              className="group grid grid-cols-1 gap-4 py-9 transition-colors sm:grid-cols-12 sm:items-center sm:gap-8"
            >
              <div className="flex items-center gap-4 sm:col-span-4">
                <span className="font-display text-2xl font-700 text-primary/30 transition-colors group-hover:text-primary">
                  {s.n}
                </span>
                <span className="text-3xl" aria-hidden>
                  {s.icon}
                </span>
                <h3 className="font-display text-xl font-600 text-ink sm:text-2xl">{s.title}</h3>
              </div>
              <div className="sm:col-span-8">
                <p className="text-base leading-relaxed text-ink/60 sm:text-lg">{s.desc}</p>
                {s.chart && (
                  <Sparkline className="mt-4 h-12 w-40 text-primary" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
