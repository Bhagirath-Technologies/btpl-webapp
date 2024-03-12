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
        <div className="container">
          <div className="row ">
            <div className="col-md-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to={`/${service.type}`}>{`${service.type}`}</Link></li>
                  <li className="breadcrumb-item active">{service.title}</li>
                </ol>
              </nav>
              <h2  className="display-6">{service.title}</h2>
              <p  className="lead">{service.desc}</p>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section >

      <section id={service.hashlinks} className="pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className="w-100" src={service.image} alt={service.title} />
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <h3>About {service.title}</h3>
              <p>{service.content}</p>
              <div className="row">
                {/* <!-- Features --> */}
                <div className="col-lg-6">
                  <ul className="list-group list-group-borderless list-group-icon-primary-bg">
                    <li className="list-group-item"><i className="fas fa-check"></i>{service.properties[0]}</li>
                    <li className="list-group-item"><i className="fas fa-check"></i>{service.properties[1]}</li>
                    <li className="list-group-item"><i className="fas fa-check"></i>{service.properties[2]}</li>
                  </ul>
                </div>
                {/* <!-- Features --> */}
                <div className="col-lg-6">
                  <ul className="list-group list-group-borderless list-group-icon-primary-bg">
                    <li className="list-group-item"><i className="fas fa-check"></i>{service.properties[3]}</li>
                    <li className="list-group-item"><i className="fas fa-check"></i>{service.properties[4]}</li>
                    <li className="list-group-item"><i className="fas fa-check"></i>{service.properties[5]}</li>
                  </ul>
                </div>
              </div>
              <Link to="#" className="btn btn-dark btn-line mt-4">Book Now</Link>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section>
    </>
  );
}

export default ServiceDetail;
