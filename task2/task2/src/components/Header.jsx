export default function App() {
  return (
    <div className="container">
      <Header />

      <div className="middle">
        <Left />
        <Main />
        <Right />
      </div>

      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>React-JS</h1>
      <h1>It is a javascript library it is used to create single page web applications</h1>
    </header>
  );
}

function Left() {
  return (
    <aside className="sidebar left">
      <h2>Virtual DOM</h2>
      <h2>It is an lightweight copy of the original DOM</h2>
    </aside>
  );
}

function Main() {
  return (
    <main className="main">
      <h2>Algorithms in Virtual DOM</h2><br></br>
      <h2>1.Diffing </h2><br></br>
      <h2>2.Reconciliation </h2><br></br>
    </main>
  );
}

function Right() {
  return (
    <aside className="sidebar right">
      <h2>JSX-JavaScript Extensible Markup Language</h2>
      <h2>Combination of JavaScript and HTML</h2>
    </aside>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <h1>Components-components is the part of the UI,it is reusable</h1>
      <h2>1.functional component</h2>
      <h2>2.class component</h2>
    </footer>
  );
}
