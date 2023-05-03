import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Index from "./Index";
import Contact from "./Contact";
import Elements from "./Elements";
import Services from "./Services";

function About() {
  return (
    <div>
      <div className="site-mobile-menu site-navbar-target">
        <div className="site-mobile-menu-header">
          <div className="site-mobile-menu-close">
            <span className="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div className="site-mobile-menu-body"></div>
      </div>

      <nav className="site-nav">
        <div className="container">
          <div className="site-navigation">
            <Link to="/Index" className="logo m-0">
              Tour <span className="text-primary">.</span>
            </Link>

            <ul className="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right">
              <li>
                <Link to="/Index">Home</Link>
              </li>
              <li className="has-children">
                <a href="#">Dropdown</a>
                <ul className="dropdown">
                  <li>
                    <Link to="/Elements">Elements</Link>
                  </li>
                  <li>
                    <a href="#">Menu One</a>
                  </li>
                  <li className="has-children">
                    <a href="#">Menu Two</a>
                    <ul className="dropdown">
                      <li>
                        <a href="#">Sub Menu One</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Two</a>
                      </li>
                      <li>
                        <a href="#">Sub Menu Three</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Menu Three</a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/Services">Services</Link>
              </li>
              <li className="active">
                <Link to="/About">About</Link>
              </li>
              <li>
                <Link to="/Contact">Contact Us</Link>
              </li>
            </ul>

            <a
              href="#"
              className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </nav>

      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">About Us</h1>
                <p className="text-white">
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="owl-single dots-absolute owl-carousel">
                <img
                  src="Assets/images/slider-1.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="Assets/images/slider-2.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="Assets/images/slider-3.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="Assets/images/slider-4.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
                <img
                  src="Assets/images/slider-5.jpg"
                  alt="Free HTML Template by Untree.co"
                  className="img-fluid rounded-20"
                />
              </div>
            </div>
            <div className="col-lg-5 pl-lg-5 ml-auto">
              <h2 className="section-title mb-4">About Tours</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
              <ul className="list-unstyled two-col clearfix">
                <li>Outdoor recreation activities</li>
                <li>Airlines</li>
                <li>Car Rentals</li>
                <li>Cruise Lines</li>
                <li>Hotels</li>
                <li>Railways</li>
                <li>Travel Insurance</li>
                <li>Package Tours</li>
                <li>Insurance</li>
                <li>Guide Books</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-md-6 text-center">
              <h2 className="section-title mb-3 text-center">Team</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 mb-4">
              <div className="team">
                <img
                  src="Assets/images/person_1.jpg"
                  alt="Image"
                  className="img-fluid mb-4 rounded-20"
                />
                <div className="px-3">
                  <h3 className="mb-0">James Watson</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="team">
                <img
                  src="Assets/images/person_2.jpg"
                  alt="Image"
                  className="img-fluid mb-4 rounded-20"
                />
                <div className="px-3">
                  <h3 className="mb-0">Carl Anderson</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 mb-4">
              <div className="team">
                <img
                  src="Assets/images/person_4.jpg"
                  alt="Image"
                  className="img-fluid mb-4 rounded-20"
                />
                <div className="px-3">
                  <h3 className="mb-0">Michelle Allison</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 mb-4">
              <div className="team">
                <img
                  src="Assets/images/person_3.jpg"
                  alt="Image"
                  className="img-fluid mb-4 rounded-20"
                />
                <div className="px-3">
                  <h3 className="mb-0">Drew Wood</h3>
                  <p>Co-Founder &amp; CEO</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section testimonial-section mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <h2 className="section-title text-center mb-5">Testimonials</h2>

              <div className="owl-single owl-carousel no-nav">
                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img
                      src="Assets/images/person_2.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <h3 className="name">Adam Aderson</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>

                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img
                      src="Assets/images/person_3.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <h3 className="name">Lukas Devlin</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>

                <div className="testimonial mx-auto">
                  <figure className="img-wrap">
                    <img
                      src="Assets/images/person_4.jpg"
                      alt="Image"
                      className="img-fluid"
                    />
                  </figure>
                  <h3 className="name">Kayla Bryant</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <figure className="img-play-video">
                <a
                  id="play-video"
                  className="video-play-button"
                  href="https://www.youtube.com/watch?v=mwtbEGNABWU"
                  data-fancybox
                >
                  <span></span>
                </a>
                <img
                  src="Assets/images/hero-slider-2.jpg"
                  alt="Image"
                  className="img-fluid rounded-20"
                />
              </figure>
            </div>

            <div className="col-lg-5">
              <h2 className="section-title text-left mb-4">
                Take a look at Tour Video
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>

              <p className="mb-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <ul className="list-unstyled two-col clearfix">
                <li>Outdoor recreation activities</li>
                <li>Airlines</li>
                <li>Car Rentals</li>
                <li>Cruise Lines</li>
                <li>Hotels</li>
                <li>Railways</li>
                <li>Travel Insurance</li>
                <li>Package Tours</li>
                <li>Insurance</li>
                <li>Guide Books</li>
              </ul>

              <p>
                <a href="#" className="btn btn-primary">
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 cta-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2 className="mb-2 text-white">
                Lets you Explore the Best. Contact Us Now
              </h2>
              <p className="mb-4 lead text-white text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, fugit?
              </p>
              <p className="mb-0">
                <a
                  href="booking.html"
                  className="btn btn-outline-white text-white btn-md font-weight-bold"
                >
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="site-footer">
        <div className="inner first">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">About Tour</h3>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts.
                  </p>
                </div>
                <div className="widget">
                  <ul className="list-unstyled social">
                    <li>
                      <a href="#">
                        <span className="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-dribbble"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-pinterest"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-apple"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-google"></span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2 pl-lg-5">
                <div className="widget">
                  <h3 className="heading">Pages</h3>
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-2">
                <div className="widget">
                  <h3 className="heading">Resources</h3>
                  <ul className="links list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="widget">
                  <h3 className="heading">Contact</h3>
                  <ul className="list-unstyled quick-info links">
                    <li className="email">
                      <a href="#">mail@example.com</a>
                    </li>
                    <li className="phone">
                      <a href="#">+1 222 212 3819</a>
                    </li>
                    <li className="address">
                      <a href="#">43 Raymouth Rd. Baltemoer, London 3910</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="inner dark">
          <div className="container">
            <div className="row text-center">
              <div className="col-md-8 mb-3 mb-md-0 mx-auto">
                <p>
                  Copyright &copy;
                  <script>document.write(new Date().getFullYear());</script>.
                  All Rights Reserved. &mdash; Designed with love by{" "}
                  <a href="https://untree.co" className="link-highlight">
                    Untree.co
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div id="overlayer"></div>
      <div className="loader">
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div> */}

      <script src="Assets/js/jquery-3.4.1.min.js"></script>
      <script src="Assets/js/popper.min.js"></script>
      <script src="Assets/js/bootstrap.min.js"></script>
      <script src="Assets/js/owl.carousel.min.js"></script>
      <script src="Assets/js/jquery.animateNumber.min.js"></script>
      <script src="Assets/js/jquery.waypoints.min.js"></script>
      <script src="Assets/js/jquery.fancybox.min.js"></script>
      <script src="Assets/js/aos.js"></script>
      <script src="Assets/js/moment.min.js"></script>
      <script src="Assets/js/daterangepicker.js"></script>

      <script src="Assets/js/typed.js"></script>

      <script src="Assets/js/custom.js"></script>
    </div>
  );
}
<Routes>
  <Route path="/Index" element={<Index />}></Route>
  <Route path="/Contact" element={<Contact />}></Route>
  <Route path="/Elements" element={<Elements />}></Route>
  <Route path="/Services" element={<Services />}></Route>
</Routes>;
export default About;