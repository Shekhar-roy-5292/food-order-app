import "./App.css";
import Navbar from "../src/components/Navbar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Footer from "./components/Footer.js";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element="" />
          <Route path="/about" element="" />
          <Route path="/ontact" element="" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
