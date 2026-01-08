import profile from "/puppy.jpg";

const Home = () => {
  return (
    <section id="home" className="home fade-in">
      <div className="home-content">

        {/* ✅ Correct class name */}
        <div className="puppy-glow">
          <img src={profile} alt="Yata Sujana" />
        </div>

        <div>
          <h1>
            Hi, I’m <span>Yata Sujana</span>
          </h1>

          <h3>Aspiring Python Full Stack Developer</h3>

          <p>
            Passionate about building scalable web applications and solving
            real-world problems using modern technologies.
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
