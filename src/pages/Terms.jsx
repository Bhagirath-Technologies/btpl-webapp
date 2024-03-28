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
                    <Link to="index.html">Home</Link>
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
                      How many free samples can i redeem?
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
                      Due to the limited quantity, each member's account is only
                      entitled to 1 unique free sample. You can check out up to
                      4 free samples in each checkout. We take such matters very
                      seriously and will look into individual cases thoroughly.
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
                      What are the payment methods available?
                    </button>
                  </h5>
                  <div
                    id="collapse-2"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                      At the moment, we only accept Credit/Debit cards and
                      Paypal payments. Paypal is the easiest way to make
                      payments online. While checking out your order. Be sure to
                      fill in correct details for fast &amp; hassle-free payment
                      processing.
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
                      Can i pay without a paypal account?
                    </button>
                  </h5>
                  <div
                    id="collapse-3"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-3"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                      Yes! It is commonly misunderstood that a Paypal account is
                      needed in order to make payments through Paypal. The truth
                      is you DO NOT need one, although we strongly recommend you
                      sign up to enjoy the added ease of use.
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
                      How does the 30-day free trial work?
                    </button>
                  </h5>
                  <div
                    id="collapse-4"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-4"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                      Go ahead, kick the tires. You have full access to all the
                      features of folio Standard for 30 days. After 30 days you
                      will need to provide a credit card to continue using the
                      Standard features.
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
                      What should I do if I miss my delivery?
                    </button>
                  </h5>
                  <div
                    id="collapse-5"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-5"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                      We make 3 attempts on 3 continuing business days. In case
                      you miss the delivery, give us a call on (251) 854-6308 or
                      contact us at help@folio.com
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
                      How can I get a refund in case I cancel my plan?
                    </button>
                  </h5>
                  <div
                    id="collapse-6"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-6"
                    data-bs-parent="#accordiongeneralfaq"
                  >
                    <div class="accordion-body">
                      The refund is provided as per with our cancellation
                      policy. The refund can be credited to the source of
                      payment (Example: debit card, credit card, net banking).
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
                      How many free samples can i redeem?
                    </button>
                  </h5>
                  <div
                    id="collapse-10"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-10"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                      Due to the limited quantity, each member's account is only
                      entitled to 1 unique free sample. You can check out up to
                      4 free samples in each checkout. We take such matters very
                      seriously and will look into individual cases thoroughly.
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
                      What’s included with a free plan?
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
                        Due to the limited quantity, each member's account is
                        only entitled to 1 unique free sample. You can check out
                        up to 4 free samples in each checkout. We take such
                        matters very seriously and will look into individual
                        cases thoroughly.
                      </p>
                      <p>
                        We provide digital transformation solutions, enabling
                        companies to make their visions reality. With us at your
                        side, you will find the IT solution to achieve your
                        strategic and financial goals.
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
                      What’s included with a premium plan?
                    </button>
                  </h5>
                  <div
                    id="collapse-12"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-12"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                      At the moment, we only accept Credit/Debit cards and
                      Paypal payments. Paypal is the easiest way to make
                      payments online. While checking out your order. Be sure to
                      fill in correct details for fast &amp; hassle-free payment
                      processing. A thing that looks beautiful and attractive
                      always grabs eyeballs. The real challenge before companies
                      in today's world is to make their products and services
                      appealing to everyone. It can be the packaging of an item
                      or the design of its website and Applications.
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
                      How to upgrade from free to premium plan?
                    </button>
                  </h5>
                  <div
                    id="collapse-13"
                    class="accordion-collapse collapse"
                    aria-labelledby="heading-13"
                    data-bs-parent="#accordionmemberfaq"
                  >
                    <div class="accordion-body">
                      Yes! It is commonly misunderstood that a Paypal account is
                      needed in order to make payments through Paypal. The truth
                      is you DO NOT need one, although we strongly recommend you
                      sign up to enjoy the added ease of use.
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Membership and trials END --> */}
            </div>
            {/* <!-- Left END --> */}

            {/* <!-- Right START --> */}
            <div class="col-md-4">
              <h4 class="mb-5">Didn't find what you needed? Try these</h4>
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
