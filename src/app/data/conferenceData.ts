// ============================================================
// VCRIS 2026 — Real conference data extracted from vcris.org DB
// ============================================================
export const CONF = {
  name: "VCRIS 2025",
  fullName:
    "The 2nd International Conference on Cryptography and Information Security",
  edition: "2nd",
  dates: "October 30–31, 2025",
  dateStart: "2025-10-30T08:00:00",
  location: "Academy of Cryptography Techniques, Hanoi, Vietnam",
  address: "141 Chien Thang Road, Thanh Liet, Ha Noi, Viet Nam",
  easyChairUrl: "https://easychair.org/conferences/?conf=vcris2025",
  contactEmail: "vcris@actvn.edu.vn",
  website: "https://vcris.org",
};

export const conferenceTracks = {
  track1: {
    title: "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.",
    label: "track 1",
    topic: [
      "Symmetric and asymmetric cryptography",
      "Cryptographic hash functions and digital signatures",
      "Cryptographic protocols and formal security proofs",
      "Provable security and complexity assumptions",
      "Random number generation and entropy sources",
      "Post-Quantum Cryptography (PQC)",
      "Lattice-based, code-based, multivariate cryptography",
      "Quantum-resistant primitives and migration strategies",
    ]
  },
  track2: {
    title: "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.",
    label: "track 2",
    topic: [
      "Cryptographic engineering and implementation security",
      "Side-channel attacks and countermeasures",
      "Secure hardware and trusted execution environments",
      "Zero-knowledge proofs and secure multiparty computation",
      "Blockchain and distributed ledger cryptography",
      "Privacy-enhancing technologies",
      "Information hiding and watermarking",
    ]
  },
  track3: {
    title: "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.",
    label: "track 3",
    topic: [
      "Network and wireless security",
      "IoT and edge security",
      "Cloud and distributed systems security",
      "Operating systems and virtualization security",
      "Database and storage security",
      "Web and mobile security",
      "5G/6G and next-generation network security",
    ]
  },
  track4: {
    title: "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.",
    label: "track 4",
    topic: [
      "AI and machine learning for cybersecurity",
      "Malware analysis and detection",
      "Intrusion detection and prevention systems",
      "Deepfake detection and media forensics",
      "Adversarial machine learning",
      "LLM applications in cybersecurity",
      "Automated vulnerability detection",
    ]
  },
  track5: {
    title: "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.",
    label: "track 5",
    topic: [
      "Quantum communication security",
      "Cyber-physical systems security",
      "Smart city and critical infrastructure protection",
      "Digital forensics and incident response",
      "Human-centric security and usable security",
      "Security economics and governance",
      "Privacy and data protection frameworks",
    ]
  }
}

