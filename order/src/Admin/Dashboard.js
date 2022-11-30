import Adminnavbar from "./Adminnavbar"




function Dashboard() {

   const cards = [

      {
         title : "EARNINGS (MONTHLY)",
         price : "$40,000",
         // theme: "blue"
      },

      {
         title : "EARNINGS (ANNUAL)",
         price : "$215,000",
         // theme : "success"
      },

      {
         title : "PAYMENT RECEIVED",
         price : "80%",
         // theme: "info"
      },

      {
         title : "PENDING PAYMENTS",
         price : "20%",
         // theme : "warning"

      },

      {
         title : "SALES",
         price : "95%",
         // theme : "success"

      },

      {
         title : "IN STOCK",
         price : "98%",
         // theme : "success"

      },

      

   ]

    return (
        <>
        <Adminnavbar></Adminnavbar>
        <div className="container mt-3">
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
       </div>
       
       <div className="row">
         {

          cards.map ((card) => {

              return <div className="col-xl-3 col-md-6 mb-4">
              <div className="card border-left shadow h-100 py-2">
                  <div className="card-body" style={{backgroundColor:"lightblue"}}>
                      <div className="row no-gutters align-items-center">
                          <div className="col mr-2">
                              <div className="text-xs font-weight-bold text- text-uppercase mb-1">
                                 {card.title}</div>
                              <div className="h5 mb-0 font-weight-bold text-gray-800">{card.price}</div>
                          </div>
                          <div className="col-auto">
                              <i className="fas fa-calendar fa-2x text-gray-300"></i>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
          })

         }
          
       </div>

       
        
        

      

       
         
       </div>
       </>
    )


        
  

}

export default Dashboard