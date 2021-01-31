import React, { Component } from "react";

export class LikeButton extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      backgroundColor: "",
    };

    this.handleCounter = () => {
      this.setState({
        counter: this.state.counter + 1,
      });
      this.handleColors()
    };

    this.handleColors = () => {
      let colors = ["purple", "blue", "green", "yellow", "orange", "red"];
      let randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.setState({
        backgroundColor: randomColor,
      });
    };
  }

  render() {
    return (
      <div style={{display:"inline"}}> 
        <button
          style={{ backgroundColor: `${this.state.backgroundColor}`, margin: "10px" }}
          onClick={this.handleCounter}
        >
          {this.state.counter} Likes
        </button>
      </div>
    );
  }
}

export default LikeButton;
