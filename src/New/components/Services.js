import React from 'react'
import "../style/services.scss";
import { AiOutlineFileSync } from "react-icons/ai"

function Services() {
  return (
    // here is about section
    <div className="py-5  bg-light">
      <div className="container services min-vh-100" id='services'>
        {/* this is about header */}
        <div className="row my-5 d-flex justify-content-center align-items-center">
          <div className="col text-center services-content">
            <h1>Our Services</h1>
            <p>Molestiae voluptatem dolorem commodi ipsum. Odit et rerum praesentium. Dolorem animi ullam.</p>
          </div>
        </div>

        <div className="row mb-3 mb-lg-5">
          <div className="col-12 col-md-12 col-lg-4 card-content">
            <div class="card py-lg-5">
              <div class="card-body p-3 border-0 rounded-0">
                <AiOutlineFileSync className='icon mb-3' size="70px" />
                <h5 class="card-title">Financial Analysis</h5>
                <p class="card-text">Quia et dolore. Et esse ut quas quisquam. Et impedit fugiat debitis eveniet similique sed perspiciatis.</p>
                <a href="#" class="text-decoration-none text-black fw-bold">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 card-content">
            <div class="card py-lg-5">
              <div class="card-body p-3 border-0 rounded-0">
                <AiOutlineFileSync className='icon mb-3' size="70px" />
                <h5 class="card-title">Financial Analysis</h5>
                <p class="card-text">Quia et dolore. Et esse ut quas quisquam. Et impedit fugiat debitis eveniet similique sed perspiciatis.</p>
                <a href="#" class="text-decoration-none text-black fw-bold">Read More</a>
              </div>
            </div>
          </div>


          <div className="col-12 col-md-12 col-lg-4 card-content">
            <div class="card py-lg-5">
              <div class="card-body p-3 border-0 rounded-0">
                <AiOutlineFileSync className='icon mb-3' size="70px" />
                <h5 class="card-title">Financial Analysis</h5>
                <p class="card-text">Quia et dolore. Et esse ut quas quisquam. Et impedit fugiat debitis eveniet similique sed perspiciatis.</p>
                <a href="#" class="text-decoration-none text-black fw-bold">Read More</a>
              </div>
            </div>
          </div>

        </div>



        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 card-content">
            <div class="card py-lg-5">
              <div class="card-body p-3 border-0 rounded-0">
                <AiOutlineFileSync className='icon mb-3' size="70px" />
                <h5 class="card-title">Financial Analysis</h5>
                <p class="card-text">Quia et dolore. Et esse ut quas quisquam. Et impedit fugiat debitis eveniet similique sed perspiciatis.</p>
                <a href="#" class="text-decoration-none text-black fw-bold">Read More</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 card-content">
            <div class="card py-lg-5">
              <div class="card-body p-3 border-0 rounded-0">
                <AiOutlineFileSync className='icon mb-3' size="70px" />
                <h5 class="card-title">Financial Analysis</h5>
                <p class="card-text">Quia et dolore. Et esse ut quas quisquam. Et impedit fugiat debitis eveniet similique sed perspiciatis.</p>
                <a href="#" class="text-decoration-none text-black fw-bold">Read More</a>
              </div>
            </div>
          </div>


          <div className="col-12 col-md-12 col-lg-4 card-content">
            <div class="card py-lg-5">
              <div class="card-body p-3 border-0 rounded-0">
                <AiOutlineFileSync className='icon mb-3' size="70px" />
                <h5 class="card-title">Financial Analysis</h5>
                <p class="card-text">Quia et dolore. Et esse ut quas quisquam. Et impedit fugiat debitis eveniet similique sed perspiciatis.</p>
                <a href="#" class="text-decoration-none text-black fw-bold">Read More</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Services