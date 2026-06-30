import { Calendar, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { home } from "../data/conferenceData";
import { useSiteConfig } from "../hooks/useSiteConfig";

export default function GlobalHero() {
  const [isVisible, setIsVisible] = useState(false);
  const { config } = useSiteConfig();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const heroName = config?.conference_name || home.name;
  const heroTitle = config?.hero_title || config?.ai4cris_hero_title || "HỘI THẢO KHOA HỌC QUỐC GIA <br className=\"hidden sm:block\" />TRÍ TUỆ NHÂN TẠO CHO MẬT MÃ <br className=\"hidden sm:block\" />VÀ AN TOÀN THÔNG TIN";
  const heroSubtitle = config?.hero_subtitle || config?.ai4cris_hero_subtitle || "<span className=\"text-[#0066CC]\">AI4CRIS</span> 2026";
  const heroDate = config?.conference_dates || config?.ai4cris_hero_date || home.time;
  const heroVenue = config?.conference_location || config?.ai4cris_hero_venue || home.venue;
  const bgImage = config?.hero_bg_image || "/images/bia-1920500.png";

  return (
    <section className="relative min-h-[450px] md:min-h-[500px] overflow-hidden mt-[60px] flex items-center py-12 md:py-16">
      <div className="absolute inset-0 bg-[#0c407c]">
        {/* Left side (Building) */}
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-left"
        />
        {/* Right side (Globe) with smooth fade mask */}
        <img
          src={bgImage}
          alt=""
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-right [mask-image:linear-gradient(to_right,transparent_30%,black_70%)] md:[mask-image:linear-gradient(to_right,transparent_40%,black_60%)]"
        />
        <div className="absolute inset-0 bg-white/10" />
      </div>

      <div className="relative w-full max-w-[1200px] mx-auto px-4 md:px-6 flex items-center justify-center text-center">
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
              {heroName}
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
                <span 
                  className="block text-[18px] sm:text-[24px] md:text-[34px] italic font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  dangerouslySetInnerHTML={{ __html: heroTitle }}
                />
                <span 
                  className="block text-[36px] sm:text-[44px] md:text-[62px] italic font-black mt-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]"
                  dangerouslySetInnerHTML={{ __html: heroSubtitle }}
                />
              </h1>
            </div>
          </div>

          {/* Meta Chips */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
          >
            <div className="flex items-start sm:items-center gap-2 px-4 py-4 rounded-[20px] bg-white/60 border border-[#0a2342]/10 backdrop-blur-md shadow-sm whitespace-nowrap">
              <Calendar size={18} className="text-cipher shrink-0 mt-0.5 sm:mt-0" />
              <span
                className="text-[14px] sm:text-[15px] font-bold text-[#0a2342]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {heroDate}
              </span>
            </div>
            <div className="flex items-start sm:items-center gap-2 px-4 py-4 rounded-[20px] bg-white/60 border border-[#0a2342]/10 backdrop-blur-md shadow-sm sm:whitespace-nowrap text-left">
              <MapPin size={18} className="text-cipher shrink-0 mt-0.5 sm:mt-0" />
              <span
                className="text-[14px] sm:text-[15px] font-bold text-[#0a2342]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {heroVenue}
              </span>
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
