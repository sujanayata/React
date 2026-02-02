
import { useState } from "react";

export function ControlledForms() {
  const [name, setName] = useState("");
  const handleData=()=>{
       alert(`Hello,${name}`)
  }
  return (
    <>
      <form onSubmit={handleData}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter the name"
        />
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
