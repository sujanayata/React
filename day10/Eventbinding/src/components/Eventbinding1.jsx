import React from "react";
export class Demo extends React.Component{
    constructor(){
        super();
        this.state={message:"Hello from constructor binding"};
        // this.handleclick = this.handleclick.bind(this);
    }
    handleclick(){
        console.log(this);
        this.setState({message:"Button Checked"})
    }
    render(){
        return(
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={this.handleclick.bind(this)}>Click Me</button>
            </div>
        )
    }

}