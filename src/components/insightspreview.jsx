import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getLatestPosts, urlFor } from '../lib/sanity';

/* ─── Category mapping ───────────────────────────────────────── */
const CATEGORY_LABELS = {
  'regenerative-farming': 'Regenerative Farming',
  'precision-agriculture': 'Precision Agriculture',
  'institutional': 'Institutional',
  'innovation': 'Innovation',
  'vertical-farming': 'Vertical Farming',
  'sustainability': 'Sustainability',
  'case-studies': 'Case Studies',
  'announcements': 'Announcements',
};

/* ─── intersection observer hook ────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVis(true); obs.disconnect(); } },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, vis];
}

/* ─── format date ───────────────────────────────────────────── */
function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

/* ─── Skeleton Loader Card ──────────────────────────────────── */
function SkeletonCard({ index }) {
  const [ref, vis] = useInView(0.1);
  const delay = index * 80;

  return (
    <div
      ref={ref}
      className="gc-ins-skeleton"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(30px)",
        transition: `opacity .7s ease ${delay}ms, transform .8s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
      }}
    >
      <div className="gc-ins-skeleton-img" />
      <div className="gc-ins-skeleton-content">
        <div className="gc-ins-skeleton-line" style={{ width: '40%' }} />
        <div className="gc-ins-skeleton-line" style={{ width: '85%' }} />
        <div className="gc-ins-skeleton-line" style={{ width: '100%' }} />
        <div className="gc-ins-skeleton-line" style={{ width: '70%' }} />
      </div>
    </div>
  );
}

/* ─── Article Card Component ────────────────────────────────── */
function ArticleCard({ post, index }) {
  const [ref, vis] = useInView(0.15);
  const delay = index * 100;
  const categoryLabel = CATEGORY_LABELS[post.category] || post.category || "Insights";

  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(600).height(380).fit('crop').auto('format').url()
    : "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80";

  return (
    <Link
      ref={ref}
      to={`/insights/${post.slug?.current || post.slug}`}
      className="gc-ins-card"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(36px)",
        transition: `opacity .8s ease ${delay}ms, transform .9s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        textDecoration: "none",
      }}
    >
      {/* Image Section */}
      <div className="gc-ins-img-wrap">
        <img 
          src={imageUrl} 
          alt={post.coverImage?.alt || post.title} 
          className="gc-ins-img"
        />
        <div className="gc-ins-img-overlay" />
        
        {/* Category Badge */}
        <span className="gc-ins-cat-badge">
          {categoryLabel}
        </span>
        
        {/* Featured Badge */}
        {post.featured && (
          <span className="gc-ins-featured-badge">
            Featured
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="gc-ins-card-body">
        {/* Meta Row */}
        <div className="gc-ins-meta-row">
          <span className="gc-ins-meta-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <path d="M16 2v4M8 2v4M3 10h18" />
            </svg>
            {formatDate(post.publishedAt)}
          </span>
          <span className="gc-ins-meta-dot" />
          <span className="gc-ins-meta-item">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime || 5} min read
          </span>
        </div>

        {/* Title */}
        <h3 className="gc-ins-title">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="gc-ins-excerpt">{post.excerpt}</p>

        <div className="gc-ins-rule" />

        {/* Footer with Author */}
        <div className="gc-ins-footer">
          <div className="gc-ins-author">
            {post.author?.photo?.asset ? (
              <img
                src={urlFor(post.author.photo).width(40).height(40).fit('crop').url()}
                alt={post.author.name}
                className="gc-ins-author-avatar"
              />
            ) : (
              <div className="gc-ins-author-avatar gc-ins-author-fallback">
                {post.author?.name?.[0] || 'G'}
              </div>
            )}
            <div>
              <p className="gc-ins-author-name">{post.author?.name || 'M.A. Williams'}</p>
              <p className="gc-ins-author-role">{post.author?.role || 'Team'}</p>
            </div>
          </div>
          <span className="gc-ins-read-more">
            Read
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─── Section Header Component ──────────────────────────────── */
function SectionHeader() {
  const [ref, vis] = useInView(0.3);
  
  return (
 <header
      ref={ref}
      className="gc-ins-header"
      style={{
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(28px)",
        transition:
          "opacity .9s ease, transform 1s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      {/* Eyebrow */}
      <div className="gc-ins-kicker" aria-hidden="true">
        <span className="gc-ins-kicker-line" />
        <div className="gc-ins-pip" />
        <span className="gc-ins-kicker-text">
          Insights & Field Intelligence
        </span>
      </div>

      {/* Heading */}
      <h2 className="gc-ins-heading" id="insights-heading">
        Ground Truth Insights
      </h2>

      {/* Subtext */}
      <p className="gc-ins-subhead">
        The institutional engine behind enduring agricultural transformation.
      </p>

      {/* Bottom rule */}
      <div className="gc-ins-header-rule" aria-hidden="true" />
    </header>
  );
}

/* ─── Main Component ────────────────────────────────────────── */
export default function InsightsPreview() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getLatestPosts()
      .then(setPosts)
      .catch(() => setError('Could not load articles. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <style>{`
        /* ── using your design system variables ── */
        .gc-ins-section {
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

        /* ── section shell ── */
        .gc-ins-section {
          background: var(--cream);
          padding: clamp(72px, 10vw, 120px) clamp(20px, 6vw, 96px);
          position: relative;
          overflow: hidden;
          font-family: var(--font-body);
        }

        /* decorative backdrop elements */
        .gc-ins-deco {
          position: absolute;
          top: -200px; right: -200px;
          width: 600px; height: 600px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(47,82,51,.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .gc-ins-deco-2 {
          position: absolute;
          bottom: -120px; left: -120px;
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,168,76,.03) 0%, transparent 70%);
          pointer-events: none;
        }
        
        /* large ghost watermark */
        .gc-ins-watermark {
          position: absolute;
          bottom: 20px; right: 20px;
          font-family: var(--font-heading);
          font-size: clamp(180px, 25vw, 320px);
          font-weight: 300;
          color: rgba(47,82,51,.04);
          line-height: 1;
          pointer-events: none;
          user-select: none;
          letter-spacing: -.04em;
        }

        /* ── header layout ── */
        .gc-ins-header { position: relative; max-width: 820px; margin: 0 auto clamp(56px, 7vw, 90px); text-align: center; z-index: 2;}/* eyebrow */.gc-ins-kicker { display: inline-flex; align-items: center; justify-content: center; gap: 10px; margin-bottom: 22px;}.gc-ins-kicker-line { width: 26px; height: 1px; background: var(--gold); opacity: 0.9;}.gc-ins-pip { width: 6px; height: 6px; border-radius: 999px; background: var(--gold); flex-shrink: 0;}.gc-ins-kicker-text { font-size: 15px; font-weight: 700; letter-spacing: 0.24em; text-transform: uppercase; color: var(--ink); opacity: 0.95;}/* heading */.gc-ins-heading { font-family: var(--font-heading); font-size: clamp(40px, 6vw, 76px); font-weight: 800; line-height: 0.98; letter-spacing: -0.045em; color: var(--ink); margin: 0 0 24px;}.gc-ins-heading em { font-style: italic; font-weight: 800; color: var(--brand-primary); position: relative;}.gc-ins-heading em::after { content: ""; position: absolute; left: 4px; right: 4px; bottom: 6px; height: 10px; background: rgba(201, 168, 76, 0.18); z-index: -1; border-radius: 2px;}/* subheading */.gc-ins-subhead { font-size: clamp(14px, 1.4vw, 16px); font-weight: 500; line-height: 1.9; color: var(--ink); max-width: 700px; margin: 0 auto;}/* bottom rule */.gc-ins-header-rule { width: min(180px, 40%); height: 1px; margin: 34px auto 0; background: linear-gradient(90deg, transparent, rgba(47,82,51,.22), rgba(201,168,76,.5), rgba(47,82,51,.22), transparent);}/* responsive */@media (max-width: 640px) {  .gc-ins-header {    margin-bottom: 56px;  }  .gc-ins-heading {    line-height: 1.04;  }  .gc-ins-subhead {    font-size: 13.5px;    line-height: 1.8;  }}

        /* ── Card Styles ── */
        .gc-ins-card {
          display: flex; 
          flex-direction: column;
          background: var(--white);
          border: 1px solid rgba(47,82,51,0.08);
          overflow: hidden;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
                      box-shadow 0.3s ease, 
                      border-color 0.3s ease;
        }
        .gc-ins-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 32px rgba(0,0,0,.08);
          border-color: var(--brand-primary);
        }

        /* Image */
        .gc-ins-img-wrap { 
          overflow: hidden; 
          position: relative; 
          flex-shrink: 0; 
          height: 260px;
        }
        .gc-ins-img { 
          width: 100%; 
          height: 100%; 
          object-fit: cover; 
          display: block; 
          transition: transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        .gc-ins-card:hover .gc-ins-img { 
          transform: scale(1.05); 
        }
        .gc-ins-img-overlay {
          position: absolute; 
          inset: 0;
          background: linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.2) 100%);
          transition: opacity 0.3s;
        }

        /* Badges */
        .gc-ins-cat-badge {
          position: absolute; 
          bottom: 12px; 
          left: 12px;
          font-family: var(--font-body);
          font-size: 9px; 
          font-weight: 600; 
          letter-spacing: 0.12em; 
          text-transform: uppercase;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(4px);
          border-left: 2px solid var(--gold);
          padding: 4px 10px;
          border-radius: 2px;
          color: var(--brand-primary);
        }
        .gc-ins-featured-badge {
          position: absolute; 
          top: 12px; 
          right: 12px;
          font-family: var(--font-body);
          font-size: 9px; 
          font-weight: 600;
          letter-spacing: 0.12em; 
          text-transform: uppercase;
          background: var(--gold);
          color: var(--brand-deep);
          padding: 4px 10px;
          border-radius: 2px;
        }

        /* Card Body */
        .gc-ins-card-body { 
          padding: 22px 24px 24px; 
          display: flex; 
          flex-direction: column; 
          gap: 12px; 
          flex: 1; 
        }
        .gc-ins-meta-row { 
          display: flex; 
          align-items: center; 
          gap: 8px; 
          flex-wrap: wrap;
        }
        .gc-ins-meta-item { 
          display: flex; 
          align-items: center; 
          gap: 5px; 
          font-size: 10.5px; 
          font-weight: 500;
          color: var(--ink); 
        }
        .gc-ins-meta-dot { 
          width: 3px; 
          height: 3px; 
          border-radius: 50%; 
          background: var(--muted); 
        }
        .gc-ins-title {
          font-family: var(--font-heading);
          font-size: 18px;
          font-weight: 600;
          line-height: 1.3;
          color: var(--ink);
          letter-spacing: -.01em;
          transition: color 0.2s ease;
        }
        .gc-ins-card:hover .gc-ins-title { 
          color: var(--brand-primary); 
        }
        .gc-ins-excerpt { 
          font-size: 13px; 
          font-weight: 400;
          line-height: 1.65;
          color: var(--ink); 
          flex: 1; 
        }
        .gc-ins-rule { 
          height: 1px; 
          background: linear-gradient(90deg, rgba(47,82,51,0.1), transparent);
        }

        /* Footer */
        .gc-ins-footer { 
          display: flex; 
          align-items: center; 
          justify-content: space-between; 
          gap: 12px; 
        }
        .gc-ins-author { 
          display: flex; 
          align-items: center; 
          gap: 10px; 
        }
        .gc-ins-author-avatar {
          width: 34px; 
          height: 34px; 
          border-radius: 50%; 
          object-fit: cover;
          border: 1.5px solid var(--pale-green);
        }
        .gc-ins-author-fallback {
          background: var(--brand-primary); 
          color: var(--ink); 
          display: flex; 
          align-items: center; 
          justify-content: center;
          font-family: var(--font-heading); 
          font-weight: 500; 
          font-size: 14px;
        }
        .gc-ins-author-name { 
          font-size: 11.5px; 
          font-weight: 600; 
          color: var(--ink); 
        }
        .gc-ins-author-role { 
          font-size: 9px; 
          font-weight: 500;
          color: var(--ink); 
        }
        .gc-ins-read-more {
          display: inline-flex; 
          align-items: center; 
          gap: 5px;
          font-family: var(--font-body);
          font-size: 10px; 
          font-weight: 700;
          letter-spacing: 0.1em; 
          text-transform: uppercase;
          color: var(--brand-primary);
          transition: gap 0.2s ease;
        }
        .gc-ins-card:hover .gc-ins-read-more { 
          gap: 8px; 
        }

        /* Skeleton */
        .gc-ins-skeleton {
          background: var(--white);
          border: 1px solid rgba(47,82,51,0.06);
          overflow: hidden;
        }
        .gc-ins-skeleton-img {
          height: 260px;
          background: linear-gradient(90deg, #f0f2f0 25%, #e5e8e5 50%, #f0f2f0 75%);
          background-size: 200% 100%;
          animation: shimmer 1.4s infinite;
        }
        .gc-ins-skeleton-content {
          padding: 22px 24px 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .gc-ins-skeleton-line {
          height: 12px;
          background: #f0f2f0;
          border-radius: 2px;
        }
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        /* ── CTA Button ── */
        .gc-ins-cta {
          display: inline-flex; 
          align-items: center; 
          gap: 10px;
          font-family: var(--font-body);
          font-size: 11px; 
          font-weight: 700;
          letter-spacing: 0.1em; 
          text-transform: uppercase;
          color: var(--brand-primary);
          background: transparent;
          border: 1px solid var(--pale-green);
          padding: 14px 28px;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 2px;
        }
        .gc-ins-cta:hover {
          background: var(--brand-primary);
          border-color: var(--brand-primary);
          color: var(--white);
          gap: 14px;
        }

        /* ── Grid Layouts ── */
        .gc-ins-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          margin-top: 48px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .gc-ins-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gc-ins-grid {
            grid-template-columns: 1fr;
          }
          .gc-ins-deco, .gc-ins-deco-2 {
            display: none;
          }
          .gc-ins-watermark {
            display: none;
          }
          .gc-ins-img-wrap {
            height: 220px;
          }
        }
      `}</style>

      <section className="gc-ins-section" aria-labelledby="insights-heading">
        {/* decorative elements */}
        <div className="gc-ins-deco" aria-hidden="true" />
        <div className="gc-ins-deco-2" aria-hidden="true" />
        <div className="gc-ins-watermark" aria-hidden="true">INSIGHTS</div>

        {/* header */}
        <SectionHeader />

        {/* Content */}
        <div className="gc-ins-grid">
          {loading && !error && (
            <>
              <SkeletonCard index={0} />
              <SkeletonCard index={1} />
              <SkeletonCard index={2} />
            </>
          )}

          {error && (
            <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '60px 20px' }}>
              <p style={{ color: 'var(--muted)', fontSize: '14px' }}>{error}</p>
            </div>
          )}

          {!loading && !error && posts.length === 0 && (
            <div style={{ textAlign: 'center', gridColumn: '1/-1', padding: '60px 20px' }}>
              <p style={{ color: 'var(--muted)', fontSize: '14px' }}>Articles coming soon. Check back for insights from our team.</p>
            </div>
          )}

          {!loading && !error && posts.slice(0, 3).map((post, idx) => (
            <ArticleCard key={post._id || post.id} post={post} index={idx} />
          ))}
        </div>

        {/* Bottom CTA */}
        {!loading && !error && posts.length > 0 && (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '56px' }}>
            <Link to="/insights" className="gc-ins-cta">
              View All Articles
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </section>
    </>
  );
}