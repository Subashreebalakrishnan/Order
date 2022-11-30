import axios from "axios";
import {useFormik}  from "formik";
import { useNavigate } from "react-router-dom";


function Register () {

    let navigate = useNavigate ()

    let formik = useFormik({

        initialValues: {

            userName:"",
            email : "",
            password: "",
        },
   
        onSubmit : async (values) => {

        try {

            let Registerdata = await axios.post("http://localhost:4000/api/users",values)

            if (Registerdata.status == 201){
            
                navigate("/Home")

            }
             window.localStorage.setItem("app-token",Registerdata.data.token)
            
        } catch (error) {

            alert(error.response.data.Error)

            console.log(error)
            
        }
    }
    
   })
    


    return  <div className="container">

  
    <div className="row justify-content-center">

        <div className="col-lg-6">

            <div className="card  my-5">
                   
            <img src="https://png.pngtree.com/background/20210715/original/pngtree-color-contrast-gradient-login-interface-login-box-picture-image_1319414.jpg" style={{"width":"544px","height":"150px"}}/>


                <div className="card-body">
                
                    <div className="row">

                           
                        <div className="col-lg-6"></div>
                        

                        
                        <div className="col-lg-6 ">
                           
                                <div className="text-center">
                                    <h1 className="h4 text-gray-900 mb-4">Create account</h1>
                                </div>

                       

                                 <form className="user" onSubmit={formik.handleSubmit}>

                                 <div className="form-group mb-2 mt-2">
                                        <input type="userName" className="form-control form-control-user"
                                            id="userName" placeholder="userName" 
                                            value={formik.values.userName}
                                     onChange={formik.handleChange} name="userName" />
                                    </div>




                                    <div className="form-group  mb-2 mt-2">
                                        <input type="email" className="form-control form-control-user"
                                            id="exampleInputEmail" aria-describedby="emailHelp"
                                            placeholder="Enter Email Address..."
                                            value={formik.values.email}
                                            onChange={formik.handleChange} name="email" />
                                    </div>
                                    <div className="form-group mb-2 mt-2">
                                        <input type="password" className="form-control form-control-user"
                                            id="exampleInputPassword" placeholder="Password" 
                                            value={formik.values.password}
                                     onChange={formik.handleChange} name="password" minLength="8"/>
                                    </div>
                                    <hr></hr>
                                    
                                    <button type="submit" className="btn btn-primary">Register</button>
                                    
                                   
                                </form>
                                
                                
                            
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </div>

</div>
 }

 export default Register
