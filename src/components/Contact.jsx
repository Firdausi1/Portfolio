import React, { useState } from "react";
import { Axios, database } from "../firebase";
import "./Contact.css";
import PageTransition from "./PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({});

  const updateInput = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    sendEmail();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  const sendEmail = () => {
    Axios.post(
      "https://us-central1-portfolio-bfdab.cloudfunctions.net/submit",
      formData
    )
      .then((res) => {
        database.collection("emails").add({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          time: new Date(),
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <PageTransition up>
      <section id="contact" className="contact">
        <h2>CONTACT</h2>
        <form className="contact__form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={updateInput}
            value={formData.name || ""}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={updateInput}
            value={formData.email || ""}
          />
          <textarea
            type="text"
            placeholder="Message"
            name="message"
            onChange={updateInput}
            value={formData.message || ""}
          ></textarea>
          <button type="submit" className="btn-primary">
            Send
          </button>
        </form>
      </section>
    </PageTransition>
  );
};

export default Contact;
