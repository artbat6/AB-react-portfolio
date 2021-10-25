import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Web Developer", "Creator", "Illustrator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/art.png" alt="Arthur" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello, I'm</h2>
          <h1>Arthur Bates</h1>
          <h3>
            Independent <span ref={textRef}></span>
          </h3>
          <div className="brand">
          <p>Front-end Developer learning to use new methods to solve problems in various frameworks of ever-evolving technologies.</p>
          </div>
          <div className="skills">
          <h4>Some of my skills include:</h4>
          <p>HTML, CSS, JavaScript, jQuery, React, 
            Bootstrap, Materialize, Node, Express, Web API, 
            GitHub, Heroku, Adobe Photoshop, Adobe Illustrator, and Procreate. 
            

</p>

          </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
}
