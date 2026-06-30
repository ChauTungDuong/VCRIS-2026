import React, { useState } from "react";
import { ComponentConfig, DropZone } from "@measured/puck";
import CountdownTimer from "../../../components/CountdownTimer";
import { makeTipTapField } from "./TipTapField";


// ==========================
// AI4CRIS Heading
// ==========================
export type Ai4CrisHeadingProps = {
  text: string;
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  align: "left" | "center" | "right";
  color: "cipher" | "ink" | "slate" | "white" | "primary" | "warning";
  italic: boolean;
};

export const Ai4CrisHeading: ComponentConfig<Ai4CrisHeadingProps> = {
  label: "AI4CRIS Heading",
  defaultProps: {
    text: "Tiêu đề phụ",
    level: "h3",
    align: "left",
    color: "cipher",
    italic: false,
  },
  fields: {
    text: { type: "text", label: "Nội dung" },
    level: {
      type: "select", label: "Cấp độ",
      options: [
        { label: "H1", value: "h1" }, { label: "H2", value: "h2" }, { label: "H3", value: "h3" },
        { label: "H4", value: "h4" }, { label: "H5", value: "h5" }, { label: "H6", value: "h6" },
      ]
    },
    align: {
      type: "select", label: "Căn lề",
      options: [
        { label: "Trái", value: "left" }, { label: "Giữa", value: "center" }, { label: "Phải", value: "right" }
      ]
    },
    color: {
      type: "select", label: "Màu sắc",
      options: [
        { label: "Đỏ (Cipher)", value: "cipher" }, { label: "Xanh đậm (Ink)", value: "ink" },
        { label: "Xám (Slate)", value: "slate" }, { label: "Trắng (White)", value: "white" },
        { label: "Xanh nhạt (Primary)", value: "primary" }, { label: "Vàng (Warning)", value: "warning" },
      ]
    },
    italic: {
      type: "select", label: "In nghiêng",
      options: [{ label: "Không", value: false }, { label: "Có", value: true }] as any
    }
  },
  render: ({ text, level, align, color, italic, puck }) => {
    const Tag = level;
    let colorClass = "text-cipher";
    if (color === "ink") colorClass = "text-ink";
    if (color === "slate") colorClass = "text-slate";
    if (color === "white") colorClass = "text-white";
    if (color === "primary") colorClass = "text-[#0EA5A0]";
    if (color === "warning") colorClass = "text-[#975a16]";

    const sizeClass = level === "h1" ? "text-[36px] md:text-[44px]" :
                      level === "h2" ? "text-[28px] md:text-[32px]" :
                      level === "h3" ? "text-[22px] md:text-[24px]" :
                      level === "h4" ? "text-[18px] md:text-[20px]" : "text-[16px]";

    return (
      <Tag ref={puck.dragRef} className={`${sizeClass} ${colorClass} font-bold ${italic ? 'italic' : ''} text-${align} mb-4`} style={{ fontFamily: "var(--font-display)" }}>
        {text}
      </Tag>
    );
  }
};

// ==========================
// AI4CRIS Text
// ==========================
export type Ai4CrisTextProps = {
  contentHtml: string;
};

export const Ai4CrisText: ComponentConfig<Ai4CrisTextProps> = {
  label: "AI4CRIS Rich Text",
  defaultProps: {
    contentHtml: "<p>Nội dung văn bản...</p>",
  },
  fields: {
    contentHtml: makeTipTapField("Nội dung (HTML)"),
  },
  render: ({ contentHtml, puck }) => (
    <div ref={puck.dragRef} className="ai4cris-html-content space-y-4" style={{ fontFamily: "var(--font-body)" }} dangerouslySetInnerHTML={{ __html: contentHtml }} />
  )
};

// ==========================
// AI4CRIS Button
// ==========================
export type Ai4CrisButtonProps = {
  label: string;
  url: string;
  variant: "primary" | "secondary" | "outline";
};

