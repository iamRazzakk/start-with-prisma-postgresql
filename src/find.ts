import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const mainFunction = async () => {
    // find single 
    const findFirst = await prisma.post.findFirst({
        // find single one or throw an error
        // const findFirst = await prisma.post.findFirstOrThrow({
        where: {
            id: 5
        }
    })
    console.log({ findFirst });

}

mainFunction()