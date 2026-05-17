import { useState, useEffect, useRef } from "react";

// Parses a numeric value out of a string like "30+", "1,000+", or "UK"
function parseCount(str) {
  const cleaned = str.replace(/,/g, "").replace(/[^0-9]/g, "");
  return cleaned ? parseInt(cleaned, 10) : null;
}

// Returns the non-numeric suffix portion, e.g. "30+" → "+", "1,000+" → "+"
function parseSuffix(str) {
  return str.replace(/[0-9,]/g, "");
}

function AnimatedNumber({ value, duration = 1800 }) {
  const [display, setDisplay] = useState(0);
  const count = parseCount(value);
  const suffix = parseSuffix(value);
  const isNumeric = count !== null;

  const frameRef = useRef(null);

  useEffect(() => {
    if (!isNumeric) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.floor(eased * count));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplay(count);
      }
    };
    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [count, duration, isNumeric]);

  if (!isNumeric) return <>{value}</>;
  return <>{display.toLocaleString()}{suffix}</>;
}

export default function CapabilityStrip() {
  const metrics = [
    {
      number: "UK",
      suffix: "",
      label: "Registered",
      description: "Entity governed under English law"
    },
    {
      number: "30+",
      suffix: "",
      label: "Years",
      description: "Of operational experience"
    },
    {
      number: "5",
      suffix: "",
      label: "Brands",
      description: "Across the group portfolio"
    },
    {
      number: "1,000+",
      suffix: "",
      label: "Trained",
      description: "Agricultural professionals"
    }
  ];
  const sectionRef = useRef(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
        
        :root {
          --brand-primary: #2F5233;
          --brand-deep:    #1E3622;
          --gold:          #C9A84C;
          --pale-green:    #EBF2EB;
          --ink:           #1A1A18;
          --muted:         #7A7A74;
          --cream:         #FAF8F4;
          --white:         #FFFFFF;
          --font-heading:  "M PLUS U", system-ui, sans-serif;
          --font-body:     "Work Sans", system-ui, sans-serif;
        }

        /* ============================================ */
        /* OPTION 1: Horizontal Metrics Strip (Default) */
        /* ============================================ */
        .capability-strip {
          background: var(--brand-primary);
          padding: 56px 0;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }

        .capability-strip-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .capability-strip-grid {
          display: flex;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }

        .capability-item {
          flex: 1;
          min-width: 180px;
          text-align: center;
          padding: 20px 16px;
          position: relative;
        }

        .capability-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -16px;
          top: 50%;
          transform: translateY(-50%);
          width: 1px;
          height: 40px;
          background: rgba(255,255,255,0.15);
        }

        .capability-number {
          font-family: var(--font-heading);
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 800;
          color: var(--white);
          line-height: 1.1;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }

        .capability-label {
          font-family: var(--font-body);
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          margin: 0 0 6px;
        }

        .capability-description {
          font-family: var(--font-body);
          font-size: 17px;
          color: var(--cream);
          margin: 0;
        }

        /* ============================================ */
        /* OPTION 2: Card Grid Layout                    */
        /* ============================================ */
        .capability-cards {
          background: var(--brand-primary);
          padding: 64px 0;
        }

        .capability-cards-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .capability-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 24px;
        }

        .capability-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          padding: 32px 24px;
          text-align: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .capability-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201, 168, 76, 0.3);
          background: rgba(255,255,255,0.05);
        }

        .capability-card-icon {
          font-size: 44px;
          margin-bottom: 20px;
        }

        .capability-card-number {
          font-family: var(--font-heading);
          font-size: 52px;
          font-weight: 800;
          color: var(--gold);
          line-height: 1;
          margin: 0 0 8px;
        }

        .capability-card-label {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--white);
          margin: 0 0 12px;
        }

        .capability-card-description {
          font-family: var(--font-body);
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          margin: 0;
          line-height: 1.5;
        }

        /* ============================================ */
        /* OPTION 3: Animated Counters                   */
        /* ============================================ */
        .capability-animated {
          background: linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-deep) 100%);
          padding: 80px 0;
          position: relative;
          overflow: hidden;
        }

        .capability-animated::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: radial-gradient(circle at 20% 50%, rgba(201, 168, 76, 0.05) 0%, transparent 50%);
          pointer-events: none;
        }

        .capability-animated-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 1;
        }

        .capability-animated-grid {
          display: flex;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
        }

        .capability-animated-item {
          flex: 1;
          text-align: center;
          padding: 24px;
        }

        .capability-animated-icon {
          font-size: 38px;
          margin-bottom: 16px;
          animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }

        .capability-animated-number {
          font-family: var(--font-heading);
          font-size: 56px;
          font-weight: 800;
          background: linear-gradient(135deg, var(--white) 0%, var(--gold) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          line-height: 1;
          margin: 0 0 8px;
          letter-spacing: -0.02em;
        }

        .capability-animated-label {
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--white);
          margin: 0 0 8px;
        }

        .capability-animated-bar {
          width: 40px;
          height: 2px;
          background: var(--gold);
          margin: 12px auto;
          opacity: 0.5;
        }

        .capability-animated-description {
          font-family: var(--font-body);
          font-size: 12px;
          color: rgba(255,255,255,0.6);
          margin: 0;
        }

        /* ============================================ */
        /* OPTION 4: Compact Horizontal Strip           */
        /* ============================================ */
        .capability-compact {
          background: var(--brand-deep);
          padding: 28px 0;
          position: relative;
        }

        .capability-compact-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .capability-compact-grid {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .capability-compact-item {
          display: flex;
          align-items: baseline;
          gap: 8px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .capability-compact-number {
          font-family: var(--font-heading);
          font-size: 28px;
          font-weight: 800;
          color: var(--gold);
          line-height: 1;
        }

        .capability-compact-label {
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--white);
        }

        .capability-compact-divider {
          width: 4px;
          height: 4px;
          background: var(--gold);
          border-radius: 50%;
          opacity: 0.4;
        }

        @media (max-width: 768px) {
          .capability-compact-divider {
            display: none;
          }
          
          .capability-strip-grid,
          .capability-animated-grid {
            flex-direction: column;
            gap: 24px;
          }
          
          .capability-item:not(:last-child)::after {
            display: none;
          }
          
          .capability-item {
            border-bottom: 1px solid rgba(255,255,255,0.1);
            padding: 20px;
          }
          
          .capability-item:last-child {
            border-bottom: none;
          }
          
          .capability-strip-inner,
          .capability-cards-inner,
          .capability-animated-inner,
          .capability-compact-inner {
            padding: 0 24px;
          }
        }
      `}</style>

      <section className="capability-strip">
        <div className="capability-strip-inner">
          <div className="capability-strip-grid">
            {metrics.map((metric, index) => (
              <div key={index} className="capability-item">
                <div className="capability-number">
                  {metric.number}
                  {metric.suffix && <span>{metric.suffix}</span>}
                </div>
                <div className="capability-label">{metric.label}</div>
                <div className="capability-description">{metric.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}