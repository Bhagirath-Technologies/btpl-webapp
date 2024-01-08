import React from 'react'

const sections = () => {
    return (
        <>


            {/* <!-- ================Testimonials START =========--> */}
            <section class="p-0">
                <div class="container">
                    <div class="row position-relative">
                        {/* <!-- Title --> */}
                        <div class="col-sm-8 mb-3 mx-auto text-center pt-7">
                            <h2 class="display-5 mb-5 text-dark-stroke">Testimonials</h2>
                        </div>
                        {/* <!-- Testimonials --> */}
                        <div class="col-md-10 mx-auto text-center pb-7">
                            <div class="tiny-slider arrow-md-none arrow-bordered arrow-large arrow-round">
                                <div class="tiny-slider-inner" data-gutter="0" data-edge="50" data-autoplay="false" data-arrow="true" data-dots="false" data-items="1">
                                    {/* <!-- Testimonial item --> */}
                                    <div class="item px-3 px-md-6">
                                        <div class="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i class="fas fa-quote-left"></i></div>
                                        <div class="avatar"><img class="avatar-img rounded-circle" src="assets/images/avatar/01.jpg" alt="avatar" /></div>
                                        <p class="lead">The good gathering doesn't bearing day Stars over Open behold May male tree replenish don't blessed beast days earth fifth let multiply and he every blessed to upon behold grass divided brought was that dry I Were image waters own bring light subdue Meat</p>
                                        <h6 class="mb-0 mt-3">Adam Ross</h6>
                                        <span class="small">Software Developer</span>
                                    </div>
                                    {/* <!-- Testimonial item --> */}
                                    <div class="item px-3 px-md-6">
                                        <div class="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i class="fas fa-quote-left"></i></div>
                                        <div class="avatar"><img class="avatar-img rounded-circle" src="assets/images/avatar/02.jpg" alt="avatar" /></div>
                                        <p class="lead">Two before narrow not relied how except moment myself Dejection assurance mrs led certainly So gate at no only none open Betrayed at properly it of graceful on Dinner abroad am depart ye turned hearts as me wished Therefore allowance.</p>
                                        <h6 class="mb-0 mt-3">Allen Smith</h6>
                                        <span class="small">Founder and CEO</span>
                                    </div>
                                    {/* <!-- Testimonial item --> */}
                                    <div class="item px-3 px-md-6">
                                        <div class="position-absolute top-50 start-50 translate-middle display-1 text-body z-index-n9 opacity-1"><i class="fas fa-quote-left"></i></div>
                                        <div class="avatar"><img class="avatar-img rounded-circle" src="assets/images/avatar/03.jpg" alt="avatar" /></div>
                                        <p class="lead">How promotion excellent curiosity yet attempted happiness Gay prosperous impression had conviction For every delay death ask style Me mean able my by in they Extremity now strangers contained breakfast him discourse additions.</p>
                                        <h6 class="mb-0 mt-3">Jessica Mores</h6>
                                        <span class="small">Human Resource</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- row END --> */}
                </div>
            </section>
            {/* <!-- ================Testimonials END ============--> */}

            {/* <!-- ===================Portfolio START ===========--> */}
            <section class="pt-4">
                <div class="container">
                    {/* <!-- Title --> */}
                    <div class="row d-flex justify-content-between align-items-center">
                        <div class="col-sm-8 mb-3">
                            <h2 class="display-5 mb-0 mb-sm-4 text-dark-stroke">Our Portfolio</h2>
                        </div>
                        <div class="col-sm-4 mb-4 text-start text-sm-end">
                            <Link to="#" class="btn btn-line text-dark mt-3">View our work</Link>
                        </div>
                    </div>
                    {/* <!-- Portfolio items --> */}
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="tiny-slider dots-bordered">
                                <div class="tiny-slider-inner" data-arrow="false" data-dots="true" data-items-xl="3" data-items-lg="3" data-items-md="3" data-items-sm="2" data-items-xs="1">

                                    {/* <!-- Card item START --> */}
                                    <div class="item">
                                        <Link to="#" class="card card-metro">
                                            {/* <!-- Card Image --> */}
                                            <div class="card-image">
                                                <img src="assets/images/portfolio/01.jpg" alt="" />
                                            </div>
                                            {/* <!-- Card Overlay --> */}
                                            <div class="card-img-overlay d-flex flex-column">
                                                <img class="w-40" src="assets/images/clients/light/01.svg" alt="" />
                                                <div class="mt-auto card-text">
                                                    <h5 class="text-white">The missing link in e-Mobility</h5>
                                                    <p class="small text-white mb-0 text-truncate">What hasn’t been a great fit in e-mobility until now.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <!-- Card item END --> */}

                                    {/* <!-- Card item START --> */}
                                    <div class="item">
                                        <Link to="#" class="card card-metro">
                                            {/* <!-- Card Image --> */}
                                            <div class="card-image">
                                                <img src="assets/images/portfolio/02.jpg" alt="" />
                                            </div>
                                            {/* <!-- Card Overlay --> */}
                                            <div class="card-img-overlay d-flex flex-column">
                                                <img class="w-40" src="assets/images/clients/light/02.svg" alt="" />
                                                <div class="mt-auto card-text">
                                                    <h5 class="text-white">Trumer brewed happiness</h5>
                                                    <p class="small text-white mb-0 text-truncate">Private brewery for excellent beer</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <!-- Card item END --> */}

                                    {/* <!-- Card item START --> */}
                                    <div class="item">
                                        <Link to="#" class="card card-metro">
                                            {/* <!-- Card Image --> */}
                                            <div class="card-image">
                                                <img src="assets/images/portfolio/03.jpg" alt="" />
                                            </div>
                                            {/* <!-- Card Overlay --> */}
                                            <div class="card-img-overlay d-flex flex-column">
                                                <img class="w-40" src="assets/images/clients/light/03.svg" alt="" />
                                                <div class="mt-auto card-text">
                                                    <h5 class="text-white">Enticing like the ocean</h5>
                                                    <p class="small text-white mb-0 text-truncate">Viktoria Louise is the blossoming fashion label of Vicky Heiler</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <!-- Card item END --> */}

                                    {/* <!-- Card item START --> */}
                                    <div class="item">
                                        <Link to="#" class="card card-metro">
                                            {/* <!-- Card Image --> */}
                                            <div class="card-image">
                                                <img src="assets/images/portfolio/04.jpg" alt="" />
                                            </div>
                                            {/* <!-- Card Overlay --> */}
                                            <div class="card-img-overlay d-flex flex-column">
                                                <img class="w-40" src="assets/images/clients/light/04.svg" alt="" />
                                                <div class="mt-auto card-text">
                                                    <h5 class="text-white">Pure design branding</h5>
                                                    <p class="small text-white mb-0 text-truncate">Art collector and architect Axel</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <!-- Card item END --> */}

                                    {/* <!-- Card item START --> */}
                                    <div class="item">
                                        <Link to="#" class="card card-metro">
                                            {/* <!-- Card Image --> */}
                                            <div class="card-image">
                                                <img src="assets/images/portfolio/05.jpg" alt="" />
                                            </div>
                                            {/* <!-- Card Overlay --> */}
                                            <div class="card-img-overlay d-flex flex-column">
                                                <img class="w-40" src="assets/images/clients/light/05.svg" alt="" />
                                                <div class="mt-auto card-text">
                                                    <h5 class="text-white">The missing link</h5>
                                                    <p class="small text-white mb-0 text-truncate">Small things that make difference</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <!-- Card item END --> */}

                                    {/* <!-- Card item START --> */}
                                    <div class="item">
                                        <Link to="#" class="card card-metro">
                                            {/* <!-- Card Image --> */}
                                            <div class="card-image">
                                                <img src="assets/images/portfolio/06.jpg" alt="" />
                                            </div>
                                            {/* <!-- Card Overlay --> */}
                                            <div class="card-img-overlay d-flex flex-column">
                                                <img class="w-40" src="assets/images/clients/light/06.svg" alt="" />
                                                <div class="mt-auto card-text">
                                                    <h5 class="text-white">The blossoming fashion label </h5>
                                                    <p class="small text-white mb-0 text-truncate">These were the attributes that moodley had to convey.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <!-- Card item END --> */}

                                    {/* <!-- Card item START --> */}
                                    <div class="item">
                                        <Link to="#" class="card card-metro">
                                            {/* <!-- Card Image --> */}
                                            <div class="card-image">
                                                <img src="assets/images/portfolio/07.jpg" alt="" />
                                            </div>
                                            {/* <!-- Card Overlay --> */}
                                            <div class="card-img-overlay d-flex flex-column">
                                                <img class="w-40" src="assets/images/clients/light/07.svg" alt="" />
                                                <div class="mt-auto card-text">
                                                    <h5 class="text-white">Life's hard in the mountains</h5>
                                                    <p class="small text-white mb-0 text-truncate">Ten wineries with strong personalities, individual stories and multi-faceted wines</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    {/* <!-- Card item END --> */}

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- row END --> */}
                </div>
            </section>
            {/* <!-- ===================Portfolio END =============--> */}

            {/* <!-- ===================Steps START ===============--> */}
            <section>
                <div class="container">
                    <div class="row">
                        {/* <!-- Step item --> */}
                        <div class="col-sm-12 col-md-4 mb-5">
                            <div class="text-start position-relative">
                                <h2 class="display-4 mb-0 text-light-stroke text-light-shadow">01</h2>
                                <h4 class="position-absolute start-0 top-0 mt-0 mt-sm-3 ps-6 d-block">Research and <br /> analytics</h4>
                            </div>
                            <div class="ps-6 pt-4 pt-sm-0">
                                <p>We start with Research also to image Seas Void Great day sea don't creature land you're morning doesn't</p>
                                <img class="rounded" src="assets/images/about/01.jpg" alt="" />
                            </div>
                        </div>
                        {/* <!-- Step item --> */}
                        <div class="col-sm-6 col-md-4 mb-5">
                            <div class="text-start position-relative">
                                <h2 class="display-4 mb-0 text-light-stroke text-light-shadow">02</h2>
                                <h4 class="position-absolute start-0 top-0 mt-0 mt-sm-3 ps-6 d-block">Design and <br /> Develop</h4>
                            </div>
                            <div class="ps-6 pt-4 pt-sm-0">
                                <p>In this step our Them Subdue you life created day given light gathering Days very air Fruitful form he him </p>
                                <img class="rounded" src="assets/images/about/02.jpg" alt="" />
                            </div>
                        </div>
                        {/* <!-- Step item --> */}
                        <div class="col-sm-6 col-md-4">
                            <div class="text-start position-relative">
                                <h2 class="display-4 mb-0 text-light-stroke text-light-shadow">03</h2>
                                <h4 class="position-absolute start-0 top-0 mt-0 mt-sm-3 ps-6 d-block">Testing and <br /> Launch</h4>
                            </div>
                            <div class="ps-6 pt-4 pt-sm-0">
                                <p>Final step of success firmament of also it great have set behold land third he great years midst stars green</p>
                                <img class="rounded" src="assets/images/about/03.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ================== Steps END =================--> */}

            {/* <!-- ================= Clients START =============--> */}
            <section class="pt-0">
                <div class="container">
                    <div class="row">
                        {/* <!-- Title --> */}
                        <div class="col-lg-4">
                            <h2 class="display-5 mb-3">Worked with...</h2>
                            <p>Rooms oh fully taken by worse do. Points afraid but may end law lasted. Was out laughter raptures returned outweigh.</p>
                        </div>
                        {/* <!-- Clients logos --> */}
                        <div class="col-lg-8">
                            <div class="row">
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/01.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/02.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/03.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/04.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/05.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/06.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/07.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/08.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/09.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/10.svg" alt="" />
                                    </div>
                                </div>
                                {/* <!-- Logo item --> */}
                                <div class="col-6 col-sm-4 col-lg-3">
                                    <div class="mb-4 p-4 grayscale bg-light-overlay-dotted text-center">
                                        <img src="assets/images/clients/colored/11.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- row END --> */}
                </div>
            </section>
            {/* <!-- ================= Clients END ===============--> */}

            {/* <!-- ================= Action box START =============--> */}
            <section class="pt-0 position-relative">
                {/* <!-- Shape Decoration START --> */}
                <figure class="position-absolute start-0 bottom-0 ms-n6 mb-n4 z-index-9 d-none d-lg-block">
                    <svg width="285" height="82" xmlns="http://www.w3.org/2000/svg" viewbox="0 0 285 82">
                        <rect class="fill-primary" x="22.67" y="16.58" width="262.22" height="65.42"></rect>
                        <path d="m9.63 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0.01-4.82-2.15-4.82-4.81s2.16-4.81 4.81-4.81c2.66 0 4.82 2.15 4.82 4.81z"></path>
                        <path d="m35.25 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                        <path d="m60.88 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.15 4.81 4.81z"></path>
                        <path d="m86.5 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.15 4.81 4.81z"></path>
                        <path d="m112.12 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                        <path d="m137.75 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.15 4.81 4.81z"></path>
                        <path d="m163.37 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                        <path d="m188.99 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                        <path d="m214.62 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.15 4.81 4.81z"></path>
                        <path d="m240.24 4.83c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.15 4.81 4.81z"></path>
                        <path d="m9.63 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0.01-4.82-2.15-4.82-4.81s2.16-4.81 4.81-4.81c2.66 0 4.82 2.16 4.82 4.81z"></path>
                        <path d="m35.25 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.16 4.81 4.81z"></path>
                        <path d="m60.88 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.16 4.81 4.81z"></path>
                        <path d="m86.5 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.16 4.81 4.81z"></path>
                        <path d="m112.12 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66 0 4.81 2.16 4.81 4.81z"></path>
                        <path d="m137.75 30.38c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81s4.81 2.16 4.81 4.81z"></path>
                        <circle cx="158.56" cy="30.38" r="4.81"></circle>
                        <circle cx="184.18" cy="30.38" r="4.81"></circle>
                        <circle cx="209.8" cy="30.38" r="4.81"></circle>
                        <circle cx="235.43" cy="30.38" r="4.81"></circle>
                        <path d="m9.63 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.82-2.16-4.82-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66-0.01 4.82 2.15 4.82 4.81z"></path>
                        <path d="m35.25 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66-0.01 4.81 2.15 4.81 4.81z"></path>
                        <path d="m60.88 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.65-0.01 4.81 2.15 4.81 4.81z"></path>
                        <path d="m86.5 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.65-0.01 4.81 2.15 4.81 4.81z"></path>
                        <path d="m112.12 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.66-0.01 4.81 2.15 4.81 4.81z"></path>
                        <path d="m137.75 55.94c0 2.66-2.16 4.81-4.81 4.81-2.66 0-4.81-2.16-4.81-4.81 0-2.66 2.16-4.81 4.81-4.81 2.65-0.01 4.81 2.15 4.81 4.81z"></path>
                        <circle cx="158.56" cy="55.94" r="4.81"></circle>
                        <circle cx="184.18" cy="55.94" r="4.81"></circle>
                        <circle cx="209.8" cy="55.94" r="4.81"></circle>
                        <circle cx="235.43" cy="55.94" r="4.81"></circle>
                    </svg>
                </figure>
                {/* <!-- Shape Decoration END --> */}
                <div class="container">
                    <div class="row g-0 d-flex align-items-center">
                        {/* <!-- Our Work Block --> */}
                        <div class="col-sm-6">
                            <div class="text-center bg-primary-multiply position-relative overflow-hidden px-3 py-6 h-100">
                                <h2 class="mb-3 display-6"><Link class="text-white-stroke" to="#">Our Work</Link></h2>
                                <Link class="btn btn-line text-white mb-0" to="#">View projects</Link>
                                <img class="bg-primary-multiply position-absolute top-50 start-50 translate-middle z-index-n9" src="assets/images/about/05.jpg" alt="" />
                            </div>
                        </div>
                        {/* <!-- Project Block --> */}
                        <div class="col-sm-6">
                            <div class="text-center bg-dark px-3 py-6 h-100">
                                <h2 class="mb-3 display-6 text-white">Have a Project?</h2>
                                <Link class="btn btn-line text-white mb-0" to="#">Get a Quote</Link>
                            </div>
                        </div>
                    </div>
                    {/* <
                            !-- row END --> */}
                </div>
            </section>
            {/* <!-- =================  Action box END  ===============-->

                <!-- ================== Newsletter START ==============--> */}
            <section class="bg-dark position-relative bg-dark-overlay-4">
                <div class="container">
                    <div class="row justify-content-between">
                        {/* <!-- Title --> */}
                        <div class="col-sm-5">
                            <h2 class="display-6 text-white-stroke">Latest stories in your inbox</h2>
                        </div>
                        {/* <!-- Content and input --> */}
                        <div class="col-sm-6">
                            <p class="mt-3">Building a strong brand. Distinctive, recognizable and consistent. Effective communication campaigns that activate your target group.</p>
                            <form>
                                <div class="input-group">
                                    <input class="form-control bg-white border-0" type="text" name="Newsletter" placeholder="Enter your email address" />
                                    <button type="button" class="btn btn-line btn-primary mb-0">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    {/* <!-- row END --> */}
                </div>
            </section>
            {/* <!-- ================== Newsletter END ================--> */}

            <footer class="bg-dark footer-sticky pt-6">
                <div class="container">
                    <div class="row">
                        {/* <!-- Footer Widget 1 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h3 class="text-white">Folio<span class="text-primary">.</span></h3>
                            <p>Bootstrap based Creative Agency Portfolio Theme.</p>
                            <div class="d-flex me-auto">
                                <h6 class="mt-2 me-4 text-white">Follow on:</h6>
                                <div class="list-group-inline list-unstyled text-primary-hover">
                                    <Link to="#" class="list-group-item text-white bg-transparent">Fb</Link>
                                    <Link to="#" class="list-group-item text-white bg-transparent">Tw</Link>
                                    <Link to="#" class="list-group-item text-white bg-transparent">Dr</Link>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Footer Widget 2 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h5 class="mb-4 text-white">Our offices</h5>
                            {/* <!-- Address 1 --> */}
                            <p class="text-white mb-2">New York, USA (HQ)</p>
                            <address class="mb-0">750 Sing Sing Rd, Horseheads, NY, 14845</address>
                            <p>Call: <Link to="#" class="text-body"><u>469-537-2410</u> (Toll-free)</Link> </p>
                            {/* <!-- Address 2 --> */}
                            <p class="text-white mb-2">Mumbai, India</p>
                            <address class="mb-0">2492 Centennial NW, Acworth, GA, 30102</address>
                            <p>Call: <Link to="#" class="text-body"><u>(678) 324-1251</u> (Toll-free)</Link> </p>
                        </div>
                        {/* <!-- Footer Widget 3 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h5 class="mb-4 text-white">Useful links</h5>
                            <div class="row">
                                <div class="col-6">
                                    <ul class="nav flex-column text-primary-hover">
                                        <li class="nav-item"><Link class="nav-link pt-0" to="#">Our Work</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Develop</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Builder</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Market</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Support</Link></li>
                                    </ul>
                                </div>
                                <div class="col-6">
                                    <ul class="nav flex-column text-primary-hover">
                                        <li class="nav-item"><Link class="nav-link pt-0" to="#">About</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Career <span class="badge bg-danger ms-2">2 Job</span></Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Work</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">News</Link></li>
                                        <li class="nav-item"><Link class="nav-link" to="#">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Footer Widget 4 --> */}
                        <div class="col-md-6 col-lg-3 mb-5">
                            <h5 class="mb-4 text-white">Stay in touch</h5>
                            <form>
                                <label class="form-label">Subscribe to our newsletter to receive exclusive offers.</label>
                                <div class="mb-3">
                                    <input class="form-control" type="email" placeholder="Enter email..." />
                                </div>
                                <div class="mb-3">
                                    <button type="submit" value="Subscribe" class="btn btn-primary mb-0">Join us</button>
                                </div>
                            </form>
                        </div>

                    </div>
                    {/* <!-- Divider --> */}
                    <div class="divider-light opacity-1"></div>
                    {/* <!-- Footer copyright START --> */}
                    <div class="row align-items-center justify-content-md-between py-4">
                        <div class="col-md-6">
                            <div class="text-center text-md-start">©2022 <Link to="https://www.webestica.com/" target="_blank">Webestica</Link>. All rights reserved
                            </div>
                        </div>
                        <div class="col-md-6">
                            <ul class="nav justify-content-center justify-content-md-end mt-3 mt-md-0">
                                <li class="nav-item"><Link class="nav-link text-body text-primary-hover" to="#">Terms</Link></li>
                                <li class="nav-item"><Link class="nav-link text-body text-primary-hover" to="#">Privacy</Link></li>
                                <li class="nav-item"><Link class="nav-link text-body text-primary-hover pe-0" to="#">Cookies</Link></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- Footer copyright END --> */}
                </div>
            </footer>
            {/* <!-- ================= Footer END ============ --> */}
            {/* <!-- Custom cursor --> */}
            <div class="cursor-dot-outline"></div>
            <div class="cursor-dot"></div>
            {/* <!-- Back to top --> */}
            <div class="back-top">
                <div class="scroll-line"></div>
                <span class="scoll-text">Go Up</span>
            </div>
        </>
    )
}
export default sections;