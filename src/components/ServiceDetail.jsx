// ServiceDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = ({ data }) => {
  const { id } = useParams();

  // Find the service with the matching id
  const service = data.find(service => service.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <p>{service.desc}</p>
      <img src={service.image} alt={service.title} />
    </div>
  );
}

export default ServiceDetail;
