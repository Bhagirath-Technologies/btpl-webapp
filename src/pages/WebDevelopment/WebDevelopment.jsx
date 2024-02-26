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
import CommonCard from '../../components/CommonCard';
import webData from '../../data/WebServicedata';
import { serviceItems } from '../../data/WebServicedata';
import AnimatedFigures from '../../components/AnimatedFigures';
import { Link } from 'react-router-dom';
import ServiceItem from '../../components/ServiceItem';


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
      {/* Your existing code */}

      <section className='position-relative'>
        <AnimatedFigures />
        <div className="container">
          <div className="row d-flex justify-content-lg-between">
            <div className="col-12">
              <h1 className="display-4 text-dark-stroke text-primary-shadow">Our Services</h1>
              <p className="lead"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.!</p>
            </div>
          </div>
          <div id='all_services' class="row p-5">
            {/* <!-- Service item --> */}
            <ServiceItem serviceItem={serviceItems}/>
            <div class="col-md-6 col-lg-4">
              <div class="mb-6">
                <span class="text-primary display-6"><i class="bi bi-vector-pen"></i></span>
                <h4 class="mt-4 mb-4"><Link to="#">Graphic Design</Link></h4>
                <p>Go he prisoners And mountains in just switching city steps Might rung line what Mr Bulk; Was or between towards</p>
                <div class="list-group list-group-borderless list-unstyled">
                  <Link to="#" class="list-group-item bg-transparent">Brand Identity</Link>
                  <Link to="#" class="list-group-item bg-transparent">Art Direction</Link>
                  <Link to="#" class="list-group-item bg-transparent">Visual Design</Link>
                </div>
              </div>
            </div>
            {/* <!-- Service item --> */}
            <div class="col-md-6 col-lg-4">
              <div class="mb-6">
                <span class="text-primary display-6"><i class="bi bi-camera2"></i></span>
                <h4 class="mt-4 mb-4"><Link to="#">Photography</Link></h4>
                <p>We have phase were its world my samples are the was royal he luxury the about trying And on he to my enough</p>
                <div class="list-group list-group-borderless list-unstyled">
                  <Link to="#" class="list-group-item bg-transparent">Motion Design</Link>
                  <Link to="#" class="list-group-item bg-transparent">Interface Design</Link>
                </div>
              </div>
            </div>
            {/* <!-- Service item --> */}
            <div class="col-md-6 col-lg-4">
              <div class="mb-6">
                <span class="text-primary display-6"><i class="bi bi-diagram-3"></i></span>
                <h4 class="mt-4 mb-4"><Link to="#">Online Marketing</Link></h4>
                <p>It was the remember a although lead in were through serving their assistant fame day have for its after would</p>
                <div class="list-group list-group-borderless list-unstyled">
                  <Link to="#" class="list-group-item bg-transparent">Back-end Development</Link>
                  <Link to="#" class="list-group-item bg-transparent">Front-end Development</Link>
                </div>
              </div>
            </div>
            {/* <!-- Service item --> */}
            <div class="col-md-6 col-lg-4">
              <div class="mb-6">
                <span class="text-primary display-6"><i class="bi bi-app-indicator"></i></span>
                <h4 class="mt-4 mb-4"><Link to="#">Mobile Solutions</Link></h4>
                <p>Cheek dull have what in go feedback assignment Her of a any help if the a of semantics is rational overhauls</p>
                <div class="list-group list-group-borderless list-unstyled">
                  <Link to="#" class="list-group-item bg-transparent">Web Development</Link>
                  <Link to="#" class="list-group-item bg-transparent">Apps &amp; Game</Link>
                  <Link to="#" class="list-group-item bg-transparent">E-commerce</Link>
                </div>
              </div>
            </div>
            {/* <!-- Service item --> */}
            <div class="col-md-6 col-lg-4">
              <div class="mb-6">
                <span class="text-primary display-6"><i class="bi bi-bag-check"></i></span>
                <h4 class="mt-4 mb-4"><Link to="#">E-commerce</Link></h4>
                <p>Person she control of to beginnings view looked eyes Than continues its and because and given and shown creating</p>
                <div class="list-group list-group-borderless list-unstyled">
                  <Link to="#" class="list-group-item bg-transparent">Visual Design</Link>
                  <Link to="#" class="list-group-item bg-transparent">Illustration &amp; Iconography</Link>
                  <Link to="#" class="list-group-item bg-transparent">Content / Video</Link>
                </div>
              </div>
            </div>
            {/* <!-- Service item --> */}
            <div class="col-md-6 col-lg-4">
              <div class="mb-6">
                <span class="text-primary display-6"><i class="bi bi-shield-shaded"></i></span>
                <h4 class="mt-4 mb-4"><Link to="#">Security analysis</Link></h4>
                <p>Continues its and because and given and shown creating person she control of to beginnings view looked eyes than</p>
                <div class="list-group list-group-borderless list-unstyled">
                  <Link to="#" class="list-group-item bg-transparent">Interface Design</Link>
                </div>
              </div>
            </div>
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