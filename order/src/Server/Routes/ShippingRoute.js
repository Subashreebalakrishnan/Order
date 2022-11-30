import Express  from "express";

import Shipping from "../model/shippingModal.js";

const ShippingRoute = Express.Router();

 ShippingRoute.get ("/shipping" , async(req,res) =>{

  

  const shipping= await Shipping.find ({})

 

    return res.json ({shipping  });

    
  

 
  
})



export default ShippingRoute