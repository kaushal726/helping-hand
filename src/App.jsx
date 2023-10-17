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

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
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
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
