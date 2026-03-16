import { Check, Download, ArrowRight } from "lucide-react";
import { Link } from "react-router";
import {
  topics as conferenceTopics,
  CONF,
  importantDates,
} from "../data/conferenceData";

export default function CallForPapers() {
  const topics = conferenceTopics;

  return (
    <div className="pt-16">
      {/* Mini Hero */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1677092590812-78e7db4900d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9ncmFwaHklMjBjaXJjdWl0JTIwYm9hcmQlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc3Mjc2NjQwMnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cryptography"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep/90" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1
            className="text-[56px] font-bold italic text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Call for Papers
          </h1>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <span
              className="text-[15px] font-semibold text-cipher"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              July 25, 2025
            </span>
            <span
              className="text-[15px] text-white/80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Submission Deadline (Extended)
            </span>
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 gap-16">
            {/* Left: Topics */}
            <div>
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
                Research Topics
              </h2>

              <p
                className="text-[16px] text-slate mb-8"
                style={{ fontFamily: "var(--font-body)" }}
              >
                We welcome original research contributions addressing, but not
                limited to, the following areas:
              </p>

              {/* Topics Grid */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                {topics.map((topic) => (
                  <div key={topic} className="flex items-start gap-2">
                    <Check
                      size={16}
                      className="text-cipher flex-shrink-0 mt-1"
                    />
                    <span
                      className="text-[15px] text-ink"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {topic}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Submission Card */}
            <div>
              <div className="bg-white border border-rule rounded-[20px] p-8 sticky top-24">
                <h3
                  className="text-[24px] font-bold italic text-ink mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Submission Guidelines
                </h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cipher/10 flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-[13px] font-bold text-cipher"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        01
                      </span>
                    </div>
                    <div>
                      <h4
                        className="text-[15px] font-semibold text-ink mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Format
                      </h4>
                      <p
                        className="text-[14px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        IEEE A4 format, 6–8 pages including references
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cipher/10 flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-[13px] font-bold text-cipher"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        02
                      </span>
                    </div>
                    <div>
                      <h4
                        className="text-[15px] font-semibold text-ink mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Submission Platform
                      </h4>
                      <p
                        className="text-[14px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        All papers must be submitted via EasyChair
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cipher/10 flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-[13px] font-bold text-cipher"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        03
                      </span>
                    </div>
                    <div>
                      <h4
                        className="text-[15px] font-semibold text-ink mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Review Process
                      </h4>
                      <p
                        className="text-[14px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Double-blind peer review by international experts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-cipher/10 flex items-center justify-center flex-shrink-0">
                      <span
                        className="text-[13px] font-bold text-cipher"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        04
                      </span>
                    </div>
                    <div>
                      <h4
                        className="text-[15px] font-semibold text-ink mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Publication
                      </h4>
                      <p
                        className="text-[14px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Accepted papers will be published in IEEE proceedings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
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

      {/* Review Process */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2
              className="text-[44px] font-bold italic text-ink"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Review Process
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-12">
            {[
              {
                number: "01",
                title: "Submit Paper",
                description:
                  "Upload your manuscript via EasyChair. Ensure compliance with formatting guidelines and anonymization requirements for double-blind review.",
              },
              {
                number: "02",
                title: "Double-Blind Review",
                description:
                  "Papers are reviewed by at least three independent experts from our international program committee based on originality, quality, and relevance.",
              },
              {
                number: "03",
                title: "Notification & Camera-Ready",
                description:
                  "Authors receive acceptance decisions by September 1. Accepted papers must be revised per reviewer comments and submitted camera-ready by September 20, 2025.",
              },
            ].map((step) => (
              <div key={step.number} className="relative">
                <div
                  className="absolute top-0 left-0 text-[64px] font-bold opacity-5"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--cipher)",
                  }}
                >
                  {step.number}
                </div>
                <div className="relative pt-12">
                  <h3
                    className="text-[18px] font-semibold text-ink mb-3"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Connecting Line */}
          <div className="relative h-0 -mt-48">
            <div className="absolute top-0 left-[16.66%] right-[16.66%] h-[1px] border-t border-dashed border-rule" />
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2
            className="text-[44px] font-bold italic text-ink text-center mb-12"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Important Dates
          </h2>

          <div className="grid grid-cols-2 gap-8 max-w-[800px] mx-auto">
            {importantDates.map((item) => (
              <div
                key={item.label}
                className={`p-6 rounded-2xl border ${item.highlight ? "border-cipher bg-cipher/5" : "border-rule bg-white"}`}
              >
                <div
                  className={`text-[24px] font-bold mb-2 ${item.highlight ? "text-cipher" : item.passed ? "text-slate line-through" : "text-ink"}`}
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.date}
                  {item.extended && (
                    <span className="ml-2 px-2 py-0.5 rounded bg-amber/10 text-amber text-[13px] font-semibold align-middle">
                      Extended
                    </span>
                  )}
                </div>
                <div
                  className="text-[15px] text-ink"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item.label}
                </div>
              </div>
            ))}
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
