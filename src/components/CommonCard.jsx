// import React from 'react';
// import { Link } from 'react-router-dom';

// const CommonCard = ({ commonData }) => {
//     return (
//         <>
//             {commonData.map((services) => {
//                 return (
//                     <>
//                         <!-- Card item START -->
//                         <div class={services.class}>
//                             <div class="card">
//                                 <div class="position-relative">
//                                     <!-- Card Image -->
//                                     <img class="card-img-top rounded" src={services.image} alt="rental assets" />
//                                     <!-- Card Overlay -->
//                                     <div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
//                                         <Link to="#" class="btn btn-white btn-sm btn-line">Grab Now</Link>
//                                     </div>
//                                 </div>
//                                 <!-- Card body -->
//                                 <div class="card-body px-0 mt-n5 position-relative zindex-9">
//                                     <span class="display-9 mb-0 mt-2 font-alt fw-normal bg_blue rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">{services.title}</span>
//                                     <h5 class="card-title"><Link to="#">{services.desc}</Link></h5>
//                                     <p class="small">{services.title}</p>
//                                 </div>
//                             </div>
//                         </div>
//                         <!-- Card item END -->
//                     </>
//                 )
//             }
//             )
//             }

//         </>
//     )
// }

// export default CommonCard;




// CommonCard.jsx
// import React from 'react';
// import { Link } from 'react-router-dom';

// const CommonCard = ({ services }) => {
//   return (
//     <>
//       {services.map((service) => (
//         <div className={service.class} key={service.id}>
//           <div className="card">
//             <div className="position-relative">
//               <img className="card-img-top rounded" src={service.image} alt={service.title} />
//               <div className="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
//                 <Link to={`/${service.type}/${service.id}`} className="btn btn-white btn-sm btn-line">Grab Now</Link>
//               </div>
//             </div>
//             <div className="card-body px-0 mt-n5 position-relative zindex-9">
//               <span className="display-9 mb-0 mt-2 font-alt fw-normal bg_blue rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">{service.title}</span>
//               <h5 className="card-title"><Link to={`/${service.type}/${service.id}`}>{service.desc}</Link></h5>
//               <p className="small">{service.title}</p>
//             </div>
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default CommonCard;
// CommonCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CommonCard = ({ services }) => {
  if (!services || services.length === 0) {
    return <div>No services available</div>;
  }

  return (
    <>
      {services.map(service => (
        <div className={service.class} key={service.id}>
          <div className="card">
            <div className="position-relative">
              <img className="card-img-top rounded" src={service.image} alt={service.title} />
              <div className="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
                <Link to={`/${service.type}/${service.id}`} className="btn btn-white btn-sm btn-line">Grab Now</Link>
              </div>
            </div>
            <div className="card-body px-0 mt-n5 position-relative zindex-9">
              <span className="display-9 mb-0 mt-2 font-alt fw-normal bg_blue rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">{service.title}</span>
              <h5 className="card-title"><Link to={`/${service.type}/${service.id}`}>{service.desc}</Link></h5>
              <p className="small">{service.title}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default CommonCard;
