import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function MusicForm() {
  const {
    formState: { errors },
  } = useForm();

  const [name, setName] = useState("");
  const [songs, setSongs] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleSongs = (e) => {
    setSongs(e.target.value);
  };

  const requestOptions = () => {
    axios({
      method: "POST",
      url: "http://localhost:4000/songs/submit",
      data: { name, songs },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Music sent.");
        this.restForm();
      } else if (response.data.status === "fail") {
        alert("Music failed to send. ");
      }
    });
  };
  return (
    <div>
      <h1 className="title">Poster un son</h1>

      <div className="MusicForm">
        <form onSubmit={requestOptions}>
          <h1>Music form</h1>

          <div className="form-group musicName">
            <label>Titre</label>
            <input
              name="name"
              type="text"
              className="form-control"
              placeholder="Titre du morceau"
              value={name}
              onChange={handleName}
            />
          </div>

          <div className="form-group songs">
            <label>Musiques</label>
            <input
              name="text"
              type="[text]"
              className="form-control"
              placeholder="Musiques"
              value={songs}
              onChange={handleSongs}
            />
          </div>

          <div className="button-forms d-grid gap-2 col-12 mx-auto">
            <button
              type="submit"
              className="btn btn-outline-dark btn-extend-lg btn-block"
            >
              Poster
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
