import { useState } from "react";
import { Download, Calendar } from "lucide-react";

export default function Program() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const day1Schedule = [
    { time: "08:30", title: "Registration & Welcome Coffee", type: "break" },
    { time: "09:00", title: "Opening Ceremony", subtitle: "Welcome Address by Conference Chair", type: "keynote" },
    { time: "09:30", title: "Keynote: Post-Quantum Lattice Cryptography", subtitle: "Dr. Sarah Chen, MIT", type: "keynote" },
    { time: "10:45", title: "Coffee Break", type: "break" },
    { time: "11:15", title: "Session A1: Blockchain Security", subtitle: "Track A · Room 201", type: "sessionA" },
    { time: "11:15", title: "Session B1: AI & ML Security", subtitle: "Track B · Room 202", type: "sessionB" },
    { time: "12:45", title: "Lunch Break", type: "break" },
    { time: "14:00", title: "Keynote: Zero-Knowledge Proof Systems", subtitle: "Prof. Andreas Weber, ETH Zurich", type: "keynote" },
    { time: "15:15", title: "Session A2: Post-Quantum Cryptography", subtitle: "Track A · Room 201", type: "sessionA" },
    { time: "15:15", title: "Session B2: Network Security", subtitle: "Track B · Room 202", type: "sessionB" },
    { time: "16:45", title: "Coffee Break", type: "break" },
    { time: "17:00", title: "Panel Discussion: Future of Cryptography", subtitle: "All Keynote Speakers", type: "keynote" },
    { time: "18:30", title: "Networking Reception", type: "break" }
  ];

  const day2Schedule = [
    { time: "09:00", title: "Keynote: Quantum-Resistant Protocols", subtitle: "Dr. Yuki Tanaka, University of Tokyo", type: "keynote" },
    { time: "10:15", title: "Coffee Break", type: "break" },
    { time: "10:45", title: "Session A3: Privacy Technologies", subtitle: "Track A · Room 201", type: "sessionA" },
    { time: "10:45", title: "Session B3: Digital Forensics", subtitle: "Track B · Room 202", type: "sessionB" },
    { time: "12:15", title: "Lunch Break", type: "break" },
    { time: "13:30", title: "Keynote: Blockchain Security in Practice", subtitle: "Dr. Maria Rodriguez, CryptoSecure Inc.", type: "keynote" },
    { time: "14:45", title: "Session A4: Cryptographic Protocols", subtitle: "Track A · Room 201", type: "sessionA" },
    { time: "14:45", title: "Session B4: IoT Security", subtitle: "Track B · Room 202", type: "sessionB" },
    { time: "16:15", title: "Coffee Break", type: "break" },
    { time: "16:30", title: "Best Paper Awards & Closing Ceremony", subtitle: "Conference Committee", type: "keynote" },
    { time: "18:00", title: "Gala Dinner (Industry Tier Only)", type: "break" }
  ];

  const currentSchedule = activeDay === 1 ? day1Schedule : day2Schedule;

  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative h-[300px] bg-deep">
        <div className="max-w-[1200px] mx-auto px-6 h-full flex flex-col items-center justify-center text-center">
          <h1 className="text-[56px] font-bold italic text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Conference Program
          </h1>
          <p className="text-[18px] text-white/70" style={{ fontFamily: 'var(--font-body)' }}>
            October 30–31, 2025 · Hanoi, Vietnam
          </p>
        </div>
      </section>

      {/* Program Section */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Day Tabs and Export Buttons */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex gap-2">
              <button
                onClick={() => setActiveDay(1)}
                className={`px-6 py-3 rounded-full text-[13px] font-medium transition-all ${
                  activeDay === 1
                    ? 'bg-ink text-white'
                    : 'border border-slate text-slate hover:border-cipher hover:text-cipher'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Day 1 · Thursday, October 30
              </button>
              <button
                onClick={() => setActiveDay(2)}
                className={`px-6 py-3 rounded-full text-[13px] font-medium transition-all ${
                  activeDay === 2
                    ? 'bg-ink text-white'
                    : 'border border-slate text-slate hover:border-cipher hover:text-cipher'
                }`}
                style={{ fontFamily: 'var(--font-body)' }}
              >
                Day 2 · Friday, October 31
              </button>
            </div>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-ink text-ink text-[13px] font-medium hover:bg-ink hover:text-white transition-all" style={{ fontFamily: 'var(--font-body)' }}>
                <Calendar size={16} />
                Add to Calendar (.ics)
              </button>
              <button className="flex items-center gap-2 px-4 py-2 rounded-full border border-ink text-ink text-[13px] font-medium hover:bg-ink hover:text-white transition-all" style={{ fontFamily: 'var(--font-body)' }}>
                <Download size={16} />
                Download PDF
              </button>
            </div>
          </div>

          {/* Schedule Table */}
          <div className="border border-rule rounded-2xl overflow-hidden">
            {currentSchedule.map((item, idx) => {
              const isKeynote = item.type === 'keynote';
              const isBreak = item.type === 'break';
              const isSessionA = item.type === 'sessionA';
              const isSessionB = item.type === 'sessionB';

              return (
                <div
                  key={idx}
                  className={`flex items-start gap-8 p-6 transition-all duration-150 ${
                    isKeynote
                      ? 'border-l-4 border-cipher bg-cipher-dim'
                      : isBreak
                      ? 'bg-paper'
                      : idx % 2 === 0
                      ? 'bg-white hover:bg-cipher-dim'
                      : 'bg-paper hover:bg-cipher-dim'
                  } ${idx !== currentSchedule.length - 1 ? 'border-b border-rule' : ''}`}
                >
                  <div className="w-24 flex-shrink-0 pt-1">
                    <span className="text-[13px] font-medium text-cipher" style={{ fontFamily: 'var(--font-mono)' }}>
                      {item.time}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className={`text-[16px] font-semibold mb-1 ${isBreak ? 'text-slate italic' : 'text-ink'}`} style={{ fontFamily: 'var(--font-body)' }}>
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="text-[14px] text-slate" style={{ fontFamily: 'var(--font-body)' }}>
                        {item.subtitle}
                      </p>
                    )}
                  </div>

                  {(isSessionA || isSessionB) && (
                    <span className={`px-3 py-1 rounded-full text-[12px] font-medium flex-shrink-0 ${
                      isSessionA
                        ? 'bg-cipher/10 text-cipher'
                        : 'bg-amber/10 text-amber'
                    }`} style={{ fontFamily: 'var(--font-body)' }}>
                      {isSessionA ? 'Track A' : 'Track B'}
                    </span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex gap-6 mt-8 justify-center">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-cipher-dim border-l-4 border-cipher" />
              <span className="text-[13px] text-slate" style={{ fontFamily: 'var(--font-body)' }}>Keynote Session</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-cipher/10" />
              <span className="text-[13px] text-slate" style={{ fontFamily: 'var(--font-body)' }}>Track A</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-amber/10" />
              <span className="text-[13px] text-slate" style={{ fontFamily: 'var(--font-body)' }}>Track B</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-paper" />
              <span className="text-[13px] text-slate" style={{ fontFamily: 'var(--font-body)' }}>Break / Social</span>
            </div>
          </div>
        </div>
      </section>

      {/* Session Details */}
      <section className="bg-warm py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-[44px] font-bold italic text-ink text-center mb-16" style={{ fontFamily: 'var(--font-display)' }}>
            Track Information
          </h2>

          <div className="grid grid-cols-2 gap-12">
            <div className="bg-white border border-rule rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-cipher/10 flex items-center justify-center">
                  <span className="text-[18px] font-bold text-cipher" style={{ fontFamily: 'var(--font-mono)' }}>A</span>
                </div>
                <h3 className="text-[24px] font-bold italic text-ink" style={{ fontFamily: 'var(--font-display)' }}>
                  Track A
                </h3>
              </div>
              <p className="text-[15px] text-slate mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                Room 201 · Focus on theoretical cryptography, blockchain technologies, and privacy-preserving systems
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cipher mt-2 flex-shrink-0" />
                  <p className="text-[14px] text-ink" style={{ fontFamily: 'var(--font-body)' }}>
                    6-8 paper presentations per session
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cipher mt-2 flex-shrink-0" />
                  <p className="text-[14px] text-ink" style={{ fontFamily: 'var(--font-body)' }}>
                    15 minutes per presentation + Q&A
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cipher mt-2 flex-shrink-0" />
                  <p className="text-[14px] text-ink" style={{ fontFamily: 'var(--font-body)' }}>
                    Session chairs from leading institutions
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-rule rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-full bg-amber/10 flex items-center justify-center">
                  <span className="text-[18px] font-bold text-amber" style={{ fontFamily: 'var(--font-mono)' }}>B</span>
                </div>
                <h3 className="text-[24px] font-bold italic text-ink" style={{ fontFamily: 'var(--font-display)' }}>
                  Track B
                </h3>
              </div>
              <p className="text-[15px] text-slate mb-6" style={{ fontFamily: 'var(--font-body)' }}>
                Room 202 · Focus on applied security, digital forensics, and emerging technologies
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                  <p className="text-[14px] text-ink" style={{ fontFamily: 'var(--font-body)' }}>
                    6-8 paper presentations per session
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                  <p className="text-[14px] text-ink" style={{ fontFamily: 'var(--font-body)' }}>
                    15 minutes per presentation + Q&A
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber mt-2 flex-shrink-0" />
                  <p className="text-[14px] text-ink" style={{ fontFamily: 'var(--font-body)' }}>
                    Industry perspectives welcome
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-deep py-16">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h3 className="text-[32px] font-bold italic text-white mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Reserve Your Spot
          </h3>
          <p className="text-[16px] text-white/70 mb-8" style={{ fontFamily: 'var(--font-body)' }}>
            Limited seating available for in-person attendance
          </p>
          <a
            href="/registration"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cipher text-white text-[15px] font-semibold hover:shadow-lg hover:shadow-cipher/40 transition-all"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Register Now
          </a>
        </div>
      </section>
    </div>
  );
}
