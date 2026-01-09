import { useState } from "react"

export function Propsandstate(Props){
    const [age,setAge]=useState(0)
    return(
        <>
         <h2>girl name is: {Props.name}</h2>
         <h2>{Props.name} age is :{age}</h2>
         <button onClick={()=>setAge(age+1)}>click me</button>

        </>
    )

}