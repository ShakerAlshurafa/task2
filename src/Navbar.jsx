import React from 'react'
import './Navbar.css';
import logo from './images/logo.png'

export default function Navbar() {
  return (
    <nav className="navbar mb-5 navbar-expand-lg bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#"><img src={logo} alt="" /></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Citys
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Gaza</a></li>
                <li><a className="dropdown-item" href="#">Jenin</a></li>
                <li><a className="dropdown-item" href="#">Tulkarem</a></li>
                <li><a className="dropdown-item" href="#">Nablus</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}
