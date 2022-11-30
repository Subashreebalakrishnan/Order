import Express  from "express";
import Product from "../model/productModal.js";
import Shipping from "../model/shippingModal.js";
import User from "../model/userModal.js";
import Products from "../Products.js";
import { shipping } from "../shipping.js";
import  {users} from "../Users.js";

 const ImportData = Express.Router ()

ImportData.post("/user", async (req,res)=> {

    await User.remove({})

    const importUser = await User.insertMany(users);

    res.send ({importUser})
    
})

ImportData.post("/product", async (req,res)=> {

    await Product.remove({})

    const importProduct = await Product.insertMany(Products);

    res.send ({importProduct})


    
    
})


ImportData.post("/address", async (req,res)=> {

    await Shipping.remove({})

    const importAddress = await Shipping.insertMany(shipping);

    res.send ({importAddress})

    
    
    
})



export default ImportData