import React, { Component } from "react";

export class NumbersTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: this.props.limit,
    };
  }
  render() {
    let redSquare = {
      height: "75px",
      width: "75px",
      backgroundColor: "red",
      border: "1px solid black",
      display: "inline-block",
      textAlign: "center",
    };
    let whiteSquare = {
      height: "75px",
      width: "75px",
      backgroundColor: "white",
      border: "1px solid black",
      display: "inline-block",
      textAlign: "center",
    };

    let arr = [];
    for (let i = 1; i <= this.state.limit; i++) {
      arr.push(i);
    }

    let squares = arr.map((number, index) => {
      return (
        <div key={index} style={number % 2 === 0 ? redSquare : whiteSquare}>{number}</div>
      );
    });

    return <div style={{ margin: "15px", width:"97%" }}>{squares}</div>;
  }
}

export default NumbersTable;
