import { Link } from "react-router";
import { Mail } from "lucide-react";
import { CONF } from "../data/conferenceData";
import { sponsorsData } from "../data/sponsorsData";
import { useState, useEffect } from "react";
import { pagesApi } from "../admin/hooks/useApi";
import { Render } from "@measured/puck";
import { puckConfig } from "../admin/components/PuckComponents";

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

export default function Footer() {
  const [footerData, setFooterData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    pagesApi.get("_footer")
      .then((res) => {
        if (res.data?.page?.content) {
          try {
            setFooterData(JSON.parse(res.data.page.content));
          } catch {
            // ignore
          }
        }
      })
      .catch(() => {
        // failed to fetch, use fallback
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  if (footerData) {
    return <Render config={puckConfig} data={footerData} />;
  }

  return (
    <div>
      <footer className="bg-[#173d6b] text-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12 xl:px-16 pt-12 pb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-10">
            {/* Logo & Info */}
            <div className="lg:col-span-4">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-[36px] font-bold" style={{ fontFamily: "var(--font-display)" }}>
                  AI4CRIS
                </span>
                <span className="text-[18px] font-medium text-white/80" style={{ fontFamily: "var(--font-body)" }}>
                  2026
                </span>
              </div>
              <p className="text-[16px] text-white/80 leading-relaxed mb-4" style={{ fontFamily: "var(--font-body)" }}>
                Hội thảo khoa học Quốc gia <br />
                Trí tuệ nhân tạo cho Mật mã và An toàn thông tin
              </p>
              <div className="flex items-center gap-4">
                <a href={`mailto:${CONF.contactEmail}`} className="text-white/80 hover:text-white transition-colors duration-200">
                  <Mail size={18} />
                </a>
              </div>
            </div>

            {/* Links */}
            <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-[15px] font-bold text-white/90 uppercase tracking-[2px] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                  Hội thảo
                </h3>
                <div className="flex flex-col gap-2">
                  <Link to="/" className="text-[16px] text-white/70 hover:text-white transition-colors">Trang chủ</Link>
                  <Link to="/members" className="text-[16px] text-white/70 hover:text-white transition-colors">Thành viên</Link>
                  <Link to="/speakers" className="text-[16px] text-white/70 hover:text-white transition-colors">Diễn giả</Link>
                </div>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-white/90 uppercase tracking-[2px] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                  Tác giả
                </h3>
                <div className="flex flex-col gap-2">
                  <Link to="/submission" className="text-[16px] text-white/70 hover:text-white transition-colors">Gửi bài tham dự</Link>
                  <a href={CONF.easyChairUrl} target="_blank" rel="noopener noreferrer" className="text-[16px] text-white/70 hover:text-white transition-colors">Nộp bài qua EasyChair</a>
                </div>
              </div>
              <div>
                <h3 className="text-[15px] font-bold text-white/90 uppercase tracking-[2px] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                  Tham dự
                </h3>
                <div className="flex flex-col gap-2">
                  <Link to="/registration" className="text-[16px] text-white/70 hover:text-white transition-colors">Đăng ký tham dự</Link>
                  <Link to="/program" className="text-[16px] text-white/70 hover:text-white transition-colors">Chương trình</Link>
                  <Link to="/venue" className="text-[16px] text-white/70 hover:text-white transition-colors">Địa điểm</Link>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-3">
              <h3 className="text-[15px] font-bold text-white/90 uppercase tracking-[2px] mb-3" style={{ fontFamily: "var(--font-body)" }}>
                Bản đồ
              </h3>
              <a 
                href="https://maps.app.goo.gl/T4Y8VpMhQh9g4s7z6" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block w-full h-[150px] rounded-xl overflow-hidden border border-white/20 hover:border-white/50 transition-all hover:shadow-lg relative group"
              >
                <iframe 
                  src="https://maps.google.com/maps?q=Học%20viện%20Kỹ%20thuật%20mật%20mã,%20141%20Chiến%20Thắng,%20Thanh%20Liệt,%20Hà%20Nội&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, pointerEvents: 'none' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <span className="bg-cipher text-white text-[11px] font-semibold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                    Mở trên Google Maps
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/20 gap-4">
            <p className="text-[15px] text-white/60" style={{ fontFamily: "var(--font-body)" }}>
              © 2026 AI4CRIS · Học viện Kỹ thuật mật mã
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
