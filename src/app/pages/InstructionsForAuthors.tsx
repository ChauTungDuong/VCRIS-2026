import { FileText, CheckCircle2, BookOpen } from "lucide-react";

export default function InstructionForAuthors() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1455390582262-044cdead277a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3cml0aW5nJTIwcmVzZWFyY2glMjBwYXBlcnxlbnwxfHx8fDE3NDI0MjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Instruction for Authors"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep/90" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1
            className="text-[56px] font-bold italic text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Instruction for Authors
          </h1>
          <p
            className="text-[18px] text-white/90 max-w-[800px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Guidelines and requirements for manuscript preparation and
            submission
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-6">
            {/* Submission Process */}
            <div className="bg-white rounded-2xl p-8 border border-rule">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-cipher" />
                <h2
                  className="text-[28px] font-bold italic text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Submission Process
                </h2>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2
                  size={18}
                  className="text-ink flex-shrink-0 mt-1"
                />
                <p
                  className="text-[15px] text-slate leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Papers must be submitted via the{" "}
                  <a
                    href="https://easychair.org/my/conference?conf=vcris2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cipher font-semibold hover:underline"
                  >
                    VCRIS 2026 submission
                  </a>{" "}
                  before or on the specified due dates.
                </p>
              </div>
            </div>

            {/* Paper Formatting Requirements */}
            <div className="bg-white rounded-2xl p-8 border border-rule">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-cipher" />
                <h2
                  className="text-[28px] font-bold italic text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Paper Formatting Requirements
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-ink flex-shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    All submissions must be camera-ready PDF files ranging from
                    4 to 6 pages in length.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-ink flex-shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    PDF files must not be password protected, and all fonts must
                    be embedded.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-ink flex-shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    All submitted papers must be written in English.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-ink flex-shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    All submitted papers must adhere to the double-column format
                    of IEEE templates provided below.
                  </p>
                </div>
              </div>
            </div>

            {/* Template and Guidelines */}
            <div className="bg-white rounded-2xl p-8 border border-rule">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-cipher" />
                <h2
                  className="text-[28px] font-bold italic text-ink"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Template and Guidelines
                </h2>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-ink flex-shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    We provide LaTex and DOC manuscript templates for authors.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-ink flex-shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Please download and follow the guidelines available on the
                    IEEE website when preparing your manuscript.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-ink flex-shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    These conference templates are crafted to maintain a uniform
                    format for papers published in the conference proceedings.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-ink flex-shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    We strongly advise using the provided IEEE conference
                    manuscript templates, as they contain instructional text for
                    composing and formatting conference papers.
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="text-ink flex-shrink-0 mt-1"
                  />
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Before submission, please ensure that all instructional text
                    is removed from your conference paper.
                  </p>
                </div>

                <div className="bg-cipher/5 rounded-xl p-5 mt-6">
                  <p
                    className="text-[15px] text-slate leading-relaxed"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    For more details and to download templates, please visit the
                    IEEE website:{" "}
                    <a
                      href="https://www.ieee.org/conferences/publishing/templates.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cipher font-semibold hover:underline"
                    >
                      IEEE Manuscript Templates
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
