import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import {
  createPuckContent,
  type PuckBlock,
  type PuckNode,
} from "../src/utils/puck.js";
import { home, organizingCommitteeGroups, submissionText } from "../../src/app/data/conferenceData.ts";

const prisma = new PrismaClient();

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

// ============================================
// Puck Builders
// ============================================

function textBlock(content: string, opts: any = {}): PuckNode {
  return {
    type: "TextBlock",
    props: {
      content,
      fontSize: opts.fontSize || "16px",
      fontFamily: opts.fontFamily || "var(--font-body)",
      fontWeight: opts.fontWeight || "400",
      fontStyle: opts.fontStyle || "normal",
      color: opts.color || "#0D1B2A",
      textAlign: opts.textAlign || "left",
      tag: opts.tag || "p",
      padding: "0",
      margin: "0 0 16px 0",
      id: `text-${Math.random().toString(36).substr(2, 9)}`,
    },
  };
}

function richText(html: string): PuckNode {
  return {
    type: "RichText",
    props: {
      html,
      maxWidth: "100%",
      padding: "0",
      id: `richtext-${Math.random().toString(36).substr(2, 9)}`,
    },
  };
}

function section(children: PuckNode[], opts: any = {}): PuckBlock {
  const sectionId = `section-${Math.random().toString(36).substr(2, 9)}`;
  return {
    node: {
      type: "Section",
      props: {
        backgroundColor: opts.backgroundColor || "#FFFFFF",
        padding: opts.padding || "64px 24px",
        maxWidth: opts.maxWidth || "1200px",
        id: sectionId,
      },
    },
    zones: {
      [`${sectionId}:content`]: children,
    },
  };
}

function columnsBlock(colZones: PuckNode[][], opts: any = {}): PuckBlock {
  const columnsId = `columns-${Math.random().toString(36).substr(2, 9)}`;
  const zones: Record<string, PuckNode[]> = {};
  colZones.forEach((nodes, i) => {
    zones[`${columnsId}:column-${i}`] = nodes;
  });

  return {
    node: {
      type: "Columns",
      props: {
        columns: opts.columns || colZones.length,
        gap: opts.gap || "48px",
        id: columnsId,
      },
    },
    zones,
  };
}

function ai4crisCountdown(opts: any = {}): PuckNode {
  return {
    type: "Ai4CrisCountdown",
    props: {
      label: opts.label || "Hội thảo diễn ra sau",
      targetDate: opts.targetDate || "2026-08-14T08:00:00",
      timeText: opts.timeText || "Hà Nội, 14/8/2026",
      boxTitle: opts.boxTitle || "AI4CRIS 2026",
      boxText: opts.boxText || "Học viện Kỹ thuật mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội",
      id: `countdown-${Math.random().toString(36).substr(2, 9)}`,
    },
  };
}

function ai4crisTimeline(opts: any = {}): PuckNode {
  return {
    type: "Ai4CrisTimeline",
    props: {
      title: opts.title || "Các mốc thời gian",
      items: opts.items || [],
      id: `timeline-${Math.random().toString(36).substr(2, 9)}`,
    },
  };
}


function mergeChildren(childrenInput: any[]) {
  const childrenNodes: any[] = [];
  const childZones: Record<string, any[]> = {};
  for (const child of childrenInput) {
     if ("node" in child) {
        childrenNodes.push(child.node);
        if (child.zones) Object.assign(childZones, child.zones);
     } else {
        childrenNodes.push(child);
     }
  }
  return { childrenNodes, childZones };
}

function ai4crisSection(opts: any = {}): PuckBlock {
  const sectionId = `ai4cris-section-${Math.random().toString(36).substr(2, 9)}`;
  const children: PuckNode[] = [];
  const zones: Record<string, PuckNode[]> = {};
  
  if (opts.contentHtml) {
    children.push({
      type: "Ai4CrisText",
      props: {
        contentHtml: opts.contentHtml,
        id: `ai4cris-text-${Math.random().toString(36).substr(2, 9)}`,
      }
    });
  }

  if (opts.children) {
    const merged = mergeChildren(opts.children);
    children.push(...merged.childrenNodes);
    Object.assign(zones, merged.childZones);
  }
  
  zones[`${sectionId}:content`] = children;

  return {
    node: {
      type: "Ai4CrisSection",
      props: {
        title: opts.title || "",
        titleAlign: opts.titleAlign || "left",
        variant: opts.variant || "card-white",
        id: sectionId,
      },
    },
    zones,
  };
}

