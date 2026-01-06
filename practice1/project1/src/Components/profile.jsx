import React from "react";
import "./profile.css";
const App=()=>{
  const name="suppu";
  const age=22;
  const country="India";

  return <div className="card">
    <h3>Name:{name} </h3>
    <p>Age:{age} </p>
    <p>Country:{country} </p>

  </div>
}
export default App;