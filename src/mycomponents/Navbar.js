import React from 'react'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <header id="header" class="fixed-top d-flex align-items-cente">
    <div class="container-fluid container-xl d-flex align-items-center justify-content-lg-between">

      <h1 class="logo me-auto me-lg-0"><Link to="/">Restaurantly</Link></h1>
      
      <Link to="index.html" class="logo me-auto me-lg-0"><img src="assets/img/logo.png" alt="" class="img-fluid"/></Link>

      <nav id="navbar" class="navbar order-last order-lg-0">
        <ul>
          <li><Link class="nav-link scrollto" to="/">Home</Link></li>
          <li><Link class="nav-link scrollto" to="/about">About</Link></li>
          <li><Link class="nav-link scrollto" to="/menu">Menu</Link></li>
          <li><Link class="nav-link scrollto" to="/specials">Specials</Link></li>
          <li><Link class="nav-link scrollto" to="/events">Events</Link></li>
          <li><Link class="nav-link scrollto" to="/chefs">Chefs</Link></li>
          <li><Link class="nav-link scrollto" to="/gallery">Gallery</Link></li>
          <li><Link class="nav-link scrollto" to="/contact">Contact</Link></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
      <Link to="/booktable" class="book-a-table-btn scrollto d-none d-lg-flex">Book a table</Link>

    </div>
  </header>
    </div>
  )
}