export const Ai4CrisButton: ComponentConfig<Ai4CrisButtonProps> = {
  label: "AI4CRIS Button",
  defaultProps: {
    label: "Click here",
    url: "#",
    variant: "primary",
  },
  fields: {
    label: { type: "text", label: "Nhãn nút" },
    url: { type: "text", label: "Đường dẫn" },
    variant: {
      type: "select", label: "Kiểu",
      options: [
        { label: "Màu đỏ chính (Primary)", value: "primary" },
        { label: "Màu xanh (Secondary)", value: "secondary" },
        { label: "Viền (Outline)", value: "outline" }
      ]
    }
  },
  render: ({ label, url, variant, puck }) => {
    let className = "inline-flex items-center justify-center px-6 py-3 rounded-full font-bold text-[14px] uppercase tracking-wider transition-all duration-300 ";
    if (variant === "primary") {
      className += "bg-cipher text-white hover:bg-ink hover:text-white";
    } else if (variant === "secondary") {
      className += "bg-ink text-white hover:bg-cipher hover:text-white";
    } else {
      className += "border-2 border-cipher text-cipher hover:bg-cipher hover:text-white";
    }

    return (
      <div ref={puck.dragRef} className="my-4">
        <a href={url} className={className} style={{ fontFamily: "var(--font-display)" }}>
          {label}
        </a>
      </div>
    );
  }
};

// ==========================
// AI4CRIS Countdown Block
// ==========================
export type Ai4CrisCountdownProps = {
  label: string;
  targetDate: string;
  timeText: string;
  boxTitle: string;
  boxText: string;
};

export const Ai4CrisCountdown: ComponentConfig<Ai4CrisCountdownProps> = {
  label: "AI4CRIS Countdown",
  defaultProps: {
    label: "Hội thảo diễn ra sau",
    targetDate: "2026-08-14T08:00:00",
    timeText: "Hà Nội, 14/8/2026",
    boxTitle: "AI4CRIS 2026",
    boxText: "Học viện Kỹ thuật mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội",
  },
  fields: {
    label: { type: "text", label: "Tiêu đề đếm ngược" },
    targetDate: { type: "text", label: "Ngày giờ mục tiêu (YYYY-MM-DDTHH:mm:ss)" },
    timeText: { type: "text", label: "Dòng ghi chú thời gian" },
    boxTitle: { type: "text", label: "Tiêu đề Box xanh" },
    boxText: { type: "text", label: "Nội dung Box xanh" },
  },
  render: ({ label, targetDate, timeText, boxTitle, boxText, puck }) => (
    <div ref={puck.dragRef} className="max-w-[560px]">
      <p
        className="text-[11px] font-semibold text-slate uppercase tracking-[2px] mb-6"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {label}
      </p>
      <CountdownTimer targetDate={targetDate} />
      <p
        className="text-[13px] text-slate italic mt-4"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {timeText}
      </p>

      <section className="mt-8 rounded-xl bg-[#c7e8f1] border border-[#b0d9e6] p-6 md:p-8 text-center shadow-sm">
        <h4
          className="text-[30px] md:text-[36px] font-medium text-[#0b2740] mb-3"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {boxTitle}
        </h4>
        <p
          className="text-[16px] md:text-[20px] text-[#0b2740] leading-relaxed whitespace-pre-wrap"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {boxText}
        </p>
      </section>
    </div>
  ),
};

// ==========================
// AI4CRIS Timeline
// ==========================
export type Ai4CrisTimelineProps = {
  title: string;
  items: { date: string; label: string; passed: boolean }[];
};

