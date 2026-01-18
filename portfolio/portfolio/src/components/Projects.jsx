const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>

      <div className="projects-container">
        {/* Project 1 */}
        <div className="project-card">
          <img
            src="traffic.png"
            alt="IoT Smart Traffic Management"
            className="project-image"
          />

          <h3>IoT Smart Traffic Management System</h3>
          <ul>
            <li>Real-time traffic monitoring using IoT sensors.</li>
            <li>Reduced congestion by 25%.</li>
            <li>ML-based traffic prediction with 90% accuracy.</li>
            <li>Technologies: Python, AWS, MQTT, LoRaWAN.</li>
          </ul>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src="beauty.png"
            alt="Beauty Salon Website"
            className="project-image"
          />

          <h3>Beauty Salon Website</h3>
          <ul>
            <li>Responsive website using HTML & CSS.</li>
            <li>Used Flexbox and Grid layouts.</li>
            <li>Mobile-friendly and accessible UI.</li>
            <li>Technologies: Html,Css</li>
          </ul>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img
            src="notes.png"
            alt="Full Stack Notes App"
            className="project-image"
          />

          <h3>Full Stack Notes App</h3>
          <ul>
            <li>Create, edit, and delete notes with authentication.</li>
            <li>REST API with secure CRUD operations.</li>
            <li>Responsive UI with smooth user experience.</li>
            <li>Technologies: Html,Css,JavaScript,ReactJs</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;
