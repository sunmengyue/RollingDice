import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  render() {
    return (
      <div>
        <Die />
        <button>Rolling</button>
      </div>
    );
  }
}

export default RollDice;
