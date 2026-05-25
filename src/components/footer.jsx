

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Institute", href: "/institute" },
  { label: "Gateway Consulting", href: "/gateway" },
  { label: "Partners", href: "/partners" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Article", href: "/insights" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

const GROUP_ENTITIES = [
  { name: "M.A. Williams & Co.", role: "The architect — IP, education, international family office.", href: "/" },
  { name: "Lambert Willis Nigeria", role: "The active African arm — assets, land, local investments.", href: "/portfolio" },
  { name: "Gartner Callaway Group", role: "The operator — sustainability services & farm production.", href: "/portfolio" },
  { name: "Shaishen Foods - Hibiscus Estate JV", role: "200ha regenerative estate, Ogun State.", href: "/portfolio" },
  { name: "EZ Gro Garden", role: "Vertical Hydroponic Partner (Africa · Europe · Middle East)", href: "/portfolio" },
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
  {
    label: "Instagram",
    href: "https://www.instagram.com/mawilliamscoc?utm_source=qr&igsh=Y2FqemtuZ2JndGwy",
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yomi-williams-448388172?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/MAWilliamsco",
    icon: (props) => (
      <svg
        {...props}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      {/* fonts loaded from index.css — no @import here */}
      <style>{`
        .footer {
          background: #0F1E13;
          font-family: var(--font-body);
          position: relative;
          overflow: hidden;
        }
        .footer::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 280px; height: 280px;
          background-image: radial-gradient(rgba(201,168,76,0.09) 1.5px, transparent 1.5px);
          background-size: 18px 18px;
          pointer-events: none;
        }

        .footer-cta-banner {
          background: var(--color-brand-deep);
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
        .cta-banner-kicker {
          font-size: 10.5px; font-weight: 600;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: var(--color-gold-accent); margin-bottom: 8px;
        }
        .cta-banner-heading {
          font-family: var(--font-heading);
          font-size: clamp(20px, 2.5vw, 28px);
          font-weight: 800; line-height: 1.15; letter-spacing: -0.02em;
          color: var(--color-white); margin: 0; max-width: 520px;
        }
        .cta-banner-buttons {
          display: flex; align-items: center; gap: 12px; flex-shrink: 0;
        }
        .ft-btn-gold {
          font-family: var(--font-body);
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #0F1E13; background: var(--color-gold-accent);
          border: none; padding: 13px 24px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .ft-btn-gold:hover { background: #d9b85c; transform: translateY(-1px); }
        .ft-btn-outline {
          font-family: var(--font-body);
          font-size: 12px; font-weight: 600;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--color-white);
          border: 1px solid rgba(255,255,255,0.2); background: transparent;
          padding: 12px 22px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: border-color 0.2s, color 0.2s;
        }
        .ft-btn-outline:hover { border-color: rgba(255,255,255,0.5); }

        .footer-body {
          padding: 64px 48px 0;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 48px;
          position: relative; z-index: 1;
          max-width: 1260px; margin: 0 auto;
        }

        .footer-logo {
          display: flex; align-items: center; gap: 11px;
          text-decoration: none; margin-bottom: 20px;
        }
        .logo-mark {
          width: 38px; height: 38px; flex-shrink: 0;
          background: var(--color-gold-accent);
          clip-path: polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%);
          display: flex; align-items: center; justify-content: center;
        }
        .logo-mark span {
          font-family: var(--font-heading);
          font-weight: 700; font-size: 11px;
          color: #0F1E13; letter-spacing: -0.5px;
        }
        .logo-text-col { display: flex; flex-direction: column; line-height: 1; }
        .logo-name {
          font-family: var(--font-heading);
          font-size: 14px; font-weight: 600;
          color: var(--color-gold-accent); letter-spacing: 0.02em;
        }

        .footer-desc {
          font-size: 13px; line-height: 1.78;
          color: rgba(255,255,255,0.55);
          margin: 0 0 24px; max-width: 300px;
        }
        .contact-item {
          display: flex; align-items: flex-start; gap: 10px; margin-bottom: 10px;
        }
        .contact-dot {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--color-gold-accent); flex-shrink: 0; margin-top: 6px;
        }
        .contact-text { font-size: 12px; line-height: 1.6; color: rgba(255,255,255,0.55); }
        .contact-text a { color: rgba(255,255,255,0.55); text-decoration: none; transition: color 0.2s; }
        .contact-text a:hover { color: var(--color-gold-accent); }

        .footer-socials { display: flex; gap: 10px; margin-top: 24px; }
        .social-chip {
          width: 36px; height: 36px; border-radius: 4px;
          border: 1px solid rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.6); text-decoration: none;
          transition: border-color 0.2s, color 0.2s, background 0.2s, transform 0.2s;
        }
        .social-chip:hover {
          border-color: var(--color-gold-accent);
          color: var(--color-gold-accent);
          background: rgba(201,168,76,0.08);
          transform: translateY(-2px);
        }

        .footer-col-heading {
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: var(--color-gold-accent); margin-bottom: 16px;
        }
        .footer-col ul {
          list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column;
        }
        .footer-col ul li a {
          font-size: 13px; font-weight: 400;
          color: rgba(255,255,255,0.6); text-decoration: none;
          padding: 7px 0; display: block; transition: color 0.2s;
        }
        .footer-col ul li a:hover { color: var(--color-gold-accent); }

        .entity-item { margin-bottom: 14px; }
        .entity-name {
          font-size: 12.5px; font-weight: 600;
          color: rgba(255,255,255,0.75); margin-bottom: 2px;
          text-decoration: none; display: block; transition: color 0.2s;
        }
        .entity-name:hover { color: var(--color-gold-accent); }
        .entity-role { font-size: 11px; line-height: 1.5; color: rgba(255,255,255,0.35); }

        .footer-divider {
          max-width: 1260px; margin: 48px auto 0;
          padding: 0 48px; position: relative; z-index: 1;
        }
        .footer-divider hr { border: none; border-top: 1px solid rgba(201,168,76,0.2); }

        .footer-bottom {
          max-width: 1260px; margin: 0 auto;
          padding: 20px 48px 32px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 16px; flex-wrap: wrap;
          position: relative; z-index: 1;
        }
        .footer-bottom-left { display: flex; flex-direction: column; gap: 4px; }
        .footer-legal { font-size: 11px; line-height: 1.65; color: rgba(255,255,255,0.3); }
        .footer-legal a { color: rgba(255,255,255,0.35); text-decoration: none; transition: color 0.2s; }
        .footer-legal a:hover { color: var(--color-gold-accent); }
        .footer-reg { font-size: 10.5px; color: rgba(255,255,255,0.22); letter-spacing: 0.03em; }
        .footer-tagline {
          font-family: var(--font-heading);
          font-size: 11px; font-weight: 600; font-style: italic;
          letter-spacing: 0.06em; color: rgba(201,168,76,0.45); text-align: right;
        }

        @media (max-width: 1024px) {
          .footer-body { grid-template-columns: 1fr 1fr; gap: 40px; }
          .footer-brand { grid-column: 1 / -1; }
          .footer-desc { max-width: 480px; }
        }
        @media (max-width: 640px) {
          .footer-cta-banner { padding: 40px 24px; flex-direction: column; align-items: flex-start; }
          .cta-banner-buttons { width: 100%; flex-direction: column; }
          .ft-btn-gold, .ft-btn-outline { width: 100%; text-align: center; }
          .footer-body { padding: 48px 24px 0; grid-template-columns: 1fr; gap: 32px; }
          .footer-divider { padding: 0 24px; }
          .footer-bottom { padding: 16px 24px 28px; flex-direction: column; align-items: flex-start; gap: 10px; }
          .footer-tagline { text-align: left; }
        }
      `}</style>

      <footer className="footer" role="contentinfo">

        <div className="footer-cta-banner">
          <div className="cta-banner-left">
            <p className="cta-banner-kicker">Work with us</p>
            <h2 className="cta-banner-heading">
              The structure is built.<br />
              The knowledge is ready. The question is yours.
            </h2>
          </div>
          <div className="cta-banner-buttons">
            <a href="/gateway" className="ft-btn-gold">Gateway Consulting</a>
            <a href="/contact" className="ft-btn-outline">Get in Touch</a>
          </div>
        </div>

        <div className="footer-body">
          <div className="footer-brand">
            <a href="/" className="footer-logo" aria-label="M.A. Williams & Co. home">
              <div className="logo-mark" aria-hidden="true"><span>MAW</span></div>
              <div className="logo-text-col">
                <span className="logo-name">M.A. WILLIAMS & CO.</span>
              </div>
            </a>
            <p className="footer-desc">
              International family office. IP repository. Agricultural education institution.
              Gateway to Africa. The apex of a purposefully built agribusiness group
              designed for longevity, not convenience.
            </p>
            <div className="footer-contact">
              <div className="contact-item">
                <div className="contact-dot" aria-hidden="true" />
                <span className="contact-text">
                  71–75 Shelton Street, Covent Garden,<br />London WC2H 9JQ
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
                  <a href="mailto:info@mawilliamsco.com">info@mawilliamsco.com</a>
                </span>
              </div>
            </div>
            <nav className="footer-socials" aria-label="Social media links">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    className="social-chip"
                    aria-label={s.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={15} strokeWidth={1.8} />
                  </a>
                );
              })}
            </nav>
          </div>

          <div className="footer-col">
            <p className="footer-col-heading">Navigation</p>
            <ul role="list">
              {NAV_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <p className="footer-col-heading">The Institute</p>
            <ul role="list">
              {INSTITUTE_LINKS.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

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

        <div className="footer-divider" aria-hidden="true"><hr /></div>

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