// Comprehensive Data Seed Script
// Loads all content from conferenceData.ts -> pushes to CMS DB
// Run: node server/api-seed-deep.js

import fs from 'fs';

const API_BASE = "http://localhost:4000/api/v1";
const id = (prefix) => prefix + "-" + Math.random().toString(36).substr(2, 9);

function createPage(slug, title, isSystem, blocks) {
  const contentArray = [];
  const zones = {};

  function processBlock(block, parentId = null) {
    const blockId = id(block.type);
    const props = { id: blockId, ...block.props };

    if (parentId === null) {
      contentArray.push({ type: block.type, props });
    }

    if (block.zones) {
      for (const [zoneName, children] of Object.entries(block.zones)) {
        const zoneKey = parentId ? `${parentId}:${zoneName}` : `${blockId}:${zoneName}`;
        zones[zoneKey] = children.map(child => {
          const childId = id(child.type);
          const childProps = { id: childId, ...child.props };
          // Handle nested zones (e.g. Columns inside Section)
          if (child.zones) {
            for (const [czName, czChildren] of Object.entries(child.zones)) {
              zones[`${childId}:${czName}`] = czChildren.map(cc => {
                const ccId = id(cc.type);
                return { type: cc.type, props: { id: ccId, ...cc.props } };
              });
            }
          }
          return { type: child.type, props: childProps };
        });
      }
    }
    return blockId;
  }

  blocks.forEach(block => processBlock(block));

  return {
    slug, title, isSystem,
    content: { root: { props: {} }, content: contentArray, zones }
  };
}

// ========================
// DATA DEFINITIONS
// ========================

const CONF = {
  name: "VCRIS 2026",
  dates: "October 29–30, 2026",
  location: "Academy of Cryptography Techniques, Hanoi, Vietnam",
  address: "141 Chien Thang Road, Thanh Liet, Ha Noi, Viet Nam",
  easyChairUrl: "https://easychair.org/conferences/?conf=vcris2026",
  contactEmail: "vcris@actvn.edu.vn",
};

const organizingCommitteeGroups = [
  {
    role: "Honorary Chairs",
    members: [
      { name: "Nguyen Huu Hung", affiliation: "VGISC, Vietnam" },
      { name: "Yukari Nagai", affiliation: "JAIST, Japan" },
      { name: "Hoang Van Thuc", affiliation: "ACT, Vietnam" },
    ],
  },
  {
    role: "General Chairs",
    members: [
      { name: "Nguyen Hieu Minh", affiliation: "ACT, Vietnam" },
      { name: "Nguyen Thanh Thuy", affiliation: "FISU, Vietnam" },
      { name: "Le Minh Ha", affiliation: "VIASM, Vietnam" },
      { name: "Vincent Rijmen", affiliation: "KU Leuven, ESAT/COSIC, Belgium" },
      { name: "Jean-Yves Marion", affiliation: "LORIA, University of Lorraine, France" },
    ],
  },
  {
    role: "Advisory Committee",
    members: [
      { name: "Phan Duong Hieu", affiliation: "Telecom Paris, Institut Polytechnique de Paris, France" },
      { name: "Nguyen Le Minh", affiliation: "JAIST, Japan" },
      { name: "Serge Vaudenay", affiliation: "EPFL IC IINFCOM LASEC, Switzerland" },
      { name: "Frederik Vercauteren", affiliation: "COSIC, KU Leuven, Belgium" },
      { name: "Kazuhiro Ogata", affiliation: "JAIST, Japan" },
      { name: "Edgar Weippl", affiliation: "University of Vienna, Austria" },
    ],
  },
  {
    role: "Program Chairs",
    members: [
      { name: "Lam Thu Bui", affiliation: "ACT, Vietnam" },
      { name: "Eiichiro Fujisaki", affiliation: "JAIST, Japan" },
      { name: "Stjepan Picek", affiliation: "DiS Radboud University, The Netherlands" },
      { name: "Junbeom Hur", affiliation: "Korea University, Korea" },
      { name: "Mizuhito Ogawa", affiliation: "Old Teachers Network, Japan" },
      { name: "Nhien-An Le-Khac", affiliation: "University College Dublin, Ireland" },
    ],
  },
  {
    role: "Publication Chairs",
    members: [
      { name: "Nguyen Nhu Tuan", affiliation: "ISJ, Vietnam" },
      { name: "Pham Duy Trung", affiliation: "ACT, Vietnam" },
    ],
  },
  {
    role: "Publicity Chairs",
    members: [
      { name: "Nguyen The Hao", affiliation: "ISJ, Vietnam" },
      { name: "Le Duc Thuan", affiliation: "ACT, Vietnam" },
    ],
  },
  {
    role: "Local Organization Committee",
    members: [
      { name: "Vu Thi Dao", affiliation: "ACT, Vietnam" },
      { name: "Tran Thi Luong", affiliation: "ACT, Vietnam" },
      { name: "Dao Ba Anh", affiliation: "ACT, Vietnam" },
    ],
  },
];

