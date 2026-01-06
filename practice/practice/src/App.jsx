
import React  from "react";
// import Home from "./components/Home";
// import About from "./components/about";
// import Project from "./components/project";
// import Contact from "./components/contact";


const App = () => {
  const getGreeting=()=>{
    return "HELLO WORLD1";
  
  }
   const result=getGreeting() 

   const currentdate=new Date().toLocaleDateString();
   const courrentyear=new Date().getFullYear();
  return (
    <div>
      <p>{currentdate}</p>
      <p>{courrentyear}</p>
   
     {result}
    {/* {getGreeting()} */}
     {/* <Home/>
     <About/>
     <Project/>
     <Contact/> */}
    </div>
  );
};
export default App;