export const Ai4CrisTimeline: ComponentConfig<Ai4CrisTimelineProps> = {
  label: "AI4CRIS Timeline",
  defaultProps: {
    title: "Các mốc thời gian",
    items: [
      { date: "20/7/2026", label: "Thời hạn nộp báo cáo và tham luận", passed: false },
      { date: "07/8/2026", label: "Thời gian đăng ký tham dự Hội thảo", passed: false },
      { date: "14/8/2026", label: "Thời gian tổ chức Hội thảo", passed: false },
    ],
  },
  fields: {
    title: { type: "text", label: "Tiêu đề" },
    items: {
      type: "array",
      label: "Các mốc thời gian",
      arrayFields: {
        date: { type: "text", label: "Thời gian" },
        label: { type: "text", label: "Nội dung" },
        passed: {
          type: "select",
          label: "Đã qua",
          options: [
            { label: "Chưa qua", value: false },
            { label: "Đã qua", value: true },
          ],
        },
      },
      getItemSummary: (item) => item.label || "Mốc thời gian",
    } as any,
  },
  render: ({ title, items, puck }) => (
    <div ref={puck.dragRef}>
      <h3
        className="text-[28px] md:text-[32px] font-bold italic text-ink mb-8"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h3>

      <div className="space-y-6 relative pl-5 md:pl-6">
        <div className="absolute left-0 top-2 bottom-2 w-[1px] border-l border-dashed border-rule" />

        {(items || []).map((item, idx) => (
          <div key={idx} className="relative flex gap-4 items-start">
            <div
              className={`absolute -left-[21px] md:-left-[25px] w-2.5 h-2.5 rounded-full ${
                item.passed ? "bg-rule" : "bg-cipher"
              }`}
            />
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <span
                  className={`text-[15px] font-semibold ${
                    item.passed ? "text-slate line-through" : "text-cipher"
                  }`}
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
  ),
};

// ==========================
// AI4CRIS Styled Section
// ==========================
export type Ai4CrisSectionProps = {
  title: string;
  titleAlign: "left" | "center";
  variant: "card-white" | "card-blue" | "plain" | "warning-yellow";
};

export const Ai4CrisSection: ComponentConfig<Ai4CrisSectionProps> = {
  label: "AI4CRIS Section Box",
  defaultProps: {
    title: "TIÊU ĐỀ SECTION",
    titleAlign: "left",
        variant: "card-white",
  },
  fields: {
    title: { type: "text", label: "Tiêu đề" },
    titleAlign: {
      type: "select",
      label: "Căn lề tiêu đề",
      options: [
        { label: "Trái", value: "left" },
        { label: "Giữa", value: "center" },
      ],
    },
    
    variant: {
      type: "select",
      label: "Kiểu dáng khối",
      options: [
        { label: "Thẻ trắng (Card White)", value: "card-white" },
        { label: "Thẻ xanh nhạt (Card Blue)", value: "card-blue" },
        { label: "Không nền/Viền (Plain)", value: "plain" },
        { label: "Lưu ý vàng (Warning Yellow)", value: "warning-yellow" },
      ],
    },
  },
  render: ({ title, titleAlign, variant, puck }) => {
    let containerClass = "ai4cris-html-content mb-8 md:mb-12 ";
    let titleClass = "text-[28px] md:text-[32px] font-bold text-cipher uppercase";
    
    if (variant === "card-white") {
      containerClass += "bg-white rounded-3xl p-8 lg:p-12 border border-rule shadow-sm";
    } else if (variant === "card-blue") {
      containerClass += "bg-[#f0f8fa] rounded-3xl p-8 lg:p-12 border border-[#b0d9e6] shadow-sm";
    } else if (variant === "warning-yellow") {
      containerClass += "bg-[#fff9e6] border border-[#fbd38d] rounded-2xl p-6 shadow-sm text-[#975a16]";
      titleClass = "text-[18px] font-bold text-[#b7791f] mb-3";
    } else if (variant === "plain") {
      containerClass += "";
      titleClass = "text-[44px] font-bold italic text-ink leading-[1.15] mb-6";
    }

    return (
      <section ref={puck.dragRef} className={containerClass} style={{ fontFamily: "var(--font-body)" }}>
        {title && (
          <div className={`mb-4 md:mb-6 ${titleAlign === "center" ? "text-center" : "flex items-center gap-2"}`}>
            {titleAlign === "left" && variant !== "warning-yellow" && variant !== "plain" && (
              <div className="w-3 h-3 rounded-full bg-cipher flex-shrink-0" />
            )}
            <h2 className={titleClass} style={{ fontFamily: variant === "plain" ? "var(--font-display)" : "inherit" }}>
              {title}
            </h2>
          </div>
        )}
        
        <div className={`text-[16px] md:text-[18px] space-y-4 leading-relaxed ${
            variant === "card-blue" ? "text-[#0b2740]" : variant === "warning-yellow" ? "text-[#975a16]" : "text-slate"
          }`}>
          <DropZone zone="content" />
        </div>
      </section>
    );
  },
};

// ==========================
// AI4CRIS Member Tabs
// ==========================
export type Ai4CrisMemberTabsProps = {
  tabs: { id: string; title: string; }[];
};

export const Ai4CrisMemberTabs: ComponentConfig<Ai4CrisMemberTabsProps> = {
  label: "AI4CRIS Member Tabs",
  defaultProps: {
    tabs: [
      { id: "ban-chi-dao", title: "Ban chỉ đạo" },
      { id: "ban-to-chuc", title: "Ban tổ chức" },
      { id: "ban-chuong-trinh", title: "Ban chương trình" },
    ],
  },
  fields: {
    tabs: {
      type: "array",
      label: "Tabs",
      arrayFields: {
        id: { type: "text", label: "Tab ID" },
        title: { type: "text", label: "Tiêu đề Tab" },
        
      },
      getItemSummary: (item: any) => item.title || "Tab",
    } as any,
  },
  render: ({ tabs, puck }) => {
    const [activeId, setActiveId] = useState(tabs?.[0]?.id);
    return (
      <div ref={puck.dragRef} className="ai4cris-member-tabs w-full">
        <div className="grid w-full grid-cols-3 mb-8 bg-[#f1f5f9] p-1 rounded-lg items-center text-center">
          {(tabs || []).map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveId(t.id)}
              className={`py-2 px-4 rounded-md font-medium text-[16px] transition-all whitespace-nowrap ${
                activeId === t.id ? "bg-white text-ink shadow-sm font-semibold" : "text-slate hover:bg-white/50"
              }`}
              style={{ fontFamily: "var(--font-body)" }}
            >
              {t.title}
            </button>
          ))}
        </div>
        <div className="tab-content" style={{ fontFamily: "var(--font-body)" }}>
          {(tabs || []).map((t) => (
            <div 
              key={t.id} 
              className={`bg-paper p-8 rounded-2xl border border-rule transition-all duration-500 ease-in-out ${activeId === t.id ? "block opacity-100" : "hidden opacity-0"}`}
            >
              <div className="ai4cris-html-content space-y-4"><DropZone zone={`tab-${t.id}`} /></div>
            </div>
          ))}
        </div>
      </div>
    );
  },
};

