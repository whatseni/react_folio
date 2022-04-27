import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/seeys" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/eeeeesssss___/" target="_blank">
        <FiInstagram />
      </a>
    </div>
  );
};

export default HeaderSocials;
