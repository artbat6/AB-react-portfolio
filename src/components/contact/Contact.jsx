import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img className="curvy" src="assets/mail-pole.svg" alt="mailbox illustration" />
      </div>
      <div className="right">
        <h2>Contact me</h2>
        <img src="assets/curvyUnderLine.svg" alt="curvy underline"/>
        <a className="linkedin" href="https://www.linkedin.com/in/arthur-bates-824b5476/" target="_blank">Linkedin</a>
        <a className="email" href="mailto: arthurbatesdev@gmail.com" target="_blank">Email</a>
        <a className="resume" href="https://docs.google.com/document/d/1mmrL2j8bF7BLw2mtdZ_HJfBEpLO5LaWGpmfgA4lZnEU/edit?usp=sharing" target="_blank">Resume</a>

    
      </div>
    </div>
  );
}
