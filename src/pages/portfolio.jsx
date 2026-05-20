import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const GROUP_ENTITIES = [
  {
    id: "maw",
    num: "01",
    role: "The Architect",
    name: "M.A. Williams & Co.",
    hq: "London, UK",
    type: "International Family Office",
    desc: "The apex of the group. Holds the IP, owns the Institute, governs the brand, contracts internationally, and provides the gateway consulting practice. UK-registered under English law.",
    pillars: ["IP & Trademarks", "M.A. Williams Institute", "Gateway Consulting", "International Contracting"],
    accent: "#C9A84C",
  },
  {
    id: "lw",
    num: "02",
    role: "The Active African Arm",
    name: "Lambert Willis Nigeria",
    hq: "Lagos, Nigeria",
    type: "African Family Office",
    desc: "Holds Nigerian land, property, and local investments. Acts as M.A. Williams' proxy in every African venture, providing local shareholding, directorship, and full representation under Nigerian law.",
    pillars: ["Land Holdings", "Local Investments", "Proxy Directorship", "Land Use Act Navigation"],
    accent: "#3D6B42",
  },
  {
    id: "gc",
    num: "03",
    role: "The Operator",
    name: "Gartner Callaway Group",
    hq: "Nigeria",
    type: "Three-Entity Sub-Group",
    desc: "GC Global (HoldCo) · GC Sustainability (institutional agribusiness services) · GC Fruit & Veg Farms (commercial production and processing). Winner of the Entrepreneur Africa Prize for Innovation, 2018.",
    pillars: ["GC Global HoldCo", "GC Sustainability", "GC Fruit & Veg Farms", "Award: Entrepreneur Africa Prize 2018"],
    accent: "#2F5233",
  },
  {
    id: "Shaishen Foods - Hibiscus Estate JV",
    num: "04",
    role: "The Consumer Brand",
    name: "Shaishen Foods - Hibiscus Estate JV",
    hq: "Nigeria · UK",
    type: "Agricultural Brand",
    desc: "The consumer-facing brand for the group's premium agricultural products, including hibiscus calyces, cold-pressed seed oil, and processed produce destined for UK and EU markets.",
    pillars: ["Hibiscus Products", "Cold-Pressed Oils", "UK & EU Export", "Premium Positioning"],
    accent: "#C9A84C",
  },
  {
    id: "ezgro",
    num: "05",
    role: "The Access Brand",
    name: "EZ Gro Garden",
    hq: "Nigeria",
    type: "Agricultural Brand",
    desc: "The group's entry-level agricultural brand, making quality growing inputs, guidance, and practice accessible to smallholder farmers, homesteaders, and urban growers across Nigeria.",
    pillars: ["Smallholder Focus", "Urban Growing", "Input Accessibility", "Nigeria-Wide"],
    accent: "#3D6B42",
  },
];

const HIBISCUS_SPECS = [
  { label: "Scale", value: "200 hectares" },
  { label: "Location", value: "Ogun State, Nigeria" },
  { label: "Model", value: "Regenerative agroforestry JV" },
  { label: "Irrigation", value: "Centre-pivot & drip systems" },
  { label: "Sensing", value: "CropX multi-depth soil sensors" },
  { label: "Management", value: "Agrivi farm management platform" },
  { label: "Energy", value: "Solar infrastructure" },
  { label: "Primary product", value: "Dried hibiscus calyces" },
  { label: "Secondary product", value: "Cold-pressed hibiscus seed oil" },
  { label: "Consumer brand", value: "Shaishen Foods - Hibiscus Estate JV" },
  { label: "Export markets", value: "United Kingdom, European Union" },
];

const VERTICAL_SPECS = [
  { label: "Period", value: "2017 – 2021" },
  { label: "Installations", value: "Five urban vertical farms" },
  { label: "Location", value: "Lagos, Nigeria" },
  { label: "Technology", value: "Automated hydroponic systems" },
  { label: "Achievement", value: "First automated hydroponic farms in Africa" },
  { label: "Integration", value: "Nigeria's first restaurant-integrated grow system" },
  { label: "Impact", value: "50% reduction in water usage vs. conventional" },
  { label: "Training output", value: "First cohort of trained Nigerian hydroponic practitioners" },
  { label: "IP status", value: "Methodology now embedded in Institute curriculum" },
];

