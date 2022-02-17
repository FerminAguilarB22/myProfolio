import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { init } from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "../styles/contact.css";
import Swal from "sweetalert2";

const Contact = () => {
  init("user_Y8n6ZNvbd70tCPorAXpJO");
  const [user_name, setUser_name] = useState("");
  const [destinatario, setDestinatario] = useState("");
  const [consulta, setConsulta] = useState("");

  const validarEmail = (email) => {
    let expReg =
      /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    let isValid = expReg.test(email);
    if (isValid === true) {
      return true;
    } else {
      return false;
    }
  };

  const campoRequerido = (input) => {
    if (input.trim() === "") {
      return false;
    } else {
      return true;
    }
  };

  const handleEmail = (e) => {
    e.preventDefault();
    if (
      (campoRequerido(user_name),
      campoRequerido(consulta),
      validarEmail(destinatario))
    ) {
      const templateParams = {
        from_name: "Fermin Aguilar",
        user_name,
        destinatario,
        consulta,
        message:
          "Thank you for your message, in the next few hours I will be getting in touch with you.",
      };

      emailjs.send("service_oab1pp9", "template_xfzo3c9", templateParams).then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
      e.target.reset();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your message was successfully sent",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Make sure you fill in all the fields correctly",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="content">
        <h2>Contact me</h2>
        <p>
          If you are interested in working with me or just have any questions,
          feel free to contact me.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box"></div>
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
          <form onSubmit={handleEmail}>
            <h2>Let's work together</h2>
            <div className="inputBox">
              <input
                type="text"
                required
                onChange={(e) => setUser_name(e.target.value)}
              />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input
                type="email"
                required
                onChange={(e) => setDestinatario(e.target.value)}
              />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea
                required
                onChange={(e) => {
                  setConsulta(e.target.value);
                }}
              />
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
