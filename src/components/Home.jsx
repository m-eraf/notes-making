import React from 'react'
import Products from "./Products";
const Home = () => {
  return (
    <div className= "hero">
      <div className="card text-bg-dark">
  <img src="/assets/ab.jpg" class="card-img" alt="Background" />
  <div className="card-img-overlay d-flex flex-column justify-content-center">
    <div className="container">
      <h5 className="card-title display-3 fw-bolder mb-0 text-success ">HAPPY NEW YEAR</h5>
      <p className="card-text lead fs-2 text-warning">CHECK OUT HERE YOUR COLLECTION MODELLER</p>
    </div>
    <h5 className="card-title">Card title</h5>
    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>
  </div>
</div>
    
    <Products/>
    </div>
  )
}

export default Home