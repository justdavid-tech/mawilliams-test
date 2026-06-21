import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────
   DATA — PARTNERS
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
  { num: "30+", label: "Years field experience" },
  { num: "200ha", label: "Live production estate" },
  { num: "1,000+", label: "Practitioners trained" },
  { num: "5+", label: "Donor organisations worked with" },
];

/* ─────────────────────────────────────────
   DATA — GATEWAY (now: International Partners)
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
    body: "Relationships with Nigerian legal counsel, tax advisors, regulatory specialists, government agencies, institutional banks, and international donors built over a decade not assembled for an engagement.",
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
   SHARED HOOK + KICKER
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
    <div className="ip-kicker">
      <span className="ip-pip" style={{ background: "#C9A84C" }} aria-hidden="true" />
      <span className="ip-kicker-text" style={{ color: light ? "rgba(201,168,76,0.9)" : "#2F5233" }}>
        {label}
      </span>
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION 1 — HERO (from Partners)
───────────────────────────────────────── */
function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="ip-hero" aria-labelledby="ip-hero-h">
      <div className="ip-hero-geo-1" aria-hidden="true" />
      <div className="ip-hero-geo-2" aria-hidden="true" />
      <div className="ip-dot-grid" aria-hidden="true">
        {Array.from({ length: 56 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="ip-inner ip-hero-inner">
        <div className={`ip-hero-left ${vis ? "ip-vis-up" : ""}`}>
          <Kicker label="International Partners" light />
          <h1 className="ip-hero-h1" id="ip-hero-h">
            The Bridge between International Capital
            and <span className="ip-gold">African Agricultural</span><br />
            Reality.
          </h1>
        </div>

        <div className={`ip-hero-right ${vis ? "ip-vis-right" : ""}`}>
          <p className="ip-hero-body">
            M.A. Williams & Co. Ltd is a UK-registered entity with a documented operational record spanning over a decade of frontline agricultural development across Nigeria and West Africa.
          </p>
          <p className="ip-hero-body">
            We are structured, governed, and positioned to serve as the primary counterparty for international donors, development finance institutions, and global programme partners seeking credible, accountable implementation capacity in the African agri-food system.
          </p>

          <div className="ip-hero-creds">
            {CREDENTIALS.map(c => (
              <div key={c.label} className="ip-hero-cred">
                <span className="ip-hero-cred-num">{c.num}</span>
                <span className="ip-hero-cred-label">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="ip-inner" aria-hidden="true">
        <div className="ip-hero-rule" />
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
    <section className="ip-why-section" ref={ref} aria-labelledby="ip-why-h">
      <div className="ip-inner">
        <div className={`ip-section-header ${vis ? "ip-vis-up" : ""}`}>
          <Kicker label="Our proposition" />
          <h2 className="ip-section-h" id="ip-why-h">
            Why International Partners Work With Us
          </h2>
          <p className="ip-section-sub">
            Five reasons. All of them verifiable.
          </p>
        </div>

        <div className="ip-why-grid">
          {WHY_US.map((w, i) => (
            <div
              key={w.num}
              className={`ip-why-card ${vis ? "ip-vis-up" : ""}`}
              style={{ animationDelay: `${0.08 * i}s` }}
            >
              <div className="ip-why-card-head">
                <span className="ip-why-num">{w.num}</span>
                <div className="ip-why-rule" aria-hidden="true" />
              </div>
              <h3 className="ip-why-title">{w.title}</h3>
              <p className="ip-why-body">{w.body}</p>
            </div>
          ))}

          <div
            className={`ip-why-card ip-why-quote-card ${vis ? "ip-vis-up" : ""}`}
            style={{ animationDelay: "0.42s" }}
          >
            <blockquote className="ip-why-quote">
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
    <section className="ip-types-section" ref={ref} aria-labelledby="ip-types-h">
      <div className="ip-inner">
        <div className={`ip-section-header ${vis ? "ip-vis-up" : ""}`}>
          <Kicker label="How we work together" light />
          <h2 className="ip-section-h ip-section-h--light" id="ip-types-h">
            Partnership Types
          </h2>
          <p className="ip-section-sub ip-section-sub--light">
            Five distinct partnership models each with clear deliverables, documented outcomes, and named partner organisations who have worked in each category.
          </p>
        </div>

        <div className={`ip-type-tabs ${vis ? "ip-vis-up" : ""}`} style={{ animationDelay: "0.1s" }} role="tablist">
          {PARTNERSHIP_TYPES.map((t, i) => (
            <button
              key={t.type}
              role="tab"
              aria-selected={active === i}
              className={`ip-type-tab ${active === i ? "ip-type-tab--active" : ""}`}
              onClick={() => setActive(i)}
            >
              <span className="ip-type-tab-num" aria-hidden="true">0{i + 1}</span>
              {t.type}
            </button>
          ))}
        </div>

        {PARTNERSHIP_TYPES.map((t, i) => (
          <div
            key={t.type}
            role="tabpanel"
            hidden={active !== i}
            className={`ip-type-panel ${active === i ? "ip-type-panel--active" : ""} ${vis ? "ip-vis-up" : ""}`}
            style={{ animationDelay: "0.18s" }}
          >
            <div className="ip-type-panel-grid">
              <div className="ip-type-panel-left">
                <span className="ip-type-panel-num" aria-hidden="true">0{i + 1}</span>
                <h3 className="ip-type-panel-title">{t.type}</h3>
                <p className="ip-type-panel-desc">{t.desc}</p>
              </div>

              <div className="ip-type-panel-right">
                <div className="ip-type-block">
                  <p className="ip-type-block-label">What we deliver</p>
                  <p className="ip-type-block-body">{t.deliverables}</p>
                </div>
                <div className="ip-type-block">
                  <p className="ip-type-block-label">Typical partners</p>
                  <div className="ip-type-partners">
                    {t.partners.map(p => (
                      <span key={p} className="ip-type-partner-tag">{p}</span>
                    ))}
                  </div>
                </div>
                <Link to="/contact?enquiry=partnership" className="ip-type-cta">
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
   SECTION 4 — WHO WE WORK WITH (from Gateway)
───────────────────────────────────────── */
function WhoWeWorkWith() {
  const [ref, vis] = useInView();

  return (
    <section className="ip-who-section" ref={ref} aria-labelledby="ip-who-h">
      <div className="ip-inner">
        <div className={`ip-section-header ${vis ? "ip-vis-up" : ""}`}>
          <Kicker label="Our clients" />
          <h2 className="ip-section-h" id="ip-who-h">Who We Work With</h2>
          <p className="ip-section-sub">
            Foreign businesses that have made a directional decision and need a credible, experienced partner to execute it correctly. Not exploratory researchers. Not investors doing desk due diligence. Businesses with capital, intent, and the wisdom to know what they don't know.
          </p>
        </div>

        <div className="ip-who-grid">
          {CLIENTS.map((c, i) => (
            <div
              key={c.sector}
              className={`ip-who-card ${vis ? "ip-vis-up" : ""}`}
              style={{ animationDelay: `${0.08 * i}s` }}
            >
              <div className="ip-who-card-top">
                <span className="ip-who-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="ip-who-sector">{c.sector}</h3>
              </div>
              <p className="ip-who-body">{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5 — WHAT WE PROVIDE (from Gateway)
───────────────────────────────────────── */
function WhatWeProvide() {
  const [ref, vis] = useInView();

  return (
    <section className="ip-provide-section" ref={ref} aria-labelledby="ip-provide-h">
      <div className="ip-inner">
        <div className={`ip-section-header ${vis ? "ip-vis-up" : ""}`}>
          <Kicker label="Our edge" light />
          <h2 className="ip-section-h ip-section-h--light" id="ip-provide-h">
            What We Provide That Others Cannot
          </h2>
          <p className="ip-section-sub ip-section-sub--light">
            Foreign companies routinely pay significant fees for market entry advisory. What they rarely receive is what they actually need: the judgment of someone who has operated in the market, not just studied it.
          </p>
        </div>

        <div className="ip-provide-grid">
          {DIFFERENTIATORS.map((d, i) => (
            <div
              key={d.name}
              className={`ip-provide-item ${vis ? "ip-vis-up" : ""}`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <span className="ip-provide-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div className="ip-provide-content">
                <h3 className="ip-provide-name">{d.name}</h3>
                <p className="ip-provide-body">{d.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 6 — THREE-TIER SERVICE (from Gateway)
───────────────────────────────────────── */
function ThreeTierService() {
  const [ref, vis] = useInView();
  const [activeTier, setActiveTier] = useState(0);

  return (
    <section className="ip-tiers-section" ref={ref} aria-labelledby="ip-tiers-h" id="tiers">
      <div className="ip-inner">
        <div className={`ip-section-header ${vis ? "ip-vis-up" : ""}`}>
          <Kicker label="Service architecture" />
          <h2 className="ip-section-h" id="ip-tiers-h">The Three-Tier Service</h2>
          <p className="ip-section-sub">
            Three levels of engagement, each designed for a different stage of commitment and a different scale of ambition.
          </p>
        </div>

        <div className="ip-tier-selector">
          {TIERS.map((t, i) => (
            <button
              key={t.num}
              className={`ip-tier-btn ${activeTier === i ? "ip-tier-btn--active" : ""}`}
              onClick={() => setActiveTier(i)}
              aria-pressed={activeTier === i}
            >
              <span className="ip-tier-btn-num">{t.num}</span>
              <span className="ip-tier-btn-name">{t.name}</span>
            </button>
          ))}
        </div>

        <div className={`ip-tier-panel ${vis ? "ip-vis-up" : ""}`} key={activeTier}>
          <div className="ip-tier-panel-top">
            <div className="ip-tier-panel-meta">
              <span className="ip-tier-panel-num">{TIERS[activeTier].num}</span>
              <h3 className="ip-tier-panel-name">{TIERS[activeTier].name}</h3>
              <p className="ip-tier-panel-summary">{TIERS[activeTier].body}</p>
            </div>
          </div>

          <div className="ip-tier-details-grid">
            {TIERS[activeTier].details.map((d, i) => (
              <div key={i} className="ip-tier-detail-card">
                <h4 className="ip-tier-detail-label">{d.label}</h4>
                <p className="ip-tier-detail-body">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 7 — WHAT WE NEED FROM PARTNERS
───────────────────────────────────────── */
function WhatWeNeed() {
  const [ref, vis] = useInView();

  return (
    <section className="ip-need-section" ref={ref} aria-labelledby="ip-need-h">
      <div className="ip-inner">
        <div className="ip-need-grid">
          <div className={`ip-need-left ${vis ? "ip-vis-up" : ""}`}>
            <Kicker label="Conviction alignment" />
            <h2 className="ip-section-h" id="ip-need-h">What We Need From Partners</h2>
            <p className="ip-need-body">
              We are not seeking generic funding. We are seeking partners with aligned conviction: that African agricultural transformation requires practitioner-led systems, precision technology, regenerative ecological logic, and institutional infrastructure that works beyond the project cycle.
            </p>
            <p className="ip-need-body">If that describes your mandate, we want to talk.</p>

            <div className="ip-need-conviction-list">
              {[
                "Practitioner-led systems, not theoretical frameworks",
                "Precision technology deployed in real field conditions",
                "Regenerative ecological logic, not extractive models",
                "Infrastructure designed to outlast the project cycle",
              ].map((item, i) => (
                <div key={i} className="ip-need-conviction-item">
                  <span className="ip-need-conviction-pip" aria-hidden="true" />
                  <span className="ip-need-conviction-text">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`ip-need-right ${vis ? "ip-vis-right" : ""}`}>
            <div className="ip-qualif-card">
              <p className="ip-qualif-label">UK registration — what it means for you</p>
              <p className="ip-qualif-body">
                M.A. Williams & Co. Ltd is registered in England and Wales. All programme contracts are governed under English law. We maintain transparent governance records, a clean audit trail, and full compliance with UK Companies House requirements.
              </p>
              <p className="ip-qualif-body" style={{ marginTop: 10 }}>
                This means your legal, compliance, and procurement teams face a familiar counterparty not an unverified offshore entity. USAID, GIZ, FCDO, and World Bank frameworks all recognise UK-registered entities as qualifying counterparties for prime contractor arrangements.
              </p>
              <div className="ip-qualif-badges">
                {["UK Registered", "English Law", "Clean Audit Trail", "Companies House Compliant"].map(b => (
                  <span key={b} className="ip-qualif-badge">{b}</span>
                ))}
              </div>
            </div>

            <div className="ip-accountability-note">
              <span className="ip-accountability-label">Field delivery infrastructure</span>
              <p className="ip-accountability-body">
                Programmes are executed through Gartner Callaway's field services team in southwest Nigeria — CropX sensors, irrigation infrastructure, trained agronomists, mobile equipment. We design and we deliver. The Institute handles M&E training components and certification documentation for donor reporting.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 8 — CO-INVESTMENT PRINCIPLE (from Gateway)
───────────────────────────────────────── */
function CoInvestment() {
  const [ref, vis] = useInView();

  return (
    <section className="ip-coinvest-section" ref={ref} aria-labelledby="ip-coinvest-h">
      <div className="ip-inner">
        <div className="ip-coinvest-grid">
          <div className={`ip-coinvest-left ${vis ? "ip-vis-up" : ""}`}>
            <Kicker label="Our commitment" light />
            <h2 className="ip-section-h ip-section-h--light" id="ip-coinvest-h">
              The Co-Investment Principle
            </h2>
            <p className="ip-ci-body">
              M.A. Williams International Partners is not a transactional advisory practice. Where conviction aligns, we invest alongside our clients.
            </p>
            <p className="ip-ci-body">
              On every Tier 2 and Tier 3 engagement, M.A. Williams reserves the right, not the obligation, to co-invest in the client's African venture, at the same price and on the same terms as the founding shareholders. This is not a standard advisory arrangement. It is the basis of a genuine long-term partnership, where M.A. Williams has material interest in the outcome alongside the client.
            </p>
            <p className="ip-ci-body">
              When M.A. Williams exercises a co-investment right, the stake in any African entity is held through Lambert Willis, providing local shareholding, directorship, and ongoing representation on the ground.
            </p>
          </div>

          <div className={`ip-coinvest-right ${vis ? "ip-vis-right" : ""}`}>
            <blockquote className="ip-ci-quote">
              <p className="ip-ci-quote-text">
                "I am not interested in advising on structures I would not invest in myself. If the opportunity is real, we can build it together."
              </p>
              <cite className="ip-ci-quote-attr">— Yomi Williams</cite>
            </blockquote>

            <div className="ip-ci-mechanics">
              <p className="ip-ci-mech-label">How it works</p>
              <div className="ip-ci-mech-list">
                {[
                  { point: "Right, not obligation", detail: "M.A. Williams may elect to co-invest. It is never automatic or compulsory." },
                  { point: "Same terms, always", detail: "Co-investment is at the same price and on the same terms as the founding shareholders. No preferred terms." },
                  { point: "Held through Lambert Willis", detail: "The stake is held through Lambert Willis, providing local shareholding and directorship on the ground." },
                  { point: "Tier 2 and Tier 3 only", detail: "Co-investment rights are reserved on Entry Structuring and Strategic Partnership engagements, not Market Architecture." },
                ].map((m, i) => (
                  <div key={i} className="ip-ci-mech-item">
                    <span className="ip-ci-mech-pip" aria-hidden="true" />
                    <div>
                      <span className="ip-ci-mech-point">{m.point}</span>
                      <span className="ip-ci-mech-detail">: {m.detail}</span>
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
   SECTION 9 — HOW TO ENGAGE (from Gateway)
───────────────────────────────────────── */
function HowToEngage() {
  const [ref, vis] = useInView();

  return (
    <section className="ip-engage-section" ref={ref} aria-labelledby="ip-engage-h">
      <div className="ip-inner">
        <div className={`ip-section-header ${vis ? "ip-vis-up" : ""}`}>
          <Kicker label="Getting started" />
          <h2 className="ip-section-h" id="ip-engage-h">How to Engage</h2>
          <p className="ip-section-sub">
            Four steps from first contact to active engagement — no intermediaries, no junior team, no long-form proposal before the conversation.
          </p>
        </div>

        <div className="ip-engage-steps">
          {PROCESS.map((p, i) => (
            <div
              key={p.step}
              className={`ip-engage-step ${vis ? "ip-vis-up" : ""}`}
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="ip-engage-step-left">
                <span className="ip-engage-step-num">{p.step}</span>
                {i < PROCESS.length - 1 && <div className="ip-engage-connector" aria-hidden="true" />}
              </div>
              <div className="ip-engage-step-content">
                <h3 className="ip-engage-step-label">{p.label}</h3>
                <p className="ip-engage-step-body">{p.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`ip-engage-note ${vis ? "ip-vis-up" : ""}`} style={{ animationDelay: "0.44s" }}>
          <span className="ip-engage-note-label" aria-hidden="true">Direct access</span>
          <p className="ip-engage-note-body">
            Yomi Williams responds personally to every consultation request within 3 working days. There is no business development team, no intake form routed to a junior analyst. The scoping call is with the person who will deliver the work.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 10 — CTA
───────────────────────────────────────── */
function PartnerCTA() {
  const [ref, vis] = useInView();

  return (
    <section className="ip-cta-section" ref={ref} aria-labelledby="ip-cta-h">
      <div className="ip-inner">
        <div className={`ip-cta-inner ${vis ? "ip-vis-up" : ""}`}>
          <Kicker label="Take the next step" light />
          <h2 className="ip-cta-h" id="ip-cta-h">
            If the mandate aligns,<br />
            <span className="ip-gold">the conversation is straightforward.</span>
          </h2>
          <p className="ip-cta-sub">
            Submit a partnership enquiry, request our capability statement, or schedule a call with Yomi Williams directly. We respond to all partner enquiries within five working days.
          </p>
          <div className="ip-cta-btns">
            <a href="/contact" className="ip-btn-gold">Submit a Partnership Enquiry</a>
            <a
              href="https://wa.me/2348185811939"
              target="_blank"
              rel="noopener noreferrer"
              className="ip-btn-ghost"
            >
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
export default function InternationalPartnersPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        :root {
          --ip-deep:  #1E3622;
          --ip-green: #2F5233;
          --ip-mid:   #3D6B42;
          --ip-gold:  #C9A84C;
          --ip-pale:  #EBF2EB;
          --ip-ink:   #1A1A18;
          --ip-muted: #7A7A74;
          --ip-cream: #FAF8F4;
          --ip-white: #FFFFFF;
          --ip-fh:    "M PLUS U", system-ui, sans-serif;
          --ip-fb:    "Work Sans", system-ui, sans-serif;
        }

        .ip-page { font-family: var(--ip-fb); background: var(--ip-cream); color: var(--ip-ink); overflow-x: hidden; }

        /* ── Animations ── */
        .ip-vis-up    { animation: ip-fadeUp   0.65s ease both; }
        .ip-vis-right { animation: ip-fadeRight 0.65s ease both; }
        @keyframes ip-fadeUp    { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:none; } }
        @keyframes ip-fadeRight { from { opacity:0; transform:translateX(22px); } to { opacity:1; transform:none; } }

        /* ── Shared ── */
        .ip-inner { max-width: 1160px; margin: 0 auto; padding: 0 48px; }
        .ip-kicker { display: flex; align-items: center; gap: 9px; margin-bottom: 14px; }
        .ip-pip { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; display: block; }
        .ip-kicker-text { font-size: 10.5px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; }
        .ip-gold { color: var(--ip-gold); }

        .ip-section-h {
          font-family: var(--ip-fh); font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.02em;
          color: var(--ip-ink); margin-bottom: 12px;
        }
        .ip-section-h--light { color: var(--ip-white); }
        .ip-section-sub { font-size: 15px; line-height: 1.75; color: var(--ip-ink); max-width: 560px; }
        .ip-section-sub--light { color: var(--ip-white); }
        .ip-section-header { margin-bottom: 48px; }

        /* ══════════════════════
           HERO
        ══════════════════════ */
        .ip-hero {
          background: var(--ip-deep); padding: 120px 0 72px;
          position: relative; overflow: hidden;
        }
        .ip-hero-geo-1 {
          position: absolute; top: -100px; right: -100px;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(61,107,66,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .ip-hero-geo-2 {
          position: absolute; bottom: -60px; left: -60px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .ip-dot-grid {
          position: absolute; top: 40px; right: 40px;
          display: grid; grid-template-columns: repeat(8, 8px);
          gap: 8px; opacity: 0.14; pointer-events: none;
        }
        .ip-dot-grid span { width: 3px; height: 3px; border-radius: 50%; background: var(--ip-gold); display: block; }

        .ip-hero-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
          position: relative; z-index: 1; padding-bottom: 56px;
        }

        .ip-hero-left { opacity: 0; }
        .ip-hero-left.ip-vis-up { opacity: 1; }
        .ip-hero-h1 {
          font-family: var(--ip-fh); font-size: clamp(32px, 4vw, 52px);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.025em;
          color: var(--ip-white); margin-bottom: 0;
        }

        .ip-hero-right { opacity: 0; }
        .ip-hero-right.ip-vis-right { opacity: 1; }
        .ip-hero-body {
          font-size: 14.5px; line-height: 1.78;
          color: var(--ip-white); margin-bottom: 14px;
        }

        .ip-hero-creds {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 0; margin-top: 28px;
          border: 1px solid rgba(201,168,76,0.2); border-radius: 4px; overflow: hidden;
        }
        .ip-hero-cred {
          padding: 18px 14px; text-align: center;
          border-right: 1px solid rgba(201,168,76,0.2);
          display: flex; flex-direction: column; gap: 4px;
        }
        .ip-hero-cred:last-child { border-right: none; }
        .ip-hero-cred-num {
          font-family: var(--ip-fh); font-size: 22px; font-weight: 800;
          color: var(--ip-gold); line-height: 1;
        }
        .ip-hero-cred-label {
          font-size: 10px; font-weight: 500; letter-spacing: 0.07em;
          text-transform: uppercase; color: var(--ip-white); line-height: 1.4;
        }
        .ip-hero-rule {
          height: 1px; margin-top: 0;
          background: linear-gradient(90deg, var(--ip-gold), rgba(201,168,76,0.08));
          opacity: 0.45;
        }

        /* ══════════════════════
           WHY US
        ══════════════════════ */
        .ip-why-section { background: var(--ip-cream); padding: 88px 0 80px; }

        .ip-why-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
        }
        .ip-why-card {
          background: var(--ip-white); padding: 30px 26px;
          opacity: 0; display: flex; flex-direction: column; gap: 10px;
          transition: background 0.25s;
        }
        .ip-why-card.ip-vis-up { opacity: 1; }
        .ip-why-card:hover { background: var(--ip-pale); }
        .ip-why-card-head { display: flex; align-items: center; gap: 12px; }
        .ip-why-num {
          font-family: var(--ip-fh); font-size: 11px; font-weight: 700;
          letter-spacing: 0.09em; color: var(--ip-gold); flex-shrink: 0;
        }
        .ip-why-rule { flex: 1; height: 1px; background: rgba(47,82,51,0.12); }
        .ip-why-title {
          font-family: var(--ip-fh); font-size: 16px; font-weight: 700;
          line-height: 1.25; letter-spacing: -0.01em; color: var(--ip-ink);
        }
        .ip-why-body { font-size: 13px; line-height: 1.72; color: var(--ip-ink); }

        .ip-why-quote-card { grid-column: span 1; background: var(--ip-deep); }
        .ip-why-quote-card:hover { background: #243d2a; }
        .ip-why-quote { display: flex; flex-direction: column; gap: 14px; height: 100%; justify-content: center; }
        .ip-why-quote p { font-size: 14px; font-style: italic; line-height: 1.72; color: var(--ip-white); }
        .ip-why-quote cite {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--ip-gold); font-style: normal;
        }

        /* ══════════════════════
           PARTNERSHIP TYPES
        ══════════════════════ */
        .ip-types-section { background: var(--ip-deep); padding: 88px 0 80px; }

        .ip-type-tabs {
          display: flex; flex-direction: column; gap: 1px;
          opacity: 0; margin-bottom: 24px;
        }
        .ip-type-tabs.ip-vis-up { opacity: 1; }

        .ip-type-tab {
          font-family: var(--ip-fb); font-size: 12.5px; font-weight: 500;
          letter-spacing: 0.02em;
          padding: 14px 20px; border-radius: 3px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: var(--ip-white);
          cursor: pointer; text-align: left;
          display: flex; align-items: center; gap: 14px;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .ip-type-tab:hover { background: rgba(255,255,255,0.06); border-color: rgba(201,168,76,0.2); }
        .ip-type-tab--active { background: rgba(201,168,76,0.1); border-color: rgba(201,168,76,0.35); color: var(--ip-gold); }
        .ip-type-tab-num {
          font-family: var(--ip-fh); font-size: 10px; font-weight: 700;
          color: rgba(201,168,76,0.5); letter-spacing: 0.08em; flex-shrink: 0;
        }
        .ip-type-tab--active .ip-type-tab-num { color: var(--ip-gold); }

        .ip-type-panel { border: 1px solid rgba(201,168,76,0.2); border-radius: 5px; overflow: hidden; opacity: 0; }
        .ip-type-panel--active.ip-vis-up { opacity: 1; animation: ip-fadeUp 0.45s ease both; }
        .ip-type-panel-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; }
        .ip-type-panel-left {
          background: rgba(255,255,255,0.04); padding: 36px 32px;
          border-right: 1px solid rgba(201,168,76,0.18);
        }
        .ip-type-panel-num {
          display: block; font-family: var(--ip-fh); font-size: 11px; font-weight: 700;
          color: var(--ip-gold); letter-spacing: 0.09em; margin-bottom: 12px;
        }
        .ip-type-panel-title {
          font-family: var(--ip-fh); font-size: 20px; font-weight: 800;
          color: var(--ip-white); line-height: 1.2; margin-bottom: 16px; letter-spacing: -0.015em;
        }
        .ip-type-panel-desc { font-size: 14px; line-height: 1.75; color: var(--ip-white); }
        .ip-type-panel-right { padding: 36px 32px; display: flex; flex-direction: column; gap: 24px; }
        .ip-type-block-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ip-gold); margin-bottom: 10px;
        }
        .ip-type-block-body { font-size: 13.5px; line-height: 1.72; color: rgba(255,255,255,0.55); }
        .ip-type-partners { display: flex; flex-wrap: wrap; gap: 6px; }
        .ip-type-partner-tag {
          font-size: 11px; font-weight: 600; letter-spacing: 0.04em;
          padding: 5px 12px; border-radius: 3px;
          border: 1px solid rgba(201,168,76,0.28); color: rgba(201,168,76,0.8);
        }
        .ip-type-cta {
          display: inline-flex; align-items: center; gap: 6px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--ip-gold);
          text-decoration: none; border-bottom: 1px solid rgba(201,168,76,0.35);
          padding-bottom: 2px; width: fit-content; margin-top: auto;
          transition: border-color 0.2s, opacity 0.2s;
        }
        .ip-type-cta:hover { opacity: 0.8; }

        /* ══════════════════════
           WHO WE WORK WITH
        ══════════════════════ */
        .ip-who-section { background: var(--ip-cream); padding: 88px 0 80px; }

        .ip-who-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
        }
        .ip-who-card {
          background: var(--ip-white); padding: 28px 26px;
          opacity: 0; transition: background 0.25s;
        }
        .ip-who-card.ip-vis-up { opacity: 1; }
        .ip-who-card:hover { background: var(--ip-pale); }
        .ip-who-card-top { display: flex; align-items: baseline; gap: 10px; margin-bottom: 12px; }
        .ip-who-num {
          font-family: var(--ip-fh); font-size: 11px; font-weight: 700;
          color: var(--ip-gold); letter-spacing: 0.08em; flex-shrink: 0;
        }
        .ip-who-sector {
          font-family: var(--ip-fh); font-size: 15px; font-weight: 700;
          color: var(--ip-ink); line-height: 1.3; letter-spacing: -0.01em;
        }
        .ip-who-body { font-size: 13px; line-height: 1.72; color: var(--ip-ink); }

        /* ══════════════════════
           WHAT WE PROVIDE
        ══════════════════════ */
        .ip-provide-section { background: var(--ip-deep); padding: 88px 0 80px; }
        .ip-provide-grid { display: flex; flex-direction: column; }
        .ip-provide-item {
          display: grid; grid-template-columns: 52px 1fr;
          gap: 0 20px; padding: 28px 0;
          border-bottom: 1px solid rgba(201,168,76,0.1);
          opacity: 0; align-items: start;
        }
        .ip-provide-item:first-of-type { border-top: 1px solid rgba(201,168,76,0.1); }
        .ip-provide-item.ip-vis-up { opacity: 1; }
        .ip-provide-num {
          font-family: var(--ip-fh); font-size: 17px; font-weight: 700;
          letter-spacing: 0.09em; color: var(--ip-gold); padding-top: 3px;
        }
        .ip-provide-name {
          font-family: var(--ip-fh); font-size: 18px; font-weight: 700;
          color: var(--ip-white); margin-bottom: 8px; letter-spacing: -0.01em;
        }
        .ip-provide-body { font-size: 14px; line-height: 1.75; color: var(--ip-white); }

        /* ══════════════════════
           THREE-TIER SERVICE
        ══════════════════════ */
        .ip-tiers-section { background: var(--ip-cream); padding: 88px 0 80px; }

        .ip-tier-selector {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
          margin-bottom: 32px;
        }
        .ip-tier-btn {
          display: flex; flex-direction: column; gap: 5px;
          padding: 24px 22px; background: var(--ip-white);
          border: none; cursor: pointer; text-align: left;
          transition: background 0.2s;
        }
        .ip-tier-btn:hover { background: var(--ip-pale); }
        .ip-tier-btn--active { background: var(--ip-deep) !important; }
        .ip-tier-btn-num {
          font-family: var(--ip-fh); font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--ip-gold);
        }
        .ip-tier-btn-name {
          font-family: var(--ip-fh); font-size: 15px; font-weight: 700;
          color: var(--ip-ink); line-height: 1.2;
        }
        .ip-tier-btn--active .ip-tier-btn-name { color: var(--ip-white); }

        .ip-tier-panel {
          background: var(--ip-white);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden; opacity: 0;
        }
        .ip-tier-panel.ip-vis-up { opacity: 1; }
        .ip-tier-panel-top {
          padding: 32px 32px 28px;
          border-bottom: 1px solid rgba(47,82,51,0.1);
        }
        .ip-tier-panel-num {
          font-family: var(--ip-fh); font-size: 10px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase; color: var(--ip-gold);
          display: block; margin-bottom: 8px;
        }
        .ip-tier-panel-name {
          font-family: var(--ip-fh); font-size: 22px; font-weight: 800;
          color: var(--ip-ink); margin-bottom: 12px; letter-spacing: -0.015em;
        }
        .ip-tier-panel-summary { font-size: 14px; line-height: 1.75; color: var(--ip-ink); max-width: 520px; }
        .ip-tier-details-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 1px; background: rgba(47,82,51,0.08);
        }
        .ip-tier-detail-card { background: var(--ip-white); padding: 22px 22px; transition: background 0.2s; }
        .ip-tier-detail-card:hover { background: var(--ip-pale); }
        .ip-tier-detail-label {
          font-family: var(--ip-fh); font-size: 13px; font-weight: 700;
          color: var(--ip-ink); margin-bottom: 8px; line-height: 1.3;
        }
        .ip-tier-detail-body { font-size: 12.5px; line-height: 1.7; color: var(--ip-ink); }

        /* ══════════════════════
           WHAT WE NEED
        ══════════════════════ */
        .ip-need-section { background: var(--ip-cream); padding: 88px 0 80px; }
        .ip-need-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .ip-need-left { opacity: 0; }
        .ip-need-left.ip-vis-up { opacity: 1; }
        .ip-need-right { opacity: 0; }
        .ip-need-right.ip-vis-right { opacity: 1; }
        .ip-need-body { font-size: 15px; line-height: 1.78; color: var(--ip-ink); margin-bottom: 14px; }
        .ip-need-conviction-list {
          display: flex; flex-direction: column; gap: 0;
          margin-top: 28px;
          border: 1px solid rgba(47,82,51,0.12); border-radius: 5px; overflow: hidden;
        }
        .ip-need-conviction-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 16px 18px; border-bottom: 1px solid rgba(47,82,51,0.08);
          background: var(--ip-white);
        }
        .ip-need-conviction-item:last-child { border-bottom: none; }
        .ip-need-conviction-pip {
          width: 6px; height: 6px; border-radius: 50%;
          background: var(--ip-gold); flex-shrink: 0; margin-top: 7px;
        }
        .ip-need-conviction-text { font-size: 13.5px; font-weight: 500; line-height: 1.6; color: var(--ip-ink); }
        .ip-qualif-card {
          background: var(--ip-deep); border-radius: 5px; padding: 28px 26px; margin-bottom: 16px;
        }
        .ip-qualif-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ip-gold); margin-bottom: 12px;
        }
        .ip-qualif-body { font-size: 13px; line-height: 1.72; color: var(--ip-white); }
        .ip-qualif-badges { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 18px; }
        .ip-qualif-badge {
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.06em;
          padding: 4px 12px; border-radius: 3px;
          border: 1px solid rgba(201,168,76,0.3); color: rgba(201,168,76,0.8);
        }
        .ip-accountability-note {
          background: var(--ip-pale);
          border: 1px solid rgba(47,82,51,0.15);
          border-left: 3px solid var(--ip-green);
          border-radius: 4px; padding: 20px;
        }
        .ip-accountability-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ip-green); margin-bottom: 10px; display: block;
        }
        .ip-accountability-body { font-size: 13px; line-height: 1.72; color: var(--ip-ink); }

        /* ══════════════════════
           CO-INVESTMENT
        ══════════════════════ */
        .ip-coinvest-section { background: var(--ip-deep); padding: 88px 0 80px; }
        .ip-coinvest-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .ip-coinvest-left { opacity: 0; }
        .ip-coinvest-left.ip-vis-up { opacity: 1; }
        .ip-coinvest-right { opacity: 0; }
        .ip-coinvest-right.ip-vis-right { opacity: 1; }
        .ip-ci-body { font-size: 14.5px; line-height: 1.78; color: var(--ip-white); margin-bottom: 14px; }
        .ip-ci-quote {
          background: rgba(255,255,255,0.04);
          border-radius: 6px; padding: 24px 24px 20px;
          margin-bottom: 28px; position: relative;
        }
        .ip-ci-quote::before {
          content: '"'; position: absolute; top: 12px; left: 18px;
          font-family: var(--ip-fh); font-size: 64px; font-weight: 800;
          color: rgba(201,168,76,0.2); line-height: 1;
        }
        .ip-ci-quote-text {
          font-size: 14px; font-style: italic; line-height: 1.72;
          color: var(--ip-white); margin-bottom: 12px; padding-top: 8px; position: relative; z-index: 1;
        }
        .ip-ci-quote-attr {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--ip-gold); font-style: normal;
        }
        .ip-ci-mech-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--ip-gold); display: block; margin-bottom: 16px;
        }
        .ip-ci-mech-list {
          display: flex; flex-direction: column; gap: 0;
          border: 1px solid rgba(201,168,76,0.18); border-radius: 6px; overflow: hidden;
        }
        .ip-ci-mech-item {
          display: flex; align-items: flex-start; gap: 14px;
          padding: 14px 18px; border-bottom: 1px solid rgba(201,168,76,0.1);
          background: rgba(255,255,255,0.03); transition: background 0.2s;
        }
        .ip-ci-mech-item:last-child { border-bottom: none; }
        .ip-ci-mech-item:hover { background: rgba(201,168,76,0.06); }
        .ip-ci-mech-pip { width: 5px; height: 5px; border-radius: 50%; background: var(--ip-gold); flex-shrink: 0; margin-top: 6px; opacity: 0.7; }
        .ip-ci-mech-point { font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.8); }
        .ip-ci-mech-detail { font-size: 13px; color: var(--ip-white); }

        /* ══════════════════════
           HOW TO ENGAGE
        ══════════════════════ */
        .ip-engage-section { background: var(--ip-pale); padding: 88px 0 80px; }
        .ip-engage-steps { display: flex; flex-direction: column; margin-bottom: 32px; }
        .ip-engage-step {
          display: grid; grid-template-columns: 60px 1fr;
          gap: 0 24px; opacity: 0;
        }
        .ip-engage-step.ip-vis-up { opacity: 1; }
        .ip-engage-step-left { display: flex; flex-direction: column; align-items: center; }
        .ip-engage-step-num {
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--ip-deep); color: var(--ip-gold);
          font-family: var(--ip-fh); font-size: 12px; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; letter-spacing: 0.05em;
        }
        .ip-engage-connector {
          width: 1px; flex: 1;
          background: rgba(47,82,51,0.2);
          margin: 6px 0; min-height: 32px;
        }
        .ip-engage-step-content { padding: 8px 0 32px; }
        .ip-engage-step-label {
          font-family: var(--ip-fh); font-size: 18px; font-weight: 700;
          color: var(--ip-ink); margin-bottom: 8px; letter-spacing: -0.01em;
        }
        .ip-engage-step-body { font-size: 14px; line-height: 1.75; color: var(--ip-ink); }
        .ip-engage-note {
          background: rgba(47,82,51,0.06);
          border: 1px solid rgba(47,82,51,0.14);
          border-left: 3px solid var(--ip-gold);
          border-radius: 0 4px 4px 0;
          padding: 20px 24px; opacity: 0;
          display: flex; align-items: flex-start; gap: 16px;
        }
        .ip-engage-note.ip-vis-up { opacity: 1; }
        .ip-engage-note-label {
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--ip-green);
          flex-shrink: 0; padding-top: 3px; white-space: nowrap;
        }
        .ip-engage-note-body { font-size: 13px; line-height: 1.72; color: var(--ip-ink); }

        /* ══════════════════════
           CTA
        ══════════════════════ */
        .ip-cta-section { background: #0F1E13; padding: 88px 0; }
        .ip-cta-inner { opacity: 0; max-width: 700px; }
        .ip-cta-inner.ip-vis-up { opacity: 1; }
        .ip-cta-h {
          font-family: var(--ip-fh); font-size: clamp(26px, 3.5vw, 44px);
          font-weight: 800; line-height: 1.12; letter-spacing: -0.022em;
          color: var(--ip-white); margin-bottom: 16px;
        }
        .ip-cta-sub {
          font-size: 15px; line-height: 1.75; color: var(--ip-white);
          margin-bottom: 36px; max-width: 560px;
        }
        .ip-cta-btns { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .ip-btn-gold {
          font-family: var(--ip-fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #0F1E13; background: var(--ip-gold); border: none;
          padding: 14px 24px; border-radius: 3px; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .ip-btn-gold:hover { background: #d9b85c; transform: translateY(-1px); }
        .ip-btn-ghost {
          font-family: var(--ip-fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          border: 1px solid rgba(255,255,255,0.2); background: transparent;
          padding: 13px 22px; border-radius: 3px; cursor: pointer;
          text-decoration: none; display: inline-block;
          transition: border-color 0.2s, color 0.2s;
        }
        .ip-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--ip-white); }

        /* ══════════════════════
           RESPONSIVE
        ══════════════════════ */
        @media (max-width: 1024px) {
          .ip-why-grid { grid-template-columns: repeat(2, 1fr); }
          .ip-who-grid { grid-template-columns: repeat(2, 1fr); }
          .ip-type-panel-grid { grid-template-columns: 1fr; }
          .ip-type-panel-left { border-right: none; border-bottom: 1px solid rgba(201,168,76,0.18); }
          .ip-need-grid { grid-template-columns: 1fr; gap: 40px; }
          .ip-coinvest-grid { grid-template-columns: 1fr; gap: 44px; }
          .ip-tier-details-grid { grid-template-columns: repeat(2, 1fr); }
          .ip-hero-creds { grid-template-columns: repeat(2, 1fr); }
          .ip-hero-cred:nth-child(2) { border-right: none; }
          .ip-hero-cred:nth-child(3) { border-top: 1px solid rgba(201,168,76,0.2); }
          .ip-hero-inner { grid-template-columns: 1fr; gap: 36px; padding-bottom: 40px; }
        }
        @media (max-width: 768px) {
          .ip-inner { padding: 0 24px; }
          .ip-hero { padding: 80px 0 56px; }
          .ip-why-section, .ip-types-section, .ip-who-section, .ip-provide-section,
          .ip-tiers-section, .ip-need-section, .ip-coinvest-section,
          .ip-engage-section, .ip-cta-section { padding: 64px 0; }
          .ip-why-grid { grid-template-columns: 1fr; }
          .ip-who-grid { grid-template-columns: 1fr; }
          .ip-tier-selector { grid-template-columns: 1fr; }
          .ip-tier-details-grid { grid-template-columns: 1fr; }
          .ip-engage-step { grid-template-columns: 48px 1fr; }
          .ip-engage-note { flex-direction: column; gap: 8px; }
        }
        @media (max-width: 480px) {
          .ip-cta-btns { flex-direction: column; align-items: stretch; }
          .ip-btn-gold, .ip-btn-ghost { text-align: center; }
          .ip-hero-creds { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>

      <div className="ip-page">
        <Hero />
        <WhyUs />
        <PartnershipTypes />
        <WhoWeWorkWith />
        <WhatWeProvide />
        <ThreeTierService />
        <WhatWeNeed />
        <CoInvestment />
        <HowToEngage />
        <PartnerCTA />
      </div>
    </>
  );
}