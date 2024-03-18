import "./App.css";
import Navbar from "../src/components/Navbar.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element="" />
          <Route path="/menu" element="" />
          <Route path="/about" element="" />
          <Route path="/ontact" element="" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
