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

export default function App() {
    return (
        <>
            {/* <!-- Banner START --> */}
            <div class="tiny-slider dots-white dots-bordered dots-end arrow-bordered arrow-large arrow-round arrow-start-bottom arrow-md-none">
                <div class="tiny-slider-inner h-500 h-sm-700 h-xl-900" data-autoplay="true" data-autoplaytime="7000" data-gutter="0" data-arrow="true" data-dots="true" data-items="1">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            {/* <!-- Slide 1 START --> */}
                            <div class="h-100 bg-dark-overlay-4 bg-dark" style={{
                                backgroundImage: 'url("assets/images/bg/01.jpg")',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover'
                            }}>
                                <div class="container h-100">
                                    <div class="row d-flex h-100">
                                        <div class="col-md-8 justify-content-center align-self-center align-items-start">
                                            <div class="slider-content text-start">
                                                <h5 class="animate__animated animate__fadeInUp animate__delay-1s text-white mb-1 mb-md-4">Branding, design and digital based</h5>
                                                <h2 class="display-1 text-white-stroke text-primary-shadow d-block animate__animated animate__fadeInUp animate__delay-2s">Agency</h2>
                                                <p class="animate__animated animate__fadeInUp animate__delay-3s lead text-white">We're digital creative agency. We help our customers better manage their web presence in order to achieve greater success online.</p>
                                                <div class="animate__animated animate__fadeInUp mt-4 animate__delay-4s"><Link to="#" class="btn btn-line text-white">How it works</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Slide 1 END --> */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* <!-- Slide 2 START --> */}
                            <div class="h-100 bg-dark-overlay-4 bg-white" style={{
                                backgroundImage: 'url("assets/images/bg/02.jpg")',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover'
                            }}>
                                <div class="container h-100">
                                    <div class="row d-flex h-100">
                                        <div class="col-md-8 justify-content-center align-self-center align-items-start">
                                            <div class="slider-content text-start">
                                                <h5 class="animate__animated animate__fadeInUp animate__delay-1s text-white mt-2 my-md-4">Folio digital Agency</h5>
                                                <h2 class="animate__animated animate__fadeInUp animate__delay-2s display-4 fw-bold text-white"><span class="text-white-stroke text-primary-shadow d-block">Creating Real</span>Business Value</h2>
                                                <p class="animate__animated animate__fadeInUp animate__delay-3s lead text-white d-none d-sm-block">We transform your perception into an excellent website</p>
                                                <div class="animate__animated animate__fadeInUp animate__delay-4s mt-3"><Link to="#" class="btn btn-primary">Discuss a Project</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Slide 2 END --> */}
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    );
}
