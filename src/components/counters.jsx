import React, { Component } from "react";
import Counter from "./counter";

class Counters extends React.Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  deleteComponent = (counterId) => {
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    this.setState({ counters: counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() {
    return (
      <div>
        <button
          onClick={this.handleReset}
          className="btn btn-primary btn-sm m-2"
        >
          reset
        </button>
        {this.state.counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={this.deleteComponent}
            onIncrement={this.handleIncrement}
            counter={counter}
          >
            <h5>Counter #{counter.id}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
