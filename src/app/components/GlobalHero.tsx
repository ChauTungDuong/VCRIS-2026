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
          src="/images/bia.jpg"
          alt="Cryptography"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative max-w-[1200px] mx-auto px-6 h-full flex items-center justify-center pt-8 text-center">
        <header className="max-w-[800px] flex flex-col items-center">
          {/* Eyebrow */}
          <div
            className={`flex items-center justify-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <div className="w-8 h-1 bg-cipher hidden sm:block" />
            <span
              className="text-[12px] font-bold text-[#1e40af] tracking-[4px] uppercase drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {home.name}
            </span>
            <div className="w-8 h-1 bg-cipher hidden sm:block" />
          </div>

          {/* Title */}
          <div className="relative">

            {/* Title */}
            <div
              className={`transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
            >
              <h1
                className="text-cipher leading-[1.12]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="block text-[24px] md:text-[34px] italic font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                  HỘI THẢO KHOA HỌC QUỐC GIA <br />
                  TRÍ TUỆ NHÂN TẠO CHO MẬT MÃ <br />
                  VÀ AN TOÀN THÔNG TIN
                </span>
                <span className="block text-[44px] md:text-[62px] italic font-black mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
                  <span className="text-[#0066CC]">AI4CRIS</span> 2026
                </span>
              </h1>
            </div>
          </div>

          {/* Meta Chips */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <div className="flex items-center gap-2 px-4 py-4 rounded-[20px] bg-white/60 border border-[#0a2342]/10 backdrop-blur-md shadow-sm whitespace-nowrap">
              <Calendar size={18} className="text-cipher" />
              <span
                className="text-[15px] font-bold text-[#0a2342]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {home.time}
              </span>
            </div>
            <div className="flex items-center gap-2 px-4 py-4 rounded-[20px] bg-white/60 border border-[#0a2342]/10 backdrop-blur-md shadow-sm whitespace-nowrap">
              <MapPin size={18} className="text-cipher" />
              <span
                className="text-[15px] font-bold text-[#0a2342]"
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
