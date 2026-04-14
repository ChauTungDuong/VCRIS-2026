import { PrismaClient } from "@prisma/client";
import { normalizePuckContent } from "../src/utils/puck.js";

const prisma = new PrismaClient();

async function normalizeTranslations() {
  const translations = await prisma.pageTranslation.findMany({
    select: {
      id: true,
      pageId: true,
      locale: true,
      title: true,
      content: true,
    },
  });

  let updatedCount = 0;

  for (const translation of translations) {
    const normalized = normalizePuckContent(translation.content);
    const current = JSON.stringify(translation.content);
    const next = JSON.stringify(normalized);

    if (current !== next) {
      await prisma.pageTranslation.update({
        where: { id: translation.id },
        data: { content: normalized },
      });
      updatedCount += 1;
      console.log(
        `Updated translation ${translation.pageId}:${translation.locale}`,
      );
    }
  }

  return updatedCount;
}

async function normalizeVersions() {
  const versions = await prisma.pageVersion.findMany({
    select: {
      id: true,
      pageId: true,
      locale: true,
      version: true,
      content: true,
    },
  });

  let updatedCount = 0;

  for (const version of versions) {
    const normalized = normalizePuckContent(version.content);
    const current = JSON.stringify(version.content);
    const next = JSON.stringify(normalized);

    if (current !== next) {
      await prisma.pageVersion.update({
        where: { id: version.id },
        data: { content: normalized },
      });
      updatedCount += 1;
      console.log(
        `Updated version ${version.pageId}:${version.locale}#${version.version}`,
      );
    }
  }

  return updatedCount;
}

async function main() {
  console.log("Normalizing page content...");
  const translationCount = await normalizeTranslations();
  const versionCount = await normalizeVersions();
  console.log(
    `Done. Updated ${translationCount} translations and ${versionCount} versions.`,
  );
}

main()
  .catch((error) => {
    console.error("Normalization failed:", error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
