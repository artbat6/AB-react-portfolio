import "./topbar.scss";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Arthur Bates
          </a>
          <div className="itemContainer">
            <CallIcon className="icon" />
            <span>701 415 8812</span>
          </div>
          <div className="itemContainer">
            <MailIcon className="icon" />
            <a href="mailto:arthurbatesdev@gmail.com">arthurbatesdev@gmail.com</a>
          </div>
          <div className="itemContainer">
            <GitHubIcon className="icon" />
            <a href="https://github.com/artbat6">github</a>
          </div>
          <div className="itemContainer">
            <LinkedInIcon className="icon" />
            <a href="https://www.linkedin.com/in/arthur-bates-dev/">linkedin</a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