const programCommittee = [
  { name: "Anh Phan", affiliation: "Le Quy Don Technical University, Vietnam" },
  { name: "Anh-Tien Le", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Atah Nuh Mih", affiliation: "University of New Brunswick, Canada" },
  { name: "Ba Anh Dao", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Bagus Santoso", affiliation: "The University of Electro-Communications, Japan" },
  { name: "Bui Cuong Nguyen", affiliation: "Vietnam Government Information Security Commission, Vietnam" },
  { name: "Chung Tien Nguyen", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Cong Nguyen-Duc", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Cong-Kha Pham", affiliation: "The University of Electro-Communications, Japan" },
  { name: "Cuong Nguyen", affiliation: "Le Quy Don Technical University, Vietnam" },
  { name: "Dai Tho Nguyen", affiliation: "Vietnam National University, Hanoi, Vietnam" },
  { name: "Dat Tran", affiliation: "University of Canberra, Australia" },
  { name: "Dung Hoang Duong", affiliation: "University of Wollongong, Australia" },
  { name: "Eiichiro Fujisaki", affiliation: "Japan Advanced Institute of Science and Technology, Japan" },
  { name: "Frederik Vercauteren", affiliation: "COSIC, KU Leuven, Belgium" },
  { name: "Hieu-Minh Nguyen", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Hoai An Le Thi", affiliation: "LITA EA 3097 UFR MIM Université de Lorraine, France" },
  { name: "Hung Nguyen", affiliation: "Key Lab in Information Security, Vietnam" },
  { name: "Ik Rae Jeong", affiliation: "Korea University, South Korea" },
  { name: "Jean-Yves Marion", affiliation: "Université de Lorraine, LORIA, France" },
  { name: "Joan Daemen", affiliation: "DiS, Radboud University, The Netherlands" },
  { name: "Junbeom Hur", affiliation: "Korea University, South Korea" },
  { name: "Khanh Nguyen", affiliation: "University of Wollongong, Australia" },
  { name: "Kwangjo Kim", affiliation: "Korea Advanced Institute of Science and Technology, South Korea" },
  { name: "Lam Thu Bui", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Lejla Batina", affiliation: "DiS, Radboud University, The Netherlands" },
  { name: "Le-Minh Nguyen", affiliation: "Japan Advanced Institute of Science and Technology, Japan" },
  { name: "Mizuhito Ogawa", affiliation: "Old Teachers Network, Japan" },
  { name: "Nhien-An Le-Khac", affiliation: "University College Dublin, Ireland" },
  { name: "Ni Trieu", affiliation: "Arizona State University, USA" },
  { name: "Pablo Freyre-Arrozarena", affiliation: "Institute of Cryptography, University of Havana, Cuba" },
  { name: "Phuong Hoa Nguyen", affiliation: "Rennes University, France" },
  { name: "Quang Duc Tran", affiliation: "Hanoi University of Science and Technology, Vietnam" },
  { name: "Serge Vaudenay", affiliation: "Ecole Polytechnique Fédérale de Lausanne, Switzerland" },
  { name: "Sihem Mesnager", affiliation: "The University of Paris VIII, France" },
  { name: "Stjepan Picek", affiliation: "DiS, Radboud University, The Netherlands" },
  { name: "Sylvain Guilley", affiliation: "GET/ENST, CNRS/LTCI, France" },
  { name: "Thang Hoang", affiliation: "Virginia Tech, USA" },
  { name: "Trong-Thuc Hoang", affiliation: "The University of Electro-Communications, Japan" },
  { name: "Vincent Rijmen", affiliation: "KU Leuven, ESAT/COSIC, Belgium" },
  { name: "Xuan-Thanh Do", affiliation: "University of Limoges, France" },
];

const cfaTracks = [
  {
    title: "Track 1: Theoretical and Post-Quantum Cryptography",
    topics: ["Symmetric and asymmetric cryptography", "Cryptographic hash functions and digital signatures", "Cryptographic protocols and formal security proofs", "Provable security and complexity assumptions", "Random number generation and entropy sources", "Post-Quantum Cryptography (PQC)", "Lattice-based, code-based, multivariate cryptography", "Quantum-resistant primitives and migration strategies"]
  },
  {
    title: "Track 2: Applied Cryptography and Privacy",
    topics: ["Cryptographic engineering and implementation security", "Side-channel attacks and countermeasures", "Secure hardware and trusted execution environments", "Zero-knowledge proofs and secure multiparty computation", "Blockchain and distributed ledger cryptography", "Privacy-enhancing technologies", "Information hiding and watermarking"]
  },
  {
    title: "Track 3: Systems and Network Security",
    topics: ["Network and wireless security", "IoT and edge security", "Cloud and distributed systems security", "Operating systems and virtualization security", "Database and storage security", "Web and mobile security", "5G/6G and next-generation network security"]
  },
  {
    title: "Track 4: AI-driven Security and Threat Intelligence",
    topics: ["AI and machine learning for cybersecurity", "Malware analysis and detection", "Intrusion detection and prevention systems", "Deepfake detection and media forensics", "Adversarial machine learning", "LLM applications in cybersecurity", "Automated vulnerability detection"]
  },
  {
    title: "Track 5: Emerging Security Technologies",
    topics: ["Quantum communication security", "Cyber-physical systems security", "Smart city and critical infrastructure protection", "Digital forensics and incident response", "Human-centric security and usable security", "Security economics and governance", "Privacy and data protection frameworks"]
  }
];

const registrationFees = [
  ["Regular", "IEEE Member", "Before Sep 30, 2026", "250 USD"],
  ["Regular", "Non-IEEE Member", "Before Sep 30, 2026", "300 USD"],
  ["Regular", "IEEE Member", "After Sep 30, 2026", "330 USD"],
  ["Regular", "Non-IEEE Member", "After Sep 30, 2026", "380 USD"],
  ["Student", "IEEE Member", "Before Sep 30, 2026", "170 USD"],
  ["Student", "Non-IEEE Member", "Before Sep 30, 2026", "220 USD"],
  ["Student", "IEEE Member", "After Sep 30, 2026", "230 USD"],
  ["Student", "Non-IEEE Member", "After Sep 30, 2026", "280 USD"],
  ["Listener", "Any", "Before Sep 30, 2026", "160 USD"],
  ["Listener", "Any", "After Sep 30, 2026", "230 USD"],
  ["Companion", "N/A", "Any", "100 USD"],
];

// ========================
// PAGE DEFINITIONS
// ========================

const pages = [
  // HOME PAGE
  createPage("home", "VCRIS 2026", true, [
    {
      type: "HomeHero",
      props: { bgImageUrl: "/images/lake.jpg" },
      zones: {
        "hero-content": [
          { type: "SectionHeading", props: { content: "VCRIS 2026", level: 6, fontSize: "14px", fontStyle: "normal", color: "#FFFFFF", margin: "0 0 16px 0", textAlign: "left" } },
          { type: "SectionHeading", props: { content: "The 3rd International Conference on", level: 2, fontSize: "36px", fontStyle: "italic", color: "#FFFFFF", margin: "0 0 8px 0", textAlign: "left" } },
          { type: "SectionHeading", props: { content: "Cryptography &amp; Information Security", level: 1, fontSize: "48px", fontStyle: "italic", color: "#FFFFFF", margin: "0 0 24px 0", textAlign: "left" } },
          { type: "TextBlock", props: { content: "📅 October 29 - 30, 2026 &nbsp;&nbsp; 📍 Academy of Cryptography Techniques, Hanoi", color: "#FFFFFF", fontSize: "16px" } }
        ]
      }
    },
    {
      type: "HomeImportantDates",
      props: { conferenceDateRaw: "October 29, 2026 00:00:00" },
      zones: {
        "left-panel-content": [
          { type: "SectionHeading", props: { content: "VCRIS 2026", level: 4, fontStyle: "normal", color: "#0b2740", margin: "0 0 12px 0", textAlign: "center" } },
          { type: "TextBlock", props: { content: "October 29 - 30, 2026", fontSize: "28px", color: "#0b2740", textAlign: "center", margin: "0 0 16px 0", fontWeight: "700" } },
          { type: "TextBlock", props: { content: "Academy of Cryptography Techniques, 141 Chien Thang Road, Thanh Liet, Ha Noi, Viet Nam", fontSize: "16px", color: "#0b2740", textAlign: "center" } }
        ],
        "right-panel-content": [
          { type: "SectionHeading", props: { content: "Important Dates", level: 3, fontSize: "32px", fontStyle: "italic", color: "#0D1B2A", margin: "0 0 24px 0", textAlign: "left" } },
          { type: "Timeline", props: { items: [
            { date: "June 30, 2026", title: "Paper Submission Deadline", description: "", passed: false },
            { date: "July 31, 2026", title: "Notification of Acceptance", description: "", passed: false },
            { date: "September 25, 2026", title: "Camera-Ready Submission", description: "", passed: false },
            { date: "October 29–30, 2026", title: "Conference Dates", description: "", passed: false },
          ], accentColor: "#0EA5A0" } }
        ]
      }
    },
    {
      type: "HomeAbout",
      props: {},
      zones: {
        "about-left": [
          { type: "SectionHeading", props: { content: "ABOUT THE CONFERENCE", level: 6, fontSize: "12px", color: "#0EA5A0", margin: "0 0 16px 0", fontStyle: "normal" } },
          { type: "SectionHeading", props: { content: "Building the Future of Cryptographic Science", level: 2, fontSize: "40px", fontStyle: "italic", margin: "0 0 24px 0" } },
          { type: "TextBlock", props: { content: "VCRIS 2026 is organized by the Academy of Cryptography Techniques in collaboration with co-organizing institutions including the Vietnam Institute for Advanced Study in Mathematics (VIASM), the Vietnam Association of Faculties-Institutes-Schools-Universities of ICT (FISU VN), and the Information Security Journal (ISJ).", margin: "0 0 16px 0", color: "#64748B", lineHeight: "1.7" } },
          { type: "TextBlock", props: { content: "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.", margin: "0 0 24px 0", color: "#64748B", lineHeight: "1.7" } },
          { type: "ListBlock", props: { items: ["Post-Quantum Cryptography", "Blockchain & DLT", "AI Security", "Zero-Knowledge Proofs", "Digital Forensics"], ordered: false, color: "#0EA5A0" } }
        ],
        "about-stats": [
          { type: "SectionHeading", props: { content: "3rd<br><span style='font-size:14px; color:#64748B; font-weight:400; font-family:Syne'>Edition</span>", level: 3, fontSize: "42px", color: "#0EA5A0", textAlign: "center", fontStyle: "normal", margin: "16px 0" } },
          { type: "SectionHeading", props: { content: "2024<br><span style='font-size:14px; color:#64748B; font-weight:400; font-family:Syne'>Since</span>", level: 3, fontSize: "42px", color: "#0EA5A0", textAlign: "center", fontStyle: "normal", margin: "16px 0" } },
          { type: "SectionHeading", props: { content: "IEEE<br><span style='font-size:14px; color:#64748B; font-weight:400; font-family:Syne'>Indexed</span>", level: 3, fontSize: "42px", color: "#0EA5A0", textAlign: "center", fontStyle: "normal", margin: "16px 0" } }
        ]
      }
    },
    {
      type: "HomeCfa",
      props: {},
      zones: {
        "cfa-content": [
          { type: "SectionHeading", props: { content: "Your Research Belongs Here", level: 2, fontSize: "48px", fontStyle: "italic", color: "#FFFFFF", textAlign: "center", margin: "0 0 12px 0" } },
          { type: "TextBlock", props: { content: "IEEE-indexed proceedings · Double-blind peer review · International audience", fontSize: "16px", color: "#FFFFFF", textAlign: "center", margin: "0 0 24px 0" } },
          { type: "ButtonLink", props: { text: "Submit Paper via EasyChair", url: CONF.easyChairUrl, variant: "white", size: "large", align: "center" } }
        ]
      }
    }
  ]),

  // CALL FOR PAPERS
  createPage("call-for-papers", "Call for Papers", false, [
    { type: "TopImageHeader", props: { title: "Call for Papers", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "About the Conference", level: 2, fontSize: "36px", fontStyle: "italic", margin: "0 0 24px 0" } },
          { type: "TextBlock", props: { content: "The 3rd International Conference on Cryptography and Information Security (VCRIS 2026) will be held at the Academy of Cryptography Techniques, 141 Chien Thang Road, Thanh Liet, Hanoi, Vietnam.", margin: "0 0 16px 0", color: "#374151", lineHeight: "1.75" } },
          { type: "TextBlock", props: { content: "VCRIS 2026 aims to bring together researchers, practitioners, and industry experts to present and discuss the latest advances in cryptography, post-quantum security, systems security, and AI-driven cybersecurity.", margin: "0 0 16px 0", color: "#374151", lineHeight: "1.75" } },
          { type: "TextBlock", props: { content: "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies.", margin: "0 0 48px 0", color: "#374151", lineHeight: "1.75" } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "0 0 48px 0" } },
          { type: "SectionHeading", props: { content: "Conference Tracks", level: 2, fontSize: "36px", fontStyle: "italic", margin: "0 0 24px 0" } },
          ...cfaTracks.map(track => ({
            type: "AccordionBlock",
            props: {
              title: track.title,
              content: `<ul style="margin: 0; padding-left: 20px; line-height: 1.8">${track.topics.map(t => `<li>${t}</li>`).join("")}</ul>`
            }
          })),
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "48px 0" } },
          { type: "SectionHeading", props: { content: "Paper Submission", level: 2, fontSize: "28px", fontStyle: "italic", margin: "0 0 16px 0" } },
          { type: "NumberedList", props: { items: [
            { title: "Original Research", description: "Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere." },
            { title: "IEEE Format", description: "All submissions must follow the IEEE conference format at IEEE's website, be written in English, and should not exceed 6 pages." },
            { title: "Double-Blind Review", description: "Papers will be peer-reviewed using a double-blind review process by at least three members of the technical Program Committee." },
          ], accentColor: "#0EA5A0", bgColor: "#F0FDFD" } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "48px 0" } },
          { type: "SectionHeading", props: { content: "Publication", level: 2, fontSize: "28px", fontStyle: "italic", margin: "0 0 16px 0" } },
          { type: "AlertBox", props: { type: "info", title: "IEEE Xplore Publication", content: "Accepted papers that are presented at the conference will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore's scope and quality requirements." } },
          { type: "TextBlock", props: { content: "Several journal special issues related to VCRIS 2026 will be announced in due course.", color: "#374151", margin: "16px 0 48px 0" } },
          { type: "ButtonLink", props: { text: "🔗 Submit via EasyChair", url: CONF.easyChairUrl, variant: "primary", size: "large", align: "center" } }
        ]
      }
    }
  ]),

  // KEYNOTE SPEAKERS
  createPage("keynote-speakers", "Keynote Speakers", false, [
    { type: "TopImageHeader", props: { title: "Keynote Speakers", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FAFAFA", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Distinguished Speakers", level: 2, fontSize: "36px", fontStyle: "italic", textAlign: "center", margin: "0 0 12px 0" } },
          { type: "TextBlock", props: { content: "World-renowned experts sharing cutting-edge research and insights on cryptography and information security.", textAlign: "center", color: "#64748B", margin: "0 0 48px 0" } },
          { type: "PersonCard", props: {
            name: "Prof. Tanaka Kiyofumi",
            title: "Dean of Information Science | Director of Next-Generation Digital Infrastructure",
            affiliation: "Japan Advanced Institute of Science and Technology (JAIST), Japan",
            image: "https://vcris.org/wp-content/uploads/2025/04/keynote.png",
            bio: "Dr. Kiyofumi Tanaka is a Professor and Dean at JAIST, where he leads research into computer architecture and accelerator hardware. His work focuses on the intersection of high-performance computing and security, specifically developing reconfigurable FPGA-based architectures for cryptography.",
            layout: "horizontal",
            bgColor: "#FFFFFF"
          } },
          { type: "AlertBox", props: { type: "info", title: "More speakers coming soon", content: "Additional keynote speakers will be announced as the conference date approaches. Check back for updates." } }
        ]
      }
    }
  ]),

  // REGISTRATION
  createPage("registration", "Registration", false, [
    { type: "TopImageHeader", props: { title: "Registration", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Registration", level: 2, fontSize: "36px", fontStyle: "italic", textAlign: "center", margin: "0 0 12px 0" } },
          { type: "TextBlock", props: { content: "Join researchers, academics, and industry professionals at VCRIS 2026.", textAlign: "center", color: "#64748B", margin: "0 0 48px 0" } },
          { type: "AlertBox", props: { type: "info", title: "How to Register", content: "Registration is handled at the conference portal. After successful payment, please send proof to: vcris.act@gmail.com" } },
          { type: "SectionHeading", props: { content: "Registration Fees", level: 3, fontSize: "28px", fontStyle: "italic", margin: "32px 0 16px 0" } },
          { type: "AlertBox", props: { type: "warning", title: "Early Bird Deadline", content: "Early bird rates available until September 30, 2026. Register early to save on registration fees." } },
          { type: "TableBlock", props: {
            headers: ["Category", "Membership", "Registration Period", "Fee"],
            rows: registrationFees,
            headerBg: "#0b2740",
            headerColor: "#FFFFFF",
            borderColor: "#E4E8EE",
          } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "32px 0" } },
          { type: "SectionHeading", props: { content: "Included in Registration", level: 3, fontSize: "22px", fontStyle: "normal", margin: "0 0 16px 0" } },
          { type: "ListBlock", props: { items: [
            "Full access to all conference sessions and workshops",
            "Printed proceedings and conference bag",
            "Lunches, coffee breaks, and conference dinner",
            "Welcome reception on October 29",
            "Certificate of participation"
          ], ordered: false, color: "#374151" } },
          { type: "ButtonLink", props: { text: "Register Now →", url: "#", variant: "primary", size: "large", align: "center" } }
        ]
      }
    }
  ]),

  // ORGANIZING COMMITTEES
  createPage("organizing-committees", "Organizing Committees", false, [
    { type: "TopImageHeader", props: { title: "Organizing Committees", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Conference Organization", level: 2, fontSize: "36px", fontStyle: "italic", textAlign: "center", margin: "0 0 48px 0" } },
          { type: "AlertBox", props: { type: "info", title: "Organized by", content: "Academy of Cryptography Techniques (ACT) — in collaboration with VIASM, FISU VN, ISJ, with the endorsement of University of Lorraine (France), JAIST (Japan), and COSIC KU Leuven (Belgium)." } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "32px 0" } },
          ...organizingCommitteeGroups.map(group => ({
            type: "AccordionBlock",
            props: {
              title: group.role,
              content: `<table style="width:100%; border-collapse: collapse; font-family: Syne, sans-serif; font-size: 14px">
                <thead><tr style="background:#F0FDFD">
                  <th style="padding:8px 12px; text-align:left; border-bottom: 1px solid #E4E8EE">Name</th>
                  <th style="padding:8px 12px; text-align:left; border-bottom: 1px solid #E4E8EE">Affiliation</th>
                </tr></thead>
                <tbody>${group.members.map((m, i) => `
                  <tr style="background:${i % 2 === 0 ? '#FFFFFF' : '#FAFAFA'}">
                    <td style="padding:8px 12px; border-bottom:1px solid #F0EDE8; font-weight:${m.isChair ? '700' : '400'}">${m.name}${m.isChair ? ' <span style="color:#0EA5A0; font-size:12px">(Chair)</span>' : ''}</td>
                    <td style="padding:8px 12px; border-bottom:1px solid #F0EDE8; color:#64748B">${m.affiliation}</td>
                  </tr>`).join("")}
                </tbody></table>`
            }
          }))
        ]
      }
    }
  ]),

  // PROGRAM COMMITTEES
  createPage("program-committees", "Program Committees", false, [
    { type: "TopImageHeader", props: { title: "Program Committee", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Technical Program Committee", level: 2, fontSize: "36px", fontStyle: "italic", textAlign: "center", margin: "0 0 12px 0" } },
          { type: "TextBlock", props: { content: `Composed of ${programCommittee.length} distinguished researchers from leading institutions worldwide.`, textAlign: "center", color: "#64748B", margin: "0 0 48px 0" } },
          { type: "TableBlock", props: {
            headers: ["#", "Name", "Affiliation"],
            rows: programCommittee.map((p, i) => [String(i + 1), p.name, p.affiliation]),
            headerBg: "#0b2740",
            headerColor: "#FFFFFF",
            borderColor: "#E4E8EE",
          } }
        ]
      }
    }
  ]),

  // VENUE & TRAVEL
  createPage("venue", "Venue & Travel", false, [
    { type: "TopImageHeader", props: { title: "Venue & Travel", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Conference Venue", level: 2, fontSize: "36px", fontStyle: "italic", margin: "0 0 24px 0" } },
          { type: "Columns", props: { columns: 2, gap: "48px" }, zones: {
            "column-0": [
              { type: "IconTextRow", props: { icon: "🏛️", text: "Academy of Cryptography Techniques", subtext: "Main Venue" } },
              { type: "IconTextRow", props: { icon: "📍", text: "141 Chien Thang Road, Thanh Liet, Ha Noi, Viet Nam", subtext: "Address" } },
              { type: "IconTextRow", props: { icon: "📅", text: "October 29–30, 2026", subtext: "Conference Dates" } },
              { type: "IconTextRow", props: { icon: "✉️", text: CONF.contactEmail, subtext: "Contact" } },
            ],
            "column-1": [
              { type: "SectionHeading", props: { content: "Getting There", level: 3, fontSize: "22px", fontStyle: "italic", margin: "0 0 16px 0" } },
              { type: "NumberedList", props: { items: [
                { title: "From Airport", description: "~30 min taxi/Grab from Noi Bai International Airport (HAN)" },
                { title: "By Grab", description: "Grab app is available and highly recommended for convenience" },
                { title: "By Bus", description: "Bus routes 18, 34, 86 serve the area" },
              ], accentColor: "#0EA5A0", bgColor: "#F0FDFD" } }
            ]
          } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "48px 0" } },
          { type: "SectionHeading", props: { content: "Conference Hotel", level: 2, fontSize: "28px", fontStyle: "italic", margin: "0 0 16px 0" } },
          { type: "AlertBox", props: { type: "success", title: "Grand Plaza Hanoi", content: "117 Tran Duy Hung Street, Hanoi 100000, Vietnam. Estimated travel time: By Bus 10 min | By Car 10 min | Walking 25 min" } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "48px 0" } },
          { type: "SectionHeading", props: { content: "Location Map", level: 2, fontSize: "28px", fontStyle: "italic", margin: "0 0 24px 0" } },
          { type: "Map", props: { height: "480px" } }
        ]
      }
    }
  ]),

  // ACCOMMODATION
  createPage("accommodation", "Accommodation", false, [
    { type: "TopImageHeader", props: { title: "Accommodation", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Recommended Accommodation", level: 2, fontSize: "36px", fontStyle: "italic", textAlign: "center", margin: "0 0 12px 0" } },
          { type: "TextBlock", props: { content: "We recommend the following hotels near the conference venue in Hanoi, Vietnam.", textAlign: "center", color: "#64748B", margin: "0 0 48px 0" } },
          { type: "Columns", props: { columns: 2, gap: "32px" }, zones: {
            "column-0": [
              { type: "PricingCard", props: {
                plan: "Grand Plaza Hanoi Hotel",
                price: "★★★★★",
                currency: "",
                period: "Official Conference Hotel",
                features: [
                  "117 Tran Duy Hung Street, Hanoi",
                  "10 min to venue (bus/car)",
                  "Breakfast included",
                  "Conference rate available on request",
                  "www.grandplazahanoi.com"
                ],
                btnText: "Visit Website",
                btnUrl: "http://www.grandplazahanoi.com",
                highlighted: true,
                bgColor: "#FFFFFF",
                accentColor: "#0EA5A0"
              } }
            ],
            "column-1": [
              { type: "PricingCard", props: {
                plan: "Intercontinental Hanoi Westlake",
                price: "★★★★★",
                currency: "",
                period: "Premium Option",
                features: [
                  "5 Tu Hoa, Ha Noi",
                  "Overlooking West Lake",
                  "15-20 min to venue",
                  "Luxury amenities",
                  "hanoi.intercontinental.com"
                ],
                btnText: "Visit Website",
                btnUrl: "https://hanoi.intercontinental.com",
                highlighted: false,
                bgColor: "#FFFFFF",
                accentColor: "#0b2740"
              } }
            ]
          } },
          { type: "AlertBox", props: { type: "warning", title: "Book Early", content: "Hotel rooms near the venue fill up quickly. We recommend booking accommodation as soon as your registration is confirmed." } }
        ]
      }
    }
  ]),

  // PAPER SUBMISSION
  createPage("paper-submission", "Paper Submission", false, [
    { type: "TopImageHeader", props: { title: "Paper Submission", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Submission Guidelines", level: 2, fontSize: "36px", fontStyle: "italic", margin: "0 0 24px 0" } },
          { type: "AlertBox", props: { type: "info", title: "Submission System", content: "All papers must be submitted through EasyChair. Only electronic submissions in PDF format will be accepted." } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "32px 0" } },
          { type: "SectionHeading", props: { content: "Formatting Requirements", level: 3, fontSize: "24px", fontStyle: "italic", margin: "0 0 16px 0" } },
          { type: "NumberedList", props: { items: [
            { title: "IEEE Format", description: "Papers must use the IEEE double-column conference format. LaTeX and Word templates are available at IEEE.org." },
            { title: "Page Limit", description: "Manuscripts should not exceed 6 pages in IEEE conference format, including figures, tables, and references." },
            { title: "Language", description: "All papers must be written in English and must be original unpublished work." },
            { title: "Double-Blind Review", description: "Authors must remove all identifying info from manuscripts. Do not include names, affiliations, or acknowledgements in the submitted version." },
          ], accentColor: "#0EA5A0", bgColor: "#F0FDFD" } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "32px 0" } },
          { type: "SectionHeading", props: { content: "Downloads", level: 3, fontSize: "24px", fontStyle: "italic", margin: "0 0 16px 0" } },
          { type: "ListBlock", props: { items: ["IEEE Conference LaTeX Template", "IEEE Conference Word Template", "Camera-Ready Instructions (after acceptance)"], ordered: false, color: "#0EA5A0" } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "32px 0" } },
          { type: "ButtonLink", props: { text: "🔗 Submit via EasyChair", url: CONF.easyChairUrl, variant: "primary", size: "large", align: "center" } }
        ]
      }
    }
  ]),

  // CALL FOR WORKSHOPS
  createPage("call-for-workshops", "Call for Workshops", false, [
    { type: "TopImageHeader", props: { title: "Call for Workshops", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Workshop & Business Session", level: 2, fontSize: "36px", fontStyle: "italic", margin: "0 0 24px 0" } },
          { type: "TextBlock", props: { content: "The VCRIS conference will feature a workshop session for businesses. This will be a platform for businesses to introduce themselves and promote their products in the field of quantum science and technology, cryptography, and information security.", color: "#374151", lineHeight: "1.75", margin: "0 0 16px 0" } },
          { type: "AlertBox", props: { type: "info", title: "Detailed Workshop Info", content: "The detailed workshop program for VCRIS 2026 will be updated later. Please check back for more information." } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "32px 0" } },
          { type: "SectionHeading", props: { content: "Contact for Workshops", level: 3, fontSize: "24px", fontStyle: "italic", margin: "0 0 16px 0" } },
          { type: "PersonCard", props: { name: "Dr. Vu Thi Dao", title: "Workshop Coordinator", affiliation: "Institute of Research and Development Cooperation, Academy of Cryptography Techniques\n141 Chien Thang road, Thanh Liet, Hanoi, Vietnam\nCell: +84.982.151.982", image: "", bio: "", layout: "horizontal", bgColor: "#F0FDFD" } },
          { type: "PersonCard", props: { name: "Ms. Vuong Thi Hai Ha", title: "Secretary of VCRIS 2026", affiliation: "Cell Phone: +84.984.346.162", image: "", bio: "", layout: "horizontal", bgColor: "#F0FDFD" } }
        ]
      }
    }
  ]),

  // PROGRAM (TBD)
  createPage("program", "Conference Program", false, [
    { type: "TopImageHeader", props: { title: "Conference Program", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Conference Program", level: 2, fontSize: "36px", fontStyle: "italic", textAlign: "center", margin: "0 0 24px 0" } },
          { type: "AlertBox", props: { type: "info", title: "Coming Soon", content: "The detailed conference program will be published after the paper acceptance notification. Please check back in August 2026." } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "32px 0" } },
          { type: "SectionHeading", props: { content: "Conference Schedule Overview", level: 3, fontSize: "24px", fontStyle: "italic", margin: "0 0 16px 0" } },
          { type: "Timeline", props: { items: [
            { date: "October 29, 2026 — Morning", title: "Registration & Opening Ceremony", description: "Welcome reception with general chairs and keynote.", passed: false },
            { date: "October 29, 2026 — Afternoon", title: "Keynote Sessions + Paper Presentations", description: "Invited talks and accepted paper presentations (Track 1, 2).", passed: false },
            { date: "October 30, 2026 — Morning", title: "Technical Sessions (Track 3, 4, 5)", description: "Continued paper presentations and poster session.", passed: false },
            { date: "October 30, 2026 — Afternoon", title: "Panel Discussion & Closing", description: "Industry panel, awards, and conference closing ceremony.", passed: false },
          ], accentColor: "#0EA5A0" } }
        ]
      }
    }
  ]),

  // PREVIOUS CONFERENCES
  createPage("previous-conferences", "Previous Conferences", false, [
    { type: "TopImageHeader", props: { title: "Previous Conferences", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "VCRIS Conference History", level: 2, fontSize: "36px", fontStyle: "italic", textAlign: "center", margin: "0 0 12px 0" } },
          { type: "TextBlock", props: { content: "The VCRIS series unites the international cryptography and security community annually in Vietnam.", textAlign: "center", color: "#64748B", margin: "0 0 48px 0" } },
          { type: "Columns", props: { columns: 2, gap: "32px" }, zones: {
            "column-0": [
              { type: "StatCard", props: { number: "VCRIS 2025", label: "2nd Edition", icon: "🏆", color: "#0EA5A0", bgColor: "#F0FDFD", borderRadius: "12px" } },
              { type: "IconTextRow", props: { icon: "📅", text: "October 30–31, 2025", subtext: "Dates" } },
              { type: "IconTextRow", props: { icon: "📍", text: "Academy of Cryptography Techniques, Hanoi, Vietnam", subtext: "Location" } },
              { type: "ButtonLink", props: { text: "View VCRIS 2025 Archive", url: "https://vcris.org/previous-conferences/vcris2025/homepage/", variant: "secondary", align: "left" } }
            ],
            "column-1": [
              { type: "StatCard", props: { number: "VCRIS 2024", label: "1st Edition", icon: "🎯", color: "#0b2740", bgColor: "#F8F9FA", borderRadius: "12px" } },
              { type: "IconTextRow", props: { icon: "📅", text: "December 3–4, 2024", subtext: "Dates" } },
              { type: "IconTextRow", props: { icon: "📍", text: "Academy of Cryptography Techniques, Hanoi, Vietnam", subtext: "Location" } },
              { type: "ButtonLink", props: { text: "View VCRIS 2024 Archive", url: "https://vcris.org/previous-conferences/vcris2024/homepage/", variant: "secondary", align: "left" } }
            ]
          } }
        ]
      }
    }
  ]),

  // CAMERA-READY SUBMISSION
  createPage("camera-ready-submission", "Camera Ready Submission", false, [
    { type: "TopImageHeader", props: { title: "Camera-Ready Submission", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Camera-Ready Submission", level: 2, fontSize: "36px", fontStyle: "italic", margin: "0 0 24px 0" } },
          { type: "AlertBox", props: { type: "warning", title: "Deadline: September 25, 2026", content: "Camera-ready papers must be submitted by September 25, 2026. Late submissions cannot be included in the proceedings." } },
          { type: "Divider", props: { style: "solid", color: "#E4E8EE", margin: "32px 0" } },
          { type: "SectionHeading", props: { content: "Steps to Prepare Camera-Ready Paper", level: 3, fontSize: "24px", fontStyle: "italic", margin: "0 0 16px 0" } },
          { type: "NumberedList", props: { items: [
            { title: "Address Review Comments", description: "Carefully read all reviewer comments and revise your paper accordingly." },
            { title: "Format Check", description: "Ensure the paper follows IEEE format (max 6 pages). Use the provided template." },
            { title: "Embed Fonts", description: "All fonts must be embedded in the final PDF. Check using Adobe Acrobat or PDF analyzer." },
            { title: "IEEE Copyright Form", description: "Complete and submit the IEEE copyright transfer form as instructed in the acceptance email." },
            { title: "Upload to EasyChair", description: "Upload your final PDF and copyright form to EasyChair under your submission." },
          ], accentColor: "#0EA5A0", bgColor: "#F0FDFD" } },
          { type: "ButtonLink", props: { text: "🔗 Go to EasyChair", url: CONF.easyChairUrl, variant: "primary", size: "large", align: "center" } }
        ]
      }
    }
  ]),

  // INSTRUCTIONS FOR AUTHORS
  createPage("instructions-for-authors", "Instructions for Authors", false, [
    { type: "TopImageHeader", props: { title: "Instructions for Authors", bgImageUrl: "/images/lake.jpg", height: "360px" } },
    {
      type: "Section",
      props: { backgroundColor: "#FFFFFF", padding: "64px 24px", maxWidth: "1200px" },
      zones: {
        "content": [
          { type: "SectionHeading", props: { content: "Author Instructions", level: 2, fontSize: "36px", fontStyle: "italic", margin: "0 0 24px 0" } },
          {
            type: "TabsBlock",
            props: {
              tabs: [
                {
                  label: "Submission Guidelines",
                  content: `
                    <h3 style="font-family:Syne;margin:0 0 12px">Paper Requirements</h3>
                    <ul style="padding-left:20px;line-height:2;color:#374151">
                      <li>Original, unpublished work not under review elsewhere</li>
                      <li>Written in English</li>
                      <li>Maximum 6 pages in IEEE double-column format</li>
                      <li>Double-blind: remove all author identifying information</li>
                      <li>Submit as PDF only</li>
                    </ul>
                  `
                },
                {
                  label: "Formatting",
                  content: `
                    <h3 style="font-family:Syne;margin:0 0 12px">IEEE Format Guidelines</h3>
                    <ul style="padding-left:20px;line-height:2;color:#374151">
                      <li>Use official IEEE Conference templates (LaTeX or Word)</li>
                      <li>Font size: 10pt</li>
                      <li>Margins: 0.75in on all sides</li>
                      <li>All figures must be readable at print resolution</li>
                      <li>All fonts must be embedded in the PDF</li>
                    </ul>
                    <p style="margin-top:16px"><a href="https://www.ieee.org/conferences/publishing/templates.html" style="color:#0EA5A0;font-weight:600">Download IEEE Templates →</a></p>
                  `
                },
                {
                  label: "Presentation",
                  content: `
                    <h3 style="font-family:Syne;margin:0 0 12px">Presentation Requirements</h3>
                    <ul style="padding-left:20px;line-height:2;color:#374151">
                      <li>At least one author must register and present the paper</li>
                      <li>Oral presentations: 20 min + 5 min Q&A</li>
                      <li>Slides should be in 16:9 format</li>
                      <li>Bring your laptop or use the conference PC</li>
                      <li>Upload slides to the conference system 24h before your session</li>
                    </ul>
                  `
                }
              ],
              activeColor: "#0EA5A0"
            }
          },
          { type: "AlertBox", props: { type: "success", title: "Publication", content: "Accepted and presented papers will be published in the IEEE Xplore digital library, subject to IEEE Xplore quality requirements." } },
          { type: "ButtonLink", props: { text: "🔗 Submit Paper via EasyChair", url: CONF.easyChairUrl, variant: "primary", size: "large", align: "center" } }
        ]
      }
    }
  ]),
];

