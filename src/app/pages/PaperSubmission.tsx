import {
  CheckCircle2,
  Mail,
  Calendar,
  FileText,
  Users,
  Book,
} from "lucide-react";
import PageRenderer from "../components/PageRenderer";
import PageTitle from "../components/PageTitle";

export default function PaperSubmission() {
  const importantDates = [
    { date: "June 30, 2026", label: "Paper Submission Deadline" },
    { date: "July 31, 2026", label: "Notification of Acceptance" },
    { date: "September 25, 2026", label: "Camera-Ready Submission" },
    { date: "October 29 - 30, 2026", label: "Conference Dates" },
  ];

  return (
    <PageRenderer
      slug="paper-submission"
      fallback={
        <div>
          <PageTitle title="Paper Submission" />

      {/* Main Content - 2 cột */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Cột trái - Các thẻ thông tin */}
            <div className="space-y-4">
              {/* Paper Submission */}
              <div className="bg-white rounded-2xl p-8 border border-rule">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-cipher" />
                  <h2
                    className="text-[28px] font-bold italic text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Paper Submission
                  </h2>
                </div>

                <div className="space-y-4">
                  <p
                    className="text-[15px] text-slate leading-relaxed mb-4 indent-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Authors are invited to submit original, unpublished research papers that are not currently under review elsewhere. All submissions must follow the IEEE conference format at IEEE’s website, be written in English, and should not exceed 6 pages.
                  </p>
                  
                  <p
                    className="text-[15px] text-slate leading-relaxed mb-4 indent-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Papers will be peer-reviewed using a double-blind review process by at least three members of the technical Program Committee.
                  </p>

                  <p
                    className="text-[15px] text-slate leading-relaxed mb-4 indent-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Accepted papers that are presented at the conference will be submitted for inclusion into IEEE Xplore subject to meeting IEEE Xplore’s scope and quality requirements.
                  </p>

                  <p
                    className="text-[15px] text-slate leading-relaxed mb-4 indent-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Authors are invited to submit their full papers via the VCRIS 2026 submission page. The submission link is available at: <a href="https://easychair.org/conferences/?conf=vcris2026" className="text-cipher hover:underline" target="_blank" rel="noopener noreferrer">https://easychair.org/conferences/?conf=vcris2026</a>
                  </p>
                </div>
              </div>

              {/* Paper Submission Requirements */}
              <div className="bg-white rounded-2xl p-8 border border-rule">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-cipher" />
                  <h2
                    className="text-[28px] font-bold italic text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Paper Submission Requirements
                  </h2>
                </div>

                <div className="space-y-4">
                  <p
                    className="text-[15px] text-slate leading-relaxed indent-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    All submitted papers must be original contributions that neither have been submitted to any other conference or journal nor will be submitted to any other conference or journal during the review process.
                  </p>
                  <p
                    className="text-[15px] text-slate leading-relaxed indent-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    The order of the authors on the submitted paper must exactly match in number and order the authors typed into the online submission form.
                  </p>
                </div>
              </div>

              {/* Presentation and Publication */}
              <div className="bg-white rounded-2xl p-8 border border-rule">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-cipher" />
                  <h2
                    className="text-[28px] font-bold italic text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Presentation and Publication
                  </h2>
                </div>

                <div className="space-y-4">
                  <p
                    className="text-[15px] text-slate leading-relaxed indent-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Accepted and presented papers will be published in the Conference Proceedings.
                  </p>
                  <p
                    className="text-[15px] text-slate leading-relaxed indent-8"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    At least one author of an accepted paper must be registered as a full registration by the early registration deadline; otherwise, the paper will be withdrawn and not published in the proceedings.
                  </p>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 border border-rule">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-cipher" />
                  <h2
                    className="text-[28px] font-bold italic text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Contact Information
                  </h2>
                </div>

                <p
                  className="text-[15px] text-slate mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  For any inquiries, please contact the conference organizers at:
                </p>

                <a
                  href="mailto:VCRIS.ACT@gmail.com"
                  className="inline-flex items-center gap-2 text-[15px] text-cipher font-semibold hover:underline"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  <Mail size={18} />
                  VCRIS.ACT@gmail.com
                </a>
              </div>
            </div>

            {/* Cột phải - Important Dates */}
            <div className="md:sticky md:top-24">
              <div className="bg-white rounded-2xl p-8 border border-rule">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-2 h-2 rounded-full bg-cipher" />
                  <h2
                    className="text-[28px] font-bold italic text-ink"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Important Dates
                  </h2>
                </div>

                <div className="space-y-4">
                  <div className="pb-4 border-b border-rule last:border-0 last:pb-0">
                    <div className="text-[18px] font-bold text-ink mb-1" style={{ fontFamily: "var(--font-mono)" }}>June 30, 2026</div>
                    <div className="text-[14px] text-slate" style={{ fontFamily: "var(--font-body)" }}>Full Paper Submission</div>
                  </div>
                  <div className="pb-4 border-b border-rule last:border-0 last:pb-0">
                    <div className="text-[18px] font-bold text-ink mb-1" style={{ fontFamily: "var(--font-mono)" }}>July 31, 2026</div>
                    <div className="text-[14px] text-slate" style={{ fontFamily: "var(--font-body)" }}>Notification of Acceptance</div>
                  </div>
                  <div className="pb-4 border-b border-rule last:border-0 last:pb-0">
                    <div className="text-[18px] font-bold text-ink mb-1" style={{ fontFamily: "var(--font-mono)" }}>September 25, 2026</div>
                    <div className="text-[14px] text-slate" style={{ fontFamily: "var(--font-body)" }}>Early Registration Deadline</div>
                  </div>
                  <div className="pb-4 border-b border-rule last:border-0 last:pb-0">
                    <div className="text-[18px] font-bold text-ink mb-1" style={{ fontFamily: "var(--font-mono)" }}>October 29 – 30, 2026</div>
                    <div className="text-[14px] text-slate" style={{ fontFamily: "var(--font-body)" }}>Conference Dates</div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-rule">
                  <div className="bg-cipher/5 rounded-xl p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar size={16} className="text-cipher" />
                      <span
                        className="text-[13px] font-semibold text-cipher"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Submission Deadline
                      </span>
                    </div>
                    <div
                      className="text-[24px] font-bold text-cipher"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      June 30, 2026
                    </div>
                  </div>
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
