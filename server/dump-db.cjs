require('dotenv/config');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const p = await prisma.page.findUnique({
    where: { slug: 'venue' },
    include: { translations: true }
  });
  console.log(JSON.stringify(p.translations[0].content, null, 2));
}

main().finally(() => prisma.$disconnect());
