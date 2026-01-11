import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaDatabase,
  FaChevronDown
} from "react-icons/fa";
import { SiDjango, SiPandas, SiNumpy } from "react-icons/si";

const Skills = () => {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <section id="skills" className="section fade-in">
      <h2 className="section-title">Technical Skills</h2>

      <div className="skills-main-card">

        {/* FRONTEND */}
        <div className="skill-row">
          <div className="skill-row-header" onClick={() => toggle("frontend")}>
            <span>Frontend</span>
            <FaChevronDown className={open === "frontend" ? "rotate" : ""} />
          </div>

          <div className={`skill-row-content ${open === "frontend" ? "open" : ""}`}>
            <div className="skill-pills">
              <div className="skill-pill"><FaHtml5 /> HTML</div>
              <div className="skill-pill"><FaCss3Alt /> CSS</div>
              <div className="skill-pill"><FaJs /> JavaScript</div>
              <div className="skill-pill"><FaBootstrap /> Bootstrap</div>
              <div className="skill-pill"><FaReact /> React JS</div>
            </div>
          </div>
        </div>

        {/* BACKEND */}
        <div className="skill-row">
          <div className="skill-row-header" onClick={() => toggle("backend")}>
            <span>Backend</span>
            <FaChevronDown className={open === "backend" ? "rotate" : ""} />
          </div>

          <div className={`skill-row-content ${open === "backend" ? "open" : ""}`}>
            <div className="skill-pills">
              <div className="skill-pill"><FaPython /> Python</div>
              <div className="skill-pill"><SiDjango /> Django</div>
            </div>
          </div>
        </div>

        {/* LIBRARIES */}
        <div className="skill-row">
          <div className="skill-row-header" onClick={() => toggle("libs")}>
            <span>Libraries & Frameworks</span>
            <FaChevronDown className={open === "libs" ? "rotate" : ""} />
          </div>

          <div className={`skill-row-content ${open === "libs" ? "open" : ""}`}>
            <div className="skill-pills">
              <div className="skill-pill"><SiPandas /> Pandas</div>
              <div className="skill-pill"><SiNumpy /> NumPy</div>
              <div className="skill-pill"><SiDjango /> Django Framework</div>
              <div className="skill-pill"><FaReact /> React Library</div>
            </div>
          </div>
        </div>

        {/* DATABASE */}
        <div className="skill-row">
          <div className="skill-row-header" onClick={() => toggle("db")}>
            <span>Database & Tools</span>
            <FaChevronDown className={open === "db" ? "rotate" : ""} />
          </div>

          <div className={`skill-row-content ${open === "db" ? "open" : ""}`}>
            <div className="skill-pills">
              <div className="skill-pill"><FaDatabase /> SQL</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
