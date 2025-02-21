import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const mainFunction = async () => {
    const createMany = await prisma.post.createMany({
        data: [{
            titlle: "Post 1", // Fixed property name from 'title' to 'titlle'
            content: "Content 1",
            author: "Author name"
        },
        {
            titlle: "Post 2", // Fixed property name from 'title' to 'titlle'
            content: "Content 2",
            author: "Author name"
        },
        {
            titlle: "Post 3", // Fixed property name from 'title' to 'titlle'
            content: "Content 3",
            author: "Author name"
        },
        {
            titlle: "Post 4", // Fixed property name from 'title' to 'titlle'
            content: "Content 4",
            author: "Author name"
        },
        ]
    })
    console.log(createMany);


}

mainFunction()