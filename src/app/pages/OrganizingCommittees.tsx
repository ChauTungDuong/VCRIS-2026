import {
  organizers,
  organizingCommitteeGroups,
  CONF,
  type CommitteePerson,
  type CommitteeGroup,
} from "../data/conferenceData";

function PersonCard({ person }: { person: CommitteePerson }) {
  return (
    <div className="bg-white border border-rule rounded-xl p-5 flex flex-col gap-1.5 hover:border-cipher/40 hover:shadow-sm transition-all duration-150">
      <div className="flex items-start justify-between gap-2">
        <p
          className="text-[15px] font-semibold text-ink leading-snug"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {person.name}
        </p>
        {person.isChair && (
          <span
            className="shrink-0 px-2 py-0.5 rounded-full bg-cipher/10 text-cipher text-[10px] font-semibold uppercase tracking-widest mt-0.5"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Chair
          </span>
        )}
      </div>
      <p
        className="text-[13px] text-slate leading-snug"
        style={{ fontFamily: "var(--font-body)" }}
      >
        {person.affiliation}
      </p>
    </div>
  );
}

function CommitteeSection({ group }: { group: CommitteeGroup }) {
  const isSmall = group.members.length <= 2;

  return (
    <div className="py-10 border-b border-rule last:border-b-0">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-6 rounded-full bg-cipher flex-shrink-0" />
        <h3
          className="text-[22px] font-bold italic text-ink"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {group.role}
        </h3>
        <span
          className="text-[12px] font-medium text-slate"
          style={{ fontFamily: "var(--font-body)" }}
        >
          {group.members.length} member{group.members.length > 1 ? "s" : ""}
        </span>
      </div>

      <div
        className={`grid gap-3 ${
          isSmall ? "grid-cols-2 max-w-[680px]" : "grid-cols-3"
        }`}
      >
        {group.members.map((person) => (
          <PersonCard key={person.name} person={person} />
        ))}
      </div>
    </div>
  );
}

export default function OrganizingCommittees() {
  const totalMembers = organizingCommitteeGroups.reduce(
    (sum, g) => sum + g.members.length,
    0
  );

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
            Organizing Committees
          </h1>
          <p
            className="text-[18px] text-white/70 max-w-[600px]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            The institutions and individuals organizing VCRIS 2026
          </p>
        </div>
      </section>

      {/* Organizing Bodies */}
      <section className="bg-warm pt-16 pb-10">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2
              className="text-[40px] font-bold italic text-ink mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Organizing Bodies
            </h2>
          </div>

          <div className="grid grid-cols-3 gap-6">
            {/* Organizer */}
            <div className="bg-white border border-rule rounded-2xl p-7">
              <h3
                className="text-[11px] font-semibold text-cipher uppercase tracking-[3px] mb-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Organizer
              </h3>
              {organizers.organizer.map((org) => (
                <p
                  key={org}
                  className="text-[15px] font-semibold text-ink leading-snug"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {org}
                </p>
              ))}
            </div>

            {/* Co-Organizers */}
            <div className="bg-white border border-rule rounded-2xl p-7">
              <h3
                className="text-[11px] font-semibold text-cipher uppercase tracking-[3px] mb-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Co-Organizers
              </h3>
              <ul className="space-y-2.5">
                {organizers.coOrganizers.map((org) => (
                  <li
                    key={org}
                    className="flex items-start gap-2 text-[14px] text-ink leading-snug"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-cipher mt-2 flex-shrink-0" />
                    {org}
                  </li>
                ))}
              </ul>
            </div>

            {/* Endorsers */}
            <div className="bg-white border border-rule rounded-2xl p-7">
              <h3
                className="text-[11px] font-semibold text-cipher uppercase tracking-[3px] mb-5"
                style={{ fontFamily: "var(--font-body)" }}
              >
                Endorsers
              </h3>
              <ul className="space-y-2.5">
                {organizers.endorsers.map((org) => (
                  <li
                    key={org}
                    className="flex items-start gap-2 text-[14px] text-ink leading-snug"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    <span className="w-1 h-1 rounded-full bg-cipher mt-2 flex-shrink-0" />
                    {org}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Committee Members */}
      <section className="bg-warm pt-10 pb-16">
        <div className="max-w-[1200px] mx-auto px-6">
          {/* Section header (match Registration Fees style) */}
          <div className="text-center mb-10">
            <h2
              className="text-[40px] font-bold italic text-ink mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Committee Members
            </h2>
          </div>

          {/* Committee groups */}
          <div className="bg-white border border-rule rounded-2xl px-8 overflow-hidden">
            {organizingCommitteeGroups.map((group) => (
              <CommitteeSection key={group.role} group={group} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
