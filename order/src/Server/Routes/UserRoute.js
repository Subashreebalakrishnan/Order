import Express from "express";
import {protect}  from "../Middleware/AuthMiddlleware.js";
import User from "../model/userModal.js";
import {generateToken} from "../Token/generateToken.js";


//LOGIN

const userRoute = Express.Router();

userRoute.get ("/profile" ,protect, async(req,res) =>{

  

  const user= await User.findById(req.user._id)

  if (user) {

    return res.json ({
            
      _id : user._id,
      name:user.userName,
      email :user.email,
      isAdmin : user.isAdmin,
      createdAt: user.createdAt,

    });

    
  }

  else {

    res.status(404);
    res.json ({
     
     Error : "User not Found",

   });
  
}

})

  
  // res.send ("User Profile");

    

    

// });


export default userRoute;

// const userRoute = Express.Router();

userRoute.post ("/login", async(req,res) =>{

    const {email,password} = req.body ;
    const user = await User.findOne ({email});

    if (user && (await user.matchPassword(password))) {
          res.json ({
            
            _id : user._id,
            name:user.name,
            email :user.email,
            isAdmin : user.isAdmin,
            token:generateToken(user._id),
            createdAt: user.createdAt,

          });

    }

    else {

           res.status(401);
           res.json ({
            
            Error : "Invaild Credentails",

          });
         
    }

});


//REGISTER

userRoute.post ("/", async(req,res) =>{

  const {userName,email,password} = req.body ;
  const userExists = await User.findOne ({email});

  if(userExists){

    res.status (400)
    res.json ({
            
      Error : "User Already exists",

    });
        }

  const user = await User.create({
    userName,
    email,
    password

  });

  if (user) {

    res.status(201).json({
            
      _id : user._id,
      name:user.name,
      email :user.email,
      isAdmin : user.isAdmin,
      token:generateToken(user._id),
      createdAt: user.createdAt,

    })

    
  }
  else {

       res.status(400)
       res.json ({
            
        Error : "Invaild user data",

      });
  }

})