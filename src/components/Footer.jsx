import {
  RiPhoneFill,
  RiMailFill,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";

function Footer() {
  return (
    <footer className="footer-alt" id="contact">
      <div className="footer-container">

        {/* Left Side - Address */}
        <div className="footer-address">
          <strong>Permanent Address:</strong><br />
          Durgigudi Right Side Near Bann Mahakali Temple,<br />
          Honnali, Davangere, Karnataka - 577217
        </div>

        <div className="footer-address">
          <strong>Current Address:</strong><br />
          No.49, 3rd Cross HBCS Layout, Near GKW Layout Bus Stand,<br />
          Vijaya Nagar, Bangalore - 560040
        </div>

        {/* Right Side - Contact Icons */}
        <div className="footer-icons">
          <a href="tel:+917892686209" title="Call" className="icon">
            <RiPhoneFill size={26} />
          </a>
          <a href="mailto:hemanthraj.bk@gmail.com" title="Email" className="icon">
            <RiMailFill size={26} />
          </a>
          <a href="https://www.linkedin.com/in/b-k-hemanth-raj-b36425230" target="_blank" rel="noreferrer" title="LinkedIn" className="icon">
            <RiLinkedinBoxFill size={26} />
          </a>
          <a href="https://github.com/BKHemanthraj" target="_blank" rel="noreferrer" title="GitHub" className="icon">
            <RiGithubFill size={26} />
          </a>
        </div>

      </div>
    </footer>


  );
}

export default Footer;
