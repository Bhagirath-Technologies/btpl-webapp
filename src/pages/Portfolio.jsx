import React, { useState, useEffect } from "react";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

// adding new imports for masonary gallery
import PortfolioList from "../components/PortfolioList";
import {
  webDevelopmentPortfoilio,
  graphicsAndEcomPortfoilio,
  marketingPortfoilio,
  brandingPortfolio,
} from "../data/Portfoliodata";
const Portfolio = () => {
  // adding code for fortfolio starts
  const [selected, setSelected] = useState("web development");
  const [data, setData] = useState([]);

  const list = [
    {
      id: "web development",
      title: "web development",
    },
    {
      id: "graphics & ecommerce",
      title: "graphics & ecommerce",
    },
    {
      id: "online marketing",
      title: "online marketing",
    },
    {
      id: "branding",
      title: "branding",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "web development":
        setData(webDevelopmentPortfoilio);
        break;
      case "graphics & ecommerce":
        setData(graphicsAndEcomPortfoilio);
        break;
      case "online marketing":
        setData(marketingPortfoilio);
        break;
      case "branding":
        setData(brandingPortfolio);
        break;
      default:
        setData(webDevelopmentPortfoilio);
    }
  }, [selected]);
  // adding code for fortfolio ends
  return (
    <>
      {/* Heading section starts */}
      <section>
        <div className="container">
          <div className="row d-flex justify-content-lg-between">
            <div className="col-12">
              <h1 className="display-4 text-dark-stroke text-primary-shadow">
                Portfolio
              </h1>
              <p className="lead">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                minus vel quas ducimus aspernatur velit quaerat ab aliquid
                ratione deleniti! Vel perferendis ex maiores amet, rem vero
                earum facere odit, aliquam cupiditate quidem praesentium nobis
                quas quam temporibus pariatur aperiam minima! Totam accusamus
                itaque, porro provident accusantium tenetur expedita illum?
              </p>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
      {/* Heading section ends */}
      {/* Portfolios with Hover effect Starts */}
      {/* testing for masonary starts */}
      <ul className="Portfolio_Ul">
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <section className="Portfolio_Container pt-0">
        <div className="container">
          <div className="row g-0">
            {/* <!-- Card item START --> */}
            {data.map((d) => (
            <div className="col-md-6 mt-4 mt-lg-7 z-index-0 position-relative overflow-hidden">
                <Tilt>
                  <div className="card border-0 rounded-0 bg-transparent">
                    {/* <!-- Card Image --> */}
                    <div className="card-image rounded ms-5 ms-sm-10 overflow-hidden position-relative z-index-9">
                      <img
                        className="w-100 "
                        src={d.img}
                        alt="Portfolio image"
                        loading="lazy"
                      />
                    </div>
                    {/* <!-- Card Overlay --> */}
                    <div className="card-img-overlay d-flex flex-column">
                      <div className="card-text mt-2 mt-md-6">
                        <p className="display-8 mb-0 text-body font-alt fw-normal">
                        {d.title}
                        </p>
                        <p className="text-lg-justify col-4 display-11 mb-0 text-dark font-heading fw-normal pe-xxl-3">
                        {d.desc}
                        </p>
                        <h5 className="mb-0 display-9 display-lg-9 text-dark-stroke">
                          {d.clientprefix}
                        </h5>
                        <h5 className="display-9 display-lg-9 text-dark-stroke">
                          {d.clientsuffix}
                        </h5>
                        <Link
                          to={d.projectlink}
                          target="_blank"
                          className="btn btn-primary btn-line btn-sm position-relative z-index-9 card-element-hover"
                        >
                          View Project
                        </Link>
                      </div>
                    </div>
                  </div>
                </Tilt>
            </div>
             ))}
          </div>
          {/* <!-- row END --> */}
        </div>
      </section>
      {/* masonary ends */}
    </>
  );
};

export default Portfolio;
