import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Products from "../components/Products/Products";
import BusinessActivity from "../components/Business/BusinessActivity";
import "./App.css";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Products />
      <BusinessActivity />
      <Footer />
    </>
  );
}

export default App;
