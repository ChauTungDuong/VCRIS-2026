import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import type { PuckContent } from "../src/utils/puck";

const prisma = new PrismaClient();

function makePuckContent(blocks: { node: any; zones?: any }[]): PuckContent {
  const zones: Record<string, any[]> = {};

  for (const block of blocks) {
    if (!block.zones) continue;
    for (const [zoneKey, zoneContent] of Object.entries(block.zones)) {
      zones[`${block.node.props.id}:${zoneKey}`] = zoneContent;
    }
  }

  return {
    root: { props: {} },
    content: blocks.map((block) => block.node),
    zones,
  };
}

async function main() {
  const slug = "venue";
  const content = makePuckContent([
    {
      node: {
        type: "VenuePageTitle",
        props: {
          id: "venue-title-1",
          title: "Venue & Travel",
        },
      },
    },
    {
      node: {
        type: "VenueDetails",
        props: {
          id: "venue-details-1",
          title: "Academy of Cryptography Techniques",
          mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2952402283086!2d105.79515667618218!3d20.980798189422325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acc508f938fd%3A0x883e474806a2d1f2!2sAcademy%20of%20Cryptography%20Techniques!5e0!3m2!1sen!2s!4v1708493181813!5m2!1sen!2s",
          address: "141 Chien Thang Street, Tan Trieu, Thanh Tri, Hanoi, Vietnam",
          fromAirport: "30 minutes by taxi from Noi Bai International Airport (HAN)",
          byTaxi: "Grab and traditional taxis readily available throughout Hanoi",
          mapUrl: "https://www.google.com/maps/place/Academy+of+Cryptography+Techniques/@20.9807982,105.7951567,17z/",
        },
      },
      zones: {
        description: [
          { type: "VenueText", props: { id: "text-intro-1", color: "slate", content: 'The International Conference on Cryptography and Information Security (VCRIS 2026) will be held in Academy of Cryptography Techniques, Hanoi, Vietnam. Read more about <a href="https://actvn.edu.vn/">Academy of Cryptography Techniques</a>.' } }
        ]
      }
    },
    {
      node: {
        type: "VenuePhotoGrid",
        props: {
          id: "venue-photos-container-1",
          title: "Photos of the Academy",
        },
      },
      zones: {
        photos: [
          { type: "VenuePhotoItem", props: { id: "photo-1", src: "https://vcris.org/wp-content/uploads/2024/03/2022-11-08-1024x672.jpg", alt: "Venue photo 1" } },
          { type: "VenuePhotoItem", props: { id: "photo-2", src: "https://vcris.org/wp-content/uploads/2024/03/z5027586123041_31223954bd029175686cbedd54c930df-1024x768.jpg", alt: "Venue photo 2" } },
          { type: "VenuePhotoItem", props: { id: "photo-3", src: "https://vcris.org/wp-content/uploads/2024/01/Toa-nha-Ban-co-yeu-chinh-phu-4.jpg", alt: "Venue photo 3" } },
          { type: "VenuePhotoItem", props: { id: "photo-4", src: "https://vcris.org/wp-content/uploads/2024/03/z5027586097524_65d422081545cf19ec03fccfe8cde563-1024x768.jpg", alt: "Venue photo 4" } },
          { type: "VenuePhotoItem", props: { id: "photo-5", src: "https://vcris.org/wp-content/uploads/elementor/thumbs/khu-nha-o-can-bo-nhan-vien-ban-co-yeu-chinh-phu-le-van-luong1589905471-r2p4pj7zyykiqzh6et3cm7zzba6zyl03ry1vhe2qkw.jpg", alt: "Venue photo 5" } },
          { type: "VenuePhotoItem", props: { id: "photo-6", src: "https://vcris.org/wp-content/uploads/2024/03/z5027586073243_788c6f558db94688caaa268000a081d6-1024x768.jpg", alt: "Venue photo 6" } },
        ]
      }
    },
    {
      node: {
        type: "VenueAboutContainer",
        props: {
          id: "venue-about-container-1",
          title: "Academy of Cryptography Techniques",
        },
      },
      zones: {
        content: [
          { type: "VenueText", props: { id: "text-1", content: "The Academy of Cryptography Techniques is the sole institution in Vietnam dedicated to both undergraduate and postgraduate education, as well as research in cryptographic science and technology for the Vietnam Government Information Security Commission (VGISC). Presently, the Academy offers three major programs: Information Security, Information Technology, and Telecommunication-Electronic Engineering." } },
          { type: "VenueText", props: { id: "text-2", content: "Its strategic vision is to evolve into a premier center for cryptographic techniques and information security training, catering to the human resource needs of VGISC and various sectors in the socio-economic landscape. Staffed with expert scientists and lecturers specializing in cryptographic techniques and information security, the Academy’s curriculum aligns with the advancements in science and technology, addressing practical demands. Additionally, it holds the distinction of being one of the eight principal institutions for information security training, as decreed by the Vietnamese Prime Minister." } },
          { type: "VenueLink", props: { id: "link-1", label: "For more information about the Academy of Cryptography Techniques, please visit:", url: "https://actvn.edu.vn/" } }
        ]
      }
    },
  ]);

  const page = await prisma.page.findUnique({ where: { slug } });
  if (page) {
    await prisma.pageTranslation.update({
      where: { pageId_locale: { pageId: page.id, locale: "en" } },
      data: { content },
    });
    console.log(`Updated EN content for ${slug}`);
  } else {
    console.log(`Page not found: ${slug}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
