import React from 'react'
import logo from '../images/avataaars.svg'

export default function Home() {
  return (
    <>
    <div className=' bg-color d-flex justify-content-center flex-column align-items-center pt-5'>
    <img className=' my-5 py-2 img-logo' src={logo} alt=""/>
    <div className='d-flex justify-content-center flex-column align-items-center position-relative'>
      <h1 className='text-white fw-bold'>START FRAMEWORK</h1>
      <div>
      </div>
      <span><i class="fa-solid fa-grip-lines fa-2xl text-white me-auto position-absolute logo-line mt-2 mx-4"></i></span>
      <span><i class="fa-solid fa-star fa-xl text-white position-absolute mt-2 logo-star mx-4"></i></span>
      <span><i class="fa-solid fa-grip-lines fa-2xl text-white  position-absolute mx-4 logo-line2 mt-2"></i></span>
   <p className='mt-4 text-white'>Graphic Artist - Web Designer - Illustrator</p>
    </div>
    </div>   
    <div className='row row-2 p-5 text-white text-center d-flex justify-content-evenly'>
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
      <div className='row'>
      <div className='  bg-dark p-2 text-white d-flex justify-content-center'>
        <p>Copyright © Your Website 2021</p>

      </div>
      </div>
      
    
    
</>

  )
}
