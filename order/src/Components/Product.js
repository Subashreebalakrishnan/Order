import logo from '../logo.svg';
import css from "../App.css"

import 'bootstrap/dist/css/bootstrap.min.css';

import { useEffect, useState } from 'react';

import { Button } from 'bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from '../Redux/Actions/ProductAction';
import data from '../Data';
import Header from './Header';
import CartItem from './CartItem';
import Card from './Card';


function Products() {

    
    // const dispatch =  useDispatch();

    // const productList = useSelector((state) => state.productList);

    // const {loading,error,productss} = productList; 

    // useEffect(()=>{
    //      dispatch(listProduct());

    // },[dispatch]);

  const [cart,setCart]= useState([]);
  const [showCart, setShowCart] = useState(false)
  // const [total,setTotal]= useState(0)
  const [product, setProduct]=useState([

    {
        title : "Pink saree",
        price : 40000,
         id:1,
        Reviews : 500,
       image : "/images/1.jpg"
      },
      
      {
        title : "Yellow saree",
        price : 60000,
         id:2,
        Reviews : 700,
        image : "/images/2.jpg"
  
      },
   
      {
        title : "Green saree",
        price : 20000,
        id:3,
        Reviews : 200,
        image : "/images/3.jpg"
      },
  
      {
        title : "Blue Formal shirt",
        price : 50000,
        id:4,
        Reviews : 850,
        image : "/images/4.jpg"
      },
      {
        title : "Black checked shirt",
        price : 35000,
         id:5,
        Reviews : 377,
        image : "/images/5.jpg"
      },
      {
        title : "Navy Blue shirt ",
        price :  25000,
        id:6,
        Reviews : 577,
        image : "/images/6.jpg"
        
      },
    


  ])

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }])
  }

  const handleShow = (value) => {
    setShowCart(value)
  }

  
  
  return (
    <div>
      <Header count={cart.length}
        handleShow={handleShow} ></Header>

      {
        showCart ?
          < CartItem cart={cart} ></CartItem> :
          <Card product={product} addToCart={addToCart} ></Card>
          
      }
        

    </div>
  );
}


export default Products;