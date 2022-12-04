import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpeg";
import { GiTreeGrowth } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const About = () => {
  return (
    <section id="about">
      <h5 className="text-color">Get to Know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiTreeGrowth className="about__icon" />
              <h5>Growth</h5>
              <small>Always effort</small>
            </article>

            <article className="about__card">
              <MdCleaningServices className="about__icon" />
              <h5>CleanCode</h5>
              <small>Easy to understand</small>
            </article>

            <article className="about__card">
              <HiOutlineSpeakerphone className="about__icon" />
              <h5>Communication</h5>
              <small>Comfortable conversation</small>
            </article>
          </div>

          <p className="text-color">
            Hello. I'm a curious Se-Eun. Welcome to my home page.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
