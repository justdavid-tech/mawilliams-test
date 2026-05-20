import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const CLIENTS = [
  {
    sector: "Agribusiness & food systems",
    body: "European and North American businesses entering Nigerian agriculture, food processing, agri-input supply, or export-oriented production. This is our home territory. The credibility is self-evident and verifiable.",
  },
  {
    sector: "Climate & sustainability investment",
    body: "Impact investors, ESG funds, and climate-focused DFIs seeking African exposure. M.A. Williams' regenerative agroforestry model bridges international sustainability frameworks and African agricultural reality with evidence, not ambition.",
  },
  {
    sector: "Logistics & cold chain",
    body: "Foreign businesses addressing post-harvest loss and cold chain infrastructure gaps across West Africa. We understand both the physical infrastructure requirements and the institutional relationships needed to deploy it.",
  },
  {
    sector: "Agri-fintech & rural financial services",
    body: "Banks, insurance companies, and fintech operators building agricultural lending or insurance products for the West African market. M.A. Williams understands both the financial structure and the on-the-ground agricultural reality a rare combination.",
  },
  {
    sector: "Land & property development",
    body: "Foreign investors with land or property mandates in Nigeria. Lambert Willis's experience with the Land Use Act, Certificate of Occupancy processes, and agricultural land valuation is directly applicable.",
  },
  {
    sector: "Education & capacity building",
    body: "International education institutions, development organisations, and foundations seeking to build African agricultural capacity at scale. The M.A. Williams Institute is both a credential and a delivery vehicle.",
  },
];

const DIFFERENTIATORS = [
  {
    name: "Operational authenticity",
    body: "Every recommendation is traceable to an operational reality. We do not advise on structures we have not used, partnerships we have not navigated, or regulatory processes we have not been through.",
  },
  {
    name: "Active institutional network",
    body: "Relationships with Nigerian legal counsel, tax advisors, regulatory specialists, government agencies, institutional banks, and international donors built over three decades not assembled for an engagement.",
  },
  {
    name: "A functioning group as proof",
    body: "We have built and governed a multi-entity group in Nigeria. We know what works, what breaks, and what the textbook gets wrong. Clients are not paying for our research. They are paying for what we have already lived.",
  },
  {
    name: "Skin in the game",
    body: "On Tier 2 and Tier 3 engagements, M.A. Williams reserves the right to co-invest in the client's African venture at the same terms as the founding shareholders. We do not advise on structures we would not invest in ourselves.",
  },
];

const TIERS = [
  {
    num: "Tier 1",
    name: "Market Architecture",
    fee: "£15,000 – £40,000",
    fee_note: "Fixed project fee",
    body: "A confidential strategic document: market mapping, entity structure recommendation, partner landscape, regulatory requirements, and a 12-month entry roadmap. Delivered personally by Yomi Williams. No junior team. No templated research.",
    details: [
      { label: "Market landscape", body: "The size, structure, key players, and where the real opportunity sits versus the apparent opportunity. What looks true from the outside versus what is actually true from the inside." },
      { label: "Entity & structure", body: "What legal form to use, where to incorporate, and why, based on your specific business model, not a generic answer. The right entity in the wrong structure creates the same problems as no structure at all." },
      { label: "Partner landscape", body: "Who the credible local partners are, what their reputations are, and what a sound partnership structure looks like. The most common failure point in African market entry is a partnership that looked good on paper." },
      { label: "Regulatory roadmap", body: "Licensing requirements, sectoral regulations, and the realistic timeline and cost of compliance, not the official timeline, the actual one." },
      { label: "Risk architecture", body: "The specific risks that apply to your entry, not generic Africa risk factors, and how to structure around them. Every market, sector, and business model has a distinct risk profile." },
      { label: "12-month entry plan", body: "A sequenced, actionable roadmap from decision to operational presence. Who does what, in what order, by when." },
    ],
  },
  {
    num: "Tier 2",
    name: "Entry Structuring",
    fee: "£40,000 – £120,000",
    fee_note: "Per engagement",
    body: "Everything in Tier 1, delivered first. Then active involvement: introductions to M.A. Williams' legal and advisory network, facilitation of partner conversations, governance design, attendance at key structuring meetings in Nigeria or London. M.A. Williams reserves co-investment rights on every Tier 2 engagement.",
    details: [
      { label: "Full Tier 1 deliverable", body: "Market Architecture document delivered within the first phase of engagement before active involvement begins." },
      { label: "Network introductions", body: "Direct introductions to Nigerian and West African legal counsel, tax advisors, and regulatory specialists, relationships that took years to build, not a directory search." },
      { label: "Partner facilitation", body: "Yomi Williams in the room or on the call, providing context and credibility that no introduction letter can replicate." },
      { label: "Governance design", body: "The shareholders' agreement structure, reserved matters, board composition, and control mechanisms for the African entity." },
      { label: "Key meetings", body: "Attendance at structuring meetings in Nigeria or London, the moments where judgment matters more than documentation." },
      { label: "Co-investment option", body: "M.A. Williams reserves the right, not the obligation, to take a stake in the client's African venture at the same price and on the same terms as the founding shareholders." },
    ],
  },
  {
    num: "Tier 3",
    name: "Strategic Partnership",
    fee: "£5,000 – £15,000/month",
    fee_note: "+ equity option",
    body: "A formal, ongoing advisory relationship. M.A. Williams holds a named role, strategic advisor, board observer, or non-executive director, on the client's African venture. Monthly retainer plus equity option. Not a retainer for occasional calls.",
    details: [
      { label: "Monthly strategic briefings", body: "Market conditions, regulatory changes, and operational intelligence from the West African agri-food system, delivered monthly." },
      { label: "Active introductions", body: "To buyers, institutional partners, DFIs, and government relationships that the client cannot access cold, on a sustained basis, not a one-time introduction." },
      { label: "Early warning", body: "Political, regulatory, and market risks that a foreign board would not see until they become expensive. That is the value of being in the market, not reading about it." },
      { label: "Sustained network access", body: "An ongoing relationship with the M.A. Williams institutional network, not a one-time introduction, but a live and active connection." },
      { label: "Named advisory role", body: "M.A. Williams holds a named, documented, substantive role: strategic advisor, board observer, or non-executive director." },
      { label: "Equity participation", body: "On select partnerships where co-investment adds strategic value beyond the advisory relationship." },
    ],
  },
];

