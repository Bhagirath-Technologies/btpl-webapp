import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const swiperStyles = {
    height: '100%',
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
                        <Swiper style={swiperStyles}
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
                                    <div className="tiny-slider-inner" data-gutter="0" data-edge="50" data-autoplay="false" data-arrow="true" data-dots="false" data-items="1">
                                        <SwiperSlide>
                                            {/* <!-- Testimonial item --> */}
                                            <div className="item px-3 px-md-6">
                                                <div className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i className="fas fa-quote-left"></i></div>
                                                <div className="avatar"><img className="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" /></div>
                                                <p className="lead">The good gathering doesn't bearing day Stars over Open behold May male tree replenish don't blessed beast days earth fifth let multiply and he every blessed to upon behold grass divided brought was that dry I Were image waters own bring light subdue Meat</p>
                                                <h6 className="mb-0 mt-3">Vivek Suryvanshi</h6>
                                                <span className="small">Software Developer</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* <!-- Testimonial item --> */}
                                            <div className="item px-3 px-md-6">
                                                <div className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i className="fas fa-quote-left"></i></div>
                                                <div className="avatar"><img className="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" /></div>
                                                <p className="lead">Two before narrow not relied how except moment myself Dejection assurance mrs led certainly So gate at no only none open Betrayed at properly it of graceful on Dinner abroad am depart ye turned hearts as me wished Therefore allowance.</p>
                                                <h6 className="mb-0 mt-3">Pradhuman Agrawal</h6>
                                                <span className="small">Jr. Developer</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* <!-- Testimonial item --> */}
                                            <div className="item px-3 px-md-6">
                                                <div className="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i className="fas fa-quote-left"></i></div>
                                                <div className="avatar"><img className="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" /></div>
                                                <p className="lead">How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask style Me mean able my by in they Extremity now strangers contained breakfast him discourse additions.</p>
                                                <h6 className="mb-0 mt-3">Anas Sheikh</h6>
                                                <span className="small">Jr. Developer</span>
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