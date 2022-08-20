import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../components/styles/forms.css";
import { motion } from "framer-motion";

const ContactUs = () => {
  // const form = useRef();
  document.title = "BloggerStop - Contact Us"

  const [contact, setcontact] = useState({
    subject: "",
    name: "",
    email: "",
    message: "",
  });
  let obj = {
    subject: contact.subject,
    name: contact.name,
    email: contact.email,
    message: contact.message,
  };
  const sendEmail = (e) => {
    // console.log(obj);
    e.preventDefault();

    emailjs
      .send(
        "service_y3mmdza",
        "template_cmbalpr",
        {
          subject: obj.subject,
          name: obj.name,
          email: obj.email,
          message: obj.message,
        },
        "1J1L6rjQ84zkvVEtp"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setcontact({
      subject: "",
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="blogWriting-bg"
      ></motion.div>
      <div className="contactUs-bg-img"></div>
      <div className="blogWritingBox">
        <motion.form
          initial={{ opacity: 0, y: -80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="form "
          onSubmit={sendEmail}
        >
          <div className="formElem">
            <label className={"bold"}>Name:</label>
            <input
              type="text"
              className="formInput nameInput"
              placeholder="Enter Your Name"
              value={contact.name}
              onChange={(e) => {
                obj.name = e.target.value;
                setcontact(obj);
              }}
              name="name"
            />
          </div>
          <div className="formElem">
            <label className={"bold"}>Subject:</label>
            <input
              placeholder="Enter the Subject of the email "
              className="formInput"
              type="text"
              value={contact.subject}
              onChange={(e) => {
                obj.subject = e.target.value;
                setcontact(obj);
              }}
              name="subject"
            />
          </div>

          <div className="formElem">
            <label className={"bold"}>Email:</label>
            <input
              placeholder="Enter your email Id"
              type="email"
              className="formInput"
              value={contact.email}
              onChange={(e) => {
                obj.email = e.target.value;
                setcontact(obj);
              }}
              name="email"
            />
          </div>
          <div className="formElem">
            <label className={"bold "}>Message:</label>
            <textarea
              className="descriptionInput bg_col"
              placeholder="Enter the message you want to send"
              value={contact.message}
              rows={10}
              cols={10}
              onChange={(e) => {
                obj.message = e.target.value;
                setcontact(obj);
              }}
              name="message"
            />
          </div>
          <button className="submitBtn" type="submit">
            Submit
          </button>
        </motion.form>
      </div>
    </>
  );
};

export default ContactUs;
