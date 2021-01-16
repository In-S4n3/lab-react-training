import React from "react";

function Random(props) {
  
  let random = Math.floor(Math.random() * props.max + props.min)+1;

  return (
    <div>
      <div>Random value between {props.min} and {props.max} => {random}</div>
    </div>
  );
}

export default Random;
