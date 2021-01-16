import React from "react";

function Rating(props) {
  //console.log(props.children);
  let num = Math.round(props.children);
  

  let source = "";
  switch (num) {
    case 0:
      source = "/img/empty-stars.png";
      break;
    case 1:
      source = "/img/one-stars.png";
      break;
    case 2:
      source = "/img/two-stars.png";
      break;
    case 3:
      source = "/img/three-stars.png";
      break;
    case 4:
      source = "/img/four-stars.png";
      break;
    case 5:
      source = "/img/five-stars.png";
      break;
    default:
      break;
  }

  return (
    <div>
      <img src={source} alt="dice" />
    </div>
  );
}

export default Rating;
