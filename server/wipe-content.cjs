require('dotenv').config();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
async function main() {
  await prisma.pageTranslation.updateMany({
    data: { content: {} }
  });
  console.log('Wiped all content');
}
main();
