import React from "react";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <section className="bg-dark pattern-overlay-1 position-relative text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Title --> */}
              <h1 className="text-white-stroke display-5">Contact</h1>
              <p className="lead">Happy to hear from you</p>
              {/* <!-- Breadcrumb --> */}
              <nav className="d-flex justify-content-center">
                <ol className="breadcrumb breadcrumb-dark">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Contact</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-lg-between">
            <div className="col-md-5">
              {/* <iframe className="w-100 h-400 grayscale" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076684379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sin!4v1586000412513!5m2!1sen!2sin" height="500" style="border:0;" aria-hidden="false" tabindex="0"></iframe>	 */}
              <iframe
                className="w-100 h-400 grayscale"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117299.66199485942!2d77.3782504026026!3d23.25711350420762!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25fcea9c85591dad%3A0x8073a63bd087c91!2sBhagirath%20Technologies!5e0!3m2!1sen!2sin!4v1711706280189!5m2!1sen!2sin"
                width="600"
                height="500"
                style={{ border: 0 }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            {/* <!-- Title --> */}
            <div className="col-md-6 mt-5 mt-md-0">
              <h3>Contact us</h3>
              <p>
                Get in touch with us
              </p>
              {/* <!-- Form START --> */}
              <form
                className="contact-form form-line"
                id="contact-form"
                name="contactform"
                method="POST"
                action="assets/include/contact-action.php"
              >
                {/* <!-- Main form --> */}
                <div className="row">
                  <div className="col-md-6">
                    {/* <!-- name --> */}
                    <div className="mb-3 position-relative">
                      <input
                        required=""
                        id="con-name"
                        name="name"
                        type="text"
                        className="form-control"
                        placeholder="Name"
                      />
                      <span className="focus-border"></span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    {/* <!-- email --> */}
                    <div className="mb-3 position-relative">
                      <input
                        required=""
                        id="con-email"
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                      />
                      <span className="focus-border"></span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {/* <!-- Subject --> */}
                    <div className="mb-3 position-relative">
                      <input
                        required=""
                        id="con-subject"
                        name="subject"
                        type="text"
                        className="form-control"
                        placeholder="Subject"
                      />
                      <span className="focus-border"></span>
                    </div>
                  </div>
                  <div className="col-md-12">
                    {/* <!-- Message --> */}
                    <div className="mb-3 position-relative">
                      <textarea
                        required=""
                        id="con-message"
                        name="message"
                        cols="40"
                        rows="6"
                        className="form-control"
                        placeholder="Message"
                      ></textarea>
                      <span className="focus-border"></span>
                    </div>
                  </div>
                  {/* <!-- submit button --> */}
                  <div className="col-md-12 text-start">
                    <button className="btn btn-primary btn-line" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
    </>
  );
};

export default About;
