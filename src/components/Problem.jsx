import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../anim.js';

export default function Problem() {
  return (
    <section id="problem" className="relative overflow-hidden bg-ink py-28 sm:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 opacity-50">
        <div className="absolute -right-32 top-0 h-96 w-96 rounded-full bg-primary/40 blur-[120px]" />
        <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-secondary/30 blur-[120px]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-content section-px relative"
      >
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-tertiary"
        >
          The Crisis · Krize
        </motion.span>

        <motion.h2
          variants={fadeUp}
          className="mt-7 max-w-4xl font-display text-4xl font-700 leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Chceme investovat. <br className="hidden sm:block" />
          <span className="text-tertiary">Ale nevíme jak.</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="mt-10 grid gap-x-12 gap-y-8 md:grid-cols-3"
        >
          <p className="text-lg leading-relaxed text-white/70 md:col-span-2">
            Velká část naší generace chce investovat, ale neví, jak na to. Česko je
            {' '}
            <span className="font-semibold text-white">příliš konzervativní</span> ohledně
            využití svých úspor — peníze leží ladem místo toho, aby pracovaly.
          </p>
          <div className="flex items-center">
            <p className="font-display text-2xl font-600 leading-snug text-white">
              Důvod?{' '}
              <span className="text-gradient bg-gradient-to-r from-tertiary to-secondary">
                Strach z neznáma.
              </span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
