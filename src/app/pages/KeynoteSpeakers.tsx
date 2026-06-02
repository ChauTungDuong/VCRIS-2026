import PageRenderer from "../components/PageRenderer";
import PageTitle from "../components/PageTitle";

const keynoteSpeakersData = [
  {
    name: "Anupam Chattopadhyay",
    role: "Associate Professor",
    institution: "College of Computing and Data Science, Nanyang Technological University, Singapore",
    research: "Computing Architecture, Electronic Design Automation, AI Security, Quantum Safe Systems, Emerging Technologies",
    talk: "The Brave New (Quantum) World",
    image: "/images/anh.png", // Assuming this is available
    abstract: "Major advances across all the design stack of Quantum computing – algorithm, software, and hardware – has brought us to a realm where, it is impossible to ignore the effect of Quantum computing in the world around us. We will discuss two aspects of Quantum computing in this talk. First, efficient circuit design and automation challenges – and how we can borrow some knowledge from classical computing for that. We will conclude this part with case studies on experimental Quantum computers. Second, the most important practical threat from a large-scale Quantum computer is on public-key cryptography. This is countered by developing and standardizing Post-Quantum Cryptography (PQC) primitives. We will talk about various PQC candidates and the perils of migration to a Quantum-safe environment.",
    bio: [
      "Anupam Chattopadhyay received his B.E. degree from Jadavpur University, India, MSc. from ALaRI, Switzerland and PhD from RWTH Aachen in 2000, 2002 and 2008 respectively. From 2008 to 2009, he worked as a Member of Consulting Staff in CoWare R&D, Noida, India. From 2010 to 2014, he led the MPSoC Architectures Research Group in RWTH Aachen, Germany as a Junior Professor. Since September 2014, Anupam was appointed as an Assistant Professor in College of Computing & Data Science, NTU, where he got promoted to Associate Professor with Tenure from August, 2019. In the past, he held visiting positions at Politecnico di Torino, Italy; EPFL, Switzerland; Technion, Israel; Kyoto University, Japan and Indian Statistical Institute, Kolkata.",
      "Anupam currently heads a team of 20+ researchers, overseeing projects in computer architectures, security, design automation and emerging technologies. His research advances have been reported in more than 300 conference/journal papers (ACM/IEEE/Springer), multiple research monographs and edited books (CRC, Springer) and open-access forums.",
      "Anupam regularly serves in the TPCs of top conferences (DAC, DATE, ICCAD, ASP-DAC, CHES), reviews journal/ conference articles and presented multiple invited seminars/tutorials in prestigious venues. He is an Associate Editor of IEEE TCAD, IACR CHES, ACM TECS, served as the Associate Editor of IEEE ESL, lead editor of Springer Handbook of Computer Architectures, and editor of Springer book series on Computer Architecture and Design Methodologies. He is fellow of JSPS, fellow of Intercontinental Academia, senior member of ACM and senior member of IEEE."
    ],
    awards: [
      "Nanyang Award for Innovation and Entrepreneurship, 2025.",
      "Best Poster Award in AsiaCCS, 2025.",
      "Best Paper Award in Cryptographic Hardware and Embedded Systems (CHES), 2025.",
      "Best Paper Award in VLSI-SoC Conference, 2024.",
      "ACM TODAES Distinguished Reviewer, 2022.",
      "IEEE CEDA Distinguished Lecturer, 2022-2023.",
      "Best Paper Award in International Conference on Security, Privacy and Applied Cryptographic Engineering (SPACE), 2020.",
      "Nripendra Nath Biswas Special Mention Recognition in ACM/IEEE VLSI Design Conference, 2020.",
      "Nominated for Best Paper Award in ACM/IEEE VLSI Design Conference, 2018.",
      "Nominated for Best Interactive Presentation (IP) Award in ACM/IEEE DATE, 2016.",
      "Recipient of Borchers’ plaque for outstanding PhD dissertation from RWTH Aachen, 2008."
    ]
  }
];

export default function KeynoteSpeakers() {
  return (
    <PageRenderer
      slug="keynote-speakers"
      fallback={
        <div>
          <PageTitle title="Keynote Speakers" />

          {/* Speakers */}
          <section className="bg-white py-12">
            <div className="max-w-[1200px] mx-auto px-6 space-y-24">
              {keynoteSpeakersData.map((speaker, idx) => (
                <div key={idx} className="flex flex-col gap-10">
                  {/* Top: Image and Info */}
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    {/* Image */}
                    <div className="w-full md:w-[280px] lg:w-[320px] flex-shrink-0">
                      <div className="overflow-hidden">
                        {speaker.image ? (
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-full h-auto object-cover rounded-md shadow-md"
                          />
                        ) : (
                          <div className="w-full aspect-[4/5] bg-cipher/10 rounded-md flex items-center justify-center">
                            <span className="text-cipher/30 text-[48px]">?</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 flex flex-col justify-center text-center md:pt-4">
                      <h3
                        className="text-[22px] md:text-[26px] font-bold text-blue-700 mb-2"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {speaker.role}
                      </h3>
                      <h2
                        className="text-[28px] md:text-[34px] font-bold text-blue-800 mb-4"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {speaker.name}
                      </h2>
                      <p
                        className="text-[16px] md:text-[18px] text-blue-700 font-medium mb-8 max-w-2xl mx-auto"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        {speaker.institution}
                      </p>
                      <p
                        className="text-[15px] text-slate-700 max-w-3xl mx-auto"
                        style={{ fontFamily: "var(--font-body)" }}
                      >
                        <span className="font-bold text-slate-800">Research areas:</span> {speaker.research}
                      </p>
                    </div>
                  </div>

                  {/* Bottom: Title, Abstract, Bio */}
                  <div className="space-y-6">
                    <h3 className="text-[18px] md:text-[20px] font-bold text-ink" style={{ fontFamily: "var(--font-display)" }}>
                      Title: {speaker.talk}
                    </h3>
                    
                    <div>
                      <h4 className="text-[18px] font-bold text-ink mb-3" style={{ fontFamily: "var(--font-body)" }}>
                        Abstract
                      </h4>
                      <p className="text-[15px] text-slate-800 leading-relaxed text-justify indent-8" style={{ fontFamily: "var(--font-body)" }}>
                        {speaker.abstract}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-bold text-ink mb-3" style={{ fontFamily: "var(--font-body)" }}>
                        Bio
                      </h4>
                      <div className="space-y-3">
                        {speaker.bio.map((paragraph, pIdx) => (
                          <p key={pIdx} className="text-[15px] text-slate-800 leading-relaxed text-justify indent-8" style={{ fontFamily: "var(--font-body)" }}>
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-[18px] font-bold text-ink mb-3" style={{ fontFamily: "var(--font-body)" }}>
                        Awards
                      </h4>
                      <div className="space-y-3">
                        {speaker.awards.map((award, aIdx) => (
                          <p key={aIdx} className="text-[15px] text-slate-800 leading-relaxed text-justify indent-8" style={{ fontFamily: "var(--font-body)" }}>
                            {award}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Special Announcement */}
          <section className="bg-cipher py-16 border-t border-cipher text-white">
             <div className="max-w-[1200px] mx-auto px-6 text-center">
                <h3 className="text-[24px] font-bold mb-4" style={{ fontFamily: "var(--font-display)" }}>Announcement</h3>
                <p className="text-[16px]" style={{ fontFamily: "var(--font-body)" }}>
                  Several journal special issues related to VCRIS 2026 will be announced in due course.
                </p>
             </div>
          </section>
        </div>
      }
    />
  );
}
