import './App.css';
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Header = lazy(() => import("./components/Header"));
const Home = lazy(() => import("./pages/Home/Home"));
const Footer = lazy(() => import("./components/Footer"));
const Rental = lazy(() => import("./pages/Rental/Rental"));
function App() {
  return (
    <BrowserRouter>
      <Header isHome={window.location.pathname === '/'}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rental" element={<Rental />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
export default App;
