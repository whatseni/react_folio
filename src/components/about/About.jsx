import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { GiTreeGrowth } from "react-icons/gi";
import { MdCleaningServices } from "react-icons/md";
import { HiOutlineSpeakerphone } from "react-icons/hi";

const About = () => {
  return (
    <section id="about">
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
              <h5>One More Find</h5>
            </article>

            <article className="about__card">
              <MdCleaningServices className="about__icon" />
              <h5>One More User</h5>
            </article>

            <article className="about__card">
              <HiOutlineSpeakerphone className="about__icon" />
              <h5>One More Plan</h5>
            </article>
          </div>

          <p className="text-color">
            저는 한번 더 찾아보고, 사용자 입장을 생각하고, 계획을 점검합니다.
            <br />
            <strong>언제나 한 단계 더 성장하기 위해 위 세가지 항목을 지키겠습니다.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
