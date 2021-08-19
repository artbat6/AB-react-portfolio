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
        <img src="assets/mail-pole.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact me</h2>
        <a className="linkedin" href="https://www.linkedin.com/in/arthur-bates-824b5476/" target="_blank">Linkedin</a>
        <a className="email" href="mailto: arthurbatesdev@gmail.com" target="_blank">Email</a>

        {/* <form onSubmit={handleSubmit}>
          <input class="input-text" type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP!</span>}
        </form> */}
      </div>
    </div>
  );
}
