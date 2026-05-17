const SCHOOLS = [
  {
    num: "01",
    title: "Regenerative Systems & Agroforestry",
    desc: "The flagship school. Africa's most advanced integrated farm model, taught by its architect.",
  },
  {
    num: "02",
    title: "Precision Irrigation & Water Management",
    desc: "Engineering water to the root zone not across the field.",
  },
  {
    num: "03",
    title: "Production Systems & Crop Management",
    desc: "From seed selection to harvest every commercial decision, demystified.",
  },
  {
    num: "04",
    title: "Agri-Food Economics & Business",
    desc: "The financial and commercial layer that turns production into profit.",
  },
];

const ADVANTAGES = [
  {
    label: "Digital Depth",
    body: "High-fidelity video, PDF guides, and audio formats structured for the busy professional, not the full-time student.",
  },
  {
    label: "Physical Validation",
    body: "Our 200-hectare Ogun State estate serves as a live training centre. Students practicalise coursework in real commercial conditions.",
  },
  {
    label: "Business Translation",
    body: "Every programme includes Bankable Blueprints™ proprietary business models ready for immediate field application.",
  },
];

const STATS = [
  { num: "4", label: "Schools of thought" },
  { num: "1,000+", label: "Practitioners trained" },
  { num: "200ha", label: "Live training estate" },
  { num: "6", label: "Bankable Blueprint™ models" },
];