// ==========================
// AI4CRIS Track Accordion
// ==========================
export type Ai4CrisTrackAccordionProps = {
  tracks: { id: string; title: string; }[];
};

export const Ai4CrisTrackAccordion: ComponentConfig<Ai4CrisTrackAccordionProps> = {
  label: "AI4CRIS Track Accordion",
  defaultProps: {
    tracks: [
      { id: "track-1", title: "Track 1: Chủ đề 1" },
    ],
  },
  fields: {
    tracks: {
      type: "array",
      label: "Tracks",
      arrayFields: {
        id: { type: "text", label: "ID (không dấu, viết liền)" },
        title: { type: "text", label: "Tiêu đề Track" },
        contentHtml: makeTipTapField("Nội dung (HTML)"),
      },
      getItemSummary: (item: any) => item.title || "Track",
    } as any,
  },
  render: ({ tracks, puck }) => (
    <div ref={puck.dragRef} className="space-y-6">
      {(tracks || []).map((track, i) => (
        <details
          key={i}
          className="bg-paper rounded-2xl border border-rule overflow-hidden transition-all duration-300 group"
        >
          <summary
            className="flex justify-between items-center cursor-pointer p-6 list-none hover:bg-[#f8fafc] transition-colors"
          >
            <h3 className="text-[20px] font-bold text-cipher" style={{ fontFamily: "var(--font-display)" }}>
              {track.title}
            </h3>
            <span
              className="text-cipher transform group-open:rotate-180 transition-transform duration-300 flex-shrink-0"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </span>
          </summary>
          <div
            className="p-6 pt-0 border-t border-rule bg-white text-[17px] text-slate ai4cris-html-content"
            style={{ fontFamily: "var(--font-body)" }}
          >
             <div className="mt-4"><DropZone zone={`track-${track.id}`} /></div>
          </div>
        </details>
      ))}
    </div>
  ),
};
