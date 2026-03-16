import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";

export default function Navigation() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "HOME" },
    { path: "/call-for-papers", label: "PAPERS" },
    { path: "/speakers", label: "SPEAKERS" },
    { path: "/program", label: "PROGRAM" },
    { path: "/registration", label: "REGISTRATION" },
    { path: "/venue", label: "VENUE" },
    { path: "/committees", label: "COMMITTEES" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-16 border-b transition-all duration-200 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl border-rule"
          : "bg-white border-rule"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col">
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
              2025
            </span>
          </div>
          <span
            className="text-[10px] text-slate"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Cryptography & Information Security
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[13px] font-medium tracking-[0.3px] relative transition-colors duration-200 ${
                location.pathname === link.path
                  ? "text-cipher"
                  : "text-ink hover:text-cipher"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {link.label}
              {location.pathname === link.path && (
                <span className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-cipher" />
              )}
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a
            href="https://vcris.org/previous-conferences/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium tracking-[0.3px] text-ink hover:text-cipher transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            ARCHIVE
          </a>
          <Link
            to="/call-for-papers"
            className="px-4 h-10 rounded-2xl bg-cipher text-white text-[13px] font-semibold flex items-center justify-center transition-all duration-200 hover:shadow-lg hover:shadow-cipher/40"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Submit Paper
          </Link>
          <Link
            to="/registration"
            className="px-4 h-10 rounded-2xl border border-cipher text-cipher bg-white text-[13px] font-semibold flex items-center justify-center transition-all duration-200 hover:bg-cipher/5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}
