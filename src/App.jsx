import React from "react";
import Navbar from './components/Navbar/Navbar.jsx'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx"
import PalceOrder from "./pages/PlaceOrder/PlaceOrder.jsx"
import Footer from "./components/Footer/Footer.jsx";
const App = () => {
  return (
    <>
    <div className="app">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/cart" element={<Cart />}/>
      <Route path="/order" element={<PalceOrder />}/>
    </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App;