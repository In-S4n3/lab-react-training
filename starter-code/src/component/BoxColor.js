import React from "react";

function BoxColor(props) {
  // let r = Math.floor(Math.random() * 255 + 0);
  // let g = Math.floor(Math.random() * 255 + 0);
  // let b = Math.floor(Math.random() * 255 + 0);

  function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  return (
    <div>
      <div style={{ backgroundColor: `rgb(${props.r},${props.g},${props.b})` }}>
        rgb({props.r}, {props.g}, {props.b})
        <div>
          {rgbToHex(
            parseInt(props.r, 10),
            parseInt(props.g, 10),
            parseInt(props.b, 10)
          )}
        </div>
      </div>
    </div>
  );
}

export default BoxColor;
