import Express from "express";
import Product from "../model/productModal.js";

//GET ALL PRODUCT DETAILS

const ProductRoute = Express.Router();

ProductRoute.get ("/", async(req,res) =>{

     const Products = await Product.find ({})

     res.json (Products);

});

//GET SINGLE PRODUCT DETAILS

ProductRoute.get ("/:id", async(req,res) =>{

    const SingleProduct = await Product.findById(req.params.id)

    if(SingleProduct) {

        res.json (SingleProduct);
    }
    else{

        res.status(404);
        throw new Error ("Product not Found");
    }

});

export default ProductRoute
