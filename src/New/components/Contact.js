import React from 'react'
import "../style/contact.scss"
import { MdOutlineLocationSearching } from "react-icons/md"

function Contact() {
    return (
        <div className="py-5  bg-light">
            <div className="container contact min-vh-100" id='contact' data-aos="fade-up" data-aos-duration="800">
                {/* this is about header */}
                <div className="row my-5 d-flex justify-content-center align-items-center">
                    <div className="col text-center contact-content">
                        <h1>Contact Us</h1>
                        <p>Molestiae voluptatem dolorem commodi ipsum. Odit et rerum praesentium. Dolorem animi ullam.</p>
                    </div>
                </div>

                <div className="row mb-3 mb-lg-5">
                    <div className="col-12 col-md-12 col-lg-4 card-content">
                        <div class="card py-lg-5">
                            <div class="card-body p-3 border-0 rounded-0">
                                <MdOutlineLocationSearching className='icon mb-3' size="70px" />
                                <h5 class="card-title">Address</h5>
                                <p class="card-text">7 Roanoke Rd, North York,</p>
                                <a href="#" class="text-decoration-none text-black fw-bold">Ontario, Canada</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-4 card-content">
                        <div class="card py-lg-5">
                            <div class="card-body p-3 border-0 rounded-0">
                                <MdOutlineLocationSearching className='icon mb-3' size="70px" />
                                <h5 class="card-title">Address</h5>
                                <p class="card-text">7 Roanoke Rd, North York,</p>
                                <a href="#" class="text-decoration-none text-black fw-bold">Ontario, Canada</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-12 col-lg-4 card-content">
                        <div class="card py-lg-5">
                            <div class="card-body p-3 border-0 rounded-0">
                                <MdOutlineLocationSearching className='icon mb-3' size="70px" />
                                <h5 class="card-title">Address</h5>
                                <p class="card-text">7 Roanoke Rd, North York,</p>
                                <a href="#" class="text-decoration-none text-black fw-bold">Ontario, Canada</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-12 col-md-12 col-lg-6 mb-3">
                        <div className="row mb-4">
                            <div className="col">
                                <h3>Let’s get in touch</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="Enter Your Name" />
                                    <label for="floatingInput">Name*</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Email*</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <div class="form-floating mb-3">
                                    <input type="text" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label for="floatingInput">Subject*</label>
                                </div>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col">
                                <div class="form-floating">
                                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: "160px" }}></textarea>
                                    <label for="floatingTextarea2">Messages</label>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col">
                                <button className='btn px-4 py-3 text-white border-0 rounded-0' style={{backgroundColor:"#3F51B5"}}>Send Message</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-12 col-lg-6 mb-3 pt-5">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d435518.6817829184!2d74.0541916138194!3d31.483220875157084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1671302026124!5m2!1sen!2s" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact