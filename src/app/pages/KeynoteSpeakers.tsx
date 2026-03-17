import { keynoteSpeakers } from "../data/conferenceData";

const tbaSlots = [
  {
    name: "DR. WOUTER CASTRYCK",
    role: "Research Expert",
    institution: "COSIC, KU Leuven",
    talk: "Isogeny-based cryptography: an overview of the current landscape",
    image: "",
    bio: "Dr. Wouter Castryck is a renowned researcher at KU Leuven specializing in the computational aspects of algebraic geometry and number theory. A recipient of best paper awards at Eurocrypt 2023 and Crypto 2020, his work focuses on post-quantum cryptographic applications, including isogeny-based, multivariate, and lattice-based cryptography."
  },
  {
    name: "DR. FLORIAN CAULLERY",
    role: "Director SoC Security | Cryptographer",
    institution: "Technology Innovation Institute (TII)",
    talk: "One Chip, Many Engines: Accelerating and Securing cryptographic algorithms on modern SoCs",
    image: "",
    bio: "Dr. Florian Caullery is a cryptographer at the Secure Systems Research Center in Abu Dhabi with over a decade of experience spanning theoretical and applied cybersecurity. Having worked with industry leaders like Qualcomm and ST-Microelectronics, his expertise focuses on post-quantum cryptography, side-channel resistance, and the integration of secure cryptographic workloads within heterogeneous System-on-Chip (SoC) architectures."
  },
];

export default function KeynoteSpeakers() {
  const speakers = [...keynoteSpeakers, ...tbaSlots];

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[400px] overflow-hidden bg-deep">
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
              VCRIS 2025
            </span>
          </div>
          <h1
            className="text-[56px] font-bold italic text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Keynote Speakers
          </h1>
          <p
            className="text-[18px] text-white/70 max-w-[600px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            World-renowned experts sharing cutting-edge research and insights in
            cryptography and information security
          </p>
        </div>
      </section>

      {/* Speakers Grid */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-8">
            {speakers.map((speaker, idx) => (
              <div key={idx} className="group">
                <div
                  className={`bg-white border rounded-2xl p-8 transition-all duration-200 hover:border-cipher hover:shadow-lg hover:-translate-y-1 ${speaker.name === "Speaker TBA" ? "border-dashed border-rule opacity-60" : "border-rule"}`}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-[88px] h-[88px] rounded-full overflow-hidden ring-2 ring-cipher ring-offset-4 mb-4 bg-cipher/10 flex items-center justify-center">
                      {speaker.image ? (
                        <img
                          src={speaker.image}
                          alt={speaker.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-[32px] text-cipher/30">?</span>
                      )}
                    </div>

                    <h3
                      className="text-[18px] font-semibold text-ink text-center mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {speaker.name}
                    </h3>

                    <p
                      className="text-[13px] text-slate text-center mb-1"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {speaker.role}
                    </p>

                    <p
                      className="text-[13px] font-medium text-cipher text-center mb-4"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {speaker.institution}
                    </p>

                    <div className="px-3 py-1.5 rounded-full bg-cipher/10 border border-cipher/30 mb-4 w-full">
                      <p
                        className="text-[12px] font-medium text-cipher text-center"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {speaker.talk}
                      </p>
                    </div>

                    <p
                      className="text-[14px] text-slate text-center leading-relaxed"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {speaker.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-warm py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3
            className="text-[36px] font-bold italic text-ink mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Join Us in Hanoi
          </h3>
          <p
            className="text-[16px] text-slate mb-8"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Don't miss the opportunity to learn from these distinguished
            speakers
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="/registration"
              className="px-8 py-4 rounded-full bg-cipher text-white text-[15px] font-semibold hover:shadow-lg hover:shadow-cipher/40 transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Register Now
            </a>
            <a
              href="/program"
              className="px-8 py-4 rounded-full border border-ink text-ink text-[15px] font-semibold hover:bg-ink hover:text-white transition-all"
              style={{ fontFamily: "var(--font-body)" }}
            >
              View Full Program
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
