import { React, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import AutoTypingText from "../components/Typo";
import AddressWithMap from "../components/AddressWithMap";
import { ReactTyped } from 'react-typed';

const Contact = () => {
  // State to track submission status
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('Send Message');
  useEffect(() => {
    // Ensure the form exists before attaching the listener
    const formContactUs = document.getElementById('contactForm');
    // Define a submit handler
    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitButtonText('Submitting...');
      const data = new FormData(formContactUs);
      data.append('formType', 'Contact Us');
      fetch('https://script.google.com/macros/s/AKfycbyBQy_Xul9gUmR1bPXK8YV5F0BG11j6ePqSVccT8TEh_iRMyHVZUWbAvCawwO0BMmEc5g/exec', {
        method: 'POST',
        body: data,
      })
        .then((res) => res.text())
        .then((responseData) => {
          if (responseData.includes('Success')) {
            setSubmitButtonText('Your Form is Submitted Successfully');
            // Set the state to true to disable the button
            setIsSubmitted(true);
            // Redirect to the thank you page
            // window.location.href = '/thanks.html';
          } else {
            setSubmitButtonText('Submission Failed');
          }
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          setSubmitButtonText('Submission Failed');
        });
    };
    if (formContactUs) {
      formContactUs.addEventListener('submit', handleSubmit);
    }
    // Cleanup function to remove the event listener
    return () => {
      if (formContactUs) {
        formContactUs.removeEventListener('submit', handleSubmit);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Bhagirath Technologies | Contact Us</title>
        <meta
          name="description"
          content="Contact Bhagirath Technologies for all your IT needs. Reach out to us for software development, graphic design, digital marketing, and IT asset leasing services. Let's discuss your project!"
        />
        <meta
          name="keywords"
          content="contact us, Bhagirath Technologies, software development, graphic design, digital marketing, IT asset leasing,  IT services, get in touch, contact information"
        />
      </Helmet>
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
      <AutoTypingText />
      <AddressWithMap />
      <section>
        <div className="container">
          <div className="row justify-content-lg-between">
            <div class="col-xl-5 col-lg-6 mt-lg-auto d-none d-lg-block">
              <img src="assets/images/contact/handsome_boy.png" alt="" />
            </div>
            {/* <!-- Title --> */}
            <div className="col-md-6 mt-5 mt-md-0">
              <h1 class="display-5">
                Say hi by filling the form below
                <span class="text-primary">.</span>
              </h1>
              <h3>Contact us     
                <span class="display-8 mb-0 mt-2 font-alt fw-normal rounded px-2 py-1 ms-3 mb-3">for</span>
                <ReactTyped
                  strings={['Web Development', 'Digital Marketing', 'App Development', 'Custom Software Development', 'Google Ads Campaigns', 'Brand Marketing', 'Consulting']}
                  typeSpeed={100}
                  backSpeed={50}
                  loop
                  className="display-8 mb-0 mt-2 font-alt fw-normal bg-success rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block"
                />
              </h3>
              <p>Get in touch with us</p>
              {/* <!-- Form START Of Formspree --> */}
              {/* <form
                className="contact-form form-line"
                id="contact-form"
                name="contactform"
                method="POST"
                action="https://formspree.io/f/xayrljqr"
              >
                <!-- Main form -->
                <div className="row">
                  <div className="col-md-6">
                    <!-- name -->
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
                    <!-- email -->
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
                    <!-- Subject -->
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
                    <!-- Message -->
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
                  <!-- submit button -->
                  <div className="col-md-12 text-start">
                    <button className="btn btn-primary btn-line" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form> */}
              {/* <!-- Form END Of Formspree --> */}
              {/* <!-- Form START Of App Script --> */}
              <form
                className="contact-form form-line"
                id="contactForm"
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
                  <div className="col-md-6">
                    {/* <!-- phone --> */}
                    <div className="mb-3 position-relative">
                      <input
                        required=""
                        id="con-phone"
                        name="phone"
                        type="tel"
                        className="form-control"
                        placeholder="Phone"
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
                    <input type="submit" id="submitButtonContactUs" className="btn btn-primary btn-line" value={submitButtonText} disabled={isSubmitted} />
                  </div>
                </div>
              </form>
              {/* <!-- Form END Of App Script --> */}

            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
      {/* Large map BTPL starts */}
      {/* <div className="col-12 mb-0 pb-0"> */}
      <iframe
        className="w-100 h-400"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753682.8893104414!2d74.88266227051317!3d23.253785200000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25fcea9c85591dad%3A0x8073a63bd087c91!2sBhagirath%20Technologies!5e0!3m2!1sen!2sin!4v1719231448387!5m2!1sen!2sin"
        width="600"
        height="500"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        aria-hidden="false"
        tabindex="0"
        title="Company Map Location"
      ></iframe>
      {/* </div> */}
      {/* Large map BTPL ends */}
    </>
  );
};

export default Contact;
