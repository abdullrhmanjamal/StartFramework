import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Contact() {
  return (
   <>
<div className='pt-5 py-5 container d-flex justify-content-center h-100 position-relative'>
<h1 className=' pt-5 py-2 mt-5 portfolio-text fw-bold'>CONATCT SECTION</h1>
</div>
<div>
<div className="login-box">
  <form>
    <div className="user-box">
      <input type="text" name required />
      <label>Username</label>
    </div>
    <div className="user-box">
      <input type="password" name required />
      <label>UserAge</label>
    </div>
    <div className="user-box">
      <input type="email" name required />
      <label>UserEmail</label>
    </div>
    <div className="user-box">
      <input type="password" name required />
      <label>UserPassword</label>
    </div>
    <center>
      <NavLink className='btn btn-info text-white' to="#">
        SEND Message
        <span />
      </NavLink></center>
  </form>
</div>
<div className=' h-50 p-5 row text-white text-center d-flex justify-content-evenly position-absolute contact-2 mt-3 '>
<div className='col-md-3 mt-5'>
          <h4>LOCATION</h4>
          <p>2215 John Daniel Drive</p>
          <p>Clark, MO 65243</p>
        </div>
<div className='col-md-3  mt-5'>
<h4>AROUND THE WEB</h4>
        <div className='d-flex justify-content-center my-4'>
          <span className='mx-2'><i class="fa-brands fa-facebook fa-2xl"></i></span>
          <span className='mx-2'><i class="fa-brands fa-twitter fa-2xl"></i></span>
          <span className='mx-2'><i class="fa-brands fa-linkedin fa-2xl"></i></span>
          <span className='mx-2'><i class="fa-solid fa-earth-americas fa-2xl"></i></span>
        </div>
        </div>
<div className='col-md-3  mt-5'>
<h4>ABOUT FREELANCER</h4>
          <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
        </div>
</div>
</div>

   </>
  )
}
