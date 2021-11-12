import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function EventForm() {
  const {
    formState: { errors },
  } = useForm();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [location, setLocation] = useState("");

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
    <div>
      <h1 className="title">Ajouter un évènement</h1>
      <div className="EventForm">
        <form onSubmit={requestOptions}>
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
                <option value="Opéra">Opéra</option>
                <option value="Autre">Autre...</option>
              </select>
            </label>
          </div>

          <div className="form-group contenu">
            <label>Programation</label>
            <input
              name="file"
              type="text"
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
            <button
              type="submit"
              className="btn btn-outline-dark btn-extend-lg btn-block"
            >
              Poster l'évènement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
