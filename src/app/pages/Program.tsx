import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────────────

type Paper = {
  id: number;
  authors: string;
  title: string;
  isOnline?: boolean;
};

type SessionRow = Paper | { coffeeBreak: string };

type Session = {
  name: string;
  room: string;
  chair: string;
  format: string;
  rows: SessionRow[];
};

type Block =
  | { kind: "timeslot"; time: string; label: string }
  | { kind: "venue"; text: string }
  | { kind: "infobox"; items: { label: string; text: string }[] }
  | { kind: "keynote"; speaker: string; topic: string; chair: string }
  | { kind: "break"; label: string }
  | { kind: "heading"; text: string }
  | { kind: "parallel"; sessions: Session[] }
  | { kind: "closing"; items: { label: string; text: string }[] };

function isCoffeeBreak(row: SessionRow): row is { coffeeBreak: string } {
  return "coffeeBreak" in row;
}

// ── Day 1 Data ─────────────────────────────────────────────────────────────

const day1: Block[] = [
  { kind: "timeslot", time: "08:00 – 08:30", label: "Registration and Welcome Coffee" },
  { kind: "venue", text: "Venue: Meeting hall" },
  { kind: "timeslot", time: "08:30 – 08:50", label: "Opening Ceremony (Meeting hall)" },
  {
    kind: "infobox",
    items: [
      { label: "Opening speech", text: "by the host organization (ACT) leader and the conference general chair." },
      { label: "Welcome address", text: "by the representative of the co-organizing institution (optional)." },
      { label: "PC Chair's scientific report", text: "of VCRIS 2025" },
    ],
  },
  { kind: "timeslot", time: "08:50 – 09:35", label: "Keynote Session 1 (Meeting hall)" },
  {
    kind: "keynote",
    speaker: "Dr. Wouter Castryck, Research group COSIC, KU Leuven",
    topic: "Isogeny-based cryptography: an overview of the current landscape",
    chair: "Prof. Mizuhito Ogawa",
  },
  { kind: "timeslot", time: "09:35 – 10:20", label: "Keynote Session 2 (Meeting hall)" },
  {
    kind: "keynote",
    speaker: "Professor Tanaka Kiyofumi, JAIST, Japan",
    topic: "Challenges in High-Performance Cryptographic Hardware Design",
    chair: "Prof. Hoang Xuan Dau (PTIT)",
  },
  { kind: "break", label: "10:20 – 10:35 · Group Photo & Coffee Break" },
  { kind: "timeslot", time: "10:35 – 11:55", label: "Scientific Paper Presentations (Parallel Sessions)" },
  {
    kind: "parallel",
    sessions: [
      {
        name: "Session 1",
        room: "Meeting hall",
        chair: "Dr. Florian Caullery (TII), Dr. Hoang Tuan Hao (LQDTU)",
        format: "4 full papers · 20 minutes per presentation",
        rows: [
          { id: 60, authors: "Florian Caullery", title: "A PQC Engine You Didn't Know You Had: Exploring DSP for Cryptographic Acceleration" },
          { id: 31, authors: "Van Nghi Nguyen, Minh Thang Vu, Thi Hanh Tran, Hai Nam Ngo, Ba Linh Vu and Van Duan Nguyen", title: 'Implementation of the BHT quantum algorithm for finding collisions of a lightweight hash function on IBM "Sherbrooke" via Qiskit' },
          { id: 34, authors: "Hoang Tuong and Hoang Thuc", title: "Threshold-Based Entity Authentication for PKCS#11: A Cryptographic Protocol Using Shamir's Secret Sharing" },
          { id: 25, authors: "Rajan Datt, Dhiraj Singh, Ayush Goyal, Tejas Singh, Rajesh Gupta, Dr. Sudeep Tanwar and Anand Nayyar", title: "Q-SafeAV: Quantum-enabled Secure Intra-Sensor Communication Framework for Avs", isOnline: true },
        ],
      },
      {
        name: "Session 2",
        room: "Room 2.1",
        chair: "Dr. Mai Duc Tho (ACT), Prof. Hoang Xuan Dau (PTIT)",
        format: "5 full papers · 20 minutes per presentation",
        rows: [
          { id: 17, authors: "Dang Phan Hai, Hung Nguyen Trong, Khanh Huynh Ngoc and Duc-Tho Mai", title: "DefacementFusion: A Robust Multi-Modal Defacement Detection" },
          { id: 66, authors: "Hanh Du Phuong, Minh Tran Quang, Tuyen Nguyen Thanh and Hoa Nguyen Ngoc", title: "Multi-Layer Defense for AI-powered IDS: Ensemble Adversarial Training and Explainable Resilience to Evasion Attacks" },
          { id: 69, authors: "Dai Bui and Tuan-Dung Tran", title: "Beyond Robustness: On the Unforgeability Trade-offs in Statistical DNN Watermarking" },
          { id: 48, authors: "Le Quoc Ngo, Tran Tien Nhat, Quyen Nguyen Huu, Van-Hau Pham and The Duy Phan", title: "UniFuzz: A Unified Fuzzing Framework for Smart Contract Vulnerability Detection with LLMs and Audit Reports" },
          { id: 29, authors: "Nguyen Thanh Hai and Ta Minh Thanh", title: "Robust Image Watermarking Algorithm Integrating QR and Singular Value Decomposition in the Discrete Wavelet Transform Domain" },
        ],
      },
    ],
  },
  { kind: "break", label: "12:15 – 14:00 · Lunch Break" },
  { kind: "heading", text: "Afternoon Sessions" },
  { kind: "timeslot", time: "14:00 – 17:00", label: "Scientific Paper Presentations (Parallel Sessions)" },
  {
    kind: "parallel",
    sessions: [
      {
        name: "Session 3",
        room: "Meeting hall",
        chair: "Dr. Cao Van Loi (LQDTU), Prof. Do Xuan Cho (PTIT)",
        format: "6 full papers · 20 minutes per presentation",
        rows: [
          { id: 64, authors: "Manh Tuan Nguyen, Trang Dang Le Dinh and Van Loi Cao", title: "Cross-System Few-shot Log Anomaly Detection with Transformer-based Supervised Autoencoder and Data Augmentation" },
          { id: 59, authors: "Dinh Le Thanh Cong, Ho Hoang Diep, Hoang Khoa Nghi, Hien Do Thi Thu and The Duy Phan", title: "Multimodal Fusion of Behavior Graphs and API Sequences for Ransomware Detection" },
          { coffeeBreak: "15:00 – 15:30 · Coffee Break" },
          { id: 33, authors: "Trong Binh Hoang and Van Linh Dinh", title: "Intrusion Detection in IoT Networks using a Hybrid Quantum-Classical Graph Neural Network" },
          { id: 54, authors: "Trung Pham Duy, Ho Truong Phi, Khanh Do Duy and Hai Nguyen Nhat", title: "DBA: A Novel Diffusion-Based Method for Adversarial Defense via Image Restoration" },
          { id: 67, authors: "Ngoc-Giau Pham, Khac-Hoang Nguyen, Hong-Ngoc Tran and Phuoc-Hung Vo", title: "Multi-Scale Attention-Enhanced Block-Based Steganography: A Comprehensive Analysis of Capacity-Quality Trade-offs" },
          { id: 44, authors: "Thuan Le Duc, Thanh Nguyen Van and Huong Pham Van", title: "Android Malware Classification Based on Graph Features and Deep Learning Models" },
        ],
      },
      {
        name: "Session 4",
        room: "Room 2.1",
        chair: "Prof. Ta Minh Thanh, Dr. Dao Ba Anh (ACT)",
        format: "5 full papers · 20 minutes per presentation",
        rows: [
          { id: 43, authors: "Dinh Khanh Linh, Nguyen Long Giang, Nguyen Hieu Minh, Do Thi Bac, A. Alexandr Moldovyan, N. Dmitriy Moldovyan and A. Kostina Anna", title: "Post-Quantum Signature Algorithm on Finite Matrix Algebras, Using Three Hidden Groups" },
          { id: 65, authors: "Ba Anh Dao, Dinh-Hung Le and Ngoc-Quynh Nguyen", title: "FPGA Implementation of Kuznyechik Block Cipher with Improved Resource Efficiency" },
          { coffeeBreak: "14:40 – 15:30 · Coffee Break" },
          { id: 15, authors: "Phetphachan Thammasith, Nguyen Trung Hieu and Nguyen Hieu Minh", title: "Optimizing Secure Network Coding: A Comparative Analysis of Hybrid Cryptosystems with Relay Enhanced Topology" },
          { id: 6, authors: "Van Linh Dinh, Phuong Thao Hoang Thi and Van Yem Vu", title: "Turbo Codes-based Physical Layer Security Method Against Passive Eavesdropping Attacks For MIMO Wireless Communication Systems" },
          { id: 23, authors: "Stephanie Shinn and Sena Hounsinou", title: "CRYSTALS-Kyber KEM Decapsulation with Single-Point Pseudo-Random Cache Flushing" },
        ],
      },
    ],
  },
  { kind: "timeslot", time: "17:00", label: "Transport to Gala Dinner venue" },
  { kind: "timeslot", time: "17:30", label: "Gala Dinner" },
];

