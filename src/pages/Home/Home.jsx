import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero_Section/Hero';
import Clientportfolio from '../../components/Hero_Section/Clientportfolio';
import ServiceCard from '../../components/Hero_Section/ServiceCards';
import OurPortlio from '../../components/Hero_Section/Ourportfolio';
import serviceData from '../../data/ServiceCarddata';
// import OurPortfolioData from '../../data/OurPortfoliodata'; 

import './home.css';
const Home = () => {
    const [serviceDetail] = useState(serviceData);
    // const [portfolioDetail] = useState(OurPortfolioData);
    return (
        <>
            {/* <!-- Pre loader --> */}
            {/* <div class="preloader">
                <img class="preloader-item" src="assets/images/loader/02.gif" alt="Loading" />
            </div> */}
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
                    <figure class="position-absolute end-0 top-2 m-4 me-8 d-none d-lg-block dotted_circle1">
                        <img src='./assets/images/icons/circle.png' width="110px" alt='icon' />
                    </figure>
                    {/* similar */}
                    <figure class="position-absolute end-0 top-2 m-5half me-8point9 d-none d-lg-block dotted_circle2">
                        <img src='./assets/images/icons/circle.png' width="80px" alt='icon' />
                    </figure>
                    {/* <!-- Shape 3 --> */}
                    <figure class="position-absolute start-0 bottom-0 mb-6 ms-6 d-none d-lg-block z-index-9">
                        <svg width="214" height="172" viewbox="0 0 358 287" xmlns="http://www.w3.org/2000/svg">
                            <ellipse class="fill-primary" transform="matrix(.9961 -.0884 .0884 .9961 -9.9064 21.268)" cx="120" cy="110" rx="50" ry="50"></ellipse>
                            <defs> <ellipse id="round-bg" transform="matrix(.7071 -.7071 .7071 .7071 -91.988 129.49)" cx="110.31" cy="175.78" rx="109" ry="109"></ellipse> </defs>
                        </svg>
                    </figure>
                    {/* <!-- Shape 4 --> */}
                    <figure class="position-absolute start-0 bottom-0 mb-5 ms-6 d-none d-lg-block z-index-0 hula_hoop">
                        <img src='./assets/images/icons/hula-hoop.png' width="100px" alt='icon' />
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
                                <ServiceCard serviceDetail={serviceDetail} />
                            </div>
                            <div className="col-xxl-7 col-xl-7 col-lg-7 col-12 row mobile_center">
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
                                        <Link to="#" class="list-group-item bg-transparent">Content / Video Editing</Link>
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
                {/* <!-- =======================Service END====================== --> */}
                {/* <!-- ================Features START============== --> */}
                <section class="bg-dark position-relative pattern-overlay-5 mx-xl-3 mx-xxxl-9 rounded">
                    <div class="container">
                        <div class="row">
                            {/* <!-- Title --> */}
                            <div class="col-md-5 mb-5">
                                <h2 class="display-4 text-white-stroke">Our every day business</h2>
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
                {/* <!-- ================Features END =============== --> */}
                <Clientportfolio />
                <OurPortlio />
                <section>
                    <div class="container">
                        <div class="row">
                            <div class="col-12">
                                <div class="bg-light p-4 p-sm-5 rounded-3 position-relative overflow-hidden">
                                    {/* <!-- SVG decoration --> */}
                                    <figure class="position-absolute top-0 start-0 d-none d-lg-block ms-n7">
                                        <svg width="294.5px" height="261.6px" viewBox="0 0 294.5 261.6" style={{ enableBackground: 'new 0 0 294.5 261.6' }}>
                                            <path class="fill-warning opacity-5" d="M280.7,84.9c-4.6-9.5-10.1-18.6-16.4-27.2c-18.4-25.2-44.9-45.3-76-54.2c-31.7-9.1-67.7-0.2-93.1,21.6 C82,36.4,71.9,50.6,65.4,66.3c-4.6,11.1-9.5,22.3-17.2,31.8c-6.8,8.3-15.6,15-22.8,23C10.4,137.6-0.1,157.2,0,179 c0.1,28,11.4,64.6,40.4,76.7c23.9,10,50.7-3.1,75.4-4.7c23.1-1.5,43.1,10.4,65.5,10.6c53.4,0.6,97.8-42,109.7-90.4 C298.5,140.9,293.4,111.5,280.7,84.9z"></path>
                                        </svg>
                                    </figure>
                                    {/* <!-- SVG decoration --> */}
                                    <figure class="position-absolute top-50 start-50 translate-middle">
                                        <svg width="453px" height="211px">
                                            <path class="fill-orange" d="M16.002,8.001 C16.002,12.420 12.420,16.002 8.001,16.002 C3.582,16.002 -0.000,12.420 -0.000,8.001 C-0.000,3.582 3.582,-0.000 8.001,-0.000 C12.420,-0.000 16.002,3.582 16.002,8.001 Z"></path>
                                            <path class="fill-warning" d="M176.227,203.296 C176.227,207.326 172.819,210.593 168.614,210.593 C164.409,210.593 161.000,207.326 161.000,203.296 C161.000,199.266 164.409,196.000 168.614,196.000 C172.819,196.000 176.227,199.266 176.227,203.296 Z"></path>
                                            <path class="fill-primary" d="M453.002,65.001 C453.002,69.420 449.420,73.002 445.001,73.002 C440.582,73.002 437.000,69.420 437.000,65.001 C437.000,60.582 440.582,57.000 445.001,57.000 C449.420,57.000 453.002,60.582 453.002,65.001 Z"></path>
                                        </svg>
                                    </figure>
                                    {/* <!-- SVG image --> */}
                                    <img src="assets/images/wireframe/plant_svg.svg" class="position-absolute bottom-0 end-0 z-index-9 d-none d-lg-block me-n3" alt="" />
                                    {/* <!-- SVG decoration --> */}
                                    <figure class="position-absolute top-0 end-0 mt-5 me-n5 d-none d-sm-block">
                                        <svg width="285px" height="272px">
                                            <path class="fill-info opacity-4" d="M142.500,-0.000 C221.200,-0.000 285.000,60.889 285.000,136.000 C285.000,211.111 221.200,272.000 142.500,272.000 C63.799,272.000 -0.000,211.111 -0.000,136.000 C-0.000,60.889 63.799,-0.000 142.500,-0.000 Z"></path>
                                        </svg>
                                    </figure>

                                    <div class="row g-4 justify-content-center align-items-center position-relative">
                                        <div class="col-lg-3 text-center text-lg-start ps-0">
                                            {/* <!-- Image --> */}
                                            <img src="assets/images/wireframe/cool_men.svg" alt="" class="z-index-9" />
                                        </div>
                                        {/* <!-- Title --> */}
                                        <div class="col-lg-6 text-center">
                                            <span class="h6 fw-light">Reach out to us</span>
                                            <h3 class="mb-0 mt-2">Exclusive Responsive Website and Web Apps are waiting for you.</h3>
                                        </div>
                                        {/* <!-- Content and input --> */}
                                        <div class="col-lg-3 text-center text-lg-end z-index-9">
                                            <Link to="#" class="btn btn-warning mb-0">Get in touch Now !</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}

export default Home;