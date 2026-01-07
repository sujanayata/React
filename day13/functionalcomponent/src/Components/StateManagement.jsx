import { useState } from "react"

export function StateManagement(){
    const[count, setcount]=useState(0);
    return(
        <>
        <h1>The Count :{count} </h1>
        <button onClick={()=>{setcount(count+1)}}>Increment</button>
        <button onClick={()=>{setcount(count-1)}}>Decrement</button>

        </>
    )
}