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

export default function Footer() {
  return (
    <div>
      <footer className="bg-[#060E1A] text-white">
        <div className="max-w-[1800px] mx-auto px-8 lg:px-12 xl:px-16 pt-16 pb-8">
          {/* Top Section */}
          <div className="flex justify-between items-start mb-10">
            <div>
              <div className="flex items-baseline gap-2 mb-2">
                <span
                  className="text-[36px] font-bold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  AI4CRIS
                </span>
                <span
                  className="text-[18px] font-medium text-cipher"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  2026
                </span>
              </div>
              <p
                className="text-[17px] text-white/60 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Hội thảo khoa học Quốc gia <br />
                Trí tuệ nhân tạo cho Mật mã và An toàn thông tin
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href={`mailto:${CONF.contactEmail}`}
                className="text-white/60 hover:text-cipher transition-colors duration-200"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10 mb-10" />

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3
                className="text-[13px] font-bold text-cipher uppercase tracking-[2px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Hội thảo
              </h3>
              <div className="flex flex-col gap-3">
                <Link to="/" className="text-[15px] text-white/60 hover:text-white transition-colors">
                  Trang chủ
                </Link>
                <Link to="/members" className="text-[17px] text-white/60 hover:text-white transition-colors">
                  Thành viên
                </Link>
                <Link to="/speakers" className="text-[17px] text-white/60 hover:text-white transition-colors">
                  Diễn giả
                </Link>
              </div>
            </div>

            <div>
              <h3
                className="text-[16px] font-bold text-cipher uppercase tracking-[2px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Tác giả
              </h3>
              <div className="flex flex-col gap-3">
                <Link to="/submission" className="text-[17px] text-white/60 hover:text-white transition-colors">
                  Gửi bài tham dự
                </Link>
                <a href={CONF.easyChairUrl} target="_blank" rel="noopener noreferrer" className="text-[17px] text-white/60 hover:text-white transition-colors">
                  Nộp bài qua EasyChair
                </a>
              </div>
            </div>

            <div>
              <h3
                className="text-[16px] font-bold text-cipher uppercase tracking-[2px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Tham dự
              </h3>
              <div className="flex flex-col gap-3">
                <Link to="/registration" className="text-[17px] text-white/60 hover:text-white transition-colors">
                  Đăng ký tham dự
                </Link>
                <Link to="/program" className="text-[17px] text-white/60 hover:text-white transition-colors">
                  Chương trình
                </Link>
                <Link to="/venue" className="text-[17px] text-white/60 hover:text-white transition-colors">
                  Địa điểm
                </Link>
              </div>
            </div>

            <div>
              <h3
                className="text-[13px] font-bold text-cipher uppercase tracking-[2px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Liên hệ
              </h3>
              <div className="flex flex-col gap-3">
                <a href={`mailto:${CONF.contactEmail}`} className="text-[15px] text-white/60 hover:text-white transition-colors">
                  {CONF.contactEmail}
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
            <p
              className="text-[14px] text-white/40"
              style={{ fontFamily: "var(--font-body)" }}
            >
              © 2026 AI4CRIS · Học viện Kỹ thuật mật mã
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
