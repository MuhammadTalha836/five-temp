import React from 'react'
import "../style/subscribe.scss";

function Subscribe() {
    return (

        <>
            {/* here is subcribe section */}
            <div className="py-5 min-vh-100 " id='subcribe'>
                <div className="container-fluid subscribe d-flex justify-content-center align-items-center">
                    <div>
                        {/* this is subcribe header content */}
                        <div className="row">
                            <div className="col my-3 my-md-5 text-center">
                                <p>Get Offers</p>
                                <h3>Subscribe to our newsletter</h3>
                            </div>
                        </div>
                        {/* this is subscribe input filed for email */}
                        <div className="row">
                            <div className="col d-flex justify-content-center align-items-center">
                                <div className="input-group mb-3">
                                    <input type="text" className="form-control " placeholder="Enter Your E-Mail" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                    <button className='btn px-4 py-3' type="button" id="button-addon2" style={{ color: "white", backgroundColor: "#FF5421" }}>Subcribe</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Subscribe