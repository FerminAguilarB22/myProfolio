import React from "react";
import "../styles/skills.css";
import { Dropdown } from "react-bootstrap";
const Skills = () => {
  return (
    <section className="content-box" id="skills">
      <div className="titleSkills">
        <h2>Skills</h2>
        <h6>My habilities</h6>
      </div>
      <div className="skillBox">
        <article className="skills">
          <div className="frontEnd">
            <div className="textBox">
              {/* <h4>Lorem ipsum dolor sit.</h4> */}
              <p>
                With respect to group work, I master methodologies such as
                Scrum, I was Scrum master in some projects I worked on. <br />
                For
                programming I use Visual Studio Code, I know how to use
                libraries like Bootstrap5 as well as frameworks like React.js
                and node.js.
              </p>
            </div>
            <section>
              <div className="item">
                <span>85%</span>
                <label>Html</label>
                <input type="range" value="85" disabled />
              </div>
              <div className="item">
                <span>80%</span>
                <label>Css</label>
                <input type="range" value="80" disabled />
              </div>
              <div className="item">
                <span>60%</span>
                <label>Javascript</label>
                <input type="range" value="60" disabled />
              </div>
              <div className="item">
                <span>50%</span>
                <label>React</label>
                <input type="range" value="50" disabled />
              </div>
              <div className="item">
                <span>35%</span>
                <label>Node.js</label>
                <input type="range" value="35" disabled />
              </div>
            </section>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Skills;
