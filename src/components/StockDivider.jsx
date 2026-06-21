import { motion } from 'framer-motion';

// An upward-trending "stock tracker" line that draws itself when scrolled into view.
// Used as a section divider to reinforce the idea of growth.
const LINE =
  'M0,150 L90,140 L180,158 L270,120 L360,132 L450,96 L540,108 L630,70 L720,84 L810,48 L900,60 L990,30 L1080,40 L1200,14';

export default function StockDivider({ flip = false }) {
  return (
    <div className="container-content section-px relative py-6" aria-hidden>
      {/* live-style price tag riding the line's end point (top-right) */}
      {!flip && (
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.4, delay: 1.5 }}
          className="absolute right-6 top-3 z-10 rounded-lg bg-primary px-2.5 py-1 text-xs font-bold text-white shadow-lg shadow-primary/30 sm:right-12"
          style={{ color: '#fff' }}
        >
          <span style={{ color: '#7ab6ff' }}>▲</span> +18,4 %
        </motion.div>
      )}
      <div className={`relative h-[120px] w-full ${flip ? 'rotate-180' : ''}`}>
        <svg
          viewBox="0 0 1200 170"
          preserveAspectRatio="none"
          className="h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient id="stockStroke" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#e49bff" />
              <stop offset="55%" stopColor="#c738bd" />
              <stop offset="100%" stopColor="#850f8d" />
            </linearGradient>
            <linearGradient id="stockFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#c738bd" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#c738bd" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* faint grid lines for the "tracker" feel */}
          {[34, 78, 122].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="1200"
              y2={y}
              stroke="#850f8d"
              strokeOpacity="0.07"
              strokeWidth="1"
              strokeDasharray="4 8"
            />
          ))}

          {/* area under the curve, fades in after the line draws */}
          <motion.path
            d={`${LINE} L1200,170 L0,170 Z`}
            fill="url(#stockFill)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.8, delay: 1 }}
          />

          {/* the line itself, drawn left → right */}
          <motion.path
            d={LINE}
            fill="none"
            stroke="url(#stockStroke)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
          />

          {/* pulsing price dot at the end */}
          <motion.circle
            cx="1200"
            cy="14"
            r="6"
            fill="#850f8d"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          />
        </svg>
      </div>
    </div>
  );
}
