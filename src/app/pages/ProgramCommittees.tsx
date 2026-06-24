import { organizingCommitteeGroups } from "../data/conferenceData";
import PageTitle from "../components/PageTitle";
import PageRenderer from "../components/PageRenderer";

export default function ProgramCommittees() {
  const programCommitteeGroup = organizingCommitteeGroups.find(g => g.role === "Ban Chương trình");
  const programCommittee = programCommitteeGroup ? programCommitteeGroup.members : [];

  return (
    <PageRenderer
      slug="program-committees"
      fallback={
        <div>
          <PageTitle title="Program Committees" />

      {/* Table Section */}
      <section className="bg-warm py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Table */}
          <div className="rounded-2xl overflow-hidden border border-rule bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="bg-warm text-left border-b border-rule">
                  <th
                    className="px-6 py-4 text-[13px] font-bold text-ink uppercase tracking-[1px] w-14"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    #
                  </th>
                  <th
                    className="px-6 py-4 text-[15px] font-bold text-ink uppercase tracking-[1px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Name
                  </th>
                  <th
                    className="px-6 py-4 text-[15px] font-bold text-ink uppercase tracking-[1px]"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    Affiliation
                  </th>
                </tr>
              </thead>
              <tbody>
                {programCommittee.map((member, idx) => (
                  <tr
                    key={`${member.name}-${idx}`}
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
                      {member.name}
                    </td>
                    <td
                      className="px-6 py-3.5 text-[14px] text-slate"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      {member.affiliation || ""}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Footer note */}
          <div className="flex items-center justify-center gap-3 mt-10">
            <span className="w-2.5 h-2.5 rounded-full bg-red-600 animate-pulse" />
            <p
              className="text-[18px] text-red-600 font-semibold italic"
              style={{ fontFamily: "var(--font-body)" }}
            >
              The program committee will be continuously updated
            </p>
          </div>
        </div>
      </section>
    </div>
  } />
  );
}
