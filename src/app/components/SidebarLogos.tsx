import { Building2, Shield, Users } from "lucide-react";
import { logos } from "../data/conferenceData";

const SponsorCategory = ({ title, icon: Icon, sponsors }: { title: string, icon: any, sponsors: any[] }) => {
  if (!sponsors || sponsors.length === 0) return null;
  
  return (
    <div className="mb-10 last:mb-0 w-full flex flex-col items-center">
      <div className="flex items-center gap-2 mb-3 w-full border-b border-rule pb-2">
        <Icon size={20} className="text-cipher" />
        <h3 className="text-[14px] font-bold text-ink uppercase tracking-wider w-full" style={{ fontFamily: "var(--font-display)" }}>
          {title}
        </h3>
      </div>
      
      <div className="flex flex-col gap-8 w-full items-center mt-2">
        {sponsors.map((sponsor, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group w-full px-2">
            <div className="w-full flex justify-center mb-3 h-[100px] p-2 transition-transform duration-300 group-hover:scale-105">
              <img
                src={sponsor.src}
                alt={sponsor.name}
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                title={sponsor.name}
              />
            </div>
            <span className="text-[13px] text-ink font-bold leading-snug transition-colors" style={{ fontFamily: "var(--font-body)" }}>
              {sponsor.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function SidebarLogos() {
  const chuTri = logos.filter(l => l.role === "Đơn vị chủ trì tổ chức");
  const dongToChuc = logos.filter(l => l.role === "Đơn vị đồng tổ chức");
  const baoTro = logos.filter(l => l.role === "Đơn vị bảo trợ");

  return (
    <div className="w-full h-full bg-white py-6 pl-6 pr-2 md:py-8 md:pl-8 md:pr-4 flex flex-col items-center">
      <SponsorCategory title="Đơn vị chủ trì tổ chức" icon={Building2} sponsors={chuTri} />
      <SponsorCategory title="Đơn vị đồng tổ chức" icon={Users} sponsors={dongToChuc} />
      <SponsorCategory title="Đơn vị bảo trợ" icon={Shield} sponsors={baoTro} />
    </div>
  );
}
