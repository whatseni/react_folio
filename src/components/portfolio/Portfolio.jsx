import React, { useState } from "react";
import "./portfolio.css";

import PRAL from "../../assets/pral.jpg";
import KT from "../../assets/kt.png";
import Modal from "./Modal";

const data = [
  {
    id: "lg",
    image: PRAL,
    title: "모바일 애플리케이션 Webview",
  },
  {
    id: "kt",
    image: KT,
    title: "VM 관리 모니터링 서비스",
  },
];

const Portfolio = () => {
  const [modalOpen, setOpenModal] = useState(false);
  const [modalState, setModalState] = useState(null);
  const handleOpenModal = (id) => {
    setModalState(id);
    setOpenModal(true);
  }
  const handleCloseModal = () => setOpenModal(false);
  return (
    <section id="portfolio">
      <Modal open={modalOpen} handleClose={handleCloseModal} modalState={modalState} />
      <h2>Project</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <button className="btn btn-primary" onClick={() => handleOpenModal(id)}>More Info</button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
