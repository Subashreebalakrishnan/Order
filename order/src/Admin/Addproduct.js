import Adminnavbar from "./Adminnavbar"

function Addproduct () {

    return <>
    
      <Adminnavbar></Adminnavbar>
    <div className="container mt-4">
    
    <form className="mt-4">
    <div className="form-group">
      <label for="exampleFormControlInput1">Product title</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="type here"/>
    </div>

    <div className="form-group mt-4">
      <label for="exampleFormControlInput1">Price</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="type here"/>
    </div>


    <div className="form-group mt-4">
      <label for="exampleFormControlInput1">Count In Stock</label>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="type here"/>
    </div>
   
   
    
    <div className="form-group mt-4 ">
      <label for="exampleFormControlTextarea1">Description</label>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
  </form>
   <button className="btn btn-primary mt-4">Add Now</button>
  </div>

  </>
}

export default Addproduct