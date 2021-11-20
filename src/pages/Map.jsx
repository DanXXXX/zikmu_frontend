import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import axios from "axios";
import ReactModal from "react-modal";

export default function LocationMarker({
  image,
  title,
  category,
  location,
  coordinates,
}) {
  const [locations, setLocations] = useState([]);
  console.log(image);
  useEffect(() => {
    axios
      .get(`http://localhost:4000/event`)
      .then((res) => {
        setLocations(res.data.events);
        console.log(res.data.events);
      })
      .catch((err) => console.log(err));
  }, []);
  const LocationMarker = () => {
    console.log("marker");
    image?.map((img) => {
      console.log(img);
      return img;
    });
    return locations?.map((location) => {
      console.log(location);
      return (
        <Marker
          position={[
            location.coordinatesObject.lat || 40.0,
            location.coordinatesObject.lng || 2.0,
          ]}
        >
          <Popup className="pop-up">
            <h3>{location.title}</h3>
            <img src={image[4]} alt="event" />
            <p>{location.text}</p>
            <p>{location.category}</p>
            {/* <button>Details</button> */}
          </Popup>
        </Marker>
      );
    });
  };
  return (
    <div className="map">
      <MapContainer
        className="map-container"
        center={[46.8450326, 2.3997593]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://api.maptiler.com/maps/topo/tiles.json?key=6VtA7Ctgi6GFUAkKgZPz'
          url="https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=6VtA7Ctgi6GFUAkKgZPz"
        />
        {LocationMarker()}
      </MapContainer>
      <p className="map-description">
        <span>{locations?.length}</span> evenements trouves !
      </p>

      <ReactModal isOpen={false} />
    </div>
  );
}
