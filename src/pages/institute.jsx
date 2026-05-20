import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const SCHOOLS = [
  {
    num: "01",
    title: "Regenerative Systems & Agroforestry",
    tag: "The flagship school",
    desc: "Africa's most advanced integrated farm model, taught by its architect.",
    courses: [
      { name: "Integrated Farm Design", body: "How to architect a farm as an ecosystem, combining annual crops, perennial trees, livestock, and biomass cycling into a single self-reinforcing system." },
      { name: "Regenerative Soil Science", body: "Building soil organic matter through biological cycling, composting, mulching, and cover cropping. Measuring and verifying improvement over time." },
      { name: "Agroforestry Systems", body: "Economic trees as shade, income, and soil inputs. Species selection, spacing, integration with annual crops, and long-term value modelling." },
      { name: "Livestock Integration", body: "Poultry and small ruminants as biological pest control, nutrient cycling agents, and secondary income streams in an integrated farm model." },
      { name: "Biomass & Waste Cycling", body: "Closing the nutrient loop. Crop residues, prunings, manure, and food waste as inputs rather than waste. Compost systems and application schedules." },
    ],
  },
  {
    num: "02",
    title: "Precision Irrigation & Water Management",
    tag: "Engineering-grade water delivery",
    desc: "Engineering water to the root zone, not across the field.",
    courses: [
      { name: "Drip Irrigation Design", body: "System architecture, emitter selection, pressure management, and zoning for smallholder to commercial-scale installations." },
      { name: "Fertigation Engineering", body: "Venturi and dosing injector systems, soluble fertiliser programmes, and delivery scheduling. Nutrients at the root zone, not on the soil surface." },
      { name: "Water-Use Efficiency", body: "Scheduling irrigation to crop need, not calendar. Evapotranspiration, soil water-holding capacity, and sensor-adjusted scheduling." },
      { name: "Precision Sensing (CropX)", body: "Installing, interpreting, and acting on multi-depth soil sensor data. Building an irrigation schedule from real data, not intuition." },
      { name: "Salinity & Water Quality", body: "Managing soil EC, leaching requirements, and source-water quality for long-term productive capacity." },
    ],
  },
  {
    num: "03",
    title: "Production Systems & Crop Management",
    tag: "From seed to harvest",
    desc: "Every commercial decision, demystified, from seed selection to export market.",
    courses: [
      { name: "Sustainable Crop Management", body: "Variety selection, planting calendars, crop spacing, and rotation planning for commercial West African conditions." },
      { name: "Integrated Pest Management", body: "Biological, cultural, and chemical control in sequence. Building a pest management plan that protects yield without destroying soil biology." },
      { name: "Greenhouse & Controlled Environment", body: "Climate management, hydroponic systems, and nutrient film technique for urban and peri-urban production." },
      { name: "Post-Harvest Technology", body: "Cooling, drying, packaging, and storage systems for vegetables, herbs, and dried products. Reducing loss between field and market." },
      { name: "Good Agricultural Practice (GAP)", body: "Documentation, record-keeping, and compliance systems for institutional buyers, export markets, and certification bodies." },
    ],
  },
  {
    num: "04",
    title: "Agri-Food Economics & Business",
    tag: "Profit, not just production",
    desc: "The financial and commercial layer that turns production into profit.",
    courses: [
      { name: "Agribusiness Finance", body: "Farm financial modelling, break-even analysis, cost of production, and preparing a farm business for bank or DFI financing." },
      { name: "Export Readiness", body: "Quality systems, traceability requirements, packaging specifications, and market-entry documentation for UK and EU export." },
      { name: "Supply Chain Intelligence", body: "Mapping the value chain from farm to end buyer. Identifying where value leaks and where margin can be captured." },
      { name: "Global Market Analysis", body: "Reading commodity price trends, understanding buyer requirements, and positioning African produce in international markets." },
      { name: "Agri-Enterprise Development", body: "Building a viable agricultural business from scratch, legal structure, licensing, marketing, and the first 12 months of operations." },
    ],
  },
];

const ADVANTAGE = [
  {
    name: "Digital Depth",
    body: "Every course is delivered via high-fidelity video, downloadable PDF guides for deep study, and audio formats for mobile learning, structured for the busy professional, not the full-time student.",
  },
  {
    name: "Physical Validation",
    body: "Partner farm locations including our 200-hectare Ogun State estate, serve as live training centres. Students attend scheduled immersion sessions to practicalise their coursework in real commercial conditions.",
  },
  {
    name: "Business Translation",
    body: "Theory alone doesn't generate revenue. Every programme includes Bankable Blueprints, proprietary business models, cheat sheets, and templates ready for immediate field application. Students leave with a deployable plan, not just a certificate.",
  },
];

