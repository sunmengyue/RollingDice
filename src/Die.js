import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    return <i className={`dice fas fa-dice-${this.props.face}`}></i>;
  }
}

export default Die;
