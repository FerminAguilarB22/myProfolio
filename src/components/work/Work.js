import React from "react";
import "../../styles/work.css";
import { Carousel } from "react-bootstrap";
import WorkCards from "./WorkCards";
import Vet from "../../assets/vet.svg";
import Bank from "../../assets/bank.svg";
import Colors from "../../assets/colors.svg";
import Magic from "../../assets/magic.svg";
import Panaderia from "../../assets/panaderia.svg";
import Simpson from "../../assets/simpsons.svg";
import Task from "../../assets/tasks.svg";
import Travel from "../../assets/travel.svg";
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
      name: "RollingBank",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi cum doloribus ducimus aliquid ipsa velit assumenda distinctio totam omnis.",
      demoLink: "https://rollingbank.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/ConsultorioVeterinaria",
      img: Bank,
    },
    {
      name: "Colors Selector",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi cum doloribus ducimus aliquid ipsa velit assumenda distinctio totam omnis.",
      demoLink: "https://cardscolores.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/cardsColores",
      img: Colors,
    },
    {
      name: "Magic Numbers",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi cum doloribus ducimus aliquid ipsa velit assumenda distinctio totam omnis.",
      demoLink: "https://magicnumbers.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/numerosMagicos",
      img: Magic,
    },
    {
      name: "Cocu Bakery",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi cum doloribus ducimus aliquid ipsa velit assumenda distinctio totam omnis.",
      demoLink: "https://panaderiadecocu.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/Panaderia-cocu",
      img: Panaderia,
    },
    {
      name: "Simpson Quotes",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem nisi cum doloribus ducimus aliquid ipsa velit assumenda distinctio totam omnis.",
      demoLink: "https://simpsonquotes.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/frasesSimpson",
      img: Simpson,
    },
  ];

  return (
    <section className="work" id="work">
      <div className="title-box">
        <h2 className="title">My work</h2>
      </div>
      <Carousel className="carousel">
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
