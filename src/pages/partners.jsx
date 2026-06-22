import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const WHY_US = [
  {
    num: "01",
    title: "Verifiable track record",
    body: "Every capability we represent is backed by documented, verifiable field work. From Africa's first automated hydroponic farms to a 200-hectare precision-sensored regenerative estate. We have done it. You can visit it.",
  },
  {
    num: "02",
    title: "UK legal foundation",
    body: "UK-registered, English law contracts, transparent governance, clean audit trail. International donor and DFI organisations routinely cite UK registration as a qualifying condition for programme contracts. We meet it.",
  },
  {
    num: "03",
    title: "Field delivery infrastructure",
    body: "We don't just design programmes. We deliver them. Through Gartner Callaway's field services team in southwest Nigeria using CropX sensors, irrigation infrastructure, trained agronomists, and mobile equipment we can execute what we design.",
  },
  {
    num: "04",
    title: "Education and training capacity",
    body: "Every programme we run can include a certified training component through the M.A. Williams Agriculture Institute, with completion tracking and institutional documentation suitable for donor M&E reporting.",
  },
  {
    num: "05",
    title: "Independent and accountable",
    body: "We are not affiliated with any input supplier, equipment vendor, or commercial interest that would compromise the independence of our assessments, designs, or programme recommendations.",
  },
];

const PARTNERSHIP_TYPES = [
  {
    type: "Grant Education & Research",
    desc: "Funding for M.A. Williams Institute curriculum development, agricultural research, and capacity-building programmes.",
    deliverables: "Curriculum outputs, research papers, training data, M&E reports.",
    partners: ["Gates Foundation", "Rockefeller Foundation", "CGIAR", "Ford Foundation"],
    accent: "#C9A84C",
  },
  {
    type: "Programme Implementation",
    desc: "M.A. Williams as prime contractor for field programmes irrigation delivery, crop management, farmer training, M&E reporting.",
    deliverables: "Field delivery, farmer certification, programme documentation.",
    partners: ["IFAD", "GIZ", "USAID", "World Bank", "FCDO", "AfDB"],
    accent: "#2F5233",
  },
  {
    type: "Technical Assistance",
    desc: "Expert advisory input on programme design, agricultural policy, and institutional lending or insurance frameworks.",
    deliverables: "Policy briefs, programme design documents, training materials.",
    partners: ["AGRA", "NIRSAL", "African DFIs", "Bilateral development agencies"],
    accent: "#3D6B42",
  },
  {
    type: "Research Partnership",
    desc: "Joint research and documentation on regenerative agroforestry, precision irrigation, and African agricultural economics.",
    deliverables: "Published research, data sets, case studies, field reports.",
    partners: ["Universities", "CGIAR centres", "International think tanks"],
    accent: "#C9A84C",
  },
  {
    type: "Commercial Investment",
    desc: "Equity or structured debt investment into the Gartner Callaway sub-group at GC Global level.",
    deliverables: "Investor reporting, governance access, financial returns.",
    partners: ["Agri-PE funds", "Impact investors", "DFI equity windows"],
    accent: "#1E3622",
  },
];

const CREDENTIALS = [
  { num: "10+", label: "Years field experience" },
  { num: "200ha", label: "Live production estate" },
  { num: "1,000+", label: "Practitioners trained" },
  { num: "5+", label: "Donor organisations worked with" },
];

/* ─────────────────────────────────────────
   HOOK
───────────────────────────────────────── */
function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

