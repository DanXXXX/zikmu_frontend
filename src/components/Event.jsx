import React from "react";

export default function Event({
  image,
  title,
  text,
  category,
  location,
  coordinates,
}) {
  //   console.log(coordinates);
  return (
    <div className="eventContainer" id="event">
      <div className="divider">
        <img src={image} alt="event" />
        <h3>{title}</h3>
        <p>{text}</p>
        <h5>{category}</h5>
        <p>{location}</p>
      </div>
    </div>
  );
}
