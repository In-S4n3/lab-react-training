import React from "react";

function Rating(props) {
  //console.log(props.children);
  let num = Math.round(props.children);

  let star = "";
  switch (num) {
    case 0:
      star = "☆☆☆☆☆";
      break;
    case 1:
      star = "★☆☆☆☆";
      break;
    case 2:
      star = "★★☆☆☆";
      break;
    case 3:
      star = "★★★☆☆";
      break;
    case 4:
      star = "★★★★☆";
      break;
    case 5:
      star = "★★★★★";
      break;
    default:
      break;
  }

  return <div>{star}</div>;
}

export default Rating;
