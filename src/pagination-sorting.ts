import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const paginationAndSort = async () => {
    const offsetData = await prisma.post.findMany(
        {
            skip: 5,
            take: 2
        }
    )
    const cursorData = await prisma.post.findMany({
        skip: 5,
        take: 2,
        cursor: {
            id: 18
        }
    })

    // console.log(offsetData)
    // console.log(cursorData)
    // sorting
    const sortingData = await prisma.post.findMany({
        orderBy:{
            titlle:"asc"
        },
        // skip:2,
        // take:2,
        where:{
            titlle:"Post 8"
        }
    })
    console.log(sortingData)

}
paginationAndSort()
