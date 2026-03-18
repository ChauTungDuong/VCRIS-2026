import { Check, Download, ArrowRight, FileText, BookOpen, AlertCircle, ChevronDown } from "lucide-react";

import { useState } from "react";
import {
  callForPapersText,
  CONF,
} from "../data/conferenceData";
import { TopImage } from "../components/TopImage";

export default function CallForPapers() {
  const [openTrackIndex, setOpenTrackIndex] = useState<number | null>(0);

  const toggleTrack = (index: number) => {
    setOpenTrackIndex(openTrackIndex === index ? null : index);
  };

  return (
    <div className="pt-16">
      <TopImage title="Call for Papers" />
      {/* Scope Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Left Col: 8/12 - About & Tracks */}
            <div className="col-span-1 lg:col-span-8">
              <div className="mb-16">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 rounded-full bg-cipher" />
                  <span
                    className="text-[11px] font-semibold text-cipher uppercase tracking-[3px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    CONFERENCE SCOPE
                  </span>
                </div>

                <h2
                  className="text-[40px] font-bold italic text-ink leading-[1.15] mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  About the Conference
                </h2>

                <div className="space-y-4">
                  {callForPapersText.about.map((paragraph, i) => (
                    <p
                      key={i}
                      className="text-[16px] text-slate leading-[1.7]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2
                  className="text-[32px] font-bold italic text-ink leading-[1.15] mb-8"
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
            </div>

            {/* Right Col: 4/12 - Submission & Publication */}
            <div className="col-span-1 lg:col-span-4 space-y-8">
              {/* Submission Card */}
              <div className="bg-white border border-rule rounded-[20px] p-8 lg:sticky lg:top-24">
                <h3
                  className="text-[24px] font-bold italic text-ink mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Paper Submission
                </h3>

                <div className="space-y-6 mb-8">
                  {callForPapersText.submissions.map((item, idx) => (
                     <div key={idx} className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-full bg-cipher/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                       <FileText size={14} className="text-cipher" />
                     </div>
                     <p
                       className="text-[14px] text-slate leading-[1.6]"
                       style={{ fontFamily: "var(--font-body)" }}
                     >
                       {item}
                     </p>
                   </div>
                  ))}
                </div>
                
                <h3
                  className="text-[22px] font-bold italic text-ink mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Publication
                </h3>

                <div className="space-y-6 mb-8">
                  {callForPapersText.publication.map((item, idx) => (
                     <div key={idx} className="flex items-start gap-3">
                     <div className="w-8 h-8 rounded-full bg-cipher/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                       <BookOpen size={14} className="text-cipher" />
                     </div>
                     <p
                       className="text-[14px] text-slate leading-[1.6]"
                       style={{ fontFamily: "var(--font-body)" }}
                     >
                       {item}
                     </p>
                   </div>
                  ))}
                </div>
                
                <div className="p-4 bg-amber/10 rounded-xl mb-8">
                  <div className="flex items-start gap-3">
                     <AlertCircle size={20} className="text-amber flex-shrink-0 mt-0.5" />
                     <p
                       className="text-[13px] text-amber-900 font-medium leading-[1.6]"
                       style={{ fontFamily: "var(--font-body)" }}
                     >
                       <strong className="block mb-1">Post-conference Publication</strong>
                       {callForPapersText.postConferencePublication.join(" ")}
                     </p>
                  </div>
                </div>

                <div className="space-y-3 pt-6 border-t border-rule" style={{borderTopStyle: "dashed"}}>
                  <button
                    className="w-full h-11 rounded-xl border border-ink text-ink text-[14px] font-semibold flex items-center justify-center gap-2 hover:bg-ink hover:text-white transition-all"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <Download size={16} />
                    Download Template
                  </button>
                  <button
                    onClick={() =>
                      window.open(
                        CONF.easyChairUrl,
                        "_blank",
                        "noopener,noreferrer",
                      )
                    }
                    className="w-full h-11 rounded-xl bg-cipher text-white text-[14px] font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cipher/40 transition-all"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Submit via EasyChair
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-deep py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3
            className="text-[32px] font-bold italic text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Questions About Submission?
          </h3>
          <p
            className="text-[16px] text-white/70 mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Contact our Program Committee for clarifications
          </p>
          <a
            href={`mailto:${CONF.contactEmail}`}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cipher text-white text-[15px] font-semibold hover:shadow-lg hover:shadow-cipher/40 transition-all"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Email Program Committee
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </div>
  );
}
