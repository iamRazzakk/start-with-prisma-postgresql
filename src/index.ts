import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const mainFunction = async () => {
    // const result = await prisma.post.create({
    //     data: {
    //         titlle: "Helle This is Title",
    //         content: "This is my content",
    //         author: "Md Abdur Razzak Rakib"
    //     }
    // })
    const getAllFromDB = await prisma.post.findMany()
    console.log(getAllFromDB)

}

mainFunction()