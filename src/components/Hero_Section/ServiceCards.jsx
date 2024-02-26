import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "./servicecard.css";
import { EffectCards, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
export default function App({ serviceDetail }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        autoplay={true}
        loop={true}
        modules={[EffectCards, Pagination]}
        className="ServiceCard"
        pagination={{
          clickable: true,
        }}
      >
        {serviceDetail.map((services) => {
          return (
            <>
              <SwiperSlide key={services.id}>
                <div className="col-12">
                  <div className="rbt-card variation-01 rbt-hover">
                    <div className="rbt-card-img">
                      <Link to="#">
                        <img
                          loading="lazy"
                          src={services.image}
                          alt="Service"
                        />
                        <div className="rbt-badge-3 bg-white">
                          <span>{services.discount}</span>
                          <span>Off</span>
                        </div>
                      </Link>
                    </div>
                    <div className="rbt-card-body">
                      <div className="rbt-card-top">
                        <div className="rbt-review">
                          <div className="rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                          </div>
                          <span className="rating-count">(15 Reviews)</span>
                        </div>
                        <div className="rbt-bookmark-btn">
                          <Link className="rbt-round-btn" title="Bookmark" to="#">
                            <i className="feather-bookmark"></i>
                          </Link>
                        </div>
                      </div>
                      <h4 className="rbt-card-title">
                        <Link to="#">{services.title}</Link>
                      </h4>
                      <ul className="rbt-meta">
                        <li>
                          <i className="fas fa-headset"></i>{services.desc[0]}
                        </li>
                        <li>
                          <i className="fas fa-rocket ps-1"></i>{services.desc[1]}
                        </li>
                      </ul>
                      <div style={{ paddingTop: "1rem" }}>
                        <div>
                          <i
                            className="fa-fw fas fa-user"
                            style={{ color: "#DC3545" }}
                            aria-hidden="true"
                          ></i>
                          <span className="sm_font text-dark">
                            {services.properties[0]}
                          </span>
                        </div>
                        <div>
                          <i
                            className="fa-fw fas fa-bookmark"
                            style={{ color: "#198754" }}
                            aria-hidden="true"
                          ></i>
                          <span className="sm_font text-dark">
                            {services.properties[1]}
                          </span>
                        </div>
                        <div>
                          <i className="fab fa-html5" style={{ color: "#ff4b00", fontSize: '16px', paddingLeft: "3px" }}
                            aria-hidden="true"></i>
                          <span className="sm_font text-dark">
                            {services.properties[2]}
                          </span>
                        </div>
                      </div>
                      <div className="rbt-card-bottom mt-3">
                        <div className="rbt-price">
                          <button>
                            <Link
                              className="rbt-btn btn-gradient hover-icon-reverse"
                              to="#"
                              target="_blank"
                              style={{ height: "35px", lineHeight: "35px" }}
                            >
                              <span className="icon-reverse-wrapper">
                                <span className="btn-text">Contact Now</span>
                                <span className="btn-icon">
                                  <i className="fas fa-arrow-right"></i>
                                </span>
                              </span>
                            </Link>
                          </button>
                        </div>
                        <Link className="rbt-btn-link" to="#">
                          View Details<i className="fas fa-arrow-right ps-1"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </>
          )
        }
        )
        }
      </Swiper>
    </>
  );
}
