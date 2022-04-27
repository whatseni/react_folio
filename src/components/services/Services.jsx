import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Did</h5>
      <h2>Development or etc </h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Algorithm</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>WEB DEVELOPMENT</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creattion</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>abcdeddddddddddddddd</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
