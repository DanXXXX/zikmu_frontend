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
  const [address, setAddress] = useState("");
  const [images, SetImages] = useState([]);
  const [type, setType] = useState("");
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
    SetImages([...e.target.files]);
  };
  const addLocation = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("text", text);
    formData.append("address", address);
    formData.append("type", type);
    console.log(typeof coordinates, coordinates);
    formData.append("coordinates", JSON.stringify(coordinates));
    formData.append("userId", userId);
    formData.append("username", username);
    images?.forEach((image) => {
      formData.append("images", image);
    });
    axios
      .post("http://localhost:4000/locations/add", formData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setShowModal(false);
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

  const requestOptions = () => {
    axios({
      method: "POST",
      url: "http://localhost:4000/event/submit",
      data: { title, text, category, file, location },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Event sent.");
        this.restForm();
      } else if (response.data.status === "fail") {
        alert("Event failed to send. ");
      }
    });
  };

  return (
    <div className="add-event">
      <h1 className="title">Ajouter un évènement</h1>
      <div className="EventForm">
        <form onSubmit={addLocation}>
          <h2>Event form</h2>

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

          <input
            name="file"
            type="file"
            className="form-control"
            placeholder="Lien vers l'évènement"
            value={file}
            onChange={handleFile}
          />

          <input
            name="location"
            type="text"
            className="form-control"
            placeholder="localité"
            value={location}
            onChange={handleLocation}
          />

          <div className="button-forms d-grid gap-2 col-12 mx-auto">
            <button
              type="submit"
              className="btn btn-outline-dark btn-extend-lg btn-block"
            >
              Poster l'évènement
            </button>
          </div>
        </form>
      </div>

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
    </div>
  );
}
