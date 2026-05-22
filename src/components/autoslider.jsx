import React, { useEffect, useRef } from "react";
import "../index.css";

const topImages = [
  "/assets/interaction (2).jpeg",
  "/assets/interaction (3).jpeg",
  "/assets/interaction (4).jpeg",
  "/assets/interaction (5).jpeg",
  "/assets/interaction (6).jpeg",
  "/assets/interaction (7).jpeg",
  "/assets/interaction (8).jpeg",
];


export default function AutoSlider() {
  const trackRef = useRef(null);
  useEffect(() => {
    const speed = 0.5; // pixels per ms
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      if (trackRef.current) {
        trackRef.current.scrollLeft = elapsed * speed;
        if (trackRef.current.scrollLeft >= trackRef.current.scrollWidth / 2) {
          trackRef.current.scrollLeft = 0;
          start = timestamp;
        }
      }
      requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="w-full overflow-hidden py-10 space-y-6 bg-white">
      
      {/* TOP SLIDER */}
      <div className="relative flex overflow-hidden">
        <div className="slider-track-left flex gap-6" ref={trackRef}>
            {[...topImages, ...topImages].map((img, index) => (
              <img
                key={index}
                src={img}
                alt=""
                className="w-[320px] h-[220px] object-cover rounded-3xl shrink-0"
              />
            ))}
          </div>
          
          {/* Auto scroll effect */}
          <style>{`
            @keyframes slide {
              from { transform: translateX(0); }
              to { transform: translateX(-50%); }
            }
            .slider-track-left {
              animation: slide 20s linear infinite;
            }
          `}</style>
      </div>
    </section>
  );
}