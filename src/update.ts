import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const mainFunction = async () => {
    // update single one
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

    // update many

    const updateMany = await prisma.post.updateMany({
        where: {
            titlle: "Post 3",
        },
        data: {
            publish: true
        }
    })
    console.log(updateMany);


}

mainFunction()