import axios from "axios"
import { CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADDRESS } from "../constants/CartConstants";


// ADD ITEM TO CART

export const addToCart = (id,qty) => async (dispatch ,getstate) => {

    const {data} = await axios.get (`http://localhost:4000/api/product/${id}`);
      dispatch ({
         type : CART_REMOVE_ITEM,
          payload : {

            product : data.id,
            name: data.name,
            price: data.price,
            image : data.image
        }
    });
 localStorage.setItem("cartItems",JSON.stringify(getstate().cart.cartItems));
} 



// REMOVE ITEM FROM CART

export const removeFromCart = (id) => (dispatch,getstate) => {
 dispatch({
 type : CART_REMOVE_ITEM,
        payload : id,
    });
  localStorage.setItem("cartItems",JSON.stringify(getstate().cart.cartItems));
}



// SAVE SHIPPING ADDRESS

export const saveShippingAddress = (data) => (dispatch) => {
    dispatch({
    type : CART_SAVE_SHIPPING_ADDRESS,
           payload : data,
       });
     localStorage.setItem("shippingAddress",JSON.stringify(data));
   }