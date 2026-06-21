import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../anim.js';

export default function Solution() {
  return (
    <section id="reseni" className="relative py-28 sm:py-36">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-content section-px"
      >
        <motion.span variants={fadeUp} className="eyebrow mb-6">
          Řešení
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="max-w-4xl font-display text-4xl font-700 leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[3.4rem]"
        >
          Aplikace, která tě investování{' '}
          <span className="text-gradient">naučí hrou.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/65 sm:text-xl"
        >
          Přicházíme s aplikací, která každého zájemce{' '}
          <span className="font-semibold text-ink">krok po kroku</span> naučí i složitější
          typy investování — hravou a srozumitelnou formou. Od prvních úspor až po
          pokročilé strategie.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mt-12 grid gap-4 sm:grid-cols-3"
        >
          {[
            { t: 'Krok za krokem', d: 'Žádné skoky do hloubky. Postupuješ vlastním tempem.' },
            { t: 'Hravá forma', d: 'Srdíčka, série a odměny tě udrží v tempu.' },
            { t: 'Bez rizika', d: 'Trénuješ na virtuální platformě — o nic nepřijdeš.' },
          ].map((c) => (
            <div
              key={c.t}
              className="rounded-3xl border border-primary/10 bg-gradient-to-b from-lilac/30 to-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              <h3 className="font-display text-xl font-600 text-primary">{c.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">{c.d}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
