import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
const Policy = () => {
  return (
    <>
      <Helmet>
        <title>Bhagirath Technologies | Privacy Policy</title>
        <meta name="description"
          content="Explore Bhagirath Technologies Privacy Policy to understand how we collect, use, and protect your personal information." />
        <meta name="keywords" content="Bhagirath Technologies, Privacy Policy, personal information, data protection, online privacy" />
      </Helmet>
      <section className="bg-dark pattern-overlay-1 position-relative text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Title --> */}
              <h1 className="text-white-stroke display-5">Privacy and Policy</h1>
              <p className="lead">
                Bhagirath Technology Private Limited (BTPL) is an IT services, consulting, and business solutions organization. We offer a comprehensive range of consulting-led, cognitive-powered services and solutions through our unique Location Independent Agile™ delivery model. As part of our operations, BTPL handles sensitive information, including personal data, which is vital to our business interests and those of our clients.
                Our Security Vision is to ensure the reliability, resilience, and immunity of BTPL in the face of constant changes, accidents, attacks, and failures. This Security Policy reaffirms our commitment to safeguard all the information and assets entrusted to us, fostering an efficient, safe, and secure working environment for BTPL and its clients.

              </p>
              {/* <!-- Breadcrumb --> */}
              <nav className="d-flex justify-content-center">
                <ol className="breadcrumb breadcrumb-dark">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">Privacy and Policy</li>
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
                      Protect information and assets...
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
                      Protect information and assets against unauthorized access by implementing robust security controls covering physical, logical, and personnel security.                    </div>
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
                      Ensure compliance with legal...
                    </button>
                  </h5>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      Ensure compliance with legal, statutory, and regulatory requirements across our global operations.                    </div>
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
                      Maintain business continuity aligned...
                    </button>
                  </h5>
                  <div
                    id="collapse-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      Maintain business continuity aligned with our stakeholders' requirements and obligations.                    </div>
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
                      Embed security responsibilities...
                    </button>
                  </h5>
                  <div
                    id="collapse-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-4"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      Embed security responsibilities across various departments and individuals to uphold this Policy.                    </div>
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
                      Foster security awareness...
                    </button>
                  </h5>
                  <div
                    id="collapse-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      Foster security awareness and competence among all associates to fulfill their responsibilities effectively.                    </div>
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
                      Establish channels for associates...
                    </button>
                  </h5>
                  <div
                    id="collapse-6"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-6"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div className="accordion-body">
                      Establish channels for associates and stakeholders to report security weaknesses, violations, or service disruptions.                    </div>
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
                      Implement a robust response...
                    </button>
                  </h5>
                  <div
                    id="collapse-10"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-10"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div className="accordion-body">
                      Implement a robust response framework to address security incidents promptly and effectively.                    </div>
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
                      Govern security performance...
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
                        Govern security performance against defined targets and objectives, facilitating continuous improvements.                      </p>

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
                      This Policy will be supported by...
                    </button>
                  </h5>
                  <div
                    id="collapse-12"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-12"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div className="accordion-body">
                      This Policy will be supported by Standards, Procedures, and Guidelines constituting our Security Management System. It will be accessible to all stakeholders contributing to the implementation and enforcement of these security norms. The Security Management System will undergo periodic reviews to ensure its ongoing relevance and applicability to our operations and evolving stakeholder expectations.                    </div>
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
                      This Policy extends to...
                    </button>
                  </h5>
                  <div
                    id="collapse-13"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-13"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div className="accordion-body">
                      This Policy extends to BTPL globally and its wholly-owned subsidiaries across all regions. It applies to all our associates, business partners, and external parties with access to our infrastructure, IT systems, and information resources. Consequences for violations or contraventions of this Policy will apply equally to all BTPL associates, subsidiaries, and external parties.                    </div>
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
                    <Link to="/">bhagirathtechnologies.com</Link>
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

export default Policy;
