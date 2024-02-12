import React, { useState } from 'react';
import CommonCard from '../../components/CommonCard';
import rentalData from '../../data/RentalServicedata';

const Rental = () => {
	const [rentalService] = useState(rentalData);
	return (
		<>
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

			{/* Rental portfolio starts of products */}
			<section class="pt-0">
				<div class="container-fluid px-lg-4">
					<div class="row">
						{/* <!-- Card item START --> */}
						<CommonCard commonData={rentalService} />
						{/* <!-- Card item END --> */}
					</div>
				</div>
			</section>
			{/* Rental portfolio ends of products */}
		</>
	)
}

export default Rental;