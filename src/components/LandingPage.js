import React from "react";
import "../styles/landingPage.css";
import Me from "../assets/me-fondo.png";
import Send from "../assets/send.svg";
import GitHub from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";
const LandingPage = () => {
  return (
    <section className="mainContent" id="home">
      <article className="text">
        <h1>Hi, i'am fermin</h1>
        <h3>fullstack developer</h3>
        <a href="#contact">
          <span>Contact me</span>
           <img src={Send}></img>
        </a>
      </article>
      <article className="picture">
        <img src={Me} alt="" />
      </article>
      <div className="contactLinks">
        <a href="https://github.com/FerminAguilarB22?tab=overview&from=2022-01-01&to=2022-01-31" target='_blank'>
          <img src={GitHub} alt="Github logo" />
        </a>
        <a href="https://www.linkedin.com/in/fermin-aguilar-b9168a1b8/" target='_blank'>
          <img src={Linkedin} alt="Linkedin logo" />
        </a>
      </div>
    </section>
  );
};

export default LandingPage;
