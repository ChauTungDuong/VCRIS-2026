import { ComponentConfig } from "@measured/puck";
import CountdownTimer from "../../../components/CountdownTimer";

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
  contentHtml: string;
  bgColor: string;
};

export const Ai4CrisSection: ComponentConfig<Ai4CrisSectionProps> = {
  label: "AI4CRIS Section Box",
  defaultProps: {
    title: "TIÊU ĐỀ SECTION",
    contentHtml: "<p>Nội dung giới thiệu...</p>",
    bgColor: "#ffffff",
  },
  fields: {
    title: { type: "text", label: "Tiêu đề (Chữ Hoa)" },
    contentHtml: { type: "textarea", label: "Nội dung (HTML)" },
    bgColor: {
      type: "select",
      label: "Màu nền",
      options: [
        { label: "Trắng (#ffffff)", value: "#ffffff" },
        { label: "Xanh nhạt (#f0f8fa)", value: "#f0f8fa" },
      ],
    },
  },
  render: ({ title, contentHtml, bgColor, puck }) => (
    <section
      ref={puck.dragRef}
      className={`rounded-3xl p-8 lg:p-12 border shadow-sm ${
        bgColor === "#f0f8fa" ? "bg-[#f0f8fa] border-[#b0d9e6]" : "bg-white border-rule"
      }`}
    >
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <div className="w-3 h-3 rounded-full bg-cipher" />
        <h2
          className="text-[28px] md:text-[32px] font-bold text-cipher uppercase"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {title}
        </h2>
      </div>
      <div
        className={`text-[16px] md:text-[18px] space-y-4 leading-relaxed ${
          bgColor === "#f0f8fa" ? "text-[#0b2740]" : "text-slate"
        } ai4cris-html-content`}
        style={{ fontFamily: "var(--font-body)" }}
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </section>
  ),
};