function Kicker({ label, light = false }) {
  return (
    <div className="pt-kicker">
      <span className="pt-pip" style={{ background: "#C9A84C" }} aria-hidden="true" />
      <span className="pt-kicker-text" style={{ color: light ? "rgba(201,168,76,0.9)" : "#2F5233" }}>
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION 1 — HERO
───────────────────────────────────────── */
function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="pt-hero" aria-labelledby="pt-hero-h">
      <div className="pt-hero-geo-1" aria-hidden="true" />
      <div className="pt-hero-geo-2" aria-hidden="true" />
      <div className="pt-dot-grid" aria-hidden="true">
        {Array.from({ length: 56 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="pt-inner pt-hero-inner">
        <div className={`pt-hero-left ${vis ? "pt-vis-up" : ""}`}>
          <Kicker label="International Partners & Donors" light />
          <h1 className="pt-hero-h1" id="pt-hero-h">
            The Bridge between International Capital
            and <span className="pt-gold">African Agricultural</span><br />
            Reality.
          </h1>
        </div>

        <div className={`pt-hero-right ${vis ? "pt-vis-right" : ""}`}>
          <p className="pt-hero-body">
            M.A. Williams & Co. Ltd is a UK-registered entity with a documented operational record spanning over a decade of frontline agricultural development across Nigeria and West Africa.
          </p>
          <p className="pt-hero-body">
            We are structured, governed, and positioned to serve as the primary counterparty for international donors, development finance institutions, and global programme partners seeking credible, accountable implementation capacity in the African agri-food system.
          </p>

          {/* Credentials strip */}
          <div className="pt-hero-creds">
            {CREDENTIALS.map(c => (
              <div key={c.label} className="pt-hero-cred">
                <span className="pt-hero-cred-num">{c.num}</span>
                <span className="pt-hero-cred-label">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-inner" aria-hidden="true">
        <div className="pt-hero-rule" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 2 — WHY PARTNERS WORK WITH US
───────────────────────────────────────── */
function WhyUs() {
  const [ref, vis] = useInView();

  return (
    <section className="pt-why-section" ref={ref} aria-labelledby="pt-why-h">
      <div className="pt-inner">
        <div className={`pt-section-header ${vis ? "pt-vis-up" : ""}`}>
          <Kicker label="Our proposition" />
          <h2 className="pt-section-h" id="pt-why-h">
            Why International Partners Work With Us
          </h2>
          <p className="pt-section-sub">
            Five reasons. All of them verifiable.
          </p>
        </div>

        <div className="pt-why-grid">
          {WHY_US.map((w, i) => (
            <div
              key={w.num}
              className={`pt-why-card ${vis ? "pt-vis-up" : ""}`}
              style={{ animationDelay: `${0.08 * i}s` }}
            >
              <div className="pt-why-card-head">
                <span className="pt-why-num">{w.num}</span>
                <div className="pt-why-rule" aria-hidden="true" />
              </div>
              <h3 className="pt-why-title">{w.title}</h3>
              <p className="pt-why-body">{w.body}</p>
            </div>
          ))}

          {/* Quote card */}
          <div
            className={`pt-why-card pt-why-quote-card ${vis ? "pt-vis-up" : ""}`}
            style={{ animationDelay: "0.42s" }}
          >
            <blockquote className="pt-why-quote">
              <p>"A nation that does not catalogue its biodiversity cannot claim its wealth. Mapping our biological signature is not just science, it is an act of economic sovereignty."</p>
              <cite>— Yomi Williams</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3 — PARTNERSHIP TYPES
───────────────────────────────────────── */
function PartnershipTypes() {
  const [ref, vis] = useInView();
  const [active, setActive] = useState(0);

  return (
    <section className="pt-types-section" ref={ref} aria-labelledby="pt-types-h">
      <div className="pt-inner">
        <div className={`pt-section-header ${vis ? "pt-vis-up" : ""}`}>
          <Kicker label="How we work together" light />
          <h2 className="pt-section-h pt-section-h--light" id="pt-types-h">
            Partnership Types
          </h2>
          <p className="pt-section-sub pt-section-sub--light">
            Five distinct partnership models each with clear deliverables, documented outcomes, and named partner organisations who have worked in each category.
          </p>
        </div>

        {/* Tab strip */}
        <div className={`pt-type-tabs ${vis ? "pt-vis-up" : ""}`} style={{ animationDelay: "0.1s" }} role="tablist">
          {PARTNERSHIP_TYPES.map((t, i) => (
            <button
              key={t.type}
              role="tab"
              aria-selected={active === i}
              className={`pt-type-tab ${active === i ? "pt-type-tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="pt-type-tab-num" aria-hidden="true">0{i + 1}</span>
              {t.type}
            </button>
          ))}
        </div>

        {/* Active panel */}
        {PARTNERSHIP_TYPES.map((t, i) => (
          <div
            key={t.type}
            role="tabpanel"
            hidden={active !== i}
            className={`pt-type-panel ${active === i ? "pt-type-panel--active" : ""} ${vis ? "pt-vis-up" : ""}`}
            style={{ animationDelay: "0.18s" }}
          >
            <div className="pt-type-panel-grid">
              <div className="pt-type-panel-left">
                <span className="pt-type-panel-num" aria-hidden="true">0{i + 1}</span>
                <h3 className="pt-type-panel-title">{t.type}</h3>
                <p className="pt-type-panel-desc">{t.desc}</p>
              </div>

              <div className="pt-type-panel-right">
                <div className="pt-type-block">
                  <p className="pt-type-block-label">What we deliver</p>
                  <p className="pt-type-block-body">{t.deliverables}</p>
                </div>
                <div className="pt-type-block">
                  <p className="pt-type-block-label">Typical partners</p>
                  <div className="pt-type-partners">
                    {t.partners.map(p => (
                      <span key={p} className="pt-type-partner-tag">{p}</span>
                    ))}
                  </div>
                </div>
                <Link href="/contact?enquiry=partnership" className="pt-type-cta">
                  Enquire about this partnership type →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4 — WHAT WE NEED FROM PARTNERS
───────────────────────────────────────── */
function WhatWeNeed() {
  const [ref, vis] = useInView();

  return (
    <section className="pt-need-section" ref={ref} aria-labelledby="pt-need-h">
      <div className="pt-inner">
        <div className="pt-need-grid">

          <div className={`pt-need-left ${vis ? "pt-vis-up" : ""}`}>
            <Kicker label="Conviction alignment" />
            <h2 className="pt-section-h" id="pt-need-h">
              What We Need From Partners
            </h2>
            <p className="pt-need-body">
              We are not seeking generic funding. We are seeking partners with aligned conviction: that African agricultural transformation requires practitioner-led systems, precision technology, regenerative ecological logic, and institutional infrastructure that works beyond the project cycle.
            </p>
            <p className="pt-need-body">
              If that describes your mandate, we want to talk.
            </p>

            <div className="pt-need-conviction-list">
              {[
                "Practitioner-led systems, not theoretical frameworks",
                "Precision technology deployed in real field conditions",
                "Regenerative ecological logic, not extractive models",
                "Infrastructure designed to outlast the project cycle",
              ].map((item, i) => (
                <div key={i} className="pt-need-conviction-item">
                  <span className="pt-need-conviction-pip" aria-hidden="true" />
                  <span className="pt-need-conviction-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`pt-need-right ${vis ? "pt-vis-right" : ""}`}>
            {/* Qualification card */}
            <div className="pt-qualif-card">
              <p className="pt-qualif-label">UK registration what it means for you</p>
              <p className="pt-qualif-body">
                M.A. Williams & Co. Ltd is registered in England and Wales. All programme contracts are governed under English law. We maintain transparent governance records, a clean audit trail, and full compliance with UK Companies House requirements.
              </p>
              <p className="pt-qualif-body" style={{ marginTop: 10 }}>
                This means your legal, compliance, and procurement teams face a familiar counterparty not an unverified offshore entity. USAID, GIZ, FCDO, and World Bank frameworks all recognise UK-registered entities as qualifying counterparties for prime contractor arrangements.
              </p>
              <div className="pt-qualif-badges">
                {["UK Registered", "English Law", "Clean Audit Trail", "Companies House Compliant"].map(b => (
                  <span key={b} className="pt-qualif-badge">{b}</span>
                ))}
              </div>
            </div>

            {/* Accountability note */}
            <div className="pt-accountability-note">
              <span className="pt-accountability-label">Field delivery infrastructure</span>
              <p className="pt-accountability-body">
                Programmes are executed through Gartner Callaway's field services team in southwest Nigeria CropX sensors, irrigation infrastructure, trained agronomists, mobile equipment. We design and we deliver. The Institute handles M&E training components and certification documentation for donor reporting.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5 — CTA
───────────────────────────────────────── */
function PartnerCTA() {
  const [ref, vis] = useInView();

  return (
    <section className="pt-cta-section" ref={ref} aria-labelledby="pt-cta-h">
      <div className="pt-inner">
        <div className={`pt-cta-inner ${vis ? "pt-vis-up" : ""}`}>
          <Kicker label="Take the next step" light />
          <h2 className="pt-cta-h" id="pt-cta-h">
            If the mandate aligns,<br />
            <span className="pt-gold">the conversation is straightforward.</span>
          </h2>
          <p className="pt-cta-sub">
            Submit a partnership enquiry, request our capability statement, or schedule a call with Yomi Williams directly. We respond to all partner enquiries within five working days.
          </p>
          <div className="pt-cta-btns">
            <a href="/contact" className="pt-btn-gold">
              Submit a Partnership Enquiry
            </a>
            <a href="https://wa.me/2348185811939"
  target="_blank"
  rel="noopener noreferrer" className="pt-btn-ghost">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ROOT + STYLES
───────────────────────────────────────── */
export default function PartnersPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        :root {
          --deep:  #1E3622; --green: #2F5233; --mid: #3D6B42;
          --gold:  #C9A84C; --pale: #EBF2EB; --ink: #1A1A18;
          --muted: #1A1A18; --cream: #FAF8F4; --white: #FFFFFF;
          --fh: "M PLUS U", system-ui, sans-serif;
          --fb: "Work Sans", system-ui, sans-serif;
        }
        .partners-page { font-family: var(--fb); background: var(--cream); color: var(--ink); overflow-x: hidden; }

        /* ── Animations ── */
        .pt-vis-up    { animation: pt-fadeUp   0.65s ease both; }
        .pt-vis-right { animation: pt-fadeRight 0.65s ease both; }
        @keyframes pt-fadeUp    { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:none; } }
        @keyframes pt-fadeRight { from { opacity:0; transform:translateX(22px); } to { opacity:1; transform:none; } }

        /* ── Shared ── */
        .pt-inner { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
        .pt-kicker { display: flex; align-items: center; gap: 9px; margin-bottom: 14px; }
        .pt-pip { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; display: block; }
        .pt-kicker-text { font-size: 15px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; }
        .pt-gold { color: var(--gold); }

        .pt-section-h {
          font-family: var(--fh); font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.02em;
          color: var(--ink); margin-bottom: 12px;
        }
        .pt-section-h--light { color: var(--white); }
        .pt-section-sub { font-size: 15px; line-height: 1.75; color: var(--muted); max-width: 560px; }
        .pt-section-sub--light { color: var(--white); }
        .pt-section-header { margin-bottom: 48px; }

        /* ══════════════════════
           HERO
        ══════════════════════ */
        .pt-hero {
          background: var(--deep); padding: 120px 0 72px;
          position: relative; overflow: hidden;
        }
        .pt-hero-geo-1 {
          position: absolute; top: -100px; right: -100px;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(61,107,66,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .pt-hero-geo-2 {
          position: absolute; bottom: -60px; left: -60px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .pt-dot-grid {
          position: absolute; top: 40px; right: 40px;
          display: grid; grid-template-columns: repeat(8, 8px);
          gap: 8px; opacity: 0.14; pointer-events: none;
        }
        .pt-dot-grid span { width: 3px; height: 3px; border-radius: 50%; background: var(--gold); display: block; }

        .pt-hero-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
          position: relative; z-index: 1; padding-bottom: 56px;
        }

        .pt-hero-left { opacity: 0; }
        .pt-hero-left.pt-vis-up { opacity: 1; }
        .pt-hero-h1 {
          font-family: var(--fh); font-size: clamp(32px, 4vw, 52px);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.025em;
          color: var(--white); margin-bottom: 0;
        }

        .pt-hero-right { opacity: 0; }
        .pt-hero-right.pt-vis-right { opacity: 1; }
        .pt-hero-body {
          font-size: 14.5px; line-height: 1.78;
          color: var(--white); margin-bottom: 14px;
        }

        .pt-hero-creds {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0; margin-top: 28px;
          border: 1px solid rgba(201,168,76,0.2); border-radius: 4px; overflow: hidden;
        }
        .pt-hero-cred {
          padding: 18px 14px; text-align: center;
          border-right: 1px solid rgba(201,168,76,0.2);
          display: flex; flex-direction: column; gap: 4px;
        }
        .pt-hero-cred:last-child { border-right: none; }
        .pt-hero-cred-num {
          font-family: var(--fh); font-size: 22px; font-weight: 800;
          color: var(--gold); line-height: 1;
        }
        .pt-hero-cred-label {
          font-size: 10px; font-weight: 500; letter-spacing: 0.07em;
          text-transform: uppercase; color: var(--white);
          line-height: 1.4;
        }

        .pt-hero-rule {
          height: 1px; margin-top: 0;
          background: linear-gradient(90deg, var(--gold), rgba(201,168,76,0.08));
          opacity: 0.45;
        }

        /* ══════════════════════
           WHY US
        ══════════════════════ */
        .pt-why-section { background: var(--cream); padding: 88px 0 80px; }

        .pt-why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
        }
        .pt-section-sub {
        color: var(--ink);
        }  

        .pt-why-card {
          background: var(--white); padding: 30px 26px;
          opacity: 0; display: flex; flex-direction: column; gap: 10px;
          transition: background 0.25s;
        }
        .pt-why-card.pt-vis-up { opacity: 1; }
        .pt-why-card:hover { background: var(--pale); }

        .pt-why-card-head { display: flex; align-items: center; gap: 12px; }
        .pt-why-num {
          font-family: var(--fh); font-size: 11px; font-weight: 700;
          letter-spacing: 0.09em; color: var(--gold); flex-shrink: 0;
        }
        .pt-why-rule { flex: 1; height: 1px; background: rgba(47,82,51,0.12); }

        .pt-why-title {
          font-family: var(--fh); font-size: 16px; font-weight: 700;
          line-height: 1.25; letter-spacing: -0.01em; color: var(--ink);
        }
        .pt-why-body { font-size: 13px; line-height: 1.72; color: var(--ink); }

        /* Quote card spans 2 cols */
        .pt-why-quote-card {
          grid-column: span 1;
          background: var(--deep);
        }
        .pt-why-quote-card:hover { background: #243d2a; }
        .pt-why-quote { display: flex; flex-direction: column; gap: 14px; height: 100%; justify-content: center; }
        .pt-why-quote p {
          font-size: 14px; font-style: italic; line-height: 1.72;
          color: var(--white);
        }
        .pt-why-quote cite {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--gold); font-style: normal;
        }

        /* ══════════════════════
           PARTNERSHIP TYPES
        ══════════════════════ */
        .pt-types-section { background: var(--deep); padding: 88px 0 80px; }

        .pt-section-sub {
          color: white;
        }

        /* Tab strip */
        .pt-type-tabs {
          display: flex; flex-direction: column; gap: 1px;
          opacity: 0; margin-bottom: 24px;
        }
        .pt-type-tabs.pt-vis-up { opacity: 1; }

        .pt-type-tab {
          font-family: var(--fb); font-size: 12.5px; font-weight: 500;
          letter-spacing: 0.02em;
          padding: 14px 20px; border-radius: 3px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: var(--white);
          cursor: pointer; text-align: left;
          display: flex; align-items: center; gap: 14px;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .pt-type-tab:hover {
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.8);
          border-color: rgba(201,168,76,0.2);
        }
        .pt-type-tab--active {
          background: rgba(201,168,76,0.1);
          border-color: rgba(201,168,76,0.35);
          color: var(--gold);
        }
        .pt-type-tab-num {
          font-family: var(--fh); font-size: 10px; font-weight: 700;
          color: rgba(201,168,76,0.5); letter-spacing: 0.08em;
          flex-shrink: 0;
        }
        .pt-type-tab--active .pt-type-tab-num { color: var(--gold); }

        /* Panel */
        .pt-type-panel {
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 5px; overflow: hidden;
          opacity: 0;
        }
        .pt-type-panel--active.pt-vis-up { opacity: 1; animation: pt-fadeUp 0.45s ease both; }

        .pt-type-panel-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 0;
        }

        .pt-type-panel-left {
          background: rgba(255,255,255,0.04);
          padding: 36px 32px;
          border-right: 1px solid rgba(201,168,76,0.18);
        }
        .pt-type-panel-num {
          display: block;
          font-family: var(--fh); font-size: 11px; font-weight: 700;
          color: var(--gold); letter-spacing: 0.09em; margin-bottom: 12px;
        }
        .pt-type-panel-title {
          font-family: var(--fh); font-size: 20px; font-weight: 800;
          color: var(--white); line-height: 1.2; margin-bottom: 16px;
          letter-spacing: -0.015em;
        }
        .pt-type-panel-desc {
          font-size: 14px; line-height: 1.75; color: var(--white);
        }

        .pt-type-panel-right {
          padding: 36px 32px;
          display: flex; flex-direction: column; gap: 24px;
        }
        .pt-type-block {}
        .pt-type-block-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 10px;
        }
        .pt-type-block-body {
          font-size: 13.5px; line-height: 1.72; color: rgba(255,255,255,0.55);
        }
        .pt-type-partners { display: flex; flex-wrap: wrap; gap: 6px; }
        .pt-type-partner-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          padding: 5px 12px; border-radius: 3px;
          border: 1px solid rgba(201,168,76,0.28);
          color: rgba(201,168,76,0.8);
        }
        .pt-type-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--gold);
          text-decoration: none; border-bottom: 1px solid rgba(201,168,76,0.35);
          padding-bottom: 2px; width: fit-content; margin-top: auto;
          transition: border-color 0.2s, opacity 0.2s;
        }
        .pt-type-cta:hover { opacity: 0.8; }

        /* ══════════════════════
           WHAT WE NEED
        ══════════════════════ */
        .pt-need-section { background: var(--cream); padding: 88px 0 80px; }

        .pt-need-grid {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
        }

        .pt-need-left { opacity: 0; }
        .pt-need-left.pt-vis-up { opacity: 1; }
        .pt-need-right { opacity: 0; }
        .pt-need-right.pt-vis-right { opacity: 1; }

        .pt-need-body {
          font-size: 15px; line-height: 1.78; color: var(--ink); margin-bottom: 14px;
        }

        .pt-need-conviction-list {
          display: flex; flex-direction: column; gap: 0;
          margin-top: 28px;
          border: 1px solid rgba(47,82,51,0.12); border-radius: 5px; overflow: hidden;
        }
        .pt-need-conviction-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 18px;
          border-bottom: 1px solid rgba(47,82,51,0.08);
          background: var(--white);
        }
        .pt-need-conviction-item:last-child { border-bottom: none; }
        .pt-need-conviction-pip {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0; margin-top: 7px;
        }
        .pt-need-conviction-text {
          font-size: 13.5px; font-weight: 500; line-height: 1.6; color: var(--ink);
        }

        .pt-qualif-card {
          background: var(--deep); border-radius: 5px;
          padding: 28px 26px; margin-bottom: 16px;
        }
        .pt-qualif-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 12px;
        }
        .pt-qualif-body {
          font-size: 13px; line-height: 1.72; color: var(--white);
        }
        .pt-qualif-badges {
          display: flex; flex-wrap: wrap; gap: 6px; margin-top: 18px;
        }
        .pt-qualif-badge {
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.06em;
          padding: 4px 12px; border-radius: 3px;
          border: 1px solid rgba(201,168,76,0.3);
          color: rgba(201,168,76,0.8);
        }

        .pt-accountability-note {
          background: var(--pale);
          border: 1px solid rgba(47,82,51,0.15);
          border-left: 3px solid var(--green);
          border-radius: 4px; padding: 20px 20px;
        }
        .pt-accountability-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--green); margin-bottom: 10px; display: block;
        }
        .pt-accountability-body {
          font-size: 13px; line-height: 1.72; color: var(--ink);
        }

        /* ══════════════════════
           CTA
        ══════════════════════ */
        .pt-cta-section { background: #0F1E13; padding: 88px 0; }
        .pt-cta-inner { opacity: 0; max-width: 700px; }
        .pt-cta-inner.pt-vis-up { opacity: 1; }

        .pt-cta-h {
          font-family: var(--fh); font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 800; line-height: 1.12; letter-spacing: -0.022em;
          color: var(--white); margin-bottom: 16px;
        }
        .pt-cta-sub {
          font-size: 15px; line-height: 1.75; color: var(--white);
          margin-bottom: 36px; max-width: 560px;
        }
        .pt-cta-btns { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }

        .pt-btn-gold {
          font-family: var(--fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #0F1E13; background: var(--gold); border: none;
          padding: 14px 24px; border-radius: 3px; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .pt-btn-gold:hover { background: #d9b85c; transform: translateY(-1px); }

        .pt-btn-green {
          font-family: var(--fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white); background: var(--green); border: none;
          padding: 14px 24px; border-radius: 3px; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .pt-btn-green:hover { background: var(--mid); transform: translateY(-1px); }

        .pt-btn-ghost {
          font-family: var(--fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.2); background: transparent;
          padding: 13px 22px; border-radius: 3px; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: border-color 0.2s, color 0.2s;
        }
        .pt-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--white); }

        /* ══════════════════════
           RESPONSIVE
        ══════════════════════ */
        @media (max-width: 1024px) {
          .pt-why-grid { grid-template-columns: repeat(2, 1fr); }
          .pt-type-panel-grid { grid-template-columns: 1fr; }
          .pt-type-panel-left { border-right: none; border-bottom: 1px solid rgba(201,168,76,0.18); }
          .pt-need-grid { grid-template-columns: 1fr; gap: 40px; }
          .pt-hero-creds { grid-template-columns: repeat(2, 1fr); }
          .pt-hero-cred:nth-child(2) { border-right: none; }
          .pt-hero-cred:nth-child(3) { border-top: 1px solid rgba(201,168,76,0.2); }
        }
        @media (max-width: 768px) {
          .pt-inner { padding: 0 24px; }
          .pt-hero { padding: 80px 0 56px; }
          .pt-hero-inner { grid-template-columns: 1fr; gap: 36px; padding-bottom: 40px; }
          .pt-why-section, .pt-types-section, .pt-need-section, .pt-cta-section { padding: 64px 0; }
          .pt-why-grid { grid-template-columns: 1fr; }
          .pt-type-tabs { overflow-x: auto; flex-direction: column; }
        }
        @media (max-width: 480px) {
          .pt-cta-btns { flex-direction: column; align-items: stretch; }
          .pt-btn-gold, .pt-btn-green, .pt-btn-ghost { text-align: center; }
          .pt-hero-creds { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="partners-page">
        <Hero />
        <WhyUs />
        <PartnershipTypes />
        <WhatWeNeed />
        <PartnerCTA />
      </div>
    </>
  );
}