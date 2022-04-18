import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";
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
          <a href="#experience">EXPERIENCE</a>
        </li>
        <li>
          <a href="#services">SERIVCES</a>
        </li>
        <li>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com">
          <FiInstagram />
        </a>
        <a href="https://www.twitter.com">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; SEEUN Tutorilas All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
