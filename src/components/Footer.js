import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialMedia">
        <GoogleIcon />
        <FacebookIcon />
        <InstagramIcon />
        <TwitterIcon />
      </div>
        <p>&copy; 2024 Shekhar Roy</p>
    </div>
  );
};

export default Footer;
