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
import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import rentalData from "./data/RentalServicedata"; // Import your data
import webData from "./data/WebServicedata"; // Import your data
import ServiceDetail from './components/ServiceDetail';
import Home from './pages/Home/Home';
import Rental from './pages/Rental/Rental';
import WebDevelopment from './pages/Services/WebDevelopment';
import Terms from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Header isHome={window.location.pathname === '/'} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rental" element={<Rental data={rentalData} />} />
          <Route path="/services" element={<WebDevelopment />} />
          <Route path="/rental/:id" element={<ServiceDetail data={rentalData} />} />
          <Route path="/services/:id" element={<ServiceDetail data={webData} />} />
          <Route path="/terms" element={<Terms />} />

        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

