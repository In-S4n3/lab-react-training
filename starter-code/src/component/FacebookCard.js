import React from "react";

class FacebookCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayInfo: false,
    };

    this.handleClick = () => {
      if (this.state.displayInfo === false) {
        this.setState({
          displayInfo: true,
        });
      } else {
        this.setState({
          displayInfo: false,
        });
      }
    };
  }

  render() {
    let normalStyle = {
      margin: "5px",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      width: "20%",
      display: "inline-block",
      backgroundColor: "rgb(245, 252, 250)",
    };
    let clickedStyle = {
      margin: "5px",
      boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
      transition: "0.3s",
      width: "20%",
      display: "inline-block",
      backgroundColor: "rgb(161, 231, 255)",
    };
    
    return (
      <div style={this.props.button === this.props.country ? clickedStyle : normalStyle}>
        <img src={this.props.picture} alt="Avatar" width="80%" onClick={this.handleClick} />
        <div style={ this.state.displayInfo ? { padding: "2px 16px" } : {display :'none'} }>
          <h6>
            <b>First name:</b> {this.props.firstName}
            <br />
            <b>Last name:</b> {this.props.lastName}
          </h6>
          <p>
            <b>Country:</b> {this.props.country}
          </p>
          <b>Type:</b> {this.props.type ? "Student" : "Teacher"}
        </div>
      </div>
    );
  }
}

export default FacebookCard;
