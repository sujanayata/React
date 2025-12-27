import React from "react";
export class Statemanagement extends React.Component{
  
  constructor(){
        super();
        this.state = {
            greeting : "Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        } 
        this.handleevent = this.handleevent.bind(this);
    }

    handleevent(){
       console.log(this);
        this.setState({
            greeting:"hello everyone."
        })
    }
    render(){
        return(
            <>
           <h1>{this.state.greeting}</h1>
            <button onClick={()=>{this.handleevent()}}>Click Here</button>
            
            </>
        )
    }
}