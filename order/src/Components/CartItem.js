import { useState,useEffect } from 'react';


import React from 'react';
import { Link } from 'react-router-dom';

function CartItem ({cart}){

  const [CART, setCART] = useState([])
  let totalValue = 0

  useEffect(() => {
      setCART(cart)
  }, [cart])

  totalValue = CART.map(item => item.price * item.quantity).reduce((total, value)  => total + value, 0)

  return (
      <div className='container mt-2'>
          {
              CART?.map((cartItem, cartindex) => {
                  return (
                      <div className='col-lg-9'>
                          <img src={cartItem.image} style={{width:"100px"}} />
                          <span> {cartItem.title} </span>
                          <button className='btn btn-danger'
                              onClick={() => {
                                  const _CART = CART.map((item, index) => {
                                      return cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                  })
                                  setCART(_CART)
                              }}
                          >-</button>
                          <span> {cartItem.quantity} </span>
                          <button className='btn btn-success'
                              onClick={() => {
                                  const _CART = CART.map((item, index) => {
                                      return cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                  })
                                  setCART(_CART)
                              }}
                          >+</button>
                          <span> Rs. {cartItem.price * cartItem.quantity} </span>
                      </div>
                  )
              })
          }
        
        
          <p> <h4></h4>Total  <span></span>
              {
                totalValue
              }
                            


          </p>
          <Link to={`/Shipping/${totalValue}`}><button className='btn btn-info'>Place order</button></Link>
      </div >
  )
}
export default CartItem

