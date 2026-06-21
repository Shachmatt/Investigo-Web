// Reusable Framer Motion variants for soft "reveal as you scroll" effects.

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } },
};

// Parent that staggers its children into view.
export const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// Shared viewport config so sections reveal once, a bit before fully on-screen.
export const viewportOnce = { once: true, amount: 0.3 };
