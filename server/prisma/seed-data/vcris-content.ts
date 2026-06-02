import type { Prisma } from "@prisma/client";
import {
  alertBox,
  beginPageSeed,
  block,
  button,
  contactCta,
  content,
  featureCard,
  heading,
  imageGrid,
  infoBox,
  list,
  map,
  pageTitle,
  personCard,
  rich,
  section,
  table,
  text,
  timeline,
} from "./puck-layout.js";

export type LocaleSeed = {
  title: string;
  content: Prisma.InputJsonValue;
};

export type PageSeed = {
  slug: string;
  isSystem: boolean;
  sortOrder: number;
  translations: Record<"en" | "vi", LocaleSeed>;
};

export const conference = {
  name: "VCRIS 2026",
  fullName: "The 3rd International Conference on Cryptography and Information Security",
  edition: "3rd",
  dates: "October 29-30, 2026",
  dateStart: "2026-10-29T08:00:00",
  location: "Academy of Cryptography Techniques, Hanoi, Vietnam",
  address: "141 Chien Thang Road, Thanh Liet, Ha Noi, Viet Nam",
  easyChairUrl: "https://easychair.org/conferences/?conf=vcris2026",
  registrationUrl: "https://vcris2026.websitehoinghi.com/",
  contactEmail: "vcris@actvn.edu.vn",
  publicContactEmail: "vcris.act@gmail.com",
  website: "https://vcris.org",
};

const importantDates = [
  { label: "Paper Submission Deadline", date: "June 30, 2026", passed: false },
  { label: "Notification of Acceptance", date: "July 31, 2026", passed: false },
  { label: "Registration Deadline", date: "September 25, 2026", passed: false },
  { label: "Conference Dates", date: "October 29-30, 2026", passed: false },
];

const tracks = [
  {
    title: "Track 1: Theoretical and Post-Quantum Cryptography",
    topics: [
      "Symmetric and asymmetric cryptography",
      "Cryptographic hash functions and digital signatures",
      "Cryptographic protocols and formal security proofs",
      "Provable security and complexity assumptions",
      "Random number generation and entropy sources",
      "Post-Quantum Cryptography (PQC)",
      "Lattice-based, code-based, multivariate cryptography",
      "Quantum-resistant primitives and migration strategies",
    ],
  },
  {
    title: "Track 2: Applied Cryptography and Privacy",
    topics: [
      "Cryptographic engineering and implementation security",
      "Side-channel attacks and countermeasures",
      "Secure hardware and trusted execution environments",
      "Zero-knowledge proofs and secure multiparty computation",
      "Blockchain and distributed ledger cryptography",
      "Privacy-enhancing technologies",
      "Information hiding and watermarking",
    ],
  },
  {
    title: "Track 3: Systems and Network Security",
    topics: [
      "Network and wireless security",
      "IoT and edge security",
      "Cloud and distributed systems security",
      "Operating systems and virtualization security",
      "Database and storage security",
      "Web and mobile security",
      "5G/6G and next-generation network security",
    ],
  },
  {
    title: "Track 4: AI-driven Security and Threat Intelligence",
    topics: [
      "AI and machine learning for cybersecurity",
      "Malware analysis and detection",
      "Intrusion detection and prevention systems",
      "Deepfake detection and media forensics",
      "Adversarial machine learning",
      "LLM applications in cybersecurity",
      "Automated vulnerability detection",
    ],
  },
  {
    title: "Track 5: Emerging Security Technologies",
    topics: [
      "Quantum communication security",
      "Cyber-physical systems security",
      "Smart city and critical infrastructure protection",
      "Digital forensics and incident response",
      "Human-centric security and usable security",
      "Security economics and governance",
      "Privacy and data protection frameworks",
    ],
  },
];

const aboutParagraphs = [
  "Following the success of VCRIS 2025, this event will continue to be held in Hanoi, the thousand-year-old capital of Vietnam, renowned for its rich history, cultural heritage, and vibrant historical landmarks. The Academy of Cryptography Techniques, selected by the Vietnamese Government as a pivotal institution for nurturing information security expertise, will serve as the venue for VCRIS 2026.",
  "The Academy of Cryptography Techniques stands as Vietnam's exclusive hub for cultivating professionals with both undergraduate and postgraduate qualifications and spearheading research in cryptographic science and technology under the purview of the Vietnam Government Information Security Commission (VGISC).",
  "VCRIS 2026 is organized and sponsored by the Academy of Cryptography Techniques, in collaboration with VIASM, FISU VN, ISJ, University of Lorraine, JAIST, and COSIC KU Leuven.",
  "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies.",
];

