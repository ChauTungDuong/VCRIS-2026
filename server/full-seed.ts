import {
  callForPapersText,
  conferenceTracks,
  keynoteSpeakers,
  CONF
} from '../old/VCRIS-2026/src/app/data/conferenceData';

const API_BASE = "http://localhost:4000/api/v1";
const id = (prefix: string) => prefix + "-" + Math.random().toString(36).substr(2, 9);

function createPage(slug: string, title: string, isSystem: boolean, blocks: any[]) {
  const contentArray: any[] = [];
  const zones: any = {};

  blocks.forEach(block => {
    const blockId = id(block.type);
    const props = { id: blockId, ...block.props };
    contentArray.push({ type: block.type, props });

    if (block.zones) {
      for (const [zoneName, children] of Object.entries(block.zones)) {
        zones[`${blockId}:${zoneName}`] = (children as any[]).map(child => {
          const childId = id(child.type);
          return { type: child.type, props: { id: childId, ...child.props } };
        });
      }
    }
  });

  return {
    slug,
    title,
    isSystem,
    content: {
      root: { props: {} },
      content: contentArray,
      zones
    }
  };
}

const cfaBlocks = Object.values(conferenceTracks).map((track: any) => ({
  type: "AccordionBlock",
  props: { 
    title: `${track.label.toUpperCase()}: ${track.title.substring(0, 50)}...`, 
    content: `<ul>${track.topic.map((t: string) => `<li>${t}</li>`).join("")}</ul>` 
  }
}));

const pages = [
  createPage("call-for-papers", "Call for Papers", false, [
    { type: "TopImageHeader", props: { title: "Call for Papers", bgImageUrl: "/images/lake.jpg" } },
    { type: "Section", props: {}, zones: {
      "content": [
        { type: "SectionHeading", props: { content: "About the Conference", level: 2, fontStyle: "italic" } },
        ...callForPapersText.about.map((p: string) => ({ type: "TextBlock", props: { content: p, margin: "0 0 16px 0" } })),
        { type: "SectionHeading", props: { content: "Conference Tracks", level: 2, fontStyle: "italic", margin: "32px 0 16px 0" } },
        ...cfaBlocks,
        { type: "SectionHeading", props: { content: "Paper Submission", level: 3, fontStyle: "italic", margin: "32px 0 16px 0" } },
        { type: "ListBlock", props: { items: callForPapersText.submissions, ordered: false, color: "#0D1B2A" } },
        { type: "SectionHeading", props: { content: "Publication", level: 3, fontStyle: "italic", margin: "32px 0 16px 0" } },
        { type: "ListBlock", props: { items: callForPapersText.publication, ordered: false, color: "#0D1B2A" } },
        { type: "ButtonLink", props: { text: "Submit via EasyChair", url: CONF.easyChairUrl, variant: "primary", margin: "32px 0 0 0" } }
      ]
    }}
  ]),
  createPage("keynote-speakers", "Keynote Speakers", false, [
    { type: "TopImageHeader", props: { title: "Keynote Speakers", bgImageUrl: "/images/lake.jpg" } },
    { type: "Section", props: {}, zones: {
      "content": [
        { type: "TextBlock", props: { content: "World-renowned experts sharing cutting-edge research", textAlign: "center", margin: "0 0 48px 0" } },
        { type: "Columns", props: { columns: Object.keys(keynoteSpeakers).length, gap: "32px" }, zones: Object.fromEntries(
           Object.values(keynoteSpeakers).map((speaker: any, idx: number) => [
             `column-${idx}`, 
             [
               { type: "ImageBlock", props: { src: speaker.image, width: "100%", borderRadius: "16px" } },
               { type: "SectionHeading", props: { content: speaker.name.toUpperCase(), level: 3, fontSize: "20px", fontStyle: "normal", textAlign: "center", margin: "16px 0 8px 0" } },
               { type: "TextBlock", props: { content: `${speaker.title} | ${speaker.institution}<br/><br/><strong>${speaker.talkTitle}</strong>`, textAlign: "center" } }
             ]
           ]
        )) }
      ]
    }}
  ])
];

async function seed() {
  console.log("Logging in as admin...");
  try {
    const loginRes = await fetch(`${API_BASE}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: "admin@vcris.org", password: "vcris2026admin" })
    });

    if (!loginRes.ok) {
      console.error("Login failed:", await loginRes.text());
      process.exit(1);
    }

    const { token } = await loginRes.json();
    const headers = { 
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    };

    for (const page of pages) {
      console.log(`Updating ${page.slug}...`);
      
      const res = await fetch(`${API_BASE}/pages/${page.slug}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({
          title: page.title,
          locale: "en",
          content: page.content,
          isPublished: true,
          isSystem: page.isSystem || false
        })
      });

      if (!res.ok) {
        if (res.status === 404) {
          console.log(`${page.slug} not found, creating...`);
          const createRes = await fetch(`${API_BASE}/pages`, {
            method: "POST",
            headers,
            body: JSON.stringify({
              title: page.title,
              slug: page.slug,
              locale: "en",
              content: page.content,
              isPublished: true,
              isSystem: page.isSystem || false
            })
          });
          if (!createRes.ok) console.error(`Failed to create ${page.slug}`);
        }
      }
    }
    console.log("Full Migration Done!");
  } catch (error) {
    console.error("Seeding error:", error);
  }
}

seed();
