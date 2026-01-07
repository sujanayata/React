import React, { Component } from "react";
import "./counter.css";

class CounterPanel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialValue || 0,
      step: 1
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + Number(this.state.step)
    });
  };

  handleDecrement = () => {
    this.setState({
      count: this.state.count - Number(this.state.step)
    });
  };

  handleStepChange = (e) => {
    this.setState({ step: e.target.value });
  };

  getMessage = () => {
    const { count } = this.state;

    if (count > 10) return "High Count!";
    if (count < 0) return "Negative Count!";
    return "";
  };

  getCountClass = () => {
    const { count } = this.state;

    if (count > 10) return "high";
    if (count < 0) return "negative";
    return "normal";
  };

  render() {
    return (
      <div className="counter-container">
        <h2>Interactive Counter Panel</h2>

        <h1 className={`count ${this.getCountClass()}`}>
          {this.state.count}
        </h1>

        <p className="message">{this.getMessage()}</p>

        <input
          type="number"
          value={this.state.step}
          onChange={this.handleStepChange}
          className="step-input"
          placeholder="Step value"
        />

        <div className="btn-group">
          <button onClick={this.handleIncrement}>Increment</button>
          <button onClick={this.handleDecrement}>Decrement</button>
        </div>
      </div>
    );
  }
}

export default CounterPanel;
