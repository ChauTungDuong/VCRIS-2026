async function seedFullSystem() {
  const loginRes = await fetch("http://localhost:4000/api/v1/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email: "admin@vcris.org", password: "vcris2026admin" })
  });

  if (!loginRes.ok) {
    console.error("Login failed:", await loginRes.text());
    return;
  }

  const { token } = await loginRes.json();
  const headers = { 
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };

  const pages = [
    {
      slug: "home",
      title: "Home",
      content: {
        content: [
          { 
            type: "HomeHero", 
            props: { id: "hero", bgImageUrl: "/images/lake.jpg" },
            zones: {
              "hero-content": [
                { type: "SectionHeading", props: { id: "eyebrow", content: "<div class='flex items-center gap-3'><div class='w-8 h-1 bg-cipher'></div><span class='text-[11px] font-semibold text-white tracking-[4px] uppercase'>VCRIS 2026</span></div>", level: 6, margin: "0 0 24px 0" } },
                { type: "SectionHeading", props: { id: "title", content: "<div class='pl-6 relative'><div class='absolute left-0 top-0 w-[1px] h-[72px] bg-cipher'></div><span class='block text-[38px] md:text-[48px] italic font-bold'>The 3rd International Conference on</span><span class='block text-[44px] md:text-[62px] italic font-bold mt-1'>Cryptography & Information Security</span></div>", level: 1, color: "white", fontFamily: "var(--font-display)", fontWeight: "700" } },
                { type: "TextBlock", props: { id: "chips", content: "<div class='flex gap-3 mt-8'><div class='flex items-center gap-2 px-4 py-4 rounded-[20px] bg-white/10 border border-white/20 backdrop-blur-sm whitespace-nowrap'><span class='text-[14px] font-medium text-white'>October 29 - 30, 2026</span></div><div class='flex items-center gap-2 px-4 py-4 rounded-[20px] bg-white/10 border border-white/20 backdrop-blur-sm whitespace-nowrap'><span class='text-[14px] font-medium text-white'>Academy of Cryptography Techniques, Hanoi</span></div></div>" } }
              ]
            }
          },
          { 
            type: "HomeImportantDates", 
            props: { id: "dates", conferenceDateRaw: "October 29, 2026 00:00:00" },
            zones: {
              "left-panel-content": [
                { type: "SectionHeading", props: { id: "dates-h", content: "VCRIS 2026", level: 4, textAlign: "center", color: "#0b2740", fontSize: "36px", fontFamily: "var(--font-display)" } },
                { type: "TextBlock", props: { id: "dates-t1", content: "October 29 - 30, 2026", textAlign: "center", color: "#0b2740", fontSize: "34px", fontFamily: "var(--font-display)" } },
                { type: "TextBlock", props: { id: "dates-t2", content: "Academy of Cryptography Techniques, Hanoi, Vietnam", textAlign: "center", color: "#0b2740", fontSize: "20px" } }
              ],
              "right-panel-content": [
                { type: "SectionHeading", props: { id: "dates-rh", content: "Important Dates", level: 3, fontStyle: "italic", fontSize: "32px" } },
                { type: "RichText", props: { id: "dates-list", html: "<div class='space-y-6 relative pl-5 md:pl-6'><div class='absolute left-0 top-2 bottom-2 w-[1px] border-l border-dashed border-rule'></div><div class='relative flex gap-4 items-start'><div class='absolute -left-[21px] md:-left-[25px] w-2.5 h-2.5 rounded-full bg-cipher'></div><div class='flex-1'><div class='flex flex-wrap items-center gap-2 mb-1'><span class='text-[15px] font-semibold text-cipher'>June 30, 2026</span></div><p class='text-[15px] font-medium text-ink'>Paper Submission Deadline</p></div></div><div class='relative flex gap-4 items-start'><div class='absolute -left-[21px] md:-left-[25px] w-2.5 h-2.5 rounded-full bg-cipher'></div><div class='flex-1'><div class='flex flex-wrap items-center gap-2 mb-1'><span class='text-[15px] font-semibold text-cipher'>July 31, 2026</span></div><p class='text-[15px] font-medium text-ink'>Notification of Acceptance</p></div></div><div class='relative flex gap-4 items-start'><div class='absolute -left-[21px] md:-left-[25px] w-2.5 h-2.5 rounded-full bg-cipher'></div><div class='flex-1'><div class='flex flex-wrap items-center gap-2 mb-1'><span class='text-[15px] font-semibold text-cipher'>September 25, 2026</span></div><p class='text-[15px] font-medium text-ink'>Camera-Ready Submission</p></div></div></div>" } }
              ]
            }
          },
          { 
            type: "HomeAbout", 
            props: { id: "about" },
            zones: {
              "about-left": [
                { type: "SectionHeading", props: { id: "about-h", content: "Building the Future of Cryptographic Science", level: 2, fontStyle: "italic", fontSize: "44px" } },
                { type: "TextBlock", props: { id: "about-t1", content: "Following the success of VCRIS 2025, this event will continue to be held in Hanoi, the thousand-year-old capital of Vietnam." } },
                { type: "TextBlock", props: { id: "about-t2", content: "The Academy of Cryptography Techniques will serve as the venue for VCRIS 2026." } },
                { type: "RichText", props: { id: "about-tags", html: "<div class='flex flex-wrap gap-2'><span class='px-3 py-1.5 rounded-full bg-cipher-dim text-cipher text-[12px] font-medium'>Post-Quantum Cryptography</span><span class='px-3 py-1.5 rounded-full bg-cipher-dim text-cipher text-[12px] font-medium'>AI Security</span><span class='px-3 py-1.5 rounded-full bg-cipher-dim text-cipher text-[12px] font-medium'>Blockchain</span></div>" } }
              ],
              "about-stats": [
                { type: "RichText", props: { id: "about-s1", html: "<div class='bg-white border border-rule rounded-2xl p-6'><div class='text-[36px] font-bold text-cipher mb-1' style='font-family: var(--font-mono)'>3rd</div><div class='text-[14px] text-ink' style='font-family: var(--font-body)'>Edition</div></div>" } },
                { type: "RichText", props: { id: "about-s2", html: "<div class='bg-white border border-rule rounded-2xl p-6'><div class='text-[36px] font-bold text-cipher mb-1' style='font-family: var(--font-mono)'>IEEE</div><div class='text-[14px] text-ink' style='font-family: var(--font-body)'>Indexed</div></div>" } }
              ]
            }
          },
          { 
            type: "HomeCfa", 
            props: { id: "cfa" },
            zones: {
              "cfa-content": [
                { type: "SectionHeading", props: { id: "cfa-h", content: "Your Research Belongs Here", level: 2, textAlign: "center", color: "white", fontStyle: "italic", fontSize: "48px" } },
                { type: "TextBlock", props: { id: "cfa-t", content: "IEEE-indexed proceedings · Double-blind peer review", textAlign: "center", color: "rgba(255,255,255,0.8)" } },
                { type: "ButtonLink", props: { id: "cfa-b", text: "Submit Paper via EasyChair", variant: "white", size: "medium", align: "center", url: "https://easychair.org" } }
              ]
            }
          }
        ]
      }
    },
    {
      slug: "call-for-papers",
      title: "Call for Papers",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Call for Papers", bgImageUrl: "/images/lake.jpg" } },
          { type: "Section", props: { id: "scope", backgroundColor: "#FFFFFF", padding: "64px 24px" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Conference Scope", level: 2 } },
            { type: "TextBlock", props: { id: "t1", content: "VCRIS 2026 aims to bring together researchers, practitioners, and industry experts to explain and discuss the latest advances in cryptography, post-quantum security, and AI-driven cybersecurity." } },
            { type: "SectionHeading", props: { id: "h2", content: "Conference Tracks", level: 3 } },
            { type: "ListBlock", props: { id: "list1", items: ["Theoretical and Post-Quantum Cryptography", "Applied Cryptography and Privacy", "Systems and Network Security", "AI-driven Security", "Emerging Security Technologies"] } }
          ] } },
          { type: "ContactCTA", props: { id: "cta", title: "Questions About Submission?", subtitle: "Contact our Program Committee for clarifications", btnLabel: "Email Program Committee", btnEmail: "vcris@actvn.edu.vn" } }
        ]
      }
    },
    {
      slug: "registration",
      title: "Registration",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Registration", bgImageUrl: "/images/lake.jpg" } },
          { type: "Section", props: { id: "fees", padding: "64px 24px" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Registration Fees", level: 2, textAlign: "center" } },
            { type: "TextBlock", props: { id: "t1", content: "Early bird rates available until September 30, 2025", textAlign: "center" } },
            { type: "TableBlock", props: { id: "table", title: "Fees Structure" } }
          ] } }
        ]
      }
    },
    {
      slug: "venue",
      title: "Venue",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Venue & Travel", bgImageUrl: "https://images.unsplash.com/photo-1758413149178-95efe71954fd", height: "500px" } },
          { type: "Section", props: { id: "map-sec", padding: "64px 24px" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Academy of Cryptography Techniques", level: 2 } },
            { type: "Map", props: { id: "map", embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.195748202528!2d105.79383627503006!3d20.984786980650942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc6bd794301%3A0x57488c6bd794301!2zSOG7jWMgdmnhu4duIEvhu7kgdGh14bqtdCBN4bqtdCBtw6M!5e0!3m2!1svi!2s!4v1711440000000!5m2!1svi!2s" } }
          ] } },
          { type: "Section", props: { id: "photos", backgroundColor: "#F9FAFB" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h2", content: "Photos of the Academy", level: 2, textAlign: "center" } },
            { type: "ImageGrid", props: { id: "grid", images: [
              { url: "https://vcris.org/wp-content/uploads/2024/03/2022-11-08-1024x672.jpg" },
              { url: "https://vcris.org/wp-content/uploads/2024/03/z5027586123041_31223954bd029175686cbedd54c930df-1024x768.jpg" },
              { url: "https://vcris.org/wp-content/uploads/2024/01/Toa-nha-Ban-co-yeu-chinh-phu-4.jpg" }
            ] } }
          ] } }
        ]
      }
    },
    {
      slug: "accommodation",
      title: "Accommodation",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Accommodation", bgImageUrl: "https://images.unsplash.com/photo-1571896349842-332ce143f2c1" } },
          { type: "Section", props: { id: "hotels", padding: "64px 24px" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Recommended Hotels", level: 2, textAlign: "center" } },
            { type: "TextBlock", props: { id: "t1", content: "We recommend the following hotels for conference attendees:", textAlign: "center" } },
            { type: "ImageGrid", props: { id: "hotel-grid", images: [
              { url: "https://vcris.org/wp-content/uploads/2024/03/hotel.png" },
              { url: "https://vcris.org/wp-content/uploads/2024/03/intercontiental.jpg" }
            ], columns: 2 } }
          ] } }
        ]
      }
    },
    {
      slug: "organizing-committees",
      title: "Organizing Committees",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Organizing Committees", bgImageUrl: "/images/lake.jpg" } },
          { type: "Section", props: { id: "bodies", padding: "64px 24px" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Organizing Bodies", level: 2, textAlign: "center" } },
            { type: "TextBlock", props: { id: "t1", content: "The conference is organized by the Academy of Cryptography Techniques.", textAlign: "center" } }
          ] } }
        ]
      }
    },
    {
      slug: "program-committees",
      title: "Program Committees",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Program Committees" } },
          { type: "Section", props: { id: "pc", padding: "64px 24px" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Program Committee", level: 2, textAlign: "center" } },
            { type: "TableBlock", props: { id: "table", title: "PC Members" } }
          ] } }
        ]
      }
    },
    {
      slug: "call-for-workshops",
      title: "Call for Workshops",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Call for Workshops" } },
          { type: "Section", props: { id: "s1", padding: "64px 24px" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Business Workshops", level: 2 } },
            { type: "TextBlock", props: { id: "t1", content: "VCRIS 2026 welcomes proposals for industrial workshops." } }
          ] } }
        ]
      }
    },
    {
      slug: "instructions-for-authors",
      title: "Instructions for Authors",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Instruction for Authors" } },
          { type: "Section", props: { id: "s1", padding: "64px 24px" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Submission Guidelines", level: 2 } }
          ] } }
        ]
      }
    },
    {
      slug: "paper-submission",
      title: "Paper Submission",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Paper Submission" } }
        ]
      }
    },
    {
      slug: "previous-conferences",
      title: "Previous Conferences",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Previous Conferences" } }
        ]
      }
    },
    {
      slug: "camera-ready-submission",
      title: "Camera Ready Submission",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Camera Ready Submission" } }
        ]
      }
    }
  ];

  for (const page of pages) {
    console.log(`Updating ${page.slug}...`);
    const updateRes = await fetch(`http://localhost:4000/api/v1/pages/${page.slug}`, {
      method: "PUT",
      headers,
      body: JSON.stringify({ 
        title: page.title, 
        locale: "en", 
        content: page.content,
        isPublished: true 
      })
    });

    if (!updateRes.ok) {
      console.error(`Failed to update ${page.slug}:`, await updateRes.text());
    } else {
      console.log(`Successfully updated ${page.slug}`);
    }
  }
  console.log("All pages updated successfully!");
}

seedFullSystem();