const registrationFees = [
  ["Regular", "IEEE Member", "Before Sep 30, 2026", "RM:B1", "250 USD", "01"],
  ["Regular", "IEEE Member", "Before Sep 30, 2026", "RM:B2", "400 USD", "02"],
  ["Regular", "IEEE Member", "Before Sep 30, 2026", "RM:B3", "500 USD", "03"],
  ["Regular", "IEEE Member", "After Sep 30, 2026", "RM:A1", "300 USD", "01"],
  ["Regular", "IEEE Member", "After Sep 30, 2026", "RM:A2", "450 USD", "02"],
  ["Regular", "IEEE Member", "After Sep 30, 2026", "RM:A3", "550 USD", "03"],
  ["Regular", "Non-IEEE Member", "Before Sep 30, 2026", "RN:B1", "300 USD", "01"],
  ["Regular", "Non-IEEE Member", "Before Sep 30, 2026", "RN:B2", "500 USD", "02"],
  ["Regular", "Non-IEEE Member", "Before Sep 30, 2026", "RN:B3", "600 USD", "03"],
  ["Regular", "Non-IEEE Member", "After Sep 30, 2026", "RN:A1", "350 USD", "01"],
  ["Regular", "Non-IEEE Member", "After Sep 30, 2026", "RN:A2", "550 USD", "02"],
  ["Regular", "Non-IEEE Member", "After Sep 30, 2026", "RN:A3", "650 USD", "03"],
  ["Student", "IEEE Member", "Before Sep 30, 2026", "SM:B1", "150 USD", "01"],
  ["Student", "IEEE Member", "Before Sep 30, 2026", "SM:B2", "250 USD", "02"],
  ["Student", "IEEE Member", "Before Sep 30, 2026", "SM:B3", "350 USD", "03"],
  ["Student", "IEEE Member", "After Sep 30, 2026", "SM:A1", "200 USD", "01"],
  ["Student", "IEEE Member", "After Sep 30, 2026", "SM:A2", "300 USD", "02"],
  ["Student", "IEEE Member", "After Sep 30, 2026", "SM:A3", "400 USD", "03"],
  ["Student", "Non-IEEE Member", "Before Sep 30, 2026", "SN:B1", "180 USD", "01"],
  ["Student", "Non-IEEE Member", "Before Sep 30, 2026", "SN:B2", "300 USD", "02"],
  ["Student", "Non-IEEE Member", "Before Sep 30, 2026", "SN:B3", "400 USD", "03"],
  ["Student", "Non-IEEE Member", "After Sep 30, 2026", "SN:A1", "230 USD", "01"],
  ["Student", "Non-IEEE Member", "After Sep 30, 2026", "SN:A2", "350 USD", "02"],
  ["Student", "Non-IEEE Member", "After Sep 30, 2026", "SN:A3", "450 USD", "03"],
  ["Extra", "Non-authors / Co-authors", "", "NA/CA", "150 USD", ""],
  ["Extra", "Extra page Proceeding", "", "EP", "40 USD/page", ""],
  ["Extra", "Sightseeing tour fee", "", "EF", "30 USD", ""],
];

const venueImages = [
  "https://vcris.org/wp-content/uploads/2024/03/2022-11-08-1024x672.jpg",
  "https://vcris.org/wp-content/uploads/2024/03/z5027586123041_31223954bd029175686cbedd54c930df-1024x768.jpg",
  "https://vcris.org/wp-content/uploads/2024/01/Toa-nha-Ban-co-yeu-chinh-phu-4.jpg",
  "https://vcris.org/wp-content/uploads/2024/03/z5027586097524_65d422081545cf19ec03fccfe8cde563-1024x768.jpg",
  "https://vcris.org/wp-content/uploads/elementor/thumbs/khu-nha-o-can-bo-nhan-vien-ban-co-yeu-chinh-phu-le-van-luong1589905471-r2p4pj7zyykiqzh6et3cm7zzba6zyl03ry1vhe2qkw.jpg",
  "https://vcris.org/wp-content/uploads/2024/03/z5027586073243_788c6f558db94688caaa268000a081d6-1024x768.jpg",
];

