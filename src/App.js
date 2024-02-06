import './App.css';
import { lazy,Suspense } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import Rental from './pages/Rental/Rental';
// import Home from './pages/Home/Home';
// const Header = lazy(() => import("./components/Header"));
// const Footer = lazy(() => import("./components/Footer"));
const Home = lazy(() => import("./pages/Home/Home"));
const Rental = lazy(() => import("./pages/Rental/Rental"));
function App() {
  return (
    <BrowserRouter>
      <Suspense>
      <Header isHome={window.location.pathname === '/'} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rental" element={<Rental />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}
export default App;
