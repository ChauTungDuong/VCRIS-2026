import { PrismaClient } from "@prisma/client";
import * as dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient();

async function main() {
  const homePage = await prisma.page.findUnique({ where: { slug: "home" } });

  if (!homePage) {
    console.error("Home page not found");
    return;
  }

  const initialContent = {
    root: { props: {} },
    content: [
      {
        type: "HomeHero",
        props: {
          id: "HomeHero-1",
          eyebrow: "VCRIS 2026",
          titlePart1: "The 3rd International Conference on",
          titlePart2: "Cryptography & Information Security",
          time: "October 29 - 30, 2026",
          venue: "Academy of Cryptography Techniques, Hanoi, Vietnam",
          bgImageUrl: "/lake.jpg", // Using a solid fallback or basic image
        },
      },
      {
        type: "HomeImportantDates",
        props: {
          id: "HomeImportantDates-2",
          conferenceName: "VCRIS 2026",
          conferenceDateRaw: "October 29 - 30, 2026",
          conferenceLocation: "Academy of Cryptography Techniques, Hanoi, Vietnam",
          importantDatesTitle: "Important Dates",
          dates: [
            { date: "June 30, 2026", label: "Paper Submission Deadline", passed: false },
            { date: "July 31, 2026", label: "Notification of Acceptance", passed: false },
            { date: "September 25, 2026", label: "Camera-Ready Submission", passed: false },
            { date: "October 29 - 30, 2026", label: "Conference Dates", passed: false, highlight: true },
          ],
        },
      },
      {
        type: "HomeAbout",
        props: {
          id: "HomeAbout-3",
          eyebrow: "ABOUT THE CONFERENCE",
          title: "Building the Future of Cryptographic Science",
          paragraphs: [
            { text: "Following the success of VCRIS 2025, this event will continue to be held in Hanoi, the thousand-year-old capital of Vietnam, renowned for its rich history, cultural heritage, and vibrant historical landmarks." },
            { text: "The Academy of Cryptography Techniques, selected by the Vietnamese Government as a pivotal institution for nurturing information security expertise, will serve as the venue for the VCRIS 2026." },
          ],
          topics: [
            { topic: "Post-Quantum Cryptography" },
            { topic: "Blockchain & DLT" },
            { topic: "AI Security" },
            { topic: "Zero-Knowledge Proofs" },
            { topic: "Digital Forensics" },
            { topic: "Network Security" },
            { topic: "Data Privacy" },
          ],
          stats: [
            { number: "3rd", label: "Edition" },
            { number: "2024", label: "Since" },
            { number: "IEEE", label: "Indexed" },
          ],
        },
      },
      {
        type: "HomeCfa",
        props: {
          id: "HomeCfa-4",
          title: "Your Research Belongs Here",
          subtitle: "IEEE-indexed proceedings · Double-blind peer review · International audience",
          btnLabel: "Submit Paper via EasyChair",
          btnUrl: "https://easychair.org",
        },
      },
    ],
    zones: {},
  };

  await prisma.pageTranslation.updateMany({
    where: { pageId: homePage.id, locale: "en" },
    data: {
      content: initialContent,
    },
  });

  console.log("Successfully seeded Home page Puck components.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
