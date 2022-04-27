import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        SEEUN
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">HOME</a>
        </li>
        <li>
          <a href="#about">ABOUT</a>
        </li>
        <li>
          <a href="#experience">SKILL</a>
        </li>

        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/seeys">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/eeeeesssss___/">
          <FiInstagram />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SEEUN Portfolio All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
