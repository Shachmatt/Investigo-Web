import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../anim.js';

export default function Impact() {
  return (
    <section className="relative py-28 sm:py-36">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-content section-px"
      >
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-primary via-secondary to-primary bg-[length:200%_200%] px-8 py-16 text-center animate-gradient-pan sm:px-16 sm:py-24">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-10 -right-10 h-60 w-60 rounded-full bg-butter/20 blur-3xl" />
          </div>

          <motion.span
            variants={fadeUp}
            className="relative inline-flex items-center gap-2 rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/90"
          >
            Pro koho to děláme
          </motion.span>

          <motion.h2
            variants={fadeUp}
            className="relative mx-auto mt-7 max-w-3xl font-display text-4xl font-700 leading-[1.12] tracking-tight text-white sm:text-5xl"
          >
            Pro mladou generaci, která chce začít.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
          >
            Soustředíme se na českou{' '}
            <span className="font-semibold text-white">generaci Z</span> — na všechny, kteří
            by chtěli investovat, ale zatím nevědí, jak na to. Dáváme jim první krok.
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
