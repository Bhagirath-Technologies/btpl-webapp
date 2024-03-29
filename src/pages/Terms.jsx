import React from "react";
import { Link } from 'react-router-dom';
const Terms = () => {
  return (
    <>
      <section class="bg-dark pattern-overlay-1 position-relative text-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/* <!-- Title --> */}
              <h1 class="text-white-stroke display-5">Terms and Conditions</h1>
              <p class="lead">
                By accessing and using this site, you agree to the following
                terms and conditions:
              </p>
              {/* <!-- Breadcrumb --> */}
              <nav class="d-flex justify-content-center">
                <ol class="breadcrumb breadcrumb-dark">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active">Terms and Conditions</li>
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
                      All content on this site...
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
                    All content on this site, including text and images, is the property of Bhagirath Technology Private Limited (BTPL), unless otherwise stated.
                    </div>
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
                       No part of this site may be copied...
                    </button>
                  </h5>
                  <div
                    id="collapse-2"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    No part of this site may be copied, reproduced, republished, uploaded, posted, transmitted, or distributed without prior written consent from BTPL.
                    </div>
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
                      The information provided on this site...
                    </button>
                  </h5>
                  <div
                    id="collapse-3"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    The information provided on this site is for informational purposes only and does not create a business relationship between you and BTPL.
                    </div>
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
                      Links on this site may lead...
                    </button>
                  </h5>
                  <div
                    id="collapse-4"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-4"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    Links on this site may lead to services or sites not operated by BTPL, and we take no responsibility for such sites or services.
                    </div>
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
                      This site and its contents...
                    </button>
                  </h5>
                  <div
                    id="collapse-5"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    This site and its contents are provided "as is," and BTPL makes no representation or warranty of any kind.
                    </div>
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
                      BTPL disclaims all express...
                    </button>
                  </h5>
                  <div
                    id="collapse-6"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-6"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                    BTPL disclaims all express and implied warranties, including merchantability, fitness for a particular purpose, and non-infringement.
                    </div>
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
                      In no event will BTPL...
                    </button>
                  </h5>
                  <div
                    id="collapse-10"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-10"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                    In no event will BTPL or its third-party service providers be liable for any damages arising out of or in connection with this site.
                    </div>
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
                      This site is governed by the laws...
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
                      This site is governed by the laws of the State of Illinois, USA, and any legal action or proceeding relating to this site shall be subject to these laws.
                      </p>
                     
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
                      You are responsible for complying...
                    </button>
                  </h5>
                  <div
                    id="collapse-12"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-12"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                    You are responsible for complying with the laws of the jurisdiction from which you access this site.
                    </div>
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
                      Any information submitted...
                    </button>
                  </h5>
                  <div
                    id="collapse-13"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-13"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                    Any information submitted through this site is deemed non-confidential and non-proprietary, and you agree that BTPL may use such information freely.
                    </div>
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

export default Terms;
