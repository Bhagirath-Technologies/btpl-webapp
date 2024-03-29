import React from "react";
import { Link } from 'react-router-dom';
const Policy = () => {
  return (
    <>
      <section class="bg-dark pattern-overlay-1 position-relative text-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/* <!-- Title --> */}
              <h1 class="text-white-stroke display-5">Privacy and Policy</h1>
              <p class="lead">
              Bhagirath Technology Private Limited (BTPL) is an IT services, consulting, and business solutions organization. We offer a comprehensive range of consulting-led, cognitive-powered services and solutions through our unique Location Independent Agile™ delivery model. As part of our operations, BTPL handles sensitive information, including personal data, which is vital to our business interests and those of our clients.
Our Security Vision is to ensure the reliability, resilience, and immunity of BTPL in the face of constant changes, accidents, attacks, and failures. This Security Policy reaffirms our commitment to safeguard all the information and assets entrusted to us, fostering an efficient, safe, and secure working environment for BTPL and its clients.

              </p>
              {/* <!-- Breadcrumb --> */}
              <nav class="d-flex justify-content-center">
                <ol class="breadcrumb breadcrumb-dark">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active">Privacy and Policy</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="pb-3">
        <div class="container">
          <div class="row justify-content-between">
            {/* <!-- Left START --> */}
            <div class="col-md-8 col-lg-7 mb-5">
              {/* <!-- General FAQ START --> */}
              <h3 class="mb-4">Please Read Carefully</h3>
              <div class="accordion accordion-icon" id="accordiongeneralfaq">
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-1">
                    <button
                      class="accordion-button fw-bold"
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
                    class="accordion-collapse collapse show"
                    aria-labelledby="heading-1"
                    data-bs-parent="#accordiongeneralfaq"
                    style={{}}
                  >
                    <div class="accordion-body">
                    Protect information and assets against unauthorized access by implementing robust security controls covering physical, logical, and personnel security.                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-2">
                    <button
                      class="accordion-button fw-bold collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    Ensure compliance with legal, statutory, and regulatory requirements across our global operations.                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-3">
                    <button
                      class="accordion-button fw-bold collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    Maintain business continuity aligned with our stakeholders' requirements and obligations.                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-4">
                    <button
                      class="accordion-button fw-bold collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-4"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    Embed security responsibilities across various departments and individuals to uphold this Policy.                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-5">
                    <button
                      class="accordion-button fw-bold collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    Foster security awareness and competence among all associates to fulfill their responsibilities effectively.                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-6">
                    <button
                      class="accordion-button fw-bold collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-6"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    Establish channels for associates and stakeholders to report security weaknesses, violations, or service disruptions.                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- General FAQ END --> */}

              {/* <!-- Membership and trials START --> */}
              <h3 class="mb-4 mt-5">Also read this below</h3>
              <div class="accordion accordion-icon" id="accordionmemberfaq">
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-10">
                    <button
                      class="accordion-button fw-bold collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-10"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                    Implement a robust response framework to address security incidents promptly and effectively.                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-11">
                    <button
                      class="accordion-button fw-bold collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-11"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                      <p>
                      Govern security performance against defined targets and objectives, facilitating continuous improvements.                      </p>
                     
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-12">
                    <button
                      class="accordion-button fw-bold collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-12"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                    This Policy will be supported by Standards, Procedures, and Guidelines constituting our Security Management System. It will be accessible to all stakeholders contributing to the implementation and enforcement of these security norms. The Security Management System will undergo periodic reviews to ensure its ongoing relevance and applicability to our operations and evolving stakeholder expectations.                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h5 class="accordion-header" id="heading-13">
                    <button
                      class="accordion-button fw-bold collapsed"
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
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-13"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                    This Policy extends to BTPL globally and its wholly-owned subsidiaries across all regions. It applies to all our associates, business partners, and external parties with access to our infrastructure, IT systems, and information resources. Consequences for violations or contraventions of this Policy will apply equally to all BTPL associates, subsidiaries, and external parties.                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Membership and trials END --> */}
            </div>
            {/* <!-- Left END --> */}

            {/* <!-- Right START --> */}
            <div class="col-md-4">
              <h4 class="mb-5">Needed more help and support? Check these</h4>
              {/* <!-- Call --> */}
              <div class="mb-4 d-flex">
                <div class="text-primary display-8 me-3">
                  <i class="bi bi-headset fa-fw"></i>
                </div>
                <div>
                  <h6>
                    <Link to="tel:+918982301484">+918982301484</Link>
                  </h6>
                  <p>
                    Call us on above number to get quick solution.{" "}
                    <small class="d-block">
                      <span class="text-danger">*</span> Additional charges may
                      apply
                    </small>
                  </p>
                </div>
              </div>

              {/* <!-- Skype --> */}
              <div class="mb-4 d-flex">
                <div class="text-primary display-8 me-3">
                  <i class="bi bi-chat-left-text fa-fw"></i>
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
              <div class="mb-4 d-flex">
                <div class="text-primary display-8 me-3">
                  <i class="bi bi-envelope fa-fw"></i>
                </div>
                <div>
                  <h6>
                    <Link to="#">info@bhagirathtechnologies.com</Link>
                  </h6>
                  <p>
                    For general queries and questions including partnership
                    opportunities
                  </p>
                </div>
              </div>

              {/* <!-- Live chat --> */}
              <div class="mb-4 d-flex">
                <div class="text-primary display-8 me-3">
                  <i class="bi bi-person-plus fa-fw"></i>
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

export default Policy;
