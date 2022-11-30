import { combineReducers, createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducers/CartReducer";
import { productDetailsReducer, productListReducer } from "./Reducers/ProductReducer";
import {userLoginReducer}  from "./Reducers/UserLoginReducer";




const reducer = combineReducers({

    productList: productListReducer,
    productDetails:productDetailsReducer,
    cart :cartReducer,
    userLogin:userLoginReducer,
});

const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems"))
: [] 


// LOGIN
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
? JSON.parse(localStorage.getItem("userInfo"))
: null; 


const initialState = {

    cart : {

        cartItems : cartItemsFromLocalStorage,
    },

    userLogin : {userInfo : userInfoFromLocalStorage}
} ;

const middleware = [thunk];

const store = createStore(

    reducer,initialState,composeWithDevTools(applyMiddleware(...middleware))
);

export default store ;