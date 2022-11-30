import bcrypt from "bcryptjs"



 export const users = [

    {

        userName : "Admin",
        email : "admin@apparels.com",
        password : bcrypt.hashSync("112233", 10),
        isAdmin : true,

    },

    {

        userName : "user",
        email : "user@apparels.com",
        password : bcrypt.hashSync("556677", 10),
        

    }
   
   
   ]
   
   