function ai4crisMemberTabs(opts: any = {}): PuckBlock {
  const tabsId = `member-tabs-${Math.random().toString(36).substr(2, 9)}`;
  const zones: Record<string, PuckNode[]> = {};
  
  const tabsProps = (opts.tabs || []).map((t: any) => {
    if (t.contentHtml) {
      zones[`${tabsId}:tab-${t.id}`] = [{
        type: "Ai4CrisText",
        props: {
          contentHtml: t.contentHtml,
          id: `text-${Math.random().toString(36).substr(2, 9)}`,
        }
      }];
    }
    return { id: t.id, title: t.title };
  });

  return {
    node: {
      type: "Ai4CrisMemberTabs",
      props: {
        tabs: tabsProps,
        id: tabsId,
      },
    },
    zones,
  };
}

function ai4crisTrackAccordion(opts: any = {}): PuckBlock {
  const accordionId = `track-accordion-${Math.random().toString(36).substr(2, 9)}`;
  const zones: Record<string, PuckNode[]> = {};
  
  const tracksProps = (opts.tracks || []).map((t: any, idx: number) => {
    const trackId = t.id || `track-${idx + 1}`;
    if (t.contentHtml) {
      zones[`${accordionId}:track-${trackId}`] = [{
        type: "Ai4CrisText",
        props: {
          contentHtml: t.contentHtml,
          id: `text-${Math.random().toString(36).substr(2, 9)}`,
        }
      }];
    }
    return { id: trackId, title: t.title };
  });

  return {
    node: {
      type: "Ai4CrisTrackAccordion",
      props: {
        tracks: tracksProps,
        id: accordionId,
      },
    },
    zones,
  };
}

function tabsBlock(tabs: any[], activeColor = "#1B4F91"): PuckNode {
  return {
    type: "TabsBlock",
    props: {
      tabs,
      activeColor,
      id: `tabs-${Math.random().toString(36).substr(2, 9)}`,
    },
  };
}

function makePuckContent(components: any[]) {
  const { childrenNodes, childZones } = mergeChildren(components);
  return createPuckContent(
    childrenNodes.map((node) => ({ node, zones: childZones }))
  );
}

