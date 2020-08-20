import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

class RollDice extends Component {
  static defaultProps = {
    faces: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = { dice1: "one", dice2: "one" };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const newDice1 = this.props.faces[
      Math.floor(Math.random() * this.props.faces.length)
    ];
    const newDice2 = this.props.faces[
      Math.floor(Math.random() * this.props.faces.length)
    ];
    this.setState({
      dice1: newDice1,
      dice2: newDice2,
    });
  }

  render() {
    return (
      <div className="roll-dice">
        <div className="dices">
          <Die face={this.state.dice1} />
          <Die face={this.state.dice2} />
        </div>
        <button onClick={this.roll}>Rolling</button>
      </div>
    );
  }
}

export default RollDice;
