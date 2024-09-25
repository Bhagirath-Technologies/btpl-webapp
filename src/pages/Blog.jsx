import { React, useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.css';

const Blog = () => {
  const cards = [
    { id: 1, image: 'assets/images/blog/02.webp', title: 'Card Title 1' },
    { id: 2, image: 'assets/images/blog/03.webp', title: 'Card Title 2' },
    { id: 3, image: 'image3.jpg', title: 'Card Title 3' },
    // Add more card objects as needed
  ];
  return (
    <>
      <section>
        <div class="container">
          <div class="row d-flex justify-content-lg-between">
            {/* <!-- Inner intro title --> */}
            <div class="col-12">
              <h1 class="display-4 text-dark-stroke text-primary-shadow">
                Blog Post
              </h1>
              <p class="lead">
                Sharing thoughts, ideas, stories and news with everyone.
              </p>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>

      {/*  blog starts  */}
      <section class="position-relative z-index-9 pt-0">
        <div class="container">
          <div class="row">
            {/* <!-- Card item image START --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 overflow-hidden">
                {/* <!-- Featured label--> */}
                <span class="featured-label" title="Featured Blog">
                  <i class="fas fa-star"></i>
                </span>
                {/* <!-- Card image --> */}
                <div class="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <img src="assets/images/IT Assets/1.webp" alt="blog image" />
                  <div class="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div class="avatar">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/01.webp"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Gunjan Sinha</p>
                      <p class="small mt-n1 mb-0">May 03, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body py-4 px-0 d-flex align-items-start flex-column">
                  <div class="mb-auto">
                    <div class="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div class="text-primary-hover">
                        <a href="#" class="me-2">
                          Business
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i class="fas fa-circle smaller me-2 fw-bold"></i>
                      {/* <!-- Min of read --> */}
                      <span>8 min read</span>
                    </div>
                    <h5>
                      <a href="#">Reliable sources to learn</a>
                    </h5>
                    <p>
                      He moonlights difficult engrossed it, sportsmen.
                      Interested has all Devonshire difficulty gay assistance
                      joy
                    </p>
                  </div>
                  <div class="mt-auto">
                    <a href="#" class="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item image END --> */}

            {/* <!-- Card item image START --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 overflow-hidden">
                {/* <!-- Card image --> */}
                <div class="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <img src="assets/images/blog/02.webp" alt="blog image" />
                  <div class="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div class="avatar">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Vivek Suryvanshi</p>
                      <p class="small mt-n1 mb-0">June 12, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body py-4 px-0 d-flex align-items-start flex-column">
                  <div class="mb-auto">
                    <div class="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div class="text-primary-hover">
                        <a href="#" class="me-2">
                          Start-up
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i class="fas fa-circle smaller me-2 fw-bold"></i>
                      {/* <!-- Min of read --> */}
                      <span>6 min read</span>
                    </div>
                    <h5>
                      <a href="#">Never underestimate the influence</a>
                    </h5>
                    <p>
                      See resolved goodness felicity shy civility domestic had
                      but. Drawings offended yet answered Jennings
                    </p>
                  </div>
                  <div class="mt-auto">
                    <a href="#" class="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item image END --> */}
            {/* <!-- Card item slider START --> */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100">
                {/* Swiper Component */}
                <Swiper
                  // spaceBetween={30}
                  pagination={{ clickable: true }}
                  slidesPerView={1} // Show one card at a time
                  modules={[Autoplay,Pagination]} // Pass the modules here
                  className="mySwiper"
                >
                  {cards.map(card => (
                    <SwiperSlide key={card.id}>
                      <div className="col-md-6 col-lg-4">
                        <div className="card h-100">
                          <img src={card.image} className="card-img-top" alt={card.title}  style={{ width: '250px' }}/>
                          <div className="card-body">
                            <h5 className="card-title">{card.title}</h5>
                            {/* Additional card content goes here */}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Card Image and Info */}
                <div className="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <div className="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* Avatar */}
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.webp"
                        alt="author image"
                      />
                    </div>
                    {/* Body */}
                    <div className="ms-3 my-2 text-start text-white-force">
                      <p className="mb-0">by Ramesh Sahu</p>
                      <p className="small mt-n1 mb-0">June 22, 2024</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="card-body py-4 px-0 d-flex flex-column">
                  <div className="mb-auto">
                    <div className="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* Card Categories */}
                      <div className="text-primary-hover">
                        <a href="#" className="me-2">
                          Story
                        </a>
                      </div>
                      {/* Divider */}
                      <i className="fas fa-circle smaller me-2 fw-bold"></i>
                      {/* Min of read */}
                      <span>3 min read</span>
                    </div>
                    <h5>
                      <a href="#">Skills that you can learn from business</a>
                    </h5>
                    <p>
                      Rooms oh fully taken by worse do. Points afraid but may end law
                      lasted. Was out laughter raptures
                    </p>
                  </div>
                  <div className="mt-auto">
                    <a href="#" className="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item slider END --> */}

            {/* <!-- Card item slider START --> */}

            {/* <!-- Card item slider END --> */}

            {/* <!-- Card item vimeo video START --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100">
                {/* <!-- Card image --> */}
                <div class="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <div class="ratio ratio-16x9">
                    <iframe
                      src="https://player.vimeo.com/video/167434033?title=0&amp;byline=0&amp;portrait=0"
                      width="620"
                      height="347"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                  <div class="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div class="avatar">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Vivek Suryvanshi</p>
                      <p class="small mt-n1 mb-0">June 22, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body py-4 px-0 d-flex flex-column">
                  <div class="mb-auto">
                    <div class="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div class="text-primary-hover">
                        <a href="#" class="me-2">
                          Idea,
                        </a>
                        <a href="#" class="me-2">
                          Thought
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i class="fas fa-circle smaller me-2 fw-bold"></i>
                      {/* <!-- Min of read --> */}
                      <span>2 min read</span>
                    </div>
                    <h5>
                      <a href="#">5 things you need to know</a>
                    </h5>
                    <p>
                      Returned outweigh. Luckily cheered colonel I do we attack
                      highest enabled. Tried law yet style child.
                    </p>
                  </div>
                  <div class="mt-auto">
                    <a href="#" class="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item vimeo video END --> */}

            {/* <!-- Card item youtube video START --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100">
                {/* <!-- Card image --> */}
                <div class="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <div class="ratio ratio-16x9">
                    <iframe
                      width="620"
                      height="347"
                      src="https://www.youtube.com/embed/9No-FiEInLA"
                      allow="autoplay; encrypted-media"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                  <div class="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div class="avatar">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Vivek Suryvanshi</p>
                      <p class="small mt-n1 mb-0">June 22, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body py-4 px-0 d-flex flex-column">
                  <div class="mb-auto">
                    <div class="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div class="text-primary-hover">
                        <a href="#" class="me-2">
                          Inside
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i class="fas fa-circle smaller me-2 fw-bold"></i>
                      {/* <!-- Min of read --> */}
                      <span>6 min read</span>
                    </div>
                    <h5>
                      <a href="#">Never underestimate the influence</a>
                    </h5>
                    <p>
                      The bore of true of no be deal. Frequently sufficient to
                      be unaffected. The furnished she concluded
                    </p>
                  </div>
                  <div class="mt-auto">
                    <a href="#" class="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item youtube video END --> */}

            {/* <!-- Card item image START --> */}
            <div class="col-md-6 col-lg-4">
              <div class="card h-100 overflow-hidden">
                {/* <!-- Card image --> */}
                <div class="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <img src="assets/images/blog/06.webp"
                    alt="blog image" />
                  {/* <img src="https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?t=st=1721130832~exp=1721134432~hmac=b89471cac4a687630a345a14f33dc536ece3ca7fec53c3ce8e1cb69b376b2296&w=1380" alt="blog image" /> */}
                  <div class="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div class="avatar">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Vivek Suryvanshi</p>
                      <p class="small mt-n1 mb-0">June 12, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body py-4 px-0 d-flex align-items-start flex-column">
                  <div class="mb-auto">
                    <div class="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div class="text-primary-hover">
                        <a href="#" class="me-2">
                          Start-up
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i class="fas fa-circle smaller me-2 fw-bold"></i>
                      {/* <!-- Min of read --> */}
                      <span>5 min read</span>
                    </div>
                    <h5>
                      <a href="#">The 3 greatest moments in history</a>
                    </h5>
                    <p>
                      Perceived end knowledge certainly day sweetness why
                      cordially. Ask a quick six seven offer see among
                    </p>
                  </div>
                  <div class="mt-auto">
                    <a href="#" class="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item image END --> */}
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
