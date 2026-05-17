import { Phone, Mail, MapPin } from "lucide-react";

/* ──────────────────────────────────────────────────────────
   Social Links
────────────────────────────────────────────────────────── */
const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "#",
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
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
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
    href: "#",
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
    label: "YouTube",
    href: "#",
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
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.14 1 12 1 12s0 3.86.46 5.58a2.78 2.78 0 0 0 1.94 2c1.72.42 8.6.42 8.6.42s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.86 23 12 23 12s0-3.86-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
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
            <a
              href="tel:+2348185811939"
              className="group flex items-center gap-2 text-[11px] sm:text-[12px] font-medium font-sans transition-colors hover:text-[#C9A84C]"
            >
              <Phone
                size={14}
                className="text-[#C9A84C] transition-transform duration-200 group-hover:scale-110"
              />
              <span className="tracking-wide">+234 818 581 1939</span>
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
                54A Earls Court Road, Ikate Lekki, Lagos State, Nigeria
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