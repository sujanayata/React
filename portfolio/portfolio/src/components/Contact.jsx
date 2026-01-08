import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section fade-in">
      <h2>Contact Me</h2>

      <div className="contact-icons">
        <p><FaEnvelope /> sujanayata@gmail.com</p>
        <p><FaPhone /> 8639575901</p>

        <div className="social-icons">
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
    </section>
  );
};

export default Contact;
