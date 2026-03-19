import { programCommittee, CONF } from "../data/conferenceData";

export default function ProgramCommittees() {
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
              {CONF.name}
            </span>
          </div>
          <h1
            className="text-[56px] font-bold italic text-white mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Program Committees
          </h1>
          <p
            className="text-[18px] text-white/70 max-w-[600px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The technical program committee members
          </p>
        </div>
      </section>

      {/* Table Section */}
      <section className="bg-warm py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section header (match Registration Fees style) */}
          <div className="text-center mb-12">
            <h2
              className="text-[40px] font-bold italic text-ink mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Program Committee
            </h2>
          </div>

          {/* Table */}
          <div className="rounded-2xl overflow-hidden border border-rule bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-warm text-left border-b border-rule">
                  <th
                    className="px-6 py-4 text-[11px] font-semibold text-slate uppercase tracking-[2px] w-14"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    #
                  </th>
                  <th
                    className="px-6 py-4 text-[11px] font-semibold text-slate uppercase tracking-[2px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    First Name
                  </th>
                  <th
                    className="px-6 py-4 text-[11px] font-semibold text-slate uppercase tracking-[2px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Last Name
                  </th>
                  <th
                    className="px-6 py-4 text-[11px] font-semibold text-slate uppercase tracking-[2px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Affiliation
                  </th>
                </tr>
              </thead>
              <tbody>
                {programCommittee.map((member, idx) => (
                  <tr
                    key={`${member.firstName}-${member.lastName}-${idx}`}
                    className="border-t border-rule hover:bg-cipher/5 transition-colors"
                  >
                    <td
                      className="px-6 py-3.5 text-[13px] text-slate/40 tabular-nums"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {idx + 1}
                    </td>
                    <td
                      className="px-6 py-3.5 text-[14px] font-medium text-ink"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {member.firstName}
                    </td>
                    <td
                      className="px-6 py-3.5 text-[14px] font-medium text-ink"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {member.lastName}
                    </td>
                    <td
                      className="px-6 py-3.5 text-[14px] text-slate"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {member.affiliation}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <p
              className="text-[13px] text-slate italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The program committee will be continuously updated
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
