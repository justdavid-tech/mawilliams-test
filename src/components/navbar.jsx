import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";


const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Institute", href: "/institute" },
  { label: "Gateway Consulting", href: "/gateway" },
  { label: "Partners", href: "/partners" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        :root {
          --brand-primary: #2F5233;
          --brand-deep: #1E3622;
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

        .maw-nav {
          position: sticky;
          top: 0;
          left: 0;
          right: 0;
          z-index: 999;
          font-family: var(--font-body);
        }

        .nav-main-area {
          background: var(--brand-deep);
          box-shadow: 0 2px 32px rgba(0,0,0,0.18);
          padding: 14px 0;
          transition: background 0.4s ease, box-shadow 0.4s ease, padding 0.35s ease;
        }

        .nav-inner {
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
        }

        /* LOGO */
        .nav-logo {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          flex-shrink: 0;
        }

        .nav-logo-mark {
          width: 38px;
          height: 38px;
          background: var(--gold);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: transform 0.3s ease;
        }

        .nav-logo:hover .nav-logo-mark {
          transform: rotate(15deg);
        }

        .nav-logo-mark span {
          font-family: var(--font-heading);
          font-weight: 700;
          font-size: 14px;
          color: var(--brand-deep);
          letter-spacing: -0.5px;
        }

        .nav-logo-text {
          display: flex;
          flex-direction: column;
          line-height: 1;
        }

        .nav-logo-name {
          font-family: var(--font-heading);
          font-weight: 600;
          font-size: 15px;
          color: var(--gold);
          letter-spacing: 0.02em;
          white-space: nowrap;
        }

        .nav-logo-sub {
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 10px;
          color: var(--gold);
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 3px;
          white-space: nowrap;
        }

        /* DESKTOP LINKS */
        .nav-links {
          display: flex;
          align-items: center;
          gap: 2px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link-item a {
          display: block;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          letter-spacing: 0.04em;
          padding: 8px 11px;
          border-radius: 4px;
          position: relative;
          transition: color 0.2s ease, background 0.2s ease;
          white-space: nowrap;
        }

        .nav-link-item a::after {
          content: '';
          position: absolute;
          bottom: 4px;
          left: 11px;
          right: 11px;
          height: 1px;
          background: var(--gold);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.25s ease;
        }

        .nav-link-item a:hover,
        .nav-link-item a.active {
          color: var(--white);
        }

        .nav-link-item a:hover::after,
        .nav-link-item a.active::after {
          transform: scaleX(1);
        }

        .nav-link-item a.active {
          color: var(--gold);
        }

        /* CTA */
        .nav-cta {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }

        .btn-consult {
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--brand-deep);
          background: var(--gold);
          border: none;
          padding: 10px 20px;
          border-radius: 2px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s ease, transform 0.15s ease;
          white-space: nowrap;
        }

        .btn-consult:hover {
          background: #d9b85c;
          transform: translateY(-1px);
        }

        /* HAMBURGER */
        .nav-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 6px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .nav-hamburger:hover {
          background: rgba(255,255,255,0.08);
        }

        .ham-line {
          display: block;
          width: 24px;
          height: 1.5px;
          background: var(--white);
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease, width 0.3s ease;
          transform-origin: center;
        }

        .nav-hamburger.open .ham-line:nth-child(1) {
          transform: translateY(6.5px) rotate(45deg);
        }
        .nav-hamburger.open .ham-line:nth-child(2) {
          opacity: 0;
          transform: scaleX(0);
        }
        .nav-hamburger.open .ham-line:nth-child(3) {
          transform: translateY(-6.5px) rotate(-45deg);
        }

        /* MOBILE MENU */
        .mobile-overlay {
          position: fixed;
          inset: 0;
          background: rgba(18,28,18,0.55);
          z-index: 998;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          backdrop-filter: blur(4px);
        }

        .mobile-overlay.open {
          opacity: 1;
          pointer-events: all;
        }

        .mobile-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: min(360px, 92vw);
          background: var(--brand-deep);
          z-index: 999;
          transform: translateX(100%);
          transition: transform 0.38s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .mobile-drawer.open {
          transform: translateX(0);
        }

        .drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 24px 20px;
          border-bottom: 1px solid rgba(201,168,76,0.18);
        }

        .drawer-close {
          background: none;
          border: 1px solid rgba(255,255,255,0.15);
          width: 36px;
          height: 36px;
          border-radius: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--white);
          font-size: 18px;
          transition: border-color 0.2s, background 0.2s;
        }

        .drawer-close:hover {
          border-color: var(--gold);
          background: rgba(201,168,76,0.08);
          color: var(--gold);
        }

        .drawer-links {
          flex: 1;
          padding: 16px 0;
          list-style: none;
          margin: 0;
        }

        .drawer-link-item {
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .drawer-link-item a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-body);
          font-size: 15px;
          font-weight: 500;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          padding: 16px 24px;
          letter-spacing: 0.02em;
          transition: color 0.2s, padding-left 0.2s, background 0.2s;
          position: relative;
        }

        .drawer-link-item a .link-index {
          font-family: var(--font-heading);
          font-size: 10px;
          color: var(--gold);
          opacity: 0.7;
          letter-spacing: 0.1em;
        }

        .drawer-link-item a:hover,
        .drawer-link-item a.active {
          color: var(--white);
          padding-left: 32px;
          background: rgba(255,255,255,0.03);
        }

        .drawer-link-item a.active {
          color: var(--gold);
        }

        .drawer-link-item a.active .link-index {
          opacity: 1;
        }

        .drawer-footer {
          padding: 20px 24px 32px;
          border-top: 1px solid rgba(201,168,76,0.18);
        }

        .drawer-cta {
          display: block;
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--brand-deep);
          background: var(--gold);
          border: none;
          padding: 14px 24px;
          border-radius: 2px;
          text-align: center;
          text-decoration: none;
          cursor: pointer;
          width: 100%;
          transition: background 0.2s;
        }

        .drawer-cta:hover {
          background: #d9b85c;
        }

        .drawer-tagline {
          margin-top: 16px;
          font-family: var(--font-body);
          font-size: 11px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 0.06em;
          text-align: center;
          font-style: italic;
        }

        .nav-gold-line {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--gold), transparent);
          opacity: 0.4;
          transition: opacity 0.4s ease;
        }

        /* RESPONSIVE */
        @media (max-width: 1100px) {
          .nav-links {
            gap: 0;
          }
          .nav-link-item a {
            padding: 8px 8px;
            font-size: 12.5px;
          }
        }

        @media (max-width: 900px) {
          .nav-links,
          .btn-consult {
            display: none;
          }
          .nav-hamburger {
            display: flex;
          }
        }

        @media (max-width: 480px) {
          .nav-inner {
            padding: 0 20px;
          }
          .nav-logo-sub {
            display: none;
          }
        }
      `}</style>

      {/* Overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Main Navbar */}
      <nav className="maw-nav" role="navigation" aria-label="Main navigation">
        <div className="nav-main-area">
          <div className="nav-inner">

          {/* Logo */}
          <Link to="/" className="nav-logo" aria-label="M.A. Williams & Co. Home">
            <div className="nav-logo-text">
              <span className="nav-logo-name">M.A. Williams & Co.</span>
              <span className="nav-logo-sub">London · Lagos</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="nav-links" role="list">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href === '/' ? location.pathname === '/' : location.pathname.startsWith(item.href);
              return (
                <li key={item.label} className="nav-link-item">
                  <Link
                    to={item.href}
                    className={isActive ? "active" : ""}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* CTA + Hamburger */}
          <div className="nav-cta">
            <Link to="/gateway" className="btn-consult" aria-label="Request a consultation">
              Consult
            </Link>
            <button
              className={`nav-hamburger ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-drawer"
            >
              <span className="ham-line" />
              <span className="ham-line" />
              <span className="ham-line" />
            </button>
          </div>
          </div>
          {/* Gold accent line on scroll */}
          <div className="nav-gold-line" aria-hidden="true" />
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        id="mobile-drawer"
        ref={menuRef}
        className={`mobile-drawer ${menuOpen ? "open" : ""}`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="drawer-header">
          <Link to="/" className="nav-logo" onClick={() => setMenuOpen(false)} aria-label="M.A. Williams & Co.">
            <div className="nav-logo-mark" aria-hidden="true">
              <span>MAW</span>
            </div>
            <div className="nav-logo-text">
              <span className="nav-logo-name">M.A. Williams & Co.</span>
              <span className="nav-logo-sub">London · Lagos</span>
            </div>
          </Link>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>

        <ul className="drawer-links" role="list">
          {NAV_ITEMS.map((item, i) => {
            const isActive = item.href === '/' ? location.pathname === '/' : location.pathname.startsWith(item.href);
            return (
              <li key={item.label} className="drawer-link-item">
                <Link
                  to={item.href}
                  className={isActive ? "active" : ""}
                  onClick={() => setMenuOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  <span className="link-index" aria-hidden="true">0{i + 1}</span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="drawer-footer">
          <Link to="/gateway" className="drawer-cta" onClick={() => setMenuOpen(false)}>
            Request a Consultation
          </Link>
          <p className="drawer-tagline">Intellectual Architecture. Global Reach.</p>
        </div>
      </div>
    </>
  );
}