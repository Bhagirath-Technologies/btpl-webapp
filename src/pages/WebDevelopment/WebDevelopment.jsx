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



// WebDevelopment.jsx
// WebDevelopment.jsx
import React, { useState } from 'react';
import CommonCard from '../../components/CommonCard';
import webData from '../../data/WebServicedata';

const WebDevelopment = () => {
  const [webService] = useState(webData);

  return (
    <>
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

      {/* Web service portfolio */}
      <section className="pt-0">
        <div className="container-fluid px-lg-4">
          <div className="row">
            {/* Render CommonCard component with webService data */}
            <CommonCard services={webService} />
          </div>
        </div>
      </section>
      {/* End of Web service portfolio */}
    </>
  )
}

export default WebDevelopment;
