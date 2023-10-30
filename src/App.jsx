import "./App.css";
import Header from "./Components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Mainnav from "./Components/NavBar/MainNav";
import Health from "./Components/Health/Health";
import Finance from "./Components/Finance/Finance";
import Helping from "./Components/Helping/Helping";
import Supported from "./Components/Supported/Supported";
import Invovled from "./Components/Involved/Invovled";
import About from "./Components/About Us/About";
import Footer from "./Components/Footer/Footer";
import React, { useRef } from 'react'
import LoadingBar from 'react-top-loading-bar'

function App() {
  const ref = useRef(null)
  return (
    <>
      <LoadingBar color='#f11946' ref={ref} />
      <Header />
      <Routes>
        <Route path="/" element={<Mainnav />}>
          <Route index element={<Home />} />
          <Route path="your-health-and-wellbeing" element={<Health />} />
          <Route path="financial-aid" element={<Finance />} />
          <Route path="helping-your-business" element={<Helping />} />
          <Route path="supported-living" element={<Supported />} />
          <Route path="get-involved" element={<Invovled />} />
          <Route path="about-us" element={<About />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
