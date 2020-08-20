import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="roll-dice">
        <div className="dices">
          <Die face="five" />
          <Die face="two" />
        </div>
        <button>Rolling</button>
      </div>
    );
  }
}

export default RollDice;
