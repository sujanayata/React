import React from "react";

export class Unmountig extends React.Component {
  componentDidMount() {
    this.timer = setInterval(() => {
      console.log("timer is running");
    }, 1000);
  }

  componentWillUnmount() {
    console.log("unmounting phase executed");
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <h1>Component unmounting phase</h1>
      </>
    );
  }
}
