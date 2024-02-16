// import React, { useState } from 'react';
// import CommonCard from '../../components/CommonCard';
// import rentalData from '../../data/RentalServicedata';

// const Rental = () => {
// 	const [rentalService] = useState(rentalData);
// 	return (
// 		<>
// 			<section>
// 				<div class="container">
// 					<div class="row d-flex justify-content-lg-between">
// 						<div class="col-12">
// 							<h1 class="display-4 text-dark-stroke text-primary-shadow">Rental Services</h1>
// 							<p class="lead">Get hire you laptop, desktop , IT assets Now !</p>
// 						</div>
// 					</div>
// 				</div>
// 			</section>

// 			{/* Rental portfolio starts of products */}
// 			<section class="pt-0">
// 				<div class="container-fluid px-lg-4">
// 					<div class="row">
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

const Rental = () => {
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
				<div class="container">
					<div class="row d-flex justify-content-lg-between">
						<div class="col-12">
							<h1 class="display-4 text-dark-stroke text-primary-shadow">Rental Services</h1>
							<p class="lead">Get hire you laptop, desktop , IT assets Now !</p>
						</div>
					</div>
				</div>
			</section>

			<section class="pt-0">
				<div class="container-fluid px-lg-4">
					<div class="row">
						{/* Pass the currentPage and itemsPerPage props to CommonCard */}
						<CommonCard services={rentalData} currentPage={currentPage} itemsPerPage={itemsPerPage} />
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

export default Rental;