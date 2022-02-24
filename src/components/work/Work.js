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
import Cafe from "../../assets/cafe.svg";
import News from "../../assets/news.svg";
const Work = () => {
  const WorkArray = [
    {
      name: "Veterinary Shifts",
      description: "Make a veterinary appointment from home",
      demoLink: "https://consulta-vet.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/ConsultorioVeterinaria",
      img: Vet,
    },
    {
      name: "RollingBank",
      description:
        "Web made in RollingCode, aims to show the user the services provided by the bank.",
      demoLink: "https://rollingbank.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/ConsultorioVeterinaria",
      img: Bank,
    },
    {
      name: "Colors Selector",
      description:
        "Want to choose colors for your next project?Enter the color name or its hexadecimal code and save it here.",
      demoLink: "https://cardscolores.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/cardsColores",
      img: Colors,
    },
    {
      name: "Cocu Bakery",
      description:
        "Project done during the RollingCode course, CSS and HTML practices.",
      demoLink: "https://panaderiadecocu.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/Panaderia-cocu",
      img: Panaderia,
    },
    {
      name: "Simpson Quotes",
      description:
        "If you are a Simpsons fan you have to enter here, click on the button and see which quote you got.",
      demoLink: "https://simpsonquotes.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/frasesSimpson",
      img: Simpson,
    },
    {
      name: "CRUD Café",
      description:
        "C.R.U.D. made with React, as its letters indicate, you can create, read, update and delete products. It has its own database.",
      demoLink: "https://crudcafe.netlify.app",
      gitHubLink: "https://github.com/FerminAguilarB22/CrudCafe",
      img: Cafe,
    },
    {
      name: "RollingNews",
      description:
        "Final group project of the RollingCode course. It's a web newscast where different tools are enabled depending on the user's permissions. It has its own database.",
      demoLink: "https://rollingnews17.netlify.app/",
      gitHubLink: "https://github.com/Charlycarral/rollingNews",
      img: News,
    },
  ];

  return (
    <section className="work" id="work">
      <div className="title-box">
        <h2 className="title">My work</h2>
      </div>
      {/* <Carousel className="carousel">
        {WorkArray.map((work, index) => (
          <Carousel.Item key={index} className="item">
            <WorkCards work={work}></WorkCards>
          </Carousel.Item>
        ))}
      </Carousel> */}
      <section className="cards-container">
        {WorkArray.map((work, index) => (
          <WorkCards work={work} key={index} className="item"></WorkCards>
        ))}
      </section>
    </section>
  );
};

export default Work;