// ── Day 2 Data ─────────────────────────────────────────────────────────────

const day2: Block[] = [
  { kind: "timeslot", time: "08:30 – 09:15", label: "Keynote Session 3 (Meeting hall)" },
  {
    kind: "keynote",
    speaker: "Dr. Florian Caullery, Cryptographer at the Technology Innovation Institute (TII), Abu Dhabi, UAE",
    topic: "One Chip, Many Engines: Accelerating and Securing cryptographic algorithms on modern SoCs",
    chair: "Professor Tanaka Kiyofumi",
  },
  { kind: "break", label: "09:15 – 09:30 · Coffee Break" },
  { kind: "timeslot", time: "09:30 – 11:35", label: "Scientific Paper Presentations (Parallel Sessions)" },
  {
    kind: "parallel",
    sessions: [
      {
        name: "Session 5",
        room: "Meeting hall",
        chair: "Dr. Tran Thi Luong (ACT), Dr. Mai Duc Tho (ACT)",
        format: "6 full papers · 20 minutes per presentation",
        rows: [
          { id: 12, authors: "Thanh Tra Ung, Cong Thanh Nguyen, Duy Le Tan, Duy Trung Pham and Thu Lam Bui", title: "A Hybrid Balancing Method for IDS Datasets Using CTGAN + KMeans" },
          { id: 14, authors: "Anh Tu Tran and Thi Hong Ha Nguyen", title: "SecPATE: A Novel Approach for Aggregation of Teacher Ensembles with Secure Multi-Party Computation" },
          { id: 63, authors: "Tuan-Dung Tran, Dinh Khang Nguyen, Quang Trung Do and Van-Hau Pham", title: "VeriBridge: Real-Time Cross-Chain Bridge Attack Detection through Static-Informed Graph Anomaly Learning" },
          { id: 10, authors: "Quang-Minh Luu and Hong-Ngoc Tran", title: "Hardening DLT-Daemon against TOCTOU Vulnerabilities: A Study on Atomic Mutex Locking for Critical State Resilience" },
          { id: 68, authors: "Yen Pham Thi, Thanh Ta Minh and Minh Nguyen Hieu", title: "Novel Blind Colour Image Watermarking Technique Using Schur Decomposition" },
          { id: 7, authors: "Ngoc An Le, Xuan Dau Hoang and Thi Thu Trang Ninh", title: "A Multimodal Model for Detecting Vietnamese Toxic News Using Semi-supervised Learning" },
        ],
      },
      {
        name: "Session 6",
        room: "Room 2.1",
        chair: "Dr. Nguyen Thi Tuyet Trinh (ACT), Dr. Nguyen Bui Cuong",
        format: "5 full papers · 20 minutes per presentation",
        rows: [
          { id: 61, authors: "Dang The Hung and Nguyen Hieu Minh", title: "Reliability and Security Analysis of Power Beacon Based Half-Duplex Relaying System With Hardware Impairments" },
          { id: 55, authors: "Thanh Phong Nguyen, Tan Cam Nguyen, Van Than Huynh, Tan Nguyen and Hieu Minh Nguyen", title: "Improved Neural Distinguisher for PRESENT-80 using Inception and Efficient Channel Attention in Related-Key Multi-Pair Setting" },
          { id: 57, authors: "Nga Tran Thi, Thanh-Tung Nguyen, Duc-Cong Nguyen, Van-Hung Dinh and Duc-Tho Mai", title: "Blockchain-Integrated 5G Authentication: A ProVerif Formal Analysis Approach" },
          { id: 49, authors: "Tran Ngoc Quy, Nguyen Nhu Chien and Le Thi Ninh", title: "Adversarial Noise Injection for Side-Channel Resistance" },
          { id: 56, authors: "Phuong Truong Minh, Thuc Hoang Van, Luong Tran Thi and Duyet Bui Nhat", title: "A Method For Dynamically Modifying Component Transformations in The AES Block Cipher Applied To Image Data Encryption" },
        ],
      },
    ],
  },
  { kind: "break", label: "11:35 – 14:00 · Lunch Break" },
  { kind: "heading", text: "Afternoon Sessions" },
  { kind: "timeslot", time: "14:00 – 15:20", label: "Scientific Paper Presentations" },
  {
    kind: "parallel",
    sessions: [
      {
        name: "Session 7 — Short Papers",
        room: "Meeting hall",
        chair: "Dr. Tran Anh Tu (ACT), Dr. Tran Ngoc Quy (ACT)",
        format: "4 papers · 15 minutes per presentation",
        rows: [
          { id: 20, authors: "Ha Hai Pham, Duc Chinh Bui, Ngoc Vinh Hao Nguyen, Hai Le, Tien Dinh and Viet Manh Nguyen", title: "Side-Channel Attack on XOR Operation in the First Round of AES Implementation on STM32 Microcontroller Board" },
          { id: 52, authors: "Linh Nguyen Thi Thuy, Thanh-Ngoc Nguyen, Trinh Bui Duc and Duc-Tho Mai", title: "RTL Design and Implementation of the TWINE-80 Lightweight Block Cipher" },
          { id: 26, authors: "Linh Hoang Dinh, Luong Tran and Long Nguyen Van", title: "BLOCKTAIL: A Large-Size and Efficiently Implemented Bit-Oriented Design for Block Ciphers and Permutations" },
          { id: 5, authors: "Liang Xia", title: "Algorithm for prime factorization of large integer in polynomial time" },
        ],
      },
      {
        name: "Session 8 — Short Papers",
        room: "Room 2.1",
        chair: "Dr. Le Anh Tien (ACT), Dr. Hoang Duc Tho (ACT)",
        format: "4 papers · 15 minutes per presentation",
        rows: [
          { id: 9, authors: "Quang-Minh Tran, Tuan Cuong Nguyen and Hong-Ngoc Tran", title: "Stochastic Updating in Federated Learning" },
          { id: 47, authors: "Ngoc-Van-Khanh Duong and Thai-Son Nguyen", title: "Reversible data hiding in encrypted images using two-pass improved pixel value ordering on high-bit segments" },
          { id: 40, authors: "Nin Ho Le Viet, Hoang Duc Tho, Nguyen Kim Tuan and Tong Minh Duc", title: "Detecting Source Code Vulnerabilities Across Programming Languages Using Traditional Machine Learning: A Transfer Learning Based and Language Independent Approach" },
          { id: 28, authors: "Phuong-Nam Nguyen", title: "A Model of Quantum Tunneling with Knots and Braid Operators" },
        ],
      },
    ],
  },
  { kind: "timeslot", time: "15:20 – 15:30", label: "Closing Ceremony" },
  {
    kind: "closing",
    items: [
      { label: "Summary", text: "of key discussions and outcomes." },
      { label: "Closing remarks", text: "by the organizing committee." },
    ],
  },
];

