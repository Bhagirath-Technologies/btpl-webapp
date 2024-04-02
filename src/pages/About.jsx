import React from "react";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <section className="bg-dark pattern-overlay-1 position-relative text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* <!-- Title --> */}
              <h1 className="text-white-stroke display-5">About Us</h1>
              <p className="lead">
                Your precedence is our top pursuit here at Bhagirath Technologies Private Limited!!!!
              </p>
              {/* <!-- Breadcrumb --> */}
              <nav className="d-flex justify-content-center">
                <ol className="breadcrumb breadcrumb-dark">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active">About us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="pt-5 pb-4">
        <div className="container">
          <p>Welcome into the zone of Bhagirath Technologies Private Limited – your gateway to a realm where innovation intersects with technology. As pioneers in the digital landscape, we craft customized services, empowering businesses to conquer the digital frontier. Backed by a cohort of passionate minds, we pledge to serve our esteemed client with unparalleled dedication. With a fusion of expertise and a relentless drive for innovation, we're not just shaping the future – we're redefining it. Welcome to the forefront of IT excellence.</p>
        </div>
      </section>
      <section className="pt-3">
        <div className="container">
          {/* <!-- Our Mission --> */}
          <div className="row mb-5">
            <div className="col-lg-4">
              <h3 className="mb-4">Our Mission</h3>
            </div>
            <div className="col-lg-8">
              <p>Why Opt for Bhagirath Technologies Private Limited?
                Selecting Bhagirath Technologies Private Limited could be a game-changer for your business expansion.
                We cater to a diverse clientele with top-notch digital services, offering:
                Expertise and Specialization: At Bhagirath Technologies Private Limited, a reputable IT firm in Bhopal, our team boasts specialized knowledge and proficiency across various technology domains. By partnering with us, you gain access to our refined skills and experience in software & development, Digital Marketing, Graphic Design, , and IT Asset Leasing. Equipped with tools and methodologies, we tackle your unique business challenges head-on. Our unwavering commitment to excellence and innovation drives us to surpass your expectations, propelling your business towards success. Whether you're a startup, SME, or multinational corporation, count on us for  IT solutions designed to fuel your growth journey.
              </p>
            </div>
          </div>

          {/* <!-- Our Vision --> */}
          <div className="row mb-5">
            <div className="col-lg-4">
              <h3 className="mb-4">Our Vision</h3>
            </div>
            <div className="col-lg-8">
              <p>At Bhagirath Technologies Private Limited, a renowned IT firm based in Bhopal, our vision transcends mere technological advancements. We aspire to revolutionize businesses by harnessing the transformative power of technology. Our belief resonates in the idea that technology should serve not only to simplify operations but also to propel industry evolution and ingenuity. Striving relentlessly, we endeavor to furnish our clients with avant-garde solutions that not only bolster their success but also furnish them with a competitive edge in their respective sectors. Our commitment knows no bounds as we aim to attain unparalleled levels of performance. Our vision extends beyond serving solely multi-million dollar enterprises; we are equally dedicated to empowering startups and small to medium-sized ventures. Nestled in the heart of Bhopal, our company serves as a catalyst for building robust platforms, fostering business growth, and facilitating brand recognition.</p>
            </div>
          </div>

          {/* <!-- Our Values --> */}
          <div className="row">
            <div className="col-lg-4">
              <h3 className="mb-4">Our Values</h3>
            </div>
            <div className="col-lg-8">
              <p>Started several mistake joy say painful removed reached end. State burst think end are its. Arrived off she elderly beloved him affixed noisier yet. Course regard to up he hardly. View four has said do men saw find dear shy. Talent men wicket add garden. </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;
