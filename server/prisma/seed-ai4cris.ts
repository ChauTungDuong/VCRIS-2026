import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import {
  createPuckContent,
  type PuckBlock,
  type PuckNode,
} from "../src/utils/puck.js";

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

function ai4crisSection(opts: any = {}): PuckNode {
  return {
    type: "Ai4CrisSection",
    props: {
      title: opts.title || "GIỚI THIỆU",
      contentHtml: opts.contentHtml || "",
      bgColor: opts.bgColor || "#ffffff",
      id: `ai4cris-section-${Math.random().toString(36).substr(2, 9)}`,
    },
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

function makePuckContent(components: Array<PuckNode | PuckBlock>) {
  return createPuckContent(
    components.map((component) =>
      "node" in component ? component : { node: component },
    ),
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
            // Left Column
            [
              ai4crisCountdown({
                label: "Hội thảo diễn ra sau",
                targetDate: "2026-08-14T08:00:00",
                timeText: "Hà Nội, 14/8/2026",
                boxTitle: "AI4CRIS 2026",
                boxText: "Học viện Kỹ thuật mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội",
              })
            ],
            // Right Column
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
          ], { columns: 2, gap: "48px" }),
          section([
            ai4crisSection({
              title: "GIỚI THIỆU",
              bgColor: "#ffffff",
              contentHtml: "<p>Hội thảo AI4CRIS được tổ chức bởi Học viện Kỹ thuật mật mã phối hợp với Câu lạc bộ Khoa-Trường-Viện Công nghệ Thông tin - Truyền thông Việt Nam; Học viện Báo chí và Tuyên truyền, Tạp chí An toàn thông tin cùng với sự bảo trợ của Ban Cơ yếu Chính phủ, Bộ Khoa học và Công nghệ, Hội tin học Việt Nam và Trung tâm Dữ liệu Quốc Gia.</p><p>Hội thảo nhằm tăng cường nhận thức và chia sẻ về vai trò, ý nghĩa và tác động của trí tuệ nhân tạo trong lĩnh vực an toàn, bảo mật thông tin; làm rõ cơ hội, thách thức và yêu cầu đặt ra đối với việc ứng dụng AI trong bảo vệ không gian số hiện nay; cập nhật xu hướng toàn cầu, chính sách quốc gia và thực tiễn triển khai, đồng thời phân tích các mô hình, giải pháp ứng dụng trí tuệ nhân tạo trong bảo mật hệ thống thông tin, góp phần nâng cao năng lực phòng ngừa, phát hiện và ứng phó với các nguy cơ, mối đe dọa an ninh mạng đồng thời tạo diễn đàn trao đổi, kết nối đa chiều giữa cơ quan quản lý, nhà khoa học, doanh nghiệp và các cơ sở đào tạo và thúc đẩy chia sẻ kinh nghiệm, kết quả nghiên cứu và nhu cầu thực tiễn, qua đó tăng cường gắn kết giữa nghiên cứu - đào tạo - ứng dụng.</p>"
            })
          ], { padding: "0 0 48px 0" }),
          section([
            ai4crisSection({
              title: "THÔNG TIN QUAN TRỌNG",
              bgColor: "#f0f8fa",
              contentHtml: "<p><strong>Thời gian tổ chức Hội thảo:</strong> 14/8/2026</p><p><strong>Thời hạn nộp báo cáo và tham luận:</strong> 20/7/2026</p><p><strong>Thời gian đăng ký tham dự Hội thảo:</strong> 07/8/2026</p><p><strong>Địa điểm tổ chức Hội thảo:</strong> Học viện Kỹ thuật mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội</p><p><strong>Mọi thông tin về hội thảo xin vui lòng liên hệ:</strong> <a href=\"mailto:AI4CRIS@actvn.edu.vn\">AI4CRIS@actvn.edu.vn</a></p>"
            })
          ], { padding: "0" })
        ]),
      },
    },
    {
      slug: "members",
      isSystem: true,
      sortOrder: 1,
      vi: {
        title: "Thành viên",
        content: makePuckContent([
          section([
            tabsBlock([
              {
                label: "Ban chỉ đạo",
                content: "<h3>Danh sách thành viên Ban Chỉ đạo</h3><ul><li><strong>TS. Nguyễn Hữu Hùng</strong> - Phó Trưởng ban Ban Cơ yếu Chính phủ - Trưởng ban</li><li><strong>GS. TS. Nguyễn Thanh Thủy</strong> - Chủ tịch FISU Việt Nam</li><li><strong>TS. Hoàng Văn Thức</strong> - Giám đốc Học viện Kỹ thuật mật mã</li><li><strong>PGS. TS. Phạm Minh Sơn</strong> - Giám đốc Học viện Báo chí và Tuyên truyền</li></ul>"
              },
              {
                label: "Ban tổ chức",
                content: "<h3>Danh sách thành viên Ban Tổ chức</h3><ul><li><strong>GS.TS. Nguyễn Hiếu Minh</strong> - Phó Giám đốc Học viện Kỹ thuật mật mã - Trưởng ban</li><li><strong>PGS.TS. Lưu Văn Quảng</strong> - Phó Giám đốc Học viện Báo chí và Tuyên truyền</li><li><strong>TS. Vũ Thị Đào</strong> - Viện trưởng Viện Nghiên cứu và Hợp tác phát triển, Học viện Kỹ thuật mật mã</li><li><strong>TS. Nguyễn Như Tuấn</strong> - Tổng biên tập Tạp chí An toàn thông tin</li></ul>"
              },
              {
                label: "Ban chương trình",
                content: "<h3>Danh sách thành viên Ban Chương trình</h3><ul><li><strong>PGS. TS. Bùi Thu Lâm</strong> - Phó Chủ tịch, Tổng thư ký FISU Việt Nam - Trưởng ban</li><li><strong>PGS. TS. Nguyễn Việt Hùng</strong> - Phó Chủ tịch FISU Việt Nam</li><li><strong>PGS. TS. Nguyễn Long Giang</strong> - Phó Chủ tịch FISU Việt Nam</li><li><strong>PGS. TS. Nguyễn Thị Trường Giang</strong> - Phó Giám đốc Học viện Báo chí và Tuyên truyền</li><li><strong>TS. Nguyễn Bùi Cương</strong> - Phó Viện trưởng Viện Khoa học - Công nghệ mật mã</li><li><strong>PGS. TS. Hoàng Việt Long</strong> - Chủ nhiệm khoa An toàn thông tin, Học viện Kỹ thuật và Công nghệ an ninh</li><li><strong>TS. Nguyễn Đình Nghĩa</strong> - Chủ nhiệm khoa An toàn thông tin, Học viện An ninh nhân dân</li><li><strong>TS. Nguyễn Thế Hùng</strong> - Trưởng phòng, Viện 486, Bộ Tư lệnh 86</li><li><strong>PGS. TS. Trần Quang Đức</strong> - Giám đốc Trung tâm An ninh mạng, Đại học Bách khoa Hà Nội</li><li><strong>PGS. TS. Trần Quanh Anh</strong> - Phó Giám đốc Học viện Công nghệ Bưu chính viễn thông</li><li><strong>PGS. TS. Hoàng Xuân Dậu</strong> - Chủ nhiệm khoa An toàn thông tin, Học viện Công nghệ Bưu chính viễn thông</li><li><strong>PGS. TS. Trần Minh Triết</strong> - Phó Hiệu trưởng Trường Đại học Khoa học tự nhiên, Đại học Quốc gia Thành phố Hồ Chí Minh</li><li><strong>TS. Nguyễn Thị Thu Hường</strong>, Trưởng ban Quản lý khoa học và Hợp tác quốc tế, Học viện Báo chí và Tuyên truyền</li><li><strong>TS. Hoàng Đức Thọ</strong> - Chủ nhiệm Khoa An toàn thông tin, Học viện Kỹ thuật mật mã</li><li><strong>TS. Bùi Đức Trình</strong> - Chủ nhiệm Khoa Điện tử - Vi mạch, Học viện Kỹ thuật mật mã</li><li><strong>TS. Phạm Văn Hưởng</strong> - Chủ nhiệm Khoa Công nghệ thông tin, Học viện Kỹ thuật mật mã</li><li><strong>TS. Nguyễn Văn Long</strong> - Phó Chủ nhiệm Khoa Mật mã, Học viện Kỹ thuật mật mã</li><li><strong>TS. Phạm Duy Trung</strong> - Phó Chủ nhiệm Khoa ATTT, Học viện Kỹ thuật mật mã (Biên tập kỷ yếu)</li><li><strong>PGS. TS. Trần Thị Lượng</strong> - Phó Chủ nhiệm Khoa ATTT, Học viện Kỹ thuật mật mã</li><li><strong>TS. Trần Ngọc Quý</strong> - Phó Chủ nhiệm Khoa Điện tử - Vi mạch, Học viện Kỹ thuật mật mã</li><li><strong>TS. Nguyễn Đào Trường</strong> - Phó Chủ nhiệm Khoa Điện tử - Vi mạch, Học viện Kỹ thuật mật mã</li><li><strong>TS. Lê Đức Thuận</strong> - Học viện Kỹ thuật mật mã</li><li><strong>TS. Mai Đức Thọ</strong> - Học viện Kỹ thuật mật mã</li></ul>"
              }
            ], "#1B4F91")
          ])
        ]),
      },
    },
    {
      slug: "speakers",
      isSystem: true,
      sortOrder: 2,
      vi: {
        title: "Diễn giả",
        content: makePuckContent([
          section([
            ai4crisSection({
              title: "DIỄN GIẢ",
              contentHtml: "<p>Thông tin các diễn giả sẽ được cập nhật sớm.</p>"
            })
          ])
        ]),
      },
    },
    {
      slug: "submission",
      isSystem: true,
      sortOrder: 3,
      vi: {
        title: "Gửi bài tham dự",
        content: makePuckContent([
          section([
            ai4crisSection({
              title: "GỬI BÀI THAM DỰ",
              contentHtml: "<p>Ban Tổ chức trân trọng kính mời các nhà nghiên cứu, giảng viên, chuyên gia, cán bộ quản lý, nghiên cứu sinh, học viên và doanh nghiệp gửi bài báo cáo khoa học tham gia các phiên chuyên đề của Hội thảo.</p>"
            })
          ])
        ]),
      },
    },
    {
      slug: "registration",
      isSystem: true,
      sortOrder: 4,
      vi: {
        title: "Đăng ký tham dự",
        content: makePuckContent([
          section([
            ai4crisSection({
              title: "ĐĂNG KÝ THAM DỰ",
              contentHtml: "<p>Thông tin đăng ký tham dự sẽ được cập nhật sớm.</p>"
            })
          ])
        ]),
      },
    },
    {
      slug: "program",
      isSystem: true,
      sortOrder: 5,
      vi: {
        title: "Chương trình Hội thảo",
        content: makePuckContent([
          section([
            ai4crisSection({
              title: "CHƯƠNG TRÌNH HỘI THẢO",
              contentHtml: "<p>Chương trình chi tiết sẽ được thông báo sau.</p>"
            })
          ])
        ]),
      },
    },
    {
      slug: "venue",
      isSystem: true,
      sortOrder: 6,
      vi: {
        title: "Địa điểm",
        content: makePuckContent([
          section([
            ai4crisSection({
              title: "ĐỊA ĐIỂM TỔ CHỨC",
              contentHtml: "<p><strong>Học viện Kỹ thuật mật mã</strong><br/>141 Chiến Thắng, Thanh Liệt, Hà Nội</p>"
            })
          ])
        ]),
      },
    }
  ];

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
