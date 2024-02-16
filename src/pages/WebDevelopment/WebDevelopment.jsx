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

const WebDevelopment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // Number of items to display per page
  const totalPages = 5;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      {/* Your existing code */}
      <section>
        <div className="container">
          <div className="row d-flex justify-content-lg-between">
            <div className="col-12">
              <h1 className="display-4 text-dark-stroke text-primary-shadow">Our Services</h1>
              <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.!</p>
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