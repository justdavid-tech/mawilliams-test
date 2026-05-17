import {
  ShieldCheck,
  GraduationCap,
  Globe2,
  Landmark,
  Layers3,
  ArrowUpRight,
} from "lucide-react";

const FUNCTIONS = [
  {
    num: "01",
    icon: ShieldCheck,
    title: "IP & Brand Stewardship",
    body: "We own and protect the intellectual assets that give the group its competitive advantage trademarks, proprietary methodologies, SOP libraries, curriculum frameworks, and technology licensing agreements. The knowledge that Gartner Callaway deploys in the field, the curriculum the Institute teaches, and the brand equity carried by every entity in the group are held and governed here.",
    tags: [
      "Trademarks",
      "Proprietary SOPs",
      "Curriculum frameworks",
      "Technology licensing",
    ],
    quote: null,
    cta: null,
  },
  {
    num: "02",
    icon: GraduationCap,
    title: "Agricultural Education",
    body: "The M.A. Williams Institute is our primary institutional offering a digital-first, practitioner-led education platform that bridges the gap between agricultural theory and commercial execution. Every course is grounded in real outcomes from real farms. Every student has access to the Physical Advantage™ of growing facilities within the group's portfolio.",
    tags: [
      "Digital curriculum",
      "Physical Advantage™",
      "Bankable Blueprints™",
      "Institutional licensing",
    ],
    quote: {
      text: "For agriculture to truly transform a continent, it must be taught by those who have stood in the field, made the mistakes, rebuilt from them, and developed systems that survive contact with African reality.",
      attr: "Yomi Williams",
    },
    cta: null,
  },
  {
    num: "03",
    icon: Globe2,
    title: "Gateway Consulting",
    body: "We provide high-level strategic advisory to foreign businesses seeking structured, credible entry into African markets. Three decades of operational experience, an active institutional network, and a multi-entity group structure built and stress-tested in Nigeria give M.A. Williams a perspective that no management consultancy, law firm, or development agency can replicate. Where conviction aligns, we invest alongside our clients.",
    tags: [
      "Market entry structuring",
      "Strategic advisory",
      "Co-investment",
      "Africa-bound capital",
    ],
    quote: null,
    cta: {
      label: "Explore Gateway Consulting",
      href: "/gateway",
    },
  },
  {
    num: "04",
    icon: Landmark,
    title: "International Partnerships",
    body: "As a UK-registered entity with a documented operational record across West Africa, M.A. Williams & Co. is the natural counterparty for international donors, DFIs, and global programme partners. We receive grants, execute programme contracts, and develop international partnerships channelling resources into field delivery through the operating entities in the group.",
    tags: [
      "USAID · GIZ · IFAD",
      "Gates Foundation · FCDO",
      "AfDB · World Bank · AGRA",
      "UK registered · English law",
    ],
    quote: null,
    cta: null,
  },
  {
    num: "05",
    icon: Layers3,
    title: "Group Architecture & Legacy",
    body: "M.A. Williams & Co. is the apex of a multi-entity group built for longevity, not convenience. Lambert Willis holds the African assets and represents M.A. Williams in every African venture. Gartner Callaway delivers the services. The Institute disseminates the knowledge. M.A. Williams holds the architecture together protecting the IP, anchoring the brand, and ensuring that the intellectual work of a lifetime outlasts any single venture.",
    tags: [
      "Lambert Willis",
      "Gartner Callaway",
      "M.A. Williams Institute",
      "Hibiscus Estate JV",
    ],
    quote: {
      text: "I am not building businesses. I am building a structure where knowledge is protected, land is secured, and impact is delivered in that order because that sequence determines whether what we build lasts a decade or a century.",
      attr: "Yomi Williams",
    },
    cta: null,
  },
];

