import React from "react";
import { Link } from 'react-router-dom';
const About = () => {
  return (
    <>
      <section class="bg-dark pattern-overlay-1 position-relative text-center">
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/* <!-- Title --> */}
              <h1 class="text-white-stroke display-5">About Us</h1>
              <p class="lead">
                By accessing and using this site, you agree to the following
                terms and conditions:
              </p>
              {/* <!-- Breadcrumb --> */}
              <nav class="d-flex justify-content-center">
                <ol class="breadcrumb breadcrumb-dark">
                  <li class="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active">About us</li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

   
    </>
  );
};

export default About;