export const home = {
  name: "VCRIS 2026",
  title: `<div class="transition-all duration-700 delay-150 opacity-100 translate-y-0">
    <h1 class="text-white leading-[1.1] mb-2" style="font-family: var(--font-display); font-size: 64px; font-style: italic; font-weight: 700;">
      The 3<sup>rd</sup> International Conference on
    </h1>
    <h1 class="leading-[1.1]" style="font-family: var(--font-display); font-size: 72px; font-style: italic; font-weight: 700;">
      <span class="text-white">Cryptography </span>
      <span class="text-cipher">&amp;</span>
      <span class="text-white"> Information Security</span>
    </h1>
  </div>`,
  time: "October 29 - 30, 2026",
  venue: "Academy of Cryptography Techniques, Hanoi, Vietnam",
  importantDates: {
    paperSubmissionDeadline: "June 30, 2026",
    notificationOfAcceptance: "June 31, 2026",
    cameraReadySubmission: "Septemper 25, 2026",
    conferenceDates: "October 29 - 30, 2026",
  },
  aboutTheConference: [
    "VCRIS 2026 is organized by the Academy of Cryptography Techniques in collaboration with co-organizing institutions including the Vietnam Institute for Advanced Study in Mathematics (VISAM), the Vietnam Association of Faculties- Institutes-Schools-Universities of ICT (FISU VN), the Information Security Journal (ISJ), with the endorsement of the University of Lorraine – France and the Japan Advanced Institute of Science and Technology – Japan, and the Computer Security and Industrial Cryptography group of KU Leuven – Belgium.",
    "VCRIS 2026 aims to bring together researchers, practitioners, and industry experts to present and discuss the latest advances in cryptography, post-quantum security, systems security, and AI-driven cybersecurity.",
    "The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.",
  ],
  conferenceTracks,
  paperSubmission: [
    "Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere.",
    "All submissions must follow the <a href='https://www.ieee.org/conferences/publishing/templates.html'>IEEE website</a>, be written in English, and should not exceed 6 pages.",
    "Papers will be peer-reviewed using a double-blind review process by at least three members of the technical Program Committee.",
  ],
  publication: [
    "Accepted papers that are presented at the conference will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements"
  ],
  whySubmitToVCRIS2026: [
    "International Technical Program Committee",
    "IEEE Xplore proceedings",
    "Strong focus on Post-Quantum Cryptography and AI Security",
    "Balanced coverage of theory and applied cybersecurity",
    "Networking opportunities with academia and industry",
  ],
  bottomOfHomepage: [
    `© Copyright 2026 The 3<sup>rd</sup> International Conference on Cryptography and Information Security (VCRIS 2026)`
  ]
};

export const importantDates = [
  {
    label: "Paper Submission Deadline",
    date: "July 25, 2025",
    passed: true,
    extended: true,
  },
  {
    label: "Notification of Acceptance",
    date: "September 01, 2025",
    passed: true,
  },
  {
    label: "Camera-Ready Submission",
    date: "September 20, 2025",
    passed: true,
  },
  {
    label: "Author Registration Deadline",
    date: "September 20, 2025",
    passed: true,
  },
  { label: "Conference", date: "October 30–31, 2025", passed: false },
];

export const topics = [
  "Post-Quantum Cryptography",
  "Blockchain & Distributed Ledger Technology",
  "AI/ML Security & Privacy",
  "Zero-Knowledge Proofs",
  "Homomorphic Encryption",
  "Quantum Science & Technology",
  "Cryptographic Protocols",
  "Network & Cloud Security",
  "Privacy-Preserving Technologies",
  "IoT & Embedded Security",
  "Digital Forensics & Cybercrime",
  "Hardware Security",
];

export const keynoteSpeakers = [
  {
    name: "PROF. TANAKA KIYOFUMI",
    role: "Dean of Information Science | Director of Next-Generation Digital Infrastructure",
    institution: "Japan Advanced Institute of Science and Technology (JAIST)",
    talk: "Challenges in High-Performance Cryptographic Hardware Design",
    image: "https://vcris.org/wp-content/uploads/2025/04/keynote.png",
    bio: "Dr. Kiyofumi Tanaka is a Professor and Dean at JAIST, where he leads research into computer architecture and accelerator hardware. With over 200 publications, his work focuses on the intersection of high-performance computing and security, specifically developing reconfigurable FPGA-based architectures for Elliptic Curve Cryptography and addressing the emerging hardware challenges of post-quantum cryptographic standards."
  },
  // {
  //   name: "PROF. TANAKA KIYOFUMI",
  //   role: "Professor",
  //   institution:
  //     "Japan Advanced Institute of Science and Technology (JAIST), Japan",
  //   image: "https://vcris.org/wp-content/uploads/2025/04/keynote.png",
  //   talk: "Keynote Talk – VCRIS 2025",
  //   bio: "Professor Tanaka Kiyofumi is affiliated with the Japan Advanced Institute of Science and Technology (JAIST). He is a leading expert in cryptography and information security with extensive research contributions recognized internationally.",
  // },
];

