import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";


const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Institute", href: "/institute" },
  { label: "Gateway Consulting", href: "/gateway" },
  { label: "Partners", href: "/partners" },
  { label: "Portfolio", href: "/portfolio" },
  {
    label: "Insights",
    dropdown: [
      { label: "Articles", href: "/insights" },
      { label: "Media", href: "/media" }
    ]
  },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState(null);
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
          width: 46px;
          height: 46px;
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
          font-size: 14px;
          color: var(--gold);
          letter-spacing: 0.02em;
          white-space: nowrap;
          text-transform: uppercase;
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

        .nav-link-item {
          position: relative;
        }

        .nav-link-item > a {
          display: flex;
          align-items: center;
          gap: 4px;
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

        .nav-link-item > a::after {
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

        .nav-link-item > a:hover,
        .nav-link-item > a.active {
          color: var(--white);
        }

        .nav-link-item > a:hover::after,
        .nav-link-item > a.active::after {
          transform: scaleX(1);
        }

        .nav-link-item > a.active {
          color: var(--gold);
        }

        /* DESKTOP DROPDOWN */
        .nav-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: var(--brand-deep);
          min-width: 140px;
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 4px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
          box-shadow: 0 4px 20px rgba(0,0,0,0.3);
          padding: 8px 0;
          z-index: 1000;
        }

        .nav-link-item:hover .nav-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .nav-dropdown-item {
          display: block;
          padding: 10px 16px;
          font-family: var(--font-body);
          font-size: 13px;
          font-weight: 500;
          color: rgba(255,255,255,0.78);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          text-align: center;
        }

        .nav-dropdown-item:hover,
        .nav-dropdown-item.active {
          color: var(--gold);
          background: rgba(255,255,255,0.05);
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

        .drawer-link-item > a,
        .drawer-link-item > button.drawer-link-btn {
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
          background: none;
          border: none;
          width: 100%;
          cursor: pointer;
          text-align: left;
        }

        .drawer-link-item > a .link-index,
        .drawer-link-item > button.drawer-link-btn .link-index {
          font-family: var(--font-heading);
          font-size: 10px;
          color: var(--gold);
          opacity: 0.7;
          letter-spacing: 0.1em;
        }

        .drawer-link-item > a:hover,
        .drawer-link-item > a.active,
        .drawer-link-item > button.drawer-link-btn:hover,
        .drawer-link-item > button.drawer-link-btn.active {
          color: var(--white);
          padding-left: 32px;
          background: rgba(255,255,255,0.03);
        }

        .drawer-link-item > a.active,
        .drawer-link-item > button.drawer-link-btn.active {
          color: var(--gold);
        }

        .drawer-link-item > a.active .link-index,
        .drawer-link-item > button.drawer-link-btn.active .link-index {
          opacity: 1;
        }

        .link-right {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        /* MOBILE DROPDOWN */
        .drawer-dropdown {
          background: rgba(0,0,0,0.15);
          display: flex;
          flex-direction: column;
        }

        .drawer-dropdown-item {
          display: block;
          padding: 12px 24px 12px 40px;
          font-family: var(--font-body);
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s, background 0.2s;
          border-bottom: 1px solid rgba(255,255,255,0.02);
        }

        .drawer-dropdown-item:hover,
        .drawer-dropdown-item.active {
          color: var(--gold);
          background: rgba(255,255,255,0.03);
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
          color: var(--white);
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
          .nav-link-item > a {
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
              <div className="nav-logo-mark" aria-hidden="true"><span>M.A.W</span></div>
              <div className="nav-logo-text">
                <span className="nav-logo-name">M.A. WILLIAMS & CO.</span>
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
                      {item.dropdown && <ChevronDown size={14} style={{ opacity: 0.8 }} />}
                    </Link>
                    {item.dropdown && (
                      <div className="nav-dropdown">
                        {item.dropdown.map((drop) => (
                          <Link
                            key={drop.label}
                            to={drop.href}
                            className={`nav-dropdown-item ${location.pathname === drop.href ? "active" : ""}`}
                          >
                            {drop.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA + Hamburger */}
            <div className="nav-cta">
              <Link to="/contact#contact-form" className="btn-consult" aria-label="Request a consultation">
                Book Consultation
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
              <span className="nav-logo-name">M.A. WILLIAMS & CO.</span>
            </div>
          </Link>
          <button className="drawer-close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
            ✕
          </button>
        </div>

        <ul className="drawer-links" role="list">
          {NAV_ITEMS.map((item, i) => {
            const isActive = item.href === '/' ? location.pathname === '/' : location.pathname.startsWith(item.href);
            const isOpen = openMobileDropdown === item.label;

            return (
              <li key={item.label} className="drawer-link-item">
                {item.dropdown ? (
                  <button
                    className={`drawer-link-btn ${isActive ? "active" : ""}`}
                    onClick={() => setOpenMobileDropdown(isOpen ? null : item.label)}
                  >
                    {item.label}
                    <span className="link-right">
                      <span className="link-index" aria-hidden="true">0{i + 1}</span>
                      {isOpen ? <ChevronUp size={16} color="var(--gold)" /> : <ChevronDown size={16} color="var(--gold)" />}
                    </span>
                  </button>
                ) : (
                  <Link
                    to={item.href}
                    className={isActive ? "active" : ""}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                    <span className="link-index" aria-hidden="true">0{i + 1}</span>
                  </Link>
                )}
                {item.dropdown && isOpen && (
                  <div className="drawer-dropdown">
                    {item.dropdown.map((drop) => (
                      <Link
                        key={drop.label}
                        to={drop.href}
                        className={`drawer-dropdown-item ${location.pathname === drop.href ? "active" : ""}`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {drop.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>
            );
          })}
        </ul>

        <div className="drawer-footer">
          <Link to="/contact#contact-form" className="drawer-cta" onClick={() => setMenuOpen(false)}>
            Book Consultation
          </Link>
          <p className="drawer-tagline">Intellectual Architecture. Global Reach.</p>
        </div>
      </div>
    </>
  );
}