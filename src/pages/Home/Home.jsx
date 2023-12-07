import React from 'react';
import {Link} from 'react-router-dom';
import Hero from '../../components/Hero_Section/Hero';
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
                        <Link to="#" class="font-heading text-white text-primary-hover d-block mb-3">hello@folio.com</Link>
                        <Link to="#" class="font-heading text-white text-primary-hover">+(251) 854-6308</Link>
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

            {/* <!-- =======================
Header START --> */}
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
                        <Link class="navbar-brand" to="index.html">
                            {/* <!-- Logo SVG Code --> */}
                            <svg class="navbar-brand-item" viewbox="0 0 189.37 60.812" xmlns="http://www.w3.org/2000/svg">
                                <path class="fill-white" transform="translate(-5874.9 -436.84)" d="m5884 496.54-0.32-24.723 20.69 0.011v-7.983l-20.69-0.7v-15.623l22.25-0.267v-7.983h-31.02v57.268h9.09zm58.26-1.284a18.686 18.686 0 0 0 7.34-6.664 19.248 19.248 0 0 0 0-19.662 18.735 18.735 0 0 0-7.34-6.647 23.765 23.765 0 0 0-20.79 0 18.667 18.667 0 0 0-7.34 6.647 19.187 19.187 0 0 0 0 19.662 18.618 18.618 0 0 0 7.34 6.664 23.765 23.765 0 0 0 20.79 0zm-16.21-6.491a10.774 10.774 0 0 1-4.1-4.061 12.452 12.452 0 0 1 0-11.887 10.812 10.812 0 0 1 4.1-4.043 12.345 12.345 0 0 1 11.64 0 10.673 10.673 0 0 1 4.1 4.043 12.635 12.635 0 0 1 0 11.9 10.673 10.673 0 0 1-4.1 4.043 12.345 12.345 0 0 1-11.64 5e-3zm45.17 7.775v-59.7h-8.64v59.7h8.64zm22 0v-35.545h-8.64v35.541h8.64zm-1.68-43.545a5.4 5.4 0 0 0 1.87-1.909 4.988 4.988 0 0 0 0.72-2.62 4.938 4.938 0 0 0-0.72-2.655 5.5 5.5 0 0 0-1.87-1.875 5.219 5.219 0 0 0-5.26 0 5.559 5.559 0 0 0-1.89 1.875 5.021 5.021 0 0 0-0.71 2.655 5.073 5.073 0 0 0 0.71 2.62 5.45 5.45 0 0 0 1.89 1.909 5.213 5.213 0 0 0 5.26 0zm42.97 42.257a18.686 18.686 0 0 0 7.34-6.664 19.187 19.187 0 0 0 0-19.662 18.735 18.735 0 0 0-7.34-6.647 23.765 23.765 0 0 0-20.79 0 18.667 18.667 0 0 0-7.34 6.647 19.187 19.187 0 0 0 0 19.662 18.618 18.618 0 0 0 7.34 6.664 23.765 23.765 0 0 0 20.79 4e-3zm-16.21-6.491a10.844 10.844 0 0 1-4.1-4.061 12.452 12.452 0 0 1 0-11.887 10.883 10.883 0 0 1 4.1-4.043 12.345 12.345 0 0 1 11.64 0 10.673 10.673 0 0 1 4.1 4.043 12.635 12.635 0 0 1 0 11.9 10.673 10.673 0 0 1-4.1 4.043 12.345 12.345 0 0 1-11.64 9e-3z"></path>
                                <path class="fill-primary" transform="translate(-5874.9 -436.84)" d="m6061.5 496.89a5.532 5.532 0 0 0 2.05-2.083 5.976 5.976 0 0 0 0-5.761 5.547 5.547 0 0 0-2.05-2.083 5.655 5.655 0 0 0-2.9-0.763 5.761 5.761 0 0 0-2.9 0.763 5.734 5.734 0 0 0-0.02 9.927 5.754 5.754 0 0 0 2.92 0.763 5.655 5.655 0 0 0 2.9-0.763z"></path>
                            </svg>
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
                                    <Link class="nav-link dropdown-toggle" to="#" id="demosMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Demos</Link>
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
                                    <Link class="nav-link dropdown-toggle" to="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</Link>
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
                                    <Link class="nav-link dropdown-toggle" to="#" id="portfolioMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Portfolio</Link>
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
                                    <Link class="nav-link dropdown-toggle" to="#" id="elementsMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Elements</Link>
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
            {/* <!-- =======================
Header END --> */}

            {/* <!-- **************** MAIN CONTENT START **************** --> */}
            <main>

                {/* <!-- =======================
Main Banner START --> */}
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
                    <Hero/>
                </section>
                {/* <!-- ======================= Main Banner END --> */}

                {/* <!-- =======================
Service START --> */}
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
                            <ellipse class="fill-primary" transform="matrix(.9961 -.0884 .0884 .9961 -9.9064 21.268)" cx="235.25" cy="122.52" rx="120.04" ry="120.04"></ellipse>
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
                                <h2 class="display-5">Redefine your marketing strategy</h2>
                                <p>We are an insight and behavior-driven creative marketing agency. A Full Service Digital Creative Agency Specializing in: Video Production, Web Design, Branding, Brand Strategy</p>
                            </div>
                        </div>
                        <div class="row d-flex justify-content-lg-end">
                            {/* <!-- Service Item 1--> */}
                            <div class="col-sm-6 col-lg-3 mb-5 mb-lg-0">
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
                            {/* <!-- Service Item 2--> */}
                            <div class="col-sm-6 col-lg-3 mb-5 mb-lg-0">
                                <h2 class="display-1 text-dark-stroke text-hover-fill text-primary-shadow">G</h2>
                                <h5 class="mb-4">Graphic Design</h5>
                                <div class="list-group list-group-borderless list-unstyled">
                                    <Link to="#" class="list-group-item bg-transparent">Creative Concepting</Link>
                                    <Link to="#" class="list-group-item bg-transparent">Apps & mobile</Link>
                                    <Link to="#" class="list-group-item bg-transparent">User Experience</Link>
                                    <Link to="#" class="list-group-item bg-transparent">Motion Design</Link>
                                    <Link to="#" class="list-group-item bg-transparent">Interface Design</Link>
                                </div>
                            </div>
                            {/* <!-- Service Item 3--> */}
                            <div class="col-sm-6 col-lg-3 mb-5 mb-lg-0">
                                <h2 class="display-1 text-dark-stroke text-hover-fill text-primary-shadow">D</h2>
                                <h5 class="mb-4">Development</h5>
                                <div class="list-group list-group-borderless list-unstyled">
                                    <Link to="#" class="list-group-item bg-transparent">Back-end Development</Link>
                                    <Link to="#" class="list-group-item bg-transparent">Front-end Development</Link>
                                    <Link to="#" class="list-group-item bg-transparent">Web Development</Link>
                                    <Link to="#" class="list-group-item bg-transparent">Apps & Game</Link>
                                    <Link to="#" class="list-group-item bg-transparent">E-commerce</Link>
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
                {/* <!-- =======================
Service END --> */}

                {/* <!-- =======================
Features START --> */}
                <section class="bg-dark position-relative pattern-overlay-5 mx-xl-3 mx-xxxl-9 rounded">
                    <div class="container">
                        <div class="row">
                            {/* <!-- Title --> */}
                            <div class="col-md-5 mb-5">
                                <h2 class="display-5 text-white-stroke">Our every day business</h2>
                                <p>Building a strong brand. Distinctive, recognizable and consistent. Effective communication campaigns that activate your target group.</p>
                            </div>
                            <div class="col-md-7 mb-5">
                                <div class="row">
                                    {/* <!-- Feature item --> */}
                                    <div class="col-sm-6 mb-5">
                                        <i class="display-6 text-primary bi bi-laptop"></i>
                                        <h5 class="text-white my-3">Digital Development</h5>
                                        <p class="text-secondary">Smart use of data & technology for the automation of your business.</p>
                                    </div>
                                    {/* <!-- Feature item --> */}
                                    <div class="col-sm-6 mb-5">
                                        <i class="display-6 text-primary bi bi-bar-chart-line"></i>
                                        <h5 class="text-white my-3">Online Marketing</h5>
                                        <p class="text-secondary">The right mix of resources for achieving your online goals.</p>
                                    </div>
                                    {/* <!-- Feature item --> */}
                                    <div class="col-sm-6 mb-5 mb-sm-0">
                                        <i class="display-6 text-primary bi bi-shop"></i>
                                        <h5 class="text-white my-3">E-Commerce Solution</h5>
                                        <p class="text-secondary m-0">A scalable web shop for online sales of your product or service.</p>
                                    </div>
                                    {/* <!-- Feature item --> */}
                                    <div class="col-sm-6">
                                        <i class="display-6 text-primary bi bi-envelope-open"></i>
                                        <h5 class="text-white my-3">E-mail Campaigns</h5>
                                        <p class="text-secondary m-0">Effective communication campaigns that activate your target group.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- row END --> */}
                    </div>
                </section>
                {/* <!-- =======================
Features END --> */}

                {/* <!-- =======================
Testimonials START --> */}
                <section class="p-0">
                    <div class="container">
                        <div class="row position-relative">
                            {/* <!-- Title --> */}
                            <div class="col-sm-8 mb-3 mx-auto text-center pt-7">
                                <h2 class="display-5 mb-5 text-dark-stroke">Testimonials</h2>
                            </div>
                            {/* <!-- Testimonials --> */}
                            <div class="col-md-10 mx-auto text-center pb-7">
                                <div class="tiny-slider arrow-md-none arrow-bordered arrow-large arrow-round">
                                    <div class="tiny-slider-inner" data-gutter="0" data-edge="50" data-autoplay="false" data-arrow="true" data-dots="false" data-items="1">

                                        {/* <!-- Testimonial item --> */}
                                        <div class="item px-3 px-md-6">
                                            <div class="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i class="fas fa-quote-left"></i></div>
                                            <div class="avatar"><img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" /></div>
                                            <p class="lead">The good gathering doesn't bearing day Stars over Open behold May male tree replenish don't blessed beast days earth fifth let multiply and he every blessed to upon behold grass divided brought was that dry I Were image waters own bring light subdue Meat</p>
                                            <h6 class="mb-0 mt-3">Adam Ross</h6>
                                            <span class="small">Software Developer</span>
                                        </div>

                                        {/* <!-- Testimonial item --> */}
                                        <div class="item px-3 px-md-6">
                                            <div class="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i class="fas fa-quote-left"></i></div>
                                            <div class="avatar"><img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" /></div>
                                            <p class="lead">Two before narrow not relied how except moment myself Dejection assurance mrs led certainly So gate at no only none open Betrayed at properly it of graceful on Dinner abroad am depart ye turned hearts as me wished Therefore allowance.</p>
                                            <h6 class="mb-0 mt-3">Allen Smith</h6>
                                            <span class="small">Founder and CEO</span>
                                        </div>

                                        {/* <!-- Testimonial item --> */}
                                        <div class="item px-3 px-md-6">
                                            <div class="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i class="fas fa-quote-left"></i></div>
                                            <div class="avatar"><img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" /></div>
                                            <p class="lead">How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask style Me mean able my by in they Extremity now strangers contained breakfast him discourse additions.</p>
                                            <h6 class="mb-0 mt-3">Jessica Mores</h6>
                                            <span class="small">Human Resource</span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- row END --> */}
                    </div>
                </section>
                {/* <!-- =======================
Testimonials END --> */}

                {/* <!-- =======================
Portfolio START --> */}
                <section class="pt-4">
                    <div class="container">
                        {/* <!-- Title --> */}
                        <div class="row d-flex justify-content-between align-items-center">
                            <div class="col-sm-8 mb-3">
                                <h2 class="display-5 mb-0 mb-sm-4 text-dark-stroke">Our Portfolio</h2>
                            </div>
                            <div class="col-sm-4 mb-4 text-start text-sm-end">
                                <Link to="#" class="btn btn-line text-dark mt-3">View our work</Link>
                            </div>
                        </div>
                        {/* <!-- Portfolio items --> */}
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="tiny-slider dots-bordered">
                                    <div class="tiny-slider-inner" data-arrow="false" data-dots="true" data-items-xl="3" data-items-lg="3" data-items-md="3" data-items-sm="2" data-items-xs="1">

                                        {/* <!-- Card item START --> */}
                                        <div class="item">
                                            <Link to="#" class="card card-metro">
                                                {/* <!-- Card Image --> */}
                                                <div class="card-image">
                                                    <img src="assets/images/portfolio/01.jpg" alt="" />
                                                </div>
                                                {/* <!-- Card Overlay --> */}
                                                <div class="card-img-overlay d-flex flex-column">
                                                    <img class="w-40" src="assets/images/clients/light/01.svg" alt="" />
                                                    <div class="mt-auto card-text">
                                                        <h5 class="text-white">The missing link in e-Mobility</h5>
                                                        <p class="small text-white mb-0 text-truncate">What hasn’t been a great fit in e-mobility until now.</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <!-- Card item END --> */}

                                        {/* <!-- Card item START --> */}
                                        <div class="item">
                                            <Link to="#" class="card card-metro">
                                                {/* <!-- Card Image --> */}
                                                <div class="card-image">
                                                    <img src="assets/images/portfolio/02.jpg" alt="" />
                                                </div>
                                                {/* <!-- Card Overlay --> */}
                                                <div class="card-img-overlay d-flex flex-column">
                                                    <img class="w-40" src="assets/images/clients/light/02.svg" alt="" />
                                                    <div class="mt-auto card-text">
                                                        <h5 class="text-white">Trumer brewed happiness</h5>
                                                        <p class="small text-white mb-0 text-truncate">Private brewery for excellent beer</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <!-- Card item END --> */}

                                        {/* <!-- Card item START --> */}
                                        <div class="item">
                                            <Link to="#" class="card card-metro">
                                                {/* <!-- Card Image --> */}
                                                <div class="card-image">
                                                    <img src="assets/images/portfolio/03.jpg" alt="" />
                                                </div>
                                                {/* <!-- Card Overlay --> */}
                                                <div class="card-img-overlay d-flex flex-column">
                                                    <img class="w-40" src="assets/images/clients/light/03.svg" alt="" />
                                                    <div class="mt-auto card-text">
                                                        <h5 class="text-white">Enticing like the ocean</h5>
                                                        <p class="small text-white mb-0 text-truncate">Viktoria Louise is the blossoming fashion label of Vicky Heiler</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <!-- Card item END --> */}

                                        {/* <!-- Card item START --> */}
                                        <div class="item">
                                            <Link to="#" class="card card-metro">
                                                {/* <!-- Card Image --> */}
                                                <div class="card-image">
                                                    <img src="assets/images/portfolio/04.jpg" alt="" />
                                                </div>
                                                {/* <!-- Card Overlay --> */}
                                                <div class="card-img-overlay d-flex flex-column">
                                                    <img class="w-40" src="assets/images/clients/light/04.svg" alt="" />
                                                    <div class="mt-auto card-text">
                                                        <h5 class="text-white">Pure design branding</h5>
                                                        <p class="small text-white mb-0 text-truncate">Art collector and architect Axel</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <!-- Card item END --> */}

                                        {/* <!-- Card item START --> */}
                                        <div class="item">
                                            <Link to="#" class="card card-metro">
                                                {/* <!-- Card Image --> */}
                                                <div class="card-image">
                                                    <img src="assets/images/portfolio/05.jpg" alt="" />
                                                </div>
                                                {/* <!-- Card Overlay --> */}
                                                <div class="card-img-overlay d-flex flex-column">
                                                    <img class="w-40" src="assets/images/clients/light/05.svg" alt="" />
                                                    <div class="mt-auto card-text">
                                                        <h5 class="text-white">The missing link</h5>
                                                        <p class="small text-white mb-0 text-truncate">Small things that make difference</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <!-- Card item END --> */}

                                        {/* <!-- Card item START --> */}
                                        <div class="item">
                                            <Link to="#" class="card card-metro">
                                                {/* <!-- Card Image --> */}
                                                <div class="card-image">
                                                    <img src="assets/images/portfolio/06.jpg" alt="" />
                                                </div>
                                                {/* <!-- Card Overlay --> */}
                                                <div class="card-img-overlay d-flex flex-column">
                                                    <img class="w-40" src="assets/images/clients/light/06.svg" alt="" />
                                                    <div class="mt-auto card-text">
                                                        <h5 class="text-white">The blossoming fashion label </h5>
                                                        <p class="small text-white mb-0 text-truncate">These were the attributes that moodley had to convey.</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <!-- Card item END --> */}

                                        {/* <!-- Card item START --> */}
                                        <div class="item">
                                            <Link to="#" class="card card-metro">
                                                {/* <!-- Card Image --> */}
                                                <div class="card-image">
                                                    <img src="assets/images/portfolio/07.jpg" alt="" />
                                                </div>
                                                {/* <!-- Card Overlay --> */}
                                                <div class="card-img-overlay d-flex flex-column">
                                                    <img class="w-40" src="assets/images/clients/light/07.svg" alt="" />
                                                    <div class="mt-auto card-text">
                                                        <h5 class="text-white">Life's hard in the mountains</h5>
                                                        <p class="small text-white mb-0 text-truncate">Ten wineries with strong personalities, individual stories and multi-faceted wines</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <!-- Card item END --> */}

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- row END --> */}
                    </div>
                </section>
                {/* <!-- =======================
Portfolio END --> */}

                {/* <!-- =======================
Steps START --> */}
                <section>
                    <div class="container">
                        <div class="row">
                            {/* <!-- Step item --> */}
                            <div class="col-sm-12 col-md-4 mb-5">
                                <div class="text-start position-relative">
                                    <h2 class="display-4 mb-0 text-light-stroke text-light-shadow">01</h2>
                                    <h4 class="position-absolute start-0 top-0 mt-0 mt-sm-3 ps-6 d-block">Research and <br /> analytics</h4>
                                </div>
                                <div class="ps-6 pt-4 pt-sm-0">
                                    <p>We start with Research also to image Seas Void Great day sea don't creature land you're morning doesn't</p>
                                    <img class="rounded" src="assets/images/about/01.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Step item --> */}
                            <div class="col-sm-6 col-md-4 mb-5">
                                <div class="text-start position-relative">
                                    <h2 class="display-4 mb-0 text-light-stroke text-light-shadow">02</h2>
                                    <h4 class="position-absolute start-0 top-0 mt-0 mt-sm-3 ps-6 d-block">Design and <br /> Develop</h4>
                                </div>
                                <div class="ps-6 pt-4 pt-sm-0">
                                    <p>In this step our Them Subdue you life created day given light gathering Days very air Fruitful form he him </p>
                                    <img class="rounded" src="assets/images/about/02.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Step item --> */}
                            <div class="col-sm-6 col-md-4">
                                <div class="text-start position-relative">
                                    <h2 class="display-4 mb-0 text-light-stroke text-light-shadow">03</h2>
                                    <h4 class="position-absolute start-0 top-0 mt-0 mt-sm-3 ps-6 d-block">Testing and <br /> Launch</h4>
                                </div>
                                <div class="ps-6 pt-4 pt-sm-0">
                                    <p>Final step of success firmament of also it great have set behold land third he great years midst stars green</p>
                                    <img class="rounded" src="assets/images/about/03.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- =======================
