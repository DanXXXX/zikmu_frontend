import React from "react";

export default function Event({
  image,
  title,
  text,
  category,
  location,
  coordinates,
}) {
  console.log(coordinates);
  return (
    <div id="event">
      <img src={image} alt="" />
      <h3>{title}</h3>
      <p>{text}</p>
      <h5>{category}</h5>
      <p>{location}</p>
    </div>
  );
}
