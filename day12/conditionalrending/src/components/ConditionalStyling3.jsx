import React from "react";

export class Conditionalstyling3 extends React.Component {
  constructor() {
    super();
    this.state = {
      hadLunch: true
    };
  }

  render() {
    return (
      <>
        {this.state.hadLunch && "Healthy"}
      </>
    );
  }
}