export default function FiveFunctions() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700;800&family=Work+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --brand-primary: #2F5233;
          --brand-deep: #1E3622;
          --gold: #C9A84C;
          --pale-green: #EBF2EB;
          --ink: #1A1A18;
          --muted: #7A7A74;
          --cream: #FAF8F4;
          --white: #FFFFFF;

          --font-heading: "M PLUS Rounded 1c", system-ui, sans-serif;
          --font-body: "Work Sans", system-ui, sans-serif;
        }

        .ff-section {
          position: relative;
          overflow: hidden;
          background:
            radial-gradient(circle at top right, rgba(201,168,76,0.08), transparent 30%),
            linear-gradient(180deg, #1E3622 0%, #172B1B 100%);
          padding: 110px 0;
          font-family: var(--font-body);
        }

        .ff-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
          pointer-events: none;
        }

        .ff-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Header */
        .ff-kicker {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          padding: 8px 14px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(10px);
          border-radius: 999px;
        }

        .ff-pip {
          width: 8px;
          height: 8px;
          border-radius: 999px;
          background: var(--gold);
          box-shadow: 0 0 10px rgba(201,168,76,0.7);
        }

        .ff-kicker-text {
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--white);
        }

        .ff-heading {
          font-family: var(--font-heading);
          font-size: clamp(38px, 5vw, 60px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -0.04em;
          color: var(--white);
          margin: 0 0 18px;
          max-width: 10ch;
        }

        .ff-sub {
          max-width: 680px;
          font-size: 16px;
          line-height: 1.85;
          color: rgba(255,255,255,0.78);
          margin: 0 0 60px;
        }

        .ff-rule {
          width: 100%;
          height: 1px;
          border: none;
          background: linear-gradient(
            90deg,
            rgba(201,168,76,0.8),
            rgba(255,255,255,0.05)
          );
          margin-bottom: 48px;
        }

        /* Cards */
        .ff-cards {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .ff-card {
          position: relative;
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          padding: 34px;
          border-radius: 28px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(14px);
          transition:
            transform 0.35s ease,
            border-color 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .ff-card:hover {
          transform: translateY(-6px);
          border-color: rgba(201,168,76,0.35);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 24px 60px rgba(0,0,0,0.25);
        }

        .ff-num-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
        }

        .ff-num {
          font-family: var(--font-heading);
          font-size: 12px;
          font-weight: 800;
          letter-spacing: 0.14em;
          color: var(--gold);
        }

        .ff-num-line {
          width: 1px;
          flex: 1;
          min-height: 100px;
          background: linear-gradient(
            to bottom,
            rgba(201,168,76,0.6),
            rgba(255,255,255,0.05)
          );
        }

        .ff-icon-row {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 18px;
        }

        .ff-icon {
          width: 52px;
          height: 52px;
          border-radius: 16px;
          background:
            linear-gradient(
              135deg,
              rgba(201,168,76,0.18),
              rgba(255,255,255,0.05)
            );
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gold);
          flex-shrink: 0;
          transition: transform 0.3s ease;
        }

        .ff-card:hover .ff-icon {
          transform: rotate(-4deg) scale(1.05);
        }

        .ff-title {
          font-family: var(--font-heading);
          font-size: clamp(18px, 2vw, 24px);
          font-weight: 800;
          line-height: 1.2;
          letter-spacing: -0.02em;
          color: var(--white);
          margin: 0;
        }

        .ff-body {
          font-size: 15px;
          line-height: 1.9;
          color: #fff;
          margin: 0 0 18px;
          max-width: 780px;
        }

        .ff-quote {
          margin: 24px 0 18px;
          padding: 18px 20px;
          border-left: 3px solid var(--gold);
          background: rgba(255,255,255,0.03);
          border-radius: 0 14px 14px 0;
        }

        .ff-quote-text {
          font-size: 14px;
          line-height: 1.8;
          color: rgba(255,255,255,0.88);
          font-style: italic;
          margin: 0 0 8px;
        }

        .ff-quote-attr {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
        }

        .ff-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 20px;
        }

        .ff-tag {
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: #fff;
        }

        .ff-cta {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-top: 22px;
          color: var(--gold);
          text-decoration: none;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: gap 0.25s ease, opacity 0.25s ease;
        }

        .ff-cta:hover {
          gap: 12px;
          opacity: 0.9;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .ff-section {
            padding: 90px 0;
          }

          .ff-inner {
            padding: 0 22px;
          }

          .ff-card {
            grid-template-columns: 1fr;
            gap: 24px;
            padding: 28px 22px;
          }

          .ff-num-col {
            flex-direction: row;
            align-items: center;
          }

          .ff-num-line {
            width: 80px;
            height: 1px;
            min-height: 1px;
          }

          .ff-heading {
            max-width: 100%;
          }

          .ff-body {
            font-size: 14px;
          }
        }
      `}</style>

      <section
        className="ff-section"
        id="value-architecture"
        aria-labelledby="ff-heading"
      >
        <div className="ff-inner">

          {/* Header */}
          <div className="ff-kicker">
            <div className="ff-pip" />
            <span className="ff-kicker-text">Value Architecture</span>
          </div>

          <h2 className="ff-heading" id="ff-heading">
            The Five Functions
          </h2>

          <p className="ff-sub">
            Five distinct institutional roles not five service buckets.
            This is how M.A. Williams & Co. holds, grows, and exports
            the intellectual capital of African agriculture.
          </p>

          <hr className="ff-rule" />

          {/* Cards */}
          <div className="ff-cards">
            {FUNCTIONS.map((fn) => {
              const Icon = fn.icon;

              return (
                <div key={fn.num} className="ff-card">

                  {/* Left */}
                  <div className="ff-num-col">
                    <span className="ff-num">{fn.num}</span>
                    <div className="ff-num-line" />
                  </div>

                  {/* Right */}
                  <div>

                    <div className="ff-icon-row">
                      <div className="ff-icon">
                        <Icon size={24} strokeWidth={2} />
                      </div>

                      <h3 className="ff-title">{fn.title}</h3>
                    </div>

                    <p className="ff-body">{fn.body}</p>

                    {fn.quote && (
                      <blockquote className="ff-quote">
                        <p className="ff-quote-text">
                          “{fn.quote.text}”
                        </p>

                        <cite className="ff-quote-attr">
                          — {fn.quote.attr}
                        </cite>
                      </blockquote>
                    )}

                    <div className="ff-tags">
                      {fn.tags.map((tag) => (
                        <span key={tag} className="ff-tag">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {fn.cta && (
                      <a href={fn.cta.href} className="ff-cta">
                        {fn.cta.label}
                        <ArrowUpRight size={16} />
                      </a>
                    )}

                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}