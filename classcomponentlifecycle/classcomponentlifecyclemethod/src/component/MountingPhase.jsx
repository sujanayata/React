import React, { Component } from "react";

export class MountingPhase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello Here",
    };
    console.log("constructor : whenever component is created")
  }
  componentDidMount(){
    console.log("componentdidmount phase : Executing")
    setTimeout(()=>{
        this.setState({
            message:"Hello There"
        })
    },2000)
  }

  render() {
    console.log("Render: Updating UI");
    return (
      <>
        {this.state.message}
      </>
    );
  }
}
