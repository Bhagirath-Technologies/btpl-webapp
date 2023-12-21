import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
import './servicecard.css'
// import required modules
import { EffectCards } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                autoplay={true}
                modules={[EffectCards]}
                className="ServiceCard"
            >
                <SwiperSlide>
                    <div class="col-12">
                        <div class="rbt-card variation-01 rbt-hover">
                            <div class="rbt-card-img">
                                <a
                                    href="https://www.talentspiral.com/courses/certification-course-in-hr"
                                ><img
                                        loading="lazy"
                                        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?w=1060&t=st=1703148317~exp=1703148917~hmac=78f60c8485d8072d88a2cb077cd347732717fbf6c3e829d946d812fb6eaa0fce"
                                        alt="Card image"
                                    />
                                    <div class="rbt-badge-3 bg-white">
                                        <span>-50%</span><span>Off</span>
                                    </div></a>
                            </div>
                            <div class="rbt-card-body">
                                <div class="rbt-card-top">
                                    <div class="rbt-review">
                                        <div class="rating">
                                            <i class="fas fa-star"></i><i class="fas fa-star"></i
                                            ><i class="fas fa-star"></i><i class="fas fa-star"></i
                                            ><i class="fas fa-star"></i>
                                        </div>
                                        <span class="rating-count">(15 Reviews)</span>
                                    </div>
                                    <div class="rbt-bookmark-btn">
                                        <a
                                            class="rbt-round-btn"
                                            title="Bookmark"
                                            href="https://www.talentspiral.com/courses/certification-course-in-hr"
                                        ><i class="feather-bookmark"></i
                                        ></a>
                                    </div>
                                </div>
                                <h4 class="rbt-card-title">
                                    <a
                                        href="https://www.talentspiral.com/courses/certification-course-in-hr"
                                    >Revolutionize Your Website Design</a
                                    >
                                </h4>
                                <ul class="rbt-meta">
                                    <li><i class="feather-book"></i>Customized Development</li>
                                    <li><i class="feather-users"></i>Seamless Launch</li>
                                </ul>
                                <div style={{ paddingTop: '1rem' }}>
                                    <div>
                                        <i
                                            class="fa-fw fas fa-user"
                                            style={{ color: '#DC3545' }}
                                            aria-hidden="true"
                                        ></i
                                        ><span class="sm_font text-dark">Trusted By 100+ Clients</span>
                                    </div>
                                    <div>
                                        <i
                                            class="fa-fw fas fa-bookmark"
                                            style={{ color: '#198754' }}
                                            aria-hidden="true"
                                        ></i
                                        ><span class="sm_font text-dark"
                                        >100% Full Service Assistance</span
                                        >
                                    </div>
                                    <div>
                                        <i
                                            class="fa-fw fas fa-robot"
                                            style={{ color: '#0053C7' }}
                                            aria-hidden="true"
                                        ></i
                                        ><span class="sm_font text-dark"
                                        >18+ TOOLS & RESOURCES</span
                                        >
                                    </div>
                                </div>
                                <div class="rbt-card-bottom mt-3">
                                    <div class="rbt-price">
                                        <button>
                                            <a
                                                class="rbt-btn btn-gradient hover-icon-reverse"
                                                href="https://pages.razorpay.com/pl_M2cdt50GxwvTno/view"
                                                target="_blank"
                                                style={{ height: '35px', lineHeight: '35px' }}
                                            ><span class="icon-reverse-wrapper"
                                            ><span class="btn-text">Contact Now</span
                                            ><span class="btn-icon"
                                            ><i class="feather-arrow-right"></i></span
                                                    ><span class="btn-icon"
                                                    ><i class="feather-arrow-right"></i></span></span
                                                ></a>
                                        </button>
                                    </div>
                                    <a
                                        class="rbt-btn-link"
                                        href="https://www.talentspiral.com/courses/certification-course-in-hr"
                                    >View Details<i class="feather-arrow-right"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="col-12">
                        <div class="rbt-card variation-01 rbt-hover">
                            <div class="rbt-card-img">
                                <a
                                    href="https://www.talentspiral.com/courses/certification-course-in-hr"
                                ><img
                                        loading="lazy"
                                        src="https://img.freepik.com/free-photo/person-front-computer-working-html_23-2150040428.jpg?w=1060&t=st=1703148317~exp=1703148917~hmac=78f60c8485d8072d88a2cb077cd347732717fbf6c3e829d946d812fb6eaa0fce"
                                        alt="Card image"
                                    />
                                    <div class="rbt-badge-3 bg-white">
                                        <span>-50%</span><span>Off</span>
                                    </div></a
                                >
                            </div>
                            <div class="rbt-card-body">
                                <div class="rbt-card-top">
                                    <div class="rbt-review">
                                        <div class="rating">
                                            <i class="fas fa-star"></i><i class="fas fa-star"></i
                                            ><i class="fas fa-star"></i><i class="fas fa-star"></i
                                            ><i class="fas fa-star"></i>
                                        </div>
                                        <span class="rating-count">(15 Reviews)</span>
                                    </div>
                                    <div class="rbt-bookmark-btn">
                                        <a
                                            class="rbt-round-btn"
                                            title="Bookmark"
                                            href="https://www.talentspiral.com/courses/certification-course-in-hr"
                                        ><i class="feather-bookmark"></i
                                        ></a>
                                    </div>
                                </div>
                                <h4 class="rbt-card-title">
                                    <a
                                        href="https://www.talentspiral.com/courses/certification-course-in-hr"
                                    >Revolutionize Your Website Design</a
                                    >
                                </h4>
                                <ul class="rbt-meta">
                                    <li><i class="feather-book"></i>Customized Development</li>
                                    <li><i class="feather-users"></i>Seamless Launch</li>
                                </ul>
                                <div style={{ paddingTop: '1rem' }}>
                                    <div>
                                        <i
                                            class="fa-fw fas fa-user"
                                            style={{ color: '#DC3545' }}
                                            aria-hidden="true"
                                        ></i
                                        ><span class="sm_font text-dark">Trusted By 100+ Clients</span>
                                    </div>
                                    <div>
                                        <i
                                            class="fa-fw fas fa-bookmark"
                                            style={{ color: '#198754' }}
                                            aria-hidden="true"
                                        ></i
                                        ><span class="sm_font text-dark"
                                        >100% Full Service Assistance</span
                                        >
                                    </div>
                                    <div>
                                        <i
                                            class="fa-fw fas fa-robot"
                                            style={{ color: '#0053C7' }}
                                            aria-hidden="true"
                                        ></i
                                        ><span class="sm_font text-dark"
                                        >18+ TOOLS & RESOURCES</span
                                        >
                                    </div>
                                </div>
                                <div class="rbt-card-bottom mt-3">
                                    <div class="rbt-price">
                                        <button>
                                            <a
                                                class="rbt-btn btn-gradient hover-icon-reverse"
                                                href="https://pages.razorpay.com/pl_M2cdt50GxwvTno/view"
                                                target="_blank"
                                                style={{ height: '35px', lineHeight: '35px' }}
                                            ><span class="icon-reverse-wrapper"
                                            ><span class="btn-text">Contact Now</span><span class="btn-icon"
                                            ><i class="feather-arrow-right"></i></span><span class="btn-icon"
                                            ><i class="feather-arrow-right"></i></span></span
                                                ></a>
                                        </button>
                                    </div>
                                    <a
                                        class="rbt-btn-link"
                                        href="https://www.talentspiral.com/courses/certification-course-in-hr"
                                    >View Details<i class="feather-arrow-right"></i
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
