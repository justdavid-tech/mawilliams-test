const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Institute", href: "/institute" },
  { label: "Gateway Consulting", href: "/gateway" },
  { label: "Partners", href: "/partners" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

const GROUP_ENTITIES = [
  { name: "M.A. Williams & Co.", role: "The architect IP, education, international family office.", href: "/" },
  { name: "Lambert Willis Nigeria", role: "The active African arm assets, land, local investments.", href: "/portfolio" },
  { name: "Gartner Callaway Group", role: "The operator sustainability services & farm production.", href: "/portfolio" },
  { name: "Shaishen Foods - Hibiscus Estate JV", role: "200ha regenerative estate, Ogun State.", href: "/portfolio" },
  { name: "EZ Gro Garden", role: "Vertical Hydroponic Partner (Africa - Europe - Middle East)", href: "/portfolio" },
];

const INSTITUTE_LINKS = [
  { label: "About the Institute", href: "/institute" },
  { label: "The Four Schools", href: "/institute#schools" },
  { label: "Physical Advantage™", href: "/institute#physical-advantage" },
  { label: "Bankable Blueprints™", href: "/institute#blueprints" },
  { label: "Delivery Formats", href: "/institute#delivery" },
  { label: "Institutional Licensing", href: "/institute#licensing" },
  { label: "Enrol Now", href: "/contact" },
];

const SOCIALS = [
  { label: "Instagram", abbr: "Insta", href: "instagram.com/mawilliamsco?igsh=MTc3dXllbmpweXlvcw==" }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        :root {
          --brand-deep: #1E3622;
          --brand-primary: #2F5233;
          --brand-mid: #3D6B42;
          --gold: #C9A84C;
          --pale-green: #EBF2EB;
          --ink: #1A1A18;
          --muted: #7A7A74;
          --cream: #FAF8F4;
          --white: #FFFFFF;
          --font-heading: "M PLUS U", system-ui, sans-serif;
          --font-body: "Work Sans", system-ui, sans-serif;
        }

        .footer {
          background: #0F1E13;
          font-family: var(--font-body);
          position: relative;
          overflow: hidden;
        }

        /* Faint dot grid top-right */
        .footer::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 280px; height: 280px;
          background-image: radial-gradient(rgba(201,168,76,0.09) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
          pointer-events: none;
        }

        /* ── PRE-FOOTER CTA BANNER ── */
        .footer-cta-banner {
          background: var(--brand-deep);
          border-bottom: 1px solid rgba(201,168,76,0.2);
          padding: 52px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .footer-cta-banner::after {
          content: '';
          position: absolute;
          bottom: 0; left: 48px; right: 48px;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent);
        }

        .cta-banner-left {}
        .cta-banner-kicker {
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 8px;
        }
        .cta-banner-heading {
          font-family: var(--font-heading);
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 800; line-height: 1.15;
          letter-spacing: -0.02em;
          color: var(--white);
          margin: 0; max-width: 520px;
        }
        .cta-banner-buttons {
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
        }
        .btn-gold {
          font-family: var(--font-body);
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #0F1E13; background: var(--gold);
          border: none; padding: 13px 24px; border-radius: 3px;
          cursor: pointer; text-decoration: none;
          display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .btn-gold:hover { background: #d9b85c; transform: translateY(-1px); }
        .btn-outline-white {
          font-family: var(--font-body);
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.2);
          background: transparent;
          padding: 12px 22px; border-radius: 3px;
          cursor: pointer; text-decoration: none;
          display: inline-block;
          transition: border-color 0.2s, color 0.2s;
        }
        .btn-outline-white:hover {
          border-color: rgba(255,255,255,0.5); color: var(--white);
        }

        /* ── MAIN FOOTER BODY ── */
        .footer-body {
          padding: 64px 48px 0;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 48px;
          position: relative;
          z-index: 1;
          max-width: 1260px;
          margin: 0 auto;
        }

        /* Column 1 — Brand */
        .footer-brand {}
        .footer-logo {
          display: flex; align-items: center; gap: 11px;
          text-decoration: none; margin-bottom: 20px;
        }
        .logo-mark {
          width: 38px; height: 38px; flex-shrink: 0;
          background: var(--gold);
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          display: flex; align-items: center; justify-content: center;
        }
        .logo-mark span {
          font-family: var(--font-heading);
          font-weight: 700; font-size: 11px; color: #0F1E13; letter-spacing: -0.5px;
        }
        .logo-text-col { display: flex; flex-direction: column; line-height: 1; }
        .logo-name {
          font-family: var(--font-heading);
          font-size: 14px; font-weight: 600; color: var(--white); letter-spacing: 0.02em;
        }
        .logo-sub {
          font-size: 9.5px; font-weight: 400; color: var(--gold);
          letter-spacing: 0.13em; text-transform: uppercase; margin-top: 3px;
        }

        .footer-desc {
          font-size: 13px; line-height: 1.78;
          color: #fff;
          margin: 0 0 24px; max-width: 300px;
        }

        .footer-contact {}
        .contact-item {
          display: flex; align-items: flex-start; gap: 10px;
          margin-bottom: 10px;
        }
        .contact-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0; margin-top: 6px;
        }
        .contact-text {
          font-size: 12px; line-height: 1.6;
          color: var(--white);
        }
        .contact-text a {
          color: var(--white); text-decoration: none;
          transition: color 0.2s;
        }
        .contact-text a:hover { color: var(--gold); }

        .footer-socials {
          display: flex; gap: 8px; margin-top: 24px;
        }
        .social-chip {
          width: 32px; height: 32px; border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font-heading);
          font-size: 9px; font-weight: 700;
          letter-spacing: 0.04em; text-transform: uppercase;
          color: var(--white);
          text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .social-chip:hover {
          border-color: var(--gold);
          color: var(--gold);
          background: rgba(201,168,76,0.08);
        }

        /* Columns 2–4 — Links */
        .footer-col {}
        .footer-col-heading {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: var(--gold); margin-bottom: 16px;
        }
        .footer-col ul {
          list-style: none; margin: 0; padding: 0;
          display: flex; flex-direction: column; gap: 0;
        }
        .footer-col ul li a {
          font-size: 13px; font-weight: 400; line-height: 1;
          color: var(--white);
          text-decoration: none;
          padding: 7px 0;
          display: block;
          border-bottom: 1px solid transparent;
          transition: color 0.2s;
        }
        .footer-col ul li a:hover { color: var(--white); }

        /* Group entities col — has role description */
        .entity-item { margin-bottom: 14px; }
        .entity-name {
          font-size: 12.5px; font-weight: 600;
          color: var(--white); margin-bottom: 2px;
          text-decoration: none; display: block;
          transition: color 0.2s;
        }
        .entity-name:hover { color: var(--gold); }
        .entity-role {
          font-size: 11px; line-height: 1.5;
          color: var(--white);
        }

        /* ── GOLD DIVIDER ── */
        .footer-divider {
          max-width: 1260px; margin: 48px auto 0;
          padding: 0 48px;
          position: relative; z-index: 1;
        }
        .footer-divider hr {
          border: none; border-top: 1px solid rgba(201,168,76,0.2);
        }

        /* ── BOTTOM BAR ── */
        .footer-bottom {
          max-width: 1260px; margin: 0 auto;
          padding: 20px 48px 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
          position: relative; z-index: 1;
        }

        .footer-bottom-left {
          display: flex; flex-direction: column; gap: 4px;
        }
        .footer-legal {
          font-size: 11px; line-height: 1.65;
          color: var(--white);
        }
        .footer-legal a {
          color: var(--white); text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: var(--gold); }

        .footer-reg {
          font-size: 10.5px; color: var(--white);
          letter-spacing: 0.03em;
        }

        .footer-tagline {
          font-family: var(--font-heading);
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.06em;
          color: rgba(201,168,76,0.45);
          text-align: right;
          font-style: italic;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 1024px) {
          .footer-body {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-brand { grid-column: 1 / -1; max-width: 100%; }
          .footer-desc { max-width: 480px; }
        }

        @media (max-width: 640px) {
          .footer-cta-banner { padding: 40px 24px; flex-direction: column; align-items: flex-start; }
          .cta-banner-buttons { width: 100%; flex-direction: column; }
          .btn-gold, .btn-outline-white { width: 100%; text-align: center; }
          .footer-body { padding: 48px 24px 0; grid-template-columns: 1fr; gap: 32px; }
          .footer-divider { padding: 0 24px; }
          .footer-bottom { padding: 16px 24px 28px; flex-direction: column; align-items: flex-start; gap: 10px; }
          .footer-tagline { text-align: left; }
        }
      `}</style>

      <footer className="footer" role="contentinfo">

        {/* ── PRE-FOOTER CTA BANNER ── */}
        <div className="footer-cta-banner">
          <div className="cta-banner-left">
            <p className="cta-banner-kicker">Work with us</p>
            <h2 className="cta-banner-heading">
              The structure is built.<br />The knowledge is ready. The question is yours.
            </h2>
          </div>
          <div className="cta-banner-buttons">
            <a href="/gateway" className="btn-gold">Gateway Consulting</a>
            <a href="/contact" className="btn-outline-white">Get in Touch</a>
          </div>
        </div>

        {/* ── MAIN BODY ── */}
        <div className="footer-body">

          {/* Col 1 — Brand + contact */}
          <div className="footer-brand">
            <a href="/" className="footer-logo" aria-label="M.A. Williams & Co. home">
              <div className="logo-mark" aria-hidden="true"><span>MAW</span></div>
              <div className="logo-text-col">
                <span className="logo-name">M.A. WILLIAMS & CO.</span>
              </div>
            </a>

            <p className="footer-desc">
              International family office. IP repository. Agricultural education institution.
              Gateway to Africa. The apex of a purposefully built agribusiness group designed
              for longevity, not convenience.
            </p>

            <div className="footer-contact">
              <div className="contact-item">
                <div className="contact-dot" aria-hidden="true" />
                <span className="contact-text">
                  71–75 Shelton Street, Covent Garden,<br />London WC2H 9JQ, United Kingdom
                </span>
              </div>
              <div className="contact-item">
                <div className="contact-dot" aria-hidden="true" />
                <span className="contact-text">
                  <a href="tel:+447444167970">+44 7444 167 970</a>
                </span>
              </div>
              <div className="contact-item">
                <div className="contact-dot" aria-hidden="true" />
                <span className="contact-text">
                  <a href="mailto:yomi.williams@mawilliamsco.com">
                    yomi.williams@mawilliamsco.com
                  </a>
                </span>
              </div>
            </div>

            <nav className="footer-socials" aria-label="Social media links">
              {SOCIALS.map((s) => (
                <a key={s.abbr} href={s.href} className="social-chip" aria-label={s.label}>
                  {s.abbr}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 2 — Navigation */}
          <div className="footer-col">
            <p className="footer-col-heading">Navigation</p>
            <ul role="list">
              {NAV_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Institute */}
          <div className="footer-col">
            <p className="footer-col-heading">The Institute</p>
            <ul role="list">
              {INSTITUTE_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href}>{l.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Group entities */}
          <div className="footer-col">
            <p className="footer-col-heading">The Group</p>
            {GROUP_ENTITIES.map((e) => (
              <div key={e.name} className="entity-item">
                <a href={e.href} className="entity-name">{e.name}</a>
                <p className="entity-role">{e.role}</p>
              </div>
            ))}
          </div>

        </div>

        {/* ── DIVIDER ── */}
        <div className="footer-divider" aria-hidden="true">
          <hr />
        </div>

        {/* ── BOTTOM BAR ── */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-legal">
              © {year} M.A. Williams & Co. Ltd. All rights reserved. &nbsp;·&nbsp;
              <a href="/privacy">Privacy Policy</a> &nbsp;·&nbsp;
              <a href="/terms">Terms of Use</a>
            </p>
            <p className="footer-reg">
              Registered in England & Wales &nbsp;·&nbsp; 71–75 Shelton Street, London WC2H 9JQ
            </p>
          </div>
          <p className="footer-tagline">Intellectual Architecture. Global Reach.</p>
        </div>

      </footer>
    </>
  );
}