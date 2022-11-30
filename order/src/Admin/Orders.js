import Adminnavbar from "./Adminnavbar"

function Orders () {

    return <>
            <Adminnavbar></Adminnavbar>
         <table className="table-bordered mt-4 container"  style={{border:"1px solid black"}}>
           <thead>
               <tr>
              <td> <b>Name</b></td>
               <td><b>Email</b></td>
               <td><b>Amount</b></td>
               <td><b>Paid</b></td>
               <td><b>Date</b></td>
               <td><b>status</b></td>
               <td><b>Action</b></td>

               </tr>
               </thead>
           

            <tbody>
              <tr>
              <td>Pink saree</td>
               <td>user@gmail.com</td>
               <td>40000</td>
               <td>
                <span className="badge rounded-pill alert-success" style={{color:"green"}}>Paid at Today 11:10 A.M</span></td>
               <td>Nov 24 2022</td>
               <td>
               <span className="badge badge-pill badge-success"  style={{color:"green"}}> Delivered</span></td>
               <td><button className="btn btn-success">Action</button></td>


              </tr>

              <tr>
              <td>Black checked shirt</td>
               <td>user@gmail.com</td>
               <td>35000</td>
               <td><span className="badge rounded-pill alert-danger"style={{color:"red"}}>Not Paid</span></td>
               <td>Nov 24 2022</td>
               <td>  <span className="badge badge-pill badge-secondary"  style={{color:"red"}}>Not Delivered</span></td>
               <td><button className="btn btn-success">Action</button></td>


              </tr>

            </tbody>

          

    </table>

    </>
}

export default Orders