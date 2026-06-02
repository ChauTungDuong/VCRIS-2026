import { FileText, CheckCircle2, BookOpen } from "lucide-react";
import PageRenderer from "../components/PageRenderer";
import PageTitle from "../components/PageTitle";

export default function InstructionForAuthors() {
  return (
    <PageRenderer
      slug="instructions-for-authors"
      fallback={
        <div>
          <PageTitle title="Instruction for Authors" />

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
      } />
  );
}
