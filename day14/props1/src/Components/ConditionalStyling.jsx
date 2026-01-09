import React, { useState } from "react";
export function ConditionalStyling(){
    const [highlighted,setHighlighted]=useState(true);
    return(
        <>
        <h1 className={highlighted ? "highlighted" : ""}>{highlighted ? "Highlighted" : "Not Highlighted"}</h1>
        <button onClick={()=>setHighlighted(!highlighted)}>Toggle Highlight</button>
        </>
    )

}