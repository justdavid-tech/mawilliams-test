import { useState, useEffect } from 'react';

/* ─── Reading Progress Bar ───────────────────────────────── */
export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    function onScroll() {
      const el  = document.documentElement;
      const top = el.scrollTop || document.body.scrollTop;
      const h   = el.scrollHeight - el.clientHeight;
      setProgress(h > 0 ? (top / h) * 100 : 0);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="gc-art-progress">
      <div className="gc-art-progress-fill" style={{ width: `${progress}%` }} />
    </div>
  );
}