const hotels = [
  {
    name: "Grand Plaza Hanoi Hotel",
    address: "117 Tran Duy Hung Street, Hanoi 100000 Vietnam",
    image: "https://vcris.org/wp-content/uploads/2024/03/hotel.png",
    link: "http://www.grandplazahanoi.com/kor/",
    time: "By Bus: 10 min | By Car: 10 min | Walking: 25 min",
  },
  {
    name: "Intercontinental Hanoi Westlake",
    address: "5 Tu Hoa, Hanoi 00000, Vietnam",
    image: "https://vcris.org/wp-content/uploads/2024/03/intercontiental.jpg",
    link: "https://hanoi.intercontinental.com/",
    time: "By Bus: 10 min | By Car: 10 min | Walking: 25 min",
  },
];

const organizers = {
  organizer: ["Academy of Cryptography Techniques (ACT)"],
  coOrganizers: [
    "Vietnam Institute for Advanced Study in Mathematics (VIASM)",
    "Vietnam Association of Faculties-Institutes-Schools-Universities of ICT (FISU)",
    "Journal of Information Security (ISJ)",
  ],
  endorsers: [
    "Japan Advanced Institute of Science and Technology (JAIST), Japan",
    "University of Lorraine (UL), France",
    "Computer Security and Industrial Cryptography group (COSIC), KU Leuven, Belgium",
  ],
};

const organizingCommitteeGroups = [
  ["Honorary Chairs", ["Nguyen Huu Hung - VGISC, Vietnam", "Yukari Nagai - JAIST, Japan", "Hoang Van Thuc - ACT, Vietnam"]],
  ["General Chairs", ["Nguyen Hieu Minh - ACT, Vietnam", "Nguyen Thanh Thuy - FISU, Vietnam", "Le Minh Ha - VIASM, Vietnam", "Vincent Rijmen - KU Leuven, Belgium", "Jean-Yves Marion - University of Lorraine, France"]],
  ["Advisory Committee", ["Phan Duong Hieu - Telecom Paris, France", "Nguyen Le Minh - JAIST, Japan", "Serge Vaudenay - EPFL, Switzerland", "Frederik Vercauteren - KU Leuven, Belgium", "Kazuhiro Ogata - JAIST, Japan", "Edgar Weippl - University of Vienna, Austria"]],
  ["Program Chairs", ["Lam Thu Bui - ACT, Vietnam (Chair)", "Eiichiro Fujisaki - JAIST, Japan", "Stjepan Picek - Radboud University, The Netherlands", "Junbeom Hur - Korea University, Korea", "Mizuhito Ogawa - Old Teachers Network, Japan", "Nhien-An Le-Khac - University College Dublin, Ireland"]],
] as const;

const programCommitteeRows = [
  ["1", "Anupam", "Chattopadhyay", "Nanyang Technological University, Singapore"],
  ["2", "Eiichiro", "Fujisaki", "JAIST, Japan"],
  ["3", "Junbeom", "Hur", "Korea University, Korea"],
  ["4", "Nhien-An", "Le-Khac", "University College Dublin, Ireland"],
  ["5", "Stjepan", "Picek", "Radboud University, The Netherlands"],
  ["6", "Vincent", "Rijmen", "KU Leuven, Belgium"],
  ["7", "Edgar", "Weippl", "University of Vienna, Austria"],
];

const previousConferences = [
  ["VCRIS 2025", "2nd Edition", "October 30-31, 2025", "Academy of Cryptography Techniques, Hanoi, Vietnam", "https://vcris.org/previous-conferences/vcris2025/homepage/"],
  ["VCRIS 2024", "1st Edition", "December 3-4, 2024", "Academy of Cryptography Techniques, Hanoi, Vietnam", "https://vcris.org/previous-conferences/vcris2024/homepage/"],
];

