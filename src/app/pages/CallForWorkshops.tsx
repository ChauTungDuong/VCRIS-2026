import { ArrowRight, Mail } from "lucide-react";
import { TopImage } from "../components/TopImage";
import { callForWorkshopsText, CONF } from "../data/conferenceData";

export default function CallForWorkshops() {
  return (
    <div className="pt-16">
      <TopImage title="Call for Workshops" />

      {/* Scope Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left: Intro */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-cipher" />
                <span
                  className="text-[11px] font-semibold text-cipher uppercase tracking-[3px]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  WORKSHOP INFO
                </span>
              </div>

              <h2
                className="text-[40px] font-bold italic text-ink leading-[1.15] mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Business Workshops
              </h2>

              <p
                className="text-[16px] text-slate mb-8 leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {callForWorkshopsText.intro}
              </p>
              
              <div className="p-6 rounded-2xl border border-cipher bg-cipher/5">
                <p 
                  className="text-[16px] font-semibold text-cipher"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {callForWorkshopsText.details}
                </p>
              </div>
            </div>

            {/* Right: Contact Card */}
            <div>
              <div className="bg-white border border-rule rounded-[20px] p-8 md:sticky md:top-24">
                <h3
                  className="text-[24px] font-bold italic text-ink mb-6"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Contact Organizers
                </h3>

                <p
                  className="text-[15px] text-slate mb-8 leading-relaxed"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  Should you have any inquiries regarding the workshops, please feel very free to contact the conference organizers via email or phone.
                </p>

                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-cipher/10 flex items-center justify-center flex-shrink-0">
                      <Mail size={18} className="text-cipher" />
                    </div>
                    <div>
                      <h4
                        className="text-[15px] font-semibold text-ink mb-1"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Email
                      </h4>
                      <a href={`mailto:${CONF.contactEmail}`} className="text-[15px] text-cipher hover:underline" style={{ fontFamily: "var(--font-body)" }}>
                        {CONF.contactEmail}
                      </a>
                    </div>
                  </div>

                  {callForWorkshopsText.contact.map((contact, idx) => (
                    <div key={idx} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-slate/10 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-[13px] font-bold text-slate" style={{ fontFamily: "var(--font-mono)" }}>{`0${idx + 1}`}</span>
                      </div>
                      <div>
                        <h4
                          className="text-[15px] font-bold text-ink mb-1"
                          style={{ fontFamily: "var(--font-body)" }}
                        >
                          {contact.name}
                        </h4>
                        {contact.descriptions.map((line, i) => (
                          <p
                            key={i}
                            className="text-[14px] text-slate leading-[1.6] mb-1"
                            style={{ fontFamily: "var(--font-body)" }}
                          >
                            {line}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                </div>

                <div className="space-y-3">
                  <button
                    onClick={() => window.location.href = `mailto:${CONF.contactEmail}`}
                    className="w-full h-11 rounded-xl bg-cipher text-white text-[14px] font-semibold flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-cipher/40 transition-all"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Email Organizers
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
