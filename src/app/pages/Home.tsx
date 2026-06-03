import { Link } from "react-router";
import { useEffect, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import {
  importantDates,
  home,
  CONF
} from "../data/conferenceData";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full space-y-16">
      {/* Hero Section */}
      <section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Countdown */}
          <div className="max-w-[560px]">
            <p
              className="text-[11px] font-semibold text-slate uppercase tracking-[2px] mb-6"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Hội thảo diễn ra sau
            </p>
            <CountdownTimer targetDate={CONF.dateStart} />
            <p
              className="text-[13px] text-slate italic mt-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {home.time}
            </p>

            <section className="mt-8 rounded-xl bg-[#c7e8f1] border border-[#b0d9e6] p-6 md:p-8 text-center shadow-sm">
              <h4
                className="text-[30px] md:text-[36px] font-medium text-[#0b2740] mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {home.name}
              </h4>
              <p
                className="text-[16px] md:text-[20px] text-[#0b2740] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {home.venue}
              </p>
            </section>
          </div>

          {/* Timeline */}
          <div>
            <h3
              className="text-[28px] md:text-[32px] font-bold italic text-ink mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Các mốc thời gian
            </h3>

            <div className="space-y-6 relative pl-5 md:pl-6">
              <div className="absolute left-0 top-2 bottom-2 w-[1px] border-l border-dashed border-rule" />

              {importantDates.map((item, idx) => (
                <div key={idx} className="relative flex gap-4 items-start">
                  <div
                    className={`absolute -left-[21px] md:-left-[25px] w-2.5 h-2.5 rounded-full ${item.passed ? "bg-rule" : "bg-cipher"}`}
                  />
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span
                        className={`text-[15px] font-semibold ${item.passed ? "text-slate line-through" : "text-cipher"}`}
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.date}
                      </span>
                    </div>
                    <p
                      className="text-[17px] font-medium text-ink"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates & Info Section */}
      <section className="bg-[#f0f8fa] rounded-3xl p-8 lg:p-12 border border-[#b0d9e6] shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-cipher" />
          <span
            className="text-[13px] font-semibold text-cipher uppercase tracking-[3px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            THÔNG TIN QUAN TRỌNG
          </span>
        </div>
        <h2
          className="text-[32px] font-bold italic text-ink mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Một số mốc thời gian của Hội thảo
        </h2>
        <div className="text-[18px] text-[#0b2740] space-y-3 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          <p><span className="font-semibold">Thời gian tổ chức Hội thảo:</span> 14/8/2026</p>
          <p><span className="font-semibold">Thời hạn nộp báo cáo và tham luận:</span> 20/7/2026</p>
          <p><span className="font-semibold">Thời gian đăng ký tham dự Hội thảo:</span> 07/8/2026</p>
          <p><span className="font-semibold">Địa điểm tổ chức Hội thảo:</span> Học viện Kỹ thuật mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội</p>
          <p><span className="font-semibold">Hòm thư điện tử nhận bài tham luận và báo cáo:</span> <a href="mailto:AI4Security@actvn.edu.vn" className="text-cipher hover:underline">AI4Security@actvn.edu.vn</a></p>
          <p><span className="font-semibold">Mọi thông tin về hội thảo xin vui lòng liên hệ:</span> <a href="mailto:AI4Security@actvn.edu.vn" className="text-cipher hover:underline">AI4Security@actvn.edu.vn</a></p>
        </div>
      </section>

      {/* About the Conference */}
      <section className="bg-white rounded-3xl p-8 lg:p-12 border border-rule shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-cipher" />
          <span
            className="text-[11px] font-semibold text-cipher uppercase tracking-[3px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            GIỚI THIỆU
          </span>
        </div>
        <h2
          className="text-[36px] font-bold italic text-ink mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Về hội thảo {CONF.name}
        </h2>
        <div className="text-[16px] text-slate space-y-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
          {home.aboutTheConference.map((p, idx) => (
            <p key={idx} className="indent-8">{p}</p>
          ))}
        </div>
      </section>
    </div>
  );
}
