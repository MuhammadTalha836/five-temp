import React from 'react'
import "../style/home.scss";

function HomeSection() {
  return (

    // here is home section
    <div className="container-fluid Home-bg" id='home'>
      <div className="container">

      <div className="row home-content min-vh-100 d-flex align-items-center ms-5" data-aos="fade-up" data-aos-duration="800">
        {/* this is home header content */}
        <div className='col content mt-5'>
          <p className='text-white mb-3 pragraph'>We provide Best</p>
          <h1 className='mb-4'>Consulting services</h1>
          <p className='mb-5'>Quisquam enim consequatur magni excepturi ut id vitae. Accusamus quod minus libero cum. Excepturi numquam quam quo quam. Nobis labore quis.</p>
          <button className='btn px-5 py-3 about'>About Us</button>
          <button className='btn px-5 py-3 service'>Our Service</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default HomeSection