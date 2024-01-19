import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';

export default function App() {
    return (
        <>
            <section class="pt-4">
                <div class="container">
                    {/* <!-- Title --> */}
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-sm-8 mb-3">
                            <h2 class="display-5 mb-0 mb-sm-4 text-dark-stroke">Our Portfolio</h2>
                        </div>
                        <div class="col-sm-4 mb-4 text-start text-sm-end">
                            <Link to="#" class="btn btn-line text-dark mt-3">View our work</Link>
                        </div>
                    </div>

                    {/* <!-- Portfolio items --> */}
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tiny-slider dots-bordered">
                                <div class="tiny-slider-inner" data-arrow="false" data-dots="true" data-items-xl="3" data-items-lg="3" data-items-md="3" data-items-sm="2" data-items-xs="1">
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
                                            <div class="item">
                                                <Link to="#" class="card card-metro">
                                                    {/* <!-- Card Image --> */}
                                                    <div class="card-image">
                                                        <img src="assets/images/portfolio/01.jpg" alt="" />
                                                    </div>
                                                    {/* <!-- Card Overlay --> */}
                                                    <div class="card-img-overlay d-flex flex-column">
                                                        <img class="w-40" src="assets/images/clients/light/01.svg" alt="" />
                                                        <div class="mt-auto card-text">
                                                            <h5 class="text-white">The missing link in e-Mobility</h5>
                                                            <p class="small text-white mb-0 text-truncate">What hasn’t been a great fit in e-mobility until now.</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {/* <!-- Card item END --> */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* <!-- Card item START --> */}
                                            <div class="item">
                                                <Link to="#" class="card card-metro">
                                                    {/* <!-- Card Image --> */}
                                                    <div class="card-image">
                                                        <img src="assets/images/portfolio/02.jpg" alt="" />
                                                    </div>
                                                    {/* <!-- Card Overlay --> */}
                                                    <div class="card-img-overlay d-flex flex-column">
                                                        <img class="w-40" src="assets/images/clients/light/02.svg" alt="" />
                                                        <div class="mt-auto card-text">
                                                            <h5 class="text-white">Trumer brewed happiness</h5>
                                                            <p class="small text-white mb-0 text-truncate">Private brewery for excellent beer</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {/* <!-- Card item END --> */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* <!-- Card item START --> */}
                                            <div class="item">
                                                <Link to="#" class="card card-metro">
                                                    {/* <!-- Card Image --> */}
                                                    <div class="card-image">
                                                        <img src="assets/images/portfolio/03.jpg" alt="" />
                                                    </div>
                                                    {/* <!-- Card Overlay --> */}
                                                    <div class="card-img-overlay d-flex flex-column">
                                                        <img class="w-40" src="assets/images/clients/light/03.svg" alt="" />
                                                        <div class="mt-auto card-text">
                                                            <h5 class="text-white">Enticing like the ocean</h5>
                                                            <p class="small text-white mb-0 text-truncate">Viktoria Louise is the blossoming fashion label of Vicky Heiler</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {/* <!-- Card item END --> */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* <!-- Card item START --> */}
                                            <div class="item">
                                                <Link to="#" class="card card-metro">
                                                    {/* <!-- Card Image --> */}
                                                    <div class="card-image">
                                                        <img src="assets/images/portfolio/04.jpg" alt="" />
                                                    </div>
                                                    {/* <!-- Card Overlay --> */}
                                                    <div class="card-img-overlay d-flex flex-column">
                                                        <img class="w-40" src="assets/images/clients/light/04.svg" alt="" />
                                                        <div class="mt-auto card-text">
                                                            <h5 class="text-white">Pure design branding</h5>
                                                            <p class="small text-white mb-0 text-truncate">Art collector and architect Axel</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {/* <!-- Card item END --> */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                             {/* <!-- Card item START --> */}
                                        <div class="item">
                                            <Link to="#" class="card card-metro">
                                                {/* <!-- Card Image --> */}
                                                <div class="card-image">
                                                    <img src="assets/images/portfolio/05.jpg" alt="" />
                                                </div>
                                                {/* <!-- Card Overlay --> */}
                                                <div class="card-img-overlay d-flex flex-column">
                                                    <img class="w-40" src="assets/images/clients/light/05.svg" alt="" />
                                                    <div class="mt-auto card-text">
                                                        <h5 class="text-white">The missing link</h5>
                                                        <p class="small text-white mb-0 text-truncate">Small things that make difference</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                        {/* <!-- Card item END --> */}
                                        </SwiperSlide>
                                       
                                        <SwiperSlide>
                                            {/* <!-- Card item START --> */}
                                            <div class="item">
                                                <Link to="#" class="card card-metro">
                                                    {/* <!-- Card Image --> */}
                                                    <div class="card-image">
                                                        <img src="assets/images/portfolio/06.jpg" alt="" />
                                                    </div>
                                                    {/* <!-- Card Overlay --> */}
                                                    <div class="card-img-overlay d-flex flex-column">
                                                        <img class="w-40" src="assets/images/clients/light/06.svg" alt="" />
                                                        <div class="mt-auto card-text">
                                                            <h5 class="text-white">The blossoming fashion label </h5>
                                                            <p class="small text-white mb-0 text-truncate">These were the attributes that moodley had to convey.</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                            {/* <!-- Card item END --> */}
                                        </SwiperSlide>
                                        <SwiperSlide>
                                            {/* <!-- Card item START --> */}
                                            <div class="item">
                                                <Link to="#" class="card card-metro">
                                                    {/* <!-- Card Image --> */}
                                                    <div class="card-image">
                                                        <img src="assets/images/portfolio/07.jpg" alt="" />
                                                    </div>
                                                    {/* <!-- Card Overlay --> */}
                                                    <div class="card-img-overlay d-flex flex-column">
                                                        <img class="w-40" src="assets/images/clients/light/07.svg" alt="" />
                                                        <div class="mt-auto card-text">
                                                            <h5 class="text-white">Life's hard in the mountains</h5>
                                                            <p class="small text-white mb-0 text-truncate">Ten wineries with strong personalities, individual stories and multi-faceted wines</p>
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