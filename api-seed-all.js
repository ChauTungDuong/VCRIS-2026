async function seedAllPages() {
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
        root: { props: {} },
        content: [
          { type: "HomeHero", props: { id: "hero", eyebrow: "VCRIS 2026", titlePart1: "The 3rd International Conference on", titlePart2: "Cryptography & Information Security", time: "October 29 - 30, 2026", venue: "Academy of Cryptography Techniques, Hanoi, Vietnam", bgImageUrl: "/images/lake.jpg" } },
          { type: "HomeImportantDates", props: { id: "dates", conferenceName: "VCRIS 2026", conferenceDateRaw: "October 29 - 30, 2026", conferenceLocation: "Academy of Cryptography Techniques, Hanoi, Vietnam", importantDatesTitle: "Important Dates", dates: [{ date: "June 30, 2026", label: "Paper Submission Deadline" }, { date: "July 31, 2026", label: "Notification of Acceptance" }, { date: "September 25, 2026", label: "Camera-Ready Submission" }, { date: "October 29 - 30, 2026", label: "Conference Dates", highlight: true }] } },
          { type: "HomeAbout", props: { id: "about", eyebrow: "ABOUT THE CONFERENCE", title: "Building the Future of Cryptographic Science", paragraphs: [{ text: "Following the success of VCRIS 2025, this event will continue to be held in Hanoi, the thousand-year-old capital of Vietnam." }, { text: "The Academy of Cryptography Techniques will serve as the venue for VCRIS 2026." }], topics: [{ topic: "Post-Quantum Cryptography" }, { topic: "AI Security" }, { topic: "Blockchain" }], stats: [{ number: "3rd", label: "Edition" }, { number: "IEEE", label: "Indexed" }] } },
          { type: "HomeCfa", props: { id: "cfa", title: "Your Research Belongs Here", subtitle: "IEEE-indexed proceedings · Double-blind peer review", btnLabel: "Submit Paper via EasyChair", btnUrl: "https://easychair.org" } }
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
          { type: "Section", props: { id: "sec1", backgroundColor: "#FFFFFF", padding: "64px 24px" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Conference Scope", level: 2 } },
            { type: "TextBlock", props: { id: "t1", content: "VCRIS 2026 aims to bring together researchers, practitioners, and industry experts to discuss the latest advances in cryptography and information security." } }
          ] } },
          { type: "ContactCTA", props: { id: "cta", title: "Questions About Submission?", subtitle: "Contact our Program Committee for clarifications", btnLabel: "Email Program Committee", btnEmail: "vcris@actvn.edu.vn" } }
        ]
      }
    },
    {
      slug: "keynote-speakers",
      title: "Keynote Speakers",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Keynote Speakers", bgImageUrl: "/images/lake.jpg" } },
          { type: "Section", props: { id: "sec1" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Voices Shaping Cryptography", textAlign: "center" } },
            { type: "TextBlock", props: { id: "t1", content: "World-renowned experts sharing cutting-edge research and insights.", textAlign: "center" } }
          ] } },
          { type: "ContactCTA", props: { id: "cta", title: "Join Us in Hanoi", subtitle: "Don't miss the opportunity to learn from these distinguished speakers", btnLabel: "Register Now", btnEmail: "vcris@actvn.edu.vn" } }
        ]
      }
    },
    {
      slug: "registration",
      title: "Registration",
      content: {
        root: { props: {} },
        content: [
          { type: "TopImageHeader", props: { id: "header", title: "Registration", bgImageUrl: "/images/lake.jpg", height: "300px" } },
          { type: "Section", props: { id: "fees", padding: "64px 24px", backgroundColor: "#F9FAFB" }, zones: { content: [
            { type: "SectionHeading", props: { id: "h1", content: "Registration Fees", level: 2, textAlign: "center" } },
            { type: "TextBlock", props: { id: "t1", content: "Early bird rates available until September 30, 2025", textAlign: "center" } },
            { type: "TableBlock", props: { id: "table", title: "Fees Table" } }
          ] } }
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
}

seedAllPages();
