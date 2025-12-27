


export default function Webpage() {
  return (
    <div>
        <Navbar></Navbar>

    </div>
  );
}

function Navbar(){
    return(
        <nav className="navbar">
        <div className="nav-left">
            <img src="/img1.jpg" alt="logo" className="nav-icon" />  
        </div>

        <ul className="nav-links">
        <li>Home</li>
        <li>About</li>
        <li>Blog</li>
        <li>Content</li>
      </ul>
     </nav>
    )
}