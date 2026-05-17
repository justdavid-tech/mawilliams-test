/* ─── Marquee — no external dependencies ─────────────────── */
const ITEMS = [
  "Agribusiness Intelligence",
  "IP & Brand Stewardship",
  "African Agricultural Education",
  "Sustainable Farm Production",
  "International Partnerships",
  "Bankable Blueprints™",
  "West Africa Operations",
  "UK Institutional Foundation",
];

/* Duplicate items so the scroll feels infinite */
const TRACK = [...ITEMS, ...ITEMS];

export default function MarqueeFile() {
  return (
    <>
      <style>{`
        .mq-root {
          width: 100%;
          overflow: hidden;
          background: var(--color-background, #0a0f0d);
          border-top: 1px solid rgba(201,168,76,0.15);
          border-bottom: 1px solid rgba(201,168,76,0.15);
          padding: 14px 0;
        }
        .mq-track {
          display: flex;
          gap: 0;
          width: max-content;
          animation: mq-scroll 35s linear infinite;
        }
        .mq-root:hover .mq-track {
          animation-play-state: paused;
        }
        @keyframes mq-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .mq-item {
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 0 32px;
          font-family: var(--font-heading, 'Cormorant Garamond', serif);
          font-size: clamp(13px, 1.1vw, 16px);
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #000;
          white-space: nowrap;
        }
        .mq-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--gold, #c9a84c);
          flex-shrink: 0;
          opacity: 0.7;
        }
      `}</style>

      <div className="mq-root" aria-hidden="true">
        <div className="mq-track">
          {TRACK.map((text, i) => (
            <span className="mq-item" key={i}>
              <span className="mq-dot" />
              {text}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}