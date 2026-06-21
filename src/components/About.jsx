import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../anim.js';

const TEAM = [
  { name: 'Matěj Tabach', initials: 'MT' },
  { name: 'Filip Jenček', initials: 'FJ' },
  { name: 'Jura Semerád', initials: 'JS' },
];

export default function About() {
  return (
    <section id="o-nas" className="relative overflow-hidden bg-butter/40 py-28 sm:py-36">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-content section-px"
      >
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Story */}
          <div>
            <motion.span variants={fadeUp} className="eyebrow mb-6">
              O nás
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display text-4xl font-700 leading-[1.12] tracking-tight text-ink sm:text-5xl"
            >
              Tým středoškoláků s{' '}
              <span className="text-gradient">velkou vizí.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-6 text-lg leading-relaxed text-ink/65"
            >
              Jsme tři středoškoláci, které spojuje nadšení pro investování a chuť ho
              zpřístupnit ostatním. InvestiGO vzniklo díky inkubaci v{' '}
              <span className="font-semibold text-ink">KEM VŠCHT</span>.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-lg leading-relaxed text-ink/65"
            >
              Celá aplikace vznikla za laskavé podpory{' '}
              <span className="font-semibold text-ink">VŠCHT</span>, která nám pomohla
              proměnit nápad ve skutečný produkt.
            </motion.p>
          </div>

          {/* Team */}
          <motion.div variants={fadeUp} className="grid gap-4 sm:grid-cols-3">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="flex flex-col items-center rounded-3xl border border-primary/10 bg-white p-6 text-center transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary font-display text-2xl font-700 text-white shadow-lg shadow-primary/20">
                  {m.initials}
                </div>
                <p className="mt-4 font-display text-base font-600 text-ink">{m.name}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-ink/40">
                  Spoluzakladatel
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Partners strip */}
        <motion.div
          variants={fadeUp}
          className="mt-16 flex flex-col items-center gap-4 border-t border-primary/10 pt-10 sm:flex-row sm:justify-center sm:gap-10"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/40">
            S podporou
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="font-display text-lg font-700 text-primary">KEM VŠCHT</span>
            <span className="hidden h-4 w-px bg-primary/15 sm:block" />
            <span className="font-display text-lg font-700 text-primary">VŠCHT Praha</span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
