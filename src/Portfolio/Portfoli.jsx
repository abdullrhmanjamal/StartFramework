import React from 'react'
import pic from '../images/poert1.png'
import pic2 from '../images/port2.png'
import pic3 from '../images/port3.png'
export default function Portfoli() {
  return (
    <>
<div className='pt-5 py-5 container d-flex justify-content-center h-100 '>
  <h1 className=' pt-5 py-2 mt-5 portfolio-text fw-bold'>PORTFOLIO COMPONENT</h1>
</div>
<div className='container'>
  <div className='row '>
    <div className='col-md-4 my-3'>
    <img className='w-100 rounded-5' src={pic} alt="" />
    </div>
    <div className='col-md-4 my-3'>
    <img className='w-100 rounded-5' src={pic2} alt="" />
    </div>
    <div className='col-md-4 my-3'>
    <img className='w-100 rounded-5' src={pic3} alt="" />
    </div>
    <div className='col-md-4 my-3'>
    <img className='w-100 rounded-5' src={pic} alt="" />
    </div>
    <div className='col-md-4 my-3'>
    <img className='w-100 rounded-5' src={pic2} alt="" />
    </div>
    <div className='col-md-4 my-3'>
    <img className='w-100 rounded-5' src={pic3} alt="" />
    </div>
    
  </div>
</div>
<div className=' row-2 p-5 text-white text-center d-flex justify-content-evenly'>
        <div className='col-md-3'>
          <h4>LOCATION</h4>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
        <div className='col-md-3'>
        <h4>AROUND THE WEB</h4>
        <div className='d-flex justify-content-center my-4'>
          <span className='mx-2'><i class="fa-brands fa-facebook fa-2xl"></i></span>
          <span className='mx-2'><i class="fa-brands fa-twitter fa-2xl"></i></span>
          <span className='mx-2'><i class="fa-brands fa-linkedin fa-2xl"></i></span>
          <span className='mx-2'><i class="fa-solid fa-earth-americas fa-2xl"></i></span>
        </div>
        </div>
        <div className='col-md-3 '>
          <h4>ABOUT FREELANCER</h4>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
      </div>
      <div className='  bg-dark p-2 text-white d-flex justify-content-center'>
        <p>Copyright © Your Website 2021</p>

      </div>
    </>
  )
}
