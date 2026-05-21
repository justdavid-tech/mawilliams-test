export default function Privacy() {
  return (
    <section className="bg-[var(--color-background)] text-[var(--color-text-primary)]">
      {/* Hero */}
      <div className="border-b border-[rgba(47,82,51,0.12)] bg-[var(--color-cream)]">
        <div className="mx-auto max-w-5xl px-6 py-24 md:px-10 md:py-32">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-brand-primary)]">
            Legal
          </p>

          <h1
            className="font-[var(--font-heading)] text-4xl font-extrabold leading-tight md:text-6xl"
          >
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-text-secondary)] md:text-lg">
            This Privacy Policy explains how M.A. Williams & Co. collects,
            uses, stores, and protects information obtained through this
            website and related services.
          </p>

          <div className="mt-8 h-[2px] w-24 bg-[var(--color-gold-accent)]" />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 md:py-24">
        <div className="space-y-14">
          {/* Section */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-brand-primary)]">
              1. Introduction
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
              M.A. Williams & Co. (“we,” “our,” or “us”) is committed to
              protecting your privacy and handling your personal information
              responsibly. By using this website, you agree to the collection
              and use of information in accordance with this policy.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-brand-primary)]">
              2. Information We Collect
            </h2>

            <div className="mt-5 space-y-5 text-[var(--color-text-secondary)] leading-8">
              <p>
                We may collect information that you voluntarily provide when you:
              </p>

              <ul className="list-disc space-y-3 pl-6">
                <li>Submit a contact or inquiry form</li>
                <li>Request consulting or institutional information</li>
                <li>Communicate with us through email or other channels</li>
              </ul>

              <p>
                The information collected may include your name, email address,
                company name, phone number, and any details you choose to share.
              </p>
            </div>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-brand-primary)]">
              3. How We Use Information
            </h2>

            <div className="mt-5 space-y-5 text-[var(--color-text-secondary)] leading-8">
              <p>Your information may be used to:</p>

              <ul className="list-disc space-y-3 pl-6">
                <li>Respond to inquiries and communication requests</li>
                <li>Provide consulting or institutional services</li>
                <li>Improve website functionality and user experience</li>
                <li>Send relevant updates or operational notices</li>
                <li>Maintain internal records and analytics</li>
              </ul>
            </div>
          </div>


          {/* Section */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-brand-primary)]">
              4. Data Protection
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
              We implement reasonable administrative and technical safeguards to
              help protect information from unauthorized access, misuse,
              disclosure, or alteration. However, no method of electronic
              storage or internet transmission is completely secure.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-brand-primary)]">
              5. Third-Party Services
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
              We may use trusted third-party platforms or services for hosting,
              analytics, communications, or form processing. These providers may
              process limited data necessary to perform their services but are
              expected to maintain appropriate privacy standards.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-brand-primary)]">
              6. Data Retention
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
              We retain information only for as long as reasonably necessary to
              fulfill operational, legal, or administrative purposes.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-brand-primary)]">
              7. Your Rights
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
              Depending on your jurisdiction, you may have rights relating to
              access, correction, deletion, or restriction of your personal
              information. Requests regarding personal data may be submitted
              through the contact channels provided on this website.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-brand-primary)]">
              8. Changes to This Policy
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
              We may update this Privacy Policy periodically to reflect changes
              in operations, legal obligations, or website functionality.
              Continued use of the website after updates constitutes acceptance
              of the revised policy.
            </p>
          </div>

          {/* Section */}
          <div>
            <h2 className="font-[var(--font-heading)] text-2xl font-bold text-[var(--color-brand-primary)]">
              9. Contact
            </h2>

            <p className="mt-5 leading-8 text-[var(--color-text-secondary)]">
              For questions regarding this Privacy Policy or requests related to
              your information, please contact M.A. Williams & Co. through the
              official contact channels listed on this website.
            </p>
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-20 border-t border-[rgba(47,82,51,0.12)] pt-8">
          <p className="text-sm tracking-wide text-[var(--color-text-secondary)]">
            © {new Date().getFullYear()} M.A. Williams & Co. All rights
            reserved.
          </p>
        </div>
      </div>
    </section>
  );
}