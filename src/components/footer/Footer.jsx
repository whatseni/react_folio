import React from "react";
import "./footer.css";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

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
          <a href="#portfolio">PROJECT</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/whatseni" target="_blank">
          <FaGithub />
        </a>
        <a href="https://velog.io/@sodgyu/posts" target="_blank">
          <SiVelog />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SEEUN Portfolio All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
