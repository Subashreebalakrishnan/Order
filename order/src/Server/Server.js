import express from "express"
import Products from "./Products.js";
import dotenv from  "dotenv"
import connectDatabase from "./config/MongoDB.js";
import ImportData from "./seed/Datamport.js";
import ProductRoute from "./Routes/ProductRoute.js";
import userRoute from "./Routes/UserRoute.js";
import cors from "cors"
import ShippingRoute from "./Routes/ShippingRoute.js";
import shortid from "shortid";
import Razorpay from "react-razorpay";

import mongoose from "mongoose"
import { PaymentRoute } from "./Routes/PaymentRoute.js";

dotenv.config(); 
connectDatabase();
const app = express();

app.use(cors())

app.use(express.json());

//ADD USER DETAILS
app.use ("/api/import", ImportData)

//GET ALL PRODUCT DETAILS
app.use ("/api/product", ProductRoute)

//GET ALL USER DETAILS

app.use ("/api/users", userRoute)



//PAYMENT ROUTE
app.use("/api/payment/",PaymentRoute);



//GET SHIPPING DETAILS
app.use ("/api/shipping", ShippingRoute)

app.use ("/api/import/address", ImportData)

app.get ("/api/products", (req,res)=>{

  res.json (Products);
}
)

app.get ("/", (req,res)=>{

  res.send ("API is running")
}
)

const PORT = process.env.PORT || 3001

app.listen(PORT, console.log(`Server Running in ${PORT} `))



