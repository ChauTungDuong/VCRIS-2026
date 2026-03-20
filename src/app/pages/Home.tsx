import { Link } from "react-router";
import { Calendar, MapPin, ChevronDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import SpeakerCard from "../components/SpeakerCard";
import {
  importantDates,
  heroStats,
  keynoteSpeakers,
  home,
  CONF,
} from "../data/conferenceData";
import TopImage from "../components/TopImage";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden">
        <TopImage
          title={<div className="relative max-w-[1200px] mx-auto px-6 h-full flex items-center">
            <header className="max-w-[640px]" style={{ marginTop: "-10%" }}>
              {/* Eyebrow */}
              <div
                className={`flex items-center gap-3 mb-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                <div className="w-8 h-1 bg-cipher" />
                <span
                  className="text-[11px] font-semibold text-white tracking-[4px] uppercase"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {home.name}
                </span>
              </div>

              {/* Cipher Key Line */}
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 w-[1px] h-[72px] bg-cipher" />

                {/* Title */}
                <div
                  className={`transition-all duration-700 delay-150 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
                >
                  <h1
                    className="text-white leading-[1.12]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    <span className="block text-[38px] md:text-[48px] italic font-bold">
                      The 3<sup>rd</sup> International Conference on
                    </span>
                    <span className="block text-[44px] md:text-[62px] italic font-bold mt-1">
                      Cryptography <span className="text-cipher">&amp;</span>{" "}
                      Information Security
                    </span>
                  </h1>
                </div>
              </div>

              {/* Meta Chips */}
              <div
                className={`flex gap-3 mt-8 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
              >
                <div className="flex items-center gap-2 px-4 py-4 rounded-[20px] bg-white/10 border border-white/20 backdrop-blur-sm whitespace-nowrap">
                  <Calendar size={16} className="text-cipher" />
                  <span
                    className="text-[14px] font-medium text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {home.time}
                  </span>
                </div>
                <div className="flex items-center gap-2 px-4 py-4 rounded-[20px] bg-white/10 border border-white/20 backdrop-blur-sm whitespace-nowrap">
                  <MapPin size={16} className="text-cipher" />
                  <span
                    className="text-[14px] font-medium text-white"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {home.venue}
                  </span>
                </div>
              </div>
            </header>
          </div>}
        />
      </section>

      {/* Important Dates */}
      <section className="bg-warm py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Countdown */}
            <div className="max-w-[560px]">
              <p
                className="text-[11px] font-semibold text-slate uppercase tracking-[2px] mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Conference Opens In
              </p>
              <CountdownTimer targetDate={home.time} />
              <p
                className="text-[13px] text-slate italic mt-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {home.time} · Hanoi, Vietnam
              </p>

              <section className="mt-8 rounded-xl bg-[#c7e8f1] border border-[#b0d9e6] p-6 md:p-8 text-center shadow-sm">
                <h4
                  className="text-[30px] md:text-[36px] font-medium text-[#0b2740] mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {home.name}
                </h4>
                <p
                  className="text-[28px] md:text-[34px] text-[#0b2740] mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {home.time}
                </p>
                <p
                  className="text-[16px] md:text-[20px] text-[#0b2740] leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Academy of Cryptography Techniques, {CONF.address}
                </p>
              </section>
            </div>

            {/* Timeline */}
            <div>
              <h3
                className="text-[28px] md:text-[32px] font-bold italic text-ink mb-8"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Important Dates
              </h3>

              <div className="space-y-6 relative pl-5 md:pl-6">
                <div className="absolute left-0 top-2 bottom-2 w-[1px] border-l border-dashed border-rule" />

                {importantDates.map((item, idx) => (
                  <div key={idx} className="relative flex gap-4 items-start">
                    <div
                      className={`absolute -left-[21px] md:-left-[25px] w-2.5 h-2.5 rounded-full ${("highlight" in item && item.highlight) ? "bg-cipher ring-4 ring-cipher/20" : item.passed ? "bg-rule" : "bg-cipher"}`}
                    />
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span
                          className={`text-[15px] font-semibold ${item.passed ? "text-slate line-through" : "text-cipher"}`}
                          style={{ fontFamily: "var(--font-mono)" }}
                        >
                          {item.date}
                        </span>
                        {Boolean((item as any).extended) && (
                          <span
                            className="px-2 py-0.5 rounded bg-amber/10 text-amber text-[11px] font-semibold"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            Extended
                          </span>
                        )}
                      </div>
                      <p
                        className="text-[15px] font-medium text-ink"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-12 gap-12">
            {/* Left Column */}
            <div className="col-span-7">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cipher" />
                <span
                  className="text-[11px] font-semibold text-cipher uppercase tracking-[3px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  ABOUT THE CONFERENCE
                </span>
              </div>

              <h2
                className="text-[44px] font-bold italic text-ink leading-[1.15] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Building the Future of Cryptographic Science
              </h2>

              <div
                className="space-y-4 text-[16px] text-slate mb-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <p>
                  Following the success of VCRIS 2025, this event will continue
                  to be held in Hanoi, the thousand-year-old capital of Vietnam,
                  renowned for its rich history, cultural heritage, and vibrant
                  historical landmarks.
                </p>
                <p>
                  The Academy of Cryptography Techniques, selected by the
                  Vietnamese Government as a pivotal institution for nurturing
                  information security expertise, will serve as the venue for
                  the VCRIS 2026. The Academy of Cryptography Techniques stands
                  as Vietnam’s exclusive hub for cultivating professionals with
                  both undergraduate and postgraduate qualifications and
                  spearheading research in cryptographic science and technology
                  under the purview of the Vietnam Government Information
                  Security Commission (VGISC).
                </p>
              </div>

              {/* Topic Tags */}
              <div className="flex flex-wrap gap-2">
                {[
                  "Post-Quantum Cryptography",
                  "Blockchain & DLT",
                  "AI Security",
                  "Zero-Knowledge Proofs",
                  "Digital Forensics",
                  "Network Security",
                  "Data Privacy",
                ].map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-full bg-cipher-dim text-cipher text-[12px] font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column */}
            <div className="col-span-5 relative">
              {/* Decorative Circle */}
              <div
                className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full border border-rule opacity-30"
                style={{ transform: "translate(20%, -10%)" }}
              />

              <div className="relative space-y-4">
                {[
                  { number: "3rd", label: "Edition" },
                  { number: "2024", label: "Since" },
                  { number: "IEEE", label: "Indexed" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="bg-white border border-rule rounded-2xl p-6"
                  >
                    <div
                      className="text-[36px] font-bold text-cipher mb-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {item.number}
                    </div>
                    <div
                      className="text-[14px] text-ink"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Keynote Speakers Preview */}
      <section className="bg-deep py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-cipher" />
              <span
                className="text-[11px] font-semibold text-cipher uppercase tracking-[3px]"
                style={{ fontFamily: "var(--font-body)" }}
              >
                KEYNOTE SPEAKERS
              </span>
            </div>
            <h2
              className="text-[48px] font-bold italic text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Voices Shaping Cryptography
            </h2>
          </div>

          {/* Speaker Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            {keynoteSpeakers.map((speaker) => (
              <SpeakerCard
                key={speaker.name}
                name={speaker.name}
                role={speaker.role}
                institution={speaker.institution}
                talk={speaker.talk}
                image={speaker.image}
              />
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Link
              to="/speakers"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white text-white text-[13px] font-medium hover:bg-white/10 transition-colors"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View All Speakers <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call for Papers CTA */}
      <section className="bg-cipher py-16 relative overflow-hidden">
        {/* Dotted Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        />

        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <h2
            className="text-[48px] font-bold italic text-white mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Your Research Belongs Here
          </h2>
          <p
            className="text-[16px] text-white/80 mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            IEEE-indexed proceedings · Double-blind peer review · International
            audience
          </p>
          <Link
            to={CONF.easyChairUrl}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-[20px] bg-white text-cipher text-[15px] font-semibold hover:shadow-lg transition-all"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Submit Paper via EasyChair <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Program Preview */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex justify-between items-center mb-12">
            <h2
              className="text-[44px] font-bold italic text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Conference Program
            </h2>
            <div className="flex gap-2">
              <button
                className="px-4 py-2 rounded-full bg-ink text-white text-[13px] font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Day 1 — Oct 30
              </button>
              <button
                className="px-4 py-2 rounded-full border border-slate text-slate text-[13px] font-medium"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Day 2 — Oct 31
              </button>
            </div>
          </div>

          {/* Schedule Rows */}
          <div className="space-y-0 border border-rule rounded-2xl overflow-hidden">
            {[
              {
                time: "09:00",
                title: "Opening Ceremony",
                subtitle: "Welcome Address by Conference Chair",
                type: "keynote",
              },
              {
                time: "09:30",
                title: "Keynote: Post-Quantum Lattice Cryptography",
                subtitle: "Dr. Sarah Chen, MIT",
                type: "keynote",
              },
              {
                time: "10:45",
                title: "Coffee Break",
                subtitle: "",
                type: "break",
              },
              {
                time: "11:15",
                title: "Session A1: Blockchain Security",
                subtitle: "Track A · Room 201",
                type: "session",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-6 p-6 transition-colors hover:bg-cipher-dim ${idx % 2 === 0 ? "bg-white" : "bg-paper"
                  } ${item.type === "keynote" ? "border-l-4 border-cipher bg-cipher-dim" : ""}`}
              >
                <div className="w-20 flex-shrink-0">
                  <span
                    className="text-[13px] font-medium text-cipher"
                    style={{ fontFamily: "var(--font-mono)" }}
                  >
                    {item.time}
                  </span>
                </div>
                <div className="flex-1">
                  <h3
                    className="text-[16px] font-semibold text-ink mb-1"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {item.title}
                  </h3>
                  {item.subtitle && (
                    <p
                      className="text-[14px] text-slate"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {item.subtitle}
                    </p>
                  )}
                </div>
                {item.type === "session" && (
                  <span
                    className="px-3 py-1 rounded-full bg-cipher/10 text-cipher text-[12px] font-medium"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Track A
                  </span>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              to="/program"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink text-ink text-[13px] font-medium hover:bg-ink hover:text-white transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Full Program <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-paper py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p
            className="text-[12px] font-medium text-slate uppercase tracking-[3px] mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Supported by
          </p>
          <div className="flex items-center justify-center gap-12 opacity-60 hover:opacity-100 transition-opacity">
            <div
              className="text-[24px] font-bold text-slate"
              style={{ fontFamily: "var(--font-display)" }}
            >
              IEEE
            </div>
            <div
              className="text-[24px] font-bold text-slate"
              style={{ fontFamily: "var(--font-display)" }}
            >
              DBLP
            </div>
            <div
              className="text-[24px] font-bold text-slate"
              style={{ fontFamily: "var(--font-display)" }}
            >
              ACM
            </div>
            <div
              className="text-[24px] font-bold text-slate"
              style={{ fontFamily: "var(--font-display)" }}
            >
              IACR
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