const FORMATS = [
  { label: "Self-paced online", body: "Video, audio, and PDF curriculum. Learn at your pace, on your schedule. Certified completion on each module." },
  { label: "Live virtual cohorts", body: "Structured 6–12 week cohorts with scheduled live sessions, group assignments, and peer interaction. Led by practitioners, not academics." },
  { label: "Physical immersion", body: "Scheduled on-farm training sessions at our partner estate locations. Hands-on application of digital coursework in commercial conditions." },
  { label: "Custom institutional", body: "Bespoke programme design for banks, insurance companies, government agencies, and donor organisations training staff or programme beneficiaries at scale." },
  { label: "Bankable Blueprints", body: "Standalone enterprise model packages, no full course required. For practitioners who need the business model, not the full curriculum." },
];

const LICENSING = [
  { label: "Enterprise Platform Licence", body: "Full white-label access to the Institute platform for institutional rollout." },
  { label: "Certified Training Cohort", body: "Structured cohort with completion certificates and M&E reporting for donor compliance." },
  { label: "Bulk Farmer Certification", body: "Large-scale farmer certification programmes with documented outcomes." },
  { label: "Custom Course Development", body: "Bespoke curriculum development for specific institutional mandates." },
  { label: "Bankable Blueprint Package", body: "Enterprise access to the full Blueprint library for lending and insurance product development." },
];

