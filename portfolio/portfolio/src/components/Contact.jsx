import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <h2 className="section-title">Get in Touch</h2>
      <p className="section-subtitle">
        Feel free to reach out, I’ll get back to you soon.
      </p>

      <div className="contact-grid">

        {/* LEFT CARD */}
        <div className="contact-card">
          <h3>Let&apos;s Connect</h3>
          <p>
            Ready to start your project? Reach out through any of these
            channels.
          </p>

          {/* WhatsApp */}
          <a
            href="https://wa.me/918639575901"
            target="_blank"
            rel="noreferrer"
            className="contact-item whatsapp"
          >
            <FaWhatsapp />
            <div>
              <strong>WhatsApp</strong>
              <span>&nbsp;&nbsp;+91 8639575901</span>
            </div>
          </a>

          <h4>Follow Me</h4>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yata-sujana"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaLinkedin />
            <div>
              <strong>LinkedIn</strong>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;Professional network</span>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/sujanayata"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <FaGithub />
            <div>
              <strong>GitHub</strong>
              <span>&nbsp;&nbsp;&nbsp;&nbsp;View my projects</span>
            </div>
          </a>
        </div>

        {/* RIGHT CARD */}
        <div className="contact-card">
          <h3>Send a Message</h3>

          <form className="contact-form">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />

            <label>Email</label>
            <input type="email" placeholder="your@email.com" />

            <label>Message</label>
            <textarea placeholder="Tell me about your project..." />

            <button type="button">Send Message</button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
