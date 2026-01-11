const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo section */}
      <div className="logo-container">
        <div className="logo-circle">YS</div>
        <span className="logo-text">Yata Sujana</span>
      </div>

      {/* Nav links */}
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#certificates">Certificates</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact Me</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
