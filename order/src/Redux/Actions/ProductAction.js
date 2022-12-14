import axios from "axios"

import { PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS,
    PRODUCT_DETAILS_FAIL,PRODUCT_DETAILS_REQUEST,PRODUCT_DETAILS_SUCCESS } from "../constants/Productconstants"


export const listProduct = () => async (dispatch) => {

    try {

          dispatch ({type:PRODUCT_LIST_REQUEST})

          const data = await axios.get("http://localhost:4000/api/product");
          dispatch({type:PRODUCT_LIST_SUCCESS,payload:data});
        
    } catch (error) {

        dispatch ({

            type : PRODUCT_LIST_FAIL,
            payload:
             error.response &&   error.response.data.message 
             ? error.response.data.message 
             : error.message,
        });
        
    }
}


// SINGLE PRODUCT

export const listProductDetails = (id) => async (dispatch) => {

    try {

          dispatch ({type:PRODUCT_DETAILS_REQUEST})

          const data = await axios.get(`http://localhost:4000/api/product/${id}`);
          dispatch({type:PRODUCT_DETAILS_SUCCESS,payload:data});
        
    } catch (error) {

        dispatch ({

            type : PRODUCT_DETAILS_FAIL,
            payload:
             error.response &&   error.response.data.message 
             ? error.response.data.message 
             : error.message,
        });
        
    }
}