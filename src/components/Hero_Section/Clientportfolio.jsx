import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const swiperStyles = {
  height: "100%",
};
export default function App() {
  return (
    <>
      {/* <!-- Banner START --> */}
      <section className="p-0">
        <div className="container">
          <div className="row position-relative text-center pb-7">
            {/* <!-- Title --> */}
            <div className="col-sm-8 mb-3 mx-auto text-center pt-7">
              <h2 className="display-4 mb-5 text-dark-stroke">Testimonials</h2>
            </div>
            <Swiper
              style={swiperStyles}
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper pb-5"
            >
              {/* <!-- Testimonials --> */}
              <div className="col-md-10 mx-auto text-center pb-10">
                <div className="tiny-slider arrow-md-none arrow-bordered arrow-large arrow-round pb-7">
                  <div
                    className="tiny-slider-inner"
                    data-gutter="0"
                    data-edge="50"
                    data-autoplay="false"
                    data-arrow="true"
                    data-dots="false"
                    data-items="1"
                  >
                    <SwiperSlide>
                      {/* <!-- Testimonial item --> */}
                      <div className="item px-3 px-md-6">
                        <div className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/01.webp"
                            alt="avatar"
                          />
                        </div>
                        <p className="lead">
                          Prompt response on any help and commitment is very
                          high-level.
                        </p>
                        <h6 className="mb-0 mt-3">Gunjan Sinha</h6>
                        <span className="small">Happy Customers</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <!-- Testimonial item --> */}
                      <div className="item px-3 px-md-6">
                        <div className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/02.webp"
                            alt="avatar"
                          />
                        </div>
                        <p className="lead">
                          I rented laptop computers for my office. The laptop
                          configuration is excellent at a reasonable price. The
                          ticket creation process in the case of repair and
                          rental is professional. I strongly advise anyone to go
                          there for any repair or rental work.
                        </p>
                        <h6 className="mb-0 mt-3">Ramesh Sahu</h6>
                        <span className="small">Happy Customers</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <!-- Testimonial item --> */}
                      <div className="item px-3 px-md-6">
                        <div className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/02.jpg"
                            alt="avatar"
                          />
                        </div>
                        <p className="lead">
                          Bhagirath Technologies Pvt Ltd! Their team worked
                          wonders for my business, delivering a stunning website
                          design and powerful branding that truly elevated our
                          online presence. Not only did they create a visually
                          appealing website, but they also implemented effective
                          lead-generation strategies that have boosted our sales
                          significantly.
                        </p>
                        <h6 className="mb-0 mt-3">Mr. Vivek Suryvanshi</h6>
                        <span className="small">React.js Developer</span>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      {/* <!-- Testimonial item --> */}
                      <div className="item px-3 px-md-6">
                        <div className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1">
                          <i className="fas fa-quote-left"></i>
                        </div>
                        <div className="avatar">
                          <img
                            className="avatar-img rounded-circle"
                            src="assets/images/avatar/02.jpg"
                            alt="avatar"
                          />
                        </div>
                        <p className="lead">
                          {" "}
                          I’ll highly recommend Bhagirath Technologies Private
                          Limited for their exceptional service assistance.
                          Their team went above and beyond to resolve my
                          technical
                        </p>
                        <h6 className="mb-0 mt-3">Mr. Vivek Suryvanshi</h6>
                        <span className="small">React.js Developer</span>
                      </div>
                    </SwiperSlide>
                  </div>
                </div>
              </div>
            </Swiper>
          </div>
          {/* <!-- row END --> */}
        </div>
      </section>
    </>
  );
}
