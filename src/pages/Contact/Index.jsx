import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Index.css";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ou82utj", "template_5kxmcbx", form.current, {
        publicKey: "S2RgGPD6hLq6QgKF-",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="contact section " id="contact">
      <h2 className="section__title">Contact</h2>
      <span className="section__subtitle">Get In Touch</span>
      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">mcoding98@gmail.com</span>
              <a
                href="mailto:mcoding98@gmail.com?subject=Your%20Subject&body=Your%20Message"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">01001028922</span>
              <a
                href="https://api.whatsapp.com/send?phone=1001028922&text=Hello%2C%20I%27d%20like%20to%20chat%20with%20you."
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i className="bx bxl-messenger contact__card-icon"></i>
              <h3 className="contact__card-title">Messenger</h3>
              <span className="contact__card-data">https://m.me/shalby98</span>
              <a
                href="https://www.messenger.com/t/100015501584776/"
                className="contact__button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write Me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert Your Name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert Your Email"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write Your project"
              ></textarea>
            </div>
            <button
              className="button__form"
              onClick={() => alert("Thank You.. Your Data has been Sent ")}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
