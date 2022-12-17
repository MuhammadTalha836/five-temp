import React from 'react'
import "../style/testominal.scss";
import img from "../images/left-testominal-pic.svg"
import imgRight from "../images/right-img-testominal.png"
function Testominal() {
    return (
        // here is testominal section
        <div className="py-4 min-vh-100" id='testominal'>

            <div className="container-fluid testominal position-relative">
                {/* this is testominal header content  */}
                <div className="row pt-5">
                    <div className="col text-white text-center">
                        <p>Testimonial</p>
                        <h3>what our users say</h3>
                    </div>
                </div>
                {/* this is testominal card  */}
                <div className="row">
                    <div className="col d-flex justify-content-center align-items-center">
                        <div className="card position-absolute top-50 w-75 border-0 rounded-0">
                            <div className="row">

                                {/* this is testominal card left-image */}
                                <div className="col-12 col-md-6">
                                    <img src={img} alt="" className='img-fluid h-100' />
                                </div>
                                {/* this is testominal card right-image */}
                                <div className="col-12 col-md-6 text-center py-3 px-5">
                                    <img src={imgRight} alt="" className="rounded-circle" />
                                    <h4 className='my-3'>Joe Sallan</h4>
                                    <p><i className='text-center'>"This should be used to tell a story and include any testimonials you might have about your product or service for your clients"</i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Testominal