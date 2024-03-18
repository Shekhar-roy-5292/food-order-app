import React from "react";
import banner from "../assets/banner.jpg";
import { Link } from "react-router-dom";
import "../styles/Home.css";
function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1>Food Dhaba</h1>
        <p>Any Indian Foods Available Here</p>
        <Link>
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
