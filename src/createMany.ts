import {PrismaClient, UserRole} from "@prisma/client";

const prisma = new PrismaClient()


const  main = async ()=>{
//     create user
const  createUser = await prisma.user.create({
    data:{
        userName:"Md Abdur Razzak",
        email:"mdabdurrazzakrakib290@gmail.com",
        role:UserRole.ADMIN,

    }

})
//     console.log(createUser)
//     create profile
    const  createProfile = await prisma.profile.create({
        data:{
            bio:"Hey I'm Rakib I work as a Backend Developer",
            userId:2
        }
    })
    const  createCategory = await prisma.category.create({
        data:{
            name:"Next Label Web Developer."
        }
    })


    console.log(createCategory)
}
main()