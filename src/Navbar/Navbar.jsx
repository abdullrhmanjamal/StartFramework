import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
  <nav className="navbar navbar-expand-lg position-fixed ">
    <div className="container">
      <NavLink className="navbar-brand fw-bold fs-2 text-light rounded-3" to="/home">START FRAMEWORK</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon " />
      </button>
      <div className="collapse navbar-collapse fs-5 fw-bolder  p-3" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
          <NavLink className="nav-link text-light rounded-3" to="/about">About</NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link text-light rounded-3" to="/portfolio">Portfolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link text-light rounded-3" to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>

  )
}
