import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "COVID-19",
    github: "https://github.com/seeys/covid19",
    demo: "http://covid19-page.s3-website.ap-northeast-2.amazonaws.com/",
  },
  {
    id: 2,
    image: IMG2,
    title: "PortFolio with React",
    github: "https://github.com/seeys/react_folio",
    demo: "http://react-folio-page.s3-website.ap-northeast-2.amazonaws.com/#contact",
  },
  {
    id: 3,
    image: IMG3,
    title: "Img Data Info",
    github: "https://github.com/seeys/what-i-made",
    demo: "https://github.com/seeys/what-i-made",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  Project
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
