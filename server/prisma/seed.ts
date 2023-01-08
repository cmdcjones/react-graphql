import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
    // Delete all 'User' and 'Message' records
    await prisma.message.deleteMany({});
    await prisma.user.deleteMany({});

    // Create dummy 'User' and 'Message' records
    await prisma.user.create({
        data: {
            name: "Dom",
            messages: {
                create: [
                    {
                        body: "Some dummy data"
                    },
                    {
                        body: "Some more dummy data"
                    },
                ],
            },
        },
    });

    await prisma.user.create({
        data: {
            name: "Not Dom",
            messages: {
                create: [
                    {
                        body: "Of course this is real data"
                    },
                    {
                        body: "Why would you think otherwise?"
                    },
                ],
            },
        },
    });

    await prisma.user.create({
        data: {
            name: "Other Dom",
            messages: {
                create: [
                    {
                        body: "Another record of data"
                    },
                    {
                        body: "Just this one last record of data"
                    },
                ],
            },
        },
    });
}

// Dummy data provided is predictable and cannot fail
main().then(() => {
    console.log("Data successfully seeded");
});
