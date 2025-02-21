import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const mainFunction = async () => {
    // find single 
    const findFirst = await prisma.post.findFirst({
        // find single one or throw an error
        // const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            id: 10
        },
        // if need selected data 
        select: {
            id: true,
            titlle: true,
            content: true,

        }
    })
    console.log({ findFirst });

    // find unique
    const finUnique = await prisma.post.findUnique({
        where: {
            id: 10
        }
    })

    console.log({ finUnique });

}

mainFunction()