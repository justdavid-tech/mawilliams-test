import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllPosts, urlFor } from '../lib/sanity';

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const CATEGORY_LABELS = {
  all:                          'All',
  'regenerative-agriculture':   'Regenerative Agriculture',
  'precision-farming':          'Precision Farming',
  'farm-infrastructure':        'Farm Infrastructure',
  'institutional-partnerships': 'Institutional Partnerships',
  'export-readiness':           'Export Readiness',
  'case-studies':               'Case Studies',
  'industry-news':              'Industry News',
  'gc-updates':                 'GC Updates',
};

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

/* ─────────────────────────────────────────
   ARTICLE CARD
───────────────────────────────────────── */
function ArticleCard({ post, index }) {
  const label    = CATEGORY_LABELS[post.category] || post.category;
  const imageUrl = post.coverImage?.asset
    ? urlFor(post.coverImage).width(720).height(440).fit('crop').auto('format').url()
    : 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=720&q=80';

  return (
    <Link
      to={`/insights/${post.slug.current}`}
      className="maw-card"
      style={{ animationDelay: `${index * 60}ms` }}
      aria-label={post.title}
    >
      {/* ── Image ── */}
      <div className="maw-card-img-wrap">
        <img src={imageUrl} alt={post.coverImage?.alt || post.title} className="maw-card-img" />
        <div className="maw-card-img-veil" />

        {/* Read time */}
        {post.readTime && (
          <span className="maw-card-time">
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {post.readTime} min read
          </span>
        )}
      </div>

      {/* ── Body ── */}
      <div className="maw-card-body">

        {/* Category + date row */}
        <div className="maw-card-meta">
          {post.category && (
            <span className="maw-card-cat">
              <span className="maw-card-cat-pip" aria-hidden="true" />
              {label}
            </span>
          )}
          <span className="maw-card-date">{formatDate(post.publishedAt)}</span>
        </div>

        <h3 className="maw-card-title">{post.title}</h3>

        {post.excerpt && (
          <p className="maw-card-excerpt">{post.excerpt}</p>
        )}

        {/* Footer */}
        <div className="maw-card-foot">
          <div className="maw-card-author">
            {post.author?.photo?.asset ? (
              <img
                src={urlFor(post.author.photo).width(36).height(36).fit('crop').url()}
                alt={post.author.name}
                className="maw-card-avatar"
              />
            ) : (
              <div className="maw-card-avatar maw-card-avatar-fb" aria-hidden="true">
                {post.author?.name?.[0] ?? 'M'}
              </div>
            )}
            <div>
              <p className="maw-card-author-name">{post.author?.name ?? 'M.A. Williams'}</p>
              <p className="maw-card-author-role">{post.author?.role ?? 'Editorial'}</p>
            </div>
          </div>

          <span className="maw-card-cta" aria-hidden="true">
            Read
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

/* ─────────────────────────────────────────
   SKELETON
───────────────────────────────────────── */
function SkeletonCard() {
  return (
    <div className="maw-card maw-skel-card" aria-hidden="true" style={{ pointerEvents: 'none' }}>
      <div className="maw-skel-img" />
      <div className="maw-card-body" style={{ gap: 12 }}>
        <div className="maw-skel-line" style={{ width: '40%', height: 10 }} />
        <div className="maw-skel-line" style={{ width: '90%', height: 18 }} />
        <div className="maw-skel-line" style={{ width: '75%', height: 18 }} />
        <div className="maw-skel-line" style={{ width: '100%', height: 12, marginTop: 4 }} />
        <div className="maw-skel-line" style={{ width: '60%', height: 12 }} />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PAGE
───────────────────────────────────────── */
export default function InsightsPage() {
  const [allPosts,    setAllPosts]    = useState([]);
  const [activeTab,   setActiveTab]   = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [loading,     setLoading]     = useState(true);
  const [error,       setError]       = useState(null);

  useEffect(() => {
    getAllPosts()
      .then(setAllPosts)
      .catch(() => setError('Could not load articles. Please try again later.'))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    document.title = 'Insights | M.A. Williams & Co.';
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', 'Agricultural insights, regenerative farming intelligence, precision agriculture, and institutional perspectives from M.A. Williams & Co.');
  }, []);

  const categories = ['all', ...Array.from(new Set(allPosts.map(p => p.category).filter(Boolean)))];

  const filtered = allPosts.filter(p => {
    const matchCat    = activeTab === 'all' || p.category === activeTab;
    const matchSearch = !searchQuery ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=M+PLUS+U:wght@100..900&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap');

        /* ── Tokens ── */
        :root {
          --deep:  #1E3622; --green: #2F5233; --mid: #3D6B42;
          --gold:  #C9A84C; --pale: #EBF2EB; --ink: #1A1A18;
          --muted: #7A7A74; --cream: #FAF8F4; --white: #FFFFFF;
          --fh: "M PLUS U", system-ui, sans-serif;
          --fb: "Work Sans", system-ui, sans-serif;
        }

        /* ── Shimmer ── */
        @keyframes maw-shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .maw-skel-img {
          height: 220px;
          background: linear-gradient(90deg, #e8e4de 25%, #f0ece6 50%, #e8e4de 75%);
          background-size: 200% 100%;
          animation: maw-shimmer 1.6s infinite;
        }
        .maw-skel-line {
          border-radius: 3px;
          background: linear-gradient(90deg, #e8e4de 25%, #f0ece6 50%, #e8e4de 75%);
          background-size: 200% 100%;
          animation: maw-shimmer 1.6s infinite;
        }
        .maw-skel-card { cursor: default; }

        /* ── Card entrance ── */
        @keyframes maw-fadeup {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ════════════════════════════════════
           HERO
        ════════════════════════════════════ */
        .maw-ins-hero {
          position: relative;
          background: var(--deep);
          overflow: hidden;
          padding: 130px 0 80px;
        }

        /* Dot grid texture */
        .maw-ins-hero::before {
          content: '';
          position: absolute; top: 0; right: 0;
          width: 340px; height: 340px;
          background-image: radial-gradient(rgba(201,168,76,0.12) 1.5px, transparent 1.5px);
          background-size: 20px 20px;
          pointer-events: none;
        }

        /* Radial glow */
        .maw-ins-hero::after {
          content: '';
          position: absolute; bottom: -80px; left: -80px;
          width: 360px; height: 360px; border-radius: 50%;
          background: radial-gradient(circle, rgba(47,82,51,0.5) 0%, transparent 70%);
          pointer-events: none;
        }

        .maw-ins-hero-inner {
          position: relative; z-index: 1;
          max-width: 1160px; margin: 0 auto; padding: 0 48px;
          display: grid; grid-template-columns: 1fr 1fr;
          gap: 80px; align-items: center;
        }

        .maw-ins-hero-kicker {
          display: flex; align-items: center; gap: 10px; margin-bottom: 20px;
        }
        .maw-ins-hero-pip {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0;
        }
        .maw-ins-hero-kicker-text {
          font-family: var(--fb);
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: rgba(201,168,76,0.85);
        }

        .maw-ins-hero-h1 {
          font-family: var(--fh);
          font-size: clamp(36px, 4.5vw, 58px);
          font-weight: 800; line-height: 1.08;
          letter-spacing: -0.025em; color: var(--white);
          margin: 0;
        }
        .maw-ins-hero-h1 em {
          font-style: normal; color: var(--gold);
        }

        .maw-ins-hero-right {}
        .maw-ins-hero-sub {
          font-family: var(--fb);
          font-size: 15px; line-height: 1.8;
          color: var(--white);
          margin-bottom: 32px;
        }

        /* Volume badge */
        .maw-ins-hero-badge {
          display: inline-flex; align-items: center; gap: 12px;
          border: 1px solid rgba(201,168,76,0.22);
          border-radius: 4px; padding: 14px 18px;
        }
        .maw-ins-hero-badge-num {
          font-family: var(--fh);
          font-size: 28px; font-weight: 800;
          color: var(--gold); line-height: 1;
        }
        .maw-ins-hero-badge-text {
          font-family: var(--fb);
          font-size: 11px; font-weight: 500;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: rgba(255,255,255,0.4); line-height: 1.5;
          max-width: 100px;
        }

        /* Gold rule */
        .maw-ins-rule {
          max-width: 1160px; margin: 56px auto 0; padding: 0 48px;
          position: relative; z-index: 1;
        }
        .maw-ins-rule hr {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, var(--gold), rgba(201,168,76,0.08));
          opacity: 0.45;
        }

        /* ════════════════════════════════════
           FILTER BAR
        ════════════════════════════════════ */
        .maw-ins-bar {
          position: sticky; top: 0; z-index: 40;
          background: rgba(250,248,244,0.97);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(47,82,51,0.12);
          box-shadow: 0 2px 16px rgba(26,26,24,0.06);
        }
        .maw-ins-bar-inner {
          max-width: 1160px; margin: 0 auto; padding: 0 48px;
          height: 60px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 16px;
        }

        /* Tabs */
        .maw-ins-tabs {
          display: flex; align-items: center; gap: 2px;
          overflow-x: auto; scrollbar-width: none; flex: 1;
        }
        .maw-ins-tabs::-webkit-scrollbar { display: none; }

        .maw-ins-tab {
          font-family: var(--fb);
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.06em; text-transform: uppercase;
          padding: 7px 14px; border-radius: 3px;
          border: none; background: transparent;
          color: var(--ink); cursor: pointer; white-space: nowrap;
          transition: background 0.2s, color 0.2s;
          flex-shrink: 0;
        }
        .maw-ins-tab:hover { background: var(--pale); color: var(--green); }
        .maw-ins-tab.active {
          background: var(--deep); color: var(--gold);
        }

        /* Search */
        .maw-ins-search {
          display: flex; align-items: center; gap: 8px;
          background: var(--white);
          border: 1px solid rgba(47,82,51,0.18);
          border-radius: 3px; padding: 8px 14px;
          width: 220px; flex-shrink: 0;
          transition: border-color 0.2s, box-shadow 0.2s;
        }
        .maw-ins-search:focus-within {
          border-color: var(--green);
          box-shadow: 0 0 0 3px rgba(47,82,51,0.08);
        }
        .maw-ins-search svg { color: var(--ink); flex-shrink: 0; }
        .maw-ins-search input {
          flex: 1; border: none; outline: none; background: transparent;
          font-family: var(--fb); font-size: 13px; color: var(--ink);
        }
        .maw-ins-search input::placeholder { color: rgba(122,122,116,0.6); }
        .maw-ins-search-clear {
          background: none; border: none; cursor: pointer;
          color: var(--ink); padding: 0; line-height: 1;
          transition: color 0.2s;
        }
        .maw-ins-search-clear:hover { color: var(--green); }

        /* ════════════════════════════════════
           GRID AREA
        ════════════════════════════════════ */
        .maw-ins-grid-wrap {
          background: var(--cream);
          min-height: 60vh;
          padding: 56px 0 96px;
        }
        .maw-ins-grid-inner {
          max-width: 1160px; margin: 0 auto; padding: 0 48px;
        }

        /* Results label */
        .maw-ins-count {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 32px;
        }
        .maw-ins-count-text {
          font-family: var(--fb);
          font-size: 10.5px; font-weight: 700;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: var(--ink); white-space: nowrap;
        }
        .maw-ins-count-rule {
          flex: 1; height: 1px;
          background: rgba(47,82,51,0.12);
        }

        /* Grid */
        .maw-ins-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        /* ════════════════════════════════════
           CARD
        ════════════════════════════════════ */
        .maw-card {
          display: flex; flex-direction: column;
          background: var(--white);
          border: 1px solid rgba(47,82,51,0.1);
          border-radius: 5px; overflow: hidden;
          text-decoration: none; color: inherit;
          animation: maw-fadeup 0.6s ease both;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
        }
        .maw-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 48px rgba(26,26,24,0.09);
          border-color: rgba(47,82,51,0.22);
        }

        /* Image */
        .maw-card-img-wrap {
          position: relative; height: 220px;
          overflow: hidden; flex-shrink: 0;
          background: var(--pale);
        }
        .maw-card-img {
          width: 100%; height: 100%; object-fit: cover; display: block;
          transition: transform 0.55s ease;
        }
        .maw-card:hover .maw-card-img { transform: scale(1.04); }
        .maw-card-img-veil {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(26,26,24,0.45) 100%);
        }

        /* Read time pill */
        .maw-card-time {
          position: absolute; top: 12px; right: 12px;
          display: inline-flex; align-items: center; gap: 5px;
          font-family: var(--fb);
          font-size: 9.5px; font-weight: 600; letter-spacing: 0.07em;
          color: var(--white);
          background: rgba(30,54,34,0.72); backdrop-filter: blur(6px);
          padding: 4px 9px; border-radius: 2px;
        }

        /* Body */
        .maw-card-body {
          padding: 22px 22px 20px;
          display: flex; flex-direction: column;
          gap: 10px; flex: 1;
        }

        /* Meta row */
        .maw-card-meta {
          display: flex; align-items: center;
          justify-content: space-between; gap: 8px;
        }
        .maw-card-cat {
          display: inline-flex; align-items: center; gap: 6px;
          font-family: var(--fb);
          font-size: 9.5px; font-weight: 700;
          letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--green);
        }
        .maw-card-cat-pip {
          width: 5px; height: 5px; border-radius: 50%;
          background: var(--gold); flex-shrink: 0;
        }
        .maw-card-date {
          font-family: var(--fb);
          font-size: 10px; color: var(--ink); white-space: nowrap;
        }

        /* Title */
        .maw-card-title {
          font-family: var(--fh);
          font-size: clamp(16px, 1.6vw, 19px);
          font-weight: 700; line-height: 1.28;
          letter-spacing: -0.015em; color: var(--ink);
          transition: color 0.2s;
        }
        .maw-card:hover .maw-card-title { color: var(--green); }

        /* Excerpt */
        .maw-card-excerpt {
          font-family: var(--fb);
          font-size: 13px; line-height: 1.72;
          color: var(--ink); flex: 1;
          display: -webkit-box; -webkit-line-clamp: 3;
          -webkit-box-orient: vertical; overflow: hidden;
        }

        /* Divider */
        .maw-card-foot {
          display: flex; align-items: center;
          justify-content: space-between; gap: 8px;
          padding-top: 14px;
          border-top: 1px solid rgba(47,82,51,0.08);
          margin-top: auto;
        }

        /* Author */
        .maw-card-author { display: flex; align-items: center; gap: 9px; }
        .maw-card-avatar {
          width: 30px; height: 30px; border-radius: 50%; object-fit: cover;
          border: 1.5px solid rgba(47,82,51,0.2); flex-shrink: 0;
        }
        .maw-card-avatar-fb {
          background: var(--deep); color: var(--gold);
          display: flex; align-items: center; justify-content: center;
          font-family: var(--fh); font-size: 13px; font-weight: 700;
        }
        .maw-card-author-name {
          font-family: var(--fb);
          font-size: 11px; font-weight: 600; color: var(--ink);
        }
        .maw-card-author-role {
          font-family: var(--fb);
          font-size: 10px; color: var(--ink);
        }

        /* Read CTA */
        .maw-card-cta {
          display: inline-flex; align-items: center; gap: 5px;
          font-family: var(--fb);
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--green); white-space: nowrap;
          transition: gap 0.2s, color 0.2s;
        }
        .maw-card:hover .maw-card-cta { gap: 8px; color: var(--deep); }

        /* ════════════════════════════════════
           EMPTY / ERROR STATES
        ════════════════════════════════════ */
        .maw-ins-state {
          grid-column: 1 / -1;
          background: var(--white);
          border: 1px solid rgba(47,82,51,0.1);
          border-radius: 5px;
          padding: 80px 40px; text-align: center;
        }
        .maw-ins-state-icon {
          width: 48px; height: 48px; border-radius: 50%;
          background: var(--pale);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px; color: var(--green);
        }
        .maw-ins-state-title {
          font-family: var(--fh);
          font-size: 22px; font-weight: 700;
          color: var(--ink); margin-bottom: 8px;
        }
        .maw-ins-state-sub {
          font-family: var(--fb);
          font-size: 14px; color: var(--ink); line-height: 1.7;
        }
        .maw-ins-state-btn {
          display: inline-block; margin-top: 20px;
          font-family: var(--fb); font-size: 11px; font-weight: 700;
          letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--white); background: var(--green);
          border: none; padding: 11px 22px; border-radius: 3px;
          cursor: pointer; text-decoration: none;
          transition: background 0.2s;
        }
        .maw-ins-state-btn:hover { background: var(--deep); }

        /* ════════════════════════════════════
           FOOTER CTA STRIP
        ════════════════════════════════════ */
        .maw-ins-footer {
          background: var(--deep);
          border-top: 1px solid rgba(201,168,76,0.18);
          padding: 48px;
          display: flex; align-items: center;
          justify-content: space-between; gap: 24px;
          flex-wrap: wrap;
        }
        .maw-ins-footer-left {}
        .maw-ins-footer-label {
          font-family: var(--fb);
          font-size: 10px; font-weight: 700;
          letter-spacing: 0.13em; text-transform: uppercase;
          color: rgba(201,168,76,0.7); margin-bottom: 6px;
        }
        .maw-ins-footer-copy {
          font-family: var(--fh);
          font-size: 20px; font-weight: 700;
          color: var(--white); letter-spacing: -0.01em;
        }
        .maw-ins-footer-copy em { color: var(--gold); font-style: normal; }
        .maw-ins-footer-links {
          display: flex; align-items: center; gap: 10px; flex-shrink: 0;
        }
        .maw-ins-footer-btn-gold {
          font-family: var(--fb); font-size: 11px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--deep); background: var(--gold);
          border: none; padding: 12px 22px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: background 0.2s;
        }
        .maw-ins-footer-btn-gold:hover { background: #d9b85c; }
        .maw-ins-footer-btn-ghost {
          font-family: var(--fb); font-size: 11px; font-weight: 700;
          letter-spacing: 0.07em; text-transform: uppercase;
          color: var(--white);
          border: 1px solid rgba(255,255,255,0.18);
          background: transparent; padding: 11px 20px; border-radius: 3px;
          cursor: pointer; text-decoration: none; display: inline-block;
          transition: border-color 0.2s, color 0.2s;
        }
        .maw-ins-footer-btn-ghost:hover { border-color: rgba(255,255,255,0.45); color: var(--white); }

        /* ════════════════════════════════════
           RESPONSIVE
        ════════════════════════════════════ */
        @media (max-width: 1024px) {
          .maw-ins-grid { grid-template-columns: repeat(2, 1fr); }
          .maw-ins-hero-inner { grid-template-columns: 1fr; gap: 36px; }
        }
        @media (max-width: 768px) {
          .maw-ins-hero { padding: 100px 0 64px; }
          .maw-ins-hero-inner,
          .maw-ins-grid-inner,
          .maw-ins-rule { padding: 0 24px; }
          .maw-ins-bar-inner { padding: 0 24px; }
          .maw-ins-grid { grid-template-columns: 1fr; }
          .maw-ins-search { width: 100%; }
          .maw-ins-footer { padding: 36px 24px; flex-direction: column; align-items: flex-start; }
          .maw-ins-footer-links { width: 100%; }
          .maw-ins-footer-btn-gold,
          .maw-ins-footer-btn-ghost { flex: 1; text-align: center; }
        }
        @media (max-width: 640px) {
          .maw-ins-bar-inner { height: auto; padding: 12px 24px; flex-direction: column; align-items: stretch; }
          .maw-ins-tabs { padding-bottom: 2px; }
        }
      `}</style>

      <div>

        {/* ════════ HERO ════════ */}
        <section className="maw-ins-hero" aria-labelledby="ins-hero-h">
          <div className="maw-ins-hero-inner">
            <div>
              <div className="maw-ins-hero-kicker">
                <span className="maw-ins-hero-pip" aria-hidden="true" />
                <span className="maw-ins-hero-kicker-text">M.A. Williams Insights</span>
              </div>
              <h1 className="maw-ins-hero-h1" id="ins-hero-h">
                Intelligence<br />from the <em>Field.</em>
              </h1>
            </div>

            <div className="maw-ins-hero-right">
              <p className="maw-ins-hero-sub">
                Regenerative agriculture insights, precision farming intelligence, institutional
                perspectives, and case studies from three decades of frontline practice —
                published by M.A. Williams & Co.
              </p>
              <div className="maw-ins-hero-badge">
                <span className="maw-ins-hero-badge-num">
                  {loading ? '—' : allPosts.length}
                </span>
                <span className="maw-ins-hero-badge-text">Articles published</span>
              </div>
            </div>
          </div>

          <div className="maw-ins-rule">
            <hr aria-hidden="true" />
          </div>
        </section>

        {/* ════════ FILTER BAR ════════ */}
        <div className="maw-ins-bar" role="navigation" aria-label="Filter articles">
          <div className="maw-ins-bar-inner">

            <div className="maw-ins-tabs" role="tablist">
              {categories.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={activeTab === cat}
                  onClick={() => setActiveTab(cat)}
                  className={`maw-ins-tab ${activeTab === cat ? 'active' : ''}`}
                >
                  {CATEGORY_LABELS[cat] || cat}
                </button>
              ))}
            </div>

            <div className="maw-ins-search" role="search">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
              </svg>
              <input
                type="search"
                placeholder="Search articles…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                aria-label="Search articles"
              />
              {searchQuery && (
                <button
                  className="maw-ins-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* ════════ GRID ════════ */}
        <div className="maw-ins-grid-wrap">
          <div className="maw-ins-grid-inner">

            {/* Results count */}
            {!loading && !error && (
              <div className="maw-ins-count">
                <span className="maw-ins-count-text">
                  {filtered.length} {filtered.length === 1 ? 'article' : 'articles'}
                  {activeTab !== 'all' && ` · ${CATEGORY_LABELS[activeTab]}`}
                  {searchQuery && ` · "${searchQuery}"`}
                </span>
                <span className="maw-ins-count-rule" aria-hidden="true" />
              </div>
            )}

            <div className="maw-ins-grid">

              {/* Skeletons */}
              {loading && Array.from({ length: 6 }).map((_, i) => <SkeletonCard key={i} />)}

              {/* Error */}
              {error && !loading && (
                <div className="maw-ins-state">
                  <div className="maw-ins-state-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                  </div>
                  <p className="maw-ins-state-title">Something went wrong.</p>
                  <p className="maw-ins-state-sub">{error}</p>
                  <button className="maw-ins-state-btn" onClick={() => window.location.reload()}>
                    Try again
                  </button>
                </div>
              )}

              {/* Empty */}
              {!loading && !error && filtered.length === 0 && (
                <div className="maw-ins-state">
                  <div className="maw-ins-state-icon" aria-hidden="true">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="12" y1="18" x2="12" y2="12" /><line x1="9" y1="15" x2="15" y2="15" />
                    </svg>
                  </div>
                  <p className="maw-ins-state-title">
                    {allPosts.length === 0 ? 'Articles coming soon.' : 'No articles found.'}
                  </p>
                  <p className="maw-ins-state-sub">
                    {allPosts.length === 0
                      ? 'Our editorial team is preparing the first publications. Check back soon.'
                      : 'Try a different category or clear your search.'}
                  </p>
                  {searchQuery && (
                    <button className="maw-ins-state-btn" onClick={() => setSearchQuery('')}>
                      Clear search
                    </button>
                  )}
                </div>
              )}

              {/* Articles */}
              {!loading && !error && filtered.map((post, i) => (
                <ArticleCard key={post._id} post={post} index={i} />
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
}