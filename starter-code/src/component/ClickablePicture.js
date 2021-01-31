import React, { Component } from "react";

export class ClickablePicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glasses: false,
    };

    this.handleClick = () => {
      if (this.state.glasses === false) {
        this.setState({
          glasses: true,
        });
      } else {
        this.setState({
          glasses: false,
        });
      }
    };
  }

  render() {
    return (
      <div >
        {this.state.glasses === false ? (
          <img onClick={this.handleClick} src={this.props.img} alt="max img" />
        ) : (
          <img onClick={this.handleClick} src={this.props.imgClicked} alt="max img" />
        )}
      </div>
    );
  }
}

export default ClickablePicture;
