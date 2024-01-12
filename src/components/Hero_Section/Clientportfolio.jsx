import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import './styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
const swiperStyles = {
    height: '100%',
};
export default function App() {
    return (
        <>

            {/* <!-- Banner START --> */}
            <section class="p-0">
                <div class="container">
                    <div class="row position-relative text-center pb-7">
                          {/* <!-- Title --> */}
                          <div class="col-sm-8 mb-3 mx-auto text-center pt-7">
                                <h2 class="display-5 mb-5 text-dark-stroke">Testimonials</h2>
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
                            className="mySwiper pb-7"
                        >
                            {/* <!-- Testimonials --> */}
                            <div class="col-md-10 mx-auto text-center pb-10">
                                <div class="tiny-slider arrow-md-none arrow-bordered arrow-large arrow-round pb-7">
                                    <div class="tiny-slider-inner" data-gutter="0" data-edge="50" data-autoplay="false" data-arrow="true" data-dots="false" data-items="1">
                                        <SwiperSlide>
                                            {/* <!-- Testimonial item --> */}
                                            <div class="item px-3 px-md-6">
                                                <div class="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i class="fas fa-quote-left"></i></div>
                                                <div class="avatar"><img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" /></div>
                                                <p class="lead">The good gathering doesn't bearing day Stars over Open behold May male tree replenish don't blessed beast days earth fifth let multiply and he every blessed to upon behold grass divided brought was that dry I Were image waters own bring light subdue Meat</p>
                                                <h6 class="mb-0 mt-3">Vivek Suryvanshi</h6>
                                                <span class="small">Software Developer</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* <!-- Testimonial item --> */}
                                            <div class="item px-3 px-md-6">
                                                <div class="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i class="fas fa-quote-left"></i></div>
                                                <div class="avatar"><img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" /></div>
                                                <p class="lead">Two before narrow not relied how except moment myself Dejection assurance mrs led certainly So gate at no only none open Betrayed at properly it of graceful on Dinner abroad am depart ye turned hearts as me wished Therefore allowance.</p>
                                                <h6 class="mb-0 mt-3">Pradhuman Agrawal</h6>
                                                <span class="small">Jr. Developer</span>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* <!-- Testimonial item --> */}
                                            <div class="item px-3 px-md-6">
                                                <div class="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i class="fas fa-quote-left"></i></div>
                                                <div class="avatar"><img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" /></div>
                                                <p class="lead">How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask style Me mean able my by in they Extremity now strangers contained breakfast him discourse additions.</p>
                                                <h6 class="mb-0 mt-3">Anas Sheikh</h6>
                                                <span class="small">Jr. Developer</span>
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



{/* <!-- ================Testimonials START =========--> */ }




{/* <!-- ================Testimonials END ============--> */ }