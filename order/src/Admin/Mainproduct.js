
import Productspage from "./Productspage"
import { useState } from "react"
import Adminnavbar from "./Adminnavbar"

function Mainproduct () {

    const [product, setProduct]=useState([

        {
            title : "Pink saree",
            price : 40000,
             id:1,
            Reviews : 500,
           image : "/images/1.jpg"
          },
          
          {
            title : "Yellow saree",
            price : 60000,
             id:2,
            Reviews : 700,
            image : "/images/2.jpg"
      
          },
       
          {
            title : "Green saree",
            price : 20000,
            id:3,
            Reviews : 200,
            image : "/images/3.jpg"
          },
      
          {
            title : "Blue Formal shirt",
            price : 50000,
            id:4,
            Reviews : 850,
            image : "/images/4.jpg"
          },
          {
            title : "Black checked shirt",
            price : 35000,
             id:5,
            Reviews : 377,
            image : "/images/5.jpg"
          },
          {
            title : "Navy Blue shirt ",
            price :  25000,
            id:6,
            Reviews : 577,
            image : "/images/6.jpg"
            
          },
        
    
    
      ])

    return   <>
             <Adminnavbar></Adminnavbar>
    
    <div className="row mt-4" style={{"marginLeft":"60px"}}>
        <div className="col-lg-12">
         <div className="row"> 
         <div style={{ display: "flex", flexWrap: "wrap" }}>
    {

       product.map ((item) => {

           return <Productspage item={item}></Productspage> 
       })
    }
      </div>
       </div>
      </div>
       </div>
       </>
}

export default Mainproduct