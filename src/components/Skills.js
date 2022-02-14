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
        <h4>Lorem ipsum dolor sit.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita sed
          voluptas, impedit, ipsa fugiat perferendis, ducimus iste quia
          doloribus dignissimos blanditiis dolores magnam ratione officia
          corrupti incidunt vitae debitis natus veritatis. Modi fuga eveniet
          optio consectetur quia hic assumenda asperiores delectus magni
          deserunt officia, totam fugit laborum, nisi fugiat consequatur, ut
          obcaecati sunt minus cum similique? Repellat officia
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
