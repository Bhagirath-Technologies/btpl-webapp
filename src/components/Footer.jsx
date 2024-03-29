import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer class="bg-black footer-sticky pt-6">
                <div class="container">
                    <div class="row">
                        {/* <!-- Footer Widget 1 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <img src='../assets/images/logos/Bhagirath Technologies Logo White.svg' alt='logo' width="100px" />
                            {/* <h3 class="text-white">Logo<span class="text-primary">.</span></h3> */}
                            <p>Bhagirath Technologies Pvt Ltd Your partner for innovative IT solutions.</p>
                            <div class="d-flex me-auto align-items-center">
                                <h6 class="mt-2 me-4 text-white">Follow on:</h6>
                                {/* <div class="list-group-inline list-unstyled text-primary-hover">
                                    <Link to="#" class="list-group-item text-white bg-transparent">In</Link>
                                    <Link to="#" class="list-group-item text-white bg-transparent">Fb</Link>
                                    <Link to="#" class="list-group-item text-white bg-transparent">Ln</Link>
                                    <Link to="#" class="list-group-item text-white bg-transparent">Tg</Link>
                                </div> */}
                            </div>
                            <div className="d-flex justify-content-between pt_sm_icons">
                                {/* animated social icons instagram starts */}
                                <div class="tooltip_container_in d-flex">
                                    <div class="tooltip_in">
                                        <div class="profile_in">
                                            <div class="user_in">
                                                <div class="img_in">
                                                    {/* <img src='../assets/images/logos/Bhagirath Technologies Logo White.svg' alt='logo' width="40px" /> */}
                                                    <Link className='text-white' to="https://www.instagram.com/bhagirath_technologies/" target='_blank'>In</Link>
                                                </div>
                                                <div class="details_in">
                                                    <div class="name_in"><Link className='text-white' to="https://www.instagram.com/bhagirath_technologies/" target='_blank'>BTPL</Link></div>
                                                    <div class="username_in"><Link className='text-white' to="https://www.instagram.com/bhagirath_technologies/" target='_blank'>bhagirath_technologies</Link></div>
                                                </div>
                                            </div>
                                            <div class="about_in">10K+ Followers</div>
                                        </div>
                                    </div>
                                    <div class="text_in">
                                        <Link class="icon_in" to="#">
                                            <div class="layer_in">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span class="instagramSVG">
                                                    <svg
                                                        fill="white"
                                                        class="svgIcon_in"
                                                        viewBox="0 0 448 512"
                                                        height="1.5em"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="text_in">Instagram</div>
                                        </Link>
                                    </div>
                                </div>
                                {/* animated social icons instagram ends */}
                                {/* animated social icons facebook starts */}
                                <div class="tooltip_container_fb">
                                    <div class="tooltip_fb">
                                        <div class="profile_fb">
                                            <div class="user_fb">
                                                <div class="img_fb"><Link className='text-muted' to="https://www.facebook.com/bhagirathtechnologies/" target='_blank'>Fb</Link></div>
                                                <div class="details_fb">
                                                    <div class="name_fb"><Link className='text-white' to="https://www.facebook.com/bhagirathtechnologies/" target='_blank'>BTPL</Link></div>
                                                    <div class="username_fb"><Link className='text-white' to="https://www.facebook.com/bhagirathtechnologies/" target='_blank'>bhagirathtechnologies</Link></div>
                                                </div>
                                            </div>
                                            <div class="about_fb">25k+ Friends</div>
                                        </div>
                                    </div>
                                    <div class="text_fb">
                                        <Link class="icon_fb" to="#">
                                            <div class="layer_fb">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span class="facebookSVG">
                                                    <svg
                                                        viewBox="0 0 40 40"
                                                        // xml:space="preserve"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <linearGradient
                                                            gradientUnits="userSpaceOnUse"
                                                            gradientTransform="matrix(40 0 0 -39.7778 11115.001 16212.334)"
                                                            y2="407.5726"
                                                            y1="406.6018"
                                                            x2="-277.375"
                                                            x1="-277.375"
                                                            id="a"
                                                        >
                                                            <stop stop-color="#0062e0" offset="0"></stop>
                                                            <stop stop-color="#19afff" offset="1"></stop>
                                                        </linearGradient>
                                                        <path
                                                            d="M16.7 39.8C7.2 38.1 0 29.9 0 20 0 9 9 0 20 0s20 9 20 20c0 9.9-7.2 18.1-16.7 19.8l-1.1-.9h-4.4l-1.1.9z"
                                                            fill="url(#a)"
                                                        ></path>
                                                        <path
                                                            d="m27.8 25.6.9-5.6h-5.3v-3.9c0-1.6.6-2.8 3-2.8H29V8.2c-1.4-.2-3-.4-4.4-.4-4.6 0-7.8 2.8-7.8 7.8V20h-5v5.6h5v14.1c1.1.2 2.2.3 3.3.3 1.1 0 2.2-.1 3.3-.3V25.6h4.4z"
                                                            fill="#fff"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="text_fb">Facebook</div>
                                        </Link>
                                    </div>
                                </div>

                                {/* animated social icons facebook ends */}
                                {/* animated social icons linkedin starts */}
                                <div class="tooltip_container_ln">
                                    <div class="tooltip_ln">
                                        <div class="profile_ln">
                                            <div class="user_ln">
                                                <div class="img_ln">Ln</div>
                                                <div class="details_ln">
                                                    
                                                    <div class="name_ln">BTPL</div>
                                                    <div class="username_ln">Bhagirath Technologies</div>
                                                </div>
                                            </div>
                                            <div class="about_ln">5k+ Connections</div>
                                        </div>
                                    </div>
                                    <div class="text_ln">
                                        <Link class="icon_ln" to="#">
                                            <div class="layer_ln">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span class="fab">
                                                    <svg viewBox="0 0 448 512" height="1em">
                                                        <path
                                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                                        ></path>
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="text_ln">LinkedIn</div>
                                        </Link>
                                    </div>
                                </div>
                                {/* animated social icons linkedin ends */}
                                {/* animated social icons linkedin starts */}
                                <div class="tooltip_container_ln sm_tele">
                                    <div class="tooltip_ln">
                                        <div class="profile_ln">
                                            <div class="user_ln">
                                                <div class="img_ln"><Link className='text-muted' to="https://t.me/bhagirathtechnologies" target='_blank'>Tg</Link></div>
                                                <div class="details_ln">
                                                    
                                                    <div class="name_ln"><Link className='text-white' to="https://t.me/bhagirathtechnologies" target='_blank'>BTPL</Link></div>
                                                    <div class="username_ln"><Link className='text-white' to="https://t.me/bhagirathtechnologies" target='_blank'>Bhagirath Technologies</Link></div>
                                                </div>
                                            </div>
                                            <div class="about_ln">10k+ Connections</div>
                                        </div>
                                    </div>
                                    <div class="text_ln">
                                        <Link class="icon_ln" to="#">
                                            <div class="layer_ln layer_tele">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                                <span class="fab fa-telegram-plane">
                                                    <svg viewBox="0 0 448 512" height="1em">
                                                        {/* <path
                                                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                                                        ></path> */}
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="text_ln">Telegram</div>
                                        </Link>
                                    </div>
                                </div>
                                {/* animated social icons linkedin ends */}
                                {/* animated social icons ends */}
                            </div>
                        </div>
                        {/* <!-- Footer Widget 2 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h5 class="mb-4 text-white">Our offices</h5>
                            {/* <!-- Address 1 --> */}
                            <p class="text-white mb-2">Bhopal, Madhya Pradesh</p>
                            <address class="mb-0">Flat No 202, Esteem Homes, Plot No 65-A, Indrapuri, Bhopal, Madhaya Pradesh, Pincode - 462023</address>
                            <p>Call: <Link to="tel:+918982301484" class="text-body"><u> +91-8982301484</u></Link> </p>
                            {/* <!-- Address 2 --> */}
                            <p class="text-white mb-2">Noida, Uttar Pradesh</p>
                            <address class="mb-0">Office No.8, 1st Floor, A-43, Sector-2, Near-Sector-15 Metro Station, Noida, Uttar Pradesh, Pincode - 201301</address>
                            <p>Call: <Link to="tel:+919625965251" class="text-body"><u>91-9625965251</u></Link> </p>
                        </div>
                        {/* <!-- Footer Widget 3 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h5 class="mb-4 text-white">Useful links</h5>
                            <div class="row">
                                <div class="col-6">
                                    <ul class="nav flex-column text-primary-hover">
                                        <li class="nav-item"><Link class="nav-link pt-0" to="/">Home</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/about">About</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/services">Services</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/rental">Rentals</Link></li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="nav flex-column text-primary-hover">
                                        <li class="nav-item"><Link class="nav-link" target='_blank' to="https://bhagirathtechnologies.zohorecruit.in/careers">Career <span class="badge bg-danger ms-2">2 Job</span></Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Footer Widget 4 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h5 class="mb-4 text-white">Stay in touch</h5>
                            <form>
                                <label class="form-label">Subscribe to our newsletter to receive exclusive offers.</label>
                                <div class="mb-3">
                                    <input class="form-control" type="email" placeholder="Enter email..." />
                                </div>
                                <div class="mb-3">
                                    <button type="submit" value="Subscribe" class="btn btn-primary mb-0">Join us</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* <!-- Divider --> */}
                    <div class="divider-light opacity-1"></div>
                    {/* <!-- Footer copyright START --> */}
                    <div class="row align-items-center justify-content-md-between py-2">
                        <div class="col-md-6">
                            <div class="text-center text-md-start fs-6">©2024 <Link to="#" target="_blank"><b className='text-white'>Bhagirath Technologies Pvt Lmt.</b></Link>. All rights reserved
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                <li class="nav-item"><Link class="nav-link text-body text-primary-hover fs-7" to="/terms">Terms</Link></li>
                                <li class="nav-item"><Link class="nav-link text-body text-primary-hover fs-7" to="/policy">Privacy</Link></li>
                                <li class="nav-item"><Link class="nav-link text-body text-primary-hover fs-7 pe-0" to="#">Cookies</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Footer copyright END --> */}
                </div>
            </footer>
            {/* <!-- ================= Footer END ============ --> */}
        </>
    )
}

export default Footer;

