import Jwt from "jsonwebtoken";

import User from "../model/userModal.js"

 export const protect =  async (req,res,next) => {
        
        if(req.headers.authorization&& req.headers.authorization.startsWith("Bearer"))
        
        
        {

            const token = req.headers.authorization.split(" ")[1];
            const decoded = Jwt.verify(token ,process.env.JWT_SECRET);

            req.user = await User.findById(decoded.id).select("-password")

            next(); 

          }
        else {
            res.status(401).json ({message:"unauthorized"})
         }
}