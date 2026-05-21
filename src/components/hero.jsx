import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
 
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
 
        :root {
          --brand-primary: #2F5233;
          --brand-deep:    #1E3622;
          --brand-mid:     #3D6B42;
          --gold:          #C9A84C;
          --pale-green:    #EBF2EB;
          --ink:           #1A1A18;
          --muted:         #7A7A74;
          --cream:         #FAF8F4;
          --white:         #FFFFFF;
          --font-heading:  "M PLUS U", system-ui, sans-serif;
          --font-body:     "Work Sans", system-ui, sans-serif;
        }
 
        /* ── HERO WRAPPER ── */
        .hero-section {
          background: var(--cream);
          min-height: 92vh;
          display: flex;
          flex-direction: column;
          position: relative;
          overflow: hidden;
        }
 
        /* Subtle grid texture */
        .hero-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(47,82,51,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(47,82,51,0.04) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }
 
        /* Green geometric accent — top-right corner */
        .hero-geo {
          position: absolute;
          top: -80px; right: -80px;
          width: 320px; height: 320px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47,82,51,0.09) 0%, transparent 70%);
          pointer-events: none;
        }
 
        /* Dot cluster — bottom left */
        .dot-cluster {
          position: absolute;
          bottom: 60px; left: 24px;
          display: grid;
          grid-template-columns: repeat(6, 6px);
          gap: 6px;
          opacity: 0.25;
          pointer-events: none;
        }
        .dot-cluster span {
          width: 4px; height: 4px; border-radius: 50%;
          background: var(--brand-primary);
          display: block;
        }
 
        /* ── HERO INNER ── */
        .hero-inner {
          flex: 1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          align-items: center;
          gap: 48px;
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          padding: 72px 48px 64px;
          position: relative;
          z-index: 1;
        }
 
        /* ── LEFT CONTENT ── */
        .hero-left { display: flex; flex-direction: column; gap: 0; }
 
        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 22px;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.55s ease, transform 0.55s ease;
        }
        .hero-eyebrow.in { opacity: 1; transform: translateY(0); }
 
        .eyebrow-pip {
          display: flex; gap: 5px; align-items: center;
        }
        .pip {
          width: 10px; height: 10px; border-radius: 50%;
        }
        .pip-gold { background: var(--gold); }
        .pip-green { background: var(--brand-primary); }
 
        .eyebrow-text {
          font-family: var(--font-body);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--brand-primary);
        }
 
        .hero-headline {
          font-family: var(--font-heading);
          font-size: clamp(38px, 4.5vw, 60px);
          font-weight: 800;
          line-height: 1.08;
          color: var(--ink);
          letter-spacing: -0.025em;
          margin-bottom: 22px;
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s;
        }
        .hero-headline.in { opacity: 1; transform: translateY(0); }
 
        .headline-accent { color: var(--brand-primary); }
 
        .hero-body {
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 400;
          line-height: 1.75;
          color: var(--ink);
          max-width: 520px;
          margin-bottom: 36px;
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s;
        }
        .hero-body.in { opacity: 1; transform: translateY(0); }
 
        .hero-ctas {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s;
        }
        .hero-ctas.in { opacity: 1; transform: translateY(0); }
 
        .btn-primary {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.05em;
          color: var(--white);
          background: var(--brand-primary);
          border: none;
          padding: 14px 28px;
          border-radius: 3px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          transition: background .22s, transform .18s;
        }
        .btn-primary:hover {
          background: var(--brand-deep);
          transform: translateY(-2px);
        }
        .btn-arrow {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 24px; height: 24px;
          border-radius: 50%;
          background: rgba(255,255,255,0.2);
          font-size: 13px;
          transition: background .2s;
        }
        .btn-primary:hover .btn-arrow { background: rgba(255,255,255,0.3); }
 
        .btn-ghost {
          font-family: var(--font-body);
          font-weight: 500;
          font-size: 13px;
          color: var(--ink);
          background: transparent;
          border: none;
          cursor: pointer;
          text-decoration: none;
          letter-spacing: 0.03em;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color .2s;
          padding: 4px 0;
          border-bottom: 1px solid rgba(26,26,24,0.2);
        }
        .btn-ghost:hover { color: var(--brand-primary); border-bottom-color: var(--brand-primary); }
 
        /* Stats strip */
        .hero-stats {
          display: flex;
          align-items: center;
          gap: 28px;
          margin-top: 40px;
          padding-top: 28px;
          border-top: 1px solid rgba(47,82,51,0.12);
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease 0.42s, transform 0.6s ease 0.42s;
        }
        .hero-stats.in { opacity: 1; transform: translateY(0); }
        .stat { display: flex; flex-direction: column; gap: 2px; }
        .stat-num {
          font-family: var(--font-heading);
          font-size: 26px; font-weight: 700;
          color: var(--ink); line-height: 1;
        }
        .stat-num span { color: var(--gold); }
        .stat-label {
          font-family: var(--font-body);
          font-size: 11px; font-weight: 500;
          color: var(--ink);
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }
        .stat-divider {
          width: 1px; height: 36px;
          background: rgba(47,82,51,0.15);
          flex-shrink: 0;
        }
 
        /* ── RIGHT IMAGE ── */
        .hero-right {
          position: relative;
          height: 520px;
          opacity: 0;
          transform: translateX(24px);
          transition: opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s;
        }
        .hero-right.in { opacity: 1; transform: translateX(0); }
 
        /* Single full-coverage image */
        .hero-img-main {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 16px 48px rgba(26,26,24,0.18);
          position: relative;
        }
        .hero-img-main img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          filter: contrast(1.04);
          transition: transform 0.6s ease;
        }
        .hero-img-main:hover img { transform: scale(1.03); }
 
        /* Subtle green tint overlay at the bottom */
        .hero-img-main::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            transparent 55%,
            rgba(30, 54, 34, 0.35) 100%
          );
          border-radius: 10px;
          pointer-events: none;
        }
 
        /* Floating tag card */
        .float-tag {
          position: absolute;
          top: 32px;
          right: -16px;
          background: var(--white);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px;
          padding: 12px 16px;
          display: flex; align-items: center; gap: 10px;
          box-shadow: 0 4px 20px rgba(26,26,24,0.10);
          z-index: 10;
          animation: float-bob 4s ease-in-out infinite;
          white-space: nowrap;
        }
        @keyframes float-bob {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .float-tag-dot {
          width: 32px; height: 32px; border-radius: 6px;
          background: var(--pale-green);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .float-tag-dot span { font-size: 16px; }
        .float-tag-text { display: flex; flex-direction: column; gap: 1px; }
        .float-tag-title {
          font-family: var(--font-heading);
          font-size: 12px; font-weight: 600;
          color: var(--ink);
        }
        .float-tag-sub {
          font-size: 10px; color: var(--ink);
          font-family: var(--font-body); letter-spacing: 0.04em;
        }
 
        /* Floating metric card */
        .float-metric {
          position: absolute;
          bottom: 28px;
          left: -24px;
          background: var(--brand-deep);
          border-radius: 6px;
          padding: 14px 18px;
          display: flex; align-items: center; gap: 12px;
          box-shadow: 0 6px 24px rgba(26,26,24,0.18);
          z-index: 10;
          animation: float-bob 4.5s ease-in-out 0.8s infinite;
        }
        .float-metric-num {
          font-family: var(--font-heading);
          font-size: 22px; font-weight: 700;
          color: var(--gold);
          line-height: 1;
        }
        .float-metric-label {
          font-family: var(--font-body);
          font-size: 10px; font-weight: 500;
          color: #fff;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          max-width: 80px;
          line-height: 1.4;
        }
 
        /* Rotating stamp */
        .stamp {
          position: absolute;
          bottom: 98px;
          left: -12px;
          width: 104px; height: 104px;
          z-index: 10;
          animation: spin-slow 18s linear infinite;
        }
        @keyframes spin-slow { to { transform: rotate(360deg); } }
        .stamp-inner {
          position: relative;
          width: 100%; height: 100%;
        }
        .stamp-circle-text { position: absolute; inset: 0; }
        .stamp-center {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: spin-slow-reverse 18s linear infinite;
        }
        @keyframes spin-slow-reverse { to { transform: rotate(-360deg); } }
        .stamp-center-inner {
          width: 46px; height: 46px;
          background: var(--brand-deep);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-direction: column;
          gap: 1px;
        }
        .stamp-check { font-size: 16px; color: var(--gold); }
        .stamp-year {
          font-family: var(--font-heading);
          font-size: 8px; font-weight: 700;
          color: rgba(255,255,255,0.7);
          letter-spacing: 0.06em;
        }
 
        /* Decorative plus markers */
        .plus-mark {
          position: absolute;
          color: var(--gold);
          font-size: 20px;
          font-weight: 300;
          line-height: 1;
          opacity: 0.7;
          z-index: 11;
          animation: float-bob 5s ease-in-out 1.2s infinite;
        }
 
        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .hero-inner { gap: 32px; padding: 64px 32px 56px; }
          .hero-right { height: 460px; }
          .float-tag  { right: -8px; }
          .float-metric { left: -12px; }
        }
 
        @media (max-width: 900px) {
          .hero-inner {
            grid-template-columns: 1fr;
            padding: 60px 24px 52px;
            text-align: center;
            gap: 40px;
          }
          .hero-left  { align-items: center; order: 1; }
          .hero-right { order: 2; height: 400px; width: 100%; margin: 0 auto; max-width: 560px; }
          .hero-body  { max-width: 600px; margin-left: auto; margin-right: auto; }
          .hero-ctas  { justify-content: center; }
          .hero-stats { justify-content: center; flex-wrap: wrap; gap: 20px 32px; }
          .float-tag    { right: 4px; top: 12px; }
          .float-metric { left: 4px;  bottom: 12px; }
          .stamp        { left: 50%; transform: translateX(-50%); bottom: 72px; }
        }
 
        @media (max-width: 600px) {
          .hero-section { min-height: auto; }
          .hero-inner   { padding: 40px 16px 40px; gap: 28px; }
          .eyebrow-pip  { padding-bottom: 15px; }
          .hero-headline { font-size: clamp(28px, 8vw, 36px); line-height: 1.12; }
          .hero-body    { font-size: 14px; }
          .hero-right   { height: 300px; max-width: 100%; width: 100%; }
 
          .float-tag {
            right: 2px; top: 10px;
            padding: 8px 10px; gap: 8px; font-size: 11px;
          }
          .float-tag-title { font-size: 11px; }
          .float-tag-sub   { font-size: 9px; }
          .float-tag-dot   { width: 26px; height: 26px; }
          .float-tag-dot span { font-size: 13px; }
 
          .float-metric { left: 2px; bottom: 10px; padding: 10px 12px; gap: 8px; }
          .float-metric-num   { font-size: 16px; }
          .float-metric-label { font-size: 9px; max-width: 64px; }
 
          .stamp { width: 76px; height: 76px; bottom: 60px; left: 50%; transform: translateX(-50%); }
 
          .hero-stats { gap: 12px 20px; justify-content: center; flex-wrap: wrap; }
          .stat-divider { display: none; }
          .stat { align-items: center; }
          .stat-num { font-size: 22px; }
 
          .hero-ctas { flex-direction: column; align-items: center; gap: 12px; }
          .btn-primary, .btn-ghost { width: 100%; justify-content: center; max-width: 280px; }
          .dot-cluster { display: none; }
        }
 
        @media (max-width: 380px) {
          .hero-headline { font-size: 26px; }
          .hero-right    { height: 260px; }
          .float-tag     { display: none; }
          .float-metric  { padding: 8px 10px; }
          .float-metric-num { font-size: 14px; }
        }
      `}</style>
 
      {/* ── HERO SECTION ── */}
      <section className="hero-section" aria-label="Homepage hero">
        <div className="hero-geo" aria-hidden="true" />
 
        <div className="dot-cluster" aria-hidden="true">
          {Array.from({ length: 30 }).map((_, i) => <span key={i} />)}
        </div>
 
        <div className="hero-inner">
 
          {/* LEFT — Content */}
          <div className="hero-left">
 
            <div className={`hero-eyebrow ${visible ? "in" : ""}`}>
              <div className="eyebrow-pip">
                <div className="pip pip-gold" />
                <div className="pip pip-green" />
              </div>
              <span className="eyebrow-text">Intellectual Architecture. Global Reach.</span>
            </div>
 
            <h1 className={`hero-headline ${visible ? "in" : ""}`}>
              The International<br />
              Home of <span className="headline-accent">African</span><br />
              Agricultural<br />
              Intelligence.
            </h1>
 
            <p className={`hero-body ${visible ? "in" : ""}`}>
              M.A. Williams & Co. is the international family office, IP repository,
              and global contracting arm of the Yomi Williams Group, a purposefully
              structured ecosystem built over a decade of frontline agribusiness
              experience across Nigeria and the United Kingdom.
            </p>
 
            <div className={`hero-ctas ${visible ? "in" : ""}`}>
              <a href="/institute" className="btn-primary">
                Explore the Institute
                <span className="btn-arrow" aria-hidden="true">→</span>
              </a>
              <a href="/gateway" className="btn-ghost">
                Gateway Consulting
              </a>
            </div>
 
            <div className={`hero-stats ${visible ? "in" : ""}`}>
              <div className="stat">
                <span className="stat-num">30<span>+</span></span>
                <span className="stat-label">Years frontline</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">1,000<span>+</span></span>
                <span className="stat-label">Practitioners trained</span>
              </div>
              <div className="stat-divider" />
              <div className="stat">
                <span className="stat-num">5</span>
                <span className="stat-label">Brands in group</span>
              </div>
            </div>
          </div>
 
          {/* RIGHT — Single Image */}
          <div className={`hero-right ${visible ? "in" : ""}`} aria-hidden="true">
 
            <div className="hero-img-main">
              <img src="/assets/hero-main.jpeg" alt="African agricultural landscape" />
            </div>
 
            {/* Floating tag */}
            <div className="float-tag">
              <div className="float-tag-dot"><span>🌿</span></div>
              <div className="float-tag-text">
                <span className="float-tag-title">UK Registered Entity</span>
                <span className="float-tag-sub">International Contracting</span>
              </div>
            </div>
 
            {/* Floating metric */}
            <div className="float-metric">
              <div className="float-metric-num">200ha</div>
              <div className="float-metric-label">Regenerative estate, Ogun State</div>
            </div>
 
            {/* Rotating stamp */}
            <div className="stamp">
              <div className="stamp-inner">
                <svg className="stamp-circle-text" viewBox="0 0 104 104">
                  <defs>
                    <path id="circle" d="M 52,52 m -36,0 a 36,36 0 1,1 72,0 a 36,36 0 1,1 -72,0" />
                  </defs>
                  <circle cx="52" cy="52" r="46" fill="#1E3622" stroke="#C9A84C" strokeWidth="1.5" />
                  <text fill="#C9A84C" fontSize="8.5" fontFamily="Work Sans, sans-serif" fontWeight="600" letterSpacing="2.5">
                    <textPath href="#circle">SINCE 1994 · M.A. WILLIAMS & CO. · </textPath>
                  </text>
                </svg>
                <div className="stamp-center">
                  <div className="stamp-center-inner">
                    <span className="stamp-check">✦</span>
                    <span className="stamp-year">EST.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
 
