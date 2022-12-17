import React from 'react'
import { FaReact } from "react-icons/fa"
import "../style/facts.scss";
import CountUp from 'react-countup';
function Facts() {
  return (
    // here is facts section
    <div className="container-fluid facts my-5" id='facts' data-aos="fade-up" data-aos-duration="800">

      {/* this is facts header content */}

      <div className="container d-flex justify-content-center align-items-center">
        {/* here is all card of fact section */}
        <div className="row m-0 mt-3">
          {/* this is a single card data of fact section  */}
          <div className="col-12 col-md-3 mb-4 d-flex justify-content-center align-items-center" style={{ width: "300px", }}>
            <div className="card border-0" style={{ backgroundColor: "transparent" }}>
              <div className="row">
                <div className="col fs-1 fw-bold text-white">
                  <FaReact className='text-white me-3' size="50px" />
                  <CountUp start={0} end={500} duration={5}></CountUp>
                </div>
              </div>
              <div className="row mt-2">
                <div className="col text-white">
                  <p className='fs-5'>Clients Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* this is a single card data of fact section  */}
          <div className="col-12 col-md-3 mb-4 d-flex justify-content-center align-items-center" style={{ width: "300px", }}>
            <div className="card border-0" style={{ backgroundColor: "transparent" }}>
              <div className="row">
                <div className="col fs-1 fw-bold text-white">
                  <FaReact className='text-white me-3' size="50px" />
                  <CountUp start={0} end={500} duration={5}></CountUp>

                </div>
              </div>
              <div className="row mt-2">
                <div className="col text-white">
                  <p className='fs-5'>Clients Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* this is a single card data of fact section  */}
          <div className="col-12 col-md-3 mb-4 d-flex justify-content-center align-items-center" style={{ width: "300px", }}>
            <div className="card border-0" style={{ backgroundColor: "transparent" }}>
              <div className="row">
                <div className="col fs-1 fw-bold text-white">
                  <FaReact className='text-white me-3' size="50px" />
                  <CountUp start={0} end={500} duration={5}></CountUp>

                </div>
              </div>
              <div className="row mt-2">
                <div className="col text-white">
                  <p className='fs-5'>Clients Satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* this is a single card data of fact section  */}
          <div className="col-12 col-md-3 mb-4 d-flex justify-content-center align-items-center" style={{ width: "300px", }}>
            <div className="card border-0" style={{ backgroundColor: "transparent" }}>
              <div className="row">
                <div className="col fs-1 fw-bold text-white">
                  <FaReact className='text-white me-3' size="50px" />
                  <CountUp start={0} end={500} duration={5}></CountUp>

                </div>
              </div>
              <div className="row mt-2">
                <div className="col text-white">
                  <p className='fs-5'>Clients Satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Facts