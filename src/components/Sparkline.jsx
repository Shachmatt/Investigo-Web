import { motion } from 'framer-motion';

// Small self-drawing sparkline — hints at the in-app portfolio chart.
const PATH = 'M0,38 L20,34 L40,40 L60,26 L80,30 L100,16 L120,22 L140,6';

export default function Sparkline({ className = '' }) {
  return (
    <svg viewBox="0 0 140 44" className={className} aria-hidden>
      <defs>
        <linearGradient id="sparkStroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c738bd" />
          <stop offset="100%" stopColor="#850f8d" />
        </linearGradient>
      </defs>
      <motion.path
        d={PATH}
        fill="none"
        stroke="url(#sparkStroke)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="140"
        cy="6"
        r="3.5"
        fill="#850f8d"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.3, delay: 1.1 }}
      />
    </svg>
  );
}
