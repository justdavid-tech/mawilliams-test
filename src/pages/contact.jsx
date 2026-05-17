import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

/* ─────────────────────────────────────────
   EMAILJS CONFIGURATION
   Replace these with your actual EmailJS credentials
───────────────────────────────────────── */
const EMAILJS_CONFIG = {
  PUBLIC_KEY: "YOUR_EMAILJS_PUBLIC_KEY",     // Get from EmailJS dashboard
  SERVICE_ID: "YOUR_SERVICE_ID",              // e.g., "service_gmail"
  TEMPLATE_ID: "YOUR_TEMPLATE_ID",            // e.g., "template_contact"
};

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const CONTACT_PATHS = [
  {
    num: "01",
    title: "Gateway Consulting",
    audience: "Foreign businesses",
    desc: "For foreign businesses seeking market entry advisory, structural guidance, or a strategic advisory relationship. Request a scoping call. Yomi Williams responds personally.",
    response: "3 working days",
    cta: "Request a scoping call",
    value: "gateway",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Partner With Us",
    audience: "Donors & DFIs",
    desc: "For international donors, DFIs, government agencies, and programme partners. Submit a partnership enquiry and we will respond with a proposed call or meeting.",
    response: "5 working days",
    cta: "Submit a partnership enquiry",
    value: "partnership",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Explore the Institute",
    audience: "Practitioners & institutions",
    desc: "For individual learners, institutional training enquiries, and platform licensing. Our Institute team will respond within 3 working days with next steps.",
    response: "3 working days",
    cta: "Send an Institute enquiry",
    value: "institute",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 0 3-3h7z"/>
      </svg>
    ),
  },
  {
    num: "04",
    title: "General Enquiry",
    audience: "Media & press",
    desc: "For media, press, speaking engagements, and all other enquiries. Contact us directly via email or the form below.",
    response: "5 working days",
    cta: "Send a general message",
    value: "general",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
];

const OFFICES = [
  {
    city: "London",
    flag: "🇬🇧",
    address: "71–75 Shelton Street\nCovent Garden\nLondon WC2H 9JQ\nUnited Kingdom",
    role: "Registered office · International contracting · Donor interface · Gateway Consulting",
    phone: "+44 7444 167 970",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.8295803754!2d-0.12680692326844177!3d51.51477787181676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ccbe7c0a3d%3A0x6af56ac0b8823b4a!2s71-75%20Shelton%20St%2C%20London%20WC2H%209JQ!5e0!3m2!1sen!2suk!4v1716000000000!5m2!1sen!2suk",
  },
  {
    city: "Lagos",
    flag: "🇳🇬",
    address: "54A Earls Court Road\nIkate, Lekki\nLagos State\nNigeria",
    role: "Commercial operations · M.A. Williams Institute HQ",
    phone: "+234 818 581 1939",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.8953487734646!2d3.4726!3d6.4389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53aec4dd92d%3A0x5e5c1d79e6e03e1c!2sIkate%2C%20Lekki%2C%20Lagos!5e0!3m2!1sen!2sng!4v1716000000001!5m2!1sen!2sng",
  },
];

