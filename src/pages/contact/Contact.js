import React from "react";
import Header from "../../shared/header/Header";
import "./Contact.scss";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const sendMail = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "service_3qergyz",
        "template_zi0h2oc",
        event.target,
        "0QKQRA-mx06NEsdnT"
      )
      .then((res) => {
        event.target.reset();
      })
      .catch((e) => {});
  };
  return (
    <>
      <Header />
      <div className="contact">
        <form action="" onSubmit={sendMail}>
          <input type="text" name="name" placeholder="enter your name" /> <br />
          <input
            type="email"
            name="email"
            placeholder="enter your email"
          />{" "}
          <br />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="enter your message"
          ></textarea>
          <br />
          <input type="submit" value="send email" className="btn" />
        </form>
      </div>
    </>
  );
};

export default Contact;
