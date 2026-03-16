import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import { headerNavLinks } from "../utils/routes";

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-200 ${isScrolled ? "bg-white/90 backdrop-blur-xl border-rule" : "bg-white border-rule"
        }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 lg:px-6 h-[76px] flex items-center gap-4">
        {/* Logo */}
        <Link to="/" className="flex flex-col shrink-0">
          <div className="flex items-baseline gap-2">
            <span
              className="text-[28px] font-bold text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              VCRIS
            </span>
            <span
              className="text-[13px] font-medium text-cipher"
              style={{ fontFamily: "var(--font-body)" }}
            >
              2026
            </span>
          </div>
          <span
            className="hidden xl:block text-[10px] text-slate whitespace-nowrap"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Cryptography & Information Security
          </span>
        </Link>

        {/* Nav Links */}
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-start lg:justify-center gap-1.5 lg:gap-2">
            {headerNavLinks.map((link) => {
              const isActive =
                location.pathname === link.path ||
                Boolean(link.children?.some((c) => location.pathname === c.path));
              const isOpen = activeDropdown === link.path;

              return (
                <div
                  key={link.path}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(link.children ? link.path : null)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.path}
                    className={`px-2.5 lg:px-3 h-9 rounded-full text-[11px] lg:text-[12px] font-medium tracking-[0.2px] whitespace-nowrap flex items-center gap-1 transition-colors duration-200 ${isActive
                      ? "text-cipher bg-cipher/10"
                      : "text-ink hover:text-cipher hover:bg-cipher/5"
                      }`}
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {link.label.toUpperCase()}
                    {link.children && (
                      <svg
                        className={`w-3 h-3 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2.5}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    )}
                  </Link>

                  {link.children && isOpen && (
                    <div className="absolute left-1/2 top-full z-50 mt-2 min-w-[200px] -translate-x-1/2 rounded-xl border border-rule bg-white py-1.5 shadow-xl shadow-black/10">
                      {/* small bridge so moving mouse to dropdown doesn't close it */}
                      <div className="absolute -top-2 left-0 right-0 h-2" />
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`flex items-center px-4 py-2 text-[12px] whitespace-nowrap transition-colors duration-150 ${location.pathname === child.path
                            ? "text-cipher bg-cipher/8 font-medium"
                            : "text-ink hover:text-cipher hover:bg-cipher/5"
                            }`}
                          style={{ fontFamily: "var(--font-body)" }}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.label.toUpperCase()}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Buttons
        <div className="hidden xl:flex items-center gap-2.5 shrink-0">
          <a
            href="https://vcris.org/previous-conferences/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-medium tracking-[0.2px] whitespace-nowrap text-ink hover:text-cipher transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ARCHIVE
          </a>
          <Link
            to={vcrisRoutes.callForPapers.path}
            className="px-3.5 h-9 rounded-2xl bg-cipher text-white text-[12px] font-semibold whitespace-nowrap flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:shadow-cipher/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Submit Paper
          </Link>
          <Link
            to={vcrisRoutes.registration.path}
            className="px-3.5 h-9 rounded-2xl border border-cipher text-cipher bg-white text-[12px] font-semibold whitespace-nowrap flex items-center justify-center transition-all duration-200 hover:bg-cipher/5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Register
          </Link>
        </div> */}
      </div>
    </nav>
  );
}
