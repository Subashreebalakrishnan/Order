import { Link } from "react-router-dom"



function Adminnavbar (){

    return   <>
  
  <nav className="navbar navbar-light bg-info justify-content-between">
  <a className="navbar-brand">Admin Panel
  <img src="/images/adm.jpg" style={{height:"50px"}}/>
  </a>
  <Link className="navbar-brand" to="/admin/dashboard">Dashboard</Link>
  <Link className="navbar-brand" to="/admin/products">Products</Link>
  <Link className="navbar-brand" to="/admin/addproducts">Add Products</Link>
  <Link className="navbar-brand" to="/admin/orders">Orders</Link>
 
</nav>
  

</>
}

export default Adminnavbar