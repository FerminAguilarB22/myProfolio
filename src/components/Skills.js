import React from "react";
import "../styles/skills.css";
import HTML from "../assets/html5.svg";
import CSS from "../assets/css.svg";
import JAVASCRIPT from "../assets/javascript.svg";
import REACT from "../assets/react.svg";
import NODE from "../assets/nodejs.svg";
import GitHub from "../assets/github.svg";
const Skills = () => {
  return (
    <section className="content-box" id="skills">
      <section className="containerText">
      <div className="titleSkills">
        <h2>Skills</h2>
        <h6>My habilities</h6>
      </div>
      <div className="skillBox">
        <article className="skills">
          <div className="frontEnd">
            <div className="textBox">
              <p>
                With respect to group work, I master methodologies such as
                Scrum, I was Scrum master in some projects I worked on. <br />
                For programming I use Visual Studio Code, I know how to use
                libraries like Bootstrap5 as well as frameworks like React.js
                and node.js.
              </p>
            </div>
          </div>
        </article>
      </div>
      </section>
      <section className="habilities">
        <img src={HTML} alt="html" className="item" />
        <img src={CSS} alt="CSS" className="item" />
        <img src={JAVASCRIPT} alt="JAVASCRIPT" className="item" />
        <img src={GitHub} alt="Github" className="item" />
        <img src={REACT} alt="REACT" className="item" />
        <img src={NODE} alt="NODE" className="item" />
      </section>
    </section>
  );
};

export default Skills;
