import React, { useEffect, useRef, useState } from "react";
import AutoSlider from "../components/autoslider";
import YouTubeFeed from "../components/youtubefeed";

/* ─────────────────────────────────────────────
   Animation Hook
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

/* ─────────────────────────────────────────────
   Fade Animation
───────────────────────────────────────────── */
function Fade({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(35px)",
        transition: `all 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   Hero Section
───────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative py-32  overflow-hidden bg-[#1E3622]">
      {/* Noise texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Fade>
          <p className="uppercase tracking-[0.3em] text-[14.5px] font-semibold text-white mb-4">
            Field Perspectives
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-semibold text-white leading-tight mb-6">
            Innovation at The Root of Growth
            <br />
          </h1>
          <p className="max-w-2xl mx-auto text-white text-lg font-body leading-relaxed">
            A collection of insights on the technology, systems, and institutional shifts 
            reshaping how we feed the continent.
          </p>
        </Fade>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function MediaPage() {
  return (
    <>
      <Hero />
      <div className="bg-[#294b33] pb-24">
        <AutoSlider />
        <YouTubeFeed />
      </div>
    </>
  );
}