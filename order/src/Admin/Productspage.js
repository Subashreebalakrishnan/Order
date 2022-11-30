

function Productspage ({item}){

    

    return   <div className="card">
      <img className="card-img-top" src={item.image} alt="Card image cap" style={{width:"100px",height:"100px"}}/>
      <div className="card-body">
        <h5 className="card-title">{item.title}</h5>
        <p className="card-text">Rs:{item.price}</p>
        <div> <button className="btn btn-success"><a href="#" className="badge badge-success">Ok</a></button>
        
        <button className="btn btn-danger"><a href="#" className="badge badge-danger"></a>Remove</button>
        </div>
        
      </div>
    </div>
    

   
  

}

export default Productspage