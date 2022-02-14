import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.css";
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="content">
        <h2>Contact me</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto,
          saepe assumenda cumque totam dolores debitis aliquid tempore ad esse
          ut, placeat facere obcaecati facilis veniam?
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faPhoneAlt} />
            </div>
            <div className="text">
              <h3>Phone</h3>
              <p>+54 3815852925</p>
            </div>
          </div>
          <div className="box">
            <div className="icon">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div className="text">
              <h3>Email</h3>
              <p>ferminab99@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form>
            <h2>Send Message</h2>
            <div className="inputBox">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea required />
              <span>Type your Message</span>
            </div>
            <div className="inputBox">
              <input type="submit" value="Send" required />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
