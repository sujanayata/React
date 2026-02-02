import { useEffect } from "react"

export function ComponentLifeCycle(){
    useEffect(()=>{
        console.log("Mounting Phase - 1");

    },[])
    return(
        <>
        <h1>
            Mounting Phase1
        </h1>
        </>
    )
}