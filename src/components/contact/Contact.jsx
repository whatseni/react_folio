import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
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

        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon" />
          <h4>Messenger DM</h4>
          <h5>Instagram</h5>
          <a href="https://www.instagram.com/eeeeesssss___/" target="_blank">
            Send a message
          </a>
        </article>

        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon" />
          <h4>Kakaotalk</h4>
          <h5>Open Chat</h5>
          <a href="https://open.kakao.com/o/s9duBode" target="_blank">
            Send a message
          </a>
        </article>
      </div>
    </section>
  );
};

export default Contact;