const speaker = {
  name: "Anupam Chattopadhyay",
  role: "Associate Professor",
  institution: "College of Computing and Data Science, Nanyang Technological University, Singapore",
  research: "Computing Architecture, Electronic Design Automation, AI Security, Quantum Safe Systems, Emerging Technologies",
  talk: "The Brave New (Quantum) World",
  image: "/images/anh.png",
  abstract: "Major advances across all the design stack of quantum computing have brought us to a realm where it is impossible to ignore the effect of quantum computing in the world around us. This talk discusses efficient circuit design and automation challenges, experimental quantum computers, and the practical threat from large-scale quantum computers to public-key cryptography.",
  bio: "Anupam Chattopadhyay received his B.E. degree from Jadavpur University, MSc. from ALaRI, Switzerland and PhD from RWTH Aachen. He currently heads a team of 20+ researchers working across computer architectures, security, design automation and emerging technologies, with more than 300 conference and journal publications.",
};

export const siteConfigs: Record<string, unknown> = {
  conference_name: conference.name,
  conference_full_name: conference.fullName,
  conference_edition: conference.edition,
  conference_dates: conference.dates,
  conference_date_start: conference.dateStart,
  conference_location: conference.location,
  conference_address: conference.address,
  easychair_url: conference.easyChairUrl,
  registration_url: conference.registrationUrl,
  contact_email: conference.contactEmail,
  public_contact_email: conference.publicContactEmail,
  website_url: conference.website,
  default_locale: "en",
  supported_locales: ["en", "vi"],
  navigation_layout: [
    { path: "/", label: "HOME" },
    { path: "/call-for-papers", label: "Call for papers" },
    { path: "/paper-submission", label: "Paper Submission" },
    { path: "/keynote-speakers", label: "Keynote Speakers" },
    { path: "/registration", label: "REGISTRATION" },
    { path: "/organizing-committees", label: "Organizing Committees" },
    { path: "/program", label: "PROGRAM" },
    { path: "/venue", label: "Venue" },
  ],
  important_dates: importantDates,
  conference_tracks: tracks,
  registration_fees: registrationFees.map(([type, membership, date, code, fee, papers]) => ({ type, membership, date, code, fee, papers })),
  venue_images: venueImages,
  accommodations: hotels,
  organizers,
  seed_layout_version: "2026-06-02-current-ui-v1",
};

function withScope(slug: string, build: () => Prisma.InputJsonValue): Prisma.InputJsonValue {
  beginPageSeed(slug);
  return build();
}

function trackBlocks() {
  return tracks.flatMap((track) => [
    heading(track.title, { level: 3, fontSize: "22px", fontStyle: "normal", margin: "24px 0 12px 0" }),
    list(track.topics, { fontSize: "15px", spacing: "6px" }),
  ]);
}

function page(title: string, blocks: Parameters<typeof content>[0]) {
  return content([pageTitle(title), ...blocks]);
}

