import React from "react";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-modal";
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
  const [userId, setUserId] = useState(
    userID ? userID : localStorage.getItem("userId")
  );

  const [username, setUsername] = useState("");
  const [images, SetImages] = useState([]);
  const [showModal, setShowModal] = useState(false);
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
    setFile(e.target.value);
  };

  const handleLocation = (e) => {
    setLocation(e.target.value);
  };

  const onChangeImages = (e) => {
    SetImages([...e.target.file]);
  };

  const addLocation = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("title", title);
    data.append("text", text);
    data.append("category", category);
    data.append("file", file);
    data.append("coordinates", JSON.stringify(coordinates));

    // images?.forEach((image) => {
    //   formData.append("images", image);
    // });
    // for (let [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    fetch("http://localhost:4000/event/submit", {
      method: "post",
      body: data,
    }).then((res) => console.log(res));
    // axios
    //   .post("http://localhost:4000/event/submit", { title: "hello" })
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };
  if (
    localStorage.getItem("userId") === "" ||
    (userID && localStorage.getItem("userId") !== userID)
  ) {
    localStorage.setItem("userId", userID);
    setUserId(localStorage.getItem("userId"));
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((e) =>
        setMarkers([...markers, [e.coords.latitude, e.coords.longitude]])
      );
    }
  }, []);

  function LocationMarker() {
    useMapEvents({
      click(e) {
        // console.log(e.latlng.lat, e.latlng.lng);
        setMarkers([...markers, [e.latlng.lat, e.latlng.lng]]);
        setCoords({ lat: e.latlng.lat, lng: e.latlng.lng });
        setShowModal(true);
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

  useEffect(() => {
    setUsername(user?.username ? user?.username : "Username");
  }, []);

  return (
    <div>
      <h1 className="title">Ajouter un évènement</h1>
      <div className="EventForm">
        <form onSubmit={addLocation}>
          <h1>Event form</h1>

          <div className="form-group eventTitle">
            <label>Titre</label>
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="Titre de l'énènement"
              value={title}
              onChange={handleTitle}
            />
          </div>

          <div className="form-group eventDescrib">
            <label>Description</label>
            <input
              name="text"
              type="text"
              className="form-control"
              placeholder="Description de l'évènement"
              value={text}
              onChange={handleText}
            />
          </div>

          <div className="form-group eventCategory">
            <label>
              Catégories
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
            </label>
          </div>

          <div className="form-group contenu">
            <label>Programation</label>
            <input
              name="file"
              type="file"
              className="form-control"
              placeholder="Lien vers l'évènement"
              value={file}
              onChange={handleFile}
            />
          </div>
          <div className="form-group location">
            <label>Localité</label>
            <input
              name="location"
              type="text"
              className="form-control"
              placeholder="localité"
              value={location}
              onChange={handleLocation}
            />
          </div>

          <div className="button-forms d-grid gap-2 col-12 mx-auto">
            <div id="set-map"></div>
            <button
              type="submit"
              className="btn btn-outline-light btn-extend-lg btn-block"
            >
              Poster l'évènement
            </button>
          </div>
        </form>
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
    </div>
  );
}
