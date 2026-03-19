import { Link } from "react-router";
import { Mail } from "lucide-react";
import { CONF } from "../data/conferenceData";
import { sponsorsData } from "../data/sponsorsData";

type SponsorItem = {
  title: string;
  logo: string;
  url: string;
};

const sponsorLogoModules = import.meta.glob("../../assets/*.{png,jpg,jpeg,webp,svg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const sponsorLogoByName = Object.entries(sponsorLogoModules).reduce<Record<string, string>>(
  (acc, [path, logoUrl]) => {
    const fileName = path.split("/").pop();
    if (fileName) {
      acc[fileName] = logoUrl;
    }
    return acc;
  },
  {}
);

const resolveSponsorLogo = (logoFileName: string) => {
  const candidates = [
    logoFileName,
    logoFileName.replace("co-organizer-", "co-organizers-"),
    logoFileName.replace("endorser-", "endorsers-"),
  ];

  for (const candidate of candidates) {
    if (sponsorLogoByName[candidate]) {
      return sponsorLogoByName[candidate];
    }
  }

  return "";
};

const sponsorsList: SponsorItem[] = Object.values(sponsorsData).flat();
const marqueeSponsors = [...sponsorsList, ...sponsorsList];

export default function Footer() {
  return (
    <div>
      {/* Sponsors Marquee */}
      <div className="mb-10">
        <div className="sponsors-marquee">
          <div className="sponsors-marquee__track" aria-label="Sponsors and partners">
            {marqueeSponsors.map((sponsor, idx) => {
              const logoUrl = resolveSponsorLogo(sponsor.logo);

              return (
                <a
                  key={`${sponsor.title}-${idx}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[64px] min-w-[220px] rounded-xl border border-white/10 bg-white/[0.03] px-4 flex items-center justify-center hover:border-cipher/50 transition-colors duration-200"
                  title={sponsor.title}
                >
                  {logoUrl ? (
                    <img
                      src={logoUrl}
                      alt={sponsor.title}
                      className="max-h-10 w-auto object-contain"
                      loading="lazy"
                    />
                  ) : (
                    <span
                      className="text-[12px] text-white/70 text-center"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {sponsor.title}
                    </span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>
      <footer className="bg-[#060E1A] text-white">
        <div className="max-w-[1200px] mx-auto px-6 pt-18 pb-8">
          {/* Top Section */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="text-[28px] font-bold"
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
              <p
                className="text-[13px] text-white/45"
                style={{ fontFamily: "var(--font-body)" }}
              >
                International Conference on
                <br />
                Cryptography & Information Security
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`mailto:${CONF.contactEmail}`}
                className="text-white/35 hover:text-cipher transition-colors duration-200"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/8 mb-10" />

          {/* Links Grid */}
          <div className="grid grid-cols-4 gap-12 mb-10">
            <div>
              <h3
                className="text-[11px] font-semibold text-cipher uppercase tracking-[2px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Conference
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  to="/"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Home
                </Link>
                <Link
                  to="/call-for-papers"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Call for Papers
                </Link>
                <Link
                  to="/speakers"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Keynote Speakers
                </Link>
              </div>
            </div>

            <div>
              <h3
                className="text-[11px] font-semibold text-cipher uppercase tracking-[2px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Authors
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  to="/call-for-papers"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Submission Guidelines
                </Link>
                <a
                  href={CONF.easyChairUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Submit via EasyChair
                </a>
                <a
                  href="https://www.ieee.org/conferences/publishing/templates.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  IEEE Templates
                </a>
              </div>
            </div>

            <div>
              <h3
                className="text-[11px] font-semibold text-cipher uppercase tracking-[2px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Attend
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  to="/registration"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Registration
                </Link>
                <Link
                  to="/venue"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Venue & Travel
                </Link>
                <a
                  href={`https://vcris.org/previous-conferences/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Previous Conferences
                </a>
              </div>
            </div>

            <div>
              <h3
                className="text-[11px] font-semibold text-cipher uppercase tracking-[2px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Organization
              </h3>
              <div className="flex flex-col gap-3">
                <Link
                  to="/committees"
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Committees
                </Link>
                <a
                  href={`mailto:${CONF.contactEmail}`}
                  className="text-[14px] text-white/45 hover:text-white/85 transition-colors"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex justify-between items-center pt-8 border-t border-white/8">
            <p
              className="text-[12px] text-white/30"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © 2025 VCRIS · Academy of Cryptography Techniques, Vietnam
            </p>
            <p
              className="text-[12px] text-white/30"
              style={{ fontFamily: "var(--font-body)" }}
            >
              IEEE Proceedings · DBLP Indexed
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
