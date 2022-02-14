import React from "react";
import "../styles/about.css";
import Yo from '../assets/me.jpg'
import CV from '../assets/cv.jpg'
const About = () => {
  return (
    <section className="about" id="about">
      <div className="title-box">
        <h2 className="title">About</h2>
      </div>
      <article className="contentBox">
        <img src={Yo} alt=""  />
        <div>
        <h3>Hi, i'am fermin</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita
          deleniti dignissimos, porro quo excepturi, animi perferendis numquam
          illum debitis accusantium rerum? Esse delectus architecto minima velit
          vero magnam, recusandae optio iusto quisquam aperiam quae eligendi
          molestias labore. 
          incidunt
        </p>
        <a href={CV} download={'Fermin Aguilar CV'} title='Fermin Aguilar CV'>Download CV</a>
        </div>
      </article>
    </section>
  );
};

export default About;
