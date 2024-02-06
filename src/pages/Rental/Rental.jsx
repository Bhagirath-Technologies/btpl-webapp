import React from 'react';
import {Link} from 'react-router-dom';

const Rental = () => {
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
						<div class="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
							<div class="card">
								<div class="position-relative">
									{/* <!-- Card Image --> */}
									<img class="card-img-top rounded" src="https://img.freepik.com/free-photo/laptop-with-colorful-screen-white-background-3d-rendering_1142-50640.jpg?t=st=1707209836~exp=1707213436~hmac=674983b0e98495bc81e780e29b3f4c115110b6d3d8a4c59a4edfa7a810511b62&w=826" alt="rental assets" />
										{/* <!-- Card Overlay --> */}
										<div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
											<Link to="#" class="btn btn-white btn-sm btn-line">Grab Now</Link>
										</div>
								</div>
								{/* <!-- Card body --> */}
								<div class="card-body px-0 mt-n5 position-relative zindex-9">
									<span class="display-9 mb-0 mt-2 font-alt fw-normal bg_blue rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">Mac Book</span>
									<h5 class="card-title"><Link to="#">CORE i7 laptop (12th Gen)</Link></h5>
									<p class="small">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
								</div>
							</div>
						</div>
						{/* <!-- Card item END --> */}
						{/* <!-- Card item START --> */}
						<div class="col-sm-6 col-md-4 col-lg-3 col-xxl-2">
							<div class="card">
								<div class="position-relative">
									{/* <!-- Card Image --> */}
									<img class="card-img-top rounded" src="https://img.freepik.com/free-photo/nobody-empty-call-center-workstation-with-computers-audio-instruments-no-people-customer-service-office-desks-with-telecommunications-technology-offering-helpline-assistance_482257-44179.jpg?w=1480&t=st=1707222857~exp=1707223457~hmac=25cb7e0329cce975a42c886a2951d3d04fbe409bda81b566198a287029b1b28e" alt="rental assets" />
										{/* <!-- Card Overlay --> */}
										<div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
											<Link to="#" class="btn btn-white btn-sm btn-line">Grab Now</Link>
										</div>
								</div>
								{/* <!-- Card body --> */}
								<div class="card-body px-0 mt-n5 position-relative zindex-9">
									<span class="display-9 mb-0 mt-2 font-alt fw-normal bg_blue rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">DeskTops</span>
									<h5 class="card-title"><Link to="#">CORE i3 (7th Gen)</Link></h5>
									<p class="small">Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced.</p>
								</div>
							</div>
						</div>
						{/* <!-- Card item END --> */}
					</div>
				</div>
			</section>
			{/* Rental portfolio ends of products */}
		</>
	)
}

export default Rental;