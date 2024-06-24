import React from "react";

const Blog = () => {
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
                        src="assets/images/avatar/01.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Allen Maxwell</p>
                      <p class="small mt-n1 mb-0">May 03, 2021</p>
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
                      <a href="#">Reliable sources to learn about folio</a>
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
                  <img src="assets/images/bg/02.webp" alt="blog image" />
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
                      <p class="mb-0">by Bryan Knight</p>
                      <p class="small mt-n1 mb-0">June 12, 2021</p>
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
                      <a href="#">Never underestimate the influence of folio</a>
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
            <div class="col-md-6 col-lg-4">
              <div class="card h-100">
                {/* <!-- Card image --> */}
                <div class="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <div class="tiny-slider arrow-dark">
                    <div class="tns-outer" id="tns1-ow">
                      <div
                        class="tns-liveregion tns-visually-hidden"
                        aria-live="polite"
                        aria-atomic="true"
                      >
                        slide <span class="current">2</span> of 2
                      </div>
                      <div id="tns1-mw" class="tns-ovh">
                        <div class="tns-inner" id="tns1-iw">
                          <div
                            class="tiny-slider-inner  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                            data-arrow="true"
                            data-rewind="true"
                            data-dots="false"
                            data-items="1"
                            id="tns1"
                            style={{ transform: "translate3d(-50%, 0px, 0px)" }}
                          >
                            <div
                              class="item tns-item"
                              id="tns1-item0"
                              aria-hidden="true"
                              tabindex="-1"
                            >
                              <img src="assets/images/bg/01.webp" alt="" />
                            </div>
                            <div
                              class="item tns-item tns-slide-active"
                              id="tns1-item1"
                            >
                              <img src="assets/images/bg/02.webp" alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="tns-controls"
                        aria-label="Carousel Navigation"
                        tabindex="0"
                      >
                        <button
                          type="button"
                          data-controls="prev"
                          tabindex="-1"
                          aria-controls="tns1"
                        >
                          <i class="fas fa-chevron-left"></i>
                        </button>
                        <button
                          type="button"
                          data-controls="next"
                          tabindex="-1"
                          aria-controls="tns1"
                        >
                          <i class="fas fa-chevron-right"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div class="avatar">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/01.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Jessica Mores</p>
                      <p class="small mt-n1 mb-0">June 22, 2020</p>
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
                          Story
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i class="fas fa-circle smaller me-2 fw-bold"></i>
                      {/* <!-- Min of read --> */}
                      <span>3 min read</span>
                    </div>
                    <h5>
                      <a href="#">Skills that you can learn from business</a>
                    </h5>
                    <p>
                      Rooms oh fully taken by worse do. Points afraid but may
                      end law lasted. Was out laughter raptures
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
                        src="assets/images/avatar/04.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Jessica Mores</p>
                      <p class="small mt-n1 mb-0">June 22, 2020</p>
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
                      <a href="#">5 things you need to know about folio</a>
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
                        src="assets/images/avatar/03.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Jessica Mores</p>
                      <p class="small mt-n1 mb-0">June 22, 2020</p>
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
                      <a href="#">Never underestimate the influence of folio</a>
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
                  <img src="assets/images/blog/grid/04.jpg" alt="blog image" />
                  <div class="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div class="avatar">
                      <img
                        class="avatar-img rounded-circle"
                        src="assets/images/avatar/04.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div class="ms-3 my-2 text-start text-white-force">
                      <p class="mb-0">by Bryan Knight</p>
                      <p class="small mt-n1 mb-0">June 12, 2020</p>
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
                      <a href="#">The 3 greatest moments in folio history</a>
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
