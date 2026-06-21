// Scrolling "ticker tape" of finance terms. Up/down use the app's bull/bear colors.
const ITEMS = [
  { label: 'Akcie', change: '+2,4 %', up: true },
  { label: 'ETF', change: '+1,1 %', up: true },
  { label: 'Dividenda', change: '+0,6 %', up: true },
  { label: 'S&P 500', change: '+0,8 %', up: true },
  { label: 'Dluhopisy', change: '−0,3 %', up: false },
  { label: 'Portfolio', change: '+5,2 %', up: true },
  { label: 'Úročení', change: '+1,9 %', up: true },
  { label: 'Krypto', change: '−1,7 %', up: false },
  { label: 'Index', change: '+0,4 %', up: true },
  { label: 'Akcie', change: '+3,0 %', up: true },
];

function Row() {
  return (
    <div className="flex shrink-0 items-center">
      {ITEMS.map((it, i) => (
        <div key={i} className="flex items-center gap-2 px-7">
          <span className="text-sm font-semibold tracking-wide text-white/90">{it.label}</span>
          <span
            className="text-sm font-bold tabular-nums"
            style={{ color: it.up ? '#7ab6ff' : '#ff9696' }}
          >
            {it.up ? '▲' : '▼'} {it.change}
          </span>
          <span className="ml-5 h-1 w-1 rounded-full bg-white/25" />
        </div>
      ))}
    </div>
  );
}

export default function Ticker() {
  return (
    <div className="marquee-pause relative overflow-hidden border-y border-white/10 bg-ink py-3.5">
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />

      <div className="flex w-max animate-marquee">
        <Row />
        <Row />
      </div>
    </div>
  );
}
