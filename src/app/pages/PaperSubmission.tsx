import {
  CheckCircle2,
  Mail,
  Calendar,
  FileText,
  Users,
  Book,
} from "lucide-react";

export default function PaperSubmission() {
  const importantDates = [
    { date: "June 30, 2026", label: "Paper Submission Deadline" },
    { date: "July 31, 2026", label: "Notification of Acceptance" },
    { date: "September 25, 2026", label: "Camera-Ready Submission" },
    { date: "October 29 - 30, 2026", label: "Conference Dates" },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXBlciUyMHN1Ym1pc3Npb24lMjByZXNlYXJjaHxlbnwxfHx8fDE3NDI0MjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Paper Submission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep/90" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1
            className="text-[56px] font-bold italic text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Paper Submission
          </h1>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Calendar size={18} className="text-cipher" />
            <span
              className="text-[15px] font-semibold text-cipher"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              June 30, 2026
            </span>
            <span
              className="text-[15px] text-white/80"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Submission Deadline
            </span>
          </div>
        </div>
      </section>

      {/* Main Content - 2 cột */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Cột trái - Các thẻ thông tin */}
            <div className="space-y-4">
              {/* Paper Submission */}
              <div className="bg-white rounded-2xl p-8 border border-rule">
                <h2
                  className="text-[28px] font-bold italic text-ink mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Paper Submission
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3
                      className="text-[16px] font-semibold text-ink mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Submission Guidelines:
                    </h3>
                    <p
                      className="text-[15px] text-slate leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      All submitted papers must be original and not have been
                      previously published or under review elsewhere.
                      Submissions should be in PDF format using the IEEE
                      conference templates and are limited to 6 pages, inclusive
                      of references.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-[16px] font-semibold text-ink mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Peer Review Process:
                    </h3>
                    <p
                      className="text-[15px] text-slate leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Each submission will undergo rigorous peer review by at
                      least three reviewers, focusing on originality, scientific
                      rigor, and technical quality.
                    </p>
                  </div>

                  <div>
                    <h3
                      className="text-[16px] font-semibold text-ink mb-3"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Publication:
                    </h3>
                    <p
                      className="text-[15px] text-slate leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      As the tradition of VCRIS series, the conference
                      proceedings is planned to be published in IEEE Xplore and
                      other digital libraries.
                    </p>
                  </div>
                </div>
              </div>

              {/* Paper Submission Requirements */}
              <div className="bg-white rounded-2xl p-8 border border-rule">
                <h2
                  className="text-[28px] font-bold italic text-ink mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Paper Submission Requirements
                </h2>

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
                      All submitted papers must be original contributions that
                      neither have been submitted to any other conference or
                      journal nor will be submitted to any other conference or
                      journal during the review process.
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
                      The order of the authors on the submitted paper must
                      exactly match in number and order the authors typed into
                      the online submission form.
                    </p>
                  </div>
                </div>
              </div>

              {/* Presentation and Publication */}
              <div className="bg-white rounded-2xl p-8 border border-rule">
                <h2
                  className="text-[28px] font-bold italic text-ink mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Presentation and Publication
                </h2>

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
                      Accepted and presented papers will be published in the
                      Conference Proceedings.
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
                      At least one author of an accepted paper must be
                      registered as a full registration by the early
                      registration deadline; otherwise, the paper will be
                      withdrawn and not published in the proceedings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-8 border border-rule">
                <h2
                  className="text-[28px] font-bold italic text-ink mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Contact Information
                </h2>

                <p
                  className="text-[15px] text-slate mb-4"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  For any inquiries, please contact the conference organizers
                  at:
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
                <h2
                  className="text-[28px] font-bold italic text-ink mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Important Dates
                </h2>

                <div className="space-y-4">
                  {importantDates.map((item, index) => (
                    <div
                      key={index}
                      className="pb-4 border-b border-rule last:border-0 last:pb-0"
                    >
                      <div
                        className="text-[18px] font-bold text-ink mb-1"
                        style={{ fontFamily: "var(--font-mono)" }}
                      >
                        {item.date}
                      </div>
                      <div
                        className="text-[14px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {item.label}
                      </div>
                    </div>
                  ))}
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
  );
}
