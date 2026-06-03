import { Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { home } from "../data/conferenceData";

export default function GlobalHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-[400px] md:h-[500px] overflow-hidden mt-[60px]">
      <div className="absolute inset-0">
        <img
          src="/images/hohoankiem.avif"
          alt="Cryptography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-deep/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-deep/80 to-transparent" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 h-full flex items-center pt-8">
        <header className="max-w-[640px]">
          {/* Eyebrow */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <div className="w-8 h-1 bg-cipher" />
            <span
              className="text-[11px] font-semibold text-white tracking-[4px] uppercase"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {home.name}
            </span>
          </div>

          {/* Cipher Key Line */}
          <div className="relative pl-6">
            <div className="absolute left-0 top-0 w-[1px] h-[72px] bg-cipher" />

            {/* Title */}
            <div
              className={`transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <h1
                className="text-white leading-[1.12]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="block text-[24px] md:text-[34px] italic font-bold">
                  HỘI THẢO KHOA HỌC QUỐC GIA TRÍ TUỆ NHÂN TẠO CHO MẬT MÃ VÀ AN TOÀN THÔNG TIN
                </span>
                <span className="block text-[44px] md:text-[62px] italic font-bold mt-2">
                  <span className="text-cipher">AI4CRIS</span> 2026
                </span>
              </h1>
            </div>
          </div>

          {/* Meta Chips */}
          <div
            className={`flex gap-3 mt-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <div className="flex items-center gap-2 px-4 py-4 rounded-[20px] bg-white/10 border border-white/20 backdrop-blur-sm whitespace-nowrap">
              <Calendar size={16} className="text-cipher" />
              <span
                className="text-[14px] font-medium text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {home.time}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-4 rounded-[20px] bg-white/10 border border-white/20 backdrop-blur-sm whitespace-nowrap">
              <MapPin size={16} className="text-cipher" />
              <span
                className="text-[14px] font-medium text-white"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {home.venue}
              </span>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
