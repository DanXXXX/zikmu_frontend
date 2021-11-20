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
    <div className="event-container" id="event">
      <div className="flex">
        <div className="right">
          <img src={image} alt="event" className="imag" />
        </div>
        <div className="left">
          <h3 className="title">{title}</h3>
          <p className="para">{text}</p>
          <h5 className="cate">{category}</h5>
          <h5 className="location">{location}</h5>
        </div>
      </div>
    </div>
  );
}
