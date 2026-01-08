const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-card">
        <h3>IoT Smart Traffic Management System</h3>
        <ul>
          <li>Real-time traffic monitoring using IoT sensors.</li>
          <li>Reduced congestion by 25%.</li>
          <li>ML-based traffic prediction with 90% accuracy.</li>
          <li>Technologies: Python, AWS, MQTT, LoRaWAN.</li>
        </ul>
      </div>

      <div className="project-card">
        <h3>Beauty Salon Website</h3>
        <ul>
          <li>Responsive website using HTML & CSS.</li>
          <li>Used Flexbox and Grid layouts.</li>
          <li>Mobile-friendly and accessible UI.</li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
