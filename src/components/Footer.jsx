import { motion } from 'framer-motion';
import { fadeUp, stagger, viewportOnce } from '../anim.js';
import { DiscordGlyph } from './Nav.jsx';
import logo from '../assets/logo.png';

const CONTACT = 'tabach.matej@gmail.com';

export default function Footer({ discordUrl }) {
  return (
    <footer className="relative overflow-hidden bg-ink pt-28 pb-12 sm:pt-36">
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-0 h-96 w-[700px] -translate-x-1/2 rounded-full bg-primary/30 blur-[140px]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="container-content section-px relative"
      >
        {/* Vision statement */}
        <motion.p
          variants={fadeUp}
          className="text-xs font-semibold uppercase tracking-[0.25em] text-tertiary"
        >
          Naše vize
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="mt-5 max-w-4xl font-display text-4xl font-700 leading-[1.08] tracking-tight text-white sm:text-6xl"
        >
          Chceme rozinvestovat{' '}
          <span className="text-gradient bg-gradient-to-r from-tertiary via-secondary to-tertiary">
            mladou generaci.
          </span>
        </motion.h2>

        <motion.div variants={fadeUp} className="mt-10">
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-base font-semibold text-primary transition-all hover:-translate-y-0.5 hover:bg-lilac"
          >
            <DiscordGlyph className="h-5 w-5" />
            Přidej se na Discord
          </a>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          className="mt-20 flex flex-col gap-8 border-t border-white/10 pt-10 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-2.5">
            <img src={logo} alt="InvestiGO" className="h-8 w-8 rounded-lg object-contain" />
            <span className="font-display text-lg font-700 text-white">
              Investi<span className="text-tertiary">GO</span>
            </span>
          </div>

          <div className="flex flex-col gap-2 text-sm text-white/60 sm:items-end">
            <a
              href={`mailto:${CONTACT}`}
              className="font-medium text-white/80 transition-colors hover:text-tertiary"
            >
              {CONTACT}
            </a>
            <span>© {new Date().getFullYear()} InvestiGO · Spuštění na konci července 2026</span>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
