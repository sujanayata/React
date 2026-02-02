import { useEffect, useState } from "react"
export function UpdatingPhase(){

    const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("count updated")
    },[count])
    return(
        <>
        <h2>Upadating - phase 2</h2>
        <h2>COunt:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </>
    )

}