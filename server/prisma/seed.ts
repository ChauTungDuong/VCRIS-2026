import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import {
  createPuckContent,
  type PuckBlock,
  type PuckNode,
} from "../src/utils/puck.js";

const prisma = new PrismaClient();

function textBlock(
  content: string,
  opts: {
    fontSize?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontStyle?: string;
    color?: string;
    textAlign?: string;
    tag?: string;
  } = {},
): PuckNode {
  return {
    type: "TextBlock",
    props: {
      content,
      fontSize: opts.fontSize || "16px",
      fontFamily: opts.fontFamily || "Syne",
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

function heading(
  content: string,
  opts: {
    level?: number;
    fontSize?: string;
    color?: string;
    textAlign?: string;
    fontStyle?: string;
  } = {},
): PuckNode {
  return {
    type: "SectionHeading",
    props: {
      content,
      level: opts.level || 2,
      fontSize: opts.fontSize || "36px",
      fontFamily: "Cormorant Garamond",
      fontWeight: "700",
      fontStyle: opts.fontStyle || "italic",
      color: opts.color || "#0D1B2A",
      textAlign: opts.textAlign || "left",
      padding: "0",
      margin: "0 0 24px 0",
      id: `heading-${Math.random().toString(36).substr(2, 9)}`,
    },
  };
}

function section(
  children: PuckNode[],
  opts: {
    backgroundColor?: string;
    padding?: string;
    maxWidth?: string;
  } = {},
): PuckBlock {
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

function listBlock(
  items: string[],
  opts: { ordered?: boolean } = {},
): PuckNode {
  return {
    type: "ListBlock",
    props: {
      items,
      ordered: opts.ordered || false,
      fontSize: "16px",
      fontFamily: "Syne",
      color: "#0D1B2A",
      spacing: "8px",
      id: `list-${Math.random().toString(36).substr(2, 9)}`,
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
  const hashedPassword = await bcrypt.hash(
    process.env.ADMIN_PASSWORD || "vcris2026admin",
    12,
  );

  await prisma.user.upsert({
    where: { email: process.env.ADMIN_EMAIL || "admin@vcris.org" },
    update: {},
    create: {
      email: process.env.ADMIN_EMAIL || "admin@vcris.org",
      password: hashedPassword,
      name: "VCRIS Admin",
      role: "SUPER_ADMIN",
    },
  });
  console.log("✅ Admin user created");

  // 2. Seed site config
  const siteConfigs: Record<string, unknown> = {
    conference_name: "VCRIS 2026",
    conference_full_name:
      "The 3rd International Conference on Cryptography and Information Security",
    conference_edition: "3rd",
    conference_dates: "October 29–30, 2026",
    conference_date_start: "2026-10-29T08:00:00",
    conference_location: "Academy of Cryptography Techniques, Hanoi, Vietnam",
    conference_address: "141 Chien Thang Road, Thanh Liet, Ha Noi, Viet Nam",
    easychair_url: "https://easychair.org/conferences/?conf=vcris2026",
    contact_email: "vcris@actvn.edu.vn",
    website_url: "https://vcris.org",
    default_locale: "en",
    supported_locales: ["en", "vi"],
    important_dates: [
      {
        label: "Paper Submission Deadline",
        date: "June 30, 2026",
        passed: false,
      },
      {
        label: "Notification of Acceptance",
        date: "July 31, 2026",
        passed: false,
      },
      {
        label: "Camera-Ready Submission",
        date: "September 25, 2026",
        passed: false,
      },
      {
        label: "Conference Dates",
        date: "October 29 – 30, 2026",
        passed: false,
      },
    ],
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
      en: {
        title: "Home",
        content: makePuckContent([
          section(
            [
              heading(
                "The 3rd International Conference on Cryptography & Information Security",
                {
                  level: 1,
                  fontSize: "48px",
                  color: "#FFFFFF",
                  textAlign: "center",
                },
              ),
              textBlock(
                "October 29 - 30, 2026 · Academy of Cryptography Techniques, Hanoi, Vietnam",
                {
                  fontSize: "18px",
                  color: "#FFFFFF",
                  textAlign: "center",
                },
              ),
            ],
            { backgroundColor: "#071525", padding: "96px 24px" },
          ),
          section([
            heading("About the Conference"),
            textBlock(
              "VCRIS 2026 is organized by the Academy of Cryptography Techniques in collaboration with co-organizing institutions including the Vietnam Institute for Advanced Study in Mathematics (VISAM), the Vietnam Association of Faculties-Institutes-Schools-Universities of ICT (FISU VN), the Information Security Journal (ISJ), with the endorsement of the University of Lorraine – France and the Japan Advanced Institute of Science and Technology – Japan, and the Computer Security and Industrial Cryptography group of KU Leuven – Belgium.",
            ),
            textBlock(
              "VCRIS 2026 aims to bring together researchers, practitioners, and industry experts to present and discuss the latest advances in cryptography, post-quantum security, systems security, and AI-driven cybersecurity.",
            ),
            textBlock(
              "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.",
            ),
          ]),
          section(
            [
              heading("Conference Tracks", { textAlign: "center" }),
              heading("Track 1: Theoretical and Post-Quantum Cryptography", {
                level: 3,
                fontSize: "24px",
                fontStyle: "normal",
              }),
              listBlock([
                "Symmetric and asymmetric cryptography",
                "Cryptographic hash functions and digital signatures",
                "Post-Quantum Cryptography (PQC)",
                "Lattice-based, code-based, multivariate cryptography",
                "Quantum-resistant primitives and migration strategies",
              ]),
              heading("Track 2: Applied Cryptography and Privacy", {
                level: 3,
                fontSize: "24px",
                fontStyle: "normal",
              }),
              listBlock([
                "Cryptographic engineering and implementation security",
                "Side-channel attacks and countermeasures",
                "Zero-knowledge proofs and secure multiparty computation",
                "Blockchain and distributed ledger cryptography",
                "Privacy-enhancing technologies",
              ]),
            ],
            { backgroundColor: "#F7F8FA" },
          ),
          section([
            heading("Paper Submission"),
            textBlock(
              "Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere.",
            ),
            textBlock(
              "All submissions must follow the IEEE conference format, be written in English, and should not exceed 6 pages.",
            ),
            textBlock(
              "Papers will be peer-reviewed using a double-blind review process by at least three members of the technical Program Committee.",
            ),
          ]),
          section(
            [
              heading("Publication", { color: "#FFFFFF", textAlign: "center" }),
              textBlock(
                "Accepted papers that are presented at the conference will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.",
                { color: "#FFFFFF", textAlign: "center" },
              ),
            ],
            { backgroundColor: "#0EA5A0", padding: "64px 24px" },
          ),
        ]),
      },
      vi: {
        title: "Trang chủ",
        content: makePuckContent([
          section(
            [
              heading(
                "Hội nghị Quốc tế lần thứ 3 về Mật mã và An toàn Thông tin",
                {
                  level: 1,
                  fontSize: "48px",
                  color: "#FFFFFF",
                  textAlign: "center",
                },
              ),
              textBlock(
                "29 - 30 tháng 10, 2026 · Học viện Kỹ thuật Mật mã, Hà Nội, Việt Nam",
                {
                  fontSize: "18px",
                  color: "#FFFFFF",
                  textAlign: "center",
                },
              ),
            ],
            { backgroundColor: "#071525", padding: "96px 24px" },
          ),
          section([
            heading("Về Hội nghị"),
            textBlock(
              "VCRIS 2026 được tổ chức bởi Học viện Kỹ thuật Mật mã phối hợp với các đơn vị đồng tổ chức bao gồm Viện Nghiên cứu Cao cấp về Toán (VIASM), Hiệp hội các Cơ sở đào tạo CNTT Việt Nam (FISU VN), Tạp chí An toàn Thông tin (ISJ), với sự bảo trợ của Đại học Lorraine – Pháp, Viện Khoa học và Công nghệ Tiên tiến Nhật Bản – Nhật Bản, và nhóm COSIC, KU Leuven – Bỉ.",
            ),
          ]),
        ]),
      },
    },
    {
      slug: "call-for-papers",
      isSystem: true,
      sortOrder: 1,
      en: {
        title: "Call for Papers",
        content: makePuckContent([
          section([
            heading("Call for Papers", { level: 1, fontSize: "48px" }),
            textBlock(
              "The 3rd International Conference on Cryptography and Information Security (VCRIS 2026) will be held at the Academy of Cryptography Techniques, 141 Chien Thang Road, Thanh Liet, Hanoi, Vietnam.",
            ),
            textBlock(
              "VCRIS 2026 aims to bring together researchers, practitioners, and industry experts to present and discuss the latest advances in cryptography, post-quantum security, systems security, and AI-driven cybersecurity.",
            ),
          ]),
          section(
            [
              heading("Conference Tracks"),
              heading("Track 1: Theoretical and Post-Quantum Cryptography", {
                level: 3,
                fontSize: "22px",
                fontStyle: "normal",
              }),
              listBlock([
                "Symmetric and asymmetric cryptography",
                "Cryptographic hash functions and digital signatures",
                "Cryptographic protocols and formal security proofs",
                "Provable security and complexity assumptions",
                "Random number generation and entropy sources",
                "Post-Quantum Cryptography (PQC)",
                "Lattice-based, code-based, multivariate cryptography",
                "Quantum-resistant primitives and migration strategies",
              ]),
              heading("Track 2: Applied Cryptography and Privacy", {
                level: 3,
                fontSize: "22px",
                fontStyle: "normal",
              }),
              listBlock([
                "Cryptographic engineering and implementation security",
                "Side-channel attacks and countermeasures",
                "Secure hardware and trusted execution environments",
                "Zero-knowledge proofs and secure multiparty computation",
                "Blockchain and distributed ledger cryptography",
                "Privacy-enhancing technologies",
                "Information hiding and watermarking",
              ]),
              heading("Track 3: Systems and Network Security", {
                level: 3,
                fontSize: "22px",
                fontStyle: "normal",
              }),
              listBlock([
                "Network and wireless security",
                "IoT and edge security",
                "Cloud and distributed systems security",
                "Operating systems and virtualization security",
                "Database and storage security",
                "Web and mobile security",
                "5G/6G and next-generation network security",
              ]),
              heading("Track 4: AI-driven Security and Threat Intelligence", {
                level: 3,
                fontSize: "22px",
                fontStyle: "normal",
              }),
              listBlock([
                "AI and machine learning for cybersecurity",
                "Malware analysis and detection",
                "Intrusion detection and prevention systems",
                "Deepfake detection and media forensics",
                "Adversarial machine learning",
                "LLM applications in cybersecurity",
                "Automated vulnerability detection",
              ]),
              heading("Track 5: Emerging Security Technologies", {
                level: 3,
                fontSize: "22px",
                fontStyle: "normal",
              }),
              listBlock([
                "Quantum communication security",
                "Cyber-physical systems security",
                "Smart city and critical infrastructure protection",
                "Digital forensics and incident response",
                "Human-centric security and usable security",
                "Security economics and governance",
                "Privacy and data protection frameworks",
              ]),
            ],
            { backgroundColor: "#F7F8FA" },
          ),
          section([
            heading("Submission Guidelines"),
            textBlock(
              "Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere.",
            ),
            textBlock(
              "All submissions must follow the IEEE conference format at IEEE's website, be written in English, and should not exceed 6 pages.",
            ),
            textBlock(
              "Papers will be peer-reviewed using a double-blind review process by at least three members of the technical Program Committee.",
            ),
          ]),
          section([
            heading("Publication"),
            textBlock(
              "Accepted papers that are presented at the conference will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements.",
            ),
            heading("Post-Conference Publication", {
              level: 3,
              fontSize: "24px",
            }),
            textBlock(
              "Several journal special issues related to VCRIS 2026 will be announced in due course.",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Kêu gọi bài báo",
        content: makePuckContent([
          section([
            heading("Kêu gọi Bài báo", { level: 1, fontSize: "48px" }),
            textBlock(
              "Hội nghị Quốc tế lần thứ 3 về Mật mã và An toàn Thông tin (VCRIS 2026) sẽ được tổ chức tại Học viện Kỹ thuật Mật mã, 141 Chiến Thắng, Thanh Liệt, Hà Nội, Việt Nam.",
            ),
          ]),
        ]),
      },
    },
    {
      slug: "call-for-workshops",
      isSystem: true,
      sortOrder: 2,
      en: {
        title: "Call for Workshops",
        content: makePuckContent([
          section([
            heading("Call for Workshops", { level: 1, fontSize: "48px" }),
            textBlock(
              "The VCRIS conference will feature a workshop session for businesses. This will be a platform for businesses to introduce themselves and promote their products in the field of quantum science and technology, cryptography, and information security to the participating agencies, organizations, and scientists attending the conference.",
            ),
            textBlock(
              "The detailed workshop for VCRIS 2026 will be updated later.",
            ),
          ]),
          section([
            heading("Contact Information"),
            textBlock("Dr. Vu Thi Dao", { fontWeight: "600" }),
            textBlock(
              "Institute of Research and Development Cooperation, Academy of Cryptography Techniques\n141 Chien Thang road, Thanh Liet, Hanoi, Vietnam\nCell Phone: +84.982.151.982",
            ),
            textBlock("Ms Vuong Thi Hai Ha", { fontWeight: "600" }),
            textBlock("Secretary of VCRIS 2026\nCell Phone: +84.984.346.162"),
          ]),
        ]),
      },
      vi: {
        title: "Kêu gọi Hội thảo",
        content: makePuckContent([
          section([
            heading("Kêu gọi Hội thảo", { level: 1, fontSize: "48px" }),
            textBlock(
              "Hội nghị VCRIS sẽ có phiên hội thảo dành cho doanh nghiệp. Đây sẽ là nền tảng để doanh nghiệp giới thiệu bản thân và quảng bá sản phẩm.",
            ),
          ]),
        ]),
      },
    },
    {
      slug: "keynote-speakers",
      isSystem: true,
      sortOrder: 3,
      en: {
        title: "Keynote Speakers",
        content: makePuckContent([
          section([
            heading("Keynote Speakers", {
              level: 1,
              fontSize: "48px",
              textAlign: "center",
            }),
          ]),
          section([
            heading("PROF. TANAKA KIYOFUMI", { level: 2, fontSize: "32px" }),
            textBlock(
              "Dean of Information Science | Director of Next-Generation Digital Infrastructure",
              { fontWeight: "500", color: "#64748B" },
            ),
            textBlock(
              "Japan Advanced Institute of Science and Technology (JAIST)",
              {
                fontWeight: "500",
                color: "#0EA5A0",
              },
            ),
            textBlock(
              "Talk: Challenges in High-Performance Cryptographic Hardware Design",
              {
                fontWeight: "600",
                fontStyle: "italic",
              },
            ),
            textBlock(
              "Dr. Kiyofumi Tanaka is a Professor and Dean at JAIST, where he leads research into computer architecture and accelerator hardware. With over 200 publications, his work focuses on the intersection of high-performance computing and security, specifically developing reconfigurable FPGA-based architectures for Elliptic Curve Cryptography and addressing the emerging hardware challenges of post-quantum cryptographic standards.",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Diễn giả chính",
        content: makePuckContent([
          section([
            heading("Diễn giả chính", {
              level: 1,
              fontSize: "48px",
              textAlign: "center",
            }),
          ]),
        ]),
      },
    },
    {
      slug: "registration",
      isSystem: true,
      sortOrder: 4,
      en: {
        title: "Registration",
        content: makePuckContent([
          section([
            heading("Registration", { level: 1, fontSize: "48px" }),
            textBlock(
              "Registration details for VCRIS 2026 will be updated soon.",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Đăng ký",
        content: makePuckContent([
          section([
            heading("Đăng ký tham dự", { level: 1, fontSize: "48px" }),
            textBlock("Thông tin đăng ký VCRIS 2026 sẽ được cập nhật sớm."),
          ]),
        ]),
      },
    },
    {
      slug: "paper-submission",
      isSystem: true,
      sortOrder: 5,
      en: {
        title: "Paper Submission",
        content: makePuckContent([
          section([
            heading("Paper Submission", { level: 1, fontSize: "48px" }),
            textBlock(
              "Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere.",
            ),
            textBlock(
              "All submissions must follow the IEEE conference format, be written in English, and should not exceed 6 pages.",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Nộp bài",
        content: makePuckContent([
          section([heading("Nộp bài", { level: 1, fontSize: "48px" })]),
        ]),
      },
    },
    {
      slug: "camera-ready-submission",
      isSystem: true,
      sortOrder: 6,
      en: {
        title: "Camera Ready Submission",
        content: makePuckContent([
          section([
            heading("Camera Ready Submission", { level: 1, fontSize: "48px" }),
            textBlock(
              "Camera ready submission instructions will be updated after notification of acceptance.",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Nộp bản cuối",
        content: makePuckContent([
          section([
            heading("Nộp bản Camera Ready", { level: 1, fontSize: "48px" }),
          ]),
        ]),
      },
    },
    {
      slug: "instructions-for-authors",
      isSystem: true,
      sortOrder: 7,
      en: {
        title: "Instructions for Authors",
        content: makePuckContent([
          section([
            heading("Instructions for Authors", { level: 1, fontSize: "48px" }),
            textBlock(
              "Detailed instructions for authors will be provided soon.",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Hướng dẫn cho tác giả",
        content: makePuckContent([
          section([
            heading("Hướng dẫn cho tác giả", { level: 1, fontSize: "48px" }),
          ]),
        ]),
      },
    },
    {
      slug: "organizing-committees",
      isSystem: true,
      sortOrder: 8,
      en: {
        title: "Organizing Committees",
        content: makePuckContent([
          section([
            heading("Organizing Committees", { level: 1, fontSize: "48px" }),
            heading("Honorary Chairs", {
              level: 3,
              fontSize: "24px",
              fontStyle: "normal",
            }),
            listBlock([
              "Nguyen Huu Hung — VGISC, Vietnam",
              "Yukari Nagai — JAIST, Japan",
              "Hoang Van Thuc — ACT, Vietnam",
            ]),
            heading("General Chairs", {
              level: 3,
              fontSize: "24px",
              fontStyle: "normal",
            }),
            listBlock([
              "Nguyen Hieu Minh — ACT, Vietnam",
              "Nguyen Thanh Thuy — FISU, Vietnam",
              "Le Minh Ha — VIASM, Vietnam",
              "Vincent Rijmen — KU Leuven, ESAT/COSIC, Belgium",
              "Jean-Yves Marion — LORIA, University of Lorraine, France",
            ]),
            heading("Program Chairs", {
              level: 3,
              fontSize: "24px",
              fontStyle: "normal",
            }),
            listBlock([
              "Lam Thu Bui — ACT, Vietnam (Chair)",
              "Eiichiro Fujisaki — JAIST, Japan",
              "Stjepan Picek — DiS Radboud University, The Netherlands",
              "Junbeom Hur — Korea University, Korea",
              "Mizuhito Ogawa — Old Teachers Network, Japan",
              "Nhien-An Le-Khac — University College Dublin, Ireland",
            ]),
          ]),
        ]),
      },
      vi: {
        title: "Ban tổ chức",
        content: makePuckContent([
          section([heading("Ban tổ chức", { level: 1, fontSize: "48px" })]),
        ]),
      },
    },
    {
      slug: "program-committees",
      isSystem: true,
      sortOrder: 9,
      en: {
        title: "Program Committees",
        content: makePuckContent([
          section([
            heading("Program Committees", { level: 1, fontSize: "48px" }),
            textBlock(
              "The Technical Program Committee members are listed below.",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Ban chương trình",
        content: makePuckContent([
          section([
            heading("Ban chương trình", { level: 1, fontSize: "48px" }),
          ]),
        ]),
      },
    },
    {
      slug: "program",
      isSystem: true,
      sortOrder: 10,
      en: {
        title: "Program",
        content: makePuckContent([
          section([
            heading("Conference Program", { level: 1, fontSize: "48px" }),
            textBlock(
              "The detailed conference program will be updated closer to the event date.",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Chương trình",
        content: makePuckContent([
          section([
            heading("Chương trình Hội nghị", { level: 1, fontSize: "48px" }),
          ]),
        ]),
      },
    },
    {
      slug: "venue",
      isSystem: true,
      sortOrder: 11,
      en: {
        title: "Venue",
        content: makePuckContent([
          section([
            heading("Venue", { level: 1, fontSize: "48px" }),
            heading("Academy of Cryptography Techniques", {
              level: 2,
              fontSize: "28px",
            }),
            textBlock("141 Chien Thang Road, Thanh Liet, Ha Noi, Viet Nam"),
          ]),
          section([
            heading("Transportation"),
            textBlock(
              "From Airport: ~30 min taxi/Grab from Noi Bai International Airport (HAN)",
            ),
            textBlock("By Taxi: Grab app available — recommended"),
            textBlock("By Bus: Bus routes 18, 34, 86"),
          ]),
        ]),
      },
      vi: {
        title: "Địa điểm",
        content: makePuckContent([
          section([
            heading("Địa điểm tổ chức", { level: 1, fontSize: "48px" }),
          ]),
        ]),
      },
    },
    {
      slug: "accommodation",
      isSystem: true,
      sortOrder: 12,
      en: {
        title: "Accommodation",
        content: makePuckContent([
          section([
            heading("Accommodation", { level: 1, fontSize: "48px" }),
            heading("Grand Plaza Hanoi Hotel", { level: 2, fontSize: "28px" }),
            textBlock("117 Tran Duy Hung Street, Hanoi 100000, Vietnam"),
            textBlock(
              "Estimated time from conference venue: By Bus: 10 min | By Car: 10 min | Walking: 25 min",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Nơi ở",
        content: makePuckContent([
          section([heading("Nơi ở", { level: 1, fontSize: "48px" })]),
        ]),
      },
    },
    {
      slug: "previous-conferences",
      isSystem: true,
      sortOrder: 13,
      en: {
        title: "Previous Conferences",
        content: makePuckContent([
          section([
            heading("Previous Conferences", { level: 1, fontSize: "48px" }),
            heading("VCRIS 2025 — 2nd Edition", { level: 3, fontSize: "24px" }),
            textBlock(
              "October 30–31, 2025 · Academy of Cryptography Techniques, Hanoi, Vietnam",
            ),
            heading("VCRIS 2024 — 1st Edition", { level: 3, fontSize: "24px" }),
            textBlock(
              "December 3–4, 2024 · Academy of Cryptography Techniques, Hanoi, Vietnam",
            ),
          ]),
        ]),
      },
      vi: {
        title: "Hội nghị trước",
        content: makePuckContent([
          section([
            heading("Các hội nghị trước", { level: 1, fontSize: "48px" }),
          ]),
        ]),
      },
    },
  ];

  for (const pageData of pages) {
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
                locale: "en",
                title: pageData.en.title,
                content: pageData.en.content,
              },
              {
                locale: "vi",
                title: pageData.vi.title,
                content: pageData.vi.content,
              },
            ],
          },
        },
      });
      console.log(`  📄 Page "${pageData.slug}" created`);
    } else {
      console.log(`  ⏭️  Page "${pageData.slug}" already exists, skipping`);
    }
  }

  console.log("✅ All pages seeded");
  console.log("🎉 Database seeding complete!");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
