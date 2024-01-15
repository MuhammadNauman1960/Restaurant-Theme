import React from "react";
import Topbar from "./Topbar";
// import Navbar from './Navbar'
import About from "./About";
import Menu from "./Menu";
import Specials from "./Specials";
import Events from "./Events";
import Chefs from "./Chefs";
import Gallery from "./Gallery";
import Contact from "./Contact";
// import Footer from './Footer'
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <Topbar />
      {/* <Navbar/> */}
      <section
        id="hero"
        class="d-flex align-items-center"
        style={{ marginTop: "50px" }}
      >
        <div
          class="container position-relative text-center text-lg-start"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div class="row">
            <div class="col-lg-8">
              <h1>
                Welcome to <span>Restaurantly</span>
              </h1>
              <h2>Delivering great food for more than 18 years!</h2>

              <div class="btns">
                <Link to="/menu" class="btn-menu animated fadeInUp scrollto">
                  Our Menu
                </Link>
                <Link
                  to="/booktable"
                  class="btn-book animated fadeInUp scrollto"
                >
                  Book a Table
                </Link>
              </div>
            </div>
            <div
              class="col-lg-4 d-flex align-items-center justify-content-center position-relative"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <Link
                to="https://www.youtube.com/watch?v=u6BOC7CDUTQ"
                class="glightbox play-btn"
              ></Link>
            </div>
          </div>
        </div>
      </section>
      <About />
      <Menu />
      <Specials />
      <Events />
      <Chefs />
      <Gallery />
      <Contact />
      {/* <Footer/> */}
    </div>
  );
}
