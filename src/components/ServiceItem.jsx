import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const ServiceItem = ({ serviceItem }) => {
  const handlePageTop = () => {
    window.scrollTo(0, 0); // Scroll to top of the page
  };
  return (
    <>
      {serviceItem.map((item) => (
        <div
          key={item.id}
          className="col-md-6 col-lg-4 aos aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay={item.data_aos_delay}
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div class="mb-6">
            <span class="text-primary display-6">
              <i class={item.icon}></i>
            </span>
            <h4 class="mt-4 mb-4">
              <Link to="#">{item.title}</Link>
            </h4>
            <p>{item.desc}</p>
            <div class="list-group list-group-borderless list-unstyled">
              <HashLink onClick={() => handlePageTop()} to={item.links[0]} class="list-group-item bg-transparent">
                {item.properties[0]}
              </HashLink>
              <HashLink onClick={() => handlePageTop()} to={item.links[1]} class="list-group-item bg-transparent">
                {item.properties[1]}
              </HashLink>
              <HashLink onClick={() => handlePageTop()} to={item.links[2]} class="list-group-item bg-transparent">
                {item.properties[2]}
              </HashLink>
              <HashLink onClick={() => handlePageTop()} to={item.links[3]} class="list-group-item bg-transparent">
                {item.properties[3]}
              </HashLink>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceItem;