const COMMUNITY = [
  {
    name: "Expert Forums",
    body: "Direct interaction between enrolled students, alumni, M.A. Williams Institute agronomists, and Yomi Williams. Questions answered by practitioners who have solved the same problems in the field.",
  },
  {
    name: "Case Study Library",
    body: "Real-world documented case studies drawn from actual farm operations, from the 200-hectare hibiscus estate, the Lagos vertical farms, the integrated agroforestry pilot. Students study actual data, actual decisions, and actual outcomes.",
  },
  {
    name: "Live Intelligence Briefings",
    body: "Monthly live sessions where Yomi and the Institute's practitioner network discuss emerging market dynamics, new research, regulatory changes, and field challenges across West Africa.",
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
    <section className="inst-hero" aria-labelledby="hero-heading">
      <div className="hero-bg-img" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-dot-grid" aria-hidden="true">
        {Array.from({ length: 48 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="hero-inner">
        <div className={`hero-left ${visible ? "anim-in" : ""}`}>
          <Kicker label="M.A. Williams Institute" light />
          <h1 className="hero-heading" id="hero-heading">
            Agriculture's Greatest Gap Is Not Land Or Water.
          </h1>
          <p className="hero-subheading">
            It Is Knowledge That Survives Contact With Reality.
          </p>
          <div className="hero-badges" style={{ marginTop: 28 }}>
            {["Practitioner-Led", "Digitally Delivered", "Physically Validated", "Africa-Focused"].map(b => (
              <span key={b} className="hero-badge">{b}</span>
            ))}
          </div>
        </div>

        <div className={`hero-right ${visible ? "anim-in-right" : ""}`}>
          <div style={{ width: 48, height: 3, background: "var(--gold)", marginBottom: 28, opacity: 0.8 }} aria-hidden="true" />
          <p className="hero-body">
            The M.A. Williams Agriculture Institute is the educational arm of M.A. Williams & Co. A practitioner-built, digitally delivered, physically validated agricultural education platform.
          </p>
          <p className="hero-body">
            We don't teach from textbooks. We teach from farms.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 28, flexWrap: "wrap" }}>
            <Link to="/institute/courses" className="hero-cta-primary"
              onMouseEnter={e => { e.currentTarget.style.background = "#d9b85c"; e.currentTarget.style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--gold)"; e.currentTarget.style.transform = "none"; }}>
              Explore Courses
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <Link to="/institute/enrol" className="hero-cta-ghost"
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.6)"; e.currentTarget.style.color = "#fff"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}>
              Enroll Now
            </Link>
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
   SECTION 2 — ABOUT THE INSTITUTE
───────────────────────────────────────── */
function AboutInstitute() {
  const [ref, visible] = useInView();

  return (
    <section className="about-inst-section" ref={ref} aria-labelledby="about-inst-heading">
      <div className="section-inner">
        <div className="about-inst-grid">
          <div className={`about-inst-left ${visible ? "anim-in" : ""}`}>
            <Kicker label="Our conviction" />
            <h2 className="section-heading" id="about-inst-heading">
              The Translation Gap Between Theory and Practice Is Where African Agriculture Loses Its Greatest Opportunity.
            </h2>
          </div>
          <div className={`about-inst-right ${visible ? "anim-in-right" : ""}`}>
            <p className="inst-body">
              The M.A. Williams Agriculture Institute was founded on one conviction: that the gap between agricultural theory and profitable agricultural practice is not a knowledge gap but a translation gap. Science exists. The frameworks exist. What has been missing is the practitioner layer that shows a student how a soil science principle becomes a crop decision at 5am on a production site, under pressure, with imperfect data.
            </p>
            <p className="inst-body">
              We close that gap. Every curriculum module is designed by practitioners. Every business model template, our Bankable Blueprints™, has been pressure-tested in a real operating environment. Every student has access to physical training at our partner farm locations. We call this the Physical Advantage™. No other agricultural education platform in Africa offers it because no other platform owns the farms.
            </p>

            <blockquote className="inst-quote">
              <p className="inst-quote-text">
                "A nation that does not catalogue its biodiversity cannot claim its wealth. We must trade our ignorance for rigorous data and stop seeing our indigenous heritage through the eyes of strangers. Mapping our biological signature is not just science, it is an act of economic sovereignty."
              </p>
              <cite className="inst-quote-attr">— Yomi Williams</cite>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3 — VISION & MISSION
───────────────────────────────────────── */
function VisionMission() {
  const [ref, visible] = useInView();

  return (
    <section className="vision-section" ref={ref} aria-labelledby="vision-heading">
      <div className="section-inner">
        <div className={`vision-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Vision & Mission" light />
          <h2 className="section-heading vm-heading" id="vision-heading">
            Cultivating Knowledge. Fostering Growth.
          </h2>
        </div>

        <div className="vm-grid">
          <div className={`vm-card ${visible ? "anim-in" : ""}`} style={{ animationDelay: "0.08s" }}>
            <span className="vm-label">Vision</span>
            <p className="vm-body">
              To be the defining practitioner-led agricultural education platform for Africa and its diaspora where digital intelligence, physical mastery, and economic ambition converge to build the professionals who will feed the next century.
            </p>
          </div>

          <div className={`vm-card ${visible ? "anim-in" : ""}`} style={{ animationDelay: "0.18s" }}>
            <span className="vm-label">Cultivating Knowledge</span>
            <p className="vm-body">
              To democratise high-level agricultural expertise, built from frontline experience, not academic abstraction, through a flexible, multi-format digital curriculum available to any practitioner, anywhere.
            </p>
          </div>

          <div className={`vm-card ${visible ? "anim-in" : ""}`} style={{ animationDelay: "0.28s" }}>
            <span className="vm-label">Fostering Growth</span>
            <p className="vm-body">
              To catalyse a global community of agricultural practice where theoretical learning is validated by physical training centres, peer collaboration, and business models that actually work in the field.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4 — THE PHYSICAL ADVANTAGE™
───────────────────────────────────────── */
function PhysicalAdvantage() {
  const [ref, visible] = useInView();

  return (
    <section className="advantage-section" ref={ref} aria-labelledby="advantage-heading" id="physical-advantage">
      <div className="section-inner">
        <div className={`advantage-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Our core differentiator" />
          <h2 className="section-heading" id="advantage-heading">
            The Physical Advantage™
          </h2>
          <p className="section-sub">
            Every other agricultural education platform teaches theory. We teach theory validated by working production facilities.
          </p>
        </div>

        <div className={`advantage-callout ${visible ? "anim-in" : ""}`} style={{ animationDelay: "0.1s" }}>
          <p className="advantage-callout-text">
            Students don't read about drip irrigation, they walk the system. They don't study soil sensor data in isolation, they interpret real data from a commercial operation. The physical farm is the live curriculum. No competitor can replicate this because they don't own the farm.
          </p>
        </div>

        <div className="advantage-grid">
          {ADVANTAGE.map((a, i) => (
            <div key={a.name} className={`advantage-card ${visible ? "anim-in" : ""}`} style={{ animationDelay: `${0.18 + 0.1 * i}s` }}>
              <span className="advantage-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="advantage-name">{a.name}</h3>
              <p className="advantage-body">{a.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5 — BANKABLE BLUEPRINTS™
───────────────────────────────────────── */
function BankableBlueprints() {
  const [ref, visible] = useInView();

  const blueprints = [
    "Smallholder vegetable enterprise",
    "Hibiscus production and processing",
    "Drip irrigation installation business",
    "Integrated agroforestry estate",
    "Urban hydroponic grow operation",
    "Agricultural input supply distribution",
  ];

  return (
    <section className="blueprints-section" ref={ref} aria-labelledby="blueprints-heading" id="blueprints">
      <div className="section-inner">
        <div className="blueprints-grid">
          <div className={`blueprints-left ${visible ? "anim-in" : ""}`}>
            <Kicker label="Proprietary learning output" light />
            <h2 className="section-heading bp-heading" id="blueprints-heading">
              Bankable Blueprints™
            </h2>
            <p className="bp-body">
              The Bankable Blueprint™ transforms course knowledge into a deployable business plan. Each Blueprint is built around a specific agricultural enterprise model, stress-tested against real farm economics, and structured to meet the documentation requirements of Nigerian agricultural lenders and development finance institutions.
            </p>
            <p className="bp-body">
              Students leave with a deployable plan, not just a certificate. The library grows with each new Institute programme.
            </p>
          </div>

          <div className={`blueprints-right ${visible ? "anim-in-right" : ""}`}>
            <p className="bp-available-label">Current Blueprint Library</p>
            <div className="blueprints-list">
              {blueprints.map((b, i) => (
                <div key={i} className="blueprint-item">
                  <span className="blueprint-pip" aria-hidden="true" />
                  <span className="blueprint-name">{b}</span>
                </div>
              ))}
            </div>
            <p className="bp-note">Available as standalone purchases or included in full programme enrolment.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 6 — THE FOUR SCHOOLS
───────────────────────────────────────── */
function FourSchools() {
  const [ref, visible] = useInView();
  const [activeSchool, setActiveSchool] = useState(0);

  return (
    <section className="schools-section" ref={ref} aria-labelledby="schools-heading" id="schools">
      <div className="section-inner">
        <div className={`schools-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Curriculum architecture" />
          <h2 className="section-heading" id="schools-heading">
            The Four Schools of Thought
          </h2>
          <p className="section-sub">
            Organised to cover the complete agricultural value chain from soil to market, from ancient ecosystem logic to modern precision engineering.
          </p>
        </div>

        <div className="schools-layout">
          {/* School tabs */}
          <div className="schools-tabs" role="tablist" aria-label="Schools of Thought">
            {SCHOOLS.map((s, i) => (
              <button
                key={s.num}
                className={`school-tab ${activeSchool === i ? "school-tab--active" : ""}`}
                onClick={() => setActiveSchool(i)}
                role="tab"
                aria-selected={activeSchool === i}
                aria-controls={`school-panel-${i}`}
              >
                <span className="school-tab-num">{s.num}</span>
                <span className="school-tab-title">{s.title}</span>
              </button>
            ))}
          </div>

          {/* Active school panel */}
          <div
            className={`school-panel ${visible ? "anim-in" : ""}`}
            id={`school-panel-${activeSchool}`}
            role="tabpanel"
          >
            <div className="school-panel-header">
              <span className="school-panel-tag">{SCHOOLS[activeSchool].tag}</span>
              <p className="school-panel-desc">{SCHOOLS[activeSchool].desc}</p>
            </div>
            <div className="school-courses-grid">
              {SCHOOLS[activeSchool].courses.map((c, i) => (
                <div key={i} className="course-card">
                  <h4 className="course-name">{c.name}</h4>
                  <p className="course-body">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 7 — DELIVERY FORMATS
───────────────────────────────────────── */
function DeliveryFormats() {
  const [ref, visible] = useInView();

  return (
    <section className="formats-section" ref={ref} aria-labelledby="formats-heading" id="delivery">
      <div className="section-inner">
        <div className={`formats-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="How we deliver" />
          <h2 className="section-heading" id="formats-heading">Delivery Formats</h2>
          <p className="section-sub">
            Five modes of access, designed around how agricultural practitioners actually learn.
          </p>
        </div>

        <div className="formats-list">
          {FORMATS.map((f, i) => (
            <div key={f.label} className={`format-row ${visible ? "anim-in" : ""}`} style={{ animationDelay: `${0.08 * i}s` }}>
              <span className="format-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <div className="format-content">
                <h3 className="format-label">{f.label}</h3>
                <p className="format-body">{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 8 — INSTITUTIONAL LICENSING
───────────────────────────────────────── */
function InstitutionalLicensing() {
  const [ref, visible] = useInView();

  return (
    <section className="licensing-section" ref={ref} aria-labelledby="licensing-heading" id="licensing">
      <div className="section-inner">
        <div className={`licensing-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="For organisations" light />
          <h2 className="section-heading lic-heading" id="licensing-heading">
            Institutional Licensing
          </h2>
          <p className="lic-sub">
            Banks certifying agricultural loan officers, insurance companies training field assessors, government ADPs certifying beneficiary farmers, donor organisations documenting training delivery, all can access the platform under an institutional licence with branded dashboards, completion reporting, and M&E documentation.
          </p>
        </div>

        <div className="licensing-grid">
          {LICENSING.map((l, i) => (
            <div key={l.label} className={`licensing-card ${visible ? "anim-in" : ""}`} style={{ animationDelay: `${0.08 * i}s` }}>
              <span className="lic-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="lic-label">{l.label}</h3>
              <p className="lic-body">{l.body}</p>
            </div>
          ))}
        </div>

        <div className={`lic-note ${visible ? "anim-in" : ""}`} style={{ animationDelay: "0.45s" }}>
          <span className="lic-note-label" aria-hidden="true">Typical institutional clients</span>
          <p className="lic-note-body">
            Banks · Insurance companies · Government Agricultural Development Programmes · USAID, GIZ, IFAD, and other donor organisations requiring certified training delivery with documented M&E outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 9 — COMMUNITY HUB
───────────────────────────────────────── */
function CommunityHub() {
  const [ref, visible] = useInView();

  return (
    <section className="community-section" ref={ref} aria-labelledby="community-heading">
      <div className="section-inner">
        <div className={`community-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Beyond the classroom" />
          <h2 className="section-heading" id="community-heading">The Community Hub</h2>
          <p className="section-sub">
            Learning is not a solitary act. Our platform includes three community layers.
          </p>
        </div>

        <div className="community-grid">
          {COMMUNITY.map((c, i) => (
            <div key={c.name} className={`community-card ${visible ? "anim-in" : ""}`} style={{ animationDelay: `${0.1 * i}s` }}>
              <div className="community-card-top">
                <span className="community-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="community-name">{c.name}</h3>
              </div>
              <p className="community-body">{c.body}</p>
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
    <section className="inst-cta" ref={ref} aria-labelledby="cta-heading">
      <div className="section-inner">
        <div className={`cta-inner ${visible ? "anim-in" : ""}`}>
          <p className="cta-kicker-text">Your next step</p>
          <h2 className="cta-heading" id="cta-heading">
            The farm is ready.<br />The question is yours.
          </h2>
          <div className="cta-buttons">
            <a href="/institute/courses" className="cta-btn-primary">Explore Courses</a>
            <a href="/contact" className="cta-btn-ghost">Institutional Enquiry</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ROOT + STYLES
───────────────────────────────────────── */
export default function Institute() {
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

        .inst-page { font-family: var(--fb); background: var(--cream); color: var(--ink); overflow-x: hidden; }

        .anim-in       { animation: fadeUp   0.65s ease both; }
        .anim-in-right { animation: fadeRight 0.65s ease both; }
        @keyframes fadeUp    { from { opacity: 0; transform: translateY(22px); } to { opacity: 1; transform: none; } }
        @keyframes fadeRight { from { opacity: 0; transform: translateX(22px); } to { opacity: 1; transform: none; } }

        .section-inner { max-width: 1160px; margin: 0 auto; padding: 0 48px; }

        .kicker { display: flex; align-items: center; gap: 9px; margin-bottom: 14px; }
        .kicker-pip { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); flex-shrink: 0; }
        .kicker-text { font-size: 15px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: var(--green); }

        .section-heading {
          font-family: var(--fh);
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; line-height: 1.1;
          letter-spacing: -0.02em; color: var(--ink);
          margin-bottom: 14px;
        }
        .section-sub { font-size: 15px; line-height: 1.75; color: var(--ink); max-width: 580px; }

        /* ══ HERO ══ */
        .inst-hero {
          min-height: 95vh; position: relative; overflow: hidden;
          display: flex; flex-direction: column; justify-content: center;
          padding: 140px 0 80px; background: var(--deep);
        }
        .hero-bg-img {
          position: absolute; inset: 0;
          background-image: url('/assets/hero-image (2).jpg');
          background-size: cover; background-position: center 55%;
          opacity: 0.18; transform: scale(1.04);
          transition: transform 8s ease; z-index: 0;
        }
        .inst-hero:hover .hero-bg-img { transform: scale(1); }
        .hero-overlay {
          position: absolute; inset: 0;
          background:
            linear-gradient(135deg, rgba(30,54,34,0.94) 0%, rgba(30,54,34,0.62) 55%, rgba(15,30,19,0.9) 100%),
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
          font-size: clamp(16px, 1.8vw, 22px);
          font-weight: 500; line-height: 1.45;
          color: var(--gold); font-style: italic;
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
          color: var(--white);
          border: 1px solid rgba(255,255,255,0.25);
          padding: 13px 24px; border-radius: 3px; text-decoration: none;
          transition: border-color 0.2s, color 0.2s;
        }
        .hero-rule-wrap { max-width: 1160px; margin: 56px auto 0; padding: 0 48px; position: relative; z-index: 1; }
        .hero-rule { height: 1px; background: linear-gradient(90deg, var(--gold), rgba(201,168,76,0.1)); opacity: 0.5; }

        /* ══ ABOUT INSTITUTE ══ */
        .about-inst-section { background: var(--cream); padding: 88px 0 80px; }
        .about-inst-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .about-inst-left { opacity: 0; }
        .about-inst-left.anim-in { opacity: 1; }
        .about-inst-right { opacity: 0; }
        .about-inst-right.anim-in-right { opacity: 1; }
        .about-inst-left .section-heading { font-size: clamp(24px, 2.6vw, 36px); }
        .inst-body { font-size: 14.5px; line-height: 1.78; color: var(--ink); margin-bottom: 14px; }
        .inst-quote {
          background: var(--deep); border-radius: 6px;
          padding: 24px 24px 20px; margin-top: 28px;
          position: relative;
        }
        .inst-quote::before {
          content: '"'; position: absolute; top: 12px; left: 18px;
          font-family: var(--fh); font-size: 64px; font-weight: 800;
          color: rgba(201,168,76,0.2); line-height: 1;
        }
        .inst-quote-text {
          font-size: 13.5px; font-style: italic;
          line-height: 1.72; color: rgba(255,255,255,0.7);
          margin-bottom: 12px; padding-top: 8px;
          position: relative; z-index: 1;
        }
        .inst-quote-attr {
          font-size: 11px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--gold); font-style: normal;
        }

        /* ══ VISION & MISSION ══ */
        .vision-section { background: var(--deep); padding: 88px 0 80px; }
        .vision-section .section-heading { color: var(--white); }
        .vision-section .kicker-text { color: rgba(201,168,76,0.9); }
        .vision-header { margin-bottom: 52px; }
        .vm-heading { color: var(--white) !important; }
        .vm-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(201,168,76,0.18); border: 1px solid rgba(201,168,76,0.2); border-radius: 6px; overflow: hidden; }
        .vm-card {
          background: rgba(255,255,255,0.03);
          padding: 32px 26px; opacity: 0;
          transition: background 0.25s;
        }
        .vm-card.anim-in { opacity: 1; }
        .vm-card:hover { background: rgba(201,168,76,0.07); }
        .vm-label { font-size: 15px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 14px; }
        .vm-body { font-size: 14px; line-height: 1.75; color: var(--white); }

        /* ══ PHYSICAL ADVANTAGE ══ */
        .advantage-section { background: var(--cream); padding: 88px 0 80px; }
        .advantage-header { margin-bottom: 32px; }
        .advantage-callout {
          background: var(--pale);
          border-left: 3px solid var(--gold);
          border-radius: 0 4px 4px 0;
          padding: 20px 24px;
          margin-bottom: 48px;
          opacity: 0;
        }
        .advantage-callout.anim-in { opacity: 1; }
        .advantage-callout-text { font-size: 14px; line-height: 1.75; color: var(--green); font-weight: 500; }
        .advantage-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(47,82,51,0.12); border: 1px solid rgba(47,82,51,0.12); border-radius: 6px; overflow: hidden; }
        .advantage-card {
          background: var(--white); padding: 28px 26px;
          opacity: 0; transition: background 0.25s;
        }
        .advantage-card.anim-in { opacity: 1; }
        .advantage-card:hover { background: var(--pale); }
        .advantage-num { font-family: var(--fh); font-size: 11px; font-weight: 700; color: var(--gold); letter-spacing: 0.08em; display: block; margin-bottom: 10px; }
        .advantage-name { font-family: var(--fh); font-size: 16px; font-weight: 700; color: var(--ink); margin-bottom: 10px; letter-spacing: -0.01em; }
        .advantage-body { font-size: 13px; line-height: 1.72; color: var(--ink); }

        .section-sub {
          color: var(--ink);
          font-weight: 500;
        }

        /* ══ BANKABLE BLUEPRINTS ══ */
        .blueprints-section { background: var(--deep); padding: 88px 0 80px; }
        .blueprints-section .section-heading { color: var(--white); }
        .blueprints-section .kicker-text { color: rgba(201,168,76,0.9); }
        .blueprints-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 72px; align-items: start; }
        .blueprints-left { opacity: 0; }
        .blueprints-left.anim-in { opacity: 1; }
        .blueprints-right { opacity: 0; }
        .blueprints-right.anim-in-right { opacity: 1; }
        .bp-heading { color: var(--white) !important; }
        .bp-body { font-size: 14.5px; line-height: 1.78; color: var(--white); margin-bottom: 14px; }
        .bp-available-label { font-size: 15px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); margin-bottom: 18px; }
        .blueprints-list { display: flex; flex-direction: column; border: 1px solid rgba(201,168,76,0.22); border-radius: 6px; overflow: hidden; margin-bottom: 16px; }
        .blueprint-item {
          display: flex; align-items: center; gap: 14px;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(201,168,76,0.1);
          background: rgba(255,255,255,0.03);
          transition: background 0.2s;
        }
        .blueprint-item:last-child { border-bottom: none; }
        .blueprint-item:hover { background: rgba(201,168,76,0.07); }
        .blueprint-pip { width: 5px; height: 5px; border-radius: 50%; background: var(--gold); flex-shrink: 0; opacity: 0.7; }
        .blueprint-name { font-size: 13px; line-height: 1.5; color: var(--white); }
        .bp-note { font-size: 12px; color: var(--white); font-style: italic; }

        /* ══ FOUR SCHOOLS ══ */
        .schools-section { background: var(--cream); padding: 88px 0 80px; }
        .schools-header { margin-bottom: 48px; }
        .schools-layout { display: grid; grid-template-columns: 280px 1fr; gap: 32px; align-items: start; }
        .schools-tabs { display: flex; flex-direction: column; border: 1px solid rgba(47,82,51,0.12); border-radius: 6px; overflow: hidden; }
        .school-tab {
          display: flex; flex-direction: column; gap: 4px;
          padding: 18px 20px; background: var(--white);
          border: none; border-bottom: 1px solid rgba(47,82,51,0.08);
          cursor: pointer; text-align: left;
          transition: background 0.2s;
        }
        .school-tab:last-child { border-bottom: none; }
        .school-tab:hover { background: var(--pale); }
        .school-tab--active { background: var(--deep) !important; }
        .school-tab-num {
          font-family: var(--fh); font-size: 10px; font-weight: 700;
          letter-spacing: 0.1em; color: var(--gold);
        }
        .school-tab--active .school-tab-num { color: var(--gold);}
        .school-tab-title {
          font-family: var(--fh); font-size: 13px; font-weight: 700;
          color: var(--ink); line-height: 1.3;
        }
        .school-tab--active .school-tab-title { color: var(--white); }
        .school-panel { opacity: 0; }
        .school-panel.anim-in { opacity: 1; }
        .school-panel-header { margin-bottom: 24px; padding-bottom: 20px; border-bottom: 1px solid rgba(47,82,51,0.1); }
        .school-panel-tag { font-size: 15px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--gold); display: block; margin-bottom: 8px; }
        .school-panel-desc { font-size: 15px; line-height: 1.65; color: var(--ink); }
        .school-courses-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1px; background: rgba(47,82,51,0.1); border: 1px solid rgba(47,82,51,0.1); border-radius: 6px; overflow: hidden; }
        .course-card { background: var(--white); padding: 22px 20px; transition: background 0.2s; }
        .course-card:hover { background: var(--pale); }
        .course-name { font-family: var(--fh); font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 8px; line-height: 1.3; }
        .course-body { font-size: 12.5px; line-height: 1.7; color: var(--ink); }

        /* ══ DELIVERY FORMATS ══ */
        .formats-section { background: var(--pale); padding: 88px 0 80px; }
        .formats-header { margin-bottom: 48px; }
        .formats-list { display: flex; flex-direction: column; }
        .format-row {
          display: grid; grid-template-columns: 52px 1fr;
          gap: 0 20px; padding: 26px 0;
          border-bottom: 1px solid rgba(47,82,51,0.12);
          opacity: 0; align-items: start;
        }
        .format-row:first-of-type { border-top: 1px solid rgba(47,82,51,0.12); }
        .format-row.anim-in { opacity: 1; }
        .format-num { font-family: var(--fh); font-size: 11px; font-weight: 700; letter-spacing: 0.09em; color: var(--gold); padding-top: 3px; }
        .format-label { font-family: var(--fh); font-size: 17px; font-weight: 700; color: var(--ink); margin-bottom: 8px; letter-spacing: -0.01em; }
        .format-body { font-size: 14px; line-height: 1.75; color: var(--ink); }

        /* ══ INSTITUTIONAL LICENSING ══ */
        .licensing-section { background: var(--green); padding: 88px 0 80px; position: relative; overflow: hidden; }
        
        .licensing-section .section-heading { color: var(--white); }
        .licensing-section .kicker-text { color: rgba(201,168,76,0.9); }
        .licensing-header { margin-bottom: 48px; position: relative; z-index: 1; }
        .lic-heading { color: var(--white) !important; }
        .lic-sub { font-size: 15px; line-height: 1.75; color: var(--white); max-width: 660px; }
        .licensing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.18); border-radius: 6px; overflow: hidden; margin-bottom: 28px; position: relative; z-index: 1; }
        .licensing-card {
          background: rgba(255,255,255,0.04); padding: 26px 22px;
          opacity: 0; transition: background 0.25s;
        }
        .licensing-card.anim-in { opacity: 1; }
        .licensing-card:hover { background: rgba(201,168,76,0.08); }
        .lic-num { font-family: var(--fh); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; color: var(--gold); display: block; margin-bottom: 10px; }
        .lic-label { font-family: var(--fh); font-size: 14px; font-weight: 700; color: var(--white); margin-bottom: 10px; line-height: 1.3; }
        .lic-body { font-size: 12.5px; line-height: 1.7; color: var(--white); }
        .lic-note {
          background: rgba(201,168,76,0.07);
          border: 1px solid rgba(201,168,76,0.22);
          border-left: 3px solid var(--gold);
          border-radius: 4px; padding: 20px 24px;
          opacity: 0; display: flex; align-items: flex-start; gap: 16px;
          position: relative; z-index: 1;
        }
        .lic-note.anim-in { opacity: 1; }
        .lic-note-label { font-size: 15px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); flex-shrink: 0; padding-top: 3px; white-space: nowrap; }
        .lic-note-body { font-size: 13px; line-height: 1.72; color: var(--white); }

        /* ══ COMMUNITY ══ */
        .community-section { background: var(--cream); padding: 88px 0 80px; }
        .community-header { margin-bottom: 52px; }
        .community-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1px; background: rgba(47,82,51,0.12); border: 1px solid rgba(47,82,51,0.12); border-radius: 6px; overflow: hidden; }
        .community-card { background: var(--white); padding: 28px 26px; opacity: 0; transition: background 0.25s; }
        .community-card.anim-in { opacity: 1; }
        .community-card:hover { background: var(--pale); }
        .community-card-top { display: flex; align-items: baseline; gap: 10px; margin-bottom: 12px; }
        .community-num { font-family: var(--fh); font-size: 11px; font-weight: 700; color: var(--gold); letter-spacing: 0.08em; flex-shrink: 0; }
        .community-name { font-family: var(--fh); font-size: 15px; font-weight: 700; color: var(--ink); line-height: 1.3; letter-spacing: -0.01em; }
        .community-body { font-size: 13px; line-height: 1.72; color: var(--ink); }

        /* ══ CLOSING CTA ══ */
        .inst-cta { background: #0F1E13; padding: 88px 0; }
        .cta-inner { text-align: center; opacity: 0; max-width: 640px; margin: 0 auto; }
        .cta-inner.anim-in { opacity: 1; }
        .cta-kicker-text { font-size: 10.5px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: var(--gold); margin-bottom: 16px; display: block; }
        .cta-heading { font-family: var(--fh); font-size: clamp(28px, 3.5vw, 44px); font-weight: 800; line-height: 1.12; letter-spacing: -0.022em; color: var(--white); margin-bottom: 36px; }
        .cta-buttons { display: flex; align-items: center; justify-content: center; gap: 12px; flex-wrap: wrap; }
        .cta-btn-primary { font-family: var(--fb); font-size: 12px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: #0F1E13; background: var(--gold); border: none; padding: 14px 26px; border-radius: 3px; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s; display: inline-block; }
        .cta-btn-primary:hover { background: #d9b85c; transform: translateY(-1px); }
        .cta-btn-secondary { font-family: var(--fb); font-size: 12px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--white); background: var(--green); border: none; padding: 14px 26px; border-radius: 3px; cursor: pointer; text-decoration: none; transition: background 0.2s, transform 0.15s; display: inline-block; }
        .cta-btn-secondary:hover { background: var(--mid); transform: translateY(-1px); }
        .cta-btn-ghost { font-family: var(--fb); font-size: 12px; font-weight: 600; letter-spacing: 0.07em; text-transform: uppercase; color: var(--white); background: transparent; border: 1px solid rgba(255,255,255,0.2); padding: 13px 24px; border-radius: 3px; cursor: pointer; text-decoration: none; transition: border-color 0.2s, color 0.2s; display: inline-block; }
        .cta-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--white); }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 1024px) {
          .vm-grid { grid-template-columns: 1fr; }
          .advantage-grid { grid-template-columns: 1fr; }
          .licensing-grid { grid-template-columns: repeat(2, 1fr); }
          .community-grid { grid-template-columns: 1fr; }
          .schools-layout { grid-template-columns: 1fr; }
          .schools-tabs { flex-direction: row; flex-wrap: wrap; }
          .school-tab { flex: 1; min-width: 140px; border-right: 1px solid rgba(47,82,51,0.08); border-bottom: none; }
          .school-courses-grid { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .section-inner { padding: 0 24px; }
          .hero-inner { grid-template-columns: 1fr; gap: 36px; padding: 0 24px; }
          .hero-rule-wrap { padding: 0 24px; }
          .inst-hero { padding: 80px 0 56px; }
          .about-inst-grid { grid-template-columns: 1fr; gap: 40px; }
          .blueprints-grid { grid-template-columns: 1fr; gap: 40px; }
          .about-inst-section, .advantage-section, .formats-section,
          .community-section, .schools-section, .vision-section,
          .blueprints-section, .licensing-section, .inst-cta { padding: 64px 0; }
          .lic-note { flex-direction: column; gap: 8px; }
        }
        @media (max-width: 480px) {
          .cta-buttons { flex-direction: column; align-items: stretch; }
          .cta-btn-primary, .cta-btn-secondary, .cta-btn-ghost { text-align: center; }
          .schools-tabs { flex-direction: column; }
        }
      `}</style>

      <div className="inst-page">
        <Hero />
        <AboutInstitute />
        <VisionMission />
        <PhysicalAdvantage />
        <BankableBlueprints />
        <FourSchools />
        <DeliveryFormats />
        <InstitutionalLicensing />
        <CommunityHub />
        <ClosingCTA />
      </div>
    </>
  );
}