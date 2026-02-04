import { BrowserRouter, Route,Routes } from "react-router-dom"
import { About } from "./Components/About"
import { Home } from "./Components/Home"
import { Contact } from "./Components/Contact"
import Navbar from "./Components/Navbar"

function App() {
  
  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </BrowserRouter> 
    </>
  )
}

export default App
