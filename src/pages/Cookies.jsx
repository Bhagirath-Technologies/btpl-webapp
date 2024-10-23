import React from "react";
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
const Cookies = () => {
    return (
        <>
            <Helmet>
                <title>Bhagirath Technologies | Cookies</title>
                <meta name="description"
                    content="Learn about the use of cookies on Bhagirath Technologies' website, how we use them, and how you can manage your cookie preferences." />
                <meta name="keywords" content="Bhagirath Technologies, Cookies Policy, cookies, cookie management, website cookies." />
            </Helmet>
            <section className="bg-dark pattern-overlay-1 position-relative text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {/* <!-- Title --> */}
                            <h1 className="text-white-stroke display-5">Cookies Policy</h1>
                            <p className="lead">
                                At Bhagirath Technology Private Limited ("we," "us," or "our"), we value your privacy and strive to be transparent about the use of cookies on our website [https://www.bhagirathtechnologies.com/] (the "Service"). This Cookie Policy explains what cookies are, how we use them, and your choices regarding cookies.
                            </p>
                            {/* <!-- Breadcrumb --> */}
                            <nav className="d-flex justify-content-center">
                                <ol className="breadcrumb breadcrumb-dark">
                                    <li className="breadcrumb-item">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="breadcrumb-item active">Cookies Policy</li>
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
                                            What are Cookies?
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
                                            Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.                </div>
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
                                            How We Use Cookies - We use cookies for the following purposes...
                                        </button>
                                    </h5>
                                    <div
                                        id="collapse-2"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading-2"
                                        data-bs-parent="#accordiongeneralfaq"
                                    >
                                        <div className="accordion-body">
                                            Essential Cookies: These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
                                            Analytical/Performance Cookies: These cookies allow us to analyze how visitors use our website, which helps us improve the user experience. For example, we may use Google Analytics to track and report website traffic.
                                            Functionality Cookies: These cookies enable us to remember choices you make on our website (such as your language preferences) and provide enhanced, more personalized features.
                                            Targeting/Advertising Cookies: These cookies are used to deliver advertisements relevant to your interests. They may also be used to track the effectiveness of our advertising campaigns.
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
                                            Your Choices Regarding Cookies...
                                        </button>
                                    </h5>
                                    <div
                                        id="collapse-3"
                                        className="accordion-collapse collapse"
                                        aria-labelledby="heading-3"
                                        data-bs-parent="#accordiongeneralfaq"
                                    >
                                        <div className="accordion-body">
                                            You have the option to accept or reject cookies. Most web browsers automatically accept cookies, but you can usually modify your browser settings to decline cookies if you prefer. However, please note that disabling cookies may impact your experience on our website.

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
                                                Third-Party Cookies...
                                            </button>
                                        </h5>
                                        <div
                                            id="collapse-4"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading-4"
                                            data-bs-parent="#accordiongeneralfaq"
                                        >
                                            <div className="accordion-body">
                                                We may also use third-party services, such as Google Analytics, that set cookies on our behalf to provide analytics and other services. These third-party cookies are subject to the respective privacy policies of the third-party service providers.

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
                                                Updates to This Cookie Policy...
                                            </button>
                                        </h5>
                                        <div
                                            id="collapse-5"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading-5"
                                            data-bs-parent="#accordiongeneralfaq"
                                        >
                                            <div className="accordion-body">
                                                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. We encourage you to review this policy periodically for any updates.

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
                                                Contact Us...
                                            </button>
                                        </h5>
                                        <div
                                            id="collapse-6"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="heading-6"
                                            data-bs-parent="#accordiongeneralfaq"
                                        >
                                            <div className="accordion-body">
                                                If you have any questions about our Cookie Policy, please contact us at [insert contact email or other contact information].
                                                By continuing to use our website, you consent to the use of cookies as described in this Cookie Policy.

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- General FAQ END --> */}
                            </div>
                            {/* <!-- Left END --> */}


                        </div>
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
                                            {/* <span className="text-danger">*</span> Feel free to contact us */}
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
                                    If you have technical issues and queries you can raise a ticket by clicking on the icon given below in the bottom right corner of the website.
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

export default Cookies;
