import React, { Component } from "react";

export class Dice extends Component {
  constructor() {
    super();
    this.state = {
      diceImg: `/img/dice${Math.floor(Math.random() * 6) + 1}.png`,
    };

    this.handleCLick = () => {
      this.setState({
        diceImg: "/img/dice-empty.png",
      });
      setTimeout(() => {
        this.setState({
          diceImg: `/img/dice${Math.floor(Math.random() * 6) + 1}.png`,
        });
      }, 1000);
    };
  }

  render() {
    return (
      <div style={{ margin: "15px" }}>
        <img
          src={this.state.diceImg}
          alt="dice"
          width="15%"
          onClick={this.handleCLick}
        />
      </div>
    );
  }
}

export default Dice;
