import { organizers, CONF } from "../data/conferenceData";

const programCommittee = [
  { name: "Nguyen Ngoc Cuong", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Dinh Manh Tuan", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Ngo Duc Thinh", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Le Vu Ha", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Nguyen The Cuong", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Nguyen Duc Minh", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Nguyen Van Loi", affiliation: "Academy of Cryptography Techniques, Vietnam" },
  { name: "Vu Thi Viet Ha", affiliation: "Le Quy Don Technical University, Vietnam" },
  { name: "Do Thi Thu Hien", affiliation: "Le Quy Don Technical University, Vietnam" },
  { name: "Pham Bao Son", affiliation: "Vietnam National University, Hanoi" },
  { name: "Nguyen Hieu Minh", affiliation: "Vietnam National University, Hanoi" },
  { name: "Tran Thi Luong", affiliation: "Ho Chi Minh City University of Technology, Vietnam" },
  { name: "Nguyen Thi Thu Hang", affiliation: "Ho Chi Minh City University of Technology, Vietnam" },
  { name: "Tanaka Kiyofumi", affiliation: "Japan Advanced Institute of Science and Technology (JAIST), Japan" },
  { name: "Kazuki Yoneyama", affiliation: "Ibaraki University, Japan" },
  { name: "Atsuko Miyaji", affiliation: "Osaka University, Japan" },
  { name: "Bart Preneel", affiliation: "KU Leuven (COSIC), Belgium" },
  { name: "Ingrid Verbauwhede", affiliation: "KU Leuven (COSIC), Belgium" },
  { name: "Edgar Weippl", affiliation: "University of Vienna, Austria" },
];

export default function Committees() {
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
            Committees
          </h1>
          <p
            className="text-[18px] text-white/70 max-w-[600px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The organizing and program committees behind VCRIS 2025
          </p>
        </div>
      </section>

      {/* Organizing Bodies */}
      <section className="bg-white py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 mb-16">
            {/* Organizer */}
            <div className="bg-cipher/5 border border-cipher/20 rounded-2xl p-8">
              <h3
                className="text-[13px] font-semibold text-cipher uppercase tracking-[3px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Organizer
              </h3>
              {organizers.organizer.map((org) => (
                <p
                  key={org}
                  className="text-[16px] font-semibold text-ink"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {org}
                </p>
              ))}
            </div>

            {/* Co-Organizers */}
            <div className="bg-warm border border-rule rounded-2xl p-8">
              <h3
                className="text-[13px] font-semibold text-cipher uppercase tracking-[3px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Co-Organizers
              </h3>
              <ul className="space-y-2">
                {organizers.coOrganizers.map((org) => (
                  <li
                    key={org}
                    className="text-[14px] text-ink"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {org}
                  </li>
                ))}
              </ul>
            </div>

            {/* Endorsers */}
            <div className="bg-warm border border-rule rounded-2xl p-8">
              <h3
                className="text-[13px] font-semibold text-cipher uppercase tracking-[3px] mb-4"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Technical Endorsers
              </h3>
              <ul className="space-y-2">
                {organizers.endorsers.map((org) => (
                  <li
                    key={org}
                    className="text-[14px] text-ink"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {org}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Program Committee */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2 h-2 rounded-full bg-cipher" />
              <h2
                className="text-[40px] font-bold italic text-ink"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Program Committee
              </h2>
            </div>

            <div className="overflow-hidden border border-rule rounded-2xl">
              <table className="w-full">
                <thead>
                  <tr className="bg-deep text-left">
                    <th
                      className="px-6 py-4 text-[12px] font-semibold text-white/60 uppercase tracking-[2px]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Name
                    </th>
                    <th
                      className="px-6 py-4 text-[12px] font-semibold text-white/60 uppercase tracking-[2px]"
                      style={{ fontFamily: "var(--font-body)" }}
                    >
                      Affiliation
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {programCommittee.map((member, idx) => (
                    <tr
                      key={member.name}
                      className={`border-t border-rule ${idx % 2 === 0 ? "bg-white" : "bg-paper"}`}
                    >
                      <td
                        className="px-6 py-4 text-[15px] font-medium text-ink"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {member.name}
                      </td>
                      <td
                        className="px-6 py-4 text-[14px] text-slate"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {member.affiliation}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