// ========================
// API PUSH LOGIC
// ========================
async function seed() {
  console.log("🔐 Logging in as admin...");
  try {
    const loginRes = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@vcris.org", password: "vcris2026admin" })
    });

    if (!loginRes.ok) {
      console.error("❌ Login failed:", await loginRes.text());
      process.exit(1);
    }

    const { token } = await loginRes.json();
    const headers = {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };

    let success = 0;
    let failed = 0;

    for (const page of pages) {
      process.stdout.write(`  📄 ${page.slug}... `);

      const res = await fetch(`${API_BASE}/pages/${page.slug}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({
          title: page.title,
          locale: "en",
          content: page.content,
          isPublished: true,
          isSystem: page.isSystem || false
        })
      });

      if (res.ok) {
        console.log(`✅`);
        success++;
      } else if (res.status === 404) {
        const createRes = await fetch(`${API_BASE}/pages`, {
          method: "POST",
          headers,
          body: JSON.stringify({
            slug: page.slug,
            title: page.title,
            locale: "en",
            content: page.content,
            isPublished: true,
            isSystem: page.isSystem || false
          })
        });
        if (createRes.ok) {
          console.log(`✅ (created)`);
          success++;
        } else {
          console.log(`❌ create failed: ${await createRes.text()}`);
          failed++;
        }
      } else {
        console.log(`❌ update failed: ${res.status}`);
        failed++;
      }
    }

    console.log(`\n🎉 Migration complete! ${success} succeeded, ${failed} failed.`);
  } catch (error) {
    console.error("💥 Seeding error:", error);
  }
}

seed();
