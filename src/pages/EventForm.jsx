import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

export default function EventForm({ userID, setUserID, user }) {
  const {
    formState: { errors },
  } = useForm();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [location, setLocation] = useState("");
  const [coordinates, setCoords] = useState({});
  const [markers, setMarkers] = useState([]);

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleFile = (e) => {
    // setFile(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
    // setVideo("");
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const addLocation = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("category", category);
    formData.append("file", file);
    formData.append("coordinates", JSON.stringify(coordinates));

    // images?.forEach((image) => {
    //   formData.append("images", image);
    // });
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }
    axios
      .post("http://localhost:4000/event/submit", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    console.log("add");
  };

  function LocationMarker() {
    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((e) =>
          setMarkers([...markers, [e.coords.latitude, e.coords.longitude]])
        );
      }
    }, []);

    useMapEvents({
      click(e) {
        // console.log(e.latlng.lat, e.latlng.lng);
        setMarkers([...markers, [e.latlng.lat, e.latlng.lng]]);
        setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
      },
    });

    return markers === []
      ? null
      : markers.map((coords) => (
          <Marker key={Math.random()} position={coords}>
            <Popup>
              <p>Hello</p>
            </Popup>
          </Marker>
        ));
  }
  const customStyles = {
    content: {
      display: "flex",
      width: "30vw",
      height: "40vh",
      index: "0",
      // marginRight: "-%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(2, 56, 69)",
      borderRadius: "20px",
    },
  };

  return (
    <div add-event>
      <h1 className="title">Ajouter un évènement</h1>
      <div className="EventForm">
        <form action="" onSubmit={addLocation}>
          <h1>Event form</h1>
          <input
            name="title"
            type="text"
            className="form-control"
            placeholder="Titre de l'énènement"
            value={title}
            onChange={handleTitle}
          />
          <input
            name="text"
            type="text"
            className="form-control"
            placeholder="Description de l'évènement"
            value={text}
            onChange={handleText}
          />
          <select
            name="category"
            className="form-control"
            placeholder="Cours de ..."
            value={category}
            onChange={handleCategory}
          >
            <option value="Comédie musicale">Comédie musicale</option>
            <option value="Concerts">Concert</option>
            <option value="Festival">Festival</option>
            <option value="Savoirs pratiques">Savoirs pratiques</option>
            <option value="Street-Dance">Street-Dance</option>
            <option value="Opéra">Opéra</option>
            <option value="Autre">Autre...</option>
          </select>
          <>
            {/* <img src="./image/icons/picture.svg" alt="img" /> */}
            <input
              type="file"
              id="file-upload"
              name="file"
              accept=".jpg, .jpeg, .png"
              onChange={(e) => handleFile(e)}
            />
          </>
          <input
            name="location"
            type="text"
            className="form-control"
            placeholder="localité"
            value={location}
            onChange={handleLocation}
          />
          <div id="set-map">
            <MapContainer
              className="map-container-set"
              center={[48.8450326, 2.3997593]}
              zoom={6}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://api.maptiler.com/maps/topo/tiles.json?key=6VtA7Ctgi6GFUAkKgZPz'
                url="https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=6VtA7Ctgi6GFUAkKgZPz"
              />
              <LocationMarker />
            </MapContainer>
          </div>

          <input
            type="submit"
            value="Poster l'evenement"
            className="btn btn-outline-light btn-extend-lg btn-block"
          />
        </form>
      </div>
    </div>
  );
}
