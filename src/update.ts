import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const mainFunction = async () => {
    const update = await prisma.post.update({
        where: {
            id: 8
        },
        data: {
            titlle: "Post 3",
            id: 1,
            content: "Content 3"
        }
    })
    console.log(update);

}

mainFunction()