// VCRIS 2024 keynote speakers (for previous conference archive)
export const keynoteSpeakers2024 = [
  {
    name: "Prof. Edgar Weippl",
    role: "Professor of Security and Privacy",
    institution: "University of Vienna, Austria",
    image:
      "https://vcris.org/wp-content/uploads/2024/05/Edgar-Weippl-1-300x300-1.jpg",
    talk: "Security & Privacy Research",
    bio: "Prof. Edgar Weippl is a professor at the University of Vienna and a renowned researcher in cybersecurity. He has published extensively and leads major European security research projects.",
  },
];

export const organizers = {
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

export type CommitteePerson = {
  name: string;
  affiliation: string;
  isChair?: boolean;
};

export type CommitteeGroup = {
  role: string;
  members: CommitteePerson[];
};

export const organizingCommitteeGroups: CommitteeGroup[] = [
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
      { name: "Lam Thu Bui", affiliation: "ACT, Vietnam", isChair: true },
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
      { name: "Vu Thi Dao", affiliation: "ACT, Vietnam", isChair: true },
      { name: "Tran Thi Luong", affiliation: "ACT, Vietnam" },
      { name: "Dao Ba Anh", affiliation: "ACT, Vietnam" },
    ],
  },
];

export const callForPapersText = {
  about: [
    `The 3rd International Conference on Cryptography and Information Security (VCRIS 2026) will be held at the Academy of Cryptography Techniques, 141 Chien Thang Road, Thanh Liet, Hanoi, Vietnam.`,
    `VCRIS 2026 is organized by the Academy of Cryptography Techniques in collaboration with co-organizing institutions including the Vietnam Institute for Advanced Study in Mathematics (VISAM), the Vietnam Association of Faculties- Institutes-Schools-Universities of ICT (FISU VN), the Information Security Journal (ISJ), with the endorsement of the University of Lorraine – France and the Japan Advanced Institute of Science and Technology – Japan, and the Computer Security and Industrial Cryptography group of KU Leuven – Belgium.`,
    `VCRIS 2026 aims to bring together researchers, practitioners, and industry experts to present and discuss the latest advances in cryptography, post-quantum security, systems security, and AI-driven cybersecurity.`,
    `The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.`
  ],
  tracks: [
    {
      title: `Track 1: Theoretical and Post-Quantum Cryptography`,
      topics: [
        `Symmetric and asymmetric cryptography`,
        `Cryptographic hash functions and digital signatures`,
        `Cryptographic protocols and formal security proofs`,
        `Provable security and complexity assumptions`,
        `Random number generation and entropy sources`,
        `Post-Quantum Cryptography (PQC)`,
        `Lattice-based, code-based, multivariate cryptography`,
        `Quantum-resistant primitives and migration strategies`
      ]
    },
    {
      title: `Track 2: Applied Cryptography and Privacy`,
      topics: [
        `Cryptographic engineering and implementation security`,
        `Side-channel attacks and countermeasures`,
        `Secure hardware and trusted execution environments`,
        `Zero-knowledge proofs and secure multiparty computation`,
        `Blockchain and distributed ledger cryptography`,
        `Privacy-enhancing technologies`,
        `Information hiding and watermarking`
      ]
    },
    {
      title: `Track 3: Systems and Network Security`,
      topics: [
        `Network and wireless security`,
        `IoT and edge security`,
        `Cloud and distributed systems security`,
        `Operating systems and virtualization security`,
        `Database and storage security`,
        `Web and mobile security`,
        `5G/6G and next-generation network security`
      ]
    },
    {
      title: `Track 4: AI-driven Security and Threat Intelligence`,
      topics: [
        `AI and machine learning for cybersecurity`,
        `Malware analysis and detection`,
        `Intrusion detection and prevention systems`,
        `Deepfake detection and media forensics`,
        `Adversarial machine learning`,
        `LLM applications in cybersecurity`,
        `Automated vulnerability detection`
      ]
    },
    {
      title: `Track 5: Emerging Security Technologies`,
      topics: [
        `Quantum communication security`,
        `Cyber-physical systems security`,
        `Smart city and critical infrastructure protection`,
        `Digital forensics and incident response`,
        `Human-centric security and usable security`,
        `Security economics and governance`,
        `Privacy and data protection frameworks`
      ]
    }
  ],
  submissions: [
    `Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere.`,
    `All submissions must follow the IEEE conference format at IEEE’s website, be written in English, and should not exceed 6 pages.`,
    `Papers will be peer-reviewed using a double-blind review process by at least three members of the technical Program Committee.`
  ],
  publication: [
    `Accepted papers that are presented at the conference will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.`
  ],
  postConferencePublication: [
    `Several journal special issues related to VCRIS 2026 will be announced in due course.`
  ]
};

