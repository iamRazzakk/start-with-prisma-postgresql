import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()
const deleteItems = async () => {
    const deleteItem = await prisma.post.deleteMany({
        where: {
            publish: false
        }
    })
    console.log(deleteItem);
}
deleteItems()