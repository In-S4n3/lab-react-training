import React from "react";

function IdCard(props) {
  return (
    <div style={{ border: "1px solid black", padding: "10px" }}>
      <img src={props.picture} alt="John Doe" style={{ float: "left" }}/>
      <div>
        <div>
          <b>First name:</b> {props.firstName}
        </div>
        <div>
          <b>Last name:</b> {props.lastName}
        </div>
        <div>
          <b>Gender:</b> {props.gender}
        </div>
        <div>
          <b>Height:</b> {props.height}cm
        </div>
        <div>
          <b>Birth:</b> {props.birth}
        </div>
      </div>
    </div>
  );
}

export default IdCard;
