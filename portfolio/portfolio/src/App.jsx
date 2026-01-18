import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Certificates from "./components/certificates";
import Marquee from "./components/Marque";
import Footer from "./components/Footer";
import Stars from "./components/Stars";


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Certificates></Certificates>
    
      <Marquee></Marquee>
      <Footer></Footer>
      <Stars></Stars>
      
    </>
  );
}

export default App;
