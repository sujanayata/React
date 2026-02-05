import { Route,Link,Routes} from "react-router-dom"
import { About } from "./Components/About"
import { Home } from "./Components/Home"
import { Contact } from "./Components/Contact"


function App() {
 

  return (
    <>
    <Link to="/">Home</Link>|<Link to="/about">About</Link>|<Link to="/contact">Contact</Link>
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>



    </Routes>
      
    </>
  )
}

export default App
