import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaPython,
  FaDatabase,
  FaTools
} from "react-icons/fa";
import { SiDjango, SiPandas, SiNumpy } from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="section fade-in">
      <h2>Technical Skills</h2>

      <h3>Frontend</h3>
      <div className="skills-grid">
        <div className="skill-card"><FaHtml5 /> HTML</div>
        <div className="skill-card"><FaCss3Alt /> CSS</div>
        <div className="skill-card"><FaJs /> JavaScript</div>
        <div className="skill-card"><FaBootstrap /> Bootstrap</div>
        <div className="skill-card"><FaReact /> React JS</div>
      </div>

      <h3>Backend</h3>
      <div className="skills-grid">
        <div className="skill-card"><FaPython /> Python</div>
        <div className="skill-card"><SiDjango /> Django</div>
      </div>

      <h3>Libraries & Frameworks</h3>
      <div className="skills-grid">
        <div className="skill-card"><SiPandas /> Pandas</div>
        <div className="skill-card"><SiNumpy /> NumPy</div>
        <div className="skill-card"><SiDjango /> Django Framework</div>
        <div className="skill-card"><FaReact /> React Library</div>
      </div>

      <h3>Database</h3>
      <div className="skills-grid">
        <div className="skill-card"><FaDatabase /> SQL</div>
      </div>

      <h3>Tools</h3>
      <div className="skills-grid">
        <div className="skill-card"><FaTools /> VS Code</div>
        <div className="skill-card"><FaTools /> MS Office</div>
      </div>
    </section>
  );
};

export default Skills;
