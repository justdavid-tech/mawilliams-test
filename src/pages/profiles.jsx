const STATS = [
  { num: "$560M+", label: "Capital Raised at Chappal Energies" },
  { num: "$2B", label: "Debt Restructuring — Aiteo OML29" },
  { num: "$1.8B", label: "ConocoPhillips Asset Acquisition" },
  { num: "20+", label: "Years in Energy Finance" },
];

const COMPETENCIES = [
  [
    "Transaction Structuring & RBL",
    "Capital Raising (Debt & Equity)",
    "M&A Financial Modelling & Valuation",
  ],
  [
    "Upstream Oil & Gas Finance",
    "Debt Capital Markets (Bonds/MTN)",
    "Cross-Border Deal Execution",
  ],
  [
    "Corporate Finance Strategy",
    "Financial Modelling (DCF, LBO)",
    "Regulatory & Stakeholder Management",
  ],
];

export default function Profile() {
  return (
    <>
      <style>{`
        .prof-root {
          font-family: var(--font-body, "Work Sans", system-ui, sans-serif);
          background: var(--color-background, #FAF8F4);
          color: var(--color-text-primary, #000);
          min-height: 100vh;
          padding: 64px 0 96px;
        }

        .prof-inner {
          max-width: 1060px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* ── HEADER ── */
        .prof-header {
          display: grid;
          grid-template-columns: 160px 1fr;
          gap: 40px;
          align-items: center;
          padding-bottom: 48px;
          border-bottom: 1px solid rgba(47,82,51,0.12);
          margin-bottom: 56px;
        }

        .prof-avatar-wrap {
          position: relative;
          flex-shrink: 0;
        }

        .prof-avatar {
          width: 260px;
          height: 260px;
          border-radius: 4px;
          object-fit: cover;
          object-position: center top;
          display: block;
          border: 3px solid var(--color-gold-accent, #C9A84C);
        }


        .prof-avatar-accent {
          position: absolute;
          bottom: -6px;
          right: -6px;
          width: 100%;
          height: 100%;
          border: 2px solid rgba(201,168,76,0.25);
          border-radius: 4px;
          pointer-events: none;
        }

        .prof-header-right {}

        .prof-name {
          font-family: var(--font-heading, "M PLUS U", system-ui, sans-serif);
          font-size: clamp(28px, 3.5vw, 40px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--color-brand-deep, #1E3622);
          margin-bottom: 6px;
        }

        .prof-role {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--color-gold-accent, #C9A84C);
          margin-bottom: 18px;
        }

        .prof-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .prof-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 600;
          color: #000;
        }

        .prof-meta-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: var(--color-gold-accent, #C9A84C);
          flex-shrink: 0;
        }

        .prof-meta-sep {
          color: rgba(122,122,116,0.35);
        }

        /* ── SECTION LABEL ── */
        .prof-section-label {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #000;
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .prof-section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(47,82,51,0.15);
        }

        /* ── SUMMARY ── */
        .prof-summary {
          margin-bottom: 48px;
        }

        .prof-summary-body {
          font-size: 14.5px;
          line-height: 1.82;
          color:  #000;
          font-weight: 500;
          margin-bottom: 14px;
        }
        .prof-summary-body:last-child { margin-bottom: 0; }

        /* ── STATS ── */
        .prof-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          background: var(--color-card-alt, #EBF2EB);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 5px;
          overflow: hidden;
          margin-bottom: 56px;
        }

        .prof-stat {
          padding: 24px 20px;
          text-align: center;
          border-right: 1px solid rgba(47,82,51,0.12);
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .prof-stat:last-child { border-right: none; }

        .prof-stat-num {
          font-family: var(--font-heading, "M PLUS U", system-ui, sans-serif);
          font-size: clamp(22px, 2.8vw, 32px);
          font-weight: 800;
          letter-spacing: -0.02em;
          color: var(--color-brand-deep, #1E3622);
          line-height: 1;
        }

        .prof-stat-label {
          font-size: 11px;
          font-weight: 500;
          line-height: 1.45;
          color: var(--color-muted, #7A7A74);
          letter-spacing: 0.01em;
        }

        /* ── COMPETENCIES ── */
        .prof-competencies {
          margin-bottom: 0;
        }

        .prof-comp-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 5px;
          overflow: hidden;
        }

        .prof-comp-col {
          background: var(--color-surface, #FFFFFF);
          padding: 22px 22px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .prof-comp-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          padding: 9px 0;
          border-bottom: 1px solid rgba(47,82,51,0.07);
          font-size: 13px;
          font-weight: 500;
          color: var(--color-text-primary, #1A1A18);
          line-height: 1.45;
        }
        .prof-comp-item:last-child { border-bottom: none; }

        .prof-comp-pip {
          width: 5px;
          height: 5px;
          border-radius: 1px;
          background: var(--color-gold-accent, #C9A84C);
          flex-shrink: 0;
          margin-top: 6px;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .prof-inner { padding: 0 24px; }
          .prof-header { grid-template-columns: 1fr; gap: 28px; }
          .prof-avatar { width: 120px; height: 120px; }
          .prof-stats { grid-template-columns: repeat(2, 1fr); }
          .prof-stat:nth-child(2) { border-right: none; }
          .prof-stat:nth-child(3) { border-top: 1px solid rgba(47,82,51,0.12); }
          .prof-comp-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 480px) {
          .prof-root { padding: 40px 0 64px; }
          .prof-stats { grid-template-columns: 1fr 1fr; }
        }

        @media (max-width: 768px) {
  .prof-avatar-accent {
    display: none;
  }
}
      `}</style>

      <div className="prof-root">
        <div className="prof-inner">

          {/* ── HEADER ── */}
          <div className="prof-header">
            <div className="prof-avatar-wrap">
              {/* Replace src with your image path */}
              <img
                src="/assets/profile-1.jpg"
                alt="Chickezie Evulukwu"
                className="prof-avatar"
              />
              <div className="prof-avatar-accent" aria-hidden="true" />
            </div>

            <div className="prof-header-right">
              <h1 className="prof-name">Chickezie Evulukwu</h1>
              <p className="prof-role">Financial Advisory</p>
              <div className="prof-meta">
                <span className="prof-meta-item">
                  <span className="prof-meta-dot" aria-hidden="true" />
                  Finance
                </span>
                <span className="prof-meta-sep" aria-hidden="true">·</span>
                <span className="prof-meta-item">
                  <span className="prof-meta-dot" aria-hidden="true" />
                  Houston, TX
                </span>
                <span className="prof-meta-sep" aria-hidden="true">·</span>
                <span className="prof-meta-item">
                  <span className="prof-meta-dot" aria-hidden="true" />
                  20+ Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* ── PROFESSIONAL SUMMARY ── */}
          <div className="prof-summary">
            <p className="prof-section-label">Professional Summary</p>
            <p className="prof-summary-body">
              Senior energy finance professional and transaction advisor with 20+ years of experience
              across investment banking, corporate finance, and upstream oil & gas. Track record of
              structuring and closing landmark transactions in Africa from a $2B debt restructuring
              at Aiteo to co-founding Chappal Energies and leading capital raises exceeding $560M.
            </p>
            <p className="prof-summary-body">
              Career spans Lehman Brothers (London), Oando, UBA, and Aiteo Group, with deep expertise
              in reserves-based lending (RBL), M&A, debt capital markets, and financial modelling for
              E&P assets. Now based in Houston, advising companies navigating the US–Africa energy
              finance corridor.
            </p>
            <p className="prof-summary-body">
              Particular strength in cross-border transactions where regulatory relationships (NNPC,
              NUPRC), capital markets access (London, New York, Dubai), and deep financial structuring
              expertise must work in concert.
            </p>
          </div>

          {/* ── STATS ── */}
          <div className="prof-stats" role="list">
            {STATS.map((s) => (
              <div key={s.label} className="prof-stat" role="listitem">
                <span className="prof-stat-num">{s.num}</span>
                <span className="prof-stat-label">{s.label}</span>
              </div>
            ))}
          </div>

          {/* ── CORE COMPETENCIES ── */}
          <div className="prof-competencies">
            <p className="prof-section-label">Core Competencies</p>
            <div className="prof-comp-grid">
              {COMPETENCIES.map((col, ci) => (
                <div key={ci} className="prof-comp-col">
                  {col.map((item) => (
                    <div key={item} className="prof-comp-item">
                      <span className="prof-comp-pip" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}