// ============================================
// Seed data
// ============================================
async function main() {
  console.log("🌱 Seeding database...");

  // 1. Create admin user
  const adminEmail = requireEnv("ADMIN_EMAIL");
  const adminPassword = requireEnv("ADMIN_PASSWORD");
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      password: hashedPassword,
      name: "VCRIS Admin",
      role: "SUPER_ADMIN",
    },
  });
  console.log("✅ Admin user created");

  // 2. Seed site config
  const siteConfigs: Record<string, unknown> = {
    conference_name: "AI4CRIS 2026",
    conference_full_name:
      "Hội thảo khoa học Quốc gia Trí tuệ nhân tạo cho mật mã và an toàn thông tin 2026",
    conference_edition: "1st",
    conference_dates: "14/08/2026",
    conference_date_start: "2026-08-14T08:00:00",
    conference_location: "Học viện Kỹ thuật mật mã, Hà Nội, Việt Nam",
    conference_address: "141 Chiến Thắng, Thanh Liệt, Hà Nội",
    easychair_url: "https://easychair.org/conferences/?conf=ai4cris",
    contact_email: "AI4CRIS@actvn.edu.vn",
    website_url: "https://ai4cris.org",
    default_locale: "vi",
    supported_locales: ["vi"],
    // Banner specific config
    ai4cris_hero_title: "HỘI THẢO KHOA HỌC QUỐC GIA<br/>TRÍ TUỆ NHÂN TẠO CHO MẬT MÃ<br/>VÀ AN TOÀN THÔNG TIN",
    ai4cris_hero_subtitle: "<span class=\"text-[#0066CC]\">AI4CRIS</span> 2026",
    ai4cris_hero_date: "14/08/2026",
    ai4cris_hero_venue: "Học viện Kỹ thuật mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội",
  };

  for (const [key, value] of Object.entries(siteConfigs)) {
    await prisma.siteConfig.upsert({
      where: { key },
      update: { value: value as any },
      create: { key, value: value as any },
    });
  }
  console.log("✅ Site config seeded");

  // 3. Seed pages
  const pages = [
    {
      slug: "home",
      isSystem: true,
      sortOrder: 0,
      vi: {
        title: "Trang chủ",
        content: makePuckContent([
          columnsBlock([
            [
              ai4crisCountdown({
                label: "Hội thảo diễn ra sau",
                targetDate: "2026-08-14T08:00:00",
                timeText: "Hà Nội, 14/8/2026",
                boxTitle: "AI4CRIS 2026",
                boxText: "Học viện Kỹ thuật mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội",
              })
            ],
            [
              ai4crisTimeline({
                title: "Các mốc thời gian",
                items: [
                  { date: "20/7/2026", label: "Thời hạn nộp báo cáo và tham luận", passed: false },
                  { date: "07/8/2026", label: "Thời gian đăng ký tham dự Hội thảo", passed: false },
                  { date: "14/8/2026", label: "Thời gian tổ chức Hội thảo", passed: false },
                ]
              })
            ]
          ]),
          ai4crisSection({
            title: "GIỚI THIỆU",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: home.aboutTheConference.map(p => `<p class="indent-8">${p}</p>`).join("")
          }),
          ai4crisSection({
            title: "THÔNG TIN QUAN TRỌNG",
            titleAlign: "left",
            variant: "card-blue",
            contentHtml: `<p><span class="font-semibold text-ink">Thời gian tổ chức Hội thảo:</span> ${home.importantDates.conferenceDates}</p><p><span class="font-semibold text-ink">Thời hạn nộp báo cáo và tham luận:</span> ${home.importantDates.paperSubmissionDeadline}</p><p><span class="font-semibold text-ink">Thời gian đăng ký tham dự Hội thảo:</span> ${home.importantDates.registrationDeadline}</p><p><span class="font-semibold text-ink">Địa điểm tổ chức Hội thảo:</span> ${home.venue}</p><p><span class="font-semibold text-ink">Mọi thông tin về hội thảo xin vui lòng liên hệ:</span> <a href="mailto:AI4CRIS@actvn.edu.vn">AI4CRIS@actvn.edu.vn</a></p>`
          })
        ])
      }
    },
    {
      slug: "members",
      isSystem: false,
      sortOrder: 1,
      vi: {
        title: "Thành viên",
        content: makePuckContent([
          ai4crisSection({
            title: "Thành viên",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisMemberTabs({
            tabs: organizingCommitteeGroups.map(group => {
              let id = "ban-chi-dao";
              if (group.role === "Ban Tổ chức") id = "ban-to-chuc";
              else if (group.role === "Ban Chương trình") id = "ban-chuong-trinh";
              
              let html = `<h3 class="text-[24px] font-bold text-ink mb-6 border-b border-rule pb-4">Danh sách thành viên ${group.role}</h3>`;
              group.members.forEach(member => {
                const textClass = member.isChair ? "font-bold text-ink" : "text-slate";
                html += `<div class="flex items-start gap-3 mt-4"><div class="w-2 h-2 rounded-full bg-cipher mt-2 flex-shrink-0"></div><p class="text-[16px] ${textClass}">${member.name}</p></div>`;
              });
              return { id, title: group.role, contentHtml: html };
            })
          })
        ])
      }
    },
    {
      slug: "speakers",
      isSystem: false,
      sortOrder: 2,
      vi: {
        title: "Diễn giả",
        content: makePuckContent([
          ai4crisSection({
            title: "Diễn giả",
            titleAlign: "center",
            variant: "plain",
            contentHtml: "<p class=\"text-[20px] text-slate italic text-center\" style=\"font-family: var(--font-body)\"><br/><br/>Thông tin về Diễn giả của Hội thảo AI4CRIS sẽ được cập nhật trong thời gian tới!</p>"
          })
        ])
      }
    },
    {
      slug: "submission",
      isSystem: false,
      sortOrder: 3,
      vi: {
        title: "Gửi bài tham dự",
        content: makePuckContent([
          ai4crisSection({
            title: "Gửi bài tham dự",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisSection({
            title: "",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: submissionText.about.map(p => `<p class="indent-8">${p}</p>`).join("")
          }),
          ai4crisSection({
            title: "CHỦ ĐỀ",
            titleAlign: "left",
            variant: "card-blue",
            children: [
              ai4crisTrackAccordion({
                tracks: submissionText.tracks.map((track, i) => {
                  let html = `<p class="font-semibold text-ink mb-3">Các chủ đề bao gồm nhưng không giới hạn:</p><ul class="list-disc pl-6 space-y-2 mb-6">`;
                  track.topics.forEach(topic => {
                    html += `<li>${topic}</li>`;
                  });
                  html += `</ul><p class="italic bg-warm p-4 rounded-xl border border-rule"><span class="font-semibold text-cipher">Đối tượng gửi bài:</span> ${track.audience}</p>`;
                  return { id: `track-${i + 1}`, title: track.title, contentHtml: html };
                })
              })
            ]
          }),
          ai4crisSection({
            title: "YÊU CẦU",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: `<ul class="list-disc pl-6 space-y-3">` + submissionText.requirements.map(req => `<li>${req}</li>`).join("") + `</ul>`
          }),
          ai4crisSection({
            title: "CẤU TRÚC",
            titleAlign: "left",
            variant: "card-blue",
            contentHtml: submissionText.structure
          }),
          ai4crisSection({
            title: "QUY TRÌNH XÉT DUYỆT",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: `<ul class="list-decimal pl-6 space-y-3">` + submissionText.reviewProcess.map(step => `<li>${step}</li>`).join("") + `</ul>`
          }),
          ai4crisSection({
            title: "MỐC THỜI GIAN",
            titleAlign: "left",
            variant: "card-blue",
            contentHtml: "<p><strong>Thời gian tổ chức Hội thảo:</strong> 14/8/2026</p><p><strong>Thời hạn nộp báo cáo và tham luận:</strong> 20/7/2026</p><p><strong>Thời gian đăng ký tham dự Hội thảo:</strong> 07/8/2026</p>"
          }),
          ai4crisSection({
            title: "LIÊN HỆ",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: "<p><strong>Email:</strong> <a href=\"mailto:AI4CRIS@actvn.edu.vn\" class=\"text-cipher hover:underline\">AI4CRIS@actvn.edu.vn</a></p><p><strong>Website:</strong> <a href=\"https://ai4cris.org\" target=\"_blank\" class=\"text-cipher hover:underline\">https://ai4cris.org</a></p><p class=\"mt-4\">Ban Tổ chức trân trọng kính mời các nhà khoa học, chuyên gia, doanh nghiệp và cơ quan quản lý tham gia gửi bài và đồng hành cùng Hội thảo AI4CRIS 2026.</p>"
          }),
          ai4crisSection({
            title: "Lưu ý:",
            titleAlign: "left",
            variant: "warning-yellow",
            contentHtml: "<ul class=\"list-disc pl-6 space-y-2\"><li>Mỗi bài báo cáo được chấp nhận trình bày tại hội thảo phải có ít nhất 01 tác giả hoặc đồng tác giả đăng ký tham dự và trực tiếp báo cáo.</li><li>Thời lượng dành cho mỗi báo cáo là 20 phút trình bày và 05 phút trao đổi, thảo luận.</li></ul>"
          }),
          ai4crisSection({
            title: "",
            titleAlign: "center",
            variant: "plain",
            contentHtml: "<div class=\"flex justify-center mt-12\"><div class=\"flex flex-col sm:flex-row items-center gap-4 w-full max-w-[600px] justify-center\"><a href=\"https://easychair.org/conferences/?conf=ai4cris\" class=\"inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[20px] bg-cipher text-white text-[16px] font-semibold hover:shadow-lg hover:shadow-cipher/30 transition-all w-full sm:w-auto\" target=\"_blank\">Gửi bài qua EasyChair →</a><a href=\"https://docs.google.com/forms/d/e/1FAIpQLSdQ8TRTDXG2lnoNCsp8WAtkS677UMS8AyD-kqRdXPQoTl47cw/viewform\" class=\"inline-flex items-center justify-center gap-2 px-8 py-4 rounded-[20px] bg-cipher text-white text-[16px] font-semibold hover:shadow-lg hover:shadow-cipher/30 transition-all w-full sm:w-auto\" target=\"_blank\">Gửi bài qua Google Form →</a></div></div>"
          })
        ])
      }
    },
    {
      slug: "registration",
      isSystem: false,
      sortOrder: 4,
      vi: {
        title: "Đăng ký tham dự",
        content: makePuckContent([
          ai4crisSection({
            title: "Đăng ký tham dự",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisSection({
            title: "",
            titleAlign: "left",
            variant: "card-white",
            contentHtml: "<p>Để tham dự Hội thảo, vui lòng thực hiện đăng ký trực tuyến thông qua biểu mẫu Google Form của Ban Tổ chức.</p><div class=\"flex flex-col items-center justify-center p-8 bg-white rounded-2xl border border-cipher/20 shadow-sm gap-4 mt-8 mb-8\"><a href=\"https://forms.gle/your-google-form-link-here\" target=\"_blank\" rel=\"noopener noreferrer\" class=\"px-8 py-4 rounded-xl bg-cipher text-white font-bold text-[18px] hover:bg-cipher/90 transition-colors shadow-md hover:shadow-lg\">👉 Đăng ký tham dự tại đây</a><p class=\"text-[13px] text-slate italic text-center max-w-[400px]\">Sau khi hoàn thành biểu mẫu đăng ký, hệ thống sẽ ghi nhận thông tin của Quý đại biểu. Ban Tổ chức sẽ gửi thư xác nhận tham dự và các thông tin liên quan đến hội thảo qua email đã đăng ký.</p></div><div class=\"space-y-4\"><h3 class=\"text-[20px] font-bold text-ink\">Lưu ý</h3><ul class=\"list-disc pl-6 space-y-2 text-[15px] text-slate\"><li>Việc đăng ký tham dự là hoàn toàn miễn phí.</li><li>Số lượng đại biểu tham dự trực tiếp có thể được giới hạn tùy theo điều kiện tổ chức.</li><li>Ban Tổ chức khuyến nghị các đại biểu đăng ký sớm để thuận tiện cho công tác tổ chức.</li></ul></div><div class=\"space-y-4 border-t border-rule pt-8 mt-8\"><h3 class=\"text-[20px] font-bold text-ink\">Thông tin liên hệ</h3><div class=\"text-[15px] text-slate space-y-2\"><p><span class=\"font-semibold text-ink\">Ms. Vương Thị Hải Hà</span></p><p>SĐT: 0984 346 162</p><p>Email: <a href=\"mailto:AI4CRIS@actvn.edu.vn\" class=\"text-cipher hover:underline\">AI4CRIS@actvn.edu.vn</a></p></div></div><p class=\"text-[16px] font-bold text-ink text-center pt-4 mt-8\">Ban Tổ chức trân trọng cảm ơn sự quan tâm và mong được đón tiếp Quý đại biểu tại Hội thảo AI4CRIS 2026.</p>"
          })
        ])
      }
    },
    {
      slug: "program",
      isSystem: false,
      sortOrder: 5,
      vi: {
        title: "Chương trình Hội thảo",
        content: makePuckContent([
          ai4crisSection({
            title: "Chương trình Hội thảo",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisSection({
            title: "",
            titleAlign: "left",
            variant: "plain",
            contentHtml: "<div class=\"space-y-16\"><section><h2 class=\"text-[24px] font-bold text-ink mb-6 bg-paper px-4 py-3 rounded-lg border-l-4 border-cipher\">1. Phiên toàn thể và bàn tròn (Địa điểm: Hội trường)</h2><div class=\"overflow-x-auto rounded-xl border border-rule shadow-sm\"><table class=\"w-full text-left border-collapse\"><thead><tr class=\"bg-warm text-ink text-[17px]\"><th class=\"p-4 border-b border-rule w-[140px] whitespace-nowrap\">Thời gian</th><th class=\"p-4 border-b border-rule\">Nội dung</th><th class=\"p-4 border-b border-rule w-[250px]\">Diễn giả/Đơn vị</th></tr></thead><tbody class=\"text-[16px] text-slate divide-y divide-rule\"><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink\">07:30 - 08:00</td><td class=\"p-4\">Đón tiếp, đăng ký đại biểu</td><td class=\"p-4\">Học viện Kỹ thuật mật mã</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink\">08:00 - 08:15</td><td class=\"p-4\">Phát biểu Chào mừng và Khai mạc hội thảo</td><td class=\"p-4\">Lãnh đạo Ban Cơ yếu Chính phủ/ Học viện KTMM, Chủ tịch FISU VN</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink\">08:15 - 08:35</td><td class=\"p-4\">Báo cáo mời 1: Chính sách và định hướng chiến lược quốc gia về AI</td><td class=\"p-4\">Đại diện Bộ Khoa học và Công nghệ</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink\">08:35 - 09:00</td><td class=\"p-4\">Báo cáo mời 2: Một số kết quả nghiên cứu nổi bật về AI trong ATTT của Học viện KTMM và định hướng AI trong bảo mật và mật mã quốc gia</td><td class=\"p-4\">Học viện Kỹ thuật mật mã</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink\">09:00 - 09:25</td><td class=\"p-4\">Báo cáo mời 3: AI và An ninh dữ liệu tại Trung tâm dữ liệu quốc gia</td><td class=\"p-4\">Trung tâm Dữ liệu Quốc gia</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink\">09:25 - 09:50</td><td class=\"p-4\">Báo cáo mời 4: Ứng dụng AI trong chuyển đổi số của Bộ quốc phòng</td><td class=\"p-4\">Bộ Tư lệnh 86</td></tr><tr class=\"bg-cipher/5 font-semibold text-cipher\"><td class=\"p-4\">09:50 - 10:05</td><td class=\"p-4\" colspan=\"2\">Nghỉ giải lao</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink\">10:05 - 10:30</td><td class=\"p-4\">Báo cáo mời 5: AI cho hệ sinh thái thông tin tin cậy: Giải pháp chống thông tin sai lệch trong kỷ nguyên an ninh mạng.</td><td class=\"p-4\">FISU Việt Nam</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink\">10:30 - 10:55</td><td class=\"p-4\">Báo cáo mời 6: Ứng dụng AI trong bảo vệ hạ tầng trọng yếu, chính phủ số</td><td class=\"p-4\">Doanh nghiệp công nghệ lớn (Viettel/VNPT/BKAV/CMC/Mobilefone...)</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink align-top\">10:55 - 11:40</td><td class=\"p-4\"><p class=\"font-bold text-ink mb-2\">Phiên bàn tròn: Cơ hội và thách thức ứng dụng AI trong ATTT tại Việt Nam</p><ul class=\"list-disc pl-5 space-y-1\"><li>Nhà quản lý: Bộ Quốc phòng, Bộ Công an, Bộ Khoa học và Công nghệ, Ban Cơ yếu Chính phủ</li><li>Nhà khoa học (Viện, trường)</li><li>Doanh nghiệp</li></ul></td><td class=\"p-4 align-top\"><p class=\"mb-2\"><span class=\"font-semibold\">Điều phối:</span> Học viện Kỹ thuật mật mã</p><p><span class=\"font-semibold\">Thành phần:</span> Đại diện Lãnh đạo FISU Việt Nam, Đại diện Lãnh đạo Học viện Báo chí và Tuyên truyền, Đại diện Lãnh đạo BTL 86, Đại diện Lãnh đạo Trung tâm Dữ liệu Quốc gia, Đại diện Viettel.</p></td></tr><tr class=\"bg-cipher/5 font-semibold text-cipher\"><td class=\"p-4\">13:30 - 16:45</td><td class=\"p-4\" colspan=\"2\">Các phiên chuyên môn (Xem chi tiết bên dưới)</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink\">16:45 - 17:00</td><td class=\"p-4\">Bế mạc, tổng kết Hội thảo</td><td class=\"p-4\">Lãnh đạo Ban Cơ yếu Chính phủ/ Học viện KTMM, Chủ tịch FISU VN</td></tr></tbody></table></div></section><section><h2 class=\"text-[24px] font-bold text-ink mb-6 bg-paper px-4 py-3 rounded-lg border-l-4 border-cipher\">2. Các phiên chuyên môn</h2><div class=\"space-y-12\"><div><h3 class=\"text-[20px] font-bold text-ink mb-4\">Phiên A (Địa điểm: Hội trường)</h3><div class=\"overflow-x-auto rounded-xl border border-rule shadow-sm\"><table class=\"w-full text-left border-collapse\"><thead><tr class=\"bg-warm text-ink text-[17px]\"><th class=\"p-4 border-b border-rule w-[140px] whitespace-nowrap\">Thời gian</th><th class=\"p-4 border-b border-rule\">Nội dung</th><th class=\"p-4 border-b border-rule w-[250px]\">Diễn giả/Đơn vị</th></tr></thead><tbody class=\"text-[16px] text-slate divide-y divide-rule\"><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink align-top\">13:30 - 15:00</td><td class=\"p-4\"><p class=\"font-bold text-ink mb-1\">Phiên 1: AI trong phát hiện mối đe dọa và ứng phó sự cố an ninh mạng</p><p class=\"italic text-cipher mb-3\">(Chair: Học viện Kỹ thuật mật mã)</p><ul class=\"list-disc pl-5 space-y-1\"><li>AI trong phát hiện tấn công mạng & malware</li><li>Phát hiện bất thường bằng ML/DL</li><li>Tự động hóa phản ứng sự cố</li></ul></td><td class=\"p-4 align-top\">Đại học/Viện nghiên cứu/Doanh nghiệp an ninh mạng</td></tr><tr class=\"bg-cipher/5 font-semibold text-cipher\"><td class=\"p-4\">15:00 - 15:15</td><td class=\"p-4\" colspan=\"2\">Nghỉ giải lao</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink align-top\">15:15 - 16:45</td><td class=\"p-4\"><p class=\"font-bold text-ink mb-1\">Phiên 2: AI cho bảo mật dữ liệu và an ninh hệ thống mạng</p><p class=\"italic text-cipher mb-3\">(Chair: Fisu)</p><ul class=\"list-disc pl-5 space-y-1\"><li>AI trong giám sát mạng, IDS/IPS</li><li>AI phát hiện lừa đảo, gian lận tài chính</li><li>AI bảo vệ dữ liệu lớn, Cloud, IoT</li></ul></td><td class=\"p-4 align-top\">Đại học/Doanh nghiệp FinTech & Cloud</td></tr></tbody></table></div></div><div><h3 class=\"text-[20px] font-bold text-ink mb-4\">Phiên B (Địa điểm: Phòng đọc Tầng 2 Tòa TB2)</h3><div class=\"overflow-x-auto rounded-xl border border-rule shadow-sm\"><table class=\"w-full text-left border-collapse\"><thead><tr class=\"bg-warm text-ink text-[17px]\"><th class=\"p-4 border-b border-rule w-[140px] whitespace-nowrap\">Thời gian</th><th class=\"p-4 border-b border-rule\">Nội dung</th><th class=\"p-4 border-b border-rule w-[250px]\">Diễn giả/Đơn vị</th></tr></thead><tbody class=\"text-[16px] text-slate divide-y divide-rule\"><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink align-top\">13:30 - 15:00</td><td class=\"p-4\"><p class=\"font-bold text-ink mb-1\">Phiên 3: AI trong mật mã và bảo mật hậu lượng tử</p><p class=\"italic text-cipher mb-3\">(Chair: Viện Khoa học và Công nghệ mật mã)</p><ul class=\"list-disc pl-5 space-y-1\"><li>Xu hướng PQC toàn cầu (NIST, ETSI)</li><li>Thách thức triển khai PQC tại Việt Nam</li><li>AI trong phân tích, kiểm thử mật mã</li></ul></td><td class=\"p-4 align-top\">Viện nghiên cứu mật mã/Đại học/ Doanh nghiệp an ninh mạng</td></tr><tr class=\"bg-cipher/5 font-semibold text-cipher\"><td class=\"p-4\">15:00 - 15:15</td><td class=\"p-4\" colspan=\"2\">Nghỉ giải lao</td></tr><tr class=\"hover:bg-paper/50 transition-colors\"><td class=\"p-4 font-semibold text-ink align-top\">15:15 - 16:45</td><td class=\"p-4\"><p class=\"font-bold text-ink mb-1\">Phiên 4: AI trong phòng, chống thông tin sai lệch và các thách thức an ninh trong tương lai</p><p class=\"italic text-cipher mb-3\">(Chair: Học viện Báo chí & Tuyên truyền)</p><ul class=\"list-disc pl-5 space-y-1\"><li>AI & bảo vệ dữ liệu cá nhân</li><li>AI giải thích được (Explainable AI) trong An toàn thông tin</li><li>Rủi ro từ AI tạo sinh (Generative AI) (deepfake, lừa đảo, fakenews)</li></ul></td><td class=\"p-4 align-top\">Nhà khoa học/Luật sư/Doanh nghiệp AI</td></tr></tbody></table></div></div></div></section></div>"
          })
        ])
      }
    },
    {
      slug: "venue",
      isSystem: false,
      sortOrder: 6,
      vi: {
        title: "Địa điểm",
        content: makePuckContent([
          ai4crisSection({
            title: "Địa điểm",
            titleAlign: "center",
            variant: "plain",
            contentHtml: ""
          }),
          ai4crisSection({
            title: "",
            titleAlign: "left",
            variant: "plain",
            contentHtml: "<div class=\"grid grid-cols-1 lg:grid-cols-2 gap-12\"><div class=\"space-y-8\"><section class=\"bg-paper p-8 rounded-2xl border border-rule\"><div class=\"flex items-center gap-3 mb-6\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"text-ink\"><path d=\"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></svg><h2 class=\"text-[24px] font-bold text-ink\">Địa điểm tổ chức</h2></div><p class=\"text-[18px] font-semibold text-ink mb-2\">Học viện Kỹ thuật mật mã</p><p class=\"text-[18px] text-slate\">141 Chiến Thắng, Thanh Liệt, Hà Nội</p></section><section class=\"bg-paper p-8 rounded-2xl border border-rule\"><div class=\"flex items-center gap-3 mb-6\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"text-ink\"><rect x=\"4\" y=\"2\" width=\"16\" height=\"20\" rx=\"2\" ry=\"2\"/><path d=\"M9 22v-4h6v4\"/><path d=\"M8 6h.01\"/><path d=\"M16 6h.01\"/><path d=\"M12 6h.01\"/><path d=\"M12 10h.01\"/><path d=\"M12 14h.01\"/><path d=\"M16 10h.01\"/><path d=\"M16 14h.01\"/><path d=\"M8 10h.01\"/><path d=\"M8 14h.01\"/></svg><h2 class=\"text-[24px] font-bold text-ink\">Khu vực tổ chức</h2></div><ul class=\"space-y-4\"><li class=\"flex flex-col gap-1\"><span class=\"text-[18px] font-semibold text-ink\">Phiên toàn thể và phiên bàn tròn</span><span class=\"text-[17px] text-slate flex items-start gap-2\">Hội trường lớn Học viện Kỹ thuật mật mã.</span></li><li class=\"flex flex-col gap-1\"><span class=\"text-[18px] font-semibold text-ink\">Phiên chuyên đề A</span><span class=\"text-[17px] text-slate flex items-start gap-2\">Hội trường Học viện Kỹ thuật mật mã.</span></li><li class=\"flex flex-col gap-1\"><span class=\"text-[18px] font-semibold text-ink\">Phiên chuyên đề B</span><span class=\"text-[17px] text-slate flex items-start gap-2\">Phòng đọc tầng 2, tòa nhà TB2.</span></li></ul></section><section class=\"bg-[#e6f4f8] p-8 rounded-2xl border border-[#b0d9e6]\"><div class=\"flex items-center gap-3 mb-4\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"28\" height=\"28\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\" class=\"text-[#0b2740]\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4\"/><path d=\"M12 8h.01\"/></svg><h2 class=\"text-[20px] font-bold text-[#0b2740]\">Thông tin dành cho đại biểu</h2></div><ul class=\"list-disc pl-5 space-y-2 text-[17px] text-[#0b2740]\"><li>Đại biểu vui lòng có mặt trước giờ khai mạc ít nhất 15 phút để hoàn tất thủ tục đăng ký.</li><li>Khu vực đón tiếp và cấp phát tài liệu được bố trí tại sảnh Hội trường.</li><li>Ban Tổ chức sẽ có nhân viên hỗ trợ hướng dẫn trong suốt thời gian diễn ra hội thảo.</li></ul></section></div><div class=\"h-full min-h-[400px] rounded-2xl overflow-hidden border border-rule shadow-sm\"><iframe src=\"https://maps.google.com/maps?q=141%20Chi%E1%BA%BFn%20Th%E1%BA%AFng,%20T%C3%A2n%20Tri%E1%BB%81u,%20Thanh%20Tr%C3%AC,%20H%C3%A0%20N%E1%BB%99i,%20Vi%E1%BB%87t%20Nam&t=m&z=15&output=embed&iwloc=near\" width=\"100%\" height=\"100%\" style=\"border: 0; min-height: 400px;\" allowfullscreen=\"\" loading=\"lazy\" referrerpolicy=\"no-referrer-when-downgrade\"></iframe></div></div>"
          })
        ])
      }
    },
    {
      slug: "_footer",
      isSystem: true,
      sortOrder: 99,
      vi: {
        title: "Footer",
        content: makePuckContent([
          ai4crisSection({
            title: "Trí tuệ nhân tạo cho Mật mã & ATTT 2026",
            titleAlign: "left",
            variant: "plain",
            contentHtml: "<p>141 Chiến Thắng, Tân Triều, Thanh Trì, Hà Nội, Việt Nam<br/>Email: AI4CRIS@actvn.edu.vn<br/>Điện thoại: 0984 346 162</p>"
          })
        ])
      }
    }
  ];

  await prisma.pageTranslation.deleteMany({});
  await prisma.page.deleteMany({});
  console.log("✅ Wiped existing pages");

  for (const pageData of pages) {
    // Because we use findUnique with an upsert logic instead of create
    const existingPage = await prisma.page.findUnique({
      where: { slug: pageData.slug },
    });

    if (!existingPage) {
      await prisma.page.create({
        data: {
          slug: pageData.slug,
          isSystem: pageData.isSystem,
          sortOrder: pageData.sortOrder,
          isPublished: true,
          publishedAt: new Date(),
          translations: {
            create: [
              {
                locale: "vi",
                title: pageData.vi.title,
                content: pageData.vi.content,
              }
            ],
          },
        },
      });
      console.log(`  📄 Page "${pageData.slug}" created`);
    } else {
      // If it exists, overwrite the translation for "vi"
      await prisma.pageTranslation.upsert({
        where: {
          pageId_locale: {
            pageId: existingPage.id,
            locale: "vi"
          }
        },
        update: {
          title: pageData.vi.title,
          content: pageData.vi.content,
        },
        create: {
          pageId: existingPage.id,
          locale: "vi",
          title: pageData.vi.title,
          content: pageData.vi.content,
        }
      });
      console.log(`  📄 Page "${pageData.slug}" updated`);
    }
  }

  console.log("✅ All pages seeded");
  console.log("🎉 AI4CRIS Database seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
