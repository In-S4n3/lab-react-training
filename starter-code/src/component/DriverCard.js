import React from "react";
import Rating from "./Rating";

const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div
      style={{
        backgroundColor: "blue",
        color: "white",
        textAlign: "center",
        borderRadius: "15px",
        margin: "15px",
      }}
    >
      <div style={{padding: "5px", display: "inline"}}>
        <img
          src={img}
          alt="pic"
          style={{ width: "20%", borderRadius: "50%" }}
        />
        <div>
          <span>{name}</span>
          <Rating>{rating}</Rating>
          {car.model} - {car.licensePlate}
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