export default function InstituteHighlight() {
  return (
    <>
      <style>{`
        .ih-section {
          background: #1E3622;
          padding: 88px 0 96px;
          font-family: "Work Sans", system-ui, sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* Subtle dot texture top-right */
        .ih-section::before {
          content: '';
          position: absolute;
          top: -40px; right: -40px;
          width: 240px; height: 240px;
          background-image: radial-gradient(rgba(201,168,76,0.12) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
          pointer-events: none;
        }

        .ih-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 48px;
          position: relative;
          z-index: 1;
        }

        /* ── TOP: kicker + heading + intro side by side ── */
        .ih-top {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: start;
          margin-bottom: 56px;
        }

        .ih-kicker {
          display: flex; align-items: center; gap: 10px; margin-bottom: 14px;
        }
        .ih-pip {
          width: 7px; height: 7px; border-radius: 50%;
          background: #C9A84C; flex-shrink: 0;
        }
        .ih-kicker-text {
          font-size: 15px; font-weight: 600; letter-spacing: 0.13em;
          text-transform: uppercase; color: #C9A84C;
        }

        .ih-heading {
          font-family: "M PLUS U", system-ui, sans-serif;
          font-size: clamp(28px, 3vw, 42px);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -0.02em;
          color: var(--white);
          margin: 0 0 16px;
        }

        .ih-tagline {
          font-family: "M PLUS U", system-ui, sans-serif;
          font-size: 13px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: #C9A84C; margin: 0 0 10px;
        }

        .ih-body {
          font-size: 14.5px; line-height: 1.78;
          color: var(--white);
          margin: 0 0 20px;
        }

        .ih-hero-quote {
          border-left: 2px solid rgba(201,168,76,0.5);
          padding: 8px 0 8px 16px;
          margin: 20px 0 0;
        }
        .ih-hero-quote p {
          font-size: 13px; font-style: italic; line-height: 1.7;
          color: var(--white); margin: 0 0 5px;
        }
        .ih-hero-quote cite {
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: #C9A84C; font-style: normal;
        }

        /* ── STATS STRIP ── */
        .ih-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
          margin-bottom: 56px;
          overflow: hidden;
        }

        .ih-stat {
          padding: 24px 20px;
          border-right: 1px solid rgba(201,168,76,0.2);
          text-align: center;
        }
        .ih-stat:last-child { border-right: none; }

        .ih-stat-num {
          font-family: "M PLUS U", system-ui, sans-serif;
          font-size: 28px; font-weight: 800;
          color: #C9A84C; line-height: 1; margin-bottom: 5px;
        }
        .ih-stat-label {
          font-size: 10.5px; font-weight: 500;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white);
        }

        /* ── DIFFERENTIATOR BLOCK ── */
        .ih-diff-label {
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #C9A84C; margin: 0 0 6px;
        }
        .ih-diff-headline {
          font-family: "M PLUS U", system-ui, sans-serif;
          font-size: 20px; font-weight: 700; line-height: 1.3;
          color: var(--white); margin: 0 0 28px; max-width: 560px;
        }
        .ih-diff-headline em {
          color: #C9A84C; font-style: normal;
        }

        .ih-advantages {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(201,168,76,0.15);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 56px;
        }

        .ih-adv {
          background: #1E3622;
          padding: 24px 22px;
        }
        .ih-adv-label {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #C9A84C; margin-bottom: 8px;
        }
        .ih-adv-body {
          font-size: 13px; line-height: 1.72;
          color: var(--white);
        }

        /* ── FOUR SCHOOLS ── */
        .ih-schools-label {
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #C9A84C; margin: 0 0 6px;
        }
        .ih-schools-heading {
          font-family: "M PLUS U", system-ui, sans-serif;
          font-size: 20px; font-weight: 700; line-height: 1.3;
          color: var(--white); margin: 0 0 24px;
        }

        .ih-schools {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 48px;
        }

        .ih-school {
          background: rgba(255,255,255,0.03);
          padding: 22px 22px;
          display: flex; gap: 14px; align-items: flex-start;
          transition: background 0.2s;
        }
        .ih-school:hover { background: rgba(201,168,76,0.06); }

        .ih-school-num {
          font-family: "M PLUS U", system-ui, sans-serif;
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.08em; color: #C9A84C;
          flex-shrink: 0; padding-top: 2px;
        }
        .ih-school-title {
          font-size: 13.5px; font-weight: 600; line-height: 1.4;
          color: var(--white); margin: 0 0 5px;
        }
        .ih-school-desc {
          font-size: 12px; line-height: 1.65;
          color: var(--white); margin: 0;
        }

        /* ── BOTTOM CTA BAR ── */
        .ih-cta-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
          padding-top: 40px;
          border-top: 1px solid rgba(255,255,255,0.1);
        }

        .ih-cta-copy {
          font-size: 14px; font-weight: 500; line-height: 1.6;
          color: var(--white);
          max-width: 440px;
        }
        .ih-cta-copy strong { color: var(--white); font-weight: 600; }

        .ih-cta-buttons {
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
        }

        .btn-gold {
          font-family: "Work Sans", system-ui, sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--ink); background: #C9A84C;
          border: none; padding: 13px 24px; border-radius: 3px;
          cursor: pointer; text-decoration: none;
          display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-gold:hover { background: #d9b85c; transform: translateY(-1px); }

        .btn-outline {
          font-family: "Work Sans", system-ui, sans-serif;
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 12px 22px; border-radius: 3px;
          cursor: pointer; text-decoration: none;
          display: inline-block;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline:hover {
          border-color: rgba(255,255,255,0.5);
          color: var(--white);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 960px) {
          .ih-top { grid-template-columns: 1fr; gap: 28px; }
          .ih-stats { grid-template-columns: repeat(2, 1fr); }
          .ih-stat:nth-child(2) { border-right: none; }
          .ih-stat:nth-child(3) { border-top: 1px solid rgba(201,168,76,0.2); }
          .ih-advantages { grid-template-columns: 1fr; }
          .ih-schools { grid-template-columns: 1fr; }
        }

        @media (max-width: 640px) {
          .ih-inner { padding: 0 24px; }
          .ih-section { padding: 64px 0 72px; }
          .ih-stats { grid-template-columns: repeat(2, 1fr); }
          .ih-cta-bar { flex-direction: column; align-items: flex-start; }
          .ih-cta-buttons { width: 100%; }
          .btn-gold, .btn-outline { flex: 1; text-align: center; }
        }
      `}</style>

      <section className="ih-section" id="institute" aria-labelledby="ih-heading">
        <div className="ih-inner">

          {/* ── TOP SPLIT ── */}
          <div className="ih-top">
            <div>
              <div className="ih-kicker">
                <div className="ih-pip" />
                <span className="ih-kicker-text">M.A. Williams Institute</span>
              </div>
              <h2 className="ih-heading" id="ih-heading">
                Agriculture's Greatest Gap Is Not Land Or Water.
              </h2>
              <p style={{ fontFamily: '"M PLUS U", system-ui, sans-serif', fontSize: 14, fontWeight: 600, letterSpacing: "0.04em", color: "#C9A84C", margin: "0 0 14px", textTransform: "uppercase" }}>
                It is knowledge that survives contact with reality.
              </p>
            </div>

            <div>
              <p className="ih-body">
                The M.A. Williams Agriculture Institute is a practitioner-built, digitally delivered, physically
                validated agricultural education platform. We don't teach from textbooks. We teach from farms.
              </p>
              <p className="ih-body" style={{ marginBottom: 0 }}>
                Founded on one conviction: the gap between agricultural theory and profitable practice is not
                a knowledge gap, it is a translation gap. We close it.
              </p>
              <blockquote className="ih-hero-quote">
                <p>
                  "A nation that does not catalogue its biodiversity cannot claim its wealth. Mapping our
                  biological signature is not just science, it is an act of economic sovereignty."
                </p>
                <cite>— Yomi Williams</cite>
              </blockquote>
            </div>
          </div>

          {/* ── STATS STRIP ── */}
          <div className="ih-stats" role="list">
            {STATS.map((s) => (
              <div key={s.label} className="ih-stat" role="listitem">
                <div className="ih-stat-num">{s.num}</div>
                <div className="ih-stat-label">{s.label}</div>
              </div>
            ))}
          </div>

          {/* ── PHYSICAL ADVANTAGE ── */}
          <p className="ih-diff-label">Our core differentiator</p>
          <h3 className="ih-diff-headline">
            The <em>Physical Advantage™</em> Every Other Platform Teaches Theory.{" "}
            We Teach Theory Validated By <em>Working Production Facilities</em>.
          </h3>

          <div className="ih-advantages">
            {ADVANTAGES.map((a) => (
              <div key={a.label} className="ih-adv">
                <div className="ih-adv-label">{a.label}</div>
                <p className="ih-adv-body">{a.body}</p>
              </div>
            ))}
          </div>

          {/* ── FOUR SCHOOLS ── */}
          <p className="ih-schools-label">Curriculum</p>
          <h3 className="ih-schools-heading">The Four Schools of Thought</h3>

          <div className="ih-schools">
            {SCHOOLS.map((s) => (
              <div key={s.num} className="ih-school">
                <span className="ih-school-num">{s.num}</span>
                <div>
                  <p className="ih-school-title">{s.title}</p>
                  <p className="ih-school-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* ── CTA BAR ── */}
          <div className="ih-cta-bar">
            <p className="ih-cta-copy">
              <strong>No other agricultural education platform in Africa offers this</strong> because no
              other platform owns the farms. Every student leaves with a deployable plan, not just a certificate.
            </p>
            <div className="ih-cta-buttons">
              <a href="/institute" className="btn-gold">Explore the Institute</a>
              <a href="/institute#enrol" className="btn-outline">View Courses</a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}