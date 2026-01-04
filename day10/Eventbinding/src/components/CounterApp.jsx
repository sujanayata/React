import React from "react";

export default class CounterApp extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.reset = this.reset.bind(this);
  }

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement() {
    this.setState({
      count: this.state.count - 1,
    });
  }

  reset() {
    this.setState({
      count: 0,
    });
  }

  render() {
    return (
      <div style={styles.page}>
        <div style={styles.card}>
          <h1 style={styles.title}>Counter App</h1>
          <h2 style={styles.count}>{this.state.count}</h2>

          <div style={styles.btnGroup}>
            <button onClick={this.increment} style={styles.incBtn}>
              +
            </button>
            <button
              onClick={() => {
                this.decrement();
              }}
              style={styles.decBtn}
            >
              -
            </button>
            <button onClick={this.reset} style={styles.resetBtn}>
              Reset
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
  },

  card: {
    backgroundColor: "#ffffff",
    width: "320px",
    padding: "30px",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
  },

  title: {
    marginBottom: "10px",
    color: "#333",
    fontSize: "26px",
  },

  count: {
    fontSize: "48px",
    margin: "20px 0",
    color: "#667eea",
  },

  btnGroup: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },

  incBtn: {
    flex: 1,
    padding: "12px",
    fontSize: "20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#4CAF50",
    color: "#fff",
    cursor: "pointer",
  },

  decBtn: {
    flex: 1,
    padding: "12px",
    fontSize: "20px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#f44336",
    color: "#fff",
    cursor: "pointer",
  },

  resetBtn: {
    flex: 1,
    padding: "12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#607D8B",
    color: "#fff",
    cursor: "pointer",
  },
};
