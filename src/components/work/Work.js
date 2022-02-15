import React from "react";
import "../../styles/work.css";
import { Carousel } from "react-bootstrap";
import WorkCards from "./WorkCards";
import Vet from "../../assets/vet.svg";
const Work = () => {
  const WorkArray = [
    {
      name: "Veterinary Shifts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi cum doloribus ducimus aliquid ipsa velit assumenda distinctio totam omnis.",
      demoLink: "https://consulta-vet.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/ConsultorioVeterinaria",
      img: Vet,
    },
    {
      name: "Veterinary Shifts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi cum doloribus ducimus aliquid ipsa velit assumenda distinctio totam omnis.",
      demoLink: "https://consulta-vet.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/ConsultorioVeterinaria",
      img: Vet,
    },
    {
      name: "Veterinary Shifts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi cum doloribus ducimus aliquid ipsa velit assumenda distinctio totam omnis.",
      demoLink: "https://consulta-vet.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/ConsultorioVeterinaria",
      img: Vet,
    },
    {
      name: "Veterinary Shifts",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi cum doloribus ducimus aliquid ipsa velit assumenda distinctio totam omnis.",
      demoLink: "https://consulta-vet.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/ConsultorioVeterinaria",
      img: Vet,
    },
  ];



  return (
    <section className="work" id="work">
      <div className="title-box">
        <h2 className="title">My work</h2>
      </div>
      <Carousel className="carousel" >
        {WorkArray.map((work, index) => (
          <Carousel.Item key={index} className="item">
            <WorkCards work={work}></WorkCards>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
};

export default Work;
