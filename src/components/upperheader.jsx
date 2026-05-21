import { Phone, Mail, MapPin } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   Social Links
────────────────────────────────────────────────────────── */
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mawilliamsco?igsh=MTc3dXllbmpweXlvcw%3D%3D",
    icon: (size) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    ),
  }
];

/* ──────────────────────────────────────────────────────────
   Component
────────────────────────────────────────────────────────── */
export default function UpperHeader() {
  return (
    <div className="w-full border-b border-white/10 bg-[#2F5233] text-white">
      <div className="mx-auto max-w-[1320px] px-4 lg:px-8">
        
        <div className="flex flex-col gap-3 py-2.5 lg:flex-row lg:items-center lg:justify-between">

          {/* Left Side */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:justify-start">

            {/* Phone */}
            <a
              href="tel:+2348185811939"
              className="group flex items-center gap-2 text-[11px] sm:text-[12px] font-medium font-sans transition-colors hover:text-[#C9A84C]"
            >
              <Phone
                size={14}
                className="text-[#C9A84C] transition-transform duration-200 group-hover:scale-110"
              />
              <span className="tracking-wide">+44 7444 167 970</span>
            </a>

            {/* Email */}
            <a
              href="mailto:info@mawilliamsco.com"
              className="group flex items-center gap-2 text-[11px] sm:text-[12px] font-medium font-sans transition-colors hover:text-[#C9A84C]"
            >
              <Mail
                size={14}
                className="text-[#C9A84C] transition-transform duration-200 group-hover:scale-110"
              />
              <span className="tracking-wide">info@mawilliamsco.com</span>
            </a>

            {/* Address */}
            <div className="hidden xl:flex items-center gap-2 text-[11px] font-medium font-sans opacity-90">
              <MapPin
                size={14}
                className="flex-shrink-0 text-[#C9A84C]"
              />
              <span className="truncate tracking-wide">
                 71–75 Shelton Street, Covent Garden, London WC2H 9JQ
              </span>
            </div>
          </div>

          {/* Right Side Social */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex items-center gap-2.5 rounded-full bg-[#C9A84C] px-4 py-1.5 shadow-sm">

              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="flex h-7 w-7 items-center justify-center rounded-full text-[#2F5233] transition-all duration-300 hover:scale-110 hover:bg-white/20"
                >
                  {link.icon(15)}
                </a>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}