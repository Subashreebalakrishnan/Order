
function Card ({product,addToCart}){

    
    return(

        <div className='container'>
            <div className="row">
                
        {
            product.map((productItem, productIndex) => {
                return (
                    <div className="col-lg-4 mb-2 mt-2">
                   <div className="card" style={{width: '20rem'}}>
                   <img src={productItem.image} style={{width:"300px",height:"150px"}}  />
                            <div className="card-body">
                            <h5 className="card-title">{productItem.title}</h5>
                            <p>Reviews: {productItem.Reviews} </p>
                            <h5> Rs. {productItem.price} /-</h5>
                            <button className="btn btn-primary"
                                onClick={() => addToCart(productItem)}
                            >Add To Cart</button>
                        </div>
                    </div>

                    </div>
                )
            })
        }
          
    </div>
        </div> );
}
 
export default Card