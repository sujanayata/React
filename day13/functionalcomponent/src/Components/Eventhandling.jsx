import { useState } from "react"

export default function EventHandling(){
    const [name,setname]=useState("");
    const handlename=(event)=>{
        setname(event.target.value);
    }
    return(
        <>
          {/* <button onClick={()=>{alert("Hii ,Hello Everybody")}}>Click Here for change</button> */}

          <form>
            <input type="text" placeholder="Enter Your name" onChange={handlename} ></input>
            <h1>the data i am entering is : {name} </h1>
          </form>
        </>
    )
}