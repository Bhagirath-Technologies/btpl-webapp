import React from 'react';
import { Link } from 'react-router-dom';
import { ReactTyped } from 'react-typed';

const AutoTypingText = () => {
    return (
        <section className="pb-0">
            <div className="container">
                <div className="row d-flex justify-content-lg-between">
                    <div className="col-12">
                        {/* Typing text */}
                        <h1 className="display-3 caret-primary">
                            <ReactTyped
                                strings={['Hello', 'Namaste', 'Sat Sri Akal', 'Namo Amituofo', 'Asalaam alaikum', 'Hola', 'Zdravstvuyte']}
                                typeSpeed={100}
                                backSpeed={50}
                                loop
                            />
                        </h1>
                        <Link to="" className="display-8 text-dark">
                            <u>info@bhagirathtechnologies.com</u>
                        </Link>
                        <br />
                        <Link to="" className="display-8 text-dark">
                            +918982301484
                        </Link>
                        {/* Social links */}
                        <ul className="list-unstyled list-group-inline lead">
                            <li>
                                <Link className="text-facebook me-4" target='_blank' to="https://www.facebook.com/bhagirathtechnologies/">
                                    Facebook
                                </Link>
                            </li>
                            <li>
                                <Link className="text-instagram-gradient me-4" target='_blank' to="https://www.instagram.com/bhagirath_technologies/">
                                    Instagram
                                </Link>
                            </li>
                            <li>
                                <Link className="text-twitter me-4" target='_blank' to="https://twitter.com/bhagirathtechno">
                                    Twitter
                                </Link>
                            </li>
                            <li>
                                <Link className="text-linkedin me-4" target='_blank' to="https://in.linkedin.com/company/bhagirath-technologies">
                                    LinkedIn
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AutoTypingText;
