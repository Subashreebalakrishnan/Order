
import { useDispatch, useSelector } from "react-redux"
import { Link, useSearchParams } from "react-router-dom"
import { logout } from "../Redux/Actions/UserAction"

function Header (props) {
    
  // const cart= useSelector((state)=> state.cart);
  //  const {cartItems} = cart

  const dispatch = useDispatch()

  const logoutHandler = () =>{
      dispatch(logout());
  }

  return <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
   <a className="navbar-brand" href="/"> My Apparels.com</a>
  <Link className="navbar-brand" to="/Home">Home</Link>

  <Link className="navbar-brand" to="/Products">Products</Link>
  <div className="navbar-brand" href="" onClick={() => props.handleShow(true)}>Cart
 
  <i class="fa fa-shopping-cart" style={{"font-size":"30px",color:"blue"}}></i>
  <sup> {props.count} </sup>

  </div>
  <Link className="navbar-brand" to="/Register">Register</Link>
  <Link className="navbar-brand" to="/Login">Login</Link>
  <Link className="navbar-brand" to="/Login"onClick={logoutHandler}>Logout</Link>
  
  
  
  
  
</div>
</nav>

}

export default Header