/* ─────────────────────────────────────────
   HOOK: IntersectionObserver
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
    <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 14 }}>
      <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#C9A84C", flexShrink: 0, display: "block" }} aria-hidden="true" />
      <span style={{
        fontSize: 10.5, fontWeight: 700, letterSpacing: "0.13em",
        textTransform: "uppercase",
        color: light ? "rgba(201,168,76,0.9)" : "#2F5233",
      }}>{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   SECTION 1: HERO
───────────────────────────────────────── */
function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="port-hero" aria-labelledby="port-hero-h">
      <div className="port-hero-geo-1" aria-hidden="true" />
      <div className="port-hero-geo-2" aria-hidden="true" />
      <div className="port-dot-grid" aria-hidden="true">
        {Array.from({ length: 56 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="port-inner port-hero-inner">
        <div className={`port-hero-left ${vis ? "vis-up" : ""}`}>
          <Kicker label="Portfolio & Brands" light />
          <h1 className="port-hero-h1" id="port-hero-h">
            One Architect<br />One Vision<br />
            <span className="port-hero-accent">Six expressions</span>
          </h1>
        </div>

        <div className={`port-hero-right ${vis ? "vis-right" : ""}`}>
          <p className="port-hero-body">
            The M.A. Williams Group is not a collection of separate businesses. It is a single ecosystem deliberately designed so that each entity reinforces every other. The IP lives at the top. The assets are held in Africa. The services are delivered through the operator. The knowledge is exported through the Institute.
          </p>
          <p className="port-hero-body">
            What you see in this portfolio is not a list of projects. It is the architecture of a generational institution built over three decades, stress-tested in the field, and structured to outlast any single venture.
          </p>
          <div className="port-hero-stats">
            {[
              ["30+", "Years in the field"],
              ["200ha", "Live production estate"],
              ["5", "Active brands"],
              ["3", "Countries of operation"],
            ].map(([n, l]) => (
              <div key={l} className="port-hero-stat">
                <span className="port-hero-stat-n">{n}</span>
                <span className="port-hero-stat-l">{l}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="port-inner" style={{ paddingBottom: 0 }}>
        <div className="port-hero-rule" aria-hidden="true" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 2: THE GROUP (5 entities)
───────────────────────────────────────── */
function TheGroup() {
  const [ref, vis] = useInView();

  return (
    <section className="port-group-section" ref={ref} aria-labelledby="port-group-h">
      <div className="port-inner">
        <div className={`port-section-header ${vis ? "vis-up" : ""}`}>
          <Kicker label="The group" />
          <h2 className="port-section-h" id="port-group-h">The Ecosystem</h2>
          <p className="port-section-sub">
            Five entities. One strategy. Each is distinct in its legal registration, purpose, and operating scope and each is inseparable from the others in function.
          </p>
        </div>

        {/* Large featured card — MAW */}
        <div className={`port-entity-featured ${vis ? "vis-up" : ""}`} style={{ animationDelay: "0.1s" }}>
          <div className="pef-left">
            <span className="pef-num">01</span>
            <div>
              <span className="pef-role">The Architect</span>
              <h3 className="pef-name">M.A. Williams & Co.</h3>
              <span className="pef-hq">London, United Kingdom · UK Registered</span>
            </div>
          </div>
          <div className="pef-right">
            <p className="pef-desc">
              The apex entity of the group. M.A. Williams & Co. holds the trademarks, proprietary methodologies, and curriculum frameworks that every operating entity runs on. It owns the Institute. It runs the Gateway Consulting practice. It contracts internationally with donors and DFIs. It is the institutional expression of Yomi Williams's life's work structured for longevity, governed under English law.
            </p>
            <div className="pef-tags">
              {["IP & Trademarks", "M.A. Williams Institute", "Gateway Consulting", "International Contracting", "Family Office"].map(t => (
                <span key={t} className="pef-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>

        {/* 2×2 grid — remaining entities */}
        <div className="port-entity-grid">
          {GROUP_ENTITIES.slice(1).map((e, i) => (
            <div
              key={e.id}
              className={`port-entity-card ${vis ? "vis-up" : ""}`}
              style={{ animationDelay: `${0.15 + 0.08 * i}s` }}
            >
              <div className="pec-head">
                <span className="pec-num">{e.num}</span>
                <span className="pec-hq">{e.hq}</span>
              </div>
              <span className="pec-role">{e.role}</span>
              <h3 className="pec-name">{e.name}</h3>
              <span className="pec-type">{e.type}</span>
              <p className="pec-desc">{e.desc}</p>
              <div className="pec-pills">
                {e.pillars.map(p => <span key={p} className="pec-pill">{p}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3: HIBISCUS ESTATE (Featured)
───────────────────────────────────────── */
function HibiscusEstate() {
  const [ref, vis] = useInView();

  return (
    <section className="port-venture-section port-hibiscus" ref={ref} aria-labelledby="port-hib-h">
      <div className="port-inner">
        <div className={`port-venture-header ${vis ? "vis-up" : ""}`}>
          <div className="port-venture-header-left">
            <Kicker label="Featured venture" light />
            <div className="port-venture-label-row">
              <span className="port-venture-label">01</span>
              <span className="port-venture-label-sep" aria-hidden="true">—</span>
              <span className="port-venture-label">Hibiscus Estate JV</span>
            </div>
            <h2 className="port-venture-h" id="port-hib-h">
              200 hectares.<br />One regenerative vision.
            </h2>
          </div>
          <div className={`port-venture-header-right ${vis ? "vis-right" : ""}`}>
            <p className="port-venture-body">
              The Hibiscus Estate is a joint-venture 200-hectare regenerative agroforestry estate in Ogun State, Nigeria. It is the living proof of every methodology the group teaches, licences, and deploys. It is not a demonstration farm. It is a commercial operation producing, processing, and exporting premium hibiscus products to the UK and EU under the Shaishen Foods brand.
            </p>
            <p className="port-venture-body">
              The estate integrates centre-pivot irrigation, precision CropX multi-depth soil sensing, Agrivi farm management software, and solar energy infrastructure across its full 200 hectares making it one of the most technically advanced regenerative agroforestry operations in West Africa.
            </p>
            <blockquote className="port-venture-quote">
              <p>"The farm is the curriculum. Every system on this estate is a live case study for our students, for our partners, and for the world that is beginning to understand what African agriculture is actually capable of."</p>
              <cite>— Yomi Williams</cite>
            </blockquote>
          </div>
        </div>

        {/* Spec grid */}
        <div className={`port-spec-grid ${vis ? "vis-up" : ""}`} style={{ animationDelay: "0.2s" }}>
          {HIBISCUS_SPECS.map((s, i) => (
            <div key={s.label} className="port-spec-item">
              <span className="port-spec-label">{s.label}</span>
              <span className="port-spec-value">{s.value}</span>
            </div>
          ))}
        </div>

        {/* Value chain strip */}
        <div className={`port-chain ${vis ? "vis-up" : ""}`} style={{ animationDelay: "0.3s" }}>
          <p className="port-chain-label">Value chain</p>
          <div className="port-chain-steps">
            {[
              "Regenerative cultivation",
              "CropX precision sensing",
              "Pivot & drip irrigation",
              "Commercial harvest",
              "On-estate processing",
              "Shaishen Foods branding",
              "UK & EU export",
            ].map((step, i, arr) => (
              <div key={step} className="port-chain-step-wrap">
                <span className="port-chain-step">{step}</span>
                {i < arr.length - 1 && <span className="port-chain-arrow" aria-hidden="true">→</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4: URBAN VERTICAL HYDROPONICS
───────────────────────────────────────── */
function VerticalFarms() {
  const [ref, vis] = useInView();

  return (
    <section className="port-venture-section port-vertical" ref={ref} aria-labelledby="port-vert-h">
      <div className="port-inner">
        <div className="port-venture-header">
          <div className={`port-venture-header-left ${vis ? "vis-up" : ""}`}>
            <Kicker label="Featured venture" />
            <div className="port-venture-label-row" style={{ color: "#2F5233" }}>
              <span className="port-venture-label" style={{ color: "#2F5233" }}>02</span>
              <span className="port-venture-label-sep" style={{ color: "#2F5233" }} aria-hidden="true">—</span>
              <span className="port-venture-label" style={{ color: "#2F5233" }}>Urban Vertical Hydroponics</span>
            </div>
            <h2 className="port-venture-h port-venture-h-dark" id="port-vert-h">
              Africa's first.<br />Still the standard.
            </h2>
          </div>
          <div className={`port-venture-header-right ${vis ? "vis-right" : ""}`}>
            <p className="port-venture-body port-venture-body-dark">
              Between 2017 and 2021, Yomi Williams designed and deployed five automated hydroponic urban vertical farms across Lagos, becoming Africa's pioneer in commercial urban controlled-environment agriculture. These were not pilots. They were fully operational commercial installations, each purpose-built for its location and market.
            </p>
            <p className="port-venture-body port-venture-body-dark">
              One installation was Nigeria's first restaurant-integrated grow system fresh produce grown on-site for direct kitchen use, eliminating the supply chain between farm and plate. Water consumption was reduced by 50% against conventional field production.
            </p>
            <p className="port-venture-body port-venture-body-dark">
              The technical knowledge from these installations did not sit in a filing cabinet. It became the foundation of the Greenhouse & Controlled Environment module in the M.A. Williams Institute's Production Systems school making it available to every future practitioner on the platform.
            </p>
          </div>
        </div>

        {/* Spec grid + IP note side by side */}
        <div className={`port-vert-body ${vis ? "vis-up" : ""}`} style={{ animationDelay: "0.18s" }}>
          <div className="port-spec-grid port-spec-grid-dark">
            {VERTICAL_SPECS.map(s => (
              <div key={s.label} className="port-spec-item port-spec-item-dark">
                <span className="port-spec-label port-spec-label-dark">{s.label}</span>
                <span className="port-spec-value port-spec-value-dark">{s.value}</span>
              </div>
            ))}
          </div>

    
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 5: CLOSING CTA
───────────────────────────────────────── */
function ClosingCTA() {
  const [ref, vis] = useInView();
  return (
    <section className="port-cta" ref={ref} aria-labelledby="port-cta-h">
      <div className="port-inner">
        <div className={`port-cta-inner ${vis ? "vis-up" : ""}`}>
          <Kicker label="Engage with the group" light />
          <h2 className="port-cta-h" id="port-cta-h">
            The proof is in the estate.<br />The knowledge is in the Institute.<br />
            <span style={{ color: "#C9A84C" }}>The gateway is open.</span>
          </h2>
          <p className="port-cta-body">
            Whether you are a foreign business seeking structured market entry, a donor or DFI looking for a credible implementation partner, or a practitioner who wants to learn what was built here, the structure exists to serve you.
          </p>
          <div className="port-cta-btns">
            <a href="/gateway" className="pcta-btn-gold">Gateway Consulting</a>
            <a href="/institute" className="pcta-btn-green">Explore the Institute</a>
            <a href="/contact" className="pcta-btn-ghost">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ROOT + ALL STYLES
───────────────────────────────────────── */
export default function Portfolio() {
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

        .portfolio-page { font-family: var(--fb); background: var(--cream); color: var(--ink); overflow-x: hidden; }

        /* ── ANIMATIONS ── */
        .vis-up    { animation: fadeUp   0.65s ease both; }
        .vis-right { animation: fadeRight 0.65s ease both; }

        @keyframes fadeUp    { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:none; } }
        @keyframes fadeRight { from { opacity:0; transform:translateX(22px); } to { opacity:1; transform:none; } }

        /* ── SHARED ── */
        .port-inner { max-width:1160px; margin:0 auto; padding:0 48px; }

        .port-section-header { margin-bottom: 48px; }
        .port-section-h {
          font-family: var(--fh); font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.02em;
          color: var(--ink); margin-bottom: 12px;
        }
        .port-section-sub {
          font-size: 15px; line-height: 1.75; color: var(--ink); max-width: 560px;
        }

        /* ══════════════════════════════
           HERO
        ══════════════════════════════ */
        .port-hero {
          background: var(--deep); padding: 120px 0 64px;
          position: relative; overflow: hidden;
        }
        .port-hero-geo-1 {
          position:absolute; top:-100px; right:-100px;
          width:420px; height:420px; border-radius:50%;
          background:radial-gradient(circle, rgba(61,107,66,0.35) 0%, transparent 70%);
          pointer-events:none;
        }
        .port-hero-geo-2 {
          position:absolute; bottom:-80px; left:-60px;
          width:300px; height:300px; border-radius:50%;
          background:radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
          pointer-events:none;
        }
        .port-dot-grid {
          position:absolute; top:40px; right:40px;
          display:grid; grid-template-columns:repeat(8,8px);
          gap:8px; opacity:0.15; pointer-events:none;
        }
        .port-dot-grid span { width:3px; height:3px; border-radius:50%; background:var(--gold); display:block; }

        .port-hero-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
          padding-bottom: 56px;
          position: relative; z-index: 1;
        }
        .port-hero-left { opacity:0; }
        .port-hero-left.vis-up { opacity:1; }

        .port-hero-h1 {
          font-family: var(--fh); font-size: clamp(36px, 4.2vw, 58px);
          font-weight: 800; line-height: 1.08; letter-spacing: -0.025em;
          color: var(--white); margin-bottom: 0;
        }
        .port-hero-accent { color: var(--gold); }

        .port-hero-right { opacity:0; }
        .port-hero-right.vis-right { opacity:1; }
        .port-hero-body {
          font-size: 14.5px; line-height: 1.78;
          color: var(--white); margin-bottom: 14px;
        }

        .port-hero-stats {
          display: flex; gap: 0;
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px; overflow: hidden; margin-top: 28px;
        }
        .port-hero-stat {
          flex: 1; padding: 18px 16px; text-align: center;
          border-right: 1px solid rgba(201,168,76,0.2);
          display: flex; flex-direction: column; gap: 4px;
        }
        .port-hero-stat:last-child { border-right: none; }
        .port-hero-stat-n {
          font-family: var(--fh); font-size: 22px; font-weight: 800;
          color: var(--gold); line-height: 1;
        }
        .port-hero-stat-l {
          font-size: 10px; font-weight: 500; letter-spacing: 0.07em;
          text-transform: uppercase; color: var(--white);
        }

        .port-hero-rule {
          height: 1px; margin-top: 0;
          background: linear-gradient(90deg, var(--gold), rgba(201,168,76,0.08));
          opacity: 0.45;
        }

        /* ══════════════════════════════
           GROUP / ECOSYSTEM
        ══════════════════════════════ */
        .port-group-section { background: var(--cream); padding: 88px 0 80px; }

        /* Featured card */
        .port-entity-featured {
          background: var(--deep); border-radius: 6px;
          padding: 36px 36px; margin-bottom: 1px;
          display: grid; grid-template-columns: 200px 1fr;
          gap: 40px; align-items: start;
          opacity: 0;
          border-bottom: none;
        }
        .port-entity-featured.vis-up { opacity: 1; }

        .pef-left { display: flex; gap: 16px; align-items: flex-start; }
        .pef-num {
          font-family: var(--fh); font-size: 13px; font-weight: 700;
          color: var(--gold); letter-spacing: 0.08em; flex-shrink: 0; padding-top: 4px;
        }
        .pef-role {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: rgba(201,168,76,0.7);
          display: block; margin-bottom: 6px;
        }
        .pef-name {
          font-family: var(--fh); font-size: 18px; font-weight: 800;
          color: var(--white); margin-bottom: 5px; line-height: 1.2;
        }
        .pef-hq {
          font-size: 11px; color: var(--white);
          letter-spacing: 0.05em;
        }

        .pef-desc {
          font-size: 14px; line-height: 1.78;
          color: var(--white); margin-bottom: 16px;
        }
        .pef-tags { display: flex; flex-wrap: wrap; gap: 6px; }
        .pef-tag {
          font-size: 10.5px; font-weight: 600; letter-spacing: 0.05em;
          padding: 4px 11px; border-radius: 3px;
          border: 1px solid rgba(201,168,76,0.28);
          color: rgba(201,168,76,0.7);
        }

        /* 2×2 entity grid */
        .port-entity-grid {
          display: grid; grid-template-columns: repeat(2, 1fr);
          gap: 1px; background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-top: none; border-radius: 0 0 6px 6px;
          overflow: hidden; margin-bottom: 0;
        }

        .port-entity-card {
          background: var(--white); padding: 28px 26px;
          opacity: 0; transition: background 0.25s;
        }
        .port-entity-card.vis-up { opacity: 1; }
        .port-entity-card:hover { background: var(--pale); }

        .pec-head {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 14px;
        }
        .pec-num {
          font-family: var(--fh); font-size: 11px; font-weight: 700;
          color: var(--gold); letter-spacing: 0.08em;
        }
        .pec-hq {
          font-size: 10px; font-weight: 500; letter-spacing: 0.07em;
          text-transform: uppercase; color: var(--ink);
          border: 1px solid rgba(47,82,51,0.15);
          padding: 3px 9px; border-radius: 2px;
        }
        .pec-role {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--green);
          display: block; margin-bottom: 5px;
        }
        .pec-name {
          font-family: var(--fh); font-size: 17px; font-weight: 700;
          color: var(--ink); margin-bottom: 4px; line-height: 1.25;
        }
        .pec-type {
          font-size: 11px; color: var(--ink); letter-spacing: 0.04em;
          display: block; margin-bottom: 12px;
        }
        .pec-desc {
          font-size: 13px; line-height: 1.72; color: var(--ink); margin-bottom: 14px;
        }
        .pec-pills { display: flex; flex-wrap: wrap; gap: 5px; }
        .pec-pill {
          font-size: 10px; font-weight: 500; letter-spacing: 0.04em;
          padding: 3px 9px; border-radius: 3px;
          border: 1px solid rgba(47,82,51,0.18); color: var(--ink);
        }

        /* ══════════════════════════════
           VENTURE SECTIONS (shared)
        ══════════════════════════════ */
        .port-venture-section { padding: 88px 0 80px; }
        .port-hibiscus { background: var(--deep); }
        .port-vertical { background: var(--cream); }

        .port-venture-header {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: start; margin-bottom: 48px;
        }
        .port-venture-header-left { opacity: 0; }
        .port-venture-header-left.vis-up { opacity: 1; }
        .port-venture-header-right { opacity: 0; }
        .port-venture-header-right.vis-right { opacity: 1; }

        .port-venture-label-row {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 16px;
        }
        .port-venture-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: rgba(201,168,76,0.8);
        }
        .port-venture-label-sep { color: rgba(201,168,76,0.4); }

        .port-venture-h {
          font-family: var(--fh); font-size: clamp(28px, 3.2vw, 44px);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.022em;
          color: var(--white);
        }
        .port-venture-h-dark { color: var(--ink); }

        .port-venture-body {
          font-size: 14px; line-height: 1.78;
          color: var(--white); margin-bottom: 14px;
        }
        .port-venture-body-dark { color: var(--ink); }

        .port-venture-quote {
          border-left: 2px solid var(--gold);
          padding: 9px 0 9px 16px; margin-top: 20px;
        }
        .port-venture-quote p {
          font-size: 13px; font-style: italic; line-height: 1.72;
          color: var(--white); margin-bottom: 6px;
        }
        .port-venture-quote cite {
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--gold); font-style: normal;
        }

        /* Spec grid */
        .port-spec-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: rgba(201,168,76,0.18);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 6px; overflow: hidden;
          margin-bottom: 28px; opacity: 0;
        }
        .port-spec-grid.vis-up { opacity: 1; }
        .port-spec-grid-dark {
          background: rgba(47,82,51,0.12);
          border-color: rgba(47,82,51,0.15);
          flex: 1;
        }

        .port-spec-item {
          background: rgba(255,255,255,0.04);
          padding: 16px 18px;
          display: flex; flex-direction: column; gap: 5px;
        }
        .port-spec-item-dark { background: var(--white); }
        .port-spec-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--gold);
        }
        .port-spec-label-dark { color: var(--green); }
        .port-spec-value {
          font-size: 13px; font-weight: 500; line-height: 1.5;
          color: rgba(255,255,255,0.75);
        }
        .port-spec-value-dark { color: var(--ink); }

        /* Value chain */
        .port-chain { opacity: 0; }
        .port-chain.vis-up { opacity: 1; }
        .port-chain-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 12px;
        }
        .port-chain-steps {
          display: flex; flex-wrap: wrap; align-items: center; gap: 6px;
          padding: 20px 24px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 4px;
        }
        .port-chain-step-wrap { display: flex; align-items: center; gap: 6px; }
        .port-chain-step {
          font-size: 12px; font-weight: 500; letter-spacing: 0.03em;
          color: rgba(255,255,255,0.65);
          padding: 5px 12px; border-radius: 3px;
          border: 1px solid rgba(201,168,76,0.2);
        }
        .port-chain-arrow { color: var(--gold); font-size: 13px; opacity: 0.5; }

        /* Vertical farms — two-col body */
        .port-vert-body {
          display: grid; grid-template-columns: 2fr 1fr;
          gap: 28px; opacity: 0;
        }
        .port-vert-body.vis-up { opacity: 1; }

        .port-ip-note {
          background: var(--pale);
          border: 1px solid rgba(47,82,51,0.15);
          border-left: 3px solid var(--green);
          border-radius: 4px; padding: 22px 20px;
          align-self: start;
        }
        .port-ip-note-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--green); margin-bottom: 10px;
        }
        .port-ip-note-body {
          font-size: 12.5px; line-height: 1.72; color: var(--ink);
        }

        /* ══════════════════════════════
           CLOSING CTA
        ══════════════════════════════ */
        .port-cta { background: #0F1E13; padding: 88px 0; }
        .port-cta-inner { opacity: 0; max-width: 700px; }
        .port-cta-inner.vis-up { opacity: 1; }

        .port-cta-h {
          font-family: var(--fh); font-size: clamp(28px, 3.5vw, 46px);
          font-weight: 800; line-height: 1.12; letter-spacing: -0.022em;
          color: var(--white); margin-bottom: 18px;
        }
        .port-cta-body {
          font-size: 15px; line-height: 1.75;
          color: white; margin-bottom: 36px; max-width: 560px;
        }
        .port-cta-btns { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }

        .pcta-btn-gold {
          font-family: var(--fb); font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #0F1E13; background: var(--gold);
          border: none; padding: 14px 26px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: background .2s, transform .15s;
        }
        .pcta-btn-gold:hover { background: #d9b85c; transform: translateY(-1px); }
        .pcta-btn-green {
          font-family: var(--fb); font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white); background: var(--green);
          border: none; padding: 14px 26px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: background .2s, transform .15s;
        }
        .pcta-btn-green:hover { background: var(--mid); transform: translateY(-1px); }
        .pcta-btn-ghost {
          font-family: var(--fb); font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white);
          border: 1px solid rgba(255,255,255,0.2); background: transparent;
          padding: 13px 24px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: border-color .2s, color .2s;
        }
        .pcta-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--white); }

        /* ══════════════════════════════
           RESPONSIVE
        ══════════════════════════════ */
        @media (max-width: 1024px) {
          .port-entity-grid { grid-template-columns: 1fr; }
          .port-spec-grid { grid-template-columns: repeat(2, 1fr); }
          .port-vert-body { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .port-inner { padding: 0 24px; }
          .port-hero-inner { grid-template-columns: 1fr; gap: 36px; }
          .port-hero, .port-venture-section, .port-group-section, .port-cta { padding: 64px 0; }
          .port-venture-header { grid-template-columns: 1fr; gap: 36px; }
          .port-entity-featured { grid-template-columns: 1fr; gap: 24px; }
          .port-chain-steps { flex-direction: column; align-items: flex-start; }
        }
        @media (max-width: 480px) {
          .port-hero-stats { flex-wrap: wrap; }
          .port-hero-stat { min-width: 50%; border-bottom: 1px solid rgba(201,168,76,0.2); }
          .port-cta-btns { flex-direction: column; align-items: stretch; }
          .pcta-btn-gold, .pcta-btn-green, .pcta-btn-ghost { text-align: center; }
        }
      `}</style>

      <div className="portfolio-page">
        <Hero />
        <TheGroup />
        <HibiscusEstate />
        <VerticalFarms />
        <ClosingCTA />
      </div>
    </>
  );
}