export const pages: PageSeed[] = [
  {
    slug: "home",
    isSystem: true,
    sortOrder: 0,
    translations: {
      en: {
        title: "Home",
        content: withScope("home-en", () =>
          content([
            block("HomeImportantDates", { conferenceDateRaw: "October 29, 2026 08:00:00" }, {
              "left-panel-content": [
                heading(conference.name, { level: 3, fontSize: "34px", textAlign: "center", color: "#0b2740" }),
                text(`${conference.dates}<br/>Academy of Cryptography Techniques, ${conference.address}`, { fontSize: "18px", textAlign: "center", color: "#0b2740" }),
              ],
              "right-panel-content": [
                heading("Important Dates", { fontSize: "32px" }),
                timeline(importantDates.map((item) => ({ date: item.date, title: item.label, completed: item.passed }))),
              ],
            }),
            section([
              heading("Welcome to VCRIS 2026", { fontSize: "44px" }),
              ...aboutParagraphs.slice(0, 2).map((paragraph) => text(paragraph, { margin: "0 0 18px 0" })),
            ]),
            section([
              heading("About the Conference"),
              ...aboutParagraphs.slice(2).map((paragraph) => text(paragraph)),
            ], { backgroundColor: "#F7F8FA" }),
            section([
              heading("Conference Tracks"),
              ...trackBlocks(),
            ]),
            section([
              heading("Paper Submission"),
              list([
                "Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere.",
                "All submissions must follow the IEEE conference format, be written in English, and should not exceed 6 pages.",
                "Papers will be peer-reviewed using a double-blind review process by at least three members of the technical Program Committee.",
              ]),
              button("Submit Paper via EasyChair", conference.easyChairUrl),
            ], { backgroundColor: "#F7F8FA" }),
          ]),
        ),
      },
      vi: {
        title: "Trang chủ",
        content: withScope("home-vi", () =>
          content([
            block("HomeImportantDates", { conferenceDateRaw: "October 29, 2026 08:00:00" }, {
              "left-panel-content": [
                heading("VCRIS 2026", { level: 3, fontSize: "34px", textAlign: "center", color: "#0b2740" }),
                text("29-30 tháng 10, 2026<br/>Học viện Kỹ thuật Mật mã, Hà Nội, Việt Nam", { fontSize: "18px", textAlign: "center", color: "#0b2740" }),
              ],
              "right-panel-content": [heading("Các mốc quan trọng", { fontSize: "32px" }), timeline(importantDates.map((item) => ({ date: item.date, title: item.label })))],
            }),
            section([
              heading("Chào mừng đến với VCRIS 2026", { fontSize: "44px" }),
              text("VCRIS 2026 tiếp tục được tổ chức tại Hà Nội, với Học viện Kỹ thuật Mật mã là địa điểm hội nghị."),
              text("Hội nghị là diễn đàn quốc tế cho các nghiên cứu về mật mã, an toàn thông tin, bảo mật hậu lượng tử, an ninh hệ thống và an ninh mạng ứng dụng AI."),
            ]),
          ]),
        ),
      },
    },
  },
  {
    slug: "call-for-papers",
    isSystem: true,
    sortOrder: 1,
    translations: {
      en: {
        title: "Call for Papers",
        content: withScope("cfp-en", () =>
          page("Call for Papers", [
            section([
              infoBox("Conference Scope", aboutParagraphs[3]),
              heading("About the Conference", { fontSize: "40px" }),
              ...aboutParagraphs.slice(2).map((paragraph) => text(paragraph)),
              heading("Conference Tracks", { fontSize: "32px", margin: "40px 0 24px 0" }),
              ...trackBlocks(),
            ]),
            section([
              heading("Paper Submission", { level: 3, fontSize: "28px" }),
              list(["Original unpublished research papers only", "IEEE conference format", "Written in English", "Maximum 6 pages"]),
              button("Submit via EasyChair", conference.easyChairUrl),
              heading("Publication", { level: 3, fontSize: "28px", margin: "40px 0 16px 0" }),
              list(["Accepted and presented papers will be submitted for inclusion into IEEE Xplore.", "Journal special issues related to VCRIS 2026 will be announced in due course."]),
            ], { backgroundColor: "#F7F8FA" }),
            contactCta("Contact Information", "For CFP questions, contact the VCRIS 2026 organizing team.", conference.publicContactEmail),
          ]),
        ),
      },
      vi: {
        title: "Kêu gọi bài báo",
        content: withScope("cfp-vi", () => page("Kêu gọi Bài báo", [section([text("VCRIS 2026 mời các tác giả gửi các công trình nghiên cứu mới, chưa công bố và không đồng thời gửi bình duyệt ở nơi khác."), heading("Các hướng chủ đề"), ...trackBlocks()])])),
      },
    },
  },
  {
    slug: "call-for-workshops",
    isSystem: true,
    sortOrder: 2,
    translations: {
      en: { title: "Call for Workshops", content: withScope("workshops-en", () => page("Call for Workshops", [section([infoBox("Workshop Info", "The VCRIS conference will feature a workshop session for businesses to introduce themselves and promote products in quantum science and technology, cryptography, and information security."), alertBox("Details", "The detailed workshop for VCRIS 2026 will be updated later.", "info"), heading("Contact Organizers", { level: 3, fontSize: "28px" }), text("Should you have inquiries regarding the workshops, please contact the conference organizers via email or phone."), list(["Dr. Vu Thi Dao - Institute of Research and Development Cooperation, ACT - +84.982.151.982", "Ms Vuong Thi Hai Ha - Secretary of VCRIS 2026 - +84.984.346.162"]), button("Email Organizers", `mailto:${conference.contactEmail}`)])])) },
      vi: { title: "Kêu gọi Hội thảo", content: withScope("workshops-vi", () => page("Kêu gọi Hội thảo", [section([text("Hội nghị VCRIS sẽ có phiên hội thảo dành cho doanh nghiệp. Thông tin chi tiết sẽ được cập nhật sau."), button("Liên hệ ban tổ chức", `mailto:${conference.contactEmail}`)])])) },
    },
  },
  {
    slug: "keynote-speakers",
    isSystem: true,
    sortOrder: 3,
    translations: {
      en: { title: "Keynote Speakers", content: withScope("keynotes-en", () => page("Keynote Speakers", [section([personCard({ name: speaker.name, title: speaker.role, affiliation: speaker.institution, image: speaker.image, bio: `<strong>Research areas:</strong> ${speaker.research}`, layout: "horizontal" }), heading(`Title: ${speaker.talk}`, { level: 3, fontSize: "22px", fontStyle: "normal" }), heading("Abstract", { level: 4, fontSize: "20px", fontStyle: "normal" }), text(speaker.abstract), heading("Bio", { level: 4, fontSize: "20px", fontStyle: "normal" }), text(speaker.bio)]), section([heading("Announcement", { textAlign: "center", color: "#FFFFFF" }), text("Several journal special issues related to VCRIS 2026 will be announced in due course.", { textAlign: "center", color: "#FFFFFF" })], { backgroundColor: "#1B4F91" })])) },
      vi: { title: "Diễn giả chính", content: withScope("keynotes-vi", () => page("Diễn giả chính", [section([personCard({ name: speaker.name, title: speaker.role, affiliation: speaker.institution, image: speaker.image, bio: speaker.research, layout: "horizontal" })])])) },
    },
  },
  {
    slug: "registration",
    isSystem: true,
    sortOrder: 4,
    translations: {
      en: { title: "Registration", content: withScope("registration-en", () => page("Registration", [section([heading("Registration Fees", { fontSize: "40px", textAlign: "center" }), text("Early bird rates available until September 30, 2026", { textAlign: "center" }), infoBox("Registration", `Registration is handled at <a href=\"${conference.registrationUrl}\">${conference.registrationUrl}</a>. After successful payment, please send proof to <a href=\"mailto:${conference.publicContactEmail}\">${conference.publicContactEmail}</a>.`), table(["Registration Type", "Membership", "Date", "Code", "Registration Fee", "Accepted Papers"], registrationFees), heading("Payment Detail", { level: 3, fontSize: "24px" }), list(["The registration fee includes IEEE publication, coffee breaks, lunch breaks, and conference materials for two conference days.", "The registration also covers an entrant to the Gala Dinner at a restaurant in Hanoi.", "If the registrant has multiple papers, the registrant must register for each paper.", "Non-refundable registration fees must be paid before uploading the final IEEE formatted version."]), heading("Further Inquiry", { level: 3, fontSize: "24px" }), text(`For payment or registration difficulties, contact <a href=\"mailto:${conference.publicContactEmail}\">${conference.publicContactEmail}</a>. Please include PaperID, paper title, authors, and affiliation.`)])])) },
      vi: { title: "Đăng ký", content: withScope("registration-vi", () => page("Đăng ký", [section([heading("Phí đăng ký", { fontSize: "40px", textAlign: "center" }), infoBox("Thông tin đăng ký", `Đăng ký tại <a href=\"${conference.registrationUrl}\">${conference.registrationUrl}</a>. Sau khi thanh toán thành công, vui lòng gửi minh chứng tới <a href=\"mailto:${conference.publicContactEmail}\">${conference.publicContactEmail}</a>.`), table(["Loại", "Thành viên", "Thời hạn", "Mã", "Phí", "Số bài"], registrationFees)])])) },
    },
  },
  {
    slug: "paper-submission",
    isSystem: true,
    sortOrder: 5,
    translations: {
      en: { title: "Paper Submission", content: withScope("paper-en", () => page("Paper Submission", [section([infoBox("Paper Submission", "Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere. Submissions must follow IEEE format, be written in English, and should not exceed 6 pages."), infoBox("Paper Submission Requirements", "All submitted papers must be original contributions and the author order must exactly match the online submission form."), infoBox("Presentation and Publication", "Accepted and presented papers will be published in the Conference Proceedings. At least one author must register by the early registration deadline."), infoBox("Contact Information", `For inquiries, contact <a href=\"mailto:${conference.publicContactEmail}\">${conference.publicContactEmail}</a>.`), heading("Important Dates", { level: 3, fontSize: "28px", margin: "40px 0 16px 0" }), timeline([{ date: "June 30, 2026", title: "Full Paper Submission" }, { date: "July 31, 2026", title: "Notification of Acceptance" }, { date: "September 25, 2026", title: "Early Registration Deadline" }, { date: "October 29-30, 2026", title: "Conference Dates" }]), alertBox("Submission Deadline", "June 30, 2026", "info")])])) },
      vi: { title: "Nộp bài", content: withScope("paper-vi", () => page("Nộp bài", [section([text("Tác giả gửi bài qua EasyChair. Bài báo phải là công trình gốc, viết bằng tiếng Anh, theo định dạng IEEE và không quá 6 trang."), timeline(importantDates.map((item) => ({ date: item.date, title: item.label })))])])) },
    },
  },
  {
    slug: "camera-ready-submission",
    isSystem: true,
    sortOrder: 6,
    translations: {
      en: { title: "Camera Ready Submission", content: withScope("camera-en", () => page("Camera Ready Submission", [section([alertBox("Camera-ready submission information will be updated later.", "Final manuscript, copyright, and IEEE Xplore compatibility instructions will be published after acceptance notification.", "warning")], { backgroundColor: "#F7F8FA", padding: "48px 24px" })])) },
      vi: { title: "Nộp bản cuối", content: withScope("camera-vi", () => page("Nộp bản Camera Ready", [section([alertBox("Thông tin nộp bản cuối sẽ được cập nhật sau.", "Hướng dẫn bản thảo cuối, bản quyền và kiểm tra tương thích IEEE Xplore sẽ được công bố sau thông báo chấp nhận.", "warning")])])) },
    },
  },
  {
    slug: "instructions-for-authors",
    isSystem: true,
    sortOrder: 7,
    translations: {
      en: { title: "Instructions for Authors", content: withScope("authors-en", () => page("Instruction for Authors", [section([infoBox("Submission Process", `Papers must be submitted via the <a href=\"${conference.easyChairUrl}\">VCRIS 2026 submission</a> before or on the specified due dates.`), infoBox("Paper Formatting Requirements", "Submissions must be camera-ready PDF files from 4 to 6 pages, not password protected, with all fonts embedded, written in English, and formatted using IEEE templates."), infoBox("Template and Guidelines", "LaTeX and DOC manuscript templates are provided by IEEE. Remove all instructional template text before submission."), button("IEEE Manuscript Templates", "https://www.ieee.org/conferences/publishing/templates.html")])])) },
      vi: { title: "Hướng dẫn cho tác giả", content: withScope("authors-vi", () => page("Hướng dẫn cho tác giả", [section([text("Bài báo phải được gửi qua hệ thống VCRIS 2026 trước hoặc đúng hạn. Vui lòng sử dụng mẫu IEEE và bảo đảm file PDF không đặt mật khẩu, nhúng đầy đủ font.")])])) },
    },
  },
  {
    slug: "organizing-committees",
    isSystem: true,
    sortOrder: 8,
    translations: {
      en: { title: "Organizing Committees", content: withScope("org-en", () => page("Organizing Committees", [section([heading("Organizer", { level: 3, fontSize: "20px" }), list(organizers.organizer), heading("Co-Organizers", { level: 3, fontSize: "20px" }), list(organizers.coOrganizers), heading("Endorsers", { level: 3, fontSize: "20px" }), list(organizers.endorsers)]), section([heading("Committee Members", { fontSize: "40px", textAlign: "center" }), ...organizingCommitteeGroups.flatMap(([role, members]) => [heading(role, { level: 3, fontSize: "24px", fontStyle: "normal" }), list([...members])])], { backgroundColor: "#F7F8FA" })])) },
      vi: { title: "Ban tổ chức", content: withScope("org-vi", () => page("Ban tổ chức", [section([heading("Đơn vị tổ chức"), list([...organizers.organizer, ...organizers.coOrganizers, ...organizers.endorsers]), heading("Thành viên ban tổ chức"), ...organizingCommitteeGroups.flatMap(([role, members]) => [heading(role, { level: 3, fontSize: "24px" }), list([...members])])])])) },
    },
  },
  {
    slug: "program-committees",
    isSystem: true,
    sortOrder: 9,
    translations: {
      en: { title: "Program Committees", content: withScope("pc-en", () => page("Program Committees", [section([table(["#", "First Name", "Last Name", "Affiliation"], programCommitteeRows), alertBox("The program committee will be continuously updated", "", "warning")], { backgroundColor: "#F7F8FA" })])) },
      vi: { title: "Ban chương trình", content: withScope("pc-vi", () => page("Ban chương trình", [section([table(["#", "Tên", "Họ", "Đơn vị"], programCommitteeRows), alertBox("Ban chương trình sẽ tiếp tục được cập nhật", "", "warning")])])) },
    },
  },
  {
    slug: "program",
    isSystem: true,
    sortOrder: 10,
    translations: {
      en: { title: "Program", content: withScope("program-en", () => page("Conference Program", [section([heading("The VCRIS 2026 program will be updated later.", { fontSize: "28px", textAlign: "center" })])])) },
      vi: { title: "Chương trình", content: withScope("program-vi", () => page("Chương trình Hội nghị", [section([heading("Chương trình VCRIS 2026 sẽ được cập nhật sau.", { fontSize: "28px", textAlign: "center" })])])) },
    },
  },
  {
    slug: "venue",
    isSystem: true,
    sortOrder: 11,
    translations: {
      en: { title: "Venue", content: withScope("venue-en", () => page("Venue & Travel", [section([map("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.195748202528!2d105.79383627503006!3d20.984786980650942!2m3!1f0!2f0!3f0"), heading("Academy of Cryptography Techniques"), infoBox("Address", conference.address), list(["From Airport: 30 minutes by taxi from Noi Bai International Airport (HAN)", "By Taxi: Grab and traditional taxis readily available throughout Hanoi", "Public Transit: Bus routes 18, 34, and 86 stop nearby"]), button("View on Google Maps", "https://maps.google.com")]), section([heading("Photos of the Academy", { textAlign: "center", fontSize: "44px" }), imageGrid(venueImages, 3)], { backgroundColor: "#F7F8FA" }), section([heading("Academy of Cryptography Techniques", { textAlign: "center", color: "#FFFFFF", fontSize: "44px" }), text("The Academy of Cryptography Techniques is the sole institution in Vietnam dedicated to undergraduate and postgraduate education and research in cryptographic science and technology for VGISC.", { color: "#FFFFFF", textAlign: "center" })], { backgroundColor: "#0b2740" })])) },
      vi: { title: "Địa điểm", content: withScope("venue-vi", () => page("Địa điểm tổ chức", [section([heading("Học viện Kỹ thuật Mật mã"), text(conference.address), imageGrid(venueImages, 3)])])) },
    },
  },
  {
    slug: "accommodation",
    isSystem: true,
    sortOrder: 12,
    translations: {
      en: { title: "Accommodation", content: withScope("hotel-en", () => page("Accommodation", [section([heading("Recommended Hotels", { textAlign: "center" }), ...hotels.map((hotel) => personCard({ name: hotel.name, title: "Recommended Hotel", affiliation: hotel.address, image: hotel.image, bio: `${hotel.time}<br/><a href=\"${hotel.link}\">Visit Website</a>`, layout: "vertical" }))])])) },
      vi: { title: "Nơi ở", content: withScope("hotel-vi", () => page("Nơi ở", [section([heading("Khách sạn gợi ý", { textAlign: "center" }), ...hotels.map((hotel) => infoBox(hotel.name, `${hotel.address}<br/>${hotel.time}<br/><a href=\"${hotel.link}\">Visit Website</a>`))])])) },
    },
  },
  {
    slug: "previous-conferences",
    isSystem: true,
    sortOrder: 13,
    translations: {
      en: { title: "Previous Conferences", content: withScope("prev-en", () => content([section([heading("Previous Conferences", { level: 1, fontSize: "56px", textAlign: "center", color: "#FFFFFF" }), text("Archive of past VCRIS editions with proceedings, keynotes and accepted papers", { textAlign: "center", color: "#FFFFFF" })], { backgroundColor: "#0b2740", padding: "96px 24px" }), section([...previousConferences.flatMap(([name, edition, dates, location, url]) => [featureCard(`${name} - ${edition}`, `${dates}<br/>${location}<br/><a href=\"${url}\">View Archive</a>`, "V")]), infoBox(`Looking for ${conference.name}?`, "The current edition is live - return to the main site.")])])) },
      vi: { title: "Hội nghị trước", content: withScope("prev-vi", () => page("Các hội nghị trước", [section(previousConferences.map(([name, edition, dates, location, url]) => featureCard(`${name} - ${edition}`, `${dates}<br/>${location}<br/><a href=\"${url}\">View Archive</a>`, "V"))) ])) },
    },
  },
];
