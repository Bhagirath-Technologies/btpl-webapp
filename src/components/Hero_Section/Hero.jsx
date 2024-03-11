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
            <div className="tiny-slider dots-white dots-bordered dots-end arrow-bordered arrow-large arrow-round arrow-start-bottom arrow-md-none">
                <div className="tiny-slider-inner h-500 h-sm-700 h-xl-900" data-autoplay="true" data-autoplaytime="7000" data-gutter="0" data-arrow="true" data-dots="true" data-items="1">
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
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            {/* <!-- Slide 1 START --> */}
                            <div className="h-100 bg-dark-overlay-4 bg-dark" style={{
                                backgroundImage: 'url("assets/images/bg/01.jpg")',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover'
                            }}>
                                <div className="container h-100">
                                    <div className="row d-flex h-100">
                                        <div className="col-md-8 justify-content-center align-self-center align-items-start">
                                            <div className="slider-content text-start">
                                                <h3 className="pt-xsm-6 animate__animated animate__fadeInUp animate__delay-3s text-white mb-1 mb-md-4" data-aos="fade-up" data-aos-duration="1000">Global IT Solutions</h3>
                                                {/* <h2 className="display-1 text-white-stroke text-primary-shadow d-block animate__animated animate__fadeInUp animate__delay-2s" data-aos="fade-up" data-aos-duration="2000" >Agency</h2> */}
                                                <h2 className="animate__animated animate__fadeInUp animate__delay-3s display-3 text-white-stroke text-primary-shadow" data-aos="fade-up" data-aos-duration="2000">
                                                    <span className="text-white-stroke text-primary-shadow">B</span><span className="text-white">eyond</span>
                                                    <span className="text-white-stroke text-primary-shadow"> T</span>
                                                    <span className="text-white">he</span>
                                                    <span className="text-white-stroke text-primary-shadow ">   P</span>
                                                    <span className="text-white">ossible</span>
                                                    <span className="text-white-stroke text-primary-shadow"> L</span>
                                                    <span className="text-white">imits</span>
                                                </h2>
                                                <p className="animate__animated animate__fadeInUp animate__delay-3s lead text-white" data-aos="fade-up" data-aos-duration="3000">In the world of technology, artificial intelligence, business, and beyond. BTPL serves as a guiding principle for those who dare to dream big and strive for greatness.</p>
                                                <div className="animate__animated animate__fadeInUp mt-4 animate__delay-4s" data-aos="fade-up" data-aos-duration="3500"><Link to="#" className="btn btn-line text-white">How it works</Link></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Slide 1 END --> */}
                        </SwiperSlide>
                        <SwiperSlide>
                            {/* <!-- Slide 2 START --> */}
                            <div className="h-100 bg-dark-overlay-4 bg-white" style={{
                                backgroundImage: 'url("assets/images/bg/02.jpg")',
                                backgroundPosition: 'center center',
                                backgroundSize: 'cover'
                            }}>
                                <div className="container h-100">
                                    <div className="row d-flex h-100">
                                        <div className="col-md-8 justify-content-center align-self-center align-items-start">
                                            <div className="slider-content text-start">
                                                <h5 className="pt-xsm-4 animate__animated animate__fadeInUp animate__delay-1s text-white mt-2 my-md-4" data-aos="fade-up" data-aos-duration="5000">Bhagirath Technologies</h5>
                                                <h2 className="animate__animated animate__fadeInUp animate__delay-2s display-4 text-white" data-aos="fade-up" data-aos-duration="6000"><span className="text-white-stroke text-primary-shadow d-block">Empower Business</span>Through Technology</h2>
                                                <p className="animate__animated animate__fadeInUp animate__delay-3s lead text-white d-none d-sm-block" data-aos="fade-up" data-aos-duration="7000">Maximize business potential through technology solutions, optimizing assets, and driving growth with business-focused services.</p>
                                                <div className="animate__animated animate__fadeInUp animate__delay-4s mt-3" data-aos="fade-up" data-aos-duration="8000"><Link to="#" className="btn btn-primary">Discuss a Project</Link></div>
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
