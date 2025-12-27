import React from "react";
import "./web.css";

function Webapp() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Hero1></Hero1>
      <MenuSection></MenuSection>
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1><img src="/logo.png"></img></h1>
      <nav>
        <a href="#hero">Home</a>
        <a href="#hero">About</a>
        <a href="#MenuSection">Services</a>
        <a href="#hero">Contact</a>
      </nav>
    </header> 
  );
}

function Hero() {
  return (
    <section id="hero" className="hero">
      <img src="/img1.jpg" alt="Hero" />
      
    </section>
  );
}

function Hero1() {
  return (
    <section className="hero1">
      <div className="hero-text">
        <span className="new">NEW PRODUCT</span>
        <h2>The Twist of Healthy Yogurt</h2>
        <p>
          This website template has been designed for you, for free.
          You can replace all this text with your own content.
        </p>
      </div>

      <div className="hero-img">
        <img src="/img1.jpg" alt="Yogurt" />
      </div>
    </section>
  );
}

function MenuSection() {
  return (
    <section className="menu" id="MenuSection">
      <div className="menu-item">
        <img src="/cake.webp" alt="Products" />
        <p>PRODUCTS</p>
      </div>

      <div className="menu-item">
        <img src="/hands.webp" alt="Story" />
        <p>OUR STORY</p>
      </div>

      <div className="menu-item">
        <img src="/icecream.webp" alt="Flavors" />
        <p>FLAVORS</p>
      </div>

      <div className="menu-item">
        <img src="/loc.webp" alt="Location" />
        <p>OUR LOCATION</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <img src="/f.webp" alt="Facebook" />
        <img src="/twitter.webp" alt="Twitter" />
        <img src="/linkdin.webp" alt="Google" />
        <img src="/pinterest.webp" alt="Pinterest" />
      </div>
      <p>© 2025 Freeeze. All Rights Reserved.</p>
    </footer>
  );
}

export default Webapp;





