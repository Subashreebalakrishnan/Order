import Header from "./Header"


function Content () {

    return <>
    
     <Header></Header>
    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.kevin-indig.com/content/images/2022/07/Memo-state-of-ecommerce-SERPs.png" className="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item ">  
        <img src="https://t5y6k8a5.rocketcdn.me/wp-content/uploads/2019/03/Crhistoff.jpg" className="d-block w-80" alt="..."/>
      </div>
      <div className="carousel-item ">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCq_UFIp36uVqfHl4daiCYVxBTt-hhjkb2bQ&usqp=CAU" className="d-block w-80" alt="..."/>
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </>
}

export default Content