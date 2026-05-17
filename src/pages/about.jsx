import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const ROLES = [
  {
    id: "IP Holder",
    body: "We own the group's trademarks, brand rights, and proprietary methodologies including the regenerative agroforestry SOPs, the Bankable Blueprints™ curriculum framework, and the technology licensing agreements that underpin field operations.",
  },
  {
    id: "Education Owner",
    body: "The M.A. Williams Institute is our digital-first agricultural education platform. Every course, every certification, every Physical Advantage™ training session at our partner farm locations belongs here.",
  },
  {
    id: "International Family Office",
    body: "We hold international investments, land, property, and equity stakes in ventures across multiple markets. Every asset is held with the same long-term logic as the IP: protect it, grow it, make it outlast you.",
  },
  {
    id: "International Interface",
    body: "We are the primary contracting entity for international donors (USAID, GIZ, IFAD, Gates Foundation, FCDO), DFIs (AfDB, World Bank, AGRA), and global programme partners. UK registration, English law, and a clean governance record make us the natural counterparty.",
  },
  {
    id: "Gateway Consulting",
    body: "We provide high-level strategic advisory and market entry structuring to foreign businesses seeking credible access to African markets. Where conviction aligns, we invest alongside our clients.",
  },
  {
    id: "Group Architect",
    body: "We operate in Africa through Lambert Willis, our African family office arm. We set the strategic direction, brand standards, and intellectual property framework that all operating entities operate within.",
  },
];

const GROUP = [
  {
    name: "M.A. Williams & Co. UK",
    role: "The architect.",
    desc: "IP, education, international family office, gateway consulting, international contracting, and personal brand anchor. The apex of the structure.",
    tag: "London",
  },
  {
    name: "Lambert Willis Nigeria",
    role: "The active African arm.",
    desc: "Holds Nigerian land, property, and local investments. Acts as M.A. Williams' proxy in every African business venture providing local shareholding, directorship, and full representation.",
    tag: "Lagos",
  },
  {
    name: "Gartner Callaway Group",
    role: "The operator.",
    desc: "Three-entity sub-group: GC Global (HoldCo), GC Sustainability (institutional services), GC Fruit & Veg Farms (production and processing).",
    tag: "Nigeria",
  },
  {
    name: "Hibiscus Estate JV",
    role: "The proof.",
    desc: "A joint-venture 200-hectare regenerative hibiscus estate in Ogun State, a living demonstration of every methodology the group teaches and deploys.",
    tag: "Ogun State",
  },
];

const AWARDS = [
  { year: "2018", title: "The Entrepreneur Africa Prize for Innovation", body: "Gartner Callaway" },
  { year: "2018", title: "Cover Star and Story", body: "Farm & Food Magazine" },
  { year: "2023", title: "Training Plaque", body: "Nigerian Armed Forces" },
  { year: "2023", title: "Achiever Par Excellence Award", body: "NANNS" },
  { year: "2024", title: "Facilitator for Women and Youth Entrepreneurship Development Centre", body: "NBCC" },
];

const VALUES = [
  {
    name: "Practitioner authority",
    body: "We only teach what we have done. We only licence what we have proven. We only advise on what we have built.",
  },
  {
    name: "Structural thinking",
    body: "Good intentions without good architecture collapse. Every venture in this group was designed for longevity, not convenience.",
  },
  {
    name: "Knowledge sovereignty",
    body: "Africa's agricultural wealth is intellectual as much as physical. Cataloguing, protecting, and commercialising that knowledge is an act of economic sovereignty.",
  },
  {
    name: "Generational design",
    body: "We are not building for this decade. The structure, the IP, the land, and the Institute are designed to outlast any single generation.",
  },
];

