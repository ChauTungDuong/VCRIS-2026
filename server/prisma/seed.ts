import { PrismaClient, type Prisma } from "@prisma/client";
import bcrypt from "bcryptjs";
import { pages, siteConfigs } from "./seed-data/vcris-content.js";

const prisma = new PrismaClient();

const requireEnv = (key: string) => {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing required env var: ${key}`);
  }
  return value;
};

async function seedAdminUser() {
  const adminEmail = requireEnv("ADMIN_EMAIL");
  const adminPassword = requireEnv("ADMIN_PASSWORD");
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {
      name: "VCRIS Admin",
      role: "SUPER_ADMIN",
    },
    create: {
      email: adminEmail,
      password: hashedPassword,
      name: "VCRIS Admin",
      role: "SUPER_ADMIN",
    },
  });

  console.log("✅ Admin user seeded");
}

async function seedSiteConfig() {
  for (const [key, value] of Object.entries(siteConfigs)) {
    await prisma.siteConfig.upsert({
      where: { key },
      update: { value: value as Prisma.InputJsonValue },
      create: { key, value: value as Prisma.InputJsonValue },
    });
  }

  console.log(`✅ Site config seeded (${Object.keys(siteConfigs).length} keys)`);
}

async function seedPages() {
  for (const pageData of pages) {
    const page = await prisma.page.upsert({
      where: { slug: pageData.slug },
      update: {
        isSystem: pageData.isSystem,
        sortOrder: pageData.sortOrder,
        isPublished: true,
        publishedAt: new Date(),
      },
      create: {
        slug: pageData.slug,
        isSystem: pageData.isSystem,
        sortOrder: pageData.sortOrder,
        isPublished: true,
        publishedAt: new Date(),
      },
    });

    for (const [locale, translation] of Object.entries(pageData.translations)) {
      await prisma.pageTranslation.upsert({
        where: {
          pageId_locale: {
            pageId: page.id,
            locale,
          },
        },
        update: {
          title: translation.title,
          content: translation.content,
        },
        create: {
          pageId: page.id,
          locale,
          title: translation.title,
          content: translation.content,
        },
      });
    }

    console.log(`  📄 Page "${pageData.slug}" upserted`);
  }

  console.log(`✅ Pages seeded (${pages.length} system pages)`);
}

async function main() {
  console.log("🌱 Seeding VCRIS database...");

  await seedAdminUser();
  await seedSiteConfig();
  await seedPages();

  console.log("🎉 Database seeding complete!");
}

main()
  .catch((error) => {
    console.error("❌ Seed error:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
