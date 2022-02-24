import React from "react";
import "../styles/about.css";
import Yo from '../assets/me.jpg'
import YoSm from '../assets/fotoCarnet1.jpeg'
import CV from '../assets/cv.pdf'
const About = () => {
  return (
    <section className="about" id="about">
      <div className="title-box">
        <h2 className="title">About</h2>
      </div>
      <article className="contentBox">
        <img src={Yo} alt=""  className="display-md"/>
        <img src={YoSm} alt=""  className="display-sm"/>
        <div>
        <h3>Hi, i'am fermin</h3>
        <p>
        I am a junior web developer, I have great leadership, problem solving and teamwork skills. I am creative, proactive and interested in continuous improvement. I studied programming at RollingCode school.
        </p>
        <a href={CV} download={'Fermin Aguilar CV'} title='Fermin Aguilar CV'>Download CV</a>
        </div>
      </article>
    </section>
  );
};

export default About;
