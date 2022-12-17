import React from 'react'
import "../style/portfolio.scss";
import img from "../images/portfolio-image-3.jpg"
function Portfolio() {
    return (
        <div className="container portfolio min-vh-100" id='portfolio' data-aos="fade-up" data-aos-duration="800">
        {/* this is about header */}
        <div className="row my-5 d-flex justify-content-center align-items-center">
          <div className="col text-center portfolio-content">
            <h1>OUR PORTFOLIOS</h1>
            <p>Molestiae voluptatem dolorem commodi ipsum. Odit et rerum praesentium. Dolorem animi ullam.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 mb-3 card-content">
            <div class="card border-0 rounded-0">
              <img src={img} class="card-img-top" className='img-fluid' alt="..." />
              <div class="card-body ">
                <h5 class="card-title">Corrupti est voluptatem.</h5>
                <p class="card-text">Technology</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 mb-3 card-content">
            <div class="card border-0 rounded-0">
              <img src={img} class="card-img-top" className='img-fluid' alt="..." />
              <div class="card-body ">
                <h5 class="card-title">Corrupti est voluptatem.</h5>
                <p class="card-text">Technology</p>
              </div>
            </div>
          </div>


          <div className="col-12 col-md-12 col-lg-4 mb-3 card-content">
            <div class="card border-0 rounded-0">
              <img src={img} class="card-img-top" className='img-fluid' alt="..." />
              <div class="card-body ">
                <h5 class="card-title">Corrupti est voluptatem.</h5>
                <p class="card-text">Technology</p>
              </div>
            </div>
          </div>


        </div>
      </div>

    )
}

export default Portfolio