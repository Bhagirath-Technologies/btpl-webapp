import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero_Section/Hero';
import ServiceCard from '../../components/Hero_Section/ServiceCards';
import './home.css';
const Home = () => {
    return (
        <>
            {/* <!-- Pre loader --> */}
            {/* <div class="preloader">
                <img class="preloader-item" src="assets/images/loader/02.gif" alt="Loading" />
            </div> */}

            {/* <!-- Offcanvas end START --> */}
            <div class="offcanvas offcanvas-end bg-dark" tabindex="-1" id="offcanvasEnd" aria-labelledby="offcanvasEnd" style={{
                backgroundImage: 'url("assets/images/bg/pattern/03.png")',
                backgroundPosition: 'center left',
                backgroundSize: 'cover'
            }}>
                <div class="offcanvas-header">
                    <Link class="ms-auto btn btn-primary btn-round zoom-hover" data-bs-dismiss="offcanvas" aria-label="Close">
                        <i class="fas fa-times p-0"></i>
                    </Link>
                </div>
                <div class="offcanvas-body vh-lg-100 d-flex align-items-start flex-column px-5 px-md-6">
                    {/* <!-- Offcanvas inner START --> */}
                    <ul class="nav dropdown-toggle-start-icon d-block flex-column mb-5">
                        <li class="nav-item display-6 h5 position-relative">
                            <Link to="index.html" class="nav-link text-white-stroke d-block">Home</Link>
                            {/* <!-- Offcanvas dropdown START --> */}
                            <Link class="dropdown-toggle collapsed" data-bs-toggle="collapse" to="#home-dropdown-collapse" role="button" aria-expanded="false" aria-controls="home-dropdown-collapse"></Link>
                            <li class="collapse" id="home-dropdown-collapse">
                                <ul class="nav flex-column w-100 pb-4 pe-0 pe-lg-5">
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index.html">Classic Default</Link> </li>
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index-2.html">Agency classic</Link> </li>
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index-3.html">Agency Trendy<span class="badge bg-danger ms-2">Hot</span></Link> </li>
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index-4.html">Agency Modern</Link> </li>
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index-5.html">Studio showcase</Link> </li>
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index-6.html">Creative agency</Link> </li>
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index-7.html">Digital studio</Link> </li>
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index-8.html">Portfolio showcase</Link> </li>
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index-9.html">Corporate </Link> </li>
                                    <li class="nav-item"> <Link class="nav-link text-body" to="index-10.html">Personal Portfolio</Link> </li>
                                </ul>
                            </li>
                            {/* <!-- Offcanvas dropdown END --> */}
                            <li class="nav-item display-6 h5">
                                <Link class="nav-link text-white-stroke" to="#">About</Link>
                            </li>
                            <li class="nav-item display-6 h5">
                                <Link class="nav-link text-white-stroke" to="#">Work</Link>
                            </li>
                            <li class="nav-item display-6 h5">
                                <Link class="nav-link text-white-stroke" to="#">Services</Link>
                            </li>
                            <li class="nav-item display-6 h5">
                                <Link class="nav-link text-white-stroke" to="#">Our Journal</Link>
                            </li>
                            <li class="nav-item display-6 h5">
                                <Link class="nav-link text-white-stroke" to="#">Contact Us</Link>
                            </li>
                        </li>
                    </ul>
                    <div class="mt-auto mb-5">
                        <Link to="#" class="font-heading text-white text-primary-hover d-block mb-3">info@bhagirathtechnologies.com</Link>
                        <Link to="#" class="font-heading text-white text-primary-hover">+91 8982301484</Link>
                    </div>
                    {/* <!-- Offcanvas inner END --> */}
                </div>
            </div>
            {/* <!-- Offcanvas end END --> */}

            {/* <!-- Search START --> */}
            <div class="search-full collapse bg-dark p-3 pb-lg-0" id="search-open">
                <div class="container position-relative">
                    <h2 class="position-absolute start-0 bottom-0 mb-n5 display-1 text-white-stroke opacity-1">
                        <span class="d-block">Search</span>
                    </h2>
                    <div class="row vh-100">
                        <div class="d-flex flex-column my-auto py-5 w-100">
                            {/* <!-- Search form START --> */}
                            <form class="form-dark form-line position-relative w-100">
                                <div class="mb-3 input-group-lg input-text-white-stroke mb-0">
                                    {/* <!-- Search input --> */}
                                    <input class="form-control font-heading caret-primary mb-0 pe-6" type="text" name="search" placeholder="What are you looking for?" />
                                    <span class="focus-border"></span>
                                </div>
                                {/* <!-- Search button --> */}
                                <button type="button" class="position-absolute end-0 top-0 btn pb-3 text-primary-hover h-100">
                                    <i class="bi bi-search display-8"></i>
                                </button>
                            </form>
                            {/* <!-- Search form END --> */}
                            <p class="small mt-2 mb-0">e.g. Template, Bootstrap, WordPress theme </p>
                        </div>

                        {/* <!-- Search button close START --> */}
                        <Link class="position-fixed top-0 end-0 m-3 m-md-5 btn btn-white btn-round zoom-hover" data-bs-toggle="collapse" to="#" data-bs-target="#search-open" aria-expanded="true">
                            <i class="fas fa-times p-0"></i>
                        </Link>
                        {/* <!-- Search button close END --> */}
                    </div>
                </div>
            </div>
            {/* <!-- Search END --> */}

            {/* <!-- Login Popup START --> */}
            <div class="modal fade" id="topbarlogin">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header bg-primary pattern-overlay-7">
                            <div class="modal-title p-3 text-white-force">
                                <h5 class="mb-0">Sign in to your account!</h5>
                                <p class="mb-0">Nice to see you! Please log in with your account.</p>
                            </div>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div class="w-100 p-3">
                                {/* <!-- Form START --> */}
                                <form>
                                    {/* <!-- Email --> */}
                                    <div class="mb-3">
                                        <label class="form-label" for="exampleInputEmail1">Email address</label>
                                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="E-mail" />
                                    </div>
                                    {/* <!-- Password --> */}
                                    <div class="mb-3">
                                        <label class="form-label" for="exampleInputPassword1">Password</label>
                                        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="*********" />
                                    </div>
                                    {/* <!-- Checkbox --> */}
                                    <div class="mb-3 form-check">
                                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                        <label class="form-check-label" for="exampleCheck1">keep me signed in</label>
                                    </div>
                                    {/* <!-- Button --> */}
                                    <div class="row align-items-center">
                                        <div class="col-sm-4">
                                            <button type="submit" class="btn btn-dark btn-line">Login</button>
                                        </div>
                                        <div class="col-sm-8 text-sm-end">
                                            <span class="text-muted">Don't have an account? <Link to="sign-up.html">Signup here</Link></span>
                                        </div>
                                    </div>
                                </form>
                                {/* <!-- Form END --> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Login Popup END --> */}

            {/* <!-- Header START --> */}
            <header class="navbar-transparent navbar-sticky-bg-dark navbar-sticky">

                {/* <!-- Navbar top START --> */}
                <div class="navbar-top d-none d-lg-block">
                    <div class="container">
                        <div class="d-md-flex justify-content-between align-items-center">
                            {/* <!-- Navbar top Left--> */}
                            <div class="d-flex align-items-center justify-content-center">
                                {/* <!-- Top info --> */}
                                <ul class="nav justify-content-center justify-content-md-start">
                                    <li class="nav-item me-3" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" title="Sunday CLOSED">
                                        <span class="text-white"><i class="far fa-clock me-2"></i>Visit time: Mon-Sat 9:00-19:00</span>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="navbar-link text-white text-primary-hover" to="#"><i class="fas fa-headset me-2"></i>Call us now: +135-869-328</Link>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- Navbar top Right--> */}
                            <div class="d-flex align-items-center justify-content-center">
                                {/* <!-- Language --> */}
                                <div class="dropdown ms-3">
                                    <Link class="dropdown-toggle text-white text-primary-hover" to="#" role="button" id="dropdownLanguage" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> <img class="fa-fw me-2" src="assets/images/flags/uk.svg" alt="" /> English </Link>
                                    <div class="dropdown-menu mt-2 shadow" aria-labelledby="dropdownLanguage">
                                        <span class="dropdown-item-text">Select language</span>
                                        <div class="dropdown-divider"></div>
                                        <Link class="dropdown-item" to="#"><img class="fa-fw me-2" src="assets/images/flags/sp.svg" alt="" /> Español</Link>
                                        <Link class="dropdown-item" to="#"><img class="fa-fw me-2" src="assets/images/flags/fr.svg" alt="" /> Français</Link>
                                        <Link class="dropdown-item" to="#"><img class="fa-fw me-2" src="assets/images/flags/gr.svg" alt="" /> Deutsch</Link>
                                    </div>
                                </div>

                                {/* <!-- Top link --> */}
                                <ul class="nav ms-3">
                                    <li class="nav-item">
                                        <Link to="contact.html" class="nav-link text-white text-primary-hover">Contact</Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to="#" class="nav-link text-white text-primary-hover" data-bs-toggle="modal" data-bs-target="#topbarlogin"><i class="far fa-user me-2"></i>Login</Link>
                                    </li>
                                </ul>

                                {/* <!-- Top social --> */}
                                <ul class="list-unstyled d-flex">
                                    <li> <Link class="text-white text-primary-hover px-2" to="#"><i class="fab fa-facebook-f"></i></Link> </li>
                                    <li> <Link class="text-white text-primary-hover px-2" to="#"><i class="fab fa-instagram"></i></Link> </li>
                                    <li> <Link class="text-white text-primary-hover ps-2" to="#"><i class="fab fa-twitter"></i></Link> </li>
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
                        <Link class="navbar-brand" to="/">
                            <img src='../assets/images/logos/Bhagirath Technologies Logo White.png' alt="logo" width="110px" />
                        </Link>
                        {/* <!-- Logo END --> */}

                        {/* <!-- Responsive navbar toggler --> */}
                        <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"> </span>
                        </button>

                        {/* <!-- Main Menu START --> */}
                        <div class="collapse navbar-collapse" id="navbarCollapse">
                            <ul class="navbar-nav navbar-nav-scroll navbar-nav-scroll mx-auto">

                                {/* <!-- Menu item 1 Demos --> */}
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="#" id="demosMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Home</Link>
                                    <div class="dropdown-menu pb-3 pb-lg-0" aria-labelledby="demosMenu">
                                        <div class="d-block d-sm-flex">
                                            <ul class="list-unstyled w-100 pe-0 pe-lg-5">
                                                <li class="dropdown-header">Agency Demos</li>
                                                <li> <Link class="dropdown-item" to="index.html">Classic Default</Link> </li>
                                                <li> <Link class="dropdown-item" to="index-2.html">Agency classic</Link> </li>
                                                <li> <Link class="dropdown-item" to="index-3.html">Agency Trendy<span class="badge bg-danger ms-2">Hot</span></Link> </li>
                                                <li> <Link class="dropdown-item" to="index-4.html">Agency Modern</Link> </li>
                                                <li> <Link class="dropdown-item" to="index-5.html">Studio showcase</Link> </li>
                                            </ul>
                                            <ul class="list-unstyled w-100 pe-0 pe-lg-5">
                                                <li class="dropdown-header mt-3 mt-sm-0">Portfolio Demos</li>
                                                <li> <Link class="dropdown-item" to="index-6.html">Creative agency</Link> </li>
                                                <li> <Link class="dropdown-item" to="index-7.html">Digital studio</Link> </li>
                                                <li> <Link class="dropdown-item" to="index-8.html">Portfolio showcase</Link> </li>
                                                <li> <Link class="dropdown-item" to="index-9.html">Corporate </Link> </li>
                                                <li> <Link class="dropdown-item" to="index-10.html">Personal Portfolio</Link> </li>
                                            </ul>
                                        </div>
                                        {/* <!-- Nav action box --> */}
                                        <div class="w-100 mt-4 d-none d-lg-flex">
                                            <div class="text-center bg-primary-multiply position-relative overflow-hidden px-3 py-5 w-100">
                                                <h4 class="mb-0 text-white">Get free quote today!</h4>
                                                <p class=" text-white">For quick response and more details, Feel free to contact us</p>
                                                <Link class="btn btn-white btn-sm" target="_blank" to="landing/index.htm">Contact Us</Link>
                                                <img class="bg-primary-multiply position-absolute top-50 start-50 translate-middle z-index-n9 w-100" src="assets/images/bg/03.jpg" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!-- Menu item 2 Pages --> */}
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</Link>
                                    <ul class="dropdown-menu" aria-labelledby="pagesMenu">
                                        {/* <!-- About menu --> */}
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item dropdown-toggle" to="#">About</Link>
                                            <ul class="dropdown-menu" data-bs-popper="none">
                                                <li> <Link class="dropdown-item" to="about.html">About Classic</Link></li>
                                                <li> <Link class="dropdown-item" to="about-advance.html">About advance</Link></li>
                                                <li> <Link class="dropdown-item" to="about-agency.html">About agency</Link></li>
                                                <li> <Link class="dropdown-item" to="approach.html">Approach</Link></li>
                                                <li> <Link class="dropdown-item" to="mission-and-vision.html">Mission and vision</Link></li>
                                                <li> <Link class="dropdown-item" to="history.html">history</Link></li>
                                                <li> <Link class="dropdown-item" to="testimonials.html">Testimonials</Link></li>
                                                <li> <Link class="dropdown-item" to="why-choose-us.html">Why choose us</Link></li>
                                                <li> <Link class="dropdown-item" to="team.html">team</Link></li>
                                                <li> <Link class="dropdown-item" to="careers.html">careers</Link></li>
                                                <li> <Link class="dropdown-item" to="careers-single.html">careers single</Link></li>
                                            </ul>
                                        </li>
                                        {/* <!-- Hero sections menu --> */}
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item dropdown-toggle" to="#">Hero sections<span class="badge bg-danger ms-2">New</span></Link>
                                            <ul class="dropdown-menu" data-bs-popper="none">
                                                <li><Link class="dropdown-item" to="hero-01.html">Hero form</Link></li>
                                                <li><Link class="dropdown-item" to="hero-02.html">Big title & video</Link></li>
                                                <li><Link class="dropdown-item" to="hero-03.html">Split banner</Link></li>
                                                <li><Link class="dropdown-item" to="hero-04.html">Video & company info</Link></li>
                                                <li><Link class="dropdown-item" to="hero-05.html">Vector graphics</Link></li>
                                                <li><Link class="dropdown-item" to="hero-06.html">Typography intro</Link></li>
                                                <li><Link class="dropdown-item" to="hero-07.html">Overlap text</Link></li>
                                                <li><Link class="dropdown-item" to="hero-08.html">Device mockup</Link></li>
                                                <li><Link class="dropdown-item" to="hero-09.html">Split overlay</Link></li>
                                                <li><Link class="dropdown-item" to="hero-10.html">Showcase typography</Link></li>
                                            </ul>
                                        </li>
                                        <li> <Link class="dropdown-item" to="service.html">service</Link></li>
                                        <li> <Link class="dropdown-item" to="service-detail.html">Service detail</Link></li>
                                        {/* <!-- Blog menu --> */}
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item dropdown-toggle" to="#">Blog<span class="badge bg-success ms-2">2 new post</span></Link>
                                            <ul class="dropdown-menu" data-bs-popper="none">
                                                <li><Link class="dropdown-item" to="blog-classic-3-col.html">Blog classic 3 col</Link></li>
                                                <li><Link class="dropdown-item" to="blog-metro-3-col.html">Blog metro 3 col</Link></li>
                                                <li><Link class="dropdown-item" to="blog-minimal.html">Blog minimal <span class="badge bg-success ms-2">2 new post</span></Link></li>
                                                <li><Link class="dropdown-item" to="blog-text-reveal.html">Blog text reveal</Link></li>
                                                <li class="dropdown-divider"></li>
                                                <li><Link class="dropdown-item" to="blog-detail.html">Blog detail</Link></li>
                                                <li><Link class="dropdown-item" to="blog-detail-minimal.html">Blog detail minimal</Link></li>
                                            </ul>
                                        </li>
                                        {/* <!-- About menu --> */}
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item dropdown-toggle" to="#">Contact</Link>
                                            <ul class="dropdown-menu" data-bs-popper="none">
                                                <li> <Link class="dropdown-item" to="contact.html">contact</Link></li>
                                                <li> <Link class="dropdown-item" to="contact-2.html">contact 2</Link></li>
                                                <li> <Link class="dropdown-item" to="contact-3.html">Contact 3</Link></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item dropdown-toggle" to="#">Authentication</Link>
                                            <ul class="dropdown-menu" data-bs-popper="none">
                                                <li> <Link class="dropdown-item" to="sign-in.html">Sign in</Link> </li>
                                                <li> <Link class="dropdown-item" to="sign-up.html">Sign up</Link> </li>
                                                <li> <Link class="dropdown-item" to="password-recovery.html">Password recovery</Link> </li>
                                            </ul>
                                        </li>
                                        <li> <Link class="dropdown-item" to="pricing.html">pricing</Link></li>
                                        <li> <Link class="dropdown-item" to="faq.html">faq</Link></li>
                                        <li> <Link class="dropdown-item" to="404.html">Error 404</Link></li>
                                        <li> <Link class="dropdown-item" to="maintenance-mode.html">maintenance mode</Link></li>
                                        {/* <!-- Dropdown menu levels --> */}
                                        <li class="dropdown-divider"></li>
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item dropdown-toggle" to="#">Dropdown levels</Link>
                                            <ul class="dropdown-menu dropdown-menu-start" data-bs-popper="none">
                                                <li class="dropdown-submenu dropend">
                                                    <Link class="dropdown-item dropdown-toggle" to="#">Dropdown (end)</Link>
                                                    <ul class="dropdown-menu" data-bs-popper="none">
                                                        <li> <Link class="dropdown-item" to="#">Dropdown item</Link> </li>
                                                        <li> <Link class="dropdown-item" to="#">Dropdown item</Link> </li>
                                                    </ul>
                                                </li>
                                                <li> <Link class="dropdown-item" to="#">Dropdown item</Link> </li>
                                                <li class="dropdown-submenu dropstart">
                                                    <Link class="dropdown-item dropdown-toggle" to="#">Dropdown (start)</Link>
                                                    {/* <!-- dropdown menu open left --> */}
                                                    <ul class="dropdown-menu dropdown-menu-end" data-bs-popper="none">
                                                        <li> <Link class="dropdown-item" to="#">Dropdown item</Link> </li>
                                                        <li> <Link class="dropdown-item" to="#">Dropdown item</Link> </li>
                                                    </ul>
                                                </li>
                                                <li> <Link class="dropdown-item" to="#">Dropdown item</Link> </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>

                                {/* <!-- Menu item 3 Portfolio --> */}
                                <li class="nav-item dropdown dropdown-fullwidth">
                                    <Link class="nav-link dropdown-toggle" to="#" id="portfolioMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</Link>
                                    <div class="dropdown-menu" aria-labelledby="portfolioMenu">
                                        <div class="container">
                                            <div class="row g-0 flex-fill">
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled mb-4 mb-lg-0">
                                                        <li class="dropdown-header">Portfolio Classics</li>
                                                        <li> <Link class="dropdown-item" to="portfolio-classic-grid-3-col.html">Portfolio Classic grid 3 col</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-classic-grid-4-col.html">Portfolio Classic grid 4 col</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-classic-grid-6-col-fullwidth.html">Portfolio Classic grid 6 col</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-classic-masonry-3-col.html">Portfolio Classic Masonry 3 col</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-classic-masonry-4-col.html">Portfolio Classic Masonry 4 col</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-classic-masonry-6-col-fullwidth.html">Portfolio Classic Masonry 6 col</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-metro-grid-3-col.html">Portfolio Metro grid 3 col</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-metro-grid-4-col.html">Portfolio Metro grid 4 col</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-metro-grid-filter.html">Portfolio Metro grid filter</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled mb-4 mb-lg-0">
                                                        <li class="dropdown-header">Portfolio Advance</li>
                                                        <li> <Link class="dropdown-item" to="portfolio-overlap.html">Portfolio Overlap</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-overlap-reveal.html">Portfolio Overlap reveal</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-overlap-tilt.html">Portfolio Overlap Tilt</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-broken-grid.html">Portfolio broken grid</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-text-reveal.html">Portfolio text reveal <span class="badge bg-danger ms-2">Trendy</span></Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-full-width-dark.html">Portfolio full dark</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-grid-uneven.html">Portfolio Uneven</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-slider.html">Portfolio Slider</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled mb-4 mb-lg-0">
                                                        <li class="dropdown-header">Portfolio Detail pages</li>
                                                        <li> <Link class="dropdown-item" to="portfolio-detail-1.html">Portfolio detail 01</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-detail-2.html">Portfolio detail 02</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-case-study-1.html">Portfolio case study 01</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-case-study-2.html">Portfolio case study 02</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-case-study-3.html">Portfolio case study 03</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-case-study-4.html">Portfolio case study 04</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled">
                                                        <li class="dropdown-header">Portfolio hover & Element</li>
                                                        <li> <Link class="dropdown-item" to="portfolio-classic-grid-3-col.html">Hover: Classic</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-overlap-tilt.html">Hover: Tilt Animation</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-grayscale.html">Hover: Grayscale</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-color-overlay.html">Hover: Color Overlay</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-text-reveal.html">Hover: Text reveal</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-hover-inside.html">Hover: Card inside</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-appear.html">Scroll: Appear Animation</Link> </li>
                                                        <li> <Link class="dropdown-item" to="portfolio-overlap-reveal.html">Scroll: Reveal Animation</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-pagination.html">Pagination Styles</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!-- Menu item 4 Elements --> */}
                                <li class="nav-item dropdown dropdown-fullwidth">
                                    <Link class="nav-link dropdown-toggle" to="#" id="elementsMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Rental <span class="badge bg-danger">New</span></Link>
                                    <div class="dropdown-menu" aria-labelledby="elementsMenu">
                                        <div class="container">
                                            <div class="row g-0 flex-fill">
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled">
                                                        <li> <Link class="dropdown-item" to="elements-accordion.html"><i class="far fa-plus-square fa-fw me-2"></i>Accordion</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-action-box.html"><i class="fas fa-paperclip fa-fw me-2"></i>Action box</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-alerts.html"><i class="fas fa-exclamation-triangle fa-fw me-2"></i>Alerts</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-animation.html"><i class="fas fa-radiation-alt fa-fw me-2"></i>Animation</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-avatar.html"><i class="far fa-user fa-fw me-2"></i>Avatar</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-blockquote.html"><i class="fas fa-quote-right fa-fw me-2"></i>Blockquote</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-breadcrumbs.html"><i class="fas fa-angle-right fa-fw me-2"></i>breadcrumbs</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-buttons.html"><i class="fas fa-link fa-fw me-2"></i>Buttons</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-cards.html"><i class="far fa-window-restore fa-fw me-2"></i>Cards</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled">
                                                        <li> <Link class="dropdown-item" to="elements-clients.html"><i class="fas fa-user-tie fa-fw me-2"></i>Clients</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-counter.html"><i class="fas fa-sort-numeric-up-alt fa-fw me-2"></i>Counter</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-decorations.html"><i class="fas fa-spray-can fa-fw me-2"></i>decorations</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-divider.html"><i class="fas fa-cut fa-fw me-2"></i>Divider</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-feature-box.html"><i class="fas fa-newspaper fa-fw me-2"></i>Feature box</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-forms.html"><i class="far fa-clipboard fa-fw me-2"></i>Forms</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-forms-layout.html"><i class="fab fa-wpforms fa-fw me-2"></i>Forms layout</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-google-map.html"><i class="fas fa-map fa-fw me-2"></i>Google Map</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-list-group.html"><i class="fas fa-list fa-fw me-2"></i>list group</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled">
                                                        <li> <Link class="dropdown-item" to="elements-modals.html"><i class="fas fa-search-plus fa-fw me-2"></i>Modals popup</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-offcanvas.html"><i class="fas fa-bars fa-fw me-2"></i>Offcanvas menus</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-pagination.html"><i class="fas fa-ellipsis-h fa-fw me-2"></i>Pagination</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-preloader.html"><i class="fas fa-spinner fa-spin fa-fw me-2"></i>Pre loaders</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-process.html"><i class="fas fa-tasks fa-fw me-2"></i>Process (Work Step)</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-progress.html"><i class="fas fa-grip-lines fa-fw me-2"></i>progress bar</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-social-icons.html"><i class="fas fa-share-alt fa-fw me-2"></i>social icons</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-tables.html"><i class="fas fa-table fa-fw me-2"></i>Tables</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-tabs.html"><i class="fas fa-toggle-on fa-fw me-2"></i>Tabs and Navs</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled">
                                                        <li> <Link class="dropdown-item" to="elements-typing-headlines.html"><i class="fas fa-i-cursor blink-animation fa-fw me-2"></i>Typing headlines</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-typography.html"><i class="fas fa-font fa-fw me-2"></i>Typography</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-video.html"><i class="fas fa-file-video fa-fw me-2"></i>Video</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-video-background.html"><i class="fas fa-photo-video fa-fw me-2"></i>Video background</Link> </li>
                                                        <li class="dropdown-divider"></li>
                                                        <li class="dropdown-header mb-0">Plugins</li>
                                                        <li> <Link class="dropdown-item" to="elements-glightbox.html"><i class="fas fa-expand fa-fw me-2"></i>GLightbox popup</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-isotope.html"><i class="fas fa-sliders-h fa-fw me-2"></i>Isotope (Filters & Masonry)</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-tiny-slider.html"><i class="far fa-arrow-alt-circle-right fa-fw me-2"></i>Tiny slider</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-12 mt-3">
                                                    <div class="bg-dark p-5 pb-4 w-100 pattern-overlay-1">
                                                        <div class="row d-md-flex justify-content-center">
                                                            <h5 class="col-md-4 text-white mb-4">Discover Folio - It's easier than you might think.</h5>
                                                            <p class="col-md-3 text-white">Start right away to create your dream website hassle free. Grab yours now.</p>
                                                            <div class="col-md-3 text-md-end">
                                                                <Link class="btn btn-line btn-primary" target="_blank" to="https://themes.getbootstrap.com/store/webestica/">Purchase Folio!</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>

                                {/* <!-- Menu item 5 Docs--> */}
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="#" id="docMenu" data-bs-toggle="dropdown" data-bs-display="static" aria-haspopup="true" aria-expanded="false">Help</Link>
                                    <ul class="dropdown-menu pb-0 dropdown-menu-sm-end" data-bs-popper="none" aria-labelledby="docMenu">
                                        <li>
                                            <Link class="dropdown-item ps-4" to="https://support.webestica.com/" target="_blank">
                                                <div class="d-flex">
                                                    <i class="display-8 mt-n1 me-3 text-primary fa-fw bi bi-chat-right-text"></i>
                                                    <div>
                                                        <h6 class="my-0">Support<i class="fas fa-external-link-square-alt text-body ms-2"></i></h6>
                                                        <p class="small text-body d-none d-md-block mb-0">Contact us through our Support portal</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li class="dropdown-divider"></li>
                                        <li>
                                            <div class="dropdown-item ps-4">
                                                <div class="d-flex mb-2">
                                                    <i class="display-8 mt-n1 me-3 text-primary fa-fw bi bi-book-half"></i>
                                                    <div>
                                                        <h6 class="my-0">Folio Doc</h6>
                                                        <p class="small text-body d-none d-md-block">General instruction about theme and support</p>
                                                        <Link class="dropdown-item px-0" to="docs/index.html">Introduction</Link>
                                                        <Link class="dropdown-item px-0" to="docs/index.html">Directory structure</Link>
                                                        <Link class="dropdown-item px-0" to="docs/gulp.html">Gulp</Link>
                                                        <Link class="dropdown-item px-0" to="docs/customization.html">Customization</Link>
                                                        <Link class="dropdown-item px-0" to="docs/color-scheme.html">Color Scheme</Link>
                                                        <Link class="dropdown-item px-0" to="docs/changelog.html">changelog</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li class="bg-light pt-3">
                                            <Link class="dropdown-item ps-4" to="https://getbootstrap.com/docs" target="_blank">
                                                <div class="d-flex">
                                                    <i class="display-8 mt-n2 me-3 text-primary fa-fw bi bi-bootstrap"></i>
                                                    <div>
                                                        <h6 class="my-0">Bootstrap Doc<i class="fas fa-external-link-square-alt text-body ms-2"></i></h6>
                                                        <p class="small text-body d-none d-md-block">Checkout Bootstrap official Doc</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </li>

                                {/* <!-- Menu item 6 link--> */}
                                <li class="nav-item">	<Link class="nav-link" to="contact.html">Contact</Link></li>
                            </ul>
                        </div>
                        {/* <!-- Main Menu END --> */}

                        {/* <!-- Nav right START --> */}
                        <div class="nav flex-nowrap align-items-center">
                            {/* <!-- Nav Search Opener--> */}
                            <div class="nav-item">
                                <Link class="nav-link ms-2" data-bs-toggle="collapse" to="#" data-bs-target="#search-open">
                                    <i class="bi bi-search display-9 "> </i>
                                </Link>
                            </div>
                            {/* <!-- Nav Button --> */}
                            <div class="nav-item d-none d-xl-block">
                                <Link to="#" class="btn btn-sm btn-primary mb-0 mx-2">Get Quote!</Link>
                            </div>
                            {/* <!-- Nav side Opener --> */}
                            <div class="nav-item">
                                <Link class="nav-link pe-0" data-bs-toggle="offcanvas" to="#offcanvasEnd" role="button" aria-controls="offcanvasEnd">
                                    <i class="bi bi-text-right rtl-flip display-8" data-bs-target="#offcanvasEnd"></i>
                                </Link>
                            </div>
                        </div>
                        {/* <!-- Nav right END --> */}
                    </div>
                </nav>
                {/* <!-- Logo Nav END --> */}
            </header>
            {/* <!-- =======================Header END====================== --> */}
            {/* <!-- **************** MAIN CONTENT START **************** --> */}
            <main>
                {/* <!-- ======================= Main Banner START ====================== --> */}
                <section class="position-relative bg-dark p-0">
                    {/* <!-- Social sites link left --> */}
                    <div class="position-absolute top-50 start-0 translate-middle z-index-9 ms-4 d-none d-xxl-block">
                        <div class="list-group-inline list-unstyled rotate-270">
                            <Link to="#" class="list-group-item text-white bg-transparent mt-4">Facebook</Link>
                            <Link to="#" class="list-group-item text-white bg-transparent mt-4">Twitter</Link>
                            <Link to="#" class="list-group-item text-white bg-transparent mt-4">Dribble</Link>
                        </div>
                    </div>
                    {/* <!-- Scoll Down --> */}
                    <div class="scroll-down scroll-down-light m-5 d-none d-md-block">
                        <div class="scroll-line"></div>
                        <span class="scoll-text">Scroll Down</span>
                    </div>
                    {/* taken hero from here */}
                    <Hero />
                </section>
                {/* <!-- ======================== Main Banner END ===================== --> */}
                {/* <!-- =======================Service START==================== --> */}
                <section class="position-relative">
                    {/* <!-- Shape Decoration START --> */}
                    {/* <!-- Shape 1 --> */}
                    <figure class="position-absolute end-0 top-0 m-4 d-none d-lg-block">
                        <svg width="148" height="140" viewbox="0 0 148 140" xmlns="http://www.w3.org/2000/svg">
                            <path class="svg-custom-border-dark" d="m9.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <circle class="svg-custom-border-dark" cx="25.86" cy="131.41" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="44.71" cy="131.41" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="63.57" cy="131.41" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="82.43" cy="131.41" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="101.29" cy="131.41" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="120.14" cy="131.41" r="2.95"></circle>
                            <path class="svg-custom-border-dark" d="m141.95 131.41c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m9.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <circle class="svg-custom-border-dark" cx="25.86" cy="113.61" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="44.71" cy="113.61" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="63.57" cy="113.61" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="82.43" cy="113.61" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="101.29" cy="113.61" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="120.14" cy="113.61" r="2.95"></circle>
                            <path class="svg-custom-border-dark" d="m141.95 113.61c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m9.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <circle class="svg-custom-border-dark" cx="25.86" cy="95.81" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="44.71" cy="95.81" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="63.57" cy="95.81" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="82.43" cy="95.81" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="101.29" cy="95.81" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="120.14" cy="95.81" r="2.95"></circle>
                            <path class="svg-custom-border-dark" d="m141.95 95.81c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m9.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m28.8 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m47.66 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m66.52 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m85.37 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0.01 2.95 1.33 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m104.23 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m123.09 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m141.95 78.01c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m9.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m28.8 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m47.66 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m66.52 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m85.37 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m104.23 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m123.09 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m141.95 60.22c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m9.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m28.8 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m47.66 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m66.52 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m85.37 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.64 0 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m104.23 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m123.09 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m141.95 42.42c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m9.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <circle class="svg-custom-border-dark" cx="25.86" cy="24.62" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="44.71" cy="24.62" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="63.57" cy="24.62" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="82.43" cy="24.62" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="101.29" cy="24.62" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="120.14" cy="24.62" r="2.95"></circle>
                            <path class="svg-custom-border-dark" d="m141.95 24.62c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95 2.95 1.32 2.95 2.95z"></path>
                            <path class="svg-custom-border-dark" d="m9.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95c0-1.62 1.32-2.94 2.95-2.94s2.95 1.32 2.95 2.94z"></path>
                            <circle class="svg-custom-border-dark" cx="25.86" cy="6.82" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="44.71" cy="6.82" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="63.57" cy="6.82" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="82.43" cy="6.82" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="101.29" cy="6.82" r="2.95"></circle>
                            <circle class="svg-custom-border-dark" cx="120.14" cy="6.82" r="2.95"></circle>
                            <path class="svg-custom-border-dark" d="m141.95 6.82c0 1.63-1.32 2.95-2.95 2.95s-2.95-1.32-2.95-2.95 1.32-2.95 2.95-2.95c1.63 0.01 2.95 1.33 2.95 2.95z"></path>
                        </svg>
                    </figure>
                    {/* <!-- Shape 2 --> */}
                    <figure class="position-absolute start-0 bottom-0 mb-6 ms-6 d-none d-lg-block">
                        <svg width="214" height="172" viewbox="0 0 358 287" xmlns="http://www.w3.org/2000/svg">
                            <ellipse class="fill-primary" transform="matrix(.9961 -.0884 .0884 .9961 -9.9064 21.268)" cx="120" cy="110" rx="50" ry="50"></ellipse>
                            <defs> <ellipse id="round-bg" transform="matrix(.7071 -.7071 .7071 .7071 -91.988 129.49)" cx="110.31" cy="175.78" rx="109" ry="109"></ellipse> </defs>
                            <clippath id="lines"></clippath>
                            <g clip-path="url(#lines)">
                                <path class="fill-dark" d="m-64.69 132.76c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.29 10.17-4.89 15.48-1.42z"></path>
                            </g>
                            <g clip-path="url(#lines)">
                                <path class="fill-dark" d="m-79.96 156.09c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.88-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.76-2.28 10.17-4.88 15.47-1.41z"></path>
                            </g>
                            <g clip-path="url(#lines)">
                                <path class="fill-dark" d="m-49.1 108.94c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.76-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.29 10.18-4.9 15.48-1.42z"></path>
                            </g>
                            <g clip-path="url(#lines)">
                                <path class="fill-dark" d="m-32.99 84.32c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.88-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.76-2.28 10.17-4.88 15.47-1.41z"></path>
                            </g>
                            <g clip-path="url(#lines)">
                                <path class="fill-dark" d="m-1.61 36.38c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.88-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.45-5.08-9.44-4.89-14.73 0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.76-2.3 10.16-4.9 15.47-1.43z"></path>
                            </g>
                            <g clip-path="url(#lines)">
                                <path class="fill-dark" d="m-16.88 59.71c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.27 10.17-4.88 15.48-1.4z"></path>
                            </g>
                            <g clip-path="url(#lines)">
                                <path class="fill-dark" d="m13.98 12.56c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.76-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48-3.53-2.31-7.36-0.47-11.79 1.67-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.29 10.17-4.9 15.48-1.42z"></path>
                            </g>
                            <g clip-path="url(#lines)">
                                <path class="fill-dark" d="m30.09-12.06c5.31 3.47 5.08 9.47 4.89 14.76-0.18 4.92-0.34 9.16 3.19 11.48 3.53 2.31 7.36 0.47 11.79-1.67 4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43s5.08 9.47 4.89 14.76c-0.18 4.92-0.34 9.16 3.19 11.47s7.36 0.47 11.79-1.67c4.77-2.3 10.17-4.9 15.48-1.43 5.3 3.47 5.08 9.47 4.88 14.75-0.18 4.92-0.34 9.16 3.19 11.47l-2.06 3.14c-5.3-3.47-5.08-9.47-4.88-14.76 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43-5.3-3.47-5.08-9.47-4.88-14.75 0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.47s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43s-5.08-9.47-4.89-14.76c0.18-4.92 0.34-9.16-3.19-11.48s-7.36-0.47-11.79 1.67c-4.77 2.3-10.17 4.9-15.48 1.43l2.06-3.14c3.53 2.31 7.36 0.47 11.8-1.67 4.77-2.28 10.17-4.88 15.48-1.41z"></path>
                            </g>
                        </svg>
                    </figure>
                    {/* <!-- Shape Decoration END --> */}

                    <div class="container position-relative">
                        <div class="row">
                            <div class="col-lg-8 mb-5">
                                <h2 class="display-5">Redefine your business strategy</h2>
                                <p>We are an insight and behavior-driven creative marketing agency. A Full Service Digital Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy</p>
                            </div>
                        </div>
                        <div class="row d-flex">
                            <div className="col-xxl-5 col-xl-5 col-lg-5 col-12 pe-5 pb-5">
                                <ServiceCard/>
                            </div>
                            <div className="col-xxl-7 col-xl-7 col-lg-7 col-12 d-flex">
                                {/* <!-- Service Item 1--> */}
                                <div class="col-12 col-lg-4 mb-5 mb-lg-0">
                                    <h2 class="display-1 text-dark-stroke text-hover-fill text-primary-shadow">W</h2>
                                    <h5 class="mb-4">Web Development</h5>
                                    <div class="list-group list-group-borderless list-unstyled">
                                        <Link to="#" class="list-group-item bg-transparent">Web Development</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Front-end Development</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Back-end Development</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Apps & Game</Link>
                                        <Link to="#" class="list-group-item bg-transparent">E-commerce</Link>
                                    </div>
                                </div>
                                {/* <!-- Service Item 2--> */}
                                <div class="col-12 col-lg-4 mb-5 mb-lg-0">
                                    <h2 class="display-1 text-dark-stroke text-hover-fill text-primary-shadow">E</h2>
                                    <h5 class="mb-4">E-commerce & Graphics</h5>
                                    <div class="list-group list-group-borderless list-unstyled">
                                        <Link to="#" class="list-group-item bg-transparent">E-Commerce platforms</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Apps & mobile</Link>
                                        <Link to="#" class="list-group-item bg-transparent">User Experience</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Motion Design</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Interface Design</Link>
                                    </div>
                                </div>
                                {/* <!-- Service Item 3--> */}
                                <div class="col-12 col-lg-4 mb-5 mb-lg-0">
                                    <h2 class="display-1 text-dark-stroke text-hover-fill text-primary-shadow">B</h2>
                                    <h5 class="mb-4">Branding</h5>
                                    <div class="list-group list-group-borderless list-unstyled">
                                        <Link to="#" class="list-group-item bg-transparent">Brand Identity</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Art Direction</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Visual Design</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Illustration & Iconography</Link>
                                        <Link to="#" class="list-group-item bg-transparent">Content / Video</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- row END --> */}

                        <div class="row d-flex justify-content-end">
                            <div class="col-lg-9">
                                <Link to="#" class="btn btn-line text-dark mt-4">View all services</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- =======================Service END======================
             --> */}
            </main>


        </>
    )
}

export default Home;