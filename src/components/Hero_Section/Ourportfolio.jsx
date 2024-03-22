import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';
// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <section className="pt-4">
        <div className="container">
          {/* <!-- Title --> */}
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-sm-8 mb-3">
              <h2 className="display-5 mb-0 mb-sm-4 text-dark-stroke">
                Our Portfolio
              </h2>
            </div>
            <div className="col-sm-4 mb-4 text-start text-sm-end">
              <Link to="#" className="btn btn-line text-dark mt-3">
                View our work
              </Link>
            </div>
          </div>

          {/* <!-- Portfolio items --> */}
          <div className="row">
            <div className="col-lg-12">
              <div className="tiny-slider dots-bordered">
                <div
                  className="tiny-slider-inner"
                  data-arrow="false"
                  data-dots="true"
                  data-items-xl="3"
                  data-items-lg="3"
                  data-items-md="3"
                  data-items-sm="2"
                  data-items-xs="1"
                >
                  <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    autoplay={true}
                    pagination={{
                      clickable: true,
                    }}
                    breakpoints={{
                      640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                      },
                      768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                      },
                      1024: {
                        slidesPerView: 3,
                        spaceBetween: 50,
                      },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      {/* <!-- Card item START --> */}
                      <div className="item">
                        <Link to="#" className="card card-metro">
                          {/* <!-- Card Image --> */}
                          <div className="card-image">
                            <img src="assets/images/portfolio/01.webp" alt="" />
                          </div>
                          {/* <!-- Card Overlay --> */}
                          <div className="card-img-overlay d-flex flex-column">
                            <img
                              className="w-25"
                              src="assets/images/clients/light/01.webp"
                              alt=""
                            />
                            <div className="mt-auto card-text">
                              <h5 className="text-white">
                                Bhagirath BVM Grand (HK)
                              </h5>
                              <p className="small text-white mb-0 text-truncate">
                                At Bhagirath BVM Grand (HK) Limited, we are the
                                catalysts of global trade, a company that
                                thrives on connecting the world through
                                commerce.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- Card item END --> */}
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <!-- Card item START --> */}
                      <div className="item">
                        <Link to="#" className="card card-metro">
                          {/* <!-- Card Image --> */}
                          <div className="card-image">
                            <img src="assets/images/portfolio/02.webp" alt="" />
                          </div>
                          {/* <!-- Card Overlay --> */}
                          <div className="card-img-overlay d-flex flex-column">
                            <img
                              className="w-40"
                              src="assets/images/clients/light/02.svg"
                              alt=""
                            />
                            <div className="mt-auto card-text">
                              <h5 className="text-white">
                              Bhagirath Renewable Energy
                              </h5>
                              <p className="small text-white mb-0 text-truncate">
                              Welcome to Bhagirath Renewable Energy Private Limited (BREL), where innovation meets sustainability.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- Card item END --> */}
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <!-- Card item START --> */}
                      <div className="item">
                        <Link to="#" className="card card-metro">
                          {/* <!-- Card Image --> */}
                          <div className="card-image">
                            <img src="assets/images/portfolio/03.webp" alt="" />
                          </div>
                          {/* <!-- Card Overlay --> */}
                          <div className="card-img-overlay d-flex flex-column">
                            <img
                              className="w-20"
                              src="assets/images/clients/light/13.svg"
                              alt=""
                            />
                            <div className="mt-auto card-text">
                              <h5 className="text-white">
                              Home Gardners
                              </h5>
                              <p className="small text-white mb-0 text-truncate">
                              We've created with passionate home gardeners stunning websites that showcase their green thumb expertise. From plant profiles to gardening tips, our designs cultivate a vibrant online community. Let us bring your gardening journey to life with a website that blooms.                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- Card item END --> */}
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <!-- Card item START --> */}
                      <div className="item">
                        <Link to="#" className="card card-metro">
                          {/* <!-- Card Image --> */}
                          <div className="card-image">
                            <img src="assets/images/portfolio/04.webp" alt="" />
                          </div>
                          {/* <!-- Card Overlay --> */}
                          <div className="card-img-overlay d-flex flex-column">
                            <img
                              className="w-25"
                              src="assets/images/clients/light/12.svg"
                              alt=""
                            />
                            <div className="mt-auto card-text">
                              <h5 className="text-white">
                              Figma Web Design 
                            
                              </h5>
                              <p className="small text-white mb-0 text-truncate">
                              We made this Figma web designs for our client with unique needs and exceed your expectations. Elevate your online presence with a design that reflects your brand identity and captivates your audience. Get in touch to elevate your digital presence today.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- Card item END --> */}
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <!-- Card item START --> */}
                      <div className="item">
                        <Link to="#" className="card card-metro">
                          {/* <!-- Card Image --> */}
                          <div className="card-image">
                            <img src="assets/images/portfolio/05.webp" alt="" />
                          </div>
                          {/* <!-- Card Overlay --> */}
                          <div className="card-img-overlay d-flex flex-column">
                            <img
                              className="w-25"
                              src="assets/images/clients/light/12.svg"
                              alt=""
                            />
                            <div className="mt-auto card-text">
                              <h5 className="text-white">  Brochure and Logo Designs</h5>
                              <p className="small text-white mb-0 text-truncate">
                              We created eye-catching brochures and logo designs for our client that embody brand's essence to captivating brochures that communicate your message effectively, we bring your vision to life. Let us design the perfect visuals to make your brand shine.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- Card item END --> */}
                    </SwiperSlide>

                    <SwiperSlide>
                      {/* <!-- Card item START --> */}
                      <div className="item">
                        <Link to="#" className="card card-metro">
                          {/* <!-- Card Image --> */}
                          <div className="card-image">
                            <img src="assets/images/portfolio/06.webp" alt="" />
                          </div>
                          {/* <!-- Card Overlay --> */}
                          <div className="card-img-overlay d-flex flex-column">
                            <img
                              className="w-25"
                              src="assets/images/clients/light/12.svg"
                              alt=""
                            />
                            <div className="mt-auto card-text">
                              <h5 className="text-white">
                              Web Design Development
                              </h5>
                              <p className="small text-white mb-0 text-truncate">
                              We craft stunning website designs tailored specifically to your needs.
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- Card item END --> */}
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <!-- Card item START --> */}
                      <div className="item">
                        <Link to="#" className="card card-metro">
                          {/* <!-- Card Image --> */}
                          <div className="card-image">
                            <img src="assets/images/portfolio/07.webp" alt="" />
                          </div>
                          {/* <!-- Card Overlay --> */}
                          <div className="card-img-overlay d-flex flex-column">
                            <img
                              className="w-25"
                              src="assets/images/clients/light/12.svg"
                              alt=""
                            />
                            <div className="mt-auto card-text">
                              <h5 className="text-white">
                              Custom Software Development
                              </h5>
                              <p className="small text-white mb-0 text-truncate">
                              We undertake your Custom Software Development project
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                      {/* <!-- Card item END --> */}
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- row END --> */}
        </div>
      </section>
    </>
  );
}
