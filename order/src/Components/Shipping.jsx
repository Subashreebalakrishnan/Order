import { useFormik } from "formik";
import axios from "axios"
import { Link, useParams} from "react-router-dom";
import Header from "./Header";

 
 
 function Shipping (){

  
  
  let params = useParams()

 

  let formik = useFormik({

    initialValues: {

        Name : "",
        Address: "",
        City:"",
        state:"",
        Phone:""
    },

    validate : (values) =>  {

      let errors = {};
      if (values.Name===""){
       errors.Name= "Please enter name "
      }
      
      if (values.Phone===""){
       errors.Phone= "Please enter Phone"
      }


      if (values.Address===""){
        errors.Address = "Please enter Address"
       }

       return errors;

       
    } ,

    onSubmit : async(values) => {

      let data1= await axios.post("http://localhost:4000/api/import/address",values)
    

               
    }

    
       });

    return  ( 

      <>
 <Header></Header>
      
      <div className="container">
    <div className="col-md-8 mb-4 mt-2" style={{backgroundColor:"pink"}}>
    <div className="card mb-4" style={{backgroundColor:"pink"}}>
      <div className="card-header py-3" >
        <h5 className="mb-0 text-font text-uppercase">Delivery address</h5>
      </div>
      <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text" id="form11Example1" className="form-control" 
                onChange={formik.handleChange}
                value={formik.values.Name} name="Name"
                />
                 <span style={{color:'red'}}>{formik.errors.Name}</span>
                <label className="form-label" for="form11Example1">Name</label>
              </div>
            </div>
           
          </div>

         
            <div className="form-outline mb-4">
            <input type="text" id="form11Example4" className="form-control"
            onChange={formik.handleChange}
            value={formik.values.Address} name="Address" />
             <span style={{color:'red'}}>{formik.errors.Address}</span>
            <label className="form-label" for="form11Example4">Address</label>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="form11Example4" className="form-control"
            onChange={formik.handleChange}
            value={formik.values.City} name="City" />
            <label className="form-label" for="form11Example4">City</label>
          </div>

          <div className="form-outline mb-4">
            <input type="text" id="form11Example4" className="form-control"
            onChange={formik.handleChange}
            value={formik.values.state} name="state" />
            <label className="form-label" for="form11Example4">state</label>
          </div>

           <div className="form-outline mb-4">
            <input type="number" id="form11Example6" className="form-control"
            value={formik.values.Phone}  onChange={formik.handleChange} name="Phone" />
              <span style={{color:'red'}}>{formik.errors.Phone}</span>
            <label className="form-label" for="form11Example6">Phone</label>
          </div>
   
        </form>
      </div>

    </div>
    <div className="text-center">
      <button  className="btn btn-info"  type={"submit"} value="Submit" disabled={!formik.isValid}>
        <Link to={`/Payment/${params.total}`}>Proceed to Pay</Link></button>
    </div>

  </div>
  </div>
  </>
    )
}




export default  Shipping