import { Phone, Mail, MapPin } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   Social Links
────────────────────────────────────────────────────────── */
const SOCIAL_LINKS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/mawilliamscoc?utm_source=qr&igsh=Y2FqemtuZ2JndGwy",
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
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yomi-williams-448388172?utm_source=share_via&utm_content=profile&utm_medium=member_android",
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
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/MAWilliamsco",
    icon: (size) => (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
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
            {/* <a
              href="tel:+2348185811939"
              className="group flex items-center gap-2 text-[11px] sm:text-[12px] font-medium font-sans transition-colors hover:text-[#C9A84C]"
            >
              <Phone
                size={14}
                className="text-[#C9A84C] transition-transform duration-200 group-hover:scale-110"
              />
              <span className="tracking-wide">+44 7444 167 970</span>
            </a> */}

            {/* Email */}
            {/* <a
              href="mailto:info@mawilliamsco.com"
              className="group flex items-center gap-2 text-[11px] sm:text-[12px] font-medium font-sans transition-colors hover:text-[#C9A84C]"
            >
              <Mail
                size={14}
                className="text-[#C9A84C] transition-transform duration-200 group-hover:scale-110"
              />
              <span className="tracking-wide">info@mawilliamsco.com</span>
            </a> */}

            {/* Address */}
            {/* <div className="hidden xl:flex items-center gap-2 text-[11px] font-medium font-sans opacity-90">
              <MapPin
                size={14}
                className="flex-shrink-0 text-[#C9A84C]"
              />
              <span className="truncate tracking-wide">
                 71–75 Shelton Street, Covent Garden, London WC2H 9JQ
              </span>
            </div> */}
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