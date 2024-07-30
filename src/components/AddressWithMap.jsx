import React from 'react';
import { Link } from 'react-router-dom';

function AddressWithMap() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="row">
                        {/* <!--Address --> */}
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-5 mb-lg-0">
                            <h5 className="mb-4">Bhopal, Madhya Pradesh</h5>
                            <address>Flat No 202, Esteem Homes, Plot No 65-A, Indrapuri, Bhopal, Madhya Pradesh, Pincode - 462023
                            </address>
                            <p>Call: +91-8982301484</p>
                            <p>Support time: Monday to Friday
                                <br />
                                9:00 am to 6:00 pm
                            </p>
                            <Link to="" className="btn btn-sm btn-light">View location <i className="far fa-map ms-3"></i></Link>
                        </div>
                        {/* <!-- Google Map --> */}
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-5 mb-lg-0">
                            <iframe
                                className="w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753682.8893104414!2d74.88266227051317!3d23.253785200000017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25fcea9c85591dad%3A0x8073a63bd087c91!2sBhagirath%20Technologies!5e0!3m2!1sen!2sin!4v1719231448387!5m2!1sen!2sin"
                                width="auto"
                                height="auto"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe>
                        </div>
                        {/* <!--Address --> */}
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-5 mb-lg-0">
                            <h5 className="mb-4">Noida, Uttar Pradesh</h5>
                            <address>Office No.8, 1st Floor, A-43, Sector-2, Near-Sector-15 Metro Station, Noida, Uttar Pradesh, Pincode - 201301
                            </address>
                            <p>Call: 91-9625965251</p>
                            <p>Support time: Monday to Saturday
                                <br />
                                9:00 am to 6:00 pm
                            </p>
                            <Link to="" className="btn btn-sm btn-light">View location <i className="far fa-map ms-3"></i></Link>
                        </div>
                        {/* <!-- Google Map --> */}
                        <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6 col-12 mb-5 mb-lg-0">
                            <iframe
                                className="w-100 h-100"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3587630.158726972!2d77.3126674!3d28.583420399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce573bd20e27b%3A0xa871182d29864c06!2sBhagirath%20Technologies!5e0!3m2!1sen!2sin!4v1719254949145!5m2!1sen!2sin"
                                width="auto"
                                height="auto"
                                style={{ border: 0 }}
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                                aria-hidden="false"
                                tabindex="0"
                            ></iframe>
                        </div>
                    </div>
                    {/* <!-- Row END --> */}
                </div>
            </section>
        </>
    )
}

export default AddressWithMap;