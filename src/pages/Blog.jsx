import { React } from "react";
const Blog = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row d-flex justify-content-lg-between">
            {/* <!-- Inner intro title --> */}
            <div className="col-12">
              <h1 className="display-4 text-dark-stroke text-primary-shadow">
                Blog Post
              </h1>
              <p className="lead">
                Sharing thoughts, ideas, stories and news with everyone.
              </p>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>

      {/*  blog starts  */}
      <section className="position-relative z-index-9 pt-0">
        <div className="container">
          <div className="row">
            {/* <!-- Card item image START --> */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 overflow-hidden">
                {/* <!-- Featured label--> */}
                <span className="featured-label" title="Featured Blog">
                  <i className="fas fa-star"></i>
                </span>
                {/* <!-- Card image --> */}
                <div className="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <img src="assets/images/IT Assets/1.webp" alt="blog image" />
                  <div className="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/01.webp"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div className="ms-3 my-2 text-start text-white-force">
                      <p className="mb-0">by Gunjan Sinha</p>
                      <p className="small mt-n1 mb-0">May 03, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div className="card-body py-4 px-0 d-flex align-items-start flex-column">
                  <div className="mb-auto">
                    <div className="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div className="text-primary-hover">
                        <a href="#" className="me-2">
                          Business
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i className="fas fa-circle smaller me-2 fw-bold"></i>
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
                  <div className="mt-auto">
                    <a href="#" className="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item image END --> */}

            {/* <!-- Card item image START --> */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 overflow-hidden">
                {/* <!-- Card image --> */}
                <div className="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <img src="assets/images/blog/02.webp" alt="blog image" />
                  <div className="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div className="ms-3 my-2 text-start text-white-force">
                      <p className="mb-0">by Vivek Suryvanshi</p>
                      <p className="small mt-n1 mb-0">June 12, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div className="card-body py-4 px-0 d-flex align-items-start flex-column">
                  <div className="mb-auto">
                    <div className="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div className="text-primary-hover">
                        <a href="#" className="me-2">
                          Start-up
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i className="fas fa-circle smaller me-2 fw-bold"></i>
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
                  <div className="mt-auto">
                    <a href="#" className="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item image END --> */}
            {/* <!-- Card item image START --> */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100 overflow-hidden">
                {/* <!-- Card image --> */}
                <div className="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <img src="assets/images/blog/06.webp"
                    alt="blog image" />
                  {/* <img src="https://img.freepik.com/free-vector/ai-technology-microchip-background-vector-digital-transformation-concept_53876-117808.jpg?t=st=1721130832~exp=1721134432~hmac=b89471cac4a687630a345a14f33dc536ece3ca7fec53c3ce8e1cb69b376b2296&w=1380" alt="blog image" /> */}
                  <div className="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div className="ms-3 my-2 text-start text-white-force">
                      <p className="mb-0">by Vivek Suryvanshi</p>
                      <p className="small mt-n1 mb-0">June 12, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div className="card-body py-4 px-0 d-flex align-items-start flex-column">
                  <div className="mb-auto">
                    <div className="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div className="text-primary-hover">
                        <a href="#" className="me-2">
                          Start-up
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i className="fas fa-circle smaller me-2 fw-bold"></i>
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
                  <div className="mt-auto">
                    <a href="#" className="btn text-dark btn-sm btn-line">
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
                <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img src="assets/images/blog/04.webp" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                      <img src="assets/images/blog/03.webp" className="d-block w-100" alt="..." />
                    </div>
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

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

            {/* <!-- Card item vimeo video START --> */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100">
                {/* <!-- Card image --> */}
                <div className="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <div className="ratio ratio-16x9">
                    <iframe
                      src="https://player.vimeo.com/video/167434033?title=0&amp;byline=0&amp;portrait=0"
                      width="620"
                      height="347"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                  <div className="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div className="ms-3 my-2 text-start text-white-force">
                      <p className="mb-0">by Vivek Suryvanshi</p>
                      <p className="small mt-n1 mb-0">June 22, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div className="card-body py-4 px-0 d-flex flex-column">
                  <div className="mb-auto">
                    <div className="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div className="text-primary-hover">
                        <a href="#" className="me-2">
                          Idea,
                        </a>
                        <a href="#" className="me-2">
                          Thought
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i className="fas fa-circle smaller me-2 fw-bold"></i>
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
                  <div className="mt-auto">
                    <a href="#" className="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item vimeo video END --> */}

            {/* <!-- Card item youtube video START --> */}
            <div className="col-md-6 col-lg-4">
              <div className="card h-100">
                {/* <!-- Card image --> */}
                <div className="card-img-top rounded overflow-hidden position-relative hover-overlay-top">
                  <div className="ratio ratio-16x9">
                    <iframe
                      width="620"
                      height="347"
                      src="https://www.youtube.com/embed/9No-FiEInLA"
                      allow="autoplay; encrypted-media"
                      allowfullscreen=""
                    ></iframe>
                  </div>
                  <div className="position-absolute top-0 m-4 d-flex card-element-hover">
                    {/* <!-- Avatar --> */}
                    <div className="avatar">
                      <img
                        className="avatar-img rounded-circle"
                        src="assets/images/avatar/02.jpg"
                        alt="author image"
                      />
                    </div>
                    {/* <!-- Body --> */}
                    <div className="ms-3 my-2 text-start text-white-force">
                      <p className="mb-0">by Vivek Suryvanshi</p>
                      <p className="small mt-n1 mb-0">June 22, 2024</p>
                    </div>
                  </div>
                </div>
                {/* <!-- Card Body --> */}
                <div className="card-body py-4 px-0 d-flex flex-column">
                  <div className="mb-auto">
                    <div className="card-meta mb-3 d-flex flex-row align-items-center">
                      {/* <!-- Card Categories --> */}
                      <div className="text-primary-hover">
                        <a href="#" className="me-2">
                          Inside
                        </a>
                      </div>
                      {/* <!-- Divider --> */}
                      <i className="fas fa-circle smaller me-2 fw-bold"></i>
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
                  <div className="mt-auto">
                    <a href="#" className="btn text-dark btn-sm btn-line">
                      Continue Reading
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Card item youtube video END --> */}
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
    </>
  );
};

export default Blog;
