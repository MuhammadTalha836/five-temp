import React from 'react'
import img from "../images/images/blog-image-1.jpg"
import "../style/Bolgs.scss";
import { RxPerson } from "react-icons/rx"
import { HiOutlineCalendar } from "react-icons/hi"
function Bolgs() {
  return (

    
      <div className="container bolgs min-vh-100" id='bolg'>
        {/* this is about header */}
        <div className="row my-5 d-flex justify-content-center align-items-center">
          <div className="col text-center bolg-content">
            <h1>OUR LATEST BLOGS</h1>
            <p>Molestiae voluptatem dolorem commodi ipsum. Odit et rerum praesentium. Dolorem animi ullam.</p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 col-md-12 col-lg-4 mb-3 card-content">
            <div class="card border-0 rounded-0">
              <img src={img} class="card-img-top" className='img-fluid' alt="..." />
              <div className='mt-2'>
                <span className='personIcon mx-2'><RxPerson className='icon' />by anderson</span>
                <span className='calenderIcon text-center'> <HiOutlineCalendar className="icon" />October 15, 2018</span>
              </div>
              <div class="card-body ">
                <h5 class="card-title">The Most Advance Business Plan</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum nemo deserunt quia corrupti, reiciendis adipisci. Eaque autem quisquam id eligend</p>
                <a href="#" class="text-decoration-none fw-bold text-black-50">Continue Reading...</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 mb-3 card-content">
            <div class="card border-0 rounded-0">
              <img src={img} class="card-img-top" className='img-fluid' alt="..." />
              <div className='mt-2'>
                <span className='personIcon mx-2'><RxPerson className='icon' />by anderson</span>
                <span className='calenderIcon text-center'> <HiOutlineCalendar className="icon" />October 15, 2018</span>
              </div>
              <div class="card-body ">
                <h5 class="card-title">The Most Advance Business Plan</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum nemo deserunt quia corrupti, reiciendis adipisci. Eaque autem quisquam id eligend</p>
                <a href="#" class="text-decoration-none fw-bold text-black-50">Continue Reading...</a>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-lg-4 mb-3 card-content">
            <div class="card border-0 rounded-0">
              <img src={img} class="card-img-top" className='img-fluid' alt="..." />
              <div className='mt-2'>
                <span className='personIcon mx-2'><RxPerson className='icon' />by anderson</span>
                <span className='calenderIcon text-center'> <HiOutlineCalendar className="icon" />October 15, 2018</span>
              </div>
              <div class="card-body ">
                <h5 class="card-title">The Most Advance Business Plan</h5>
                <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatum nemo deserunt quia corrupti, reiciendis adipisci. Eaque autem quisquam id eligend</p>
                <a href="#" class="text-decoration-none fw-bold text-black-50">Continue Reading...</a>
              </div>
            </div>
          </div>

        </div>
      </div>

  )
}

export default Bolgs