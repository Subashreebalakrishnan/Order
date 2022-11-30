import mongoose from "mongoose";

const shippingSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
    
  },
  City: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required : true,
   
  },
  Phone: {
    type: Number,
    required : true,
 
  },
  
});

const Shipping = mongoose.model("shipping", shippingSchema);

export default Shipping;