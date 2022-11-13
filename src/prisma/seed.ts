import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const programingClub = await prisma.group.upsert({
    where: { id: 1 },
    update: {},
    create: { groupType: 'CLUB', name: 'Programing' },
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
