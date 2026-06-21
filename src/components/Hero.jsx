import { motion } from 'framer-motion';
import { fadeUp, stagger } from '../anim.js';
import { DiscordGlyph } from './Nav.jsx';
import Candle from './Candle.jsx';
import logo from '../assets/logo.png';

export default function Hero({ discordUrl }) {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* soft brand backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/2 h-[640px] w-[640px] -translate-x-1/2 rounded-full bg-lilac/60 blur-[120px]" />
        <div className="absolute -left-24 top-40 h-72 w-72 rounded-full bg-butter/70 blur-[90px]" />
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-tertiary/40 blur-[100px]" />

        {/* faint stock-chart line motif across the bottom */}
        <svg
          className="absolute inset-x-0 bottom-0 h-72 w-full opacity-[0.09]"
          viewBox="0 0 1200 300"
          preserveAspectRatio="none"
        >
          <path
            d="M0,250 L80,238 L160,256 L240,210 L320,224 L400,180 L480,196 L560,150 L640,166 L720,120 L800,134 L880,92 L960,104 L1040,66 L1120,78 L1200,40"
            fill="none"
            stroke="#850f8d"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
        </svg>

        {/* candlestick clusters in the lower corners */}
        <div className="absolute bottom-10 left-6 flex items-end gap-2 opacity-[0.18] sm:left-12">
          <Candle up className="h-10 w-2.5" />
          <Candle up={false} className="h-12 w-2.5" />
          <Candle up className="h-9 w-2.5" />
        </div>
        <div className="absolute bottom-14 right-6 flex items-end gap-2 opacity-[0.18] sm:right-12">
          <Candle up className="h-9 w-2.5" />
          <Candle up className="h-12 w-2.5" />
          <Candle up={false} className="h-8 w-2.5" />
        </div>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_50%,white_95%)]" />
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="container-content section-px flex flex-col items-center text-center"
      >
        <motion.div variants={fadeUp} className="mb-7 animate-float">
          <img
            src={logo}
            alt="InvestiGO"
            className="h-20 w-20 rounded-3xl object-contain shadow-2xl shadow-primary/20 ring-1 ring-primary/10"
          />
        </motion.div>

        <motion.span variants={fadeUp} className="eyebrow mb-6">
          ● Investiční vzdělávání nové generace
        </motion.span>

        <motion.h1
          variants={fadeUp}
          className="font-display text-5xl font-700 leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
        >
          Naučíme tě <span className="text-gradient">investovat.</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mt-6 max-w-xl text-lg text-ink/65 sm:text-xl"
        >
          Bezpečně, snadno a zábavně. Krok za krokem tě provedeme světem investic —
          žádný strach, žádné nudné poučky.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={discordUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-secondary"
          >
            <DiscordGlyph className="h-5 w-5" />
            Přidej se na Discord
          </a>
          <a
            href="#jak-to-funguje"
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white px-7 py-3.5 text-base font-semibold text-primary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-lilac/30"
          >
            Jak to funguje
            <span aria-hidden>↓</span>
          </a>
        </motion.div>

        <motion.p variants={fadeUp} className="mt-7 text-sm font-medium text-ink/45">
          Spuštění aplikace na konci července 2026
        </motion.p>
      </motion.div>
    </section>
  );
}
