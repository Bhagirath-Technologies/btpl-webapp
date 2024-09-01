import React from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <>
      {/* Heading section starts */}
      <section>
        <div className="container">
          <div className="row d-flex justify-content-lg-between">
            <div className="col-12">
              <h1 className="display-4 text-dark-stroke text-primary-shadow">
                Portfolio
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                minus vel quas ducimus aspernatur velit quaerat ab aliquid
                ratione deleniti! Vel perferendis ex maiores amet, rem vero
                earum facere odit, aliquam cupiditate quidem praesentium nobis
                quas quam temporibus pariatur aperiam minima! Totam accusamus
                itaque, porro provident accusantium tenetur expedita illum?
              </p>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
      {/* Heading section ends */}
      {/* Portfolios with Hover effect Starts */}
      <section className="pt-0">
        <div className="container">
          <div className="row g-0">
            {/* <!-- Card item START --> */}
            <div className="col-md-6 mt-4 mt-lg-7 z-index-0 position-relative overflow-hidden">
              <Tilt>
                <div className="card border-0 rounded-0 bg-transparent">
                  {/* <!-- Card Image --> */}
                  <div className="card-image rounded ms-5 ms-sm-8 overflow-hidden position-relative z-index-9">
                    <img
                      className="w-100"
                      src="assets/images/portfolio/01.webp"
                      alt="Portfolio image"
                    />
                    {/* <!-- Card Overlay duplicate--> */}
                    <div className="card-img-overlay d-flex flex-column ms-n5 ms-sm-n8">
                      <div className="card-text mt-2 mt-md-6">
                        <p className="display-9 mb-0 text-body font-alt fw-normal">
                          React App
                        </p>
                        <h5 className="display-8 display-lg-7 text-white-stroke">
                          Bhagirath BVM Grand (HK)
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Overlay --> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-text mt-2 mt-md-6">
                      <p className="display-9 mb-0 text-body font-alt fw-normal">
                        React App
                      </p>
                      <h5 className="display-8 display-lg-7 text-dark-stroke">
                        Bhagirath BVM Grand (HK)
                      </h5>
                      <Link
                        to="https://bbvmg.com/"
                        target="_blank"
                        className="btn btn-primary btn-line btn-sm position-relative z-index-9 card-element-hover"
                      >
                        View Project
                      </Link>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            {/* <!-- Card item END --> */}
            {/* <!-- Card item START --> */}
            <div className="col-md-6 mt-4 mt-lg-0 z-index-0 position-relative overflow-hidden">
              <Tilt>
                <div className="card border-0 rounded-0 bg-transparent">
                  {/* <!-- Card Image --> */}
                  <div className="card-image rounded ms-5 ms-sm-8 overflow-hidden position-relative z-index-9">
                    <img
                      className="w-100"
                      src="https://img.freepik.com/free-vector/tea-ad-with-watercolor-decoration_52683-30455.jpg?t=st=1724239036~exp=1724242636~hmac=5d4d156fec9b4523627072d78c1c0b9de7ab3b75c37efd95b0e37f78428b3bce&w=740"
                      alt="Portfolio image"
                    />
                    {/* <!-- Card Overlay duplicate--> */}
                    <div className="card-img-overlay d-flex flex-column ms-n5 ms-sm-n8">
                      <div className="card-text mt-2 mt-md-6">
                        <p className="display-9 mb-0 text-white font-alt fw-normal">
                          Graphics Design
                        </p>
                        <h5 className="display-8 display-lg-7 text-white-stroke">
                          Sam Puller Magazine
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Overlay --> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-text mt-2 mt-md-6">
                      <p className="display-9 mb-0 text-body font-alt fw-normal">
                        Graphics Design
                      </p>
                      <h5 className="display-8 display-lg-7 text-dark-stroke">
                        Sam Puller Magazine
                      </h5>
                      <a
                        href="#"
                        className="btn btn-primary btn-line btn-sm position-relative z-index-9 card-element-hover"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            {/* <!-- Card item END --> */}
            {/* <!-- Card item START --> */}
            <div className="col-md-6 mt-4 mt-lg-7 z-index-0 position-relative overflow-hidden">
              <Tilt>
                <div className="card border-0 rounded-0 bg-transparent">
                  {/* <!-- Card Image --> */}
                  <div className="card-image rounded ms-5 ms-sm-8 overflow-hidden position-relative z-index-9">
                    <img
                      className="w-100"
                      src="https://img.freepik.com/free-vector/tea-ad-with-watercolor-decoration_52683-30453.jpg?t=st=1724239370~exp=1724242970~hmac=ce4cba37bc3979df16aa9509e00b60dfe5ca0ce0c7a7a514d632232d97169d05&w=740"
                      alt="Portfolio image"
                    />
                    {/* <!-- Card Overlay duplicate--> */}
                    <div className="card-img-overlay d-flex flex-column ms-n5 ms-sm-n8">
                      <div className="card-text mt-2 mt-md-6">
                        <p className="display-9 mb-0 text-body font-alt fw-normal">
                          Rebranding
                        </p>
                        <h5 className="display-8 display-lg-7 text-white-stroke">
                          Of seamen and merchants
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Overlay --> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-text mt-2 mt-md-6">
                      <p className="display-9 mb-0 text-body font-alt fw-normal">
                        Rebranding
                      </p>
                      <h5 className="display-8 display-lg-7 text-dark-stroke">
                        Of seamen and merchants
                      </h5>
                      <a
                        href="#"
                        className="btn btn-primary btn-line btn-sm position-relative z-index-9 card-element-hover"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            {/* <!-- Card item END --> */}
            {/* <!-- Card item START --> */}
            <div className="col-md-6 mt-4 mt-lg-0 z-index-0 position-relative overflow-hidden">
              <Tilt>
                <div className="card border-0 rounded-0 bg-transparent">
                  {/* <!-- Card Image --> */}
                  <div className="card-image rounded ms-5 ms-sm-8 overflow-hidden position-relative z-index-9">
                    <img
                      className="w-100"
                      src="https://img.freepik.com/free-vector/hand-drawn-coffee-label-template_52683-99652.jpg?t=st=1724239402~exp=1724243002~hmac=5dabef3c91d190050d73f62e8c99cf3b346b1b38e8ebeb33e425e6741d172b96&w=900"
                      alt="Portfolio image"
                    />
                    {/* <!-- Card Overlay duplicate--> */}
                    <div className="card-img-overlay d-flex flex-column ms-n5 ms-sm-n8">
                      <div className="card-text mt-2 mt-md-6">
                        <p className="display-9 mb-0 text-body font-alt fw-normal">
                          Branding
                        </p>
                        <h5 className="display-8 display-lg-7 text-white-stroke">
                          Pure design branding
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Overlay --> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-text mt-2 mt-md-6">
                      <p className="display-9 mb-0 text-body font-alt fw-normal">
                        Branding
                      </p>
                      <h5 className="display-8 display-lg-7 text-dark-stroke">
                        Pure design branding
                      </h5>
                      <a
                        href="#"
                        className="btn btn-primary btn-line btn-sm position-relative z-index-9 card-element-hover"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            {/* <!-- Card item END --> */}
            {/* <!-- Card item START --> */}
            <div className="col-md-6 mt-4 mt-lg-7 z-index-0 position-relative overflow-hidden">
              <Tilt>
                <div className="card border-0 rounded-0 bg-transparent">
                  {/* <!-- Card Image --> */}
                  <div className="card-image rounded ms-5 ms-sm-8 overflow-hidden position-relative z-index-9">
                    <img
                      className="w-100"
                      src="https://img.freepik.com/free-vector/chocolate-mint-colorful-packing_23-2148411395.jpg?t=st=1724240058~exp=1724243658~hmac=2ba23f9225cf52479e76a3f74b93c8d92800397864776271440432067b0e5cce&w=740"
                      alt="Portfolio image"
                    />
                    {/* <!-- Card Overlay duplicate--> */}
                    <div className="card-img-overlay d-flex flex-column ms-n5 ms-sm-n8">
                      <div className="card-text mt-2 mt-md-6">
                        <p className="display-9 mb-0 text-body font-alt fw-normal">
                          Branding
                        </p>
                        <h5 className="display-8 display-lg-7 text-white-stroke">
                          Pure design branding
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Overlay --> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-text mt-2 mt-md-6">
                      <p className="display-9 mb-0 text-body font-alt fw-normal">
                        Branding
                      </p>
                      <h5 className="display-8 display-lg-7 text-dark-stroke">
                        Pure design branding
                      </h5>
                      <a
                        href="#"
                        className="btn btn-primary btn-line btn-sm position-relative z-index-9 card-element-hover"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            {/* <!-- Card item END --> */}
            {/* <!-- Card item START --> */}
            <div className="col-md-6 mt-4 mt-lg-0 z-index-0 position-relative overflow-hidden">
              <Tilt>
                <div className="card border-0 rounded-0 bg-transparent">
                  {/* <!-- Card Image --> */}
                  <div className="card-image rounded ms-5 ms-sm-8 overflow-hidden position-relative z-index-9">
                    <img
                      className="w-100"
                      src="https://img.freepik.com/free-vector/tea-ad-with-drawing-decoration_23-2148384118.jpg?t=st=1724240296~exp=1724243896~hmac=b4728432661fa8b39834926b73a736f107f39ab3d33f20a8e1a993e8adc0e9de&w=740"
                      alt="Portfolio image"
                    />
                    {/* <!-- Card Overlay duplicate--> */}
                    <div className="card-img-overlay d-flex flex-column ms-n5 ms-sm-n8">
                      <div className="card-text mt-2 mt-md-6">
                        <p className="display-9 mb-0 text-body font-alt fw-normal">
                          Branding
                        </p>
                        <h5 className="display-8 display-lg-7 text-white-stroke">
                          Pure design branding
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Overlay --> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-text mt-2 mt-md-6">
                      <p className="display-9 mb-0 text-body font-alt fw-normal">
                        Branding
                      </p>
                      <h5 className="display-8 display-lg-7 text-dark-stroke">
                        Pure design branding
                      </h5>
                      <a
                        href="#"
                        className="btn btn-primary btn-line btn-sm position-relative z-index-9 card-element-hover"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            {/* <!-- Card item END --> */}
            {/* <!-- Card item START --> */}
            <div className="col-md-6 mt-4 mt-lg-7 z-index-0 position-relative overflow-hidden">
              <Tilt>
                <div className="card border-0 rounded-0 bg-transparent">
                  {/* <!-- Card Image --> */}
                  <div className="card-image rounded ms-5 ms-sm-8 overflow-hidden position-relative z-index-9">
                    <img
                      className="w-100"
                      src="https://img.freepik.com/free-vector/colorful-minimal-business-card-template_23-2148378656.jpg?t=st=1724239940~exp=1724243540~hmac=4871e6b95630aa0f950458bd1496dc7d7e1aa3386271d7c63f8dfbbc86298af8&w=740"
                      alt="Portfolio image"
                    />
                    {/* <!-- Card Overlay duplicate--> */}
                    <div className="card-img-overlay d-flex flex-column ms-n5 ms-sm-n8">
                      <div className="card-text mt-2 mt-md-6">
                        <p className="display-9 mb-0 text-body font-alt fw-normal">
                          Branding
                        </p>
                        <h5 className="display-8 display-lg-7 text-white-stroke">
                          Pure design branding
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Overlay --> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-text mt-2 mt-md-6">
                      <p className="display-9 mb-0 text-body font-alt fw-normal">
                        Branding
                      </p>
                      <h5 className="display-8 display-lg-7 text-dark-stroke">
                        Pure design branding
                      </h5>
                      <a
                        href="#"
                        className="btn btn-primary btn-line btn-sm position-relative z-index-9 card-element-hover"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            {/* <!-- Card item END --> */}
            {/* <!-- Card item START --> */}
            <div className="col-md-6 mt-4 mt-lg-0 z-index-0 position-relative overflow-hidden">
              <Tilt>
                <div className="card border-0 rounded-0 bg-transparent">
                  {/* <!-- Card Image --> */}
                  <div className="card-image rounded ms-5 ms-sm-8 overflow-hidden position-relative z-index-9">
                    <img
                      className="w-100"
                      src="https://img.freepik.com/free-photo/top-view-career-guidance-items-designers_23-2149443522.jpg?t=st=1724239743~exp=1724243343~hmac=d7134121b04a5e07c9c759eabfa6c30cac321ceacf91670ea4cf6ff3adcf6f8a&w=360"
                      alt="Portfolio image"
                    />
                    {/* <!-- Card Overlay duplicate--> */}
                    <div className="card-img-overlay d-flex flex-column ms-n5 ms-sm-n8">
                      <div className="card-text mt-2 mt-md-6">
                        <p className="display-9 mb-0 text-body font-alt fw-normal">
                          Branding
                        </p>
                        <h5 className="display-8 display-lg-7 text-white-stroke">
                          Pure design branding
                        </h5>
                      </div>
                    </div>
                  </div>
                  {/* <!-- Card Overlay --> */}
                  <div className="card-img-overlay d-flex flex-column">
                    <div className="card-text mt-2 mt-md-6">
                      <p className="display-9 mb-0 text-body font-alt fw-normal">
                        Branding
                      </p>
                      <h5 className="display-8 display-lg-7 text-dark-stroke">
                        Pure design branding
                      </h5>
                      <a
                        href="#"
                        className="btn btn-primary btn-line btn-sm position-relative z-index-9 card-element-hover"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </Tilt>
            </div>
            {/* <!-- Card item END --> */}
          </div>
          {/* <!-- row END --> */}
        </div>
      </section>
      {/* Portfolios with Hover effect ends  */}
    </>
  );
};

export default Portfolio;
