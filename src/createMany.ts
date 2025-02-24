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
        {
            titlle: "Post 5", // Fixed property name from 'title' to 'titlle'
            content: "Content 5",
            author: "Author name"
        },
        {
            titlle: "Post 6", // Fixed property name from 'title' to 'titlle'
            content: "Content 6",
            author: "Author name"
        },
        {
            titlle: "Post 7", // Fixed property name from 'title' to 'titlle'
            content: "Content 7",
            author: "Author name"
        },
        {
            titlle: "Post 8", // Fixed property name from 'title' to 'titlle'
            content: "Content 8",
            author: "Author name"
        },
        {
            titlle: "Post 9", // Fixed property name from 'title' to 'titlle'
            content: "Content 9",
            author: "Author name"
        },
        {
            titlle: "Post 10", // Fixed property name from 'title' to 'titlle'
            content: "Content 10",
            author: "Author name"
        },
        {
            titlle: "Post 11", // Fixed property name from 'title' to 'titlle'
            content: "Content 11",
            author: "Author name"

        },
        {
            titlle: "Post 12", // Fixed property name from 'title' to 'titlle'
            content: "Content 12",
            author: "Author name"

        },
        {
            titlle: "Post 13", // Fixed property name from 'title' to 'titlle'
            content: "Content 13",
            author: "Author name"

        },
        {
            titlle: "Post 14", // Fixed property name from 'title' to 'titlle'
            content: "Content 14",
            author: "Author name"

        },
        {
            titlle: "Post 15", // Fixed property name from 'title' to 'titlle'
            content: "Content 15",
            author: "Author name"

        },
        {
            titlle: "Post 16", // Fixed property name from 'title' to 'titlle'
            content: "Content 16",
            author: "Author name"

        },
        {
            titlle: "Post 17", // Fixed property name from 'title' to 'titlle'
            content: "Content 17",
            author: "Author name"

        },
        {
            titlle: "Post 18", // Fixed property name from 'title' to 'titlle'
            content: "Content 18",
            author: "Author name"
        },
        {
            titlle: "Post 19", // Fixed property name from 'title' to 'titlle'
            content: "Content 19",
            author: "Author name"
        },
        {
            titlle: "Post 20", // Fixed property name from 'title' to 'titlle'
            content: "Content 20",
            author: "Author name"
        },
        {
            titlle: "Post 21", // Fixed property name from 'title' to 'titlle'
            content: "Content 21",
            author: "Author name"
        },
        {
            titlle: "Post 22", // Fixed property name from 'title' to 'titlle'
            content: "Content 22",
            author: "Author name"
        },
        {
            titlle: "Post 23", // Fixed property name from 'title' to 'titlle'
            content: "Content 23",
            author: "Author name"
        },
        {
            titlle: "Post 24", // Fixed property name from 'title' to 'titlle'
            content: "Content 24",
            author: "Author name"
        },

        ]
    })
    console.log(createMany);


}

mainFunction()