const PROCESS = [
  {
    step: "01",
    label: "Initial enquiry",
    body: "Submit a brief description of your entry mandate. Include sector, target market, stage of decision, and the specific question you need answered.",
  },
  {
    step: "02",
    label: "Scoping call",
    body: "A 45-minute call with Yomi Williams directly. No business development team. The purpose is to determine whether M.A. Williams is the right partner and which tier is appropriate.",
  },
  {
    step: "03",
    label: "Proposal",
    body: "Within five working days of the scoping call, M.A. Williams provides a written proposal: scope, deliverables, timeline, fee, and where applicable, co-investment terms.",
  },
  {
    step: "04",
    label: "Engagement",
    body: "Engagement begins on receipt of the signed engagement letter and initial fee payment. Tier 1 typically delivers within 6–8 weeks. Tier 2 runs 3–6 months. Tier 3 retainers begin monthly from the first briefing date.",
  },
];

/* ─────────────────────────────────────────
   HOOK
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

function Kicker({ label, light = false }) {
  return (
    <div className="kicker">
      <span className="kicker-pip" aria-hidden="true" style={light ? { background: "var(--gold)" } : {}} />
      <span className="kicker-text" style={light ? { color: "rgba(201,168,76,0.9)" } : {}}>{label}</span>
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
    <section className="gw-hero" aria-labelledby="hero-heading">
      <div className="hero-bg-img" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-dot-grid" aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="hero-inner">
        <div className={`hero-left ${visible ? "anim-in" : ""}`}>
          <Kicker label="Gateway Consulting" light />
          <h1 className="hero-heading" id="hero-heading">
            The Most Expensive Mistake A Foreign Business Makes In Africa Is Getting The Structure Wrong The First Time.
          </h1>
          <div className="hero-badges" style={{ marginTop: 28 }}>
            {["Practitioner Intelligence", "30+ Years In-Market", "Co-Investment Ready", "UK Registered"].map(b => (
              <span key={b} className="hero-badge">{b}</span>
            ))}
          </div>
        </div>

        <div className={`hero-right ${visible ? "anim-in-right" : ""}`}>
          <div style={{ width: 48, height: 3, background: "var(--gold)", marginBottom: 28, opacity: 0.8 }} aria-hidden="true" />
          <p className="hero-body">
            M.A. Williams & Co. Gateway Consulting provides high-level strategic advisory to foreign businesses seeking structured, credible entry into African markets. We work with European, North American, and Asian companies that have capital, board-level intent, and a genuine mandate to operate in Nigeria and West Africa.
          </p>
          <p className="hero-body">
            This is not market research. This is not a desk-based report. It is practitioner intelligence applied to a specific client's entry challenge by someone who has structured a multi-entity group, held land under Nigerian law, contracted with international donors, and operated commercially in the Lagos and Ogun State markets for three decades.
          </p>

          <blockquote className="hero-quote">
            <p className="hero-quote-text">
              "I have watched foreign businesses enter Africa with the right intentions and the wrong structure. Africa is not difficult. The structural mistakes are preventable. This practice exists to prevent them."
            </p>
            <cite className="hero-quote-attr">— Yomi Williams</cite>
          </blockquote>

          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <a href="/contact" className="hero-cta-primary"
              onMouseEnter={e => { e.currentTarget.style.background = "#d9b85c"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "none"; }}>
              Request a Consultation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </a>
            <a href="#tiers" className="hero-cta-ghost"
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}>
              View Service Tiers
            </a>
          </div>
        </div>
      </div>

      <div className="hero-rule-wrap" aria-hidden="true">
        <div className="hero-rule" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 2 — WHO WE WORK WITH
───────────────────────────────────────── */
function WhoWeWorkWith() {
  const [ref, visible] = useInView();

  return (
    <section className="who-section" ref={ref} aria-labelledby="who-heading">
      <div className="section-inner">
        <div className={`who-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Our clients" />
          <h2 className="section-heading" id="who-heading">
            Who We Work With
          </h2>
          <p className="section-sub">
            Foreign businesses that have made a directional decision and need a credible, experienced partner to execute it correctly. Not exploratory researchers. Not investors doing desk due diligence. Businesses with capital, intent, and the wisdom to know what they don't know.
          </p>
        </div>

        <div className="who-grid">
          {CLIENTS.map((c, i) => (
            <div
              key={c.sector}
              className={`who-card ${visible ? "anim-in" : ""}`}
              style={{ animationDelay: `${0.08 * i}s` }}
            >
              <div className="who-card-top">
                <span className="who-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="who-sector">{c.sector}</h3>
              </div>
              <p className="who-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3 — WHAT WE PROVIDE
───────────────────────────────────────── */
function WhatWeProvide() {
  const [ref, visible] = useInView();

  return (
    <section className="provide-section" ref={ref} aria-labelledby="provide-heading">
      <div className="section-inner">
        <div className={`provide-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Our edge" light />
          <h2 className="section-heading provide-heading" id="provide-heading">
            What We Provide That Others Cannot
          </h2>
          <p className="provide-sub">
            Foreign companies routinely pay significant fees for market entry advisory. What they rarely receive is what they actually need: the judgment of someone who has operated in the market, not just studied it.
          </p>
        </div>

        <div className="provide-grid">
          {DIFFERENTIATORS.map((d, i) => (
            <div
              key={d.name}
              className={`provide-item ${visible ? "anim-in" : ""}`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <span className="provide-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div className="provide-content">
                <h3 className="provide-name">{d.name}</h3>
                <p className="provide-body">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4 — THREE-TIER SERVICE
───────────────────────────────────────── */
function ThreeTierService() {
  const [ref, visible] = useInView();
  const [activeTier, setActiveTier] = useState(0);

  return (
    <section className="tiers-section" ref={ref} aria-labelledby="tiers-heading" id="tiers">
      <div className="section-inner">
        <div className={`tiers-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Service architecture" />
          <h2 className="section-heading" id="tiers-heading">
            The Three-Tier Service
          </h2>
          <p className="section-sub">
            Three levels of engagement, each designed for a different stage of commitment and a different scale of ambition.
          </p>
        </div>

        {/* Tier selector cards */}
        <div className="tier-selector">
          {TIERS.map((t, i) => (
            <button
              key={t.num}
              className={`tier-btn ${activeTier === i ? "tier-btn--active" : ""}`}
              onClick={() => setActiveTier(i)}
              aria-pressed={activeTier === i}
            >
              <span className="tier-btn-num">{t.num}</span>
              <span className="tier-btn-name">{t.name}</span>
              <span className="tier-btn-fee">{t.fee}</span>
            </button>
          ))}
        </div>

        {/* Active tier detail */}
        <div className={`tier-panel ${visible ? "anim-in" : ""}`} key={activeTier}>
          <div className="tier-panel-top">
            <div className="tier-panel-meta">
              <span className="tier-panel-num">{TIERS[activeTier].num}</span>
              <h3 className="tier-panel-name">{TIERS[activeTier].name}</h3>
              <p className="tier-panel-summary">{TIERS[activeTier].body}</p>
            </div>
            <div className="tier-panel-fee-block">
              <span className="tier-fee-label">Fee range</span>
              <span className="tier-fee-amount">{TIERS[activeTier].fee}</span>
              <span className="tier-fee-note">{TIERS[activeTier].fee_note}</span>
              {activeTier >= 1 && (
                <span className="tier-coinvest-badge">Co-investment rights reserved</span>
              )}
            </div>
          </div>

          <div className="tier-details-grid">
            {TIERS[activeTier].details.map((d, i) => (
              <div key={i} className="tier-detail-card">
                <h4 className="tier-detail-label">{d.label}</h4>
                <p className="tier-detail-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5 — CO-INVESTMENT PRINCIPLE
───────────────────────────────────────── */
function CoInvestment() {
  const [ref, visible] = useInView();

  return (
    <section className="coinvest-section" ref={ref} aria-labelledby="coinvest-heading">
      <div className="section-inner">
        <div className="coinvest-grid">
          <div className={`coinvest-left ${visible ? "anim-in" : ""}`}>
            <Kicker label="Our commitment" light />
            <h2 className="section-heading ci-heading" id="coinvest-heading">
              The Co-Investment Principle
            </h2>
            <p className="ci-body">
              M.A. Williams Gateway Consulting is not a transactional advisory practice. Where conviction aligns, we invest alongside our clients.
            </p>
            <p className="ci-body">
              On every Tier 2 and Tier 3 engagement, M.A. Williams reserves the right, not the obligation, to co-invest in the client's African venture, at the same price and on the same terms as the founding shareholders. This is not a standard advisory arrangement. It is the basis of a genuine long-term partnership, where M.A. Williams has material interest in the outcome alongside the client.
            </p>
            <p className="ci-body">
              When M.A. Williams exercises a co-investment right, the stake in any African entity is held through Lambert Willis Nigeria, our African family office arm, providing local shareholding, directorship, and ongoing representation on the ground.
            </p>
          </div>

          <div className={`coinvest-right ${visible ? "anim-in-right" : ""}`}>
            <blockquote className="ci-quote">
              <p className="ci-quote-text">
                "I am not interested in advising on structures I would not invest in myself. If the opportunity is real, we can build it together."
              </p>
              <cite className="ci-quote-attr">— Yomi Williams</cite>
            </blockquote>

            <div className="ci-mechanics">
              <p className="ci-mech-label">How it works</p>
              <div className="ci-mech-list">
                {[
                  { point: "Right, not obligation", detail: "M.A. Williams may elect to co-invest. It is never automatic or compulsory." },
                  { point: "Same terms, always", detail: "Co-investment is at the same price and on the same terms as the founding shareholders. No preferred terms." },
                  { point: "Held through Lambert Willis", detail: "The stake is held through our African family office arm, providing local shareholding and directorship on the ground." },
                  { point: "Tier 2 and Tier 3 only", detail: "Co-investment rights are reserved on Entry Structuring and Strategic Partnership engagements, not Market Architecture." },
                ].map((m, i) => (
                  <div key={i} className="ci-mech-item">
                    <span className="ci-mech-pip" aria-hidden="true" />
                    <div>
                      <span className="ci-mech-point">{m.point}</span>
                      <span className="ci-mech-detail">: {m.detail}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 6 — HOW TO ENGAGE
───────────────────────────────────────── */
function HowToEngage() {
  const [ref, visible] = useInView();

  return (
    <section className="engage-section" ref={ref} aria-labelledby="engage-heading">
      <div className="section-inner">
        <div className={`engage-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Getting started" />
          <h2 className="section-heading" id="engage-heading">How to Engage</h2>
          <p className="section-sub">
            Four steps from first contact to active engagement, no intermediaries, no junior team, no long-form proposal before the conversation.
          </p>
        </div>

        <div className="engage-steps">
          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className={`engage-step ${visible ? "anim-in" : ""}`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="engage-step-left">
                <span className="engage-step-num">{p.step}</span>
                {i < PROCESS.length - 1 && <div className="engage-connector" aria-hidden="true" />}
              </div>
              <div className="engage-step-content">
                <h3 className="engage-step-label">{p.label}</h3>
                <p className="engage-step-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`engage-note ${visible ? "anim-in" : ""}`} style={{ animationDelay: "0.44s" }}>
          <span className="engage-note-label" aria-hidden="true">Direct access</span>
          <p className="engage-note-body">
            Yomi Williams responds personally to every consultation request within 3 working days. There is no business development team, no intake form routed to a junior analyst. The scoping call is with the person who will deliver the work.
          </p>
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
    <section className="gw-cta" ref={ref} aria-labelledby="cta-heading">
      <div className="section-inner">
        <div className={`cta-inner ${visible ? "anim-in" : ""}`}>
          <p className="cta-kicker-text">The next step is yours</p>
          <h2 className="cta-heading" id="cta-heading">
            The structure is built.<br />The market is open.
          </h2>
          <p className="cta-sub">
            If you have capital, board-level intent, and a genuine mandate to operate in Africa, we should talk.
          </p>
          <div className="cta-buttons">
            <a href="/gateway/consult" className="cta-btn-primary">Request a Consultation</a>
           <a
  href="https://wa.me/2348185811939"
  target="_blank"
  rel="noopener noreferrer"
  className="cta-btn-ghost"
>
  Contact Yomi Directly
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
export default function GatewayConsulting() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        :root {
          --deep:  #1E3622;
          --green: #2F5233;
          --mid:   #3D6B42;
          --gold:  #C9A84C;
          --pale:  #EBF2EB;
          --ink:   #1A1A18;
          --muted: #7A7A74;
          --cream: #FAF8F4;
          --white: #FFFFFF;
          --fh:    "M PLUS U", system-ui, sans-serif;
          --fb:    "Work Sans", system-ui, sans-serif;
        }

        .gw-page { font-family: var(--fb); background: var(--cream); color: var(--ink); overflow-x: hidden; }

        .anim-in       { animation: fadeUp   0.65s ease both; }
        .anim-in-right { animation: fadeRight 0.65s ease both; }
        @keyframes fadeUp    { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        @keyframes fadeRight { from { opacity: 0; transform: translateX(22px); } to { opacity: 1; transform: none; } }

        .section-inner { max-width: 1160px; margin: 0 auto; padding: 0 48px; }

        .kicker { display: flex; align-items: center; gap: 9px; margin-bottom: 14px; }
        .kicker-pip { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }
        .kicker-text { font-size: 10.5px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: var(--green); }

        .section-heading {
          font-family: var(--fh);
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -0.02em; color: var(--ink);
          margin-bottom: 14px;
        }
        .section-sub { font-size: 15px; line-height: 1.75; color: var(--ink); max-width: 620px; }

        /* ══ HERO ══ */
        .gw-hero {
          min-height: 100vh; position: relative; overflow: hidden;
          display: flex; flex-direction: column; justify-content: center;
          padding: 140px 0 80px; background: var(--deep);
        }
        .hero-bg-img {
          position: absolute; inset: 0;
          background-image: url('/assets/hero-image (2).jpg');
          background-size: cover; background-position: center 35%;
          opacity: 0.15; transform: scale(1.04);
          transition: transform 8s ease; z-index: 0;
        }
        .gw-hero:hover .hero-bg-img { transform: scale(1); }
        .hero-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(135deg, rgba(30,54,34,0.96) 0%, rgba(30,54,34,0.7) 50%, rgba(15,30,19,0.92) 100%),
            radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%);
          z-index: 1;
        }
        .hero-dot-grid {
          position: absolute; bottom: 60px; right: 48px;
          display: grid; grid-template-columns: repeat(8, 8px);
          gap: 8px; opacity: 0.14; pointer-events: none; z-index: 2;
        }
        .hero-dot-grid span { width: 3px; height: 3px; border-radius: 50%; background: var(--gold); display: block; }
        .hero-inner {
          max-width: 1160px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start;
          position: relative; z-index: 2;
        }
        .hero-heading {
          font-family: var(--fh);
          font-size: clamp(28px, 3.2vw, 46px);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -0.025em; color: var(--white);
          margin-bottom: 16px;
        }
        .hero-body { font-size: 14.5px; line-height: 1.78; color: var(--white); margin-bottom: 14px; }
        .hero-badges { display: flex; flex-wrap: wrap; gap: 8px; }
        .hero-badge {
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          padding: 5px 12px; border-radius: 3px;
          border: 1px solid rgba(201,168,76,0.35);
          color: rgba(201,168,76,0.8);
        }
        .hero-quote {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.2);
          border-left: 3px solid var(--gold);
          border-radius: 0 4px 4px 0;
          padding: 18px 20px; margin: 22px 0;
        }
        .hero-quote-text { font-size: 13px; font-style: italic; line-height: 1.7; color: var(--white); margin-bottom: 10px; }
        .hero-quote-attr { font-size: 10.5px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold); font-style: normal; }
        .hero-cta-primary {
          display: inline-flex; align-items: center; gap: 10px;
          font-family: var(--fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.09em; text-transform: uppercase;
          color: var(--deep); background: var(--gold);
          padding: 13px 26px; border-radius: 3px; text-decoration: none;
          transition: background 0.2s, transform 0.15s;
        }
        .hero-cta-ghost {
          display: inline-flex; align-items: center;
          font-family: var(--fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.09em; text-transform: uppercase;
          color: rgba(255,255,255,0.65);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 13px 24px; border-radius: 3px; text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .hero-rule-wrap { max-width: 1160px; margin: 56px auto 0; padding: 0 48px; position: relative; z-index: 1; }
        .hero-rule { height: 1px; background: linear-gradient(90deg, var(--gold), rgba(201,168,76,0.1)); opacity: 0.5; }

        /* ══ WHO WE WORK WITH ══ */
        .who-section { background: var(--cream); padding: 88px 0 80px; }
        .who-header { margin-bottom: 52px; }
        .who-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
        }
        .who-section .kicker-text { color: rgba(201,168,76,0.9); font-size: 15px;}
        .who-card { background: var(--white); padding: 28px 26px; opacity: 0; transition: background 0.25s; }
        .who-card.anim-in { opacity: 1; }
        .who-card:hover { background: var(--pale); }
        .who-card-top { display: flex; align-items: baseline; gap: 10px; margin-bottom: 12px; }
        .who-num { font-family: var(--fh); font-size: 11px; font-weight: 700; color: var(--gold); letter-spacing: 0.08em; flex-shrink: 0; }
        .who-sector { font-family: var(--fh); font-size: 15px; font-weight: 700; color: var(--ink); line-height: 1.3; letter-spacing: -0.01em; }
        .who-body { font-size: 13px; line-height: 1.72; color: var(--ink); }

        /* ══ WHAT WE PROVIDE ══ */
        .provide-section { background: var(--deep); padding: 88px 0 80px; }
        .provide-section .section-heading { color: var(--white); }
        .provide-section .kicker-text { color: rgba(201,168,76,0.9); font-size: 15px;}
        .provide-header { margin-bottom: 52px; }
        .provide-heading { color: var(--white) !important; }
        .provide-sub { font-size: 15px; line-height: 1.75; color: var(--white); max-width: 600px; }
        .provide-grid { display: flex; flex-direction: column; }
        .provide-item {
          display: grid; grid-template-columns: 52px 1fr;
          gap: 0 20px; padding: 28px 0;
          border-bottom: 1px solid rgba(201,168,76,0.1);
          opacity: 0; align-items: start;
        }
        .provide-item:first-of-type { border-top: 1px solid rgba(201,168,76,0.1); }
        .provide-item.anim-in { opacity: 1; }
        .provide-num { font-family: var(--fh); font-size: 17px; font-weight: 700; letter-spacing: 0.09em; color: var(--gold); padding-top: 3px; }
        .provide-name { font-family: var(--fh); font-size: 18px; font-weight: 700; color: var(--white); margin-bottom: 8px; letter-spacing: -0.01em; }
        .provide-body { font-size: 14px; line-height: 1.75; color: var(--white); }

        /* ══ THREE-TIER SERVICE ══ */
        .tiers-section { background: var(--cream); padding: 88px 0 80px; }
        .tiers-header { margin-bottom: 48px; }
        .tier-selector {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
          margin-bottom: 32px;
        }
        .tiers-section .kicker-text { font-size: 15px; color: rgba(47,82,51,0.9); }
        .tier-btn {
          display: flex; flex-direction: column; gap: 5px;
          padding: 24px 22px; background: var(--white);
          border: none; cursor: pointer; text-align: left;
          transition: background 0.2s;
        }
        .tier-btn:hover { background: var(--pale); }
        .tier-btn--active { background: var(--deep) !important; }
        .tier-btn-num { font-family: var(--fh); font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); }
        .tier-btn-name { font-family: var(--fh); font-size: 15px; font-weight: 700; color: var(--ink); line-height: 1.2; }
        .tier-btn--active .tier-btn-name { color: var(--white); }
        .tier-btn-fee { font-size: 11.5px; font-weight: 500; color: var(--ink); margin-top: 2px; }
        .tier-btn--active .tier-btn-fee { color: rgba(201,168,76,0.7); }

        .tier-panel {
          background: var(--white);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
          opacity: 0;
        }
        .tier-panel.anim-in { opacity: 1; }
        .tier-panel-top {
          display: grid; grid-template-columns: 1fr auto;
          gap: 32px; padding: 32px 32px 28px;
          border-bottom: 1px solid rgba(47,82,51,0.1);
          align-items: start;
        }
        .tier-panel-num { font-family: var(--fh); font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 8px; }
        .tier-panel-name { font-family: var(--fh); font-size: 22px; font-weight: 800; color: var(--ink); margin-bottom: 12px; letter-spacing: -0.015em; }
        .tier-panel-summary { font-size: 14px; line-height: 1.75; color: var(--ink); max-width: 520px; }
        .tier-panel-fee-block { display: flex; flex-direction: column; align-items: flex-end; gap: 4px; flex-shrink: 0; }
        .tier-fee-label { font-size: 9.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink); }
        .tier-fee-amount { font-family: var(--fh); font-size: 18px; font-weight: 800; color: var(--deep); text-align: right; }
        .tier-fee-note { font-size: 11px; color: var(--ink); text-align: right; }
        .tier-coinvest-badge {
          font-size: 9px; font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase;
          color: rgba(201,168,76,0.9);
          border: 1px solid rgba(201,168,76,0.35);
          padding: 4px 8px; border-radius: 3px;
          margin-top: 8px; text-align: center;
        }
        .tier-details-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(47,82,51,0.08);
        }
        .tier-detail-card { background: var(--white); padding: 22px 22px; transition: background 0.2s; }
        .tier-detail-card:hover { background: var(--pale); }
        .tier-detail-label { font-family: var(--fh); font-size: 13px; font-weight: 700; color: var(--ink); margin-bottom: 8px; line-height: 1.3; }
        .tier-detail-body { font-size: 12.5px; line-height: 1.7; color: var(--ink); }

        /* ══ CO-INVESTMENT ══ */
        .coinvest-section { background: var(--deep); padding: 88px 0 80px; }
        .coinvest-section .section-heading { color: var(--white); }
        .coinvest-section .kicker-text { color: rgba(201,168,76,0.9); }
        .coinvest-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .coinvest-section .kicker-text { font-size: 15px; color: rgba(47,82,51,0.9); }
        .coinvest-left { opacity: 0; }
        .coinvest-left.anim-in { opacity: 1; }
        .coinvest-right { opacity: 0; }
        .coinvest-right.anim-in-right { opacity: 1; }
        .ci-heading { color: var(--white) !important; }
        .ci-body { font-size: 14.5px; line-height: 1.78; color: var(--white); margin-bottom: 14px; }
        .ci-quote {
          background: rgba(255,255,255,0.04);
          border-radius: 6px; padding: 24px 24px 20px;
          margin-bottom: 28px; position: relative;
        }
        .ci-quote::before {
          content: '"'; position: absolute; top: 12px; left: 18px;
          font-family: var(--fh); font-size: 64px; font-weight: 800;
          color: rgba(201,168,76,0.2); line-height: 1;
        }
        .ci-quote-text { font-size: 14px; font-style: italic; line-height: 1.72; color: var(--white); margin-bottom: 12px; padding-top: 8px; position: relative; z-index: 1; }
        .ci-quote-attr { font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; color: var(--gold); font-style: normal; }
        .ci-mech-label { font-size: 10px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 16px; }
        .ci-mech-list { display: flex; flex-direction: column; gap: 0; border: 1px solid rgba(201,168,76,0.18); border-radius: 6px; overflow: hidden; }
        .ci-mech-item { display: flex; align-items: flex-start; gap: 14px; padding: 14px 18px; border-bottom: 1px solid rgba(201,168,76,0.1); background: rgba(255,255,255,0.03); transition: background 0.2s; }
        .ci-mech-item:last-child { border-bottom: none; }
        .ci-mech-item:hover { background: rgba(201,168,76,0.06); }
        .ci-mech-pip { width: 5px; height: 5px; border-radius: 50%; background: var(--gold); flex-shrink: 0; margin-top: 6px; opacity: 0.7; }
        .ci-mech-point { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.8); }
        .ci-mech-detail { font-size: 13px; color: var(--white); }

        /* ══ HOW TO ENGAGE ══ */
        .engage-section { background: var(--pale); padding: 88px 0 80px; }
        .engage-header { margin-bottom: 52px; }
        .engage-steps { display: flex; flex-direction: column; margin-bottom: 32px; }
        .engage-step {
          display: grid; grid-template-columns: 60px 1fr;
          gap: 0 24px; opacity: 0;
        }
        .engage-section .kicker-text {
        font-size: 15px;  
        }
        .engage-step.anim-in { opacity: 1; }
        .engage-step-left { display: flex; flex-direction: column; align-items: center; }
        .engage-step-num {
          width: 40px; height: 40px;
          border-radius: 50%;
          background: var(--deep);
          color: var(--gold);
          font-family: var(--fh); font-size: 12px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; letter-spacing: 0.05em;
        }
        .engage-connector {
          width: 1px; flex: 1;
          background: rgba(47,82,51,0.2);
          margin: 6px 0;
          min-height: 32px;
        }
        .engage-step-content { padding: 8px 0 32px; }
        .engage-step-label { font-family: var(--fh); font-size: 18px; font-weight: 700; color: var(--ink); margin-bottom: 8px; letter-spacing: -0.01em; }
        .engage-step-body { font-size: 14px; line-height: 1.75; color: var(--ink); }
        .engage-note {
          background: rgba(47,82,51,0.06);
          border: 1px solid rgba(47,82,51,0.14);
          border-left: 3px solid var(--gold);
          border-radius: 0 4px 4px 0;
          padding: 20px 24px; opacity: 0;
          display: flex; align-items: flex-start; gap: 16px;
        }
        .engage-note.anim-in { opacity: 1; }
        .engage-note-label { font-size: 9.5px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--green); flex-shrink: 0; padding-top: 3px; white-space: nowrap; }
        .engage-note-body { font-size: 13px; line-height: 1.72; color: var(--ink); }

        /* ══ CLOSING CTA ══ */
        .gw-cta { background: #0F1E13; padding: 88px 0; }
        .cta-inner { text-align: center; opacity: 0; max-width: 700px; margin: 0 auto; }
        .cta-inner.anim-in { opacity: 1; }
        .cta-kicker-text { font-size: 10.5px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; display: block; }
        .cta-heading { font-family: var(--fh); font-size: clamp(28px, 3.5vw, 44px); font-weight: 800; line-height: 1.12; letter-spacing: -0.022em; color: var(--white); margin-bottom: 16px; }
        .cta-sub { font-size: 15px; line-height: 1.7; color: rgba(255,255,255,0.45); margin-bottom: 36px; }
        .cta-buttons { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
        .cta-btn-primary { font-family: var(--fb); font-size: 12px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: #0F1E13; background: var(--gold); border: none; padding: 14px 26px; border-radius: 3px; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s; display: inline-block; }
        .cta-btn-primary:hover { background: #d9b85c; transform: translateY(-1px); }
        .cta-btn-secondary { font-family: var(--fb); font-size: 12px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--white); background: var(--green); border: none; padding: 14px 26px; border-radius: 3px; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s; display: inline-block; }
        .cta-btn-secondary:hover { background: var(--mid); transform: translateY(-1px); }
        .cta-btn-ghost { font-family: var(--fb); font-size: 12px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--white); background: transparent; border: 1px solid rgba(255,255,255,0.2); padding: 13px 24px; border-radius: 3px; cursor: pointer; text-decoration: none; transition: border-color 0.2s, color 0.2s; display: inline-block; }
        .cta-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--white); }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .who-grid { grid-template-columns: repeat(2, 1fr); }
          .tier-details-grid { grid-template-columns: repeat(2, 1fr); }
          .coinvest-grid { grid-template-columns: 1fr; gap: 44px; }
          .tier-panel-top { grid-template-columns: 1fr; }
          .tier-panel-fee-block { align-items: flex-start; }
        }
        @media (max-width: 768px) {
          .section-inner { padding: 0 24px; }
          .hero-inner { grid-template-columns: 1fr; gap: 36px; padding: 0 24px; }
          .hero-rule-wrap { padding: 0 24px; }
          .gw-hero { padding: 80px 0 56px; }
          .who-grid { grid-template-columns: 1fr; }
          .tier-selector { grid-template-columns: 1fr; }
          .tier-details-grid { grid-template-columns: 1fr; }
          .engage-step { grid-template-columns: 48px 1fr; }
          .engage-note { flex-direction: column; gap: 8px; }
          .who-section, .provide-section, .tiers-section,
          .coinvest-section, .engage-section, .gw-cta { padding: 64px 0; }
        }
        @media (max-width: 480px) {
          .cta-buttons { flex-direction: column; align-items: stretch; }
          .cta-btn-primary, .cta-btn-secondary, .cta-btn-ghost { text-align: center; }
        }
      `}</style>

      <div className="gw-page">
        <Hero />
        <WhoWeWorkWith />
        <WhatWeProvide />
        <ThreeTierService />
        <CoInvestment />
        <HowToEngage />
        <ClosingCTA />
      </div>
    </>
  );
}