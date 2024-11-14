// ServiceDetail.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const ServiceDetail = ({ data }) => {
  const { id } = useParams();

  // Find the service with the matching id
  const service = data.find((service) => service.id === id);
  // console.log(service);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Helmet>
        <title>Bhagirath Technologies | {service.title}</title>
        <meta name="description" content={service.content} />
        <meta name="keywords" content={service.keywords} />
      </Helmet>
      <section>
        <div className="container">
          <div className="row ">
            <div className="col-md-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to={`/${service.type}`}>{`${service.type}`}</Link>
                  </li>
                  <li className="breadcrumb-item active">{service.title}</li>
                </ol>
              </nav>
              <h2 className="display-6">{service.title}</h2>
              <p className="lead">{service.desc}</p>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>

      <section id={service.hashlinks} className="pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className="w-100" src={service.image} alt={service.title} />
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <h3>About {service.title}</h3>
              <p>{service.content}</p>
              <div className="row">
                {/* <!-- Features --> */}
                <div className="col-lg-6">
                  <ul className="list-group list-group-borderless list-group-icon-primary-bg">
                    <li className="list-group-item">
                      <i className="fas fa-check"></i>
                      {service.properties[0]}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-check"></i>
                      {service.properties[1]}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-check"></i>
                      {service.properties[2]}
                    </li>
                  </ul>
                </div>
                {/* <!-- Features --> */}
                <div className="col-lg-6">
                  <ul className="list-group list-group-borderless list-group-icon-primary-bg">
                    <li className="list-group-item">
                      <i className="fas fa-check"></i>
                      {service.properties[3]}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-check"></i>
                      {service.properties[4]}
                    </li>
                    <li className="list-group-item">
                      <i className="fas fa-check"></i>
                      {service.properties[5]}
                    </li>
                  </ul>
                </div>
              </div>
              <Link to="/contact" className="btn btn-dark btn-line mt-4">
                Book Now
              </Link>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
      {/* tools section starts */}
      {/* testing for cta form starts */}
      {/* <section class="position-relative pt-0">
        <div class="container bg-secondary-grad rounded-4 p-4 p-md-6 p-xxl-8">

          <div class="inner-container-small">
            <!-- Title -->
            <h1 class="fw-bold mb-2 lh-base text-center"><i class="bi bi-emoji-smile me-2"></i>Say
              <span class="cd-headline clip big-clip is-full-width text-primary-grad mb-0">
                <span class="typed" data-type-text="Hello&amp;&amp;Hola&amp;&amp;Ciao&amp;&amp;Bonjour">H</span><span class="ityped-cursor">|</span>
              </span>
            </h1>
            <p class="text-center">Have an idea, need advice, or just want to say hello? We’re all ears.</p>

            <!-- Form START -->
            <form class="row form-border-transparent g-3 mt-4">
              <div class="col-md-6">
                <label class="form-label">Your name</label>
                <input type="text" class="form-control" />
              </div>

              <div class="col-md-6">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" id="floatingInput" />
              </div>

              <div class="col-md-6">
                <label class="form-label">Mobile number</label>
                <input type="text" class="form-control" />
              </div>

              <div class="col-md-6">
                <label class="form-label">Subject</label>
                <input type="text" class="form-control" />
              </div>

              <div class="col-12">
                <label class="form-label">Message</label>
                <textarea class="form-control" id="floatingTextarea2" style={{ height: '100px' }}></textarea>
              </div>

              <div class="col-12">
                <!-- Check box -->
                <div class="form-check">
                  <input type="checkbox" class="form-check-input border" id="exampleCheck1" />
                  <label class="form-check-label" for="exampleCheck1">I agree that my data is <a href="#" class=" hover-underline-animation text-primary-hover">collected and stored</a>.</label>
                </div>
              </div>

              <div class="col-12 d-sm-flex align-items-center gap-3 mt-4">
                <!-- Button -->
                <button class="btn btn-primary mb-2 mb-md-0">Send a message</button>
                <!-- Social links -->
                <ul class="list-inline mb-0 ms-auto">
                  <li class="list-inline-item small heading-color">Connect with:</li>
                  <li class="list-inline-item"> <a href="#" class="heading-color text-primary-hover"><i class="bi bi-facebook"></i></a> </li>
                  <li class="list-inline-item"> <a href="#" class="heading-color text-primary-hover"><i class="bi bi-instagram"></i></a> </li>
                  <li class="list-inline-item"> <a href="#" class="heading-color text-primary-hover"><i class="bi bi-twitter-x"></i></a> </li>
                  <li class="list-inline-item"> <a href="#" class="heading-color text-primary-hover"><i class="bi bi-linkedin"></i></a> </li>
                </ul>
              </div>
            </form>
            <!-- Form END -->
          </div>
        </div>
      </section> */}
      {/* testing for cta form ends */}
      {/* Conditional rendering of tools section for web services */}
      {service.type === "services" && (
        <section class="pt-0">
          <div class="container">
            <div class="row">
              {/* <!-- Title --> */}
              <div class="col-lg-4">
                <h2 class="display-6 mb-3">Tools & Technologies We Use...</h2>
                <p>
                  Rooms oh fully taken by worse do. Points afraid but may end
                  law lasted. Was out laughter raptures returned outweigh.
                </p>
              </div>
              {/* <!-- Clients logos --> */}
              <div class="col-lg-8">
                <div class="row">
                  {/* <!-- Logo item --> */}
                  {service.icons.map((icon, index) => (
                    <div class="col-6 col-sm-4 col-lg-3">
                      <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                        <img key={index} src={icon} alt={`Icon ${index}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* <!-- row END --> */}
          </div>
        </section>
      )}
      {/* tools section ends */}

      <section className="pt-0">
        <div className="container">
          <div className="row">
            <h2 class="display-6 mb-3">Some Frequently Asked Question</h2>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="accordion accordion-icon" id="accordionExample2">
                <div className="accordion-item">
                  <h6 className="accordion-header" id="heading-1">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      What types of web and app development services do you
                      offer?
                    </button>
                  </h6>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-1"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <strong>Bhagirath Technologies Pvt Ltd</strong> provides a
                      wide range of web and app development services, including
                      custom websites, eCommerce platforms, mobile apps (iOS and
                      Android), and progressive web apps (PWAs). We tailor our
                      solutions to meet your business needs and goals.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h6 className="accordion-header" id="heading-2">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      Do you offer SEO services along with development?
                    </button>
                  </h6>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <strong>Yes, we offer comprehensive SEO services</strong>{" "}
                      as part of our development packages. This includes both
                      on-page and off-page SEO, technical SEO audits, content
                      optimization, and keyword research to help improve your
                      website's search engine rankings.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h6 className="accordion-header" id="heading-3">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      Can you handle both frontend and backend development?
                    </button>
                  </h6>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <strong>Absolutely!</strong> Our team specializes in both
                      frontend development (React, Angular, Vue) and backend
                      development (Node.js, Python, PHP). We build full-stack
                      solutions to ensure a seamless and efficient user
                      experience for your website or app.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <div className="accordion accordion-icon" id="accordionExample2">
                <div className="accordion-item">
                  <h6 className="accordion-header" id="heading-4">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      What is your approach to mobile app development?
                    </button>
                  </h6>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-4"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      We follow a<strong> user-centric</strong> We follow a
                      user-centric approach to mobile app development, ensuring
                      the apps are fast, secure, and responsive. Whether it's a
                      native or cross-platform app, we build it to be scalable
                      and aligned with your business goals.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h6 className="accordion-header" id="heading-5">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-5"
                      aria-expanded="false"
                      aria-controls="collapse-5"
                    >
                      What products are available for rental?
                    </button>
                  </h6>
                  <div
                    id="collapse-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <strong>
                        We offer a variety of products for rental,
                      </strong>{" "}
                      We offer a variety of products for rental, including
                      laptops, desktops, printers, and other peripherals.
                      Whether you need equipment for personal use or corporate
                      events, we have flexible rental plans that suit your
                      needs.
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h6 className="accordion-header" id="heading-6">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-6"
                      aria-expanded="false"
                      aria-controls="collapse-6"
                    >
                      How does your rental service work?
                    </button>
                  </h6>
                  <div
                    id="collapse-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-6"
                    data-bs-parent="#accordionExample2"
                  >
                    <div className="accordion-body">
                      <strong>
                        Our rental service is simple and hassle-free.
                      </strong>{" "}
                      You can select the products you need, choose the rental
                      duration, and we will deliver them to your location. We
                      also offer ongoing support to ensure that your rental
                      experience is smooth and seamless.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
