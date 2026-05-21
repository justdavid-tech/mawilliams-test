import React, { useEffect, useRef, useState } from "react";
import { Play, ArrowRight, Share2, X, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { getAllMedia } from "../lib/sanity";

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
   Video Data
───────────────────────────────────────────── */
const HARDCODED_VIDEOS = [
  { id: "d_hU4F375rc", title: "Why I left Oil and Gas Sector For Farming", category: "Hydroponics" },
  { id: "jSBBhkDA78Q", title: "Growing Food With Hydroponics", category: "Food Innovation" },
  { id: "Y5Zi55FiRGQ", title: "Financial Literacy Initiative", category: "Community Impact" },
  { id: "ncIS_y82GaE", title: "Young Nigerian Adopts Hydroponics Methods In Lekki", category: "Hydroponics" },
  { id: "k3vXbTKOg0c", title: "Young Nigerian Adopts Hydroponics Methods In Lekki Part 2", category: "Hydroponics" },
  { id: "q2potVGV6a4", title: "Young Nigerian Adopts Hydroponics Methods In Lekki Part 3", category: "Hydroponics" },
  { id: "zaWjtoV2-O0", title: "Focus on Hydroponics Part 3", category: "Hydroponics" },
  { id: "0FKkjTCu948", title: "Growing Food with Hydroponics in Nigeria", category: "Hydroponics" },
  { id: "Rx9s34yH784", title: "Financial Literacy Talk for Small Holders Farmers", category: "Finance" },
  { id: "XBuq1iEv2no", title: "A View Of What Hydroponics Farming Looks Like", category: "Hydroponics" },
  { id: "9mmD3OyIw30", title: "AIICO Documentary", category: "Partnership" },
  { id: "8jFeiqotAAQ", title: "Union Bank Documentary", category: "Partnership" },
];

/* ── Helpers ── */
function getYouTubeId(url) {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
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
  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-semibold text-white leading-tight mb-6">
    Innovation at The Root of Growth
    <br />
 
  </h1>
  <p className="max-w-2xl mx-auto text-white text-lg leading-relaxed">
    A collection of insights on the technology, systems, and institutional shifts 
    reshaping how we feed the continent.
  </p>
</Fade>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Video Grid
───────────────────────────────────────────── */
function VideoGrid({ videos, onShare }) {
  if (!videos?.length) return null;

  return (
    <section id="videos" className="relative py-24 bg-[#294b33] overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <Fade className="text-center mb-16">
          <p className="uppercase tracking-[0.3em] text-[14.5px] font-semibold text-white mb-4">
            Featured Library
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-semibold text-white leading-tight">
            Watch Our Latest
            <br />
            <em className="italic text-gc-green-400">Documentaries & Insights.</em>
          </h2>
        </Fade>

        {/* Video Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {videos.map((video, index) => (
            <Fade key={(video.id || video._id) + index} delay={index * 80} className="group">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20 backdrop-blur-sm shadow-2xl">
                {/* Video */}
                <div className="relative w-full pt-[56.25%] overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id || getYouTubeId(video.videoUrl)}?rel=0`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>

                {/* Content */}
                <div className="p-6 bg-gradient-to-b from-white/[0.03] to-transparent">
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-gc-green-400 font-semibold">
                      <Play size={12} />
                      {video.category}
                    </span>
                    <button
                      onClick={() => onShare(video.id || getYouTubeId(video.videoUrl))}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-gc-green-400 transition-all duration-300"
                      title="Share Video"
                    >
                      <Share2 size={16} />
                    </button>
                  </div>
                  <h3 className="text-white text-2xl font-display font-medium leading-snug group-hover:text-gc-green-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────
   Toast Notification
───────────────────────────────────────────── */
function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[200]">
      <div className="flex items-center gap-2 bg-gc-green-400 text-gc-green-900 px-4 py-3 rounded-lg shadow-lg">
        <Check size={18} />
        <span className="text-sm font-medium">{message}</span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Main Page
───────────────────────────────────────────── */
export default function VideosPage() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [ytNextPageToken, setYtNextPageToken] = useState(null);
  const [shareVideo, setShareVideo] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const fetchYouTubeVideos = async (pageToken = "") => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
    const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;

    if (!apiKey || !channelId) {
      console.warn("[YouTube] Missing API key or channel ID.");
      return { items: [], nextToken: null };
    }

    try {
      const uploadsPlaylistId = channelId.trim().replace(/^UC/, "UU");
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=6&playlistId=${uploadsPlaylistId}&key=${apiKey.trim()}${pageToken ? `&pageToken=${pageToken}` : ""}`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.error) {
        console.error("[YouTube] API Error:", data.error);
        return { items: [], nextToken: null };
      }

      const items = (data.items || []).map((item) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        category: "YouTube Upload",
        publishedAt: item.snippet.publishedAt,
      }));

      return { items, nextToken: data.nextPageToken || null };
    } catch (err) {
      console.error("[YouTube] Fetch error:", err);
      return { items: [], nextToken: null };
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const mediaItems = await getAllMedia();
        const sanityVideos = mediaItems.filter((m) => m.type === "video");

        const { items: ytItems, nextToken } = await fetchYouTubeVideos();
        setYtNextPageToken(nextToken);

        const combinedVideos = [...sanityVideos, ...ytItems, ...HARDCODED_VIDEOS];

        const uniqueVideos = [];
        const seenIds = new Set();
        combinedVideos.forEach((v) => {
          const vidId = v.id || getYouTubeId(v.videoUrl);
          if (vidId && !seenIds.has(vidId)) {
            uniqueVideos.push(v);
            seenIds.add(vidId);
          }
        });

        setVideos(uniqueVideos);
      } catch (err) {
        console.error("Sanity fetch error:", err);
        setVideos(HARDCODED_VIDEOS);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleLoadMore = async () => {
    if (!ytNextPageToken || loadingMore) return;
    setLoadingMore(true);

    const { items, nextToken } = await fetchYouTubeVideos(ytNextPageToken);

    setVideos((prev) => {
      const combined = [...prev, ...items];
      const unique = [];
      const seen = new Set();
      combined.forEach((v) => {
        const id = v.id || getYouTubeId(v.videoUrl);
        if (id && !seen.has(id)) {
          unique.push(v);
          seen.add(id);
        }
      });
      return unique;
    });

    setYtNextPageToken(nextToken);
    setLoadingMore(false);
  };

  const handleCopyLink = (videoId) => {
    navigator.clipboard.writeText(`https://www.youtube.com/watch?v=${videoId}`);
    setToastMessage("Link copied to clipboard!");
    setShowToast(true);
  };

  return (
    <>
      <Hero />

      {loading ? (
        <div className="py-20 flex justify-center items-center bg-[#294b33]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gc-green-400" />
        </div>
      ) : (
        <div className="bg-[#294b33] pb-24">
          <VideoGrid videos={videos} onShare={setShareVideo} />

          {ytNextPageToken && (
            <div className="container mx-auto px-4 flex justify-center mt-12">
              <button
                onClick={handleLoadMore}
                disabled={loadingMore}
                className="inline-flex items-center gap-3 border border-gc-green-400/30 hover:border-gc-green-400 text-gc-green-400 hover:text-white font-semibold text-xs uppercase tracking-[0.2em] px-12 py-5 rounded-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {loadingMore ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-current" />
                ) : (
                  <>
                    Load More Videos
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Share Modal */}
      {shareVideo && (
        <div
          onClick={() => setShareVideo(null)}
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center px-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md bg-[#111827] border border-white/10 rounded-2xl p-8 relative shadow-2xl"
          >
            <button
              onClick={() => setShareVideo(null)}
              className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <h3 className="text-white text-2xl font-display font-light mb-6">
              Share <span className="text-gc-green-400">Video</span>
            </h3>

            <div className="bg-black/40 border border-white/10 rounded-xl px-4 py-4 text-sm text-white/50 break-all mb-8 font-mono">
              {`https://www.youtube.com/watch?v=${shareVideo}`}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a
                href={`https://wa.me/?text=https://www.youtube.com/watch?v=${shareVideo}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600/10 hover:bg-green-600 border border-green-600/20 hover:border-green-600 text-green-500 hover:text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300"
              >
                WhatsApp
              </a>

              <a
                href={`https://twitter.com/intent/tweet?url=https://www.youtube.com/watch?v=${shareVideo}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white border border-white/10 hover:border-white text-white/70 hover:text-black text-xs uppercase tracking-widest font-semibold transition-all duration-300"
              >
                X (Twitter)
              </a>

              <button
                onClick={() => handleCopyLink(shareVideo)}
                className="col-span-2 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-gc-green-400/10 hover:bg-gc-green-400 border border-gc-green-400/20 hover:border-gc-green-400 text-gc-green-400 hover:text-gc-green-900 text-xs uppercase tracking-widest font-semibold transition-all duration-300"
              >
                Copy Direct Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <Toast message={toastMessage} onClose={() => setShowToast(false)} />
      )}
    </>
  );
}