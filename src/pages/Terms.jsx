import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
const Terms = () => {
  return (
    <>
      <Helmet>
        <title>Bhagirath Technologies | Terms and Conditions </title>
        <meta name="description"
          content="Read Bhagirath Technologies' Terms and Conditions to understand the guidelines, policies, and rules governing the use of our website." />
        <meta name="keywords" content="Bhagirath Technologies, Terms and Conditions, website policies, guidelines, rules." />
      </Helmet>
      <section className="bg-dark pattern-overlay-1 position-relative text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Title --> */}
              <h1 className="text-white-stroke display-5">Terms and Conditions</h1>
              <p className="lead">
                By accessing and using this site, you agree to the following
                terms and conditions:
              </p>
              {/* <!-- Breadcrumb --> */}
              <nav className="d-flex justify-content-center">
                <ol className="breadcrumb breadcrumb-dark">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Terms and Conditions</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-3">
        <div className="container">
          <div className="row justify-content-between">
            {/* <!-- Left START --> */}
            <div className="col-md-8 col-lg-7 mb-5">
              {/* <!-- General FAQ START --> */}
              <h3 className="mb-4">Please Read Carefully</h3>
              <div className="accordion accordion-icon" id="accordiongeneralfaq">
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-1">
                    <button
                      className="accordion-button fw-bold"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="true"
                      aria-controls="collapse-1"
                    >
                      All content on this site...
                    </button>
                  </h5>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse show"
                    aria-labelledby="heading-1"
                    data-bs-parent="#accordiongeneralfaq"
                    style={{}}
                  >
                    <div className="accordion-body">
                      All content on this site, including text and images, is the property of Bhagirath Technology Private Limited (BTPL), unless otherwise stated.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-2">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      No part of this site may be copied...
                    </button>
                  </h5>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      No part of this site may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed without prior written consent from BTPL.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-3">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-3"
                      aria-expanded="false"
                      aria-controls="collapse-3"
                    >
                      The information provided on this site...
                    </button>
                  </h5>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      The information provided on this site is for informational purposes only and does not create a business relationship between you and BTPL.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-4">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-4"
                      aria-expanded="false"
                      aria-controls="collapse-4"
                    >
                      Links on this site may lead...
                    </button>
                  </h5>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-4"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      Links on this site may lead to services or sites not operated by BTPL, and we take no responsibility for such sites or services.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-5">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-5"
                      aria-expanded="false"
                      aria-controls="collapse-5"
                    >
                      This site and its contents...
                    </button>
                  </h5>
                  <div
                    id="collapse-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      This site and its contents are provided "as is," and BTPL makes no representation or warranty of any kind.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-6">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-6"
                      aria-expanded="false"
                      aria-controls="collapse-6"
                    >
                      BTPL disclaims all express...
                    </button>
                  </h5>
                  <div
                    id="collapse-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-6"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      BTPL disclaims all express and implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- General FAQ END --> */}

              {/* <!-- Membership and trials START --> */}
              <h3 className="mb-4 mt-5">Also read this below</h3>
              <div className="accordion accordion-icon" id="accordionmemberfaq">
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-10">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-10"
                      aria-expanded="false"
                      aria-controls="collapse-10"
                    >
                      In no event will BTPL...
                    </button>
                  </h5>
                  <div
                    id="collapse-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-10"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div className="accordion-body">
                      In no event will BTPL or its third-party service providers be liable for any damages arising out of or in connection with this site.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-11">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-11"
                      aria-expanded="false"
                      aria-controls="collapse-11"
                    >
                      This site is governed by the laws...
                    </button>
                  </h5>
                  <div
                    id="collapse-11"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-11"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div className="accordion-body">
                      <p>
                        This site is governed by the laws of India, and any legal action or proceeding relating to this site shall be subject to these laws.
                      </p>

                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-12">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-12"
                      aria-expanded="false"
                      aria-controls="collapse-12"
                    >
                      You are responsible for complying...
                    </button>
                  </h5>
                  <div
                    id="collapse-12"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-12"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div className="accordion-body">
                      You are responsible for complying with the laws of the jurisdiction from which you access this site.
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h5 className="accordion-header" id="heading-13">
                    <button
                      className="accordion-button fw-bold collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-13"
                      aria-expanded="false"
                      aria-controls="collapse-13"
                    >
                      Any information submitted...
                    </button>
                  </h5>
                  <div
                    id="collapse-13"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-13"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div className="accordion-body">
                      Any information submitted through this site is deemed non-confidential and non-proprietary, and you agree that BTPL may use such information freely.
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Membership and trials END --> */}
            </div>
            {/* <!-- Left END --> */}

            {/* <!-- Right START --> */}
            <div className="col-md-4">
              <h4 className="mb-5">Needed more help and support? Check these</h4>
              {/* <!-- Call --> */}
              <div className="mb-4 d-flex">
                <div className="text-primary display-8 me-3">
                  <i className="bi bi-headset fa-fw"></i>
                </div>
                <div>
                  <h6>
                    <Link to="tel:+918982301484">+918982301484</Link>
                  </h6>
                  <p>
                    Call us on above number to get quick solution.{" "}
                    <small className="d-block">
                      <span className="text-danger">*</span> Additional charges may
                      apply
                    </small>
                  </p>
                </div>
              </div>

              {/* <!-- Skype --> */}
              <div className="mb-4 d-flex">
                <div className="text-primary display-8 me-3">
                  <i className="bi bi-chat-left-text fa-fw"></i>
                </div>
                <div>
                  <h6>
                    <Link to="#">Raise Ticket</Link>
                  </h6>
                  <p>
                    If you have technical questions, chat live with developers
                    in our Skype chat
                  </p>
                </div>
              </div>

              {/* <!-- Email --> */}
              <div className="mb-4 d-flex">
                <div className="text-primary display-8 me-3">
                  <i className="bi bi-envelope fa-fw"></i>
                </div>
                <div>
                  <h6>
                    <Link to="mailto:info@bhagirathtechnologies.com">info@bhagirathtechnologies.com</Link>
                  </h6>
                  <p>
                    For general queries and questions including partnership
                    opportunities
                  </p>
                </div>
              </div>

              {/* <!-- Live chat --> */}
              <div className="mb-4 d-flex">
                <div className="text-primary display-8 me-3">
                  <i className="bi bi-person-plus fa-fw"></i>
                </div>
                <div>
                  <h6>
                    <Link to="#">bhagirathtechnologies.com</Link>
                  </h6>
                  <p>
                    Careers &amp; Press related queries please email us at above
                    address
                  </p>
                </div>
              </div>
            </div>
            {/* <!-- Right END --> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Terms;
