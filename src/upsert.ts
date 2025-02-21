import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const upsertData = async () => {
    const upsart = await prisma.post.upsert({
        where: {
            id: 1
        },
        update: {
            titlle: "Post 10",
        },
        create: {
            titlle: "Post 10",
            content: "This is the content of post 10",
            author: "This is the author of",
            publish: true,
            createAt: new Date(),
            updateAt: new Date(),
        }
    })
    console.log(upsart);
}
upsertData()