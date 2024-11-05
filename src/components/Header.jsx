import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === "/");
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenu2, setOpenMenu2] = useState(false);

  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location.pathname]);

  const headerStyle = {
    background: isHome ? "transparent" : "#1d3b6a",
    position: isHome ? "absolute" : "relative",
    // add other styles as needed
  };

  const handleMenuClick = () => {
    //added if condition to show mobile menu 
    if (window.innerWidth > 991) {
    setOpenMenu2(false);
    const dropdownMenu = document.querySelector(
      ".navbar-expand-lg .navbar-nav .dropdown:hover > .dropdown-menu"
    );
    if (dropdownMenu) {
      dropdownMenu.style.cssText = "visibility: hidden;";
    }
  }
  };
  const ShowMeAgain = () => {
    // Check if the screen width is greater than 991px
    if (window.innerWidth > 991) {
      setOpenMenu2(false);
      const dropdownMenu = document.querySelector(
        ".navbar-expand-lg .navbar-nav .dropdown:hover > .dropdown-menu"
      );
      if (dropdownMenu) {
        dropdownMenu.style.cssText = "visibility: visible;";
      }
    }
  };

  return (
    <>
      {/* <!-- Offcanvas end START --> */}
      <div
        className={
          openMenu
            ? "offcanvas offcanvas-end bg-dark show"
            : "offcanvas offcanvas-end bg-dark  offcanvas-backdrop fade"
        }
        tabindex="-1"
        id="offcanvasEnd"
        aria-labelledby="offcanvasEnd"
        style={{
          backgroundImage: 'url("assets/images/bg/pattern/03.png")',
          backgroundPosition: "center left",
          backgroundSize: "cover",
        }}
      >
        <div class="offcanvas-header">
          <Link
            class="ms-auto btn btn-primary btn-round zoom-hover"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i class="fas fa-times p-0"></i>
          </Link>
        </div>
        <div class="offcanvas-body vh-lg-100 d-flex align-items-start flex-column px-5 px-md-6">
          {/* <!-- Offcanvas inner START --> */}
          <ul class="nav dropdown-toggle-start-icon d-block flex-column mb-5">
            <li class="nav-item display-6 h5 position-relative">
              <Link
                to="/"
                className="nav-link text-white-stroke d-block"
                onClick={() => {
                  setOpenMenu(false);
                  document
                    .querySelector(".offcanvas-backdrop")
                    .classList.remove("show");
                }}
              >
                Home
              </Link>
              {/* <!-- Offcanvas dropdown START --> */}
              {/* <!-- Offcanvas dropdown END --> */}
              <li class="nav-item display-6 h5">
                <Link
                  class="nav-link text-white-stroke"
                  to="/about"
                  onClick={() => {
                    setOpenMenu(false);
                    document
                      .querySelector(".offcanvas-backdrop")
                      .classList.remove("show");
                  }}
                >
                  About
                </Link>
              </li>
              <li class="nav-item display-6 h5">
                <Link
                  class="nav-link text-white-stroke"
                  to="/services"
                  onClick={() => {
                    setOpenMenu(false);
                    document
                      .querySelector(".offcanvas-backdrop")
                      .classList.remove("show");
                  }}
                >
                  Services
                </Link>
              </li>
              <li class="nav-item display-6 h5">
                <Link
                  class="nav-link text-white-stroke"
                  to="/rental"
                  onClick={() => {
                    setOpenMenu(false);
                    document
                      .querySelector(".offcanvas-backdrop")
                      .classList.remove("show");
                  }}
                >
                  Rentals
                </Link>
              </li>
              <li class="nav-item display-6 h5">
                <Link
                  class="nav-link text-white-stroke"
                  to="/contact"
                  onClick={() => {
                    setOpenMenu(false);
                    document
                      .querySelector(".offcanvas-backdrop")
                      .classList.remove("show");
                  }}
                >
                  Contact Us
                </Link>
                <Link
                  class="nav-link text-white-stroke"
                  to="https://bhagirathtechnologies.zohorecruit.in/careers"
                  onClick={() => {
                    setOpenMenu(false);
                    document
                      .querySelector(".offcanvas-backdrop")
                      .classList.remove("show");
                  }}
                >
                  Career
                </Link>
              </li>
            </li>
          </ul>
          <div class="mt-auto mb-5">
            <Link
              to="#"
              class="font-heading text-white text-primary-hover d-block mb-3"
            >
              info@bhagirathtechnologies.com
            </Link>
            <Link to="tel:+918982301484" class="font-heading text-white text-primary-hover">
              +91 8982301484
            </Link>
          </div>
          {/* <!-- Offcanvas inner END --> */}
        </div>
      </div>
      {/* <!-- Offcanvas end END --> */}

      {/* <!-- Header START --> */}
      <header
        style={headerStyle}
        class="navbar-transparent navbar-sticky-bg-dark navbar-sticky"
      >
        {/* <!-- Navbar top START --> */}
        <div class="navbar-top d-none d-lg-block">
          <div class="container">
            <div class="d-md-flex justify-content-between align-items-center">
              {/* <!-- Navbar top Left--> */}
              <div class="d-flex align-items-center justify-content-center">
                {/* <!-- Top info --> */}
                <ul class="nav justify-content-center justify-content-md-start">
                  <li
                    class="nav-item me-3"
                    data-bs-toggle="tooltip"
                    data-bs-animation="false"
                    data-bs-placement="bottom"
                    title="Sunday CLOSED"
                  >
                    <span class="text-white">
                      <i class="far fa-clock me-2"></i>Visit time: Mon-Fri
                      9:00-06:00
                    </span>
                  </li>
                  <li class="nav-item">
                    <Link
                      class="navbar-link text-white text-primary-hover"
                      to="tel:+918982301484"
                    >
                      <i class="fas fa-headset me-2"></i>Call us
                      now:+918982301484
                    </Link>
                  </li>
                </ul>
              </div>

              {/* <!-- Navbar top Right--> */}
              <div class="d-flex align-items-center justify-content-center">
                {/* <!-- Languages --> */}
                <div class="dropdown ms-3">
                  <Link
                    class="dropdown-toggle text-white text-primary-hover"
                    to="#"
                    role="button"
                    id="dropdownLanguage"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <img
                      class="fa-fw me-1"
                      src="assets/images/flags/uk.svg"
                      alt=""
                    />{" "}
                    English{" "}
                  </Link>
                  <div
                    class="dropdown-menu mt-2 shadow"
                    aria-labelledby="dropdownLanguage"
                  >
                    <span class="dropdown-item-text">Select language</span>
                    <div class="dropdown-divider"></div>
                  </div>
                </div>
                {/* <!-- Employee Section (useful links) --> */}
                <div class="dropdown ms-3">
                  <Link
                    class="dropdown-toggle text-white text-primary-hover"
                    to="#"
                    role="button"
                    id="dropdownLanguage"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    <i class="bi bi-people-fill fa-fw me-1"></i>
                    Employee Section
                  </Link>
                  <div
                    class="dropdown-menu mt-2 shadow"
                    aria-labelledby="dropdownLanguage"
                  >
                    <span class="dropdown-item-text">Select Option</span>
                    <div class="dropdown-divider"></div>
                    <Link class="dropdown-item" to="https://meeting.bhagirathtechnologies.com/" target="_blank">
                      <img
                        class="fa-fw me-2"
                        src="assets/images/flags/Zoho_meet.png"
                        alt=""
                      />{" "}
                      Btpl Meet
                    </Link>
                    <Link class="dropdown-item" to="https://people.bhagirathtechnologies.com/" target="_blank">
                      <img
                        class="fa-fw me-2"
                        src="assets/images/flags/Zoho-people.png"
                        alt=""
                      />{" "}
                      Btpl People
                    </Link>
                    <Link class="dropdown-item" to="https://careers.bhagirathtechnologies.com/" target="_blank">
                      <img
                        class="fa-fw me-2"
                        src="assets/images/flags/Zoho-career.png"
                        alt=""
                      />{" "}
                      Btpl Careers
                    </Link>
                  </div>
                </div>
                {/* <!-- Top link --> */}
                <ul class="nav ms-3">
                  <li class="nav-item">
                    <Link
                      to="/contact"
                      class="nav-link text-white text-primary-hover"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>

                {/* <!-- Top social --> */}
                <ul class="list-unstyled d-flex">
                  <li>
                    {" "}
                    <Link class="text-white text-primary-hover px-2" to="https://www.facebook.com/bhagirathtechnologies/" target="_blank">
                      <i class="fab fa-facebook-f"></i>
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link class="text-white text-primary-hover px-2" to="https://www.instagram.com/bhagirath_technologies/" target="_blank">
                      <i class="fab fa-instagram"></i>
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link class="text-white text-primary-hover px-2" to="https://in.linkedin.com/company/bhagirath-technologies" target="_blank">
                      <i class="fab fa-linkedin"></i>
                    </Link>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="divider-light opacity-1"></div>
        {/* <!-- Navbar top END --> */}

        {/* <!-- Logo Nav START --> */}
        <nav class="navbar navbar-dark navbar-expand-lg">
          <div class="container">
            {/* <!-- Logo START --> */}
            <Link class="navbar-brand " to="/">
              <img
                src="../assets/images/logos/Bhagirath Technologies Logo White.svg"
                alt="logo"
                width="110px"
              />
            </Link>
            {/* <!-- Logo END --> */}

            {/* <!-- Responsive navbar toggler --> */}
            <button
              class="navbar-toggler ms-auto"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setOpenMenu2(true)}
            >
              <span class="navbar-toggler-icon"> </span>
            </button>

            {/* <!-- Main Menu START --> */}
            <div
              className={
                openMenu2
                  ? "navbar-collapse collapse show"
                  : "navbar-collapse collapse"
              }
              // class="collapse navbar-collapse"
              id="navbarCollapse"
            >
              <ul class="navbar-nav navbar-nav-scroll navbar-nav-scroll mx-auto">
                {/* <!-- Menu item 1 Home --> */}
                <li class="nav-item dropdown">
                  <Link class="nav-link" to="/">
                    Home
                  </Link>
                </li>
                  {/* <!-- Menu item 2 About --> */}
                  <li class="nav-item dropdown">
                  <Link class="nav-link" to="/about">
                    About Us
                  </Link>
                </li>
                {/* <!-- Menu item 3 Services --> */}
                <li class="nav-item dropdown dropdown-fullwidth">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="portfolioMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={ShowMeAgain}
                    // onMouseOver={() => {
                    //   document.querySelector('.navbar-expand-lg .navbar-nav .dropdown:hover>.dropdown-menu').style.visibility = "visible";
                    // }}
                  // onMouseOver={handleServicesMouseOver}
                  >
                    Services
                  </Link>
                  {/* {servicesDropdownVisible && ( */}
                  <div class="dropdown-menu" aria-labelledby="portfolioMenu">
                    <div class="container">
                      <div class="row g-0 flex-fill">
                        <div class="col-sm-6 col-lg-3">
                          <ul class="list-unstyled mb-4 mb-lg-0">

                            {/* <li class="dropdown-header">Web Development</li> */}
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-header"
                                to="/services/web-development"
                                onClick={handleMenuClick}
                              >
                                Web Development
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/website-design"
                                onClick={handleMenuClick}
                              >
                                Website Design
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/web-applications"
                                onClick={handleMenuClick}
                              >
                                Web Applications
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/custom-software-development"
                                onClick={handleMenuClick}
                              >
                                Custom Software Development
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/e-commerce-application"
                                onClick={handleMenuClick}
                              >
                                E-Commerce Application
                              </HashLink>{" "}
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                          <ul class="list-unstyled mb-4 mb-lg-0">
                            {/* <li class="dropdown-header">
                                Graphics & E-commerce
                              </li> */}
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-header"
                                to="/services/graphics-Ecommerce"
                                onClick={handleMenuClick}
                              >
                                Graphics & E-commerce
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/logo-designing"
                                onClick={handleMenuClick}
                              >
                                Logo Designing
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/banner-poster-designs"
                                onClick={handleMenuClick}
                              >
                                Banner Poster Designs
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/print-media"
                                onClick={handleMenuClick}
                              >
                                Print Media
                                <span class="badge bg-danger ms-2">
                                  Trendy
                                </span>
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/figma-designs"
                                onClick={handleMenuClick}
                              >
                                Figma Designs
                              </HashLink>{" "}
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                          <ul class="list-unstyled mb-4 mb-lg-0">
                            {/* <li class="dropdown-header">Online Marketing</li> */}
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-header"
                                to="/services/online-marketing"
                                onClick={handleMenuClick}
                              >
                                Online Marketing
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/digital-marketing"
                                onClick={handleMenuClick}
                              >
                                Digital Marketing
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/social-media-marketing"
                                onClick={handleMenuClick}
                              >
                                Social Media Marketing
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/google-ads-campaign"
                                onClick={handleMenuClick}
                              >
                                Google Ads Campaign
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/content-writing"
                                onClick={handleMenuClick}
                              >
                                Content Writing
                              </HashLink>{" "}
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                          <ul class="list-unstyled">
                            {/* <li class="dropdown-header">Branding</li> */}
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-header"
                                to="/services/branding"
                                onClick={handleMenuClick}
                              >
                                Branding
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/brand-identity"
                                onClick={handleMenuClick}
                              >
                                Brand Identity
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/mockup-designs"
                                onClick={handleMenuClick}
                              >
                                Mockup Designs
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/visual-designs"
                                onClick={handleMenuClick}
                              >
                                Visual Designs
                              </HashLink>{" "}
                            </li>
                            <li>
                              {" "}
                              <HashLink
                                class="dropdown-item"
                                to="/services/illustration-iconography"
                                onClick={handleMenuClick}
                              >
                                Illustration & Iconography
                              </HashLink>{" "}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="col-12 mt-3">
                        <div class="bg-dark p-5 pb-4 w-100 pattern-overlay-2">
                          <div class="row d-md-flex justify-content-center">
                            <h5 class="col-md-4 text-white mb-4">
                              Explore our Digital Era
                            </h5>
                            <p class="col-md-3 text-white">
                              Embark on the journey to your dream website
                              hassle-free. Explore our offerings today!
                            </p>
                            <div class="col-md-3 text-md-end">
                              <HashLink
                                class="btn btn-line btn-success"
                                to="/services"
                                onClick={handleMenuClick}
                              >
                                View All
                              </HashLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* )} */}
                </li>

                {/* <!-- Menu item 4 Rentals --> */}
                <li class="nav-item dropdown dropdown-fullwidth">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="elementsMenu"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    onClick={ShowMeAgain}
                    // onMouseOver={() => {
                    //   document.querySelector('.navbar-expand-lg .navbar-nav .dropdown:hover>.dropdown-menu').style.visibility = "visible";
                    // }}
                  // onMouseOver={handleRentalsMouseOver}
                  >
                    Rental <span class="badge bg-danger">New</span>
                  </Link>
                  {/* {rentalsDropdownVisible && ( */}
                  <div class="dropdown-menu" aria-labelledby="elementsMenu">
                    <div class="container">
                      <div class="row g-0 flex-fill">
                        <div class="col-sm-6 col-lg-3">
                          <ul class="list-unstyled">
                            <li>
                              {" "}
                              <Link
                                class="dropdown-header"
                                to="/rental/Laptops"
                                onClick={handleMenuClick}
                              >
                                <i class="bi bi-laptop fa-fw me-2"></i>Laptops
                              </Link>{" "}
                            </li>
                            <li>

                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/1"
                                onClick={handleMenuClick}
                              >
                                <i class="bi bi-laptop fa-fw me-2"></i>MacBook
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/2"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-laptop fa-fw me-2"></i>
                                MacBook Air
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/3"
                                onClick={handleMenuClick}
                              >
                                <i class="bi bi-laptop-fill fa-fw me-2"></i>Hp
                                Laptops
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/4"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-laptop-code blink-animation fa-fw me-2"></i>
                                Other Laptops
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                          <ul class="list-unstyled">

                            <li>
                              {" "}
                              <Link
                                class="dropdown-header"
                                to="/rental/Desktops"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-desktop fa-fw me-2"></i>
                                Desktops
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/5"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-desktop fa-fw me-2"></i>
                                Computers
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/6"
                                onClick={handleMenuClick}
                              >
                                <i class="bi bi-pc-display-horizontal fa-fw me-2"></i>
                                Desktop
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/7"
                                onClick={handleMenuClick}
                              >
                                <i class="bi bi-pc-display fa-fw me-2"></i>
                                Gaming Computers
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                          <ul class="list-unstyled">
                            <li>
                              {" "}
                              <Link
                                class="dropdown-header"
                                to="/rental/Peripherals"
                                onClick={handleMenuClick}
                              >
                                <i class="bi bi-laptop fa-fw me-2"></i>Peripherals
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/8"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-hdd fa-fw me-2"></i>CPUs
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/9"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-keyboard fa-fw me-2"></i>
                                Keyboard
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/10"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-mouse fa-fw me-2"></i>Mouse
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/11"
                                onClick={handleMenuClick}
                              >
                                <i class="bi bi-webcam-fill fa-fw me-2"></i>IP
                                Cameras
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                        <div class="col-sm-6 col-lg-3">
                          <ul class="list-unstyled">

                            <li>
                              {" "}
                              <Link
                                class="dropdown-header"
                                to="/rental/Printers & Screens"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-print fa-fw me-2"></i>
                                Printers & Screens
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/12"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-print fa-fw me-2"></i>
                                Printers
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/13"
                                onClick={handleMenuClick}
                              >
                                <i class="bi bi-printer-fill fa-fw me-2"></i>
                                Scanners
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/14"
                                onClick={handleMenuClick}
                              >
                                <i class="fas fa-tv fa-fw me-2"></i>LED
                                Screens
                              </Link>{" "}
                            </li>
                            <li>
                              {" "}
                              <Link
                                class="dropdown-item"
                                to="/rental/15"
                                onClick={handleMenuClick}
                              >
                                <i class="bi bi-tv-fill fa-fw me-2"></i>Panel
                                Screens
                              </Link>{" "}
                            </li>
                          </ul>
                        </div>
                        <div class="col-12 mt-3">
                          <div class="bg-dark p-5 pb-4 w-100 pattern-overlay-1">
                            <div class="row d-md-flex justify-content-center">
                              <h5 class="col-md-4 text-white mb-4">
                                Innovate and Create with TechHub
                              </h5>
                              <p class="col-md-3 text-white">
                                Initiate your creative potential with TechHub.
                                Secure your dream today and build
                                effortlessly!
                              </p>
                              <div class="col-md-3 text-md-end">
                                <HashLink
                                  class="btn btn-line btn-success"
                                  to="/rental"
                                  onClick={handleMenuClick}
                                >
                                  View All
                                </HashLink>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* )} */}
                </li>

                {/* <!-- Menu item 5 Help--> */}
                <li class="nav-item dropdown">
                  <Link
                    class="nav-link dropdown-toggle"
                    to="#"
                    id="docMenu"
                    data-bs-toggle="dropdown"
                    data-bs-display="static"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Help
                  </Link>
                  <ul
                    class="dropdown-menu pb-0 dropdown-menu-sm-end"
                    data-bs-popper="none"
                    aria-labelledby="docMenu"
                  >
                    <li>
                      <div class="dropdown-item ps-4">
                        <div class="d-flex mb-2">
                          <i class="display-8 mt-n1 me-3 text-primary fa-fw bi bi-book-half"></i>
                          <div>
                            <h6 class="my-0">Our Doc</h6>
                            <p class="small text-body d-none d-md-block">
                              Read out our all important documents.
                            </p>
                            <Link class="dropdown-item px-0" to="/terms">
                              Terms & Condition
                            </Link>
                            <Link class="dropdown-item px-0" to="/policy">
                              Privacy & Policy
                            </Link>
                            <Link class="dropdown-item px-0" to="/cookies">
                              Cookies
                            </Link>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                {/* <!-- Menu item 6 Blog--> */}
                <li class="nav-item">
                  {" "}
                  <Link class="nav-link" to="/blog">
                    Blog
                  </Link>
                </li>
                {/* <!-- Menu item 7 Contact--> */}
                <li class="nav-item">
                  {" "}
                  <Link class="nav-link" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* <!-- Main Menu END --> */}

            {/* <!-- Nav right START --> */}
            <div class="nav flex-nowrap align-items-center">
              <div class="nav-item d-none d-xl-block">
                <a href="assets/broucher/BTPL_Booklet.pdf" download="BTPL_Booklet.pdf" class="btn btn-sm btn-primary mb-0 mx-2">
                  Get Booklet!
                </a>
              </div>
              {/* <!-- Nav side Opener --> */}
              <div class="nav-item">
                <Link
                  class="nav-link pe-0"
                  data-bs-toggle="offcanvas"
                  to="#offcanvasEnd"
                  role="button"
                  aria-controls="offcanvasEnd"
                  onClick={() => setOpenMenu(true)}
                >
                  <i
                    class="bi bi-menu-button-wide rtl-flip display-8"
                    data-bs-target="#offcanvasEnd"
                  ></i>
                </Link>
              </div>
            </div>
            {/* <!-- Nav right END --> */}
          </div>
        </nav>
        {/* <!-- Logo Nav END --> */}
      </header>
      {/* <!-- =======================Header END====================== --> */}
    </>
  );
};

export default Header;
