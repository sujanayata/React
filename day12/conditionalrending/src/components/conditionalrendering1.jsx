import React from "react";
export class Conditionalrendering1 extends React.Component {
    constructor(){
        super();
        this.state={
            ismrng:false
        }
    } 
   render(){
     return(
        <>
        {
            this.state.ismrng ? "good morning": "good night"
        }
        </>
     )
   }
}