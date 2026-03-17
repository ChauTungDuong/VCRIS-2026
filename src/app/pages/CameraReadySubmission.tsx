import {
  Calendar,
  FileCheck,
  Upload,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function CameraReadySubmission() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHN1Ym1pc3Npb24lMjBmaW5hbHxlbnwxfHx8fDE3NDI0MjgwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Camera Ready Submission"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-deep/90" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1
            className="text-[56px] font-bold italic text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Camera Ready Submission
          </h1>
          <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm">
            <Calendar size={18} className="text-cipher" />
            <span
              className="text-[15px] font-semibold text-cipher"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              September 25, 2026
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

      {/* Introduction */}
      <section className="bg-warm py-12">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 flex items-start gap-4">
            <AlertCircle
              size={24}
              className="text-amber-600 flex-shrink-0 mt-1"
            />
            <p
              className="text-[16px] text-slate leading-relaxed"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Please make sure to{" "}
              <span className="font-semibold text-ink">
                strictly follow the below steps
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-warm py-12 pb-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-6">
            {/* Step 1: Copyright Consent Form */}
            <div className="bg-white rounded-2xl p-8 border border-rule">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-cipher/10 flex items-center justify-center">
                    <span
                      className="text-[28px] font-bold text-cipher"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      1
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h2
                    className="text-[28px] font-bold italic text-ink mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Submit Your Copyright Consent Form
                  </h2>

                  <div className="space-y-4">
                    <p
                      className="text-[15px] text-slate leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      For every manuscript in the VCRIS 2025 Proceedings,
                      copyright consent must be given by the authors. The signed
                      copyright consent form of each accepted paper{" "}
                      <span className="font-semibold text-ink">
                        MUST be submitted before uploading your final manuscript
                      </span>
                      .
                    </p>

                    <p
                      className="text-[15px] text-slate leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      The person designated as the corresponding author for your
                      submission will receive an email from IEEE with
                      instructions for submitting your IEEE copyright form.
                      Please also check your spam folder.
                    </p>

                    <div className="bg-cipher/5 rounded-xl p-4">
                      <p
                        className="text-[16px] text-slate leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        For more information on the IEEE Copyright Policy, visit{" "}
                        <a
                          href="https://www.ieee.org/publications/rights/copyright-policy.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cipher font-semibold hover:underline"
                        >
                          https://www.ieee.org/publications/rights/copyright-policy.html
                        </a>
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <p
                        className="text-[16px] text-slate leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        If you need to edit the paper title, authors' names,
                        email addresses etc., please make sure that you make
                        these changes to your submission in EasyChair prior to
                        signing the copyright agreement. Any changes made on the
                        IEEE copyright agreement website will not be
                        communicated back to EasyChair and will cause
                        complications in your paper being accepted for the
                        proceedings.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Prepare Final Manuscript */}
            <div className="bg-white rounded-2xl p-8 border border-rule">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-cipher/10 flex items-center justify-center">
                    <span
                      className="text-[28px] font-bold text-cipher"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      2
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h2
                    className="text-[28px] font-bold italic text-ink mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Prepare Your Final Manuscript
                  </h2>

                  <p
                    className="text-[15px] text-slate leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Please review the requirements list and the detailed
                    instructions that follow.{" "}
                    <span className="font-semibold text-ink">
                      IEEE & VCRIS 2025 Submission Requirements
                    </span>{" "}
                    - All Camera-ready Submissions must:
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-ink flex-shrink-0 mt-1"
                      />
                      <p
                        className="text-[15px] text-slate leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Adequately address reviewers' feedback and revise
                        potential paragraphs and sentences for plagiarism
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
                        Use the IEEE publication template for formatting{" "}
                        <a
                          href="https://www.ieee.org/conferences/publishing/templates.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cipher font-semibold hover:underline"
                        >
                          https://www.ieee.org/conferences/publishing/templates.html
                        </a>
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
                        Include correct paper title, author names and contact
                        information on the paper and in EasyChair
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
                        Adhere to the author's instructions for submission on
                        the VCRIS 2025 website
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
                        Pass the IEEE Xplore compatibility PDF verification (see
                        Step 3 below for more details)
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
                        Be submitted using an IEEE Xplore compatibility verified
                        PDF and uploaded to EasyChair
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                    <p
                      className="text-[16px] text-slate leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      IEEE requires that all submissions to the IEEE Xplore
                      Digital Library be submitted by the Conference or
                      publication chairs to plagiarism detection software to
                      identify papers with potentially plagiarized material
                      before they are posted. Any paper that does not adhere to
                      IEEE and the VCRIS 2025 requirements will be refused for
                      publication in the VCRIS 2025 proceedings.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: IEEE PDF eXpress */}
            <div className="bg-white rounded-2xl p-8 border border-rule">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-cipher/10 flex items-center justify-center">
                    <span
                      className="text-[28px] font-bold text-cipher"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      3
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h2
                    className="text-[28px] font-bold italic text-ink mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Certify/Convert your Files with IEEE PDF eXpress
                  </h2>

                  <p
                    className="text-[15px] text-slate leading-relaxed mb-6"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    IEEE requires the use of the IEEE PDF eXpress tool to check
                    if your manuscript is in IEEE-compliant format. To use IEEE
                    PDF eXpress, you must create an account and upload your PDF
                    manuscript. If your PDF file meets the IEEE requirements,
                    then the IEEE PDF eXpress tool will send you an email with
                    an IEEE-signed PDF. This signed PDF is the file that you
                    must upload to EasyChair.
                  </p>

                  <div className="space-y-4">
                    {/* Step I */}
                    <div className="bg-cipher/5 rounded-xl p-4">
                      <h3
                        className="text-[16px] font-semibold text-ink mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Step I: Access the IEEE PDF eXpress site
                      </h3>
                      <ul
                        className="space-y-2 text-[16px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <li>
                          • First-time users should create an account by
                          selecting the New Users link and entering the
                          following:
                        </li>
                        <li className="ml-4">
                          -{" "}
                          <span className="font-semibold text-ink">68011X</span>{" "}
                          for the Conference ID
                        </li>
                        <li className="ml-4">- Your email address</li>
                        <li className="ml-4">- A password</li>
                        <li>
                          • Previous users of PDF eXpress can log in using the
                          same email address and password that was used for
                          previous conferences
                        </li>
                        <li className="ml-4">
                          - Enter{" "}
                          <span className="font-semibold text-ink">68011X</span>{" "}
                          for the Conference ID when prompted
                        </li>
                        <li className="ml-4">
                          - Verify that your contact information is updated
                          after logging in
                        </li>
                      </ul>
                    </div>

                    {/* Step II */}
                    <div className="bg-cipher/5 rounded-xl p-4">
                      <h3
                        className="text-[16px] font-semibold text-ink mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Step II: For each conference paper, click "Create New
                        Title"
                      </h3>
                    </div>

                    {/* Step III */}
                    <div className="bg-cipher/5 rounded-xl p-4">
                      <h3
                        className="text-[16px] font-semibold text-ink mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Step III: Enter identifying text for the paper
                      </h3>
                    </div>

                    {/* Step IV */}
                    <div className="bg-cipher/5 rounded-xl p-4">
                      <h3
                        className="text-[16px] font-semibold text-ink mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Step IV: Click "Submit PDF for checking" or "Submit
                        Source Files for Conversion"
                      </h3>
                    </div>

                    {/* Step V */}
                    <div className="bg-cipher/5 rounded-xl p-4">
                      <h3
                        className="text-[16px] font-semibold text-ink mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Step V: Indicate platform, source file type (if
                        applicable), click "Browse" and navigate to file, and
                        click "Upload File"
                      </h3>
                      <p
                        className="text-[16px] text-slate mt-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        You will receive online and email confirmation of
                        successful upload.
                      </p>
                    </div>

                    {/* Step VI */}
                    <div className="bg-cipher/5 rounded-xl p-4">
                      <h3
                        className="text-[16px] font-semibold text-ink mb-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Step VI: You should receive an email with your checked
                        PDF or IEEE PDF eXpress-converted PDF attached
                      </h3>
                      <p
                        className="text-[16px] text-slate mt-2"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        If you submitted a PDF for checking, then the email will
                        show if your file passed or failed.
                      </p>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                      <p
                        className="text-[16px] text-slate leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        If your file did pass, then please upload the certified
                        copy to EasyChair. If your file did not pass, please fix
                        the problem and repeat Step I-VI to check again.{" "}
                        <span className="font-semibold text-ink">Note:</span>{" "}
                        PDF eXpress will not check your paper size (US Letter).
                        Please manually check that your paper uses the right
                        page size (use Adobe Reader → File → Properties).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Upload to EasyChair */}
            <div className="bg-white rounded-2xl p-8 border border-rule">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-cipher/10 flex items-center justify-center">
                    <span
                      className="text-[28px] font-bold text-cipher"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      4
                    </span>
                  </div>
                </div>

                <div className="flex-1">
                  <h2
                    className="text-[28px] font-bold italic text-ink mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Upload the PDF returned to you by IEEE PDF eXpress to
                    EasyChair
                  </h2>

                  <p
                    className="text-[15px] text-slate leading-relaxed mb-4"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    You must submit the IEEE PDF eXpress certified version of
                    your paper (i.e., the version IEEE PDF eXpress emails back
                    to you if everything is correct). Failure to do so might
                    result in your paper not being considered certified by IEEE
                    and it might not be included in the proceedings.
                  </p>

                  <div className="bg-cipher/5 rounded-xl p-4 mb-4">
                    <p
                      className="text-[15px] font-semibold text-ink mb-2"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      VERY IMPORTANT: File Naming Convention
                    </p>
                    <p
                      className="text-[16px] text-slate"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Name your camera-ready (final) file using:{" "}
                      <span className="font-semibold text-ink">
                        "CR-presenting author last name-EasyChair paper ID"
                      </span>
                      <br />
                      (Example: "CR-IAN-1368")
                    </p>
                  </div>

                  <div className="space-y-3">
                    <p
                      className="text-[15px] font-semibold text-ink"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      To submit your camera-ready PDF file electronically,
                      follow these steps:
                    </p>

                    <div className="flex items-start gap-3">
                      <CheckCircle2
                        size={18}
                        className="text-ink flex-shrink-0 mt-1"
                      />
                      <p
                        className="text-[15px] text-slate leading-relaxed"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Login to EasyChair as you did to submit the original
                        paper
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
                        Ensure{" "}
                        <span className="font-semibold text-ink">
                          ALL paper authors
                        </span>{" "}
                        are included on the author list, and in the correct
                        order
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
                        Check that all paper information in EasyChair matches
                        the information on the camera-ready PDF file. Detailed
                        information (title, abstract, etc) that will appear in
                        the conference proceedings will be taken from EasyChair
                        and not from the submitted PDF file
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
                        Click on the "Update File" link, browse to the approved
                        PDF, and then upload. Depending on the size of your file
                        and your internet connection speed, the file upload may
                        take a few minutes. If the file is uploaded successfully
                        then a confirmation message will be displayed. You will
                        also receive an e-mail confirmation with the details of
                        your submission
                      </p>
                    </div>
                  </div>

                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
                    <p
                      className="text-[16px] text-slate leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      The author list must be identical to that provided at the
                      time of submission. The author names, affiliations, and
                      order must be consistent between the submitted paper and
                      the metadata in the EasyChair system. Additions,
                      deletions, or reordering of authors are not allowed.
                    </p>
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