// ── Sub-components ─────────────────────────────────────────────────────────

function SessionCard({ session }: { session: Session }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-rule bg-white shadow-sm">
      {/* Header */}
      <div className="px-6 py-5 border-b border-rule flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <h3
              className="text-[17px] font-bold text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {session.name}
            </h3>
            <span
              className="px-2.5 py-0.5 rounded-full bg-cipher/10 text-cipher text-[11px] font-semibold"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {session.room}
            </span>
          </div>
          <p
            className="text-[13px] text-slate"
            style={{ fontFamily: "var(--font-body)" }}
          >
            <span className="font-medium text-ink">Chair:</span> {session.chair}
          </p>
        </div>
        <span
          className="text-[12px] text-slate bg-warm border border-rule px-3 py-1 rounded-full whitespace-nowrap"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {session.format}
        </span>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className="bg-warm border-b border-rule text-left">
            <th
              className="px-5 py-3 text-[11px] font-semibold text-slate uppercase tracking-[1.5px] w-16 text-center"
              style={{ fontFamily: "var(--font-body)" }}
            >
              #
            </th>
            <th
              className="px-5 py-3 text-[11px] font-semibold text-slate uppercase tracking-[1.5px] w-[32%]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Authors
            </th>
            <th
              className="px-5 py-3 text-[11px] font-semibold text-slate uppercase tracking-[1.5px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Title
            </th>
          </tr>
        </thead>
        <tbody>
          {session.rows.map((row, idx) => {
            if (isCoffeeBreak(row)) {
              return (
                <tr key={`cb-${idx}`} className="border-t border-rule">
                  <td
                    colSpan={3}
                    className="py-3 text-center text-[13px] font-medium text-slate bg-warm"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    ☕ {row.coffeeBreak}
                  </td>
                </tr>
              );
            }
            return (
              <tr
                key={row.id}
                className="border-t border-rule hover:bg-cipher/5 transition-colors"
              >
                <td className="px-5 py-4 text-center align-top">
                  <span
                    className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-warm border border-rule text-[12px] font-bold text-slate"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {row.id}
                  </span>
                </td>
                <td
                  className="px-5 py-4 text-[13px] text-slate align-top leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {row.authors}
                </td>
                <td
                  className="px-5 py-4 text-[14px] text-ink font-medium align-top leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {row.title}
                  {row.isOnline && (
                    <span
                      className="ml-2 px-2 py-0.5 rounded-md bg-amber/10 text-amber text-[10px] font-bold uppercase"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Online
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function renderBlock(block: Block, idx: number) {
  switch (block.kind) {
    case "timeslot":
      return (
        <div
          key={idx}
          className="flex items-center gap-3 py-4 border-b border-rule"
        >
          <div className="flex-shrink-0 px-3 py-1 rounded-full bg-cipher/10 border border-cipher/20">
            <span
              className="text-[12px] font-bold text-cipher"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {block.time}
            </span>
          </div>
          <span
            className="text-[15px] font-semibold text-ink"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {block.label}
          </span>
        </div>
      );

    case "venue":
      return (
        <p
          key={idx}
          className="text-[13px] text-slate italic px-1 pt-2 pb-1"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {block.text}
        </p>
      );

    case "infobox":
      return (
        <div
          key={idx}
          className="bg-warm border border-rule rounded-xl px-5 py-4 my-3 space-y-1.5"
        >
          {block.items.map((item, i) => (
            <p
              key={i}
              className="text-[14px] text-ink"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="font-semibold">{item.label}</span>{" "}{item.text}
            </p>
          ))}
        </div>
      );

    case "keynote":
      return (
        <div
          key={idx}
          className="relative bg-cipher/5 border border-cipher/20 rounded-2xl px-6 py-5 my-4 overflow-hidden"
        >
          {/* decorative circle */}
          <div className="absolute -top-8 -right-8 w-32 h-32 rounded-full bg-cipher/8 pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cipher" />
              <span
                className="text-[10px] font-semibold text-cipher uppercase tracking-[2px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Keynote Session
              </span>
            </div>
            <p
              className="text-[16px] font-semibold text-ink mb-1"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {block.speaker}
            </p>
            <p
              className="text-[15px] text-cipher font-medium italic mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              "{block.topic}"
            </p>
            <p
              className="text-[13px] text-slate"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="font-medium text-ink">Chair:</span>{" "}{block.chair}
            </p>
          </div>
        </div>
      );

    case "break":
      return (
        <div key={idx} className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-rule" />
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-warm border border-rule">
            <span
              className="text-[12px] font-medium text-slate whitespace-nowrap"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {block.label}
            </span>
          </div>
          <div className="flex-1 h-px bg-rule" />
        </div>
      );

    case "heading":
      return (
        <div key={idx} className="flex items-center gap-4 mt-12 mb-6">
          <div className="h-px flex-1 bg-rule" />
          <h2
            className="text-[13px] font-bold text-ink uppercase tracking-[3px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {block.text}
          </h2>
          <div className="h-px flex-1 bg-rule" />
        </div>
      );

    case "parallel":
      return (
        <div key={idx} className="flex flex-col gap-6 my-5">
          {block.sessions.map((session, si) => (
            <SessionCard key={si} session={session} />
          ))}
        </div>
      );

    case "closing":
      return (
        <div
          key={idx}
          className="bg-warm border border-rule rounded-xl px-5 py-4 my-3 space-y-1.5"
        >
          {block.items.map((item, i) => (
            <p
              key={i}
              className="text-[14px] text-ink"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <span className="font-semibold">{item.label}</span>{" "}{item.text}
            </p>
          ))}
        </div>
      );
  }
}

// ── Main Component ─────────────────────────────────────────────────────────

export default function Program() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);
  const schedule = activeDay === 1 ? day1 : day2;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[300px] bg-deep">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1
            className="text-[56px] font-bold italic text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Conference Program
          </h1>
          <p
            className="text-[18px] text-white/70"
            style={{ fontFamily: "var(--font-body)" }}
          >
            October 30–31, 2025 · Academy of Cryptography Techniques, Hanoi, Vietnam
          </p>
        </div>
      </section>

      {/* Schedule */}
      <section className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Tabs + Download */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveDay(1)}
                className={`px-6 py-3 rounded-full text-[13px] font-medium transition-all ${
                  activeDay === 1
                    ? "bg-ink text-white"
                    : "border border-slate text-slate hover:border-cipher hover:text-cipher"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                Day 1 · Thursday, October 30
              </button>
              <button
                onClick={() => setActiveDay(2)}
                className={`px-6 py-3 rounded-full text-[13px] font-medium transition-all ${
                  activeDay === 2
                    ? "bg-ink text-white"
                    : "border border-slate text-slate hover:border-cipher hover:text-cipher"
                }`}
                style={{ fontFamily: "var(--font-body)" }}
              >
                Day 2 · Friday, October 31
              </button>
            </div>

          </div>

          {/* Blocks */}
          <div>{schedule.map((block, idx) => renderBlock(block, idx))}</div>
        </div>
      </section>
    </div>
  );
}
