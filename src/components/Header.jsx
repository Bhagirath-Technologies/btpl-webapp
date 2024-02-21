import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';

const Header = () => {
    const location = useLocation();
    const [isHome, setIsHome] = useState(location.pathname === '/');

    useEffect(() => {
        setIsHome(location.pathname === '/');
    }, [location.pathname]);

    const headerStyle = {
        background: isHome ? 'transparent' : '#1d3b6a',
        position: isHome ? 'absolute' : 'relative',
        // add other styles as needed
    };
    return (
        <>

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
                            <Link to="/" class="nav-link text-white-stroke d-block">Home</Link>
                            {/* <!-- Offcanvas dropdown START --> */}
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
                            <p class="small mt-2 mb-0">e.g. Websites , Web-Apps , Digital Marketing ,Graphic Designing services </p>
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
            <header style={headerStyle} class="navbar-transparent navbar-sticky-bg-dark navbar-sticky">

                {/* <!-- Navbar top START --> */}
                <div class="navbar-top d-none d-lg-block">
                    <div class="container">
                        <div class="d-md-flex justify-content-between align-items-center">
                            {/* <!-- Navbar top Left--> */}
                            <div class="d-flex align-items-center justify-content-center">
                                {/* <!-- Top info --> */}
                                <ul class="nav justify-content-center justify-content-md-start">
                                    <li class="nav-item me-3" data-bs-toggle="tooltip" data-bs-animation="false" data-bs-placement="bottom" title="Sunday CLOSED">
                                        <span class="text-white"><i class="far fa-clock me-2"></i>Visit time: Mon-Fri 9:00-06:00</span>
                                    </li>
                                    <li class="nav-item">
                                        <Link class="navbar-link text-white text-primary-hover" to="#"><i class="fas fa-headset me-2"></i>Call us now:+918982301484</Link>
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
                        <Link class="navbar-brand " to="/">
                            <img src='../assets/images/logos/Bhagirath Technologies Logo White.svg' alt="logo" width="110px" />
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
                                <li class="nav-item dropdown" >
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>

                                {/* <!-- Menu item 2 Pages --> */}
                                <li class="nav-item dropdown">
                                    <Link class="nav-link dropdown-toggle" to="#" id="pagesMenu" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">About Us</Link>
                                    <ul class="dropdown-menu" aria-labelledby="pagesMenu">
                                        {/* <!-- Blog menu --> */}
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item" to="#">Blog<span class="badge bg-success ms-2">2 new post</span></Link>
                                            {/* <ul class="dropdown-menu" data-bs-popper="none">
                                                <li><Link class="dropdown-item" to="blog-classic-3-col.html">Latest Blogs</Link></li>
                                                <li><Link class="dropdown-item" to="blog-minimal.html">Rental<span class="badge bg-success ms-2">2 new post</span></Link></li>
                                                <li class="dropdown-divider"></li>
                                                <li><Link class="dropdown-item" to="blog-detail.html">Blog detail</Link></li>
                                            </ul> */}
                                        </li>

                                        <li> <Link class="dropdown-item" to="service.html">Portfolio</Link></li>
                                        {/* <!-- Hero sections menu --> */}
                                        <li class="dropdown-submenu dropend">
                                            <Link class="dropdown-item" to="#">Pricing<span class="badge bg-danger ms-2">New</span></Link>
                                            <ul class="dropdown-menu" data-bs-popper="none">
                                                <li><Link class="dropdown-item" to="hero-01.html">Web Development</Link></li>
                                                <li><Link class="dropdown-item" to="hero-02.html">Online Marketing</Link></li>

                                            </ul>
                                        </li>
                                        <li> <Link class="dropdown-item" to="faq.html">faqs</Link></li>
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
                                                        <li class="dropdown-header">Web Development</li>
                                                        <li > <HashLink class="dropdown-item" to="/services/1">Website Design</HashLink> </li>
                                                        <li> <Link class="dropdown-item" to="/services/2">Web Applications</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/3">Custom Software Development</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/4">E-Commerce Application</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled mb-4 mb-lg-0">
                                                        <li class="dropdown-header">Graphics & E-commerce</li>
                                                        <li> <Link class="dropdown-item" to="/services/5">Logo Designing</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/6">Banner Poster Designs</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/7">Print Media<span class="badge bg-danger ms-2">Trendy</span></Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/8">Figma Designs</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled mb-4 mb-lg-0">
                                                        <li class="dropdown-header">Online Marketing</li>
                                                        <li> <Link class="dropdown-item" to="/services/9">Digital Marketing</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/10">Social Media Handeling</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/11">Google Ads Campaign</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/12">Content Writing</Link> </li>
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled">
                                                        <li class="dropdown-header">Branding</li>
                                                        <li> <Link class="dropdown-item" to="/services/13">Brand Identity</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/14">Art Direction</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/15">Visual Design</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/services/12">Illustration & Iconography</Link> </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="col-12 mt-3">
                                                    <div class="bg-dark p-5 pb-4 w-100 pattern-overlay-2">
                                                        <div class="row d-md-flex justify-content-center">
                                                            <h5 class="col-md-4 text-white mb-4">Discover with us - It's easier than you might think.</h5>
                                                            <p class="col-md-3 text-white">Start right away to create your dream website hassle free. Grab yours now.</p>
                                                            <div class="col-md-3 text-md-end">
                                                                <Link class="btn btn-line btn-primary btn-border" target="_blank" to="#">Reach Us</Link>
                                                            </div>
                                                        </div>
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
                                                        <li> <Link class="dropdown-item" to="/rental"><i class="fas fa-laptop fa-fw me-2"></i>MacBook</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/rental"><i class="fas fa-desktop fa-fw me-2"></i>Desktop</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/rental"><i class="fas fa-screwdriver fa-fw me-2"></i>Pendrive</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/rental"><i class="fas fa-keyboard fa-fw me-2"></i>Keyboard</Link> </li>
                                                        {/* <li> <Link class="dropdown-item" to="/rental"><i class="far fa-user fa-fw me-2"></i>Avatar</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/rental"><i class="fas fa-quote-right fa-fw me-2"></i>Blockquote</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/rental"><i class="fas fa-angle-right fa-fw me-2"></i>breadcrumbs</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/rental"><i class="fas fa-link fa-fw me-2"></i>Buttons</Link> </li>
                                                        <li> <Link class="dropdown-item" to="/rental"><i class="far fa-window-restore fa-fw me-2"></i>Cards</Link> </li> */}
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled">
                                                        <li> <Link class="dropdown-item" to="elements-clients.html"><i class="fas fa-laptop-code fa-fw me-2"></i>MacBook Air</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-counter.html"><i class="fas fa-hdd fa-fw me-2"></i>CPUs</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-decorations.html"><i class="fal fa-hdd fa-fw me-2"></i>HDD Desktop</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-divider.html"><i class="fas fa-mouse fa-fw me-2"></i>Mouse</Link> </li>
                                                        {/* <li> <Link class="dropdown-item" to="elements-feature-box.html"><i class="fas fa-newspaper fa-fw me-2"></i>Feature box</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-forms.html"><i class="far fa-clipboard fa-fw me-2"></i>Forms</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-forms-layout.html"><i class="fab fa-wpforms fa-fw me-2"></i>Forms layout</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-google-map.html"><i class="fas fa-map fa-fw me-2"></i>Google Map</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-list-group.html"><i class="fas fa-list fa-fw me-2"></i>list group</Link> </li> */}
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled">
                                                        <li> <Link class="dropdown-item" to="elements-modals.html"><i class="fas fa-laptop fa-fw me-2"></i>Hp Laptops</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-offcanvas.html"><i class="fas fa-camera fa-fw me-2"></i>Camera</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-pagination.html"><i class="far fa-hdd fa-fw me-2"></i>HDD Laptops</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-preloader.html"><i class="fas fa-spinner fa-spin fa-fw me-2"></i>IT Peripheral</Link> </li>
                                                        {/* <li> <Link class="dropdown-item" to="elements-process.html"><i class="fas fa-tasks fa-fw me-2"></i>Process (Work Step)</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-progress.html"><i class="fas fa-grip-lines fa-fw me-2"></i>progress bar</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-social-icons.html"><i class="fas fa-share-alt fa-fw me-2"></i>social icons</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-tables.html"><i class="fas fa-table fa-fw me-2"></i>Tables</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-tabs.html"><i class="fas fa-toggle-on fa-fw me-2"></i>Tabs and Navs</Link> </li> */}
                                                    </ul>
                                                </div>
                                                <div class="col-sm-6 col-lg-3">
                                                    <ul class="list-unstyled">
                                                        <li> <Link class="dropdown-item" to="elements-typing-headlines.html"><i class="fas fa-i-cursor blink-animation fa-fw me-2"></i>Laptops</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-typography.html"><i class="fas fa-video fa-fw me-2"></i>IP Cameras</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-video.html"><i class="fas fa-sim-card fa-fw me-2"></i>SSD</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-video-background.html"><i class="fas fa-print fa-fw me-2"></i>Printers</Link> </li>
                                                        {/* <li class="dropdown-divider"></li>
                                                        <li class="dropdown-header mb-0">Plugins</li>
                                                        <li> <Link class="dropdown-item" to="elements-glightbox.html"><i class="fas fa-expand fa-fw me-2"></i>GLightbox popup</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-isotope.html"><i class="fas fa-sliders-h fa-fw me-2"></i>Isotope (Filters & Masonry)</Link> </li>
                                                        <li> <Link class="dropdown-item" to="elements-tiny-slider.html"><i class="far fa-arrow-alt-circle-right fa-fw me-2"></i>Tiny slider</Link> </li> */}
                                                    </ul>
                                                </div>
                                                <div class="col-12 mt-3">
                                                    <div class="bg-dark p-5 pb-4 w-100 pattern-overlay-1">
                                                        <div class="row d-md-flex justify-content-center">
                                                            <h5 class="col-md-4 text-white mb-4">Discover with us - It's easier than you might think.</h5>
                                                            <p class="col-md-3 text-white">Start right away to create your dream website hassle free. Grab yours now.</p>
                                                            <div class="col-md-3 text-md-end">
                                                                <Link class="btn btn-line btn-primary btn-border" target="_blank" to="#">Reach Us</Link>
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
                                                        <h6 class="my-0">Our Doc</h6>
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
                                    <i class="bi bi-menu-button-wide rtl-flip display-8" data-bs-target="#offcanvasEnd"></i>
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
    )
}

export default Header;