/* ─────────────────────────────────────────
   HOOK: intersection observer for fade-ins
───────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ─────────────────────────────────────────
   REUSABLE: section kicker
───────────────────────────────────────── */
function Kicker({ label }) {
  return (
    <div className="kicker">
      <span className="kicker-pip" aria-hidden="true" />
      <span className="kicker-text">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────── */
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="about-hero" aria-labelledby="hero-heading">
      {/* Background image */}
      <div className="hero-bg-img" aria-hidden="true" />
      {/* Overlay */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Dot grid decorative */}
      <div className="hero-dot-grid" aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="hero-inner">
        <div className={`hero-left ${visible ? "anim-in" : ""}`}>
          <Kicker label="About M.A. Williams & Co." />
          <h1 className="hero-heading" id="hero-heading">
            We Don't Just Operate In African Agriculture.
          </h1>
          <p className="hero-subheading">
            We Have Built The Intellectual Architecture For It And The Institutional Structure To Take It To The World.
          </p>
          <div className="hero-badges" style={{ marginTop: "28px" }}>
            {["UK Registered", "30+ Years Experience", "Family Office", "Education Institution"].map((b) => (
              <span key={b} className="hero-badge">{b}</span>
            ))}
          </div>
        </div>

        <div className={`hero-right ${visible ? "anim-in-right" : ""}`}>
          {/* Gold accent line */}
          <div style={{ width: 48, height: 3, background: 'var(--gold)', marginBottom: 28, opacity: 0.8 }} aria-hidden="true" />
          <p className="hero-body">
            M.A. Williams &amp; Co. Ltd is a UK-registered international family office and holding company the apex entity of a multi-entity agribusiness group spanning Nigeria and the United Kingdom.
          </p>
          <p className="hero-body">
            We hold the trademarks, methodologies, and educational frameworks that the operating entities in our group are built upon. We manage a portfolio of international investments. We provide high-level strategic advisory to foreign businesses entering Africa.
          </p>
          <a href="/gateway" className="hero-cta" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10, marginTop: 28,
            fontFamily: 'var(--fb)', fontSize: 12, fontWeight: 700,
            letterSpacing: '0.09em', textTransform: 'uppercase',
            color: 'var(--deep)', background: 'var(--gold)',
            padding: '13px 26px', borderRadius: 3,
            textDecoration: 'none',
            transition: 'background 0.2s, transform 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#d9b85c'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--gold)'; e.currentTarget.style.transform = 'none'; }}
          >
            Work With Us
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom gold rule */}
      <div className="hero-rule-wrap" aria-hidden="true">
        <div className="hero-rule" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 2 — WHAT WE ARE (6 roles)