/* ─────────────────────────────────────────
   HOOK
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

/* ─────────────────────────────────────────
   SECTION 1: HERO
───────────────────────────────────────── */
function Hero() {
  const [vis, setVis] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);

  return (
    <section className="ct-hero" aria-labelledby="ct-hero-h">
      <div className="ct-hero-geo-1" aria-hidden="true" />
      <div className="ct-hero-geo-2" aria-hidden="true" />
      <div className="ct-dot-grid" aria-hidden="true">
        {Array.from({ length: 56 }).map((_, i) => <span key={i} />)}
      </div>

      <div className="ct-inner ct-hero-inner">
        <div className={`ct-hero-left ${vis ? "ct-vis-up" : ""}`}>
          <div className="ct-kicker">
            <span className="ct-pip" aria-hidden="true" />
            <span className="ct-kicker-text">Contact</span>
          </div>
          <h1 className="ct-hero-h1" id="ct-hero-h">
            Ready to build<br />
            something that <span className="ct-gold">lasts?</span>
          </h1>
          <p className="ct-hero-sub">
            We welcome conversations with international donors, development finance institutions,
            agribusiness investors, foreign businesses seeking structured African market entry,
            and institutional partners operating across West Africa and the global agri-food system.
          </p>
          <div className="ct-hero-direct">
            <a href="mailto:yomi.williams@mawilliamsco.com" className="ct-hero-email">
              yomi.williams@mawilliamsco.com
            </a>
            <div className="ct-hero-phones">
              <a href="tel:+447444167970" className="ct-hero-phone">+44 7444 167 970 (UK)</a>
              <span className="ct-hero-phone-sep" aria-hidden="true">·</span>
              <a href="tel:+2348185811939" className="ct-hero-phone">+234 818 581 1939 (NG)</a>
            </div>
          </div>
        </div>

        <div className={`ct-hero-right ${vis ? "ct-vis-right" : ""}`}>
          <div className="ct-hero-card">
            <p className="ct-hero-card-label">Personal site</p>
            <p className="ct-hero-card-body">
              For Yomi Williams's full profile, featured work, speaking record, and media enquiries.
            </p>
            <a
              href="https://www.yomiwilliams.com"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-hero-card-link"
            >
              yomiwilliams.com →
            </a>
          </div>
          <div className="ct-hero-card" style={{ marginTop: 12 }}>
            <p className="ct-hero-card-label">Gartner Callaway</p>
            <p className="ct-hero-card-body">
              For field delivery, agribusiness services, and operational enquiries related to
              Gartner Callaway Group.
            </p>
            <a
              href="https://www.gcworld.world"
              target="_blank"
              rel="noopener noreferrer"
              className="ct-hero-card-link"
            >
              gcworld.world →
            </a>
          </div>
        </div>
      </div>

      <div className="ct-inner ct-hero-rule-wrap" aria-hidden="true">
        <div className="ct-hero-rule" />
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 2: FOUR CONTACT PATHS
───────────────────────────────────────── */
function ContactPaths({ onSelect, selected }) {
  const [ref, vis] = useInView();

  return (
    <section className="ct-paths-section" ref={ref} aria-labelledby="ct-paths-h">
      <div className="ct-inner">
        <div className={`ct-section-header ${vis ? "ct-vis-up" : ""}`}>
          <div className="ct-kicker">
            <span className="ct-pip" aria-hidden="true" />
            <span className="ct-kicker-text">Choose your path</span>
          </div>
          <h2 className="ct-section-h" id="ct-paths-h">Four Contact Paths</h2>
          <p className="ct-section-sub">
            Select the path that best describes your enquiry. Your choice pre-fills the form below
            so we can route your message correctly.
          </p>
        </div>

        <div className="ct-paths-grid">
          {CONTACT_PATHS.map((p, i) => (
            <button
              key={p.value}
              className={`ct-path-card ${selected === p.value ? "ct-path-card--active" : ""} ${vis ? "ct-vis-up" : ""}`}
              style={{ animationDelay: `${0.08 * i}s` }}
              onClick={() => onSelect(p.value)}
              aria-pressed={selected === p.value}
            >
              <div className="ct-path-head">
                <span className="ct-path-num">{p.num}</span>
                <span className={`ct-path-icon ${selected === p.value ? "ct-path-icon--active" : ""}`} aria-hidden="true">
                  {p.icon}
                </span>
              </div>
              <div className="ct-path-audience">{p.audience}</div>
              <h3 className="ct-path-title">{p.title}</h3>
              <p className="ct-path-desc">{p.desc}</p>
              <div className="ct-path-foot">
                <span className="ct-path-response">Response: {p.response}</span>
                <span className="ct-path-arrow" aria-hidden="true">→</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 3: CONTACT FORM WITH EMAILJS
───────────────────────────────────────── */
function ContactForm({ selectedPath }) {
  const [ref, vis] = useInView();
  const [form, setForm] = useState({ 
    name: "", 
    org: "", 
    email: "", 
    phone: "", 
    enquiry: selectedPath, 
    message: "" 
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  useEffect(() => {
    setForm(f => ({ ...f, enquiry: selectedPath }));
  }, [selectedPath]);

  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
    }
  }, []);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const getEnquiryTitle = (value) => {
    return CONTACT_PATHS.find(p => p.value === value)?.title || "General enquiry";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    // Check if EmailJS is configured
    if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === "YOUR_EMAILJS_PUBLIC_KEY") {
      console.warn("EmailJS not configured. Using simulation mode.");
      // Simulation mode for testing
      await new Promise(r => setTimeout(r, 1200));
      setStatus("success");
      return;
    }

    try {
      const templateParams = {
        from_name: form.name,
        from_email: form.email,
        organisation: form.org || "Not specified",
        phone: form.phone || "Not provided",
        enquiry_type: getEnquiryTitle(form.enquiry),
        enquiry_value: form.enquiry,
        message: form.message,
        to_name: "Yomi Williams",
        reply_to: form.email,
        submitted_at: new Date().toLocaleString('en-GB', { 
          timeZone: 'Europe/London',
          dateStyle: 'full',
          timeStyle: 'medium' 
        })
      };

      const response = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setStatus("success");
        // Optionally reset form
        // setForm({ name: "", org: "", email: "", phone: "", enquiry: selectedPath, message: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  const pathLabel = CONTACT_PATHS.find(p => p.value === selectedPath)?.title || "General enquiry";

  return (
    <section className="ct-form-section" ref={ref} aria-labelledby="ct-form-h">
      <div className="ct-inner ct-form-grid">

        {/* Left — form */}
        <div className={`ct-form-left ${vis ? "ct-vis-up" : ""}`}>
          <div className="ct-kicker">
            <span className="ct-pip" aria-hidden="true" />
            <span className="ct-kicker-text">Send a message</span>
          </div>
          <h2 className="ct-section-h" id="ct-form-h">Start the conversation</h2>
          <p className="ct-section-sub" style={{ marginBottom: 0 }}>
            Enquiry type: <strong>{pathLabel}</strong>
          </p>

          {status === "success" ? (
            <div className="ct-success" role="alert">
              <div className="ct-success-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="ct-success-title">Message received.</h3>
              <p className="ct-success-body">
                Thank you for reaching out. We will be in touch within the response window for your enquiry type.
              </p>
              <button className="ct-success-reset" onClick={() => { 
                setStatus("idle"); 
                setForm({ name: "", org: "", email: "", phone: "", enquiry: selectedPath, message: "" }); 
              }}>
                Send another message
              </button>
            </div>
          ) : (
            <form className="ct-form" onSubmit={handleSubmit} noValidate>

              <div className="ct-form-row">
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-name">Full name <span aria-hidden="true">*</span></label>
                  <input
                    id="ct-name" name="name" type="text"
                    className="ct-input" required
                    placeholder="Your full name"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-org">Organisation</label>
                  <input
                    id="ct-org" name="org" type="text"
                    className="ct-input"
                    placeholder="Company or institution"
                    value={form.org} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="ct-form-row">
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-email">Email address <span aria-hidden="true">*</span></label>
                  <input
                    id="ct-email" name="email" type="email"
                    className="ct-input" required
                    placeholder="you@organisation.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
                <div className="ct-field">
                  <label className="ct-label" htmlFor="ct-phone">Phone number</label>
                  <input
                    id="ct-phone" name="phone" type="tel"
                    className="ct-input"
                    placeholder="+44 or +234"
                    value={form.phone} onChange={handleChange}
                  />
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-enquiry">Enquiry type</label>
                <div className="ct-select-wrap">
                  <select
                    id="ct-enquiry" name="enquiry"
                    className="ct-input ct-select"
                    value={form.enquiry} onChange={handleChange}
                  >
                    {CONTACT_PATHS.map(p => (
                      <option key={p.value} value={p.value}>{p.title}</option>
                    ))}
                  </select>
                  <span className="ct-select-arrow" aria-hidden="true">▾</span>
                </div>
              </div>

              <div className="ct-field">
                <label className="ct-label" htmlFor="ct-message">Your message <span aria-hidden="true">*</span></label>
                <textarea
                  id="ct-message" name="message"
                  className="ct-input ct-textarea" required
                  rows={6}
                  placeholder="Tell us about your project, question, or how we can help."
                  value={form.message} onChange={handleChange}
                />
              </div>

              {status === "error" && (
                <p className="ct-form-error" role="alert">
                  Something went wrong. Please email us directly at yomi.williams@mawilliamsco.com
                </p>
              )}

              <button
                type="submit"
                className="ct-submit"
                disabled={status === "sending"}
                aria-busy={status === "sending"}
              >
                {status === "sending" ? (
                  <>
                    <span className="ct-spinner" aria-hidden="true" />
                    Sending…
                  </>
                ) : (
                  <>Send message →</>
                )}
              </button>

            </form>
          )}
        </div>

        {/* Right — direct contact sidebar */}
        <div className={`ct-form-right ${vis ? "ct-vis-right" : ""}`}>
          <div className="ct-sidebar">
            <p className="ct-sidebar-label">Direct contact</p>

            <div className="ct-sidebar-item">
              <span className="ct-sidebar-item-title">Email</span>
              <a href="mailto:yomi.williams@mawilliamsco.com" className="ct-sidebar-link">
                yomi.williams@mawilliamsco.com
              </a>
            </div>

            <div className="ct-sidebar-item">
              <span className="ct-sidebar-item-title">UK Office</span>
              <a href="tel:+447444167970" className="ct-sidebar-link">+44 7444 167 970</a>
            </div>

            <div className="ct-sidebar-item">
              <span className="ct-sidebar-item-title">Nigeria Office</span>
              <a href="tel:+2348185811939" className="ct-sidebar-link">+234 818 581 1939</a>
            </div>

            <div className="ct-sidebar-divider" aria-hidden="true" />

            <p className="ct-sidebar-label">Response windows</p>
            {CONTACT_PATHS.map(p => (
              <div key={p.value} className="ct-sidebar-response">
                <span className="ct-sidebar-response-path">{p.title}</span>
                <span className="ct-sidebar-response-time">{p.response}</span>
              </div>
            ))}

            <div className="ct-sidebar-divider" aria-hidden="true" />

            <p className="ct-sidebar-note">
              Gateway Consulting enquiries are reviewed and responded to personally by Yomi Williams. Please include your company name, country of operation, and a brief description of your African market objectives.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   SECTION 4: OFFICES + MAPS
───────────────────────────────────────── */
function Offices() {
  const [ref, vis] = useInView();
  const [activeOffice, setActiveOffice] = useState(0);

  return (
    <section className="ct-offices-section" ref={ref} aria-labelledby="ct-offices-h">
      <div className="ct-inner">
        <div className={`ct-section-header ${vis ? "ct-vis-up" : ""}`}>
          <div className="ct-kicker">
            <span className="ct-pip" aria-hidden="true" />
            <span className="ct-kicker-text">Our offices</span>
          </div>
          <h2 className="ct-section-h" id="ct-offices-h">London · Lagos</h2>
          <p className="ct-section-sub">
            Two offices. One group. UK-registered for international contracting. Lagos-based for field delivery.
          </p>
        </div>

        {/* Office toggle */}
        <div className={`ct-office-toggle ${vis ? "ct-vis-up" : ""}`} style={{ animationDelay: "0.1s" }}>
          {OFFICES.map((o, i) => (
            <button
              key={o.city}
              className={`ct-office-tab ${activeOffice === i ? "ct-office-tab--active" : ""}`}
              onClick={() => setActiveOffice(i)}
              aria-pressed={activeOffice === i}
            >
              <span aria-hidden="true">{o.flag}</span> {o.city}
            </button>
          ))}
        </div>

        {/* Office panel */}
        {OFFICES.map((o, i) => (
          <div
            key={o.city}
            className={`ct-office-panel ${activeOffice === i ? "ct-office-panel--active" : ""} ${vis ? "ct-vis-up" : ""}`}
            style={{ animationDelay: "0.18s" }}
            hidden={activeOffice !== i}
            aria-label={`${o.city} office`}
          >
            {/* Map */}
            <div className="ct-map-wrap">
              <iframe
                title={`${o.city} office map`}
                src={o.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Details */}
            <div className="ct-office-details">
              <div className="ct-office-city-row">
                <span className="ct-office-flag" aria-hidden="true">{o.flag}</span>
                <h3 className="ct-office-city">{o.city}</h3>
              </div>

              <div className="ct-office-role">{o.role}</div>

              <div className="ct-office-address-block">
                <p className="ct-office-detail-label">Address</p>
                <p className="ct-office-address">{o.address}</p>
              </div>

              <div className="ct-office-address-block">
                <p className="ct-office-detail-label">Phone</p>
                <a href={`tel:${o.phone.replace(/\s/g, "")}`} className="ct-office-phone">
                  {o.phone}
                </a>
              </div>

              <div className="ct-office-address-block">
                <p className="ct-office-detail-label">Email</p>
                <a href="mailto:yomi.williams@mawilliamsco.com" className="ct-office-phone">
                  yomi.williams@mawilliamsco.com
                </a>
              </div>

              <a
                href={`https://maps.google.com/?q=${encodeURIComponent(o.address.replace(/\n/g, ", "))}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ct-office-directions"
              >
                Get directions →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   CLOSING CTA
───────────────────────────────────────── */
function ClosingCTA() {
  const [ref, vis] = useInView();
  return (
    <section className="ct-cta" ref={ref} aria-labelledby="ct-cta-h">
      <div className="ct-inner">
        <div className={`ct-cta-inner ${vis ? "ct-vis-up" : ""}`}>
          <div className="ct-kicker">
            <span className="ct-pip" aria-hidden="true" />
            <span className="ct-kicker-text" style={{ color: "rgba(201,168,76,0.85)" }}>The group</span>
          </div>
          <h2 className="ct-cta-h" id="ct-cta-h">
            Not sure where to start?<br />
            <span style={{ color: "#C9A84C" }}>Explore the group.</span>
          </h2>
          <div className="ct-cta-btns">
            <a href="/gateway" className="ct-btn-gold">Gateway Consulting</a>
            <a href="/institute" className="ct-btn-green">The Institute</a>
            <a href="/partners" className="ct-btn-ghost">Partner With Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────
   ROOT + STYLES (unchanged, kept from original)
───────────────────────────────────────── */
export default function Contact() {
  const [selectedPath, setSelectedPath] = useState("gateway");

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        :root {
          --deep:  #1E3622; --green: #2F5233; --mid: #3D6B42;
          --gold:  #C9A84C; --pale: #EBF2EB; --ink: #1A1A18;
          --muted: #7A7A74; --cream: #FAF8F4; --white: #FFFFFF;
          --fh: "M PLUS U", system-ui, sans-serif;
          --fb: "Work Sans", system-ui, sans-serif;
        }
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .contact-page { font-family: var(--fb); background: var(--cream); color: var(--ink); overflow-x: hidden; }

        /* ── Animations ── */
        .ct-vis-up    { animation: ct-fadeUp   0.65s ease both; }
        .ct-vis-right { animation: ct-fadeRight 0.65s ease both; }
        @keyframes ct-fadeUp    { from { opacity:0; transform:translateY(22px); } to { opacity:1; transform:none; } }
        @keyframes ct-fadeRight { from { opacity:0; transform:translateX(22px); } to { opacity:1; transform:none; } }

        /* ── Shared ── */
        .ct-inner { max-width: 1160px; margin: 0 auto; padding: 0 48px; }

        .ct-kicker { display: flex; align-items: center; gap: 9px; margin-bottom: 14px; }
        .ct-pip { width: 7px; height: 7px; border-radius: 50%; background: var(--gold); flex-shrink: 0; display: block; }
        .ct-kicker-text { font-size: 10.5px; font-weight: 700; letter-spacing: 0.13em; text-transform: uppercase; color: var(--green); }

        .ct-section-h {
          font-family: var(--fh); font-size: clamp(26px, 3vw, 40px);
          font-weight: 800; line-height: 1.1; letter-spacing: -0.02em;
          color: var(--ink); margin-bottom: 12px;
        }
        .ct-section-sub { font-size: 15px; line-height: 1.75; color: var(--ink); max-width: 560px; }

        .ct-gold { color: var(--gold); }

        /* ══════════════════════
           HERO
        ══════════════════════ */
        .ct-hero {
          background: var(--deep); padding: 120px 0 72px;
          position: relative; overflow: hidden;
        }
        .ct-hero-geo-1 {
          position: absolute; top: -100px; right: -100px;
          width: 400px; height: 400px; border-radius: 50%;
          background: radial-gradient(circle, rgba(61,107,66,0.35) 0%, transparent 70%);
          pointer-events: none;
        }
        .ct-hero-geo-2 {
          position: absolute; bottom: -60px; left: -60px;
          width: 280px; height: 280px; border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,0.1) 0%, transparent 70%);
          pointer-events: none;
        }
        .ct-dot-grid {
          position: absolute; top: 40px; right: 40px;
          display: grid; grid-template-columns: repeat(8, 8px);
          gap: 8px; opacity: 0.14; pointer-events: none;
        }
        .ct-dot-grid span { width: 3px; height: 3px; border-radius: 50%; background: var(--gold); display: block; }

        .ct-hero-inner {
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 72px; align-items: center;
          position: relative; z-index: 1; padding-bottom: 56px;
        }

        .ct-hero-left { opacity: 0; }
        .ct-hero-left.ct-vis-up { opacity: 1; }
        .ct-hero-h1 {
          font-family: var(--fh); font-size: clamp(32px, 4vw, 54px);
          font-weight: 800; line-height: 1.08; letter-spacing: -0.025em;
          color: var(--white); margin-bottom: 18px;
        }
        .ct-hero-sub {
          font-size: 14.5px; line-height: 1.78;
          color: rgba(255,255,255,0.52); margin-bottom: 28px;
        }
        .ct-hero-direct { display: flex; flex-direction: column; gap: 8px; }
        .ct-hero-email {
          font-family: var(--fh); font-size: 14px; font-weight: 600;
          color: var(--gold); text-decoration: none; letter-spacing: 0.01em;
          transition: opacity 0.2s;
        }
        .ct-hero-email:hover { opacity: 0.8; }
        .ct-hero-phones { display: flex; align-items: center; gap: 8px; flex-wrap: wrap; }
        .ct-hero-phone {
          font-size: 13px; font-weight: 500; color: var(--white);
          text-decoration: none; transition: color 0.2s;
        }
        .ct-hero-phone:hover { color: var(--gold); }
        .ct-hero-phone-sep { color: var(--white); }

        .ct-hero-right { opacity: 0; display: flex; flex-direction: column; }
        .ct-hero-right.ct-vis-right { opacity: 1; }
        .ct-hero-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(201,168,76,0.18);
          border-radius: 5px; padding: 20px 22px;
        }
        .ct-hero-card-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 8px;
        }
        .ct-hero-card-body {
          font-size: 13px; line-height: 1.7; color: var(--white); margin-bottom: 12px;
        }
        .ct-hero-card-link {
          font-size: 12px; font-weight: 600; letter-spacing: 0.05em;
          color: rgba(255,255,255,0.65); text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 1px;
          transition: color 0.2s, border-color 0.2s;
        }
        .ct-hero-card-link:hover { color: var(--gold); border-color: var(--gold); }

        .ct-hero-rule-wrap { padding-top: 0; }
        .ct-hero-rule {
          height: 1px;
          background: linear-gradient(90deg, var(--gold), rgba(201,168,76,0.08));
          opacity: 0.45;
        }

        /* ══════════════════════
           CONTACT PATHS
        ══════════════════════ */
        .ct-paths-section { background: var(--cream); padding: 88px 0 80px; }
        .ct-section-header { margin-bottom: 48px; }
        .ct-paths-grid {
          display: grid; grid-template-columns: repeat(4, 1fr);
          gap: 1px; background: rgba(47,82,51,0.12);
          border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
        }
        .ct-path-card {
          background: var(--white); padding: 26px 22px;
          text-align: left; border: none; cursor: pointer;
          display: flex; flex-direction: column; gap: 8px;
          opacity: 0; transition: background 0.25s;
        }
        .ct-path-card.ct-vis-up { opacity: 1; }
        .ct-path-card:hover { background: var(--pale); }
        .ct-path-card--active { background: var(--deep) !important; }

        .ct-path-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 4px; }
        .ct-path-num {
          font-family: var(--fh); font-size: 11px; font-weight: 700;
          letter-spacing: 0.08em; color: var(--gold);
        }
        .ct-path-icon { color: var(--ink); transition: color 0.2s; }
        .ct-path-icon--active { color: var(--gold); }

        .ct-path-audience {
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: var(--green);
        }
        .ct-path-card--active .ct-path-audience { color: rgba(201,168,76,0.7); }

        .ct-path-title {
          font-family: var(--fh); font-size: 15px; font-weight: 700;
          line-height: 1.25; letter-spacing: -0.01em; color: var(--ink);
        }
        .ct-path-card--active .ct-path-title { color: var(--white); }

        .ct-path-desc {
          font-size: 12.5px; line-height: 1.68; color: var(--ink); flex: 1;
        }
        .ct-path-card--active .ct-path-desc { color: rgba(255,255,255,0.52); }

        .ct-path-foot {
          display: flex; align-items: center; justify-content: space-between;
          padding-top: 12px; border-top: 1px solid rgba(47,82,51,0.1); margin-top: auto;
        }
        .ct-path-card--active .ct-path-foot { border-top-color: rgba(255,255,255,0.1); }
        .ct-path-response { font-size: 10.5px; font-weight: 600; color: var(--ink); }
        .ct-path-card--active .ct-path-response { color: rgba(255,255,255,0.45); }
        .ct-path-arrow { font-size: 16px; color: var(--gold); }

        /* ══════════════════════
           FORM SECTION
        ══════════════════════ */
        .ct-form-section { background: var(--pale); padding: 88px 0 80px; }
        .ct-form-grid {
          display: grid; grid-template-columns: 1fr 360px;
          gap: 56px; align-items: start;
        }

        .ct-form-left { opacity: 0; }
        .ct-form-left.ct-vis-up { opacity: 1; }
        .ct-form-right { opacity: 0; }
        .ct-form-right.ct-vis-right { opacity: 1; }

        .ct-form { display: flex; flex-direction: column; gap: 20px; margin-top: 28px; }
        .ct-form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .ct-field { display: flex; flex-direction: column; gap: 6px; }
        .ct-label {
          font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--green);
        }
        .ct-label span { color: var(--gold); }
        .ct-input {
          font-family: var(--fb); font-size: 14px; color: var(--ink);
          background: var(--white);
          border: 1px solid rgba(47,82,51,0.2);
          border-radius: 3px; padding: 12px 14px;
          outline: none; width: 100%;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
        }
        .ct-input:focus {
          border-color: var(--green);
          box-shadow: 0 0 0 3px rgba(47,82,51,0.1);
        }
        .ct-input::placeholder { color: rgba(122,122,116,0.5); }
        .ct-textarea { resize: vertical; min-height: 140px; }

        .ct-select-wrap { position: relative; }
        .ct-select { cursor: pointer; padding-right: 36px; }
        .ct-select-arrow {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          color: var(--ink); pointer-events: none; font-size: 12px;
        }

        .ct-form-error {
          font-size: 13px; color: #c0392b; background: #fdf0ed;
          border: 1px solid rgba(192,57,43,0.2); border-radius: 3px;
          padding: 12px 14px;
        }

        .ct-submit {
          font-family: var(--fb); font-size: 13px; font-weight: 700;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--white); background: var(--green);
          border: none; padding: 15px 28px; border-radius: 3px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 10px;
          align-self: flex-start;
          transition: background 0.2s, transform 0.15s;
        }
        .ct-submit:hover:not(:disabled) { background: var(--deep); transform: translateY(-1px); }
        .ct-submit:disabled { opacity: 0.7; cursor: not-allowed; }

        .ct-spinner {
          width: 14px; height: 14px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: var(--white);
          animation: ct-spin 0.7s linear infinite; flex-shrink: 0;
        }
        @keyframes ct-spin { to { transform: rotate(360deg); } }

        /* Success */
        .ct-success {
          margin-top: 28px; background: var(--white);
          border: 1px solid rgba(47,82,51,0.15);
          border-left: 3px solid var(--green);
          border-radius: 4px; padding: 32px 28px;
          display: flex; flex-direction: column; align-items: flex-start; gap: 10px;
        }
        .ct-success-icon {
          width: 44px; height: 44px; border-radius: 50%;
          background: var(--pale-green, var(--pale));
          display: flex; align-items: center; justify-content: center;
          color: var(--green);
        }
        .ct-success-title {
          font-family: var(--fh); font-size: 20px; font-weight: 700; color: var(--ink);
        }
        .ct-success-body { font-size: 14px; line-height: 1.72; color: var(--ink); }
        .ct-success-reset {
          font-family: var(--fb); font-size: 12px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          color: var(--green); background: none; border: none; cursor: pointer;
          border-bottom: 1px solid rgba(47,82,51,0.3); padding-bottom: 2px; margin-top: 6px;
          transition: color 0.2s;
        }
        .ct-success-reset:hover { color: var(--deep); }

        /* Sidebar */
        .ct-sidebar {
          background: var(--white); border: 1px solid rgba(47,82,51,0.12);
          border-radius: 5px; padding: 28px 24px;
          display: flex; flex-direction: column; gap: 0;
          position: sticky; top: 80px;
        }
        .ct-sidebar-label {
          font-size: 10px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 16px;
        }
        .ct-sidebar-item { margin-bottom: 16px; }
        .ct-sidebar-item-title {
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--ink); display: block; margin-bottom: 4px;
        }
        .ct-sidebar-link {
          font-size: 13px; font-weight: 500; color: var(--ink);
          text-decoration: none; transition: color 0.2s;
          word-break: break-word;
        }
        .ct-sidebar-link:hover { color: var(--green); }
        .ct-sidebar-divider {
          height: 1px; background: rgba(47,82,51,0.1); margin: 16px 0;
        }
        .ct-sidebar-response {
          display: flex; align-items: center; justify-content: space-between;
          padding: 8px 0; border-bottom: 1px solid rgba(47,82,51,0.07);
          gap: 8px;
        }
        .ct-sidebar-response:last-of-type { border-bottom: none; }
        .ct-sidebar-response-path { font-size: 12px; font-weight: 500; color: var(--ink); }
        .ct-sidebar-response-time {
          font-size: 10.5px; font-weight: 600; color: var(--ink); white-space: nowrap;
        }
        .ct-sidebar-note {
          font-size: 12px; line-height: 1.7; color: var(--ink); margin-top: 4px;
          padding-top: 16px; border-top: 1px solid rgba(47,82,51,0.1);
        }

        /* ══════════════════════
           OFFICES
        ══════════════════════ */
        .ct-offices-section { background: var(--cream); padding: 88px 0 80px; }

        .ct-office-toggle {
          display: flex; gap: 4px; margin-bottom: 24px;
        }
        .ct-office-tab {
          font-family: var(--fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          padding: 10px 22px; border-radius: 3px;
          border: 1px solid rgba(47,82,51,0.2);
          background: var(--white); color: var(--ink);
          cursor: pointer; display: flex; align-items: center; gap: 8px;
          transition: background 0.2s, color 0.2s, border-color 0.2s;
        }
        .ct-office-tab:hover { background: var(--pale); color: var(--green); }
        .ct-office-tab--active {
          background: var(--deep); color: var(--gold);
          border-color: var(--deep);
        }

        .ct-office-panel {
          display: grid; grid-template-columns: 1fr 340px;
          gap: 0; border: 1px solid rgba(47,82,51,0.12);
          border-radius: 6px; overflow: hidden;
          opacity: 0;
        }
        .ct-office-panel--active { opacity: 1; }
        .ct-office-panel.ct-vis-up.ct-office-panel--active { opacity: 1; }

        .ct-map-wrap {
          height: 440px; background: var(--pale);
          border-right: 1px solid rgba(47,82,51,0.12);
        }

        .ct-office-details {
          background: var(--white); padding: 36px 32px;
          display: flex; flex-direction: column; gap: 0;
        }
        .ct-office-city-row {
          display: flex; align-items: center; gap: 12px; margin-bottom: 8px;
        }
        .ct-office-flag { font-size: 24px; }
        .ct-office-city {
          font-family: var(--fh); font-size: 24px; font-weight: 800;
          color: var(--ink); letter-spacing: -0.02em;
        }
        .ct-office-role {
          font-size: 11.5px; font-weight: 500; color: var(--green);
          line-height: 1.6; margin-bottom: 24px; letter-spacing: 0.02em;
        }
        .ct-office-address-block { margin-bottom: 18px; }
        .ct-office-detail-label {
          font-size: 9.5px; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--gold); margin-bottom: 5px;
        }
        .ct-office-address {
          font-size: 13.5px; line-height: 1.75; color: var(--ink);
          white-space: pre-line;
        }
        .ct-office-phone {
          font-size: 13.5px; font-weight: 500; color: var(--ink);
          text-decoration: none; transition: color 0.2s;
        }
        .ct-office-phone:hover { color: var(--green); }
        .ct-office-directions {
          display: inline-flex; margin-top: 24px;
          font-size: 12px; font-weight: 700; letter-spacing: 0.06em;
          text-transform: uppercase; color: var(--green);
          text-decoration: none; border-bottom: 1px solid rgba(47,82,51,0.3);
          padding-bottom: 2px; transition: color 0.2s, border-color 0.2s;
        }
        .ct-office-directions:hover { color: var(--deep); border-color: var(--deep); }

        /* ══════════════════════
           CLOSING CTA
        ══════════════════════ */
        .ct-cta { background: #0F1E13; padding: 88px 0; }
        .ct-cta-inner { opacity: 0; }
        .ct-cta-inner.ct-vis-up { opacity: 1; }
        .ct-cta-h {
          font-family: var(--fh); font-size: clamp(28px, 3.5vw, 44px);
          font-weight: 800; line-height: 1.12; letter-spacing: -0.022em;
          color: var(--white); margin-bottom: 32px;
        }
        .ct-cta-btns { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
        .ct-btn-gold {
          font-family: var(--fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: #0F1E13; background: var(--gold);
          border: none; padding: 14px 26px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .ct-btn-gold:hover { background: #d9b85c; transform: translateY(-1px); }
        .ct-btn-green {
          font-family: var(--fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white); background: var(--green);
          border: none; padding: 14px 26px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: background 0.2s, transform 0.15s;
        }
        .ct-btn-green:hover { background: var(--mid); transform: translateY(-1px); }
        .ct-btn-ghost {
          font-family: var(--fb); font-size: 12px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white);
          border: 1px solid rgba(255,255,255,0.2); background: transparent;
          padding: 13px 24px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: border-color 0.2s, color 0.2s;
        }
        .ct-btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: var(--white); }

        /* ══════════════════════
           RESPONSIVE
        ══════════════════════ */
        @media (max-width: 1024px) {
          .ct-paths-grid { grid-template-columns: repeat(2, 1fr); }
          .ct-office-panel { grid-template-columns: 1fr; }
          .ct-map-wrap { height: 320px; border-right: none; border-bottom: 1px solid rgba(47,82,51,0.12); }
          .ct-form-grid { grid-template-columns: 1fr; }
          .ct-sidebar { position: static; }
        }
        @media (max-width: 768px) {
          .ct-inner { padding: 0 24px; }
          .ct-hero { padding: 80px 0 56px; }
          .ct-hero-inner { grid-template-columns: 1fr; gap: 36px; }
          .ct-paths-section, .ct-form-section, .ct-offices-section, .ct-cta { padding: 64px 0; }
          .ct-form-row { grid-template-columns: 1fr; }
          .ct-paths-grid { grid-template-columns: 1fr; }
          .ct-submit { width: 100%; justify-content: center; }
        }
        @media (max-width: 480px) {
          .ct-cta-btns { flex-direction: column; align-items: stretch; }
          .ct-btn-gold, .ct-btn-green, .ct-btn-ghost { text-align: center; }
        }
      `}</style>

      <div className="contact-page">
        <Hero />
        <ContactPaths onSelect={setSelectedPath} selected={selectedPath} />
        <ContactForm selectedPath={selectedPath} />
        <Offices />
        <ClosingCTA />
      </div>
    </>
  );
}