Steps END --> */}

                {/* <!-- =======================
Clients START --> */}
                <section class="pt-0">
                    <div class="container">
                        <div class="row">
                            {/* <!-- Title --> */}
                            <div class="col-lg-4">
                                <h2 class="display-5 mb-3">Worked with...</h2>
                                <p>Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.</p>
                            </div>
                            {/* <!-- Clients logos --> */}
                            <div class="col-lg-8">
                                <div class="row">
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/01.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/02.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/03.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/04.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/05.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/06.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/07.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/08.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/09.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/10.svg" alt="" />
                                        </div>
                                    </div>
                                    {/* <!-- Logo item --> */}
                                    <div class="col-6 col-sm-4 col-lg-3">
                                        <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                            <img src="assets/images/clients/colored/11.svg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- row END --> */}
                    </div>
                </section>
                {/* <!-- =======================
Clients END --> */}

                {/* <!-- =======================
Action box START --> */}
                <section class="pt-0 position-relative">
                    {/* <!-- Shape Decoration START --> */}
                    <figure class="position-absolute start-0 bottom-0 ms-n6 mb-n4 z-index-9 d-none d-lg-block">
                        <svg width="285" height="82" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 285 82">
                            <rect class="fill-primary" x="22.67" y="16.58" width="262.22" height="65.42"></rect>
                            <path d="m9.63 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0.01-4.82-2.15-4.82-4.81s2.16-4.81 4.81-4.81c2.66 0 4.82 2.15 4.82 4.81z"></path>
                            <path d="m35.25 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                            <path d="m60.88 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.15 4.81 4.81z"></path>
                            <path d="m86.5 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.15 4.81 4.81z"></path>
                            <path d="m112.12 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                            <path d="m137.75 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.15 4.81 4.81z"></path>
                            <path d="m163.37 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                            <path d="m188.99 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                            <path d="m214.62 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.15 4.81 4.81z"></path>
                            <path d="m240.24 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                            <path d="m9.63 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0.01-4.82-2.15-4.82-4.81s2.16-4.81 4.81-4.81c2.66 0 4.82 2.16 4.82 4.81z"></path>
                            <path d="m35.25 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.16 4.81 4.81z"></path>
                            <path d="m60.88 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.16 4.81 4.81z"></path>
                            <path d="m86.5 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.16 4.81 4.81z"></path>
                            <path d="m112.12 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.16 4.81 4.81z"></path>
                            <path d="m137.75 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.16 4.81 4.81z"></path>
                            <circle cx="158.56" cy="30.38" r="4.81"></circle>
                            <circle cx="184.18" cy="30.38" r="4.81"></circle>
                            <circle cx="209.8" cy="30.38" r="4.81"></circle>
                            <circle cx="235.43" cy="30.38" r="4.81"></circle>
                            <path d="m9.63 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.82-2.16-4.82-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66-0.01 4.82 2.15 4.82 4.81z"></path>
                            <path d="m35.25 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66-0.01 4.81 2.15 4.81 4.81z"></path>
                            <path d="m60.88 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.65-0.01 4.81 2.15 4.81 4.81z"></path>
                            <path d="m86.5 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.65-0.01 4.81 2.15 4.81 4.81z"></path>
                            <path d="m112.12 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66-0.01 4.81 2.15 4.81 4.81z"></path>
                            <path d="m137.75 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.65-0.01 4.81 2.15 4.81 4.81z"></path>
                            <circle cx="158.56" cy="55.94" r="4.81"></circle>
                            <circle cx="184.18" cy="55.94" r="4.81"></circle>
                            <circle cx="209.8" cy="55.94" r="4.81"></circle>
                            <circle cx="235.43" cy="55.94" r="4.81"></circle>
                        </svg>
                    </figure>
                    {/* <!-- Shape Decoration END --> */}
                    <div class="container">
                        <div class="row g-0 d-flex align-items-center">
                            {/* <!-- Our Work Block --> */}
                            <div class="col-sm-6">
                                <div class="text-center bg-primary-multiply position-relative overflow-hidden px-3 py-6 h-100">
                                    <h2 class="mb-3 display-6"><Link class="text-white-stroke" to="#">Our Work</Link></h2>
                                    <Link class="btn btn-line text-white mb-0" to="#">View projects</Link>
                                    <img class="bg-primary-multiply position-absolute top-50 start-50 translate-middle z-index-n9" src="assets/images/about/05.jpg" alt="" />
                                </div>
                            </div>
                            {/* <!-- Project Block --> */}
                            <div class="col-sm-6">
                                <div class="text-center bg-dark px-3 py-6 h-100">
                                    <h2 class="mb-3 display-6 text-white">Have a Project?</h2>
                                    <Link class="btn btn-line text-white mb-0" to="#">Get a Quote</Link>
                                </div>
                            </div>
                        </div>
                        {/* <
                            !-- row END --> */}
                    </div>
                </section>
                {/* <!-- =======================
Action box END -->

                <!-- =======================
Newsletter START--> */}
                <section class="bg-dark position-relative bg-dark-overlay-4">
                    <div class="container">
                        <div class="row justify-content-between">
                            {/* <!-- Title --> */}
                            <div class="col-sm-5">
                                <h2 class="display-6 text-white-stroke">Latest stories in your inbox</h2>
                            </div>
                            {/* <!-- Content and input --> */}
                            <div class="col-sm-6">
                                <p class="mt-3">Building a strong brand. Distinctive, recognizable and consistent. Effective communication campaigns that activate your target group.</p>
                                <form>
                                    <div class="input-group">
                                        <input class="form-control bg-white border-0" type="text" name="Newsletter" placeholder="Enter your email address" />
                                        <button type="button" class="btn btn-line btn-primary mb-0">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        {/* <!-- row END --> */}
                    </div>
                </section>
                {/* <!-- =======================
Newsletter END--> */}

            </main>
            {/* <!-- **************** MAIN CONTENT END **************** -->

            <!-- =======================
Footer START --> */}
            <footer class="bg-dark footer-sticky pt-6">
                <div class="container">
                    <div class="row">

                        {/* <!-- Footer Widget 1 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h3 class="text-white">Folio<span class="text-primary">.</span></h3>
                            <p>Bootstrap based Creative Agency Portfolio Theme.</p>
                            <div class="d-flex me-auto">
                                <h6 class="mt-2 me-4 text-white">Follow on:</h6>
                                <div class="list-group-inline list-unstyled text-primary-hover">
                                    <Link to="#" class="list-group-item text-white bg-transparent">Fb</Link>
                                    <Link to="#" class="list-group-item text-white bg-transparent">Tw</Link>
                                    <Link to="#" class="list-group-item text-white bg-transparent">Dr</Link>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Footer Widget 2 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h5 class="mb-4 text-white">Our offices</h5>
                            {/* <!-- Address 1 --> */}
                            <p class="text-white mb-2">New York, USA (HQ)</p>
                            <address class="mb-0">750 Sing Sing Rd, Horseheads, NY, 14845</address>
                            <p>Call: <Link to="#" class="text-body"><u>469-537-2410</u> (Toll-free)</Link> </p>
                            {/* <!-- Address 2 --> */}
                            <p class="text-white mb-2">Mumbai, India</p>
                            <address class="mb-0">2492 Centennial NW, Acworth, GA, 30102</address>
                            <p>Call: <Link to="#" class="text-body"><u>(678) 324-1251</u> (Toll-free)</Link> </p>
                        </div>

                        {/* <!-- Footer Widget 3 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h5 class="mb-4 text-white">Useful links</h5>
                            <div class="row">
                                <div class="col-6">
                                    <ul class="nav flex-column text-primary-hover">
                                        <li class="nav-item"><Link class="nav-link pt-0" to="#">Our Work</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Develop</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Builder</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Market</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Support</Link></li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="nav flex-column text-primary-hover">
                                        <li class="nav-item"><Link class="nav-link pt-0" to="#">About</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Career <span class="badge bg-danger ms-2">2 Job</span></Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Work</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">News</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Footer Widget 4 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h5 class="mb-4 text-white">Stay in touch</h5>
                            <form>
                                <label class="form-label">Subscribe to our newsletter to receive exclusive offers.</label>
                                <div class="mb-3">
                                    <input class="form-control" type="email" placeholder="Enter email..." />
                                </div>
                                <div class="mb-3">
                                    <button type="submit" value="Subscribe" class="btn btn-primary mb-0">Join us</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* <!-- Divider --> */}
                    <div class="divider-light opacity-1"></div>

                    {/* <!-- Footer copyright START --> */}
                    <div class="row align-items-center justify-content-md-between py-4">
                        <div class="col-md-6">
                            <div class="text-center text-md-start">©2022 <Link to="https://www.webestica.com/" target="_blank">Webestica</Link>. All rights reserved
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                <li class="nav-item"><Link class="nav-link text-body text-primary-hover" to="#">Terms</Link></li>
                                <li class="nav-item"><Link class="nav-link text-body text-primary-hover" to="#">Privacy</Link></li>
                                <li class="nav-item"><Link class="nav-link text-body text-primary-hover pe-0" to="#">Cookies</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Footer copyright END --> */}
                </div>
            </footer>
            {/* <!-- =======================
Footer END --> */}

            {/* <!-- Custom cursor --> */}
            <div class="cursor-dot-outline"></div>
            <div class="cursor-dot"></div>

            {/* <!-- Back to top --> */}
            <div class="back-top">
                <div class="scroll-line"></div>
                <span class="scoll-text">Go Up</span>
            </div>

        </>
    )
}

export default Home;