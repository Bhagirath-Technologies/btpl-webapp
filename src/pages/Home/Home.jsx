import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero_Section/Hero';
import Clientportfolio from '../../components/Hero_Section/Clientportfolio';
import ServiceCard from '../../components/Hero_Section/ServiceCards';
import OurPortlio from '../../components/Hero_Section/Ourportfolio';
import serviceData from '../../data/ServiceCarddata';
// import OurPortfolioData from '../../data/OurPortfoliodata'; 

import './home.css';
import AnimatedFigures from '../../components/AnimatedFigures';
const Home = () => {
    const [serviceDetail] = useState(serviceData);
    // const [portfolioDetail] = useState(OurPortfolioData);
    return (
        <>
            {/* <!-- Pre loader --> */}
            {/* <div className="preloader">
                <img className="preloader-item" src="assets/images/loader/02.gif" alt="Loading" />
            </div> */}
            {/* <!-- **************** MAIN CONTENT START **************** --> */}
            <main>
                {/* <!-- ======================= Main Banner START ====================== --> */}
                <section className="position-relative bg-dark p-0">
                    {/* <!-- Social sites link left --> */}
                    <div className="position-absolute top-50 start-0 translate-middle z-index-9 ms-4 d-none d-xxl-block">
                        <div className="list-group-inline list-unstyled rotate-270">
                            <Link to="#" className="list-group-item text-white bg-transparent mt-4">Facebook</Link>
                            <Link to="#" className="list-group-item text-white bg-transparent mt-4">Twitter</Link>
                            <Link to="#" className="list-group-item text-white bg-transparent mt-4">Dribble</Link>
                        </div>
                    </div>
                    {/* <!-- Scoll Down --> */}
                    <div className="scroll-down scroll-down-light m-5 d-none d-md-block">
                        <div className="scroll-line"></div>
                        <span className="scoll-text">Scroll Down</span>
                    </div>
                    {/* taken hero from here */}
                    <Hero />
                </section>
                {/* <!-- ======================== Main Banner END ===================== --> */}
                {/* <!-- =======================Service START==================== --> */}
                <section className="position-relative">
                    {/* <!-- Shape Decoration START --> */}
                    <AnimatedFigures />
                    {/* <!-- Shape Decoration END --> */}
                    <div className="container position-relative">
                        <div className="row">
                            <div className="col-lg-8 mb-5">
                                <h2 className="display-5">Transform your business strategy</h2>
                                <p>We're an innovative company beyond the possible limits powered by consumer insights and behavior. Our focus areas include video editing, web designing, and web development. From crafting compelling visuals to enhancing user experiences online, we're dedicated to bringing your ideas to life with impactful creativity. we specialize in Digital Marketing, Graphic Design, Software Development, and Web Hosting to provide comprehensive solutions for your business needs. With our expertise across diverse domains, we ensure every aspect of your digital presence is optimized for success</p>
                            </div>
                        </div>
                        <div className="row d-flex">
                            <div className="col-xxl-5 col-xl-5 col-lg-5 col-12 pe-5 pb-5">
                                <ServiceCard serviceDetail={serviceDetail} />
                            </div>
                            <div className="col-xxl-7 col-xl-7 col-lg-7 col-12 row mobile_center">
                                {/* <!-- Service Item 1--> */}
                                <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                                    <h2 className="display-1 text-dark-stroke text-hover-fill text-primary-shadow">W</h2>
                                    <h5 className="mb-4">Web Development</h5>
                                    <div className="list-group list-group-borderless list-unstyled">
                                        <Link to="#" className="list-group-item bg-transparent">Web Development</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Front-end Development</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Back-end Development</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Apps & Game</Link>
                                        <Link to="#" className="list-group-item bg-transparent">E-commerce</Link>
                                    </div>
                                </div>
                                {/* <!-- Service Item 2--> */}
                                <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                                    <h2 className="display-1 text-dark-stroke text-hover-fill text-primary-shadow">E</h2>
                                    <h5 className="mb-4">E-commerce & Graphics</h5>
                                    <div className="list-group list-group-borderless list-unstyled">
                                        <Link to="#" className="list-group-item bg-transparent">E-Commerce platforms</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Apps & mobile</Link>
                                        <Link to="#" className="list-group-item bg-transparent">User Experience</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Motion Design</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Interface Design</Link>
                                    </div>
                                </div>
                                {/* <!-- Service Item 3--> */}
                                <div className="col-12 col-lg-4 mb-5 mb-lg-0">
                                    <h2 className="display-1 text-dark-stroke text-hover-fill text-primary-shadow">B</h2>
                                    <h5 className="mb-4">Branding</h5>
                                    <div className="list-group list-group-borderless list-unstyled">
                                        <Link to="#" className="list-group-item bg-transparent">Brand Identity</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Art Direction</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Visual Design</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Illustration & Iconography</Link>
                                        <Link to="#" className="list-group-item bg-transparent">Content / Video Editing</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- row END --> */}
                        <div className="row d-flex justify-content-end">
                            <div className="col-lg-9">
                                <Link to="/services" className="btn btn-line text-dark mt-4">View all services</Link>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- =======================Service END====================== --> */}
                {/* <!-- ================Features START============== --> */}
                <section className="bg-dark position-relative pattern-overlay-5 mx-xl-3 mx-xxxl-9 rounded">
                    <div className="container">
                        <div className="row">
                            {/* <!-- Title --> */}
                            <div className="col-md-5 mb-5">
                                <h2 className="display-4 text-white-stroke">We Modulates business needs</h2>
                                <p>Harnessing the power of digital technologies and strategic marketing techniques, we propel your business forward with our comprehensive suite of services. From Email Marketing and CRM Development to CMS Development and Lead Generation, we ensure every aspect of your online presence is optimized for success. Our expertise in Search Engine Marketing and Pay-Per-Click advertising drives targeted traffic to your platform, maximizing your visibility and conversions.
                                    With Agile Software Development methodologies and API Development, we create dynamic, scalable solutions tailored to your unique requirements. Moreover, our Rental Services streamline operations, providing cost-effective solutions for your business needs.  </p>
                            </div>
                            <div className="col-md-7 mb-5">
                                <div className="row">
                                    {/* <!-- Feature item --> */}
                                    <div className="col-sm-6 mb-5">
                                        <i className="display-6 text-primary fab fa-react"></i>
                                        <h5 className="text-white my-3">Digital Development</h5>
                                        <p className="text-secondary">Digital development involves leveraging technology and digital tools to innovate, solve problems, and achieve desired outcomes in various domains, including business, education.</p>
                                    </div>
                                    {/* <!-- Feature item --> */}
                                    <div className="col-sm-6 mb-5">
                                        <i className="display-6 text-primary bi bi-bar-chart-line"></i>
                                        <h5 className="text-white my-3"><Link className='text-white' to="/rental"></Link>Online Marketing</h5>
                                        <p className="text-secondary">Online marketing offers businesses and organizations the opportunity to reach a global audience, target specific demographics, track results in real-time, and adjust strategies accordingly to maximize ROI.</p>
                                    </div>
                                    {/* <!-- Feature item --> */}
                                    <div className="col-sm-6 mb-5 mb-sm-0">
                                        <i className="display-6 text-primary bi bi-laptop"></i>
                                        <h5 className="text-white my-3"><Link className='text-white' to="/rental">Rental Solutions</Link></h5>
                                        <p className="text-secondary m-0">Rental solutions provide flexibility, cost-effectiveness, and convenience for individuals and businesses seeking access to peripherals without the burden of ownership or long-term commitments.</p>
                                    </div>
                                    {/* <!-- Feature item --> */}
                                    <div className="col-sm-6">
                                        <i className="display-6 text-primary bi bi-r-circle"></i>
                                        <h5 className="text-white my-3"><Link className='text-white' to="/services">Brand Identity</Link></h5>
                                        <p className="text-secondary m-0">Brand identity is a strong essential for creating brand recognition, building customer loyalty. It helps establish a consistent and memorable brand presence across all touchpoints.</p>
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
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="bg-light p-4 p-sm-5 rounded-3 position-relative overflow-hidden">
                                    {/* <!-- SVG decoration --> */}
                                    <figure className="position-absolute top-0 start-0 d-none d-lg-block ms-n7">
                                        <svg width="294.5px" height="261.6px" viewBox="0 0 294.5 261.6" style={{ enableBackground: 'new 0 0 294.5 261.6' }}>
                                            <path className="fill-warning opacity-5" d="M280.7,84.9c-4.6-9.5-10.1-18.6-16.4-27.2c-18.4-25.2-44.9-45.3-76-54.2c-31.7-9.1-67.7-0.2-93.1,21.6 C82,36.4,71.9,50.6,65.4,66.3c-4.6,11.1-9.5,22.3-17.2,31.8c-6.8,8.3-15.6,15-22.8,23C10.4,137.6-0.1,157.2,0,179 c0.1,28,11.4,64.6,40.4,76.7c23.9,10,50.7-3.1,75.4-4.7c23.1-1.5,43.1,10.4,65.5,10.6c53.4,0.6,97.8-42,109.7-90.4 C298.5,140.9,293.4,111.5,280.7,84.9z"></path>
                                        </svg>
                                    </figure>
                                    {/* <!-- SVG decoration --> */}
                                    <figure className="position-absolute top-50 start-50 translate-middle">
                                        <svg width="453px" height="211px">
                                            <path className="fill-orange" d="M16.002,8.001 C16.002,12.420 12.420,16.002 8.001,16.002 C3.582,16.002 -0.000,12.420 -0.000,8.001 C-0.000,3.582 3.582,-0.000 8.001,-0.000 C12.420,-0.000 16.002,3.582 16.002,8.001 Z"></path>
                                            <path className="fill-warning" d="M176.227,203.296 C176.227,207.326 172.819,210.593 168.614,210.593 C164.409,210.593 161.000,207.326 161.000,203.296 C161.000,199.266 164.409,196.000 168.614,196.000 C172.819,196.000 176.227,199.266 176.227,203.296 Z"></path>
                                            <path className="fill-primary" d="M453.002,65.001 C453.002,69.420 449.420,73.002 445.001,73.002 C440.582,73.002 437.000,69.420 437.000,65.001 C437.000,60.582 440.582,57.000 445.001,57.000 C449.420,57.000 453.002,60.582 453.002,65.001 Z"></path>
                                        </svg>
                                    </figure>
                                    {/* <!-- SVG image --> */}
                                    <img src="assets/images/wireframe/plant_svg.svg" className="position-absolute bottom-0 end-0 z-index-9 d-none d-lg-block me-n3" alt="" />
                                    {/* <!-- SVG decoration --> */}
                                    <figure className="position-absolute top-0 end-0 mt-5 me-n5 d-none d-sm-block">
                                        <svg width="285px" height="272px">
                                            <path className="fill-info opacity-4" d="M142.500,-0.000 C221.200,-0.000 285.000,60.889 285.000,136.000 C285.000,211.111 221.200,272.000 142.500,272.000 C63.799,272.000 -0.000,211.111 -0.000,136.000 C-0.000,60.889 63.799,-0.000 142.500,-0.000 Z"></path>
                                        </svg>
                                    </figure>

                                    <div className="row g-4 justify-content-center align-items-center position-relative">
                                        <div className="col-lg-3 text-center text-lg-start ps-0">
                                            {/* <!-- Image --> */}
                                            <img src="assets/images/wireframe/cool_men.svg" alt="" className="z-index-9" />
                                        </div>
                                        {/* <!-- Title --> */}
                                        <div className="col-lg-6 text-center">
                                            <span className="h6 fw-light">Reach out to us</span>
                                            <h3 className="mb-0 mt-2">Exclusive Responsive Website and Web Apps are waiting for you.</h3>
                                        </div>
                                        {/* <!-- Content and input --> */}
                                        <div className="col-lg-3 text-center text-lg-end z-index-9">
                                            <Link to="#" className="btn btn-warning mb-0">Get in touch Now !</Link>
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