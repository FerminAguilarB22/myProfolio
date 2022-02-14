import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/work.css";
import GitHub from "../../assets/github.svg";
import Arrow from "../../assets/arrow.svg";
const WorkCards = (props) => {
  return (
    <Card className="card">
      <div className="cardImgBox">
        <Card.Img variant="top" src={props.work.img} className="cardImg" />
      </div>
      <Card.Body className="text-white cardText">
        <Card.Title>{props.work.name}</Card.Title>
        <Card.Text className="cardDescription">{props.work.description}</Card.Text>
      </Card.Body>
      <section className="link">
        <a href={props.work.gitHubLink} target="_blank" className="gitHub">
          <img src={GitHub} alt="" />
        </a>
        <a href={props.work.demoLink} target="_blank" className="demo">
          <p>Demo</p>
          <img src={Arrow} alt="" />
        </a>
      </section>
    </Card>
  );
};

export default WorkCards;
