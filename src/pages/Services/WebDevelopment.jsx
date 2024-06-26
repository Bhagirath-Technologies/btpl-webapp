// import React, { useState } from 'react';
// import CommonCard from '../../components/CommonCard';
// import webData from '../../data/WebServicedata';

// const WebDevelopment = () => {
// 	const [webService] = useState(webData);
// 	return (
// 		<>
// 			<section>
// 				<div class="container">
// 					<div class="row d-flex justify-content-lg-between">
// 						<div class="col-12">
// 							<h1 class="display-4 text-dark-stroke text-primary-shadow">Our Services</h1>
// 							<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.!</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Rental portfolio starts of products */}
// 			<section class="pt-0">
// 				<div class="container-fluid px-lg-4">
// 					<div class="row">
// 						{/* <!-- Card item START --> */}
// 						<CommonCard key={webService.id} commonData={webService} />
// 						{/* <!-- Card item END --> */}
// 					</div>
// 				</div>
// 			</section>
// 			{/* Rental portfolio ends of products */}
// 		</>
// 	)
// }

// export default WebDevelopment;


// working 2nd approach

// // WebDevelopment.jsx
// import React, { useState } from 'react';
// import CommonCard from '../../components/CommonCard';
// import webData from '../../data/WebServicedata';

// const WebDevelopment = () => {
//   const [webService] = useState(webData);

//   return (
//     <>
//       <section>
//         <div className="container">
//           <div className="row d-flex justify-content-lg-between">
//             <div className="col-12">
//               <h1 className="display-4 text-dark-stroke text-primary-shadow">Our Services</h1>
//               <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.!</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Web service portfolio */}
//       <section className="pt-0">
//         <div className="container-fluid px-lg-4">
//           <div className="row">
//             {/* Render CommonCard component with webService data */}
//             <CommonCard services={webService} />
//           </div>
//         </div>
//       </section>
//       {/* End of Web service portfolio */}
//     </>
//   )
// }

// export default WebDevelopment;




// 3rd approad starts

import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import webData from '../../data/WebServicedata';
import { serviceItems } from '../../data/WebServicedata';
import CommonCard from '../../components/CommonCard';
import AnimatedFigures from '../../components/AnimatedFigures';
import ServiceItem from '../../components/ServiceItem';
import { Helmet } from 'react-helmet';


const WebDevelopment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Number of items to display per page
  const totalPages = 4;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (window.innerWidth >= 320 && window.innerWidth <= 767) {
      window.scrollBy(0, -1200);
      // Scroll to top of the page
    }
  };

  return (
    <>
      <Helmet>
        <title>Bhagirath Technologies | Services</title>
        <meta name="description"
          content="Explore our range of professional services at Bhagirath Technologies. We offer website design, web development, digital marketing, branding, SEO, and more to help businesses succeed online. Contact us today to learn more!" />
        <meta name="keywords" content="services, software development, graphic designing, IT asset leasing, digital marketing, IT services, Bhagirath Technologies" />
      </Helmet>
      {/* Your existing code */}

      <section className='position-relative pattern-overlay-7'>
        <AnimatedFigures />
        <div className="container">
          <div className="row d-flex justify-content-lg-between">
            <div className="col-12">
              <h1 className="display-4 text-dark-stroke text-primary-shadow">Our Services</h1>
              <p id='all_services' className="lead">We specialize in customizing our services to meet your specific requirements, guaranteeing optimal outcomes and your satisfaction. Allow us to take care of your needs with our wealth of expertise and unwavering dedication. With a focus on attention to detail, we ensure every aspect of our service aligns perfectly with your expectations. Rest assured, our team is committed to delivering results that exceed your standards, providing value at every step of the way. Trust us to navigate your needs with precision and care, leaving no stone unturned in pursuit of excellence. Your satisfaction is our top priority, and we spare no effort in ensuring that your experience with us is nothing short of exceptional.</p>
            </div>
          </div>
          <div class="row p-5">
            {/* <!-- Service item --> */}
            <ServiceItem serviceItem={serviceItems} />
          </div>
        </div>
      </section>
      <section class="pt-0">
        <div class="container-fluid px-lg-4">
          <div class="row">
            {/* Pass the currentPage and itemsPerPage props to CommonCard */}
            <CommonCard services={webData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
          </div>
        </div>
      </section>

      {/* Pagination */}
      <nav>
        <ul class="pagination justify-content-center">
          {Array.from({ length: totalPages }).map((_, index) => (
            <li key={index} class={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
              <button class="page-link" onClick={() => handlePageChange(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {/* Pagination code remains same as before */}
    </>
  );
};

export default WebDevelopment;