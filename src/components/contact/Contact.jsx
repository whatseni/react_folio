import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>sodgyu@naver.com</h5>
          <a href="mailto:sodgyu@naver.com" target="_blank">
            Send a message
          </a>
        </article>

      </div>
    </section>
  );
};

export default Contact;
