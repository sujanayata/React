import React, { useState } from "react";
export function ToggleExample(){
    const[loggedIn,setLoggedIn]=useState(false)
    return(
        <>
       <h1>{loggedIn ? "Welcome to Page" : "Please Login"}</h1>
        </>
    )

}