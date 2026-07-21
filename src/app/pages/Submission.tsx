import React, { useState } from 'react';
import { submissionText, CONF } from "../data/conferenceData";
import { Link } from "react-router";
import { Check, ArrowRight, ChevronDown } from "lucide-react";

export default function Submission() {
  const [openTrack, setOpenTrack] = useState<number | null>(null);

  const toggleTrack = (index: number) => {
    setOpenTrack(openTrack === index ? null : index);
  };

  return (
    <div className="w-full space-y-16">
        <div className="text-center">
          <h1
            className="text-[44px] font-bold italic text-ink leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Gửi bài tham dự
          </h1>
        </div>

        <section className="bg-white rounded-3xl p-8 lg:p-12 border border-rule shadow-sm">
          <div className="text-[16px] text-slate space-y-4 leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {submissionText.about.map((paragraph, idx) => (
              <p key={idx} className="indent-8">{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="bg-[#f0f8fa] rounded-3xl p-8 lg:p-12 border border-[#b0d9e6] shadow-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-3 h-3 rounded-full bg-cipher" />
            <h2
              className="text-[28px] md:text-[32px] font-bold text-cipher uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              CHỦ ĐỀ
            </h2>
          </div>
          <div className="space-y-4">
            {submissionText.tracks.map((track, idx) => {
              const isOpen = openTrack === idx;
              return (
                <div key={idx} className="bg-paper rounded-2xl border border-rule overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleTrack(idx)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-[#f8fafc] transition-colors"
                  >
                    <h3 className="text-[20px] font-bold text-cipher" style={{ fontFamily: "var(--font-display)" }}>
                      {track.title}
                    </h3>
                    <ChevronDown size={24} className={`text-cipher transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  
                  <div className={`transition-all duration-300 ease-in-out ${isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="p-6 pt-0 border-t border-rule bg-white">
                      <p className="text-[17px] font-semibold text-ink mb-3 mt-4" style={{ fontFamily: "var(--font-body)" }}>Các chủ đề bao gồm nhưng không giới hạn:</p>
                      <ul className="space-y-3 mb-6">
                        {track.topics.map((topic, jdx) => (
                          <li key={jdx} className="flex items-start gap-3 text-[17px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
                            <Check size={18} strokeWidth={2.5} className="text-cipher flex-shrink-0 mt-0.5" />
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                      <p className="text-[14px] text-ink italic bg-warm p-4 rounded-xl border border-rule" style={{ fontFamily: "var(--font-body)" }}>
                        <span className="font-semibold text-cipher">Đối tượng gửi bài:</span> {track.audience}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 lg:p-12 border border-rule shadow-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-3 h-3 rounded-full bg-cipher" />
            <h2
              className="text-[28px] md:text-[32px] font-bold text-cipher uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              YÊU CẦU
            </h2>
          </div>
          <ul className="list-disc pl-6 space-y-3 text-[16px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
            {submissionText.requirements.map((req, idx) => (
              <li key={idx}>{req}</li>
            ))}
          </ul>
        </section>

        <section className="bg-[#f0f8fa] rounded-3xl p-8 lg:p-12 border border-[#b0d9e6] shadow-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-3 h-3 rounded-full bg-cipher" />
            <h2
              className="text-[28px] md:text-[32px] font-bold text-cipher uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              CẤU TRÚC
            </h2>
          </div>
          <p className="text-[16px] text-slate leading-relaxed" style={{ fontFamily: "var(--font-body)" }}>
            {submissionText.structure}
          </p>
        </section>

        <section className="bg-white rounded-3xl p-8 lg:p-12 border border-rule shadow-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-3 h-3 rounded-full bg-cipher" />
            <h2
              className="text-[28px] md:text-[32px] font-bold text-cipher uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              QUY TRÌNH XÉT DUYỆT
            </h2>
          </div>
          <ul className="list-decimal pl-6 space-y-3 text-[16px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
            {submissionText.reviewProcess.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ul>
        </section>

        <section className="bg-[#f0f8fa] rounded-3xl p-8 lg:p-12 border border-[#b0d9e6] shadow-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-3 h-3 rounded-full bg-cipher" />
            <h2
              className="text-[28px] md:text-[32px] font-bold text-cipher uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              MỐC THỜI GIAN
            </h2>
          </div>
          <div className="space-y-3 text-[16px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
            <p><span className="font-semibold text-ink">Thời gian tổ chức Hội thảo:</span> 14/8/2026</p>
            <p>
              <span className="font-semibold text-ink">Thời hạn nộp báo cáo và tham luận:</span>{" "}
              <span className="line-through text-slate">20/7/2026</span>{" "}
              <span className="text-red-600 font-bold ml-1">28/7/2026</span>
            </p>
            <p><span className="font-semibold text-ink">Thời gian đăng ký tham dự Hội thảo:</span> 07/8/2026</p>
          </div>
        </section>

        <section className="bg-white rounded-3xl p-8 lg:p-12 border border-rule shadow-sm">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <div className="w-3 h-3 rounded-full bg-cipher" />
            <h2
              className="text-[28px] md:text-[32px] font-bold text-cipher uppercase"
              style={{ fontFamily: "var(--font-display)" }}
            >
              LIÊN HỆ
            </h2>
          </div>
          <div className="space-y-3 text-[16px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
            <p><span className="font-semibold text-ink">Email:</span> <a href="mailto:AI4CRIS@actvn.edu.vn" className="text-cipher hover:underline">AI4CRIS@actvn.edu.vn</a></p>
            <p><span className="font-semibold text-ink">Website:</span> <a href="https://ai4cris.actvn.edu.vn" target="_blank" rel="noopener noreferrer" className="text-cipher hover:underline">https://ai4cris.actvn.edu.vn</a></p>
          </div>
          <p className="text-[16px] text-slate leading-relaxed mt-6">
            Ban Tổ chức trân trọng kính mời các nhà khoa học, chuyên gia, doanh nghiệp và cơ quan quản lý tham gia gửi bài và đồng hành cùng Hội thảo AI4CRIS 2026.
          </p>
        </section>

        <div className="bg-[#fff9e6] border border-[#fbd38d] rounded-2xl p-6 mt-12 shadow-sm">
          <h3 className="text-[18px] font-bold text-[#b7791f] mb-3">Lưu ý:</h3>
          <ul className="space-y-2 text-[17px] text-[#975a16] italic list-disc pl-5">
            <li>Mỗi bài báo cáo được chấp nhận trình bày tại hội thảo phải có ít nhất 01 tác giả hoặc đồng tác giả đăng ký tham dự và trực tiếp báo cáo.</li>
            <li>Thời lượng dành cho mỗi báo cáo là 20 phút trình bày và 05 phút trao đổi, thảo luận.</li>
          </ul>
        </div>

        <div className="flex justify-center mt-12">
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-[600px] justify-center">
            <Link
              to={CONF.easyChairUrl}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[20px] bg-cipher text-white text-[16px] font-semibold hover:shadow-lg hover:shadow-cipher/30 transition-all w-full sm:w-auto"
              style={{ fontFamily: "var(--font-body)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Gửi bài qua EasyChair <ArrowRight size={20} />
            </Link>
            <Link
              to="https://docs.google.com/forms/d/e/1FAIpQLSdQ8TRTDXG2lnoNCsp8WAtkS677UMS8AyD-kqRdXPQoTl47cw/viewform"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[20px] bg-cipher text-white text-[16px] font-semibold hover:shadow-lg hover:shadow-cipher/30 transition-all w-full sm:w-auto"
              style={{ fontFamily: "var(--font-body)" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Gửi bài qua Google Form <ArrowRight size={20} />
            </Link>
          </div>
        </div>
    </div>
  );
}
