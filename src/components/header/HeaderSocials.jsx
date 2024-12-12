import React from "react";
import { FaGithub } from "react-icons/fa";
import { SiVelog } from "react-icons/si";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/whatseni" target="_blank">
        <FaGithub />
      </a>
      <a href="https://velog.io/@sodgyu/posts" target="_blank">
        <SiVelog />
      </a>
    </div>
  );
};

export default HeaderSocials;
