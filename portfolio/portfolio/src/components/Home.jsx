import { useEffect, useState } from "react";
import profile from "/suppu2.jpeg";

const roles = [
  "Python Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Web Developer",
];

const Home = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    let timeout;

    if (!deleting && charIndex < current.length) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, 60);
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, 40);
    } else if (!deleting && charIndex === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
    } else if (deleting && charIndex === 0) {
      setDeleting(false);
      setIndex((index + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, index]);

  return (
    <section id="home" className="home fade-in">
      <div className="home-content">

        <div className="puppy-glow">
          <img src={profile} alt="Yata Sujana" />
        </div>

        <div className="home-text">
          <h1 className="home-title">
            HELLO, I’m <span className="name-highlight">Yata Sujana</span>
          </h1>

          {/* 🔥 Typing Animation */}
          <h3 className="typing-text">
            {text}
            <span className="cursor">|</span>
          </h3>

          <p className="home-desc">
            Passionate about building scalable, user-friendly web applications
            and solving real-world problems using modern technologies.
          </p>

          <div className="tags">
            <span>Python</span>
            <span>Django</span>
            <span>React</span>
            <span>Full Stack</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Home;
