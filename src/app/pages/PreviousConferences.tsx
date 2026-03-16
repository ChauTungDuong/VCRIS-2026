import { ExternalLink, Calendar, MapPin } from "lucide-react";
import {
  previousConferences,
  keynoteSpeakers2024,
  CONF,
} from "../data/conferenceData";

export default function PreviousConferences() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[320px] overflow-hidden bg-deep">
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "linear-gradient(45deg, transparent 45%, var(--cipher) 45%, var(--cipher) 55%, transparent 55%)",
              backgroundSize: "20px 20px",
            }}
          />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-2 h-2 rounded-full bg-cipher" />
            <span
              className="text-[11px] font-semibold text-cipher uppercase tracking-[3px]"
              style={{ fontFamily: "var(--font-body)" }}
            >
              VCRIS Conference Series
            </span>
          </div>
          <h1
            className="text-[56px] font-bold italic text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Previous Conferences
          </h1>
          <p
            className="text-[18px] text-white/70 max-w-[600px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Archive of past VCRIS editions with proceedings, keynotes and
            accepted papers
          </p>
        </div>
      </section>

      {/* Archive List */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="space-y-12">
            {previousConferences.map((conf) => (
              <div
                key={conf.year}
                className="grid grid-cols-[1fr_auto] gap-8 border border-rule rounded-2xl p-10 hover:border-cipher hover:shadow-lg transition-all"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="px-3 py-1 rounded-full bg-cipher/10 text-cipher text-[12px] font-semibold"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {conf.edition} Edition
                    </span>
                  </div>

                  <h2
                    className="text-[36px] font-bold italic text-ink mb-4"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {conf.name}
                  </h2>

                  <div className="flex items-center gap-6 mb-6">
                    <div
                      className="flex items-center gap-2 text-[14px] text-slate"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <Calendar size={16} className="text-cipher" />
                      {conf.dates}
                    </div>
                    <div
                      className="flex items-center gap-2 text-[14px] text-slate"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      <MapPin size={16} className="text-cipher" />
                      {conf.location}
                    </div>
                  </div>

                  {/* VCRIS 2024 keynote preview */}
                  {conf.year === "2024" && (
                    <div>
                      <p
                        className="text-[12px] font-semibold text-slate uppercase tracking-[2px] mb-3"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        Keynote Speaker
                      </p>
                      <div className="flex items-center gap-4">
                        {keynoteSpeakers2024.map((speaker) => (
                          <div
                            key={speaker.name}
                            className="flex items-center gap-3"
                          >
                            <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-cipher/30">
                              <img
                                src={speaker.image}
                                alt={speaker.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p
                                className="text-[14px] font-semibold text-ink"
                                style={{ fontFamily: "var(--font-body)" }}
                              >
                                {speaker.name}
                              </p>
                              <p
                                className="text-[13px] text-slate"
                                style={{ fontFamily: "var(--font-body)" }}
                              >
                                {speaker.institution}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-col items-end justify-between">
                  <div
                    className="text-[64px] font-bold opacity-5"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--cipher)",
                    }}
                  >
                    {conf.year}
                  </div>
                  <a
                    href={conf.wpUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cipher text-white text-[14px] font-semibold hover:shadow-lg hover:shadow-cipher/40 transition-all"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    View Archive
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Note about current conference */}
          <div className="mt-16 p-8 rounded-2xl bg-cipher/5 border border-cipher/20 text-center">
            <p
              className="text-[16px] text-ink mb-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Looking for <strong>{CONF.name}</strong>?
            </p>
            <p
              className="text-[14px] text-slate"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The current edition is live —{" "}
              <a href="/" className="text-cipher hover:underline font-medium">
                return to the main site
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
