import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    const alice = await prisma.user.upsert({
        where: { username: 'alice@prisma.io' },
        update: {},
        create: {
            username: 'alice@prisma.io',
        },
    });
    const bob = await prisma.user.upsert({
        where: { username: 'bob@prisma.io' },
        update: {},
        create: {
            username: 'bob@prisma.io',
        },
    });
    console.log({ alice, bob });
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
