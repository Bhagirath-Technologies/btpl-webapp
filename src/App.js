// import './App.css';
// import { lazy, Suspense } from "react";
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import rentalData from "./data/RentalServicedata"; // Import your data
// import webData from "./data/ServiceCarddata"; // Import your data
// import ServiceDetail from './components/ServiceDetail';
// // import Rental from './pages/Rental/Rental';
// // import Home from './pages/Home/Home';
// // const Header = lazy(() => import("./components/Header"));
// // const Footer = lazy(() => import("./components/Footer"));
// const Home = lazy(() => import("./pages/Home/Home"));
// const Rental = lazy(() => import("./pages/Rental/Rental"));
// const WebDevelopment = lazy(() => import("./pages/WebDevelopment/WebDevelopment"));
// function App() {
//   return (
//     <BrowserRouter>
//       <Suspense>
//         <Header isHome={window.location.pathname === '/'} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/rental" element={<Rental data={rentalData} />} />
//           <Route path="/services" element={<WebDevelopment data={webData} />} />
//           <Route path="/rental/:id" element={<ServiceDetail data={rentalData} />} />
//           <Route path="/services/:id" element={<ServiceDetail data={webData} />} />
//         </Routes>
//       </Suspense>
//       <Footer />
//     </BrowserRouter>
//   );
// }
// export default App;






// App.js
import './App.css';
import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
import rentalData from "./data/RentalServicedata"; // Imported  data
import webData from "./data/WebServicedata"; // Imported data
import { Helmet } from 'react-helmet';

const Header = lazy(() => import("./components/Header"));
const Footer = lazy(() => import("./components/Footer"));

const Home = lazy(() => import("./pages/Home/Home"));
const About = lazy(() => import("./pages/About"));
const Rental = lazy(() => import("./pages/Rental/Rental"));
const WebDevelopment = lazy(() => import("./pages/Services/WebDevelopment"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Policy = lazy(() => import("./pages/Policy"));
const Cookies = lazy(() => import("./pages/Cookies"));
const ServiceDetail = lazy(() => import("./components/ServiceDetail"));
const BottomtoTop = lazy(() => import("./components/BottomtoTop"));
// const Ticket = lazy(() => import("./components/Ticket"));

// import ServiceDetail from './components/ServiceDetail';
// import Home from './pages/Home/Home';
// import Rental from './pages/Rental/Rental';
// import WebDevelopment from './pages/Services/WebDevelopment';
// import Terms from './pages/Terms';
// import Policy from './pages/Policy';

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Helmet>
          <title>Bhagirath Technologies | Home</title>
          <meta name="description"
            content="Welcome to Bhagirath Technologies. We specialize in providing professional services in website design, web application development, digital marketing, graphic design and IT assets leasing. Contact us today to bring your ideas to life!" />
          <meta name="keywords" content="software development | digital marketing | graphic designing | IT Assets Leasing,
    Bhagirath Technologies" />
        </Helmet>
        <Header isHome={window.location.pathname === '/'} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/rental" element={<Rental data={rentalData} />} />
          <Route path="/services" element={<WebDevelopment />} />
          <Route path="/rental/:id" element={<ServiceDetail data={rentalData} />} />
          <Route path="/services/:id" element={<ServiceDetail data={webData} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
      </Suspense>
      <Footer />
      <BottomtoTop />
      {/* <Ticket/> */}

    </BrowserRouter>
  );
}

export default App;

