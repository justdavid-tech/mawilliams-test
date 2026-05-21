export default function QuoteSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');
        
        :root {
          --brand-primary: #2F5233;
          --brand-deep:    #1E3622;
          --gold:          #C9A84C;
          --pale-green:    #EBF2EB;
          --ink:           #1A1A18;
          --muted:         #7A7A74;
          --cream:         #FAF8F4;
          --white:         #FFFFFF;
          --font-heading:  "M PLUS U", system-ui, sans-serif;
          --font-body:     "Work Sans", system-ui, sans-serif;
        }

        .quote-centered {
          background: var(--cream);
          padding: 96px 48px;
          position: relative;
          overflow: hidden;
        }

        .quote-centered::before {
          content: '"';
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 180px;
          font-family: var(--font-heading);
          color: rgba(9, 9, 9, 0.08);
          font-weight: 800;
          line-height: 1;
          pointer-events: none;
        }

        .quote-centered-inner {
          max-width: 880px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .quote-centered-text {
          font-family: var(--font-heading);
          font-size: clamp(24px, 4vw, 36px);
          font-weight: 600;
          line-height: 1.35;
          letter-spacing: -0.01em;
          color: var(--ink);
          margin: 0 0 32px;
          quotes: none;
        }

        .quote-centered-attribution {
          font-family: var(--font-body);
          font-size: 20px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--gold);
          margin: 0 0 6px;
        }

        .quote-centered-context {
          font-family: var(--font-body);
          font-size: 12px;
          color: #000;
          margin: 0;
        }

        .quote-centered-divider {
          width: 60px;
          height: 2px;
          background: var(--gold);
          margin: 28px auto 0;
          opacity: 0.4;
        }

      `}</style>

      <section className="quote-centered">
        <div className="quote-centered-inner">
          <p className="quote-centered-text">
         I am not building businesses. I am building a structure where knowledge is protected, land is secured, and impact is delivered in that order because that sequence determines whether what we build lasts a decade.
          </p>
          <p className="quote-centered-attribution">Yomi Williams</p>
          <p className="quote-centered-context">On Legacy & Architecture</p>
          <div className="quote-centered-divider" />
        </div>
      </section>
    </>
  );
}