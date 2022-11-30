import '../Payment.css'
import {Link, useParams} from "react-router-dom";
import { useState,useEffect } from 'react';
import CartItem from './CartItem';

import useRazorpay from "react-razorpay"
import axios from 'axios';
import Header from './Header';

// import { useSelector } from 'react-redux';


function Payment () {

    const [amount, setamount] = useState('');
    const Razorpay = useRazorpay();
   
    let params = useParams()
      
   
          async function handlePayment(e){
        //    const data= await axios.post(" http://localhost:4000/razorpay")
        //     console.log(data)
            
        e.preventDefault();
        if(amount === ""){
        alert("please enter amount");
        }else{
                  
            const options = {
              key:"rzp_test_DovhDzbeqkweA9",
              amount: amount*100,
              currency: "INR",
              name: "Acme Corp",
              description: "Test Transaction",
              image: "https://example.com/your_logo",
            //   order_id:data.id,
            handler: async function (response) {
                alert("Payment_id:"+response.razorpay_payment_id);
                alert("Order_id"+response.razorpay_order_id);
                alert("Signature"+response.razorpay_signature);

                try {
                    const orderUrl = "http://localhost:4000/api/payment/orders";
                    const { data } = await axios.post(orderUrl, { amount:amount*100 } );
                    console.log(data);
                    // initPayment(data.data);
                } catch (error) {
                    console.log(error);
                }
              },
              prefill: {
                name: "Piyush Garg",
                email: "youremail@example.com",
                contact: "9999999999",
              },
              notes: {
                address: "Razorpay Corporate Office",
              },
              theme: {
                color: "#3399cc",
              },
            };
            var pay = new Razorpay(options);
            pay.open();
          }
        }

 return  <>
 <Header></Header>
 <div className="container px-4 py-5 mx-auto mt-5"style={{"backgroundColor":"lightblue"}}>
     <div className="row justify-content-center">
        <div className="col-lg-12">
            <div className="card">
                <div className="row">
                    <div className="col-lg-3 radio-group">
                        <div className="row d-flex px-3 radio">
                            <img className="pay" src="https://i.imgur.com/WIAP9Ku.jpg"/>
                            <p className="my-auto">Credit Card</p>
                        </div>
                        <div className="row d-flex px-3 radio">
                            <img className="pay" src="https://i.imgur.com/OdxcctP.jpg"/>
                            <p className="my-auto">Debit Card</p>
                        </div>
                        <div className="row d-flex px-3 radio mb-3">
                            <img className="pay" src="https://i.imgur.com/cMk1MtK.jpg"/>
                            <p className="my-auto">PayPal</p>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="row px-2">
                            <div className="form-group col-md-6">
                                <label className="form-control-label">Name on Card</label>
                                <input type="text" id="cname" name="cname" placeholder="Johnny Doe"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-control-label">Card Number</label>
                                <input type="text" id="cnum" name="cnum" placeholder="1111 2222 3333 4444"/>
                            </div>
                        </div>
                        <div className="row px-2">
                            <div className="form-group col-md-6">
                                <label className="form-control-label">Expiration Date</label>
                                <input type="text" id="exp" name="exp" placeholder="MM/YYYY"/>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="form-control-label">CVV</label>
                                <input type="text" id="cvv" name="cvv" placeholder="***"/>
                            </div>
                          
                              <div className='row mt-2'>
                              <p> <h4></h4>Total <span>{params.total}</span>
           
                               </p>
                              </div>
                                <input placeholder='INR' type="number"value={amount}onChange={(e)=>setamount(e.target.value)}></input>
                              <div><button className='btn btn-success'onClick={handlePayment}>Check out</button></div>

                        </div>
                    </div>  
                    
                </div>
            </div>
        </div>
    </div>
</div>

</>
}

export default Payment