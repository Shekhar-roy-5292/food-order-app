import React from "react";
import "../styles/Contact.css";
import ContactImage from "../assets/contact.jpg";
function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${ContactImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form action="post" id="contact-form">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Name"
            id="name"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your email Address"
            id="email"
          />
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="30" rows="10"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
