import { Link } from "react-router";
import { Calendar, MapPin, ChevronDown, ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";
import CountdownTimer from "../components/CountdownTimer";
import SpeakerCard from "../components/SpeakerCard";
import {
  importantDates,
  heroStats,
  keynoteSpeakers,
  home,
  CONF,
  callForPapersText
} from "../data/conferenceData";
import PageRenderer from "../components/PageRenderer";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [openTrackIndex, setOpenTrackIndex] = useState<number | null>(0);

  const toggleTrack = (index: number) => {
    setOpenTrackIndex(openTrackIndex === index ? null : index);
  };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <PageRenderer
      slug="home"
      fallback={
        <div className="pt-16">
      {/* Important Dates */}
      <section className="bg-warm pb-16 pt-0 md:pb-24">
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

      {/* Introduction */}
      <section className="bg-white py-24 border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-cipher" />
            <span
              className="text-[11px] font-semibold text-cipher uppercase tracking-[3px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              INTRODUCTION
            </span>
          </div>
          <h2
            className="text-[44px] font-bold italic text-ink leading-[1.15] mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Welcome to VCRIS 2026
          </h2>
          <div className="text-[16px] text-slate space-y-4" style={{ fontFamily: "var(--font-body)" }}>
            <p className="indent-8">
              Following the success of VCRIS 2025, this event will continue to be held in Hanoi, the thousand-year-old capital of Vietnam, renowned for its rich history, cultural heritage, and vibrant historical landmarks. The Academy of Cryptography Techniques, selected by the Vietnamese Government as a pivotal institution for nurturing information security expertise, will serve as the venue for the VCRIS 2026.
            </p>
            <p className="indent-8">
              The Academy of Cryptography Techniques stands as Vietnam’s exclusive hub for cultivating professionals with both undergraduate and postgraduate qualifications and spearheading research in cryptographic science and technology under the purview of the Vietnam Government Information Security Commission (VGISC).
            </p>
          </div>
        </div>
      </section>

      {/* About the Conference */}
      <section className="bg-paper py-24 border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[36px] font-bold italic text-ink mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About the Conference
          </h2>
          <div className="text-[16px] text-slate space-y-4" style={{ fontFamily: "var(--font-body)" }}>
            <p className="indent-8">
              VCRIS 2026 is organized and sponsored by the Academy of Cryptography Techniques, in collaboration with co-organizing institutions including the Vietnam Institute for Advanced Study in Mathematics (VIASM), the Vietnam Association of ICT Faculties-Institutes-Schools-Universities (FISU VN), and the Information Security Journal (ISJ), with the endorsement of the University of Lorraine &ndash; France, the Japan Advanced Institute of Science and Technology &ndash; Japan, and the Computer Security and Industrial Cryptography group of KU Leuven &ndash; Belgium.
            </p>
            <p className="indent-8">
              VCRIS 2026 aims to bring together researchers, practitioners, and industry experts to present and discuss the latest advances in cryptography, post-quantum security, systems security, and AI-driven cybersecurity.
            </p>
            <p className="indent-8">
              The conference provides a high-quality international forum for theoretical foundations, practical implementations, and emerging interdisciplinary security technologies. VCRIS 2026 welcomes original research contributions, case studies, system implementations, and visionary papers.
            </p>
          </div>
        </div>
      </section>

      {/* Conference Tracks */}
      <section className="bg-white py-24 border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[36px] font-bold italic text-ink mb-10"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Conference Tracks
          </h2>
          
          <div className="space-y-4">
            {callForPapersText.tracks.map((track, i) => {
              const isOpen = openTrackIndex === i;
              
              return (
                <div key={i} className="bg-rule/30 rounded-2xl overflow-hidden border border-transparent hover:border-cipher/20 transition-colors">
                  <button
                    onClick={() => toggleTrack(i)}
                    className="w-full flex items-center justify-between p-5 lg:p-6 text-left"
                  >
                    <h3
                      className={`text-[18px] lg:text-[20px] font-bold pr-4 transition-colors ${isOpen ? "text-cipher" : "text-ink"}`}
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {track.title}
                    </h3>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${isOpen ? "bg-cipher/10" : "bg-transparent"}`}>
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-cipher" : "text-slate"
                        }`}
                      />
                    </div>
                  </button>
                  
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 px-5 lg:px-6 pb-6 pt-2">
                        {track.topics.map((topic, j) => (
                          <div key={j} className="flex items-start gap-2">
                            <Check
                              size={16}
                              strokeWidth={3}
                              className="text-cipher flex-shrink-0 mt-[3px]"
                            />
                            <span
                              className="text-[15px] text-ink leading-tight"
                              style={{ fontFamily: "var(--font-body)" }}
                            >
                              {topic}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Paper Submission & Publication */}
      <section className="bg-paper py-24 border-b border-rule">
        <div className="max-w-[1200px] mx-auto px-6 space-y-16">
          <div>
            <h2
              className="text-[36px] font-bold italic text-ink mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Paper Submission
            </h2>
            <div className="text-[16px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
              <ul className="list-disc pl-5 space-y-2">
                <li>Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere.</li>
                <li>All submissions must follow the IEEE conference format at IEEE’s website, be written in English, and should not exceed 6 pages.</li>
                <li>Papers will be peer-reviewed using a double-blind review process by at least three members of the technical Program Committee.</li>
                <li>Authors are invited to submit their full papers via the <Link to={CONF.easyChairUrl} className="text-cipher underline" target="_blank" rel="noopener noreferrer">VCRIS 2026 submission page</Link>.</li>
              </ul>
            </div>
          </div>
          <div>
            <h2
              className="text-[36px] font-bold italic text-ink mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Publication
            </h2>
            <div className="text-[16px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
              <ul className="list-disc pl-5 space-y-2">
                <li>Accepted papers that are presented at the conference will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.</li>
              </ul>
            </div>
          </div>
          <div>
            <h2
              className="text-[36px] font-bold italic text-ink mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Why Submit to VCRIS 2026?
            </h2>
            <div className="text-[16px] text-slate" style={{ fontFamily: "var(--font-body)" }}>
              <ul className="list-disc pl-5 space-y-2">
                <li>International Technical Program Committee</li>
                <li>IEEE Xplore proceedings</li>
                <li>Strong focus on Post-Quantum Cryptography and AI Security</li>
                <li>Balanced coverage of theory and applied cybersecurity</li>
                <li>Networking opportunities with academia and industry</li>
              </ul>
            </div>
            
            <div className="mt-12">
              <Link
                to={CONF.easyChairUrl}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-[20px] bg-cipher text-white text-[15px] font-semibold hover:shadow-lg hover:shadow-cipher/30 transition-all"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Submit Paper via EasyChair <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  } />
  );
}
