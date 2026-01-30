import React from "react";
export class UpdatingPhase extends React.Component{
    constructor(){
        super();
        this.state={
            count:0
        }
    }
    increment =()=>{
        this.setState({
            count:this.state.count+1
        })
    }
    componentDidUpdate(prevprops,prevState){
        console.log("ComponentDidUpdate phase")
        console.log("privious count value : " +prevState.count)
        console.log("current count value :" +this.state.count)
    }
    render(){
        console.log("render method execution happening")
        return(
            <>
              {this.state.count}
              <button onClick={this.increment}>Increment</button>
            </>
        )
    }

}