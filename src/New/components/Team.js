import React from 'react'
import "../style/team.scss";
import img from "../images/team-member-2.jpg"
function Team() {
    return (

        <div className="container team min-vh-100" id='team' data-aos="fade-up" data-aos-duration="800">
        {/* this is about header */}
        <div className="row my-5 d-flex justify-content-center align-items-center">
          <div className="col text-center team-content">
            <h1>OUR ADVISORS</h1>
            <p>Molestiae voluptatem dolorem commodi ipsum. Odit et rerum praesentium. Dolorem animi ullam.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 mb-3 card-content">
            <div class="card border-0 rounded-0">
              <img src={img} class="card-img-top" className='img-fluid' alt="..." />
              <div class="card-body  text-center">
                <h5 class="card-title">Bernard Rutherford</h5>
                <p class="card-text">S. Advisor</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 mb-3 card-content">
            <div class="card border-0 rounded-0">
              <img src={img} class="card-img-top" className='img-fluid' alt="..." />
              <div class="card-body  text-center">
                <h5 class="card-title">Bernard Rutherford</h5>
                <p class="card-text">S. Advisor</p>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 mb-3 card-content">
            <div class="card border-0 rounded-0">
              <img src={img} class="card-img-top" className='img-fluid' alt="..." />
              <div class="card-body  text-center">
                <h5 class="card-title">Bernard Rutherford</h5>
                <p class="card-text">S. Advisor</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
}

export default Team