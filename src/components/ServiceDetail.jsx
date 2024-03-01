// ServiceDetail.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = ({ data }) => {
  const { id } = useParams();

  // Find the service with the matching id
  const service = data.find(service => service.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="row ">
            <div className="col-md-8">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link to={`/${service.type}`}>{`${service.type}`}</Link></li>
                  <li className="breadcrumb-item active">{service.title}</li>
                </ol>
              </nav>
              <h2  className="display-6">{service.title}</h2>
              <p  className="lead">{service.desc}</p>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
      </section >

      <section id={service.hashlinks} className="pt-0">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className="w-100" src={service.image} alt={service.title} />
            </div>
            <div className="col-md-6 mt-5 mt-md-0">
              <h3>About {service.title}</h3>
              <p>Web design is a Web development process for creating a website that focuses on aesthetic factors like layout, user interface and other visual imagery in order to make the website more visually appealing and easy to use.</p>
              <div className="row">
                {/* <!-- Features --> */}
                <div className="col-lg-6">
                  <ul className="list-group list-group-borderless list-group-icon-primary-bg">
                    <li className="list-group-item"><i className="fas fa-check"></i>Improve productivity and performance</li>
                    <li className="list-group-item"><i className="fas fa-check"></i>Get peace of mind knowing your services are in trusted hands</li>
                    <li className="list-group-item"><i className="fas fa-check"></i>Reduce your service costs</li>
                  </ul>
                </div>
                {/* <!-- Features --> */}
                <div className="col-lg-6">
                  <ul className="list-group list-group-borderless list-group-icon-primary-bg">
                    <li className="list-group-item"><i className="fas fa-check"></i>Hassle-free setup &amp; management</li>
                    <li className="list-group-item"><i className="fas fa-check"></i>Lifetime license, No monthly or yearly fee</li>
                    <li className="list-group-item"><i className="fas fa-check"></i>User-friendly admin &amp; reporting features</li>
                  </ul>
                </div>
              </div>
              <Link to="#" className="btn btn-dark btn-line mt-4">Book Now</Link>
            </div>
          </div>
          {/* <!-- Row END --> */}
        </div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae laborum doloribus magni quibusdam? Commodi ea nulla perferendis dolore tempora a, voluptate amet itaque maiores numquam aut quisquam temporibus quasi sequi sed eum. Pariatur consequuntur maxime reprehenderit possimus molestiae non tempora nihil quam, cumque in, quos cupiditate, vitae aperiam? Quis doloribus aperiam, possimus maiores aut molestiae explicabo eum? Porro ducimus beatae voluptas fugiat, iure, laudantium rerum exercitationem officia cum nesciunt dolorem? Porro vero saepe ea ipsum velit. Molestias quisquam consequatur asperiores pariatur officiis delectus nihil provident error, nemo laudantium soluta et qui placeat corporis non quod labore? Autem soluta odio ea beatae aut perspiciatis, blanditiis ipsa quidem qui similique eos eaque consectetur rerum facere, itaque velit reprehenderit excepturi ipsum cumque alias dignissimos quisquam. Placeat laboriosam quis facilis aperiam, accusantium amet porro ullam ut. Quae nemo nostrum veniam modi asperiores consequatur quos nisi officia dicta quam, laboriosam a eum nulla. Modi itaque sint, ab, reiciendis blanditiis facilis cum dolores nemo a, non dolorum soluta perferendis laudantium vero fugiat reprehenderit labore quae beatae quibusdam corrupti optio ducimus iure omnis autem. Architecto eaque aliquid amet, commodi blanditiis consequuntur vero reprehenderit repellendus aperiam, soluta obcaecati voluptatum, illum eius autem modi cupiditate earum quia. Ex dolore nihil ut sed labore! Voluptas delectus fugiat est tempore accusantium exercitationem dolorem sint placeat vitae porro consectetur pariatur reiciendis consequatur a dolorum repudiandae quisquam expedita aspernatur, excepturi, animi temporibus officia quos harum quas. Sunt, reprehenderit. Recusandae modi consequatur dolorum tempore nam magnam obcaecati aspernatur tempora. Recusandae corporis rem minus ex odio doloribus, incidunt accusamus nesciunt aliquam illo ratione, labore quisquam! Beatae, excepturi ipsa quasi porro quis veniam ipsam fugit blanditiis quisquam nulla, optio a totam eveniet. Hic temporibus et eaque deserunt modi! Laudantium dolorem consectetur libero vitae iste culpa placeat repellat ex harum saepe omnis praesentium cumque maiores suscipit, ratione commodi ad? Minima sequi ipsam odit numquam molestias tempora ab provident! Magni odit possimus dolorum incidunt assumenda ipsa accusantium voluptate nulla culpa, eligendi illo ratione consequatur laudantium atque recusandae ex ad et soluta! Sint, explicabo voluptatem nesciunt, corrupti corporis ea blanditiis, dolorem libero natus impedit autem. Fugiat libero dolore perferendis distinctio nam nobis cupiditate magni, sint laboriosam consectetur quia ducimus autem totam magnam eveniet alias quam architecto, labore eaque provident fuga vel. Debitis animi provident, iste quasi, fugit velit itaque dolorem ea impedit nisi nesciunt odio libero ipsum iure eos, voluptate perspiciatis! Dolor, laboriosam animi atque praesentium facilis a aperiam, consequatur similique cumque alias, cupiditate enim nostrum voluptate eum maiores placeat obcaecati minus explicabo suscipit corrupti dolorem tenetur? Dolor, fuga voluptas. Molestiae quaerat consequatur veniam odit modi. Perspiciatis, quidem adipisci! Culpa consequatur atque dolores, vero eveniet nihil distinctio minima, beatae eum modi odio assumenda, corrupti nobis? Sed totam quo ipsum, asperiores rem consequuntur harum dolorum, quis exercitationem sunt aut! Consequatur dolorum nemo natus commodi dolorem earum, ducimus error, veniam aut harum culpa exercitationem excepturi laudantium deserunt at illo sint voluptatum sapiente nihil? Doloremque earum expedita fuga? Odio laboriosam mollitia maxime repudiandae. Numquam fugit, placeat repudiandae voluptatem sunt nihil atque sit.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt dolorem velit maiores vero quisquam voluptate incidunt fuga officiis fugit odit perferendis cum eveniet voluptatem rem error vitae ut quibusdam repellendus ducimus id laboriosam natus. Ullam veniam vel sapiente eius aperiam suscipit sunt maiores expedita excepturi dicta, autem voluptate ducimus aspernatur a est recusandae blanditiis modi tempore nesciunt non iste! Modi accusamus repellendus, eius minima magnam eum, veritatis veniam ipsa excepturi amet debitis, numquam quibusdam facere sint consequuntur iure corrupti quia velit. Architecto, iste veritatis. Provident deserunt fuga laborum dolore officia libero asperiores atque vero, error sit voluptate praesentium voluptatem possimus sint consequuntur quibusdam eum delectus. Quod ipsam voluptate, deleniti dolorem maiores repellendus voluptates natus ea corporis architecto aperiam quas dolores accusamus nemo commodi impedit voluptatem totam quae aliquid explicabo dolorum. Nemo doloribus veritatis voluptates dolorem expedita ipsa atque fuga accusamus quos, illo necessitatibus nam maiores alias aliquid voluptate illum hic commodi quisquam mollitia adipisci. Distinctio natus quo nostrum illum sunt ipsa mollitia maxime error placeat explicabo, saepe, consectetur deserunt repudiandae quibusdam sapiente quaerat repellat. Nostrum itaque numquam labore nulla voluptates deserunt tempore dolorem, vero obcaecati! Aperiam, minus dolores! Esse praesentium quaerat non, voluptatibus nobis consectetur nemo animi atque eaque veniam ad tempore voluptas dolorum distinctio molestiae ratione quis totam reprehenderit harum deleniti rerum magnam. Quod laboriosam quae suscipit! Suscipit, officia ex. Nisi dolore, quas neque error voluptas ab, harum deleniti ratione blanditiis veritatis reiciendis quibusdam velit consectetur. Saepe corrupti dolores maxime voluptates illo consectetur, quae velit iusto eius temporibus, autem officia? Ipsam nemo magnam eligendi, illum dolore doloribus quam praesentium nam rem libero nisi ipsum nesciunt cumque quos vero magni dolor, in aspernatur distinctio nihil dolores reprehenderit quod asperiores veritatis? Sapiente accusantium doloribus ratione ut rerum magnam nobis sunt odio placeat atque hic, dolorem iste quisquam dolores minima! Suscipit repellat vitae aperiam ratione, quo minima aut. Hic, necessitatibus itaque. Nihil, quisquam adipisci? Sed neque animi corrupti incidunt. Molestias, saepe placeat dicta eos numquam animi assumenda, ea esse, accusamus consectetur praesentium soluta. Culpa et modi a, facere magni debitis ipsa labore amet quis corrupti, quam dicta nobis distinctio aspernatur voluptas eum sapiente rem, temporibus molestias ad. Similique veniam quam, reiciendis aliquam voluptate beatae non pariatur tempore natus iure nostrum repellendus quo reprehenderit magni fugiat mollitia sequi a dolorum ut molestiae. Doloremque velit autem pariatur vitae distinctio at omnis labore sapiente consequuntur rem veniam nostrum, nemo asperiores praesentium corrupti consequatur totam exercitationem suscipit harum. Omnis labore quaerat amet rem exercitationem tenetur voluptatibus iusto doloribus minima eos unde, necessitatibus nisi, dolores id fugiat nulla explicabo aut suscipit ad sit saepe dignissimos libero quod. Architecto odit delectus vitae nesciunt impedit recusandae earum consequatur fuga aperiam! Itaque a provident aliquam? Nobis recusandae hic distinctio mollitia laudantium cumque quas harum dolores. Magnam similique doloremque alias deserunt et possimus ex minus itaque minima mollitia quos earum nemo excepturi recusandae deleniti, neque facilis reiciendis eligendi esse! Est dolorum, unde, asperiores, deleniti quam vero saepe beatae sequi laborum autem iste necessitatibus officiis. Laudantium, ex exercitationem. Incidunt delectus libero distinctio est et minus quaerat, quo autem illo itaque cum quasi explicabo quas officiis pariatur consequatur nostrum aut voluptate corrupti sunt totam aliquid accusamus fugiat animi? Labore maiores quas qui sunt illum impedit possimus odio accusamus fugiat aperiam officiis fugit nesciunt iste provident, ipsam, officia, ut ratione ab eos? Quis, omnis earum? Asperiores tenetur delectus, magnam quae dolorum autem, totam distinctio aut suscipit ullam, in sequi? Quibusdam odit ea dolore perferendis quae dicta voluptatum distinctio iusto obcaecati vitae quam aliquid dolor accusantium aspernatur voluptate ratione nulla a, eligendi quia, repudiandae sapiente assumenda nihil. Dolor perferendis itaque corrupti. Quia, explicabo perferendis.</p>
      </section>
    </>
  );
}

export default ServiceDetail;
