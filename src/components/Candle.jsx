// A single candlestick glyph in the app's bull/bear colors.
export default function Candle({ up = true, className = '', style }) {
  const color = up ? '#7ab6ff' : '#ff9696';
  return (
    <svg viewBox="0 0 12 44" className={className} style={style} aria-hidden>
      <line x1="6" y1="0" x2="6" y2="44" stroke={color} strokeWidth="1.6" />
      <rect
        x="1"
        y={up ? 12 : 8}
        width="10"
        height={up ? 22 : 26}
        rx="2.5"
        fill={color}
      />
    </svg>
  );
}
