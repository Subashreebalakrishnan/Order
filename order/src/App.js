import logo from './logo.svg';
import './App.css';
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"

import Login from './Components/Login.js';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Product from './Components/Product';
import Home from './Components/Home';
import Shipping from './Components/Shipping';
import Adminnavbar from './Admin/Adminnavbar';
import Dashboard from './Admin/Dashboard';
import Payment from './Components/Payment';
import Register from './Components/Register';
import Mainproduct from './Admin/Mainproduct';
import Addproduct from './Admin/Addproduct';
import Orders from './Admin/Orders';
import Content from './Components/Content';





function App() {
   
  
  return (  
  
    <BrowserRouter>
    
    <div id="wrapper">
    
   
       <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
          
            <Routes>
            <Route path="/" element={<Content/>}> </Route>
            <Route path="/Home" element={<Home/>}> </Route>
            <Route path="/Login" element={<Login/>}> </Route>
            <Route path="/Register" element={<Register/>}> </Route>
            <Route path="/Products" element={<Product/>}> </Route>
            <Route path="/Shipping/:total" element={<Shipping/>}> </Route>
            <Route path="/Payment/:total" element={<Payment/>}> </Route>
            <Route path="/admin" element= {<Adminnavbar/>}> </Route>
            <Route path="/admin/dashboard" element= {<Dashboard/>}> </Route>
            <Route path="/admin/products" element= {<Mainproduct/>}> </Route>
            <Route path="/admin/addproducts" element= {<Addproduct/>}> </Route>
            <Route path="/admin/orders" element= {<Orders/>}> </Route>
           
            
           
             
             
             
        </Routes>
       </div>
 </div>
</div>
</BrowserRouter> 
            
  );
}

export default App;
