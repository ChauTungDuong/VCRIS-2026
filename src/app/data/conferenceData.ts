// ============================================================
// VCRIS 2025 — Real conference data extracted from vcris.org DB
// ============================================================

export const CONF = {
  name: "VCRIS 2025",
  fullName:
    "The 2nd International Conference on Cryptography and Information Security",
  edition: "2nd",
  dates: "October 30–31, 2025",
  dateStart: "2025-10-30T08:00:00",
  location: "Academy of Cryptography Techniques, Hanoi, Vietnam",
  address: "141 Chien Thang Road, Tan Trieu, Thanh Tri, Hanoi, Vietnam",
  easyChairUrl: "https://easychair.org/conferences/?conf=vcris2025",
  contactEmail: "vcris@actvn.edu.vn",
  website: "https://vcris.org",
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
    name: "Professor Tanaka Kiyofumi",
    role: "Professor",
    institution:
      "Japan Advanced Institute of Science and Technology (JAIST), Japan",
    image: "https://vcris.org/wp-content/uploads/2025/04/keynote.png",
    talk: "Keynote Talk – VCRIS 2025",
    bio: "Professor Tanaka Kiyofumi is affiliated with the Japan Advanced Institute of Science and Technology (JAIST). He is a leading expert in cryptography and information security with extensive research contributions recognized internationally.",
  },
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
    "International Association for Cryptologic Research (IACR)",
    "COSIC Research Group, KU Leuven, Belgium",
    "Ho Chi Minh City University of Technology (HCMUT), Vietnam",
    "Le Quy Don Technical University, Vietnam",
    "Vietnam National University, Hanoi (VNU-HN)",
  ],
};

export const callForPapersText = {
  intro: `Authors are invited to submit full papers presenting new research results related to cryptography, information security and their applications for either crypto track or security track. All submissions must describe original research that is not published or currently under review by another conference or journal.`,
  scope: `The VCRIS conference aims to foster an academic exchange environment and advance both fundamental and applied scientific research endeavors in Cryptography and Information Security, both within Vietnam and across the globe. Following the success of VCRIS 2024, the main theme of VCRIS 2025 is the application of cryptography and information security, with a new track of quantum science and technology.`,
  submissionGuidelines: [
    "Papers must be submitted via EasyChair on or before the specified due dates.",
    "All submitted papers must be original and not previously published or under review elsewhere.",
    "Submissions must be in PDF format using the IEEE conference templates.",
    "Papers are limited to 6–8 pages in IEEE double-column format.",
    "All submitted papers must be written in English.",
    "All fonts must be embedded; no password protection on PDF.",
    "Double-blind peer review — author identities must be anonymized.",
  ],
};

// Venue data
export const venue = {
  mainVenue: {
    name: "Academy of Cryptography Techniques",
    address: "141 Chien Thang Road, Tan Trieu, Thanh Tri, Hanoi, Vietnam",
    mapUrl:
      "https://maps.google.com/?q=Academy+of+Cryptography+Techniques+Hanoi+Vietnam",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.6765!2d105.8342!3d20.9654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0:0x0!2zMjDCsDU3JzU1LjQiTiAxMDXCsDUwJzAzLjEiRQ!5e0!3m2!1sen!2s!4v1234567890",
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
