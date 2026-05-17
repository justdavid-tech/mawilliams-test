import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */

const PARTNER_REASONS = [
  {
    id: "01",
    title: "Verifiable Field Experience",
    body: "Every methodology we teach, structure, or deploy has been tested in live agricultural environments — not theoretical simulations or donor-only models.",
  },
  {
    id: "02",
    title: "UK Institutional Foundation",
    body: "M.A. Williams & Co. operates through a UK-registered structure designed for international governance, contracting, and long-term institutional collaboration.",
  },
  {
    id: "03",
    title: "Operational Infrastructure",
    body: "Through Lambert Willis and Gartner Callaway, we maintain active field operations, implementation capability, and local execution capacity across Nigeria.",
  },
  {
    id: "04",
    title: "Education & Knowledge Systems",
    body: "The M.A. Williams Institute allows us to transform practical agricultural intelligence into scalable educational and institutional systems.",
  },
];

const PARTNERSHIPS = [
  {
    name: "Grant & Research Partnerships",
    desc: "Collaborative research, agricultural innovation programmes, regenerative systems testing, and knowledge documentation.",
  },
  {
    name: "Programme Implementation",
    desc: "Institutional deployment partnerships for governments, NGOs, DFIs, and donor-funded agricultural transformation initiatives.",
  },
  {
    name: "Technical Assistance",
    desc: "Strategic advisory, implementation oversight, operational design, and agricultural systems architecture support.",
  },
  {
    name: "Commercial Investment",
    desc: "Joint ventures, co-investment structures, agricultural estate development, and scalable production systems.",
  },
];

const INSTITUTIONS = [
  "Development Finance Institutions",
  "International Donor Agencies",
  "Agricultural Investment Funds",
  "Research Institutions",
  "Government Agencies",
  "Private Investors",
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
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);

    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ─────────────────────────────────────────
   KICKER
───────────────────────────────────────── */

function Kicker({ label }) {
  return (
    <div className="kicker">
      <span className="kicker-pip" />
      <span className="kicker-text">{label}</span>
    </div>
  );
}

/* ─────────────────────────────────────────
   HERO
───────────────────────────────────────── */

