

import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <div className="layout">
        <Left />
        <Main />
        <Right />
      </div>

      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">ReactJS</h1>
      <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Topics</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

function Left() {
  return (
    <aside className="sidebar left">
      <img
        src="/img1.png"
        alt="react"
      />
      <h2>Virtual DOM</h2>
      <p>
        A lightweight copy of the real DOM that improves performance.
      </p>
    </aside>
  );
}



function Main() {
  return (
    <main className="main">
      <h2>Algorithms in Virtual DOM</h2>

      <div className="card">
        <h3>1. Diffing</h3>
        <p>Compares virtual DOM trees to find changes.</p>
      </div>

      <div className="card">
        <h3>2. Reconciliation</h3>
        <p>Efficiently updates only changed parts in the real DOM.</p>
      </div>

      <img
        className="main-img"
        src="/img2.png"
        alt="react banner"
      />
    </main>
  );
}


function Right() {
  return (
    <aside className="sidebar right">
      <img
        src="/img3.png"
        alt="jsx"
      />
      <h2>JSX</h2>
      <p>
        JSX is a syntax extension combining JavaScript and HTML.
      </p>
    </aside>
  );
}



function Footer() {
  return (
    <footer className="footer">
      <h3>React Components</h3>
      <p>Functional Components</p>
      <p>Class Components</p>
      <span>React Learning</span>
    </footer>
  );
}
