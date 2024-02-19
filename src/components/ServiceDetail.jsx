// ServiceDetail.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = ({ data }) => {
  const { id } = useParams();

  // Find the service with the matching id
  const service = data.find(service => service.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <section>
        <div class="container">
          <div class="row ">
            <div class="col-md-8">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li class="breadcrumb-item"><Link to={`/${service.type}`}>{`${service.type}`}</Link></li>
                  <li class="breadcrumb-item active">{service.title}</li>
                </ol>
              </nav>
              <h2 class="display-6">{service.title}</h2>
              <p class="lead">{service.desc}</p>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>

      <section class="pt-0">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-md-6">
              <img class="w-100" src={service.image} alt={service.title} />
            </div>
            <div class="col-md-6 mt-5 mt-md-0">
              <h3>About {service.title}</h3>
              <p>Web design is a Web development process for creating a website that focuses on aesthetic factors like layout, user interface and other visual imagery in order to make the website more visually appealing and easy to use.</p>
              <div class="row">
                {/* <!-- Features --> */}
                <div class="col-lg-6">
                  <ul class="list-group list-group-borderless list-group-icon-primary-bg">
                    <li class="list-group-item"><i class="fas fa-check"></i>Improve productivity and performance</li>
                    <li class="list-group-item"><i class="fas fa-check"></i>Get peace of mind knowing your services are in trusted hands</li>
                    <li class="list-group-item"><i class="fas fa-check"></i>Reduce your service costs</li>
                  </ul>
                </div>
                {/* <!-- Features --> */}
                <div class="col-lg-6">
                  <ul class="list-group list-group-borderless list-group-icon-primary-bg">
                    <li class="list-group-item"><i class="fas fa-check"></i>Hassle-free setup &amp; management</li>
                    <li class="list-group-item"><i class="fas fa-check"></i>Lifetime license, No monthly or yearly fee</li>
                    <li class="list-group-item"><i class="fas fa-check"></i>User-friendly admin &amp; reporting features</li>
                  </ul>
                </div>
              </div>
              <Link to="#" class="btn btn-dark btn-line mt-4">Book Now</Link>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;