───────────────────────────────────────── */
function WhatWeAre() {
  const [ref, visible] = useInView();

  return (
    <section className="what-section" ref={ref} aria-labelledby="what-heading">
      <div className="section-inner">
        <div className={`what-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Our definition" />
          <h2 className="section-heading" id="what-heading">
            What M.A. Williams & Co. Is
          </h2>
          <p className="section-sub sub-text">
            We are not a consulting firm. We are not a development agency. We are the structural and intellectual heart of a group deliberately designed to protect what was built, scale what works, teach what has been learned, and guide those who come after.
          </p>
        </div>

        <div className="roles-grid">
          {ROLES.map((r, i) => (
            <div
              key={r.id}
              className={`role-card ${visible ? "anim-in" : ""}`}
              style={{ animationDelay: `${0.08 * i}s` }}
            >
              <div className="role-card-top">
                <span className="role-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="role-title">{r.id}</h3>
              </div>
              <p className="role-body">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3 — GROUP STRUCTURE
───────────────────────────────────────── */
function GroupStructure() {
  const [ref, visible] = useInView();

  return (
    <section className="group-section" ref={ref} aria-labelledby="group-heading">
      <div className="section-inner">
        <div className={`group-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Group architecture" />
          <h2 className="section-heading" id="group-heading">
            The Group How It Fits Together
          </h2>
          <p className="section-sub">
            M.A. Williams & Co. sits at the top of a purposefully designed multi-entity structure. Understanding the structure is understanding the strategy.
          </p>
        </div>

        <div className="group-grid">
          {GROUP.map((g, i) => (
            <div
              key={g.name}
              className={`group-card ${visible ? "anim-in" : ""}`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="group-card-head">
                <span className="group-tag">{g.tag}</span>
              </div>
              <p className="group-role">{g.role}</p>
              <h3 className="group-name">{g.name}</h3>
              <p className="group-desc">{g.desc}</p>
            </div>
          ))}
        </div>

        {/* Investor note */}
        <div className={`investor-note ${visible ? "anim-in" : ""}`} style={{ animationDelay: "0.42s" }}>
          <span className="investor-note-label" aria-hidden="true">For investors & partners</span>
          <p className="investor-note-body">
            The separation of IP (M.A. Williams), assets (Lambert Willis), and operations (Gartner Callaway) is intentional and protective. If you invest in or partner with any part of the group, you are engaging with a properly governed, structurally sound entity, not an ad hoc arrangement.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4 — FOUNDER
───────────────────────────────────────── */
function Founder() {
  const [ref, visible] = useInView();

  return (
    <section className="founder-section" ref={ref} aria-labelledby="founder-heading">
      <div className="section-inner">
        <div className="founder-grid">
          {/* Left — content */}
          <div className={`founder-left ${visible ? "anim-in" : ""}`}>
            <Kicker label="Our founder" />
            <h2 className="section-heading" id="founder-heading">Yomi Williams</h2>
            <p className="founder-title-line">
              Entrepreneur · Regenerative agriculture practitioner · Strategic agribusiness leader · Architect of the M.A. Williams Group
            </p>

            <p className="founder-body">
              M.A. Williams & Co. is the institutional expression of the work of Yomi Williams, three decades of frontline agricultural development built, tested, refined, and made bankable.
            </p>
            <p className="founder-body">
              Yomi pioneered Africa's first automated hydroponic urban vertical farms. He designed and built a 200-hectare regenerative agroforestry estate in Ogun State integrating pivot irrigation, precision CropX sensing, and solar infrastructure. He has trained over 1,000 youths, women, and military personnel and advised more than 30 organisations including Union Bank Plc, the Nigerian Armed Forces Resettlement Centre, and the NBCC.
            </p>
            <p className="founder-body">
              The intellectual work that M.A. Williams & Co. holds is not theoretical. It was built in the field, tested under pressure, and refined over more than three decades of frontline agricultural development.
            </p>

            <a
              href="https://www.yomiwilliams.com"
              target="_blank"
              rel="noopener noreferrer"
              className="founder-link"
            >
              Full profile at yomiwilliams.com →
            </a>
          </div>

          {/* Right — awards */}
          <div className={`founder-right ${visible ? "anim-in-right" : ""}`}>
            <p className="awards-label">Recognition</p>
            <div className="awards-list">
              {AWARDS.map((a, i) => (
                <div key={i} className="award-row">
                  <span className="award-year">{a.year}</span>
                  <div className="award-content">
                    <p className="award-title">{a.title}</p>
                    <p className="award-body">{a.body}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pull quote */}
            <blockquote className="founder-quote">
              <p className="founder-quote-text">
                "I am not building businesses. I am building a structure where knowledge is protected, land is secured, and impact is delivered in that order because that sequence determines whether what we build lasts a decade or a century."
              </p>
              <cite className="founder-quote-attr">— Yomi Williams</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5 — MISSION
───────────────────────────────────────── */
function Mission() {
  const [ref, visible] = useInView();

  return (
    <section className="mission-section" ref={ref} aria-labelledby="mission-heading">
      <div className="section-inner">
        <div className={`mission-inner ${visible ? "anim-in" : ""}`}>
          <Kicker label="Mission" />
          <h2 className="mission-heading" id="mission-heading">
            To Protect and Export the{" "}
            <em>Intellectual Capital of African Agricultural Practice</em>
          </h2>
          <p className="mission-sub">
            making it teachable, licensable, bankable, and investable for the generation that will feed the continent.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 6 — VALUES
───────────────────────────────────────── */
function Values() {
  const [ref, visible] = useInView();

  return (
    <section className="values-section" ref={ref} aria-labelledby="values-heading">
      <div className="section-inner">
        <div className={`values-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="What we stand on" />
          <h2 className="section-heading" id="values-heading">Values</h2>
        </div>

        <div className="values-grid">
          {VALUES.map((v, i) => (
            <div
              key={v.name}
              className={`value-item ${visible ? "anim-in" : ""}`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <span className="value-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div className="value-content">
                <h3 className="value-name">{v.name}</h3>
                <p className="value-body">{v.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CLOSING CTA
───────────────────────────────────────── */
function ClosingCTA() {
  const [ref, visible] = useInView();
  return (
    <section className="about-cta" ref={ref} aria-labelledby="cta-heading">
      <div className="section-inner">
        <div className={`cta-inner ${visible ? "anim-in" : ""}`}>
          <p className="cta-kicker-text">Work with the group</p>
          <h2 className="cta-heading" id="cta-heading">
            The structure is built.<br />The question is yours.
          </h2>
          <div className="cta-buttons">
            <a href="/gateway" className="cta-btn-primary">Gateway Consulting</a>
            <a href="/institute" className="cta-btn-secondary">Explore the Institute</a>
            <a href="/contact" className="cta-btn-ghost">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ROOT + STYLES
───────────────────────────────────────── */
export default function About() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        /* ── TOKENS ── */
        :root {
          --deep:    #1E3622;
          --green:   #2F5233;
          --mid:     #3D6B42;
          --gold:    #C9A84C;
          --pale:    #EBF2EB;
          --ink:     #1A1A18;
          --muted:   #7A7A74;
          --cream:   #FAF8F4;
          --white:   #FFFFFF;
          --fh:      "M PLUS U", system-ui, sans-serif;
          --fb:      "Work Sans", system-ui, sans-serif;
        }

        /* ── RESET ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .about-page { font-family: var(--fb); background: var(--cream); color: var(--ink); overflow-x: hidden; }

        /* ── ANIMATIONS ── */
        .anim-in       { animation: fadeUp   0.65s ease both; }
        .anim-in-right { animation: fadeRight 0.65s ease both; }

        @keyframes fadeUp    { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        @keyframes fadeRight { from { opacity: 0; transform: translateX(22px); } to { opacity: 1; transform: none; } }

        /* ── SHARED ── */
        .section-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .kicker { display: flex; align-items: center; gap: 9px; margin-bottom: 14px; }
        .kicker-pip {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0;
        }
        .kicker-text {
          font-size: 15px; font-weight: 700;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: var(--gold);
        }

        .section-heading {
          font-family: var(--fh);
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -0.02em; color: var(--ink);
          margin-bottom: 14px;
        }
        .section-sub {
          font-size: 15px; line-height: 1.75;
          color: var(--ink); max-width: 580px;
        }

        /* ════════════════════════════════════
           HERO
        ════════════════════════════════════ */
        .about-hero {
          min-height: 95vh;
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 140px 0 80px;
          background: var(--deep);
        }

        /* Background image layer */
        .hero-bg-img {
          position: absolute;
          inset: 0;
          background-image: url('/assets/hero-image (2).jpg');
          background-size: cover;
          background-position: center 40%;
          opacity: 0.22;
          transform: scale(1.04);
          transition: transform 8s ease;
          z-index: 0;
        }
        .about-hero:hover .hero-bg-img {
          transform: scale(1);
        }

        /* Multi-layer overlay: deep green gradient + vignette */
        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(135deg, rgba(30,54,34,0.92) 0%, rgba(30,54,34,0.65) 55%, rgba(15,30,19,0.88) 100%),
            radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%);
          z-index: 1;
        }

        .hero-dot-grid {
          position: absolute; bottom: 60px; right: 48px;
          display: grid; grid-template-columns: repeat(8, 8px);
          gap: 8px; opacity: 0.14; pointer-events: none;
          z-index: 2;
        }
        .hero-dot-grid span {
          width: 3px; height: 3px; border-radius: 50%;
          background: var(--gold); display: block;
        }

        .hero-inner {
          max-width: 1260px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
          position: relative; z-index: 2;
        }

        .hero-heading {
          font-family: var(--fh);
          font-size: clamp(32px, 3.8vw, 54px);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.025em; color: var(--white);
          margin-bottom: 16px;
        }
        .hero-subheading {
          font-family: var(--fh);
          font-size: clamp(16px, 1.8vw, 21px);
          font-weight: 500; line-height: 1.45;
          color: var(--gold); font-style: italic;
        }

        .hero-body {
          font-size: 17.5px; line-height: 1.78;
          color: var(--white);
          margin-bottom: 14px;
        }
        .hero-body:last-of-type { margin-bottom: 22px; }

        .hero-badges { display: flex; flex-wrap: wrap; gap: 8px; }
        .hero-badge {
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 3px;
          border: 1px solid rgba(201,168,76,0.35);
          color: rgba(201,168,76,0.8);
        }

        .hero-rule-wrap {
          max-width: 1160px; margin: 56px auto 0; padding: 0 48px;
          position: relative; z-index: 1;
        }
        .hero-rule {
          height: 1px;
          background: linear-gradient(90deg, var(--gold), rgba(201,168,76,0.1));
          opacity: 0.5;
        }

        /* ════════════════════════════════════
           WHAT WE ARE
        ════════════════════════════════════ */
        .what-section {
          background: var(--cream);
          padding: 88px 0 80px;
        }

        .what-header { margin-bottom: 52px; }

        .roles-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px;
          overflow: hidden;
        }

        .role-card {
          background: var(--white);
          padding: 28px 26px;
          transition: background 0.25s;
          opacity: 0;
        }
        .role-card.anim-in { opacity: 1; }
        .role-card:hover { background: var(--pale); }

        .role-card-top {
          display: flex; align-items: baseline;
          gap: 10px; margin-bottom: 12px;
        }
        .role-num {
          font-family: var(--fh);
          font-size: 11px; font-weight: 700;
          color: var(--gold); letter-spacing: 0.08em; flex-shrink: 0;
        }
        .role-title {
          font-family: var(--fh);
          font-size: 15px; font-weight: 700;
          color: var(--ink); line-height: 1.3; letter-spacing: -0.01em;
        }
        .role-body {
          font-size: 16px; line-height: 1.72;
          color: var(--ink);
        }

        .sub-text{
          color: var(--ink);
        }

        /* ════════════════════════════════════
           GROUP STRUCTURE
        ════════════════════════════════════ */
        .group-section {
          background: var(--deep);
          padding: 88px 0 80px;
        }
        .group-section .section-heading { color: var(--white); }
        .group-section .section-sub { color: var(--white); }
        .group-section .kicker-text { color: var(--gold); }

        .group-header { margin-bottom: 52px; }

        .group-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          background: rgba(201,168,76,0.18);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 6px;
          overflow: hidden;
          margin-bottom: 32px;
        }

        .group-card {
          background: rgba(255,255,255,0.03);
          padding: 28px 22px;
          opacity: 0;
          transition: background 0.25s;
        }
        .group-card.anim-in { opacity: 1; }
        .group-card:hover { background: rgba(201,168,76,0.07); }

        .group-card-head { margin-bottom: 16px; }
        .group-tag {
          font-size: 15px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--gold);
          border: 1px solid rgba(201,168,76,0.3);
          padding: 3px 9px; border-radius: 2px;
        }

        .group-role {
          font-size: 1px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white); margin-bottom: 6px;
        }
        .group-name {
          font-family: var(--fh);
          font-size: 15px; font-weight: 700;
          color: var(--white); margin-bottom: 10px;
          line-height: 1.3;
        }
        .group-desc {
          font-size: 12.5px; line-height: 1.7;
          color: var(--white);
        }

        .investor-note {
          background: rgba(201,168,76,0.07);
          border: 1px solid rgba(201,168,76,0.22);
          border-left: 3px solid var(--gold);
          border-radius: 4px;
          padding: 20px 24px;
          opacity: 0;
          display: flex; align-items: flex-start; gap: 16px;
        }
        .investor-note.anim-in { opacity: 1; }
        .investor-note-label {
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--gold); flex-shrink: 0; padding-top: 3px;
          white-space: nowrap;
        }
        .investor-note-body {
          font-size: 13px; line-height: 1.72;
          color: rgba(255,255,255,0.5);
        }

        /* ════════════════════════════════════
           FOUNDER
        ════════════════════════════════════ */
        .founder-section {
          background: var(--cream);
          padding: 88px 0 80px;
        }

        .founder-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }

        .founder-left { opacity: 0; }
        .founder-left.anim-in { opacity: 1; }
        .founder-right { opacity: 0; }
        .founder-right.anim-in-right { opacity: 1; }

        .founder-title-line {
          font-size: 12px; font-weight: 800;
          letter-spacing: 0.04em;
          color: var(--green);
          margin-bottom: 22px; line-height: 1.6;
        }
        .founder-body {
          font-size: 14.5px; line-height: 1.78;
          color: var(--ink); margin-bottom: 14px;
        }
        .founder-body:last-of-type { margin-bottom: 24px; }
        .founder-link {
          font-size: 12.5px; font-weight: 600;
          letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--green); text-decoration: none;
          border-bottom: 1px solid rgba(47,82,51,0.3);
          padding-bottom: 2px;
          transition: border-color 0.2s, color 0.2s;
        }
        .founder-link:hover { color: var(--deep); border-color: var(--deep); }

        /* Awards */
        .awards-label {
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 18px;
        }
        .awards-list {
          display: flex; flex-direction: column;
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
          margin-bottom: 28px;
        }
        .award-row {
          display: flex; gap: 16px; align-items: flex-start;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(47,82,51,0.08);
          background: var(--white);
          transition: background 0.2s;
        }
        .award-row:last-child { border-bottom: none; }
        .award-row:hover { background: var(--pale); }
        .award-year {
          font-family: var(--fh);
          font-size: 12px; font-weight: 700;
          color: var(--gold); flex-shrink: 0; padding-top: 2px;
          width: 34px;
        }
        .award-title {
          font-size: 17px; font-weight: 500;
          color: var(--ink); margin-bottom: 2px; line-height: 1.4;
        }
        .award-body {
          font-size: 14.5px; color: var(--ink);
          font-weight: 500; 
        }

        /* Founder quote */
        .founder-quote {
          background: var(--deep);
          border-radius: 6px;
          padding: 24px 24px 20px;
          position: relative;
        }
        .founder-quote::before {
          content: '"';
          position: absolute; top: 12px; left: 18px;
          font-family: var(--fh);
          font-size: 64px; font-weight: 800;
          color: rgba(201,168,76,0.2);
          line-height: 1;
        }
        .founder-quote-text {
          font-size: 13.5px; font-style: italic;
          line-height: 1.72; color: var(--white) ;
          margin-bottom: 12px; padding-top: 8px;
          position: relative; z-index: 1;
        }
        .founder-quote-attr {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--gold); font-style: normal;
        }

        /* ════════════════════════════════════
           MISSION
        ════════════════════════════════════ */
        .mission-section {
          background: var(--green);
          padding: 80px 0;
          position: relative; overflow: hidden;
        }
        .mission-section::before {
          content: '';
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
        }

        .mission-inner {
          opacity: 0; position: relative; z-index: 1;
        }
        .mission-inner.anim-in { opacity: 1; }
        .mission-inner .kicker-text { color: rgba(201,168,76,0.9); }
        .mission-inner .kicker-pip { background: var(--gold); }

        .mission-heading {
          font-family: var(--fh);
          font-size: clamp(24px, 3vw, 38px);
          font-weight: 800; line-height: 1.2;
          letter-spacing: -0.02em; color: var(--white);
          margin-bottom: 12px; max-width: 680px;
        }
        .mission-heading em {
          color: var(--gold); font-style: normal;
        }
        .mission-sub {
          font-size: 16px; line-height: 1.7;
          color: var(--white); max-width: 560px;
        }

        /* ════════════════════════════════════
           VALUES
        ════════════════════════════════════ */
        .values-section {
          background: var(--cream);
          padding: 88px 0 80px;
        }
        .values-header { margin-bottom: 48px; }

        .values-grid {
          display: flex; flex-direction: column;
        }

        .value-item {
          display: grid;
          grid-template-columns: 52px 1fr;
          gap: 0 20px;
          padding: 28px 0;
          border-bottom: 1px solid rgba(47,82,51,0.1);
          opacity: 0;
          align-items: start;
        }
        .value-item:first-child { border-top: 1px solid rgba(47,82,51,0.1); }
        .value-item.anim-in { opacity: 1; }

        .value-num {
          font-family: var(--fh);
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.09em; color: var(--gold);
          padding-top: 3px;
        }
        .value-name {
          font-family: var(--fh);
          font-size: 17px; font-weight: 700;
          color: var(--ink); margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        .value-body {
          font-size: 14px; line-height: 1.75; color: var(--ink);
        }

        /* ════════════════════════════════════
           CLOSING CTA
        ════════════════════════════════════ */
        .about-cta {
          background: #0F1E13;
          padding: 88px 0;
        }

        .cta-inner {
          text-align: center; opacity: 0; max-width: 640px; margin: 0 auto;
        }
        .cta-inner.anim-in { opacity: 1; }
        .cta-kicker-text {
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 16px; display: block;
        }
        .cta-heading {
          font-family: var(--fh);
          font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800; line-height: 1.12;
          letter-spacing: -0.022em; color: var(--white);
          margin-bottom: 36px;
        }
        .cta-buttons {
          display: flex; align-items: center; justify-content: center;
          gap: 12px; flex-wrap: wrap;
        }
        .cta-btn-primary {
          font-family: var(--fb);
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #0F1E13; background: var(--gold);
          border: none; padding: 14px 26px; border-radius: 3px;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
        }
        .cta-btn-primary:hover { background: #d9b85c; transform: translateY(-1px); }
        .cta-btn-secondary {
          font-family: var(--fb);
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white);
          background: var(--green);
          border: none; padding: 14px 26px; border-radius: 3px;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
          display: inline-block;
        }
        .cta-btn-secondary:hover { background: var(--mid); transform: translateY(-1px); }
        .cta-btn-ghost {
          font-family: var(--fb);
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white);
          background: transparent;
          border: 1px solid rgba(255,255,255,0.2);
          padding: 13px 24px; border-radius: 3px;
          cursor: pointer; text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
          display: inline-block;
        }
        .cta-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--white); }

        /* ════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════ */
        @media (max-width: 1024px) {
          .roles-grid { grid-template-columns: repeat(2, 1fr); }
          .group-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .section-inner { padding: 0 24px; }
          .hero-inner { grid-template-columns: 1fr; gap: 36px; padding: 0 24px; }
          .hero-rule-wrap { padding: 0 24px; }
          .about-hero { padding: 80px 0 56px; }
          .founder-grid { grid-template-columns: 1fr; gap: 40px; }
          .roles-grid { grid-template-columns: 1fr; }
          .group-grid { grid-template-columns: 1fr; }
          .investor-note { flex-direction: column; gap: 8px; }
          .what-section, .founder-section, .values-section,
          .group-section, .mission-section, .about-cta { padding: 64px 0; }
        }

        @media (max-width: 480px) {
          .cta-buttons { flex-direction: column; align-items: stretch; }
          .cta-btn-primary, .cta-btn-secondary, .cta-btn-ghost { text-align: center; }
        }
      `}</style>

      <div className="about-page">
        <Hero />
        <WhatWeAre />
        <GroupStructure />
        <Founder />
        <Mission />
        <Values />
        <ClosingCTA />
      </div>
    </>
  );
}