export const callForWorkshopsText = {
  intro: `The VCRIS conference will feature a workshop session for businesses. This will be a platform for businesses to introduce themselves and promote their products in the field of quantum science and technology, cryptography, and information security to the participating agencies, organizations, and scientists attending the conference.`,
  details: `The detailed workshop for VCRIS 2026 will be updated later.`,
  contact: [
    {
      name: `Dr. Vu Thi Dao`,
      descriptions: [
        `Institute of Research and Development Cooperation, Academy of Cryptography Techniques`,
        `141 Chien Thang road, Thanh Liet, Hanoi, Vietnam`,
        `Cell Phone: +84.982.151.982`
      ]
    },
    {
      name: `Ms Vuong Thi Hai Ha`,
      descriptions: [
        `Secretary of VCRIS 2026`,
        `Cell Phone: +84.984.346.162`
      ]
    }
  ]
};

// Venue data
export const venue = {
  mainVenue: {
    name: "Academy of Cryptography Techniques",
    address: "141 Chien Thang Road, Thanh Liet, Ha Noi, Viet Nam",
    mapUrl:
      "https://maps.google.com/?q=Academy+of+Cryptography+Techniques+Hanoi+Vietnam",
    mapEmbed:
      "https://maps.google.com/maps?q=141%20Chi%E1%BA%BFn%20Th%E1%BA%AFng,%20T%C3%A2n%20Tri%E1%BB%81u,%20Thanh%20Tr%C3%AC,%20H%C3%A0%20N%E1%BB%99i,%20Vi%E1%BB%87t%20Nam&t=m&z=15&output=embed&iwloc=near",
  },
  conferenceHotel: {
    name: "Grand Plaza Hanoi Hotel",
    address: "117 Tran Duy Hung Street, Hanoi 100000, Vietnam",
    note: "Estimated time from conference venue: By Bus: 10 min | By Car: 10 min | Walking: 25 min",
  },
  transport: {
    fromAirport: "~30 min taxi/Grab from Noi Bai International Airport (HAN)",
    byTaxi: "Grab app available — recommended",
    byBus: "Bus routes 18, 34, 86",
  },
};

// Previous conferences
export const previousConferences = [
  {
    year: "2024",
    name: "VCRIS 2024",
    edition: "1st",
    dates: "December 3–4, 2024",
    location: "Academy of Cryptography Techniques, Hanoi, Vietnam",
    wpUrl: "https://vcris.org/previous-conferences/vcris2024/",
  },
];

// Stats (real-world references from site)
export const stats = [
  { number: "2nd", label: "Edition" },
  { number: "IEEE", label: "Indexed Proceedings" },
  { number: "2023", label: "Established" },
  { number: "Hybrid", label: "Format" },
];

export const heroStats = [
  { number: "200+", label: "Attendees" },
  { number: "20+", label: "Countries" },
  { number: "60+", label: "Submitted Papers" },
  { number: "IEEE", label: "Indexed Proceedings" },
];

export const programCommittee = [
  { firstName: "Anh", lastName: "Phan", affiliation: "Le Quy Don Technical University, Vietnam" },
  { firstName: "Anh-Tien", lastName: "Le", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Atah Nuh", lastName: "Mih", affiliation: "University of New Brunswick, Canada" },
  { firstName: "Ba Anh", lastName: "Dao", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Bagus", lastName: "Santoso", affiliation: "The University of Electro-Communications, Japan" },
  { firstName: "Bui Cuong", lastName: "Nguyen", affiliation: "Vietnam Government Information Security Commission, Vietnam" },
  { firstName: "Chung Tien", lastName: "Nguyen", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Cong", lastName: "Nguyen-Duc", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Cong-Kha", lastName: "Pham", affiliation: "The University of Electro-Communications, Japan" },
  { firstName: "Cuong", lastName: "Nguyen", affiliation: "Le Quy Don Technical University, Vietnam" },
  { firstName: "Dai Tho", lastName: "Nguyen", affiliation: "Vietnam National University, Hanoi, Vietnam" },
  { firstName: "Dat", lastName: "Tran", affiliation: "University of Canberra, Australia" },
  { firstName: "Dat-Thinh", lastName: "Nguyen", affiliation: "University College Dublin, Ireland" },
  { firstName: "Dung Hoang", lastName: "Duong", affiliation: "University of Wollongong, Australia" },
  { firstName: "Eiichiro", lastName: "Fujisaki", affiliation: "Japan Advanced Institute of Science and Technology, Japan" },
  { firstName: "Frederik", lastName: "Vercauteren", affiliation: "COSIC, KU Leuven, Belgium" },
  { firstName: "Hieu-Minh", lastName: "Nguyen", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Hoa", lastName: "Nguyen Ngoc", affiliation: "VNU University of Engineering and Technology, Vietnam" },
  { firstName: "Hoai An", lastName: "Le Thi", affiliation: "LITA EA 3097 UFR MIM Université de Lorraine, France" },
  { firstName: "Hung", lastName: "Nguyen-Viet", affiliation: "Le Quy Don Technical University, Vietnam" },
  { firstName: "Hung", lastName: "Cao", affiliation: "University of New Brunswick, Canada" },
  { firstName: "Hung", lastName: "Nguyen", affiliation: "Key Lab in Information Security, Vietnam" },
  { firstName: "Huy Quoc", lastName: "Le", affiliation: "Tan Tao University, Vietnam" },
  { firstName: "Ik Rae", lastName: "Jeong", affiliation: "Korea University, South Korea" },
  { firstName: "Jean-Yves", lastName: "Marion", affiliation: "Université de Lorraine, LORIA, France" },
  { firstName: "Joan", lastName: "Daemen", affiliation: "DiS, Radboud University, The Netherlands" },
  { firstName: "Junbeom", lastName: "Hur", affiliation: "Korea University, South Korea" },
  { firstName: "Khai Hanh", lastName: "Tang", affiliation: "Nanyang Technological University, Singapore" },
  { firstName: "Khanh", lastName: "Nguyen", affiliation: "University of Wollongong, Australia" },
  { firstName: "Khoa", lastName: "Nguyen", affiliation: "University of Wollongong, Australia" },
  { firstName: "Kwangjo", lastName: "Kim", affiliation: "Korea Advanced Institute of Science and Technology, South Korea" },
  { firstName: "Lam Thu", lastName: "Bui", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Lejla", lastName: "Batina", affiliation: "DiS, Radboud University, The Netherlands" },
  { firstName: "Le-Minh", lastName: "Nguyen", affiliation: "Japan Advanced Institute of Science and Technology, Japan" },
  { firstName: "Luc", lastName: "Quynh", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Luong", lastName: "Tran", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Minh Tuan", lastName: "Dang", affiliation: "Posts and Telecommunications Institute of Technology, Vietnam" },
  { firstName: "Mizuhito", lastName: "Ogawa", affiliation: "Old Teachers Network, Japan" },
  { firstName: "Ngo", lastName: "Tran", affiliation: "Florida Atlantic University, USA" },
  { firstName: "Ngoc Khanh", lastName: "Nguyen", affiliation: "King's College London, England" },
  { firstName: "Ngoc-Quy", lastName: "Tran", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Nhien-An", lastName: "Le-Khac", affiliation: "University College Dublin, Ireland" },
  { firstName: "Ni", lastName: "Trieu", affiliation: "Arizona State University, USA" },
  { firstName: "Nikolay", lastName: "Moldovyan", affiliation: "St. Petersburg Institute for Informatics and Automation of the Russian Academy of Sciences, Russia" },
  { firstName: "Pablo", lastName: "Freyre-Arrozarena", affiliation: "Institute of Cryptography, University of Havana, Cuba" },
  { firstName: "Pham Van", lastName: "Huong", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Phuong Hoa", lastName: "Nguyen", affiliation: "Rennes University, France" },
  { firstName: "Quang Duc", lastName: "Tran", affiliation: "Hanoi University of Science and Technology, Vietnam" },
  { firstName: "Quang Uy", lastName: "Nguyen", affiliation: "Le Quy Don Technical University, Vietnam" },
  { firstName: "Quang-Kien", lastName: "Trinh", affiliation: "Le Quy Don Technical University, Vietnam" },
  { firstName: "Quoc Hung", lastName: "Nguyen", affiliation: "VNU University of Science, Vietnam" },
  { firstName: "Quoc-Huy", lastName: "Vu", affiliation: "Pôle Universitaire Léonard de Vinci, France" },
  { firstName: "Rene", lastName: "Richard", affiliation: "National Research Council, Canada" },
  { firstName: "Rossy Nhung", lastName: "Nguyen", affiliation: "Quanova, Vietnam" },
  { firstName: "Serge", lastName: "Vaudenay", affiliation: "Ecole Polytechnique Fédérale de Lausanne, Switzerland" },
  { firstName: "Seyed Alireza Rahimi", lastName: "Azghadi", affiliation: "University of New Brunswick, Canada" },
  { firstName: "Sihem", lastName: "Mesnager", affiliation: "The University of Paris VIII, France" },
  { firstName: "Stjepan", lastName: "Picek", affiliation: "DiS, Radboud University, The Netherlands" },
  { firstName: "Sylvain", lastName: "Guilley", affiliation: "GET/ENST, CNRS/LTCI, France" },
  { firstName: "Thang", lastName: "Hoang", affiliation: "Virginia Tech, USA" },
  { firstName: "Thang", lastName: "Nguyen", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Thanh Binh", lastName: "Huynh Thi", affiliation: "Hanoi University of Science and Technology, Vietnam" },
  { firstName: "Thi Dao", lastName: "Vu", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Tho", lastName: "Mai", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Tho", lastName: "Hoang-Duc", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Tien", lastName: "Dinh", affiliation: "Vietnam Government Information Security Commission, Vietnam" },
  { firstName: "Tim", lastName: "Beyne", affiliation: "COSIC, KU Leuven, Belgium" },
  { firstName: "Trong-Thuc", lastName: "Hoang", affiliation: "The University of Electro-Communications, Japan" },
  { firstName: "Trung", lastName: "Pham", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Trung", lastName: "Do Quang", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Truong", lastName: "Nguyen-Dao", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { firstName: "Truong Thanh Hung", lastName: "Nguyen", affiliation: "University of New Brunswick, Canada" },
  { firstName: "Viet Cuong", lastName: "Trinh", affiliation: "Hong Duc University, Vietnam" },
  { firstName: "Viet Xuan Phuong", lastName: "Tran", affiliation: "University of Arkansas at Little Rock, USA" },
  { firstName: "Vincent", lastName: "Rijmen", affiliation: "KU Leuven, ESAT/COSIC, Belgium" },
  { firstName: "Xuan-Thanh", lastName: "Do", affiliation: "University of Limoges, France" },
  { firstName: "Xuan-Tu", lastName: "Tran", affiliation: "The Information Technology Institute – Vietnam National University, Vietnam" },
  { firstName: "Yan", lastName: "Ren", affiliation: "Nanyang Technological University, Singapore" },
  { firstName: "Yingfei", lastName: "Yan", affiliation: "Nanyang Technological University, Singapore" },
];
