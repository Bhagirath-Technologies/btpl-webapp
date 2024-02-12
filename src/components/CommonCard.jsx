import React from 'react';
import { Link } from 'react-router-dom';

const CommonCard = ({ commonData }) => {
    return (
        <>
            {commonData.map((services) => {
                return (
                    <>
                        {/* <!-- Card item START --> */}
                        <div class={services.class}>
                            <div class="card">
                                <div class="position-relative">
                                    {/* <!-- Card Image --> */}
                                    <img class="card-img-top rounded" src={services.image} alt="rental assets" />
                                    {/* <!-- Card Overlay --> */}
                                    <div class="position-absolute top-50 start-50 translate-middle card-element-hover p-0">
                                        <Link to="#" class="btn btn-white btn-sm btn-line">Grab Now</Link>
                                    </div>
                                </div>
                                {/* <!-- Card body --> */}
                                <div class="card-body px-0 mt-n5 position-relative zindex-9">
                                    <span class="display-9 mb-0 mt-2 font-alt fw-normal bg_blue rounded text-white px-2 py-1 ms-3 mb-3 d-inline-block">{services.title}</span>
                                    <h5 class="card-title"><Link to="#">{services.desc}</Link></h5>
                                    <p class="small">{services.title}</p>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Card item END --> */}
                    </>
                )
            }
            )
            }

        </>
    )
}

export default CommonCard;