function Hero() {
  return (
    <section className="partners-hero">
      <div className="hero-overlay" />

      <div className="section-inner hero-inner">
        <div className="hero-content">
          <Kicker label="International Partnerships" />

          <h1 className="hero-heading">
            Building the bridge between international capital and African agricultural reality.
          </h1>

          <p className="hero-sub">
            M.A. Williams & Co. partners with institutions, investors,
            development agencies, and strategic collaborators seeking
            credible, operationally grounded access to African agriculture.
          </p>

          <div className="hero-tags">
            {[
              "UK Registered",
              "Institutional Governance",
              "Operational Infrastructure",
              "Field-Tested Systems",
            ].map((tag) => (
              <span key={tag} className="hero-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   WHY PARTNER
───────────────────────────────────────── */

function WhyPartner() {
  const [ref, visible] = useInView();

  return (
    <section className="why-section" ref={ref}>
      <div className="section-inner">
        <div className={`section-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Why institutions work with us" />

          <h2 className="section-heading">
            Built for credibility.<br />
            Structured for longevity.
          </h2>

          <p className="section-sub">
            We are not intermediaries attempting to understand African
            agriculture from the outside. We are practitioners who built
            operational systems first — then institutional architecture around them.
          </p>
        </div>

        <div className="reasons-grid">
          {PARTNER_REASONS.map((item, i) => (
            <div
              key={item.id}
              className={`reason-card ${visible ? "anim-in" : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <span className="reason-num">{item.id}</span>

              <h3 className="reason-title">{item.title}</h3>

              <p className="reason-body">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   PARTNERSHIP TYPES
───────────────────────────────────────── */

function PartnershipTypes() {
  const [ref, visible] = useInView();

  return (
    <section className="types-section" ref={ref}>
      <div className="section-inner">
        <div className={`section-header ${visible ? "anim-in" : ""}`}>
          <Kicker label="Partnership models" />

          <h2 className="section-heading light">
            How we collaborate
          </h2>
        </div>

        <div className="types-grid">
          {PARTNERSHIPS.map((item, i) => (
            <div
              key={item.name}
              className={`type-card ${visible ? "anim-in" : ""}`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <h3 className="type-title">{item.name}</h3>

              <p className="type-body">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   INSTITUTIONS
───────────────────────────────────────── */

function Institutions() {
  const [ref, visible] = useInView();

  return (
    <section className="institutions-section" ref={ref}>
      <div className="section-inner">
        <div className={`institutions-inner ${visible ? "anim-in" : ""}`}>
          <Kicker label="Who we work with" />

          <h2 className="section-heading">
            Institutional alignment matters.
          </h2>

          <div className="institutions-grid">
            {INSTITUTIONS.map((item) => (
              <div key={item} className="institution-pill">
                {item}
              </div>
            ))}
          </div>
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
    <section className="partners-cta" ref={ref}>
      <div className="section-inner">
        <div className={`cta-inner ${visible ? "anim-in" : ""}`}>
          <p className="cta-kicker">
            Partnership enquiries
          </p>

          <h2 className="cta-heading">
            The opportunity is not simply investment.
            <br />
            It is infrastructure with intelligence behind it.
          </h2>

          <div className="cta-buttons">
            <a href="/contact" className="btn-primary">
              Contact Us
            </a>

            <a href="/gateway" className="btn-secondary">
              Gateway Consulting
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ROOT
───────────────────────────────────────── */

export default function Partners() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        :root {
          --deep: #1E3622;
          --green: #2F5233;
          --mid: #3D6B42;
          --gold: #C9A84C;
          --pale: #EBF2EB;
          --ink: #1A1A18;
          --muted: #7A7A74;
          --cream: #FAF8F4;
          --white: #FFFFFF;

          --fh: "M PLUS U", sans-serif;
          --fb: "Work Sans", sans-serif;
        }

        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        body {
          background: var(--cream);
          color: var(--ink);
          font-family: var(--fb);
        }

        .section-inner {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 48px;
        }

        .anim-in {
          animation: fadeUp 0.7s ease both;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: none;
          }
        }

        .kicker {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .kicker-pip {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: var(--gold);
        }

        .kicker-text {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .section-heading {
          font-family: var(--fh);
          font-size: clamp(30px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 16px;
        }

        .section-heading.light {
          color: var(--white);
        }

        .section-sub {
          max-width: 620px;
          font-size: 15px;
          line-height: 1.8;
          color: var(--ink);
        }

        /* HERO */

        .partners-hero {
          min-height: 92vh;
          background:
            linear-gradient(rgba(30,54,34,0.88), rgba(30,54,34,0.88)),
            url('/assets/hero-image (2).jpg');
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: center;
        }

        .hero-inner {
          position: relative;
          z-index: 2;
        }

        .hero-content {
          max-width: 760px;
        }

        .hero-heading {
          font-family: var(--fh);
          font-size: clamp(38px, 5vw, 68px);
          line-height: 1.05;
          font-weight: 800;
          color: var(--white);
          letter-spacing: -0.04em;
          margin-bottom: 22px;
        }

        .hero-sub {
          font-size: 16px;
          line-height: 1.9;
          color: rgba(255,255,255,0.7);
          max-width: 640px;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 32px;
        }

        .hero-tag {
          border: 1px solid rgba(201,168,76,0.28);
          color: var(--gold);
          padding: 8px 14px;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        /* WHY */

        .why-section {
          padding: 110px 0;
          background: var(--cream);
        }

        .section-header {
          margin-bottom: 54px;
        }

        .reasons-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1px;
          background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
        }

        .reason-card {
          background: var(--white);
          padding: 36px;
          opacity: 0;
          transition: background 0.2s ease;
        }

        .reason-card:hover {
          background: var(--pale);
        }

        .reason-num {
          font-size: 11px;
          font-weight: 700;
          color: var(--gold);
          letter-spacing: 0.1em;
          margin-bottom: 16px;
          display: block;
        }

        .reason-title {
          font-family: var(--fh);
          font-size: 22px;
          margin-bottom: 14px;
        }

        .reason-body {
          font-size: 14px;
          line-height: 1.8;
          color: var(--ink);
        }

        /* TYPES */

        .types-section {
          padding: 110px 0;
          background: var(--deep);
        }

        .types-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          margin-top: 52px;
        }

        .type-card {
          border: 1px solid rgba(255,255,255,0.08);
          padding: 32px;
          background: rgba(255,255,255,0.03);
          opacity: 0;
        }

        .type-title {
          font-family: var(--fh);
          font-size: 24px;
          color: var(--white);
          margin-bottom: 14px;
        }

        .type-body {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255,255,255,0.58);
        }

        /* INSTITUTIONS */

        .institutions-section {
          padding: 110px 0;
          background: var(--cream);
        }

        .institutions-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 34px;
        }

        .institution-pill {
          padding: 14px 18px;
          background: var(--white);
          border: 1px solid rgba(47,82,51,0.12);
          font-size: 13px;
          font-weight: 600;
          color: var(--green);
        }

        /* CTA */

        .partners-cta {
          background: #101B13;
          padding: 110px 0;
        }

        .cta-inner {
          text-align: center;
          max-width: 760px;
          margin: 0 auto;
          opacity: 0;
        }

        .cta-kicker {
          color: var(--gold);
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-size: 11px;
          margin-bottom: 16px;
          font-weight: 700;
        }

        .cta-heading {
          font-family: var(--fh);
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1.15;
          color: var(--white);
          margin-bottom: 34px;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
        }

        .btn-primary,
        .btn-secondary {
          text-decoration: none;
          padding: 15px 28px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
          transition: 0.2s ease;
        }

        .btn-primary {
          background: var(--gold);
          color: var(--deep);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
        }

        .btn-secondary {
          border: 1px solid rgba(255,255,255,0.2);
          color: var(--white);
        }

        .btn-secondary:hover {
          border-color: rgba(255,255,255,0.5);
        }

        /* RESPONSIVE */

        @media (max-width: 900px) {
          .reasons-grid,
          .types-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 768px) {
          .section-inner {
            padding: 0 24px;
          }

          .partners-hero,
          .why-section,
          .types-section,
          .institutions-section,
          .partners-cta {
            padding: 80px 0;
          }

          .hero-heading {
            font-size: 42px;
          }
        }

        @media (max-width: 480px) {
          .cta-buttons {
            flex-direction: column;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            text-align: center;
          }
        }
      `}</style>

      <Hero />
      <WhyPartner />
      <PartnershipTypes />
      <Institutions />
      <ClosingCTA />
    </>
  );
}