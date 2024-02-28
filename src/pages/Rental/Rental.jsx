// import React, { useState } from 'react';
// import CommonCard from '../../components/CommonCard';
// import rentalData from '../../data/RentalServicedata';

// const Rental = () => {
// 	const [rentalService] = useState(rentalData);
// 	return (
// 		<>
// 			<section>
// 				<div className="container">
// 					<div className="row d-flex justify-content-lg-between">
// 						<div className="col-12">
// 							<h1 className="display-4 text-dark-stroke text-primary-shadow">Rental Services</h1>
// 							<p className="lead">Get hire you laptop, desktop , IT assets Now !</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Rental portfolio starts of products */}
// 			<section className="pt-0">
// 				<div className="container-fluid px-lg-4">
// 					<div className="row">
// 						{/* <!-- Card item START --> */}
// 						<CommonCard services={rentalService} />
// 						{/* <!-- Card item END --> */}
// 					</div>
// 				</div>
// 			</section>
// 			{/* Rental portfolio ends of products */}
// 		</>
// 	)
// }

// export default Rental;

import React, { useState } from 'react';
import CommonCard from '../../components/CommonCard';
import rentalData from '../../data/RentalServicedata';
import AnimatedFigures from '../../components/AnimatedFigures';
import ServiceItem from '../../components/ServiceItem';
import { rentalItems } from '../../data/RentalServicedata';

const Rental = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 6; // Number of items to display per page
	const totalPages = 4;

	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
		window.scrollTo(0, 0); // Scroll to top of the page
	};

	return (
		<>
			{/* Your existing code */}
			<section className='pattern-overlay-7'>
				<AnimatedFigures />
				<div className="container">
					<div className="row d-flex justify-content-lg-between">
						<div className="col-12">
							<h1 className="display-4 text-dark-stroke text-primary-shadow">Rental Services</h1>
							<p className="lead">Get hire you laptop, desktop , IT assets Now !</p>
						</div>
					</div>
					<div class="row p-5">
						{/* <!-- Service item --> */}
						<ServiceItem serviceItem={rentalItems} />
					</div>
				</div>
			</section>

			<section className="pt-0">
				<div className="container-fluid px-lg-4">
					<div className="row">
						{/* Pass the currentPage and itemsPerPage props to CommonCard */}
						<CommonCard services={rentalData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
					</div>
				</div>
			</section>

			{/* Pagination */}
			<nav>
				<ul className="pagination justify-content-center">
					{Array.from({ length: totalPages }).map((_, index) => (
						<li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
							<button className="page-link" onClick={() => handlePageChange(index + 1)}>
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

export default Rental;