import { Building2, Handshake, Users, Award } from "lucide-react";
import { sponsorsData } from "../data/sponsorsData";

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

const SponsorCategory = ({ title, icon: Icon, sponsors }: { title: string, icon: any, sponsors: any[] }) => {
  if (!sponsors || sponsors.length === 0) return null;
  
  return (
    <div className="mb-10 last:mb-0">
      <div className="flex items-center gap-2 mb-3">
        <Icon size={20} className="text-ink" />
        <h3 className="text-[14px] font-bold text-ink uppercase tracking-wider" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h3>
      </div>
      <div className="h-px w-full bg-rule mb-6 border-t border-dashed border-rule" />
      
      <div className="flex flex-col gap-8">
        {sponsors.map((sponsor, idx) => {
          const logoUrl = resolveSponsorLogo(sponsor.logo);
          return (
            <a
              key={idx}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center text-center group"
            >
              {logoUrl && (
                <div className="w-full flex justify-center mb-3">
                  <img
                    src={logoUrl}
                    alt={sponsor.title}
                    className="max-w-[140px] max-h-[100px] object-contain transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              )}
              <span className="text-[13px] text-ink font-medium leading-snug group-hover:text-cipher transition-colors" style={{ fontFamily: "var(--font-body)" }}>
                {sponsor.title}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default function SidebarLogos() {
  return (
    <div className="w-full h-full bg-white p-6 md:p-8">
      <SponsorCategory title="Sponsor" icon={Building2} sponsors={sponsorsData.organizer} />
      <SponsorCategory title="Technical Sponsor" icon={Handshake} sponsors={sponsorsData.technicalSponsor} />
      <SponsorCategory title="Co-Organizers" icon={Users} sponsors={sponsorsData.co_organizers} />
      <SponsorCategory title="Endorsers" icon={Award} sponsors={sponsorsData.endorsers} />
    </div>
  );
}
