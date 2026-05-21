export default function TermsOfUse() {
  return (
    <section className="bg-[var(--color-page)] text-[var(--color-text-primary)]">
      {/* HERO */}
      <div className="border-b border-black/5 bg-[var(--color-cream)]">
        <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-[var(--color-gold-accent)]" />
            <span className="uppercase tracking-[0.18em] text-xs font-semibold text-[var(--color-brand-primary)] font-[var(--font-body)]">
              Legal
            </span>
          </div>

          <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl font-extrabold leading-[0.95] tracking-[-0.04em] text-[var(--color-text-primary)]">
            Terms of Use
          </h1>

          <p className="mt-6 max-w-2xl text-[15px] leading-8 text-[var(--color-text-secondary)] font-[var(--font-body)]">
            These Terms of Use govern access to and use of the M.A. Williams &
            Co. website, digital platforms, and related
            services. By using this website, you agree to comply with the terms
            outlined below.
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-sm text-[var(--color-text-secondary)]">
            <span>Effective Date: July 2026</span>
            <span className="opacity-40">•</span>
            <span>M.A. Williams & Co.</span>
            <span className="opacity-40">•</span>
            <span>London</span>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-16">

          {/* SIDEBAR */}
          <aside className="hidden lg:block">
            <div className="sticky top-28">
              <p className="uppercase tracking-[0.16em] text-[11px] font-bold text-[var(--color-gold-accent)] mb-5">
                Sections
              </p>

              <nav className="flex flex-col gap-4 text-sm">
                <a href="#acceptance" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition">
                  Acceptance
                </a>

                <a href="#intellectual-property" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition">
                  Intellectual Property
                </a>

                <a href="#website-use" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition">
                  Website Use
                </a>

                <a href="#educational-content" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition">
                  Educational Content
                </a>

                <a href="#external-links" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition">
                  External Links
                </a>

                <a href="#liability" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition">
                  Liability
                </a>

                <a href="#privacy" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition">
                  Privacy
                </a>

                <a href="#changes" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition">
                  Changes
                </a>

                <a href="#contact" className="text-[var(--color-text-secondary)] hover:text-[var(--color-brand-primary)] transition">
                  Contact
                </a>
              </nav>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <div className="space-y-16">

            {/* SECTION */}
            <div id="acceptance">
              <h2 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.03em] mb-5">
                Acceptance of Terms
              </h2>

              <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                By accessing or using this website, you acknowledge that you
                have read, understood, and agreed to these Terms of Use. If you
                do not agree with these terms, you should discontinue use of the
                website immediately.
              </p>
            </div>

            {/* SECTION */}
            <div id="intellectual-property">
              <h2 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.03em] mb-5">
                Intellectual Property
              </h2>

              <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                All written materials, educational frameworks, visual assets,
                proprietary systems, strategic models, trademarks, branding, and
                digital content published on this website remain the property of
                M.A. Williams & Co. unless otherwise stated.
              </p>

              <p className="mt-5 text-[15px] leading-8 text-[var(--color-text-secondary)]">
                No material from this website may be reproduced, redistributed,
                republished, or commercially exploited without prior written
                consent from M.A. Williams & Co.
              </p>
            </div>

            {/* SECTION */}
            <div id="website-use">
              <h2 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.03em] mb-5">
                Acceptable Website Use
              </h2>

              <div className="space-y-5 text-[15px] leading-8 text-[var(--color-text-secondary)]">
                <p>
                  You agree to use this website lawfully and responsibly.
                </p>

                <p>
                  You may not:
                </p>

                <ul className="space-y-3 pl-5 list-disc marker:text-[var(--color-gold-accent)]">
                  <li>Attempt unauthorized access to systems or infrastructure.</li>
                  <li>Distribute malicious software or harmful code.</li>
                  <li>Misrepresent your identity or affiliations.</li>
                  <li>Copy or republish proprietary materials without permission.</li>
                  <li>Use the website in a way that disrupts normal operations.</li>
                </ul>
              </div>
            </div>

            {/* SECTION */}
            <div id="educational-content">
              <h2 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.03em] mb-5">
                Educational & Advisory Content
              </h2>

              <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                Information provided through this website, including educational
                resources, strategic insights, consulting commentary, and
                training materials, is intended for general informational
                purposes only and should not be interpreted as formal legal,
                financial, or investment advice.
              </p>
            </div>

            {/* SECTION */}
            <div id="external-links">
              <h2 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.03em] mb-5">
                External Links
              </h2>

              <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                This website may contain links to external platforms or third-party
                websites. M.A. Williams & Co. does not control or assume
                responsibility for the content, policies, or availability of
                those external services.
              </p>
            </div>

            {/* SECTION */}
            <div id="liability">
              <h2 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.03em] mb-5">
                Limitation of Liability
              </h2>

              <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                M.A. Williams & Co. shall not be held liable for any direct,
                indirect, incidental, consequential, or business-related damages
                arising from the use of this website or reliance on any
                information provided through it.
              </p>
            </div>

            {/* SECTION */}
            <div id="privacy">
              <h2 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.03em] mb-5">
                Privacy & Communications
              </h2>

              <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                Information submitted through forms or communications may be used
                to respond to enquiries, manage institutional relationships, and
                improve service delivery. We do not sell personal data to third
                parties.
              </p>
            </div>

            {/* SECTION */}
            <div id="changes">
              <h2 className="font-[var(--font-heading)] text-3xl font-extrabold tracking-[-0.03em] mb-5">
                Changes to These Terms
              </h2>

              <p className="text-[15px] leading-8 text-[var(--color-text-secondary)]">
                M.A. Williams & Co. reserves the right to update or revise these
                Terms of Use at any time without prior notice. Continued use of
                the website following updates constitutes acceptance of the
                revised terms.
              </p>
            </div>

            {/* CONTACT */}
            <div
              id="contact"
              className="border border-black/5 bg-[var(--color-card)] rounded-xl p-8"
            >
              <p className="uppercase tracking-[0.14em] text-[11px] font-bold text-[var(--color-gold-accent)] mb-4">
                Contact
              </p>

              <h2 className="font-[var(--font-heading)] text-2xl font-bold tracking-[-0.03em] mb-4">
                Questions regarding these terms
              </h2>

              <p className="text-[15px] leading-8 text-[var(--color-text-secondary)] mb-6 max-w-2xl">
                For legal enquiries, institutional communications, or questions
                regarding these Terms of Use, please contact M.A. Williams &
                Co. directly.
              </p>

              <div className="flex flex-col gap-3 text-sm">
                <a
                  href="mailto:info@mawilliams.com"
                  className="text-[var(--color-brand-primary)] hover:opacity-70 transition"
                >
                  info@mawilliams.com
                </a>

                <span className="text-[var(--color-text-secondary)]">
                  London
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}