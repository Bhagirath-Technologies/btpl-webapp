import React from "react";
import { Helmet } from "react-helmet";

const Notfound = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found</title>
        <meta name="description" content="this page does not exist" />
        <meta name="keywords" content="not found" />
        <meta property="og:title" content="Not Found" />
        <meta property="og:site_name" content="Not Found" />
        <meta property="og:url" content="Not Found" />
        <meta property="og:description" content="Not Found" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="Not Found" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Not Found" />
        <meta name="twitter:description" content="Not Found" />
        <meta name="twitter:image" content="Not Found" />
      </Helmet>
      <section className="text-center">
        <div className="container">
          <div className="row">
            {/* <!-- Inner intro title --> */}
            <div className="col-12 my-5">
              <h1 className="display-2 text-dark-stroke text-primary-shadow">
                404!
              </h1>
              <h3>Page Not Found</h3>
              <p>Oops! The page you are looking for, couldn't be found.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-light">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {/* <!-- item --> */}
            <div className="col-md-4 col-lg-3">
              <a
                href="index.html"
                className="bg-white d-block text-center p-3 mb-30 line-draw-animation"
              >
                <div className="line-draw-inner">
                  <span className="text-primary display-8">
                    <i className="bi bi-house"></i>
                  </span>
                  <h5 className="my-2">Back to home</h5>
                </div>
              </a>
            </div>
            {/* <!-- item --> */}
            <div className="col-md-4 col-lg-3">
              <a
                href="portfolio-classic-grid-3-col.html"
                className="bg-white d-block text-center p-3 mb-30 line-draw-animation"
              >
                <div className="line-draw-inner">
                  <span className="text-primary display-8">
                    <i className="bi bi-briefcase"></i>
                  </span>
                  <h5 className="my-2">View our work</h5>
                </div>
              </a>
            </div>
            {/* <!-- item --> */}
            <div className="col-md-4 col-lg-3">
              <a
                href="contact.html"
                className="bg-white d-block text-center p-3 mb-30 line-draw-animation"
              >
                <div className="line-draw-inner">
                  <span className="text-primary display-8">
                    <i className="bi bi-info-square"></i>
                  </span>
                  <h5 className="my-2">Contact us</h5>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Notfound;
