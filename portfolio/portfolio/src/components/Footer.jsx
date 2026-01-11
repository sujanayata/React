import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left */}
        <div className="footer-left">
          <h2>Yata Sujana</h2>
          <p>
            Aspiring Python Full Stack Developer passionate about building
            scalable and user-friendly web applications.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.linkedin.com/in/yata-sujana"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/sujanayata"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* Middle */}
        <div className="footer-middle">
          <h3>The Website</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#contact">Contact Me</a></li>
          </ul>
        </div>

        {/* Right */}
        <div className="footer-right">
          <h3>Contact</h3>
          <p>
            Open to opportunities, internships, and collaborative projects.
            Let’s build something meaningful together.
          </p>

          <div className="footer-contact">
            <p><FaEnvelope /> sujanayata@gmail.com</p>
            <p><FaPhone /> +91 8639575901</p>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Yata Sujana. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
