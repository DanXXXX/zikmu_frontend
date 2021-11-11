import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function CourseForm() {
  const {
    formState: { errors },
  } = useForm();

  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");

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

  const hanldePrice = (e) => {
    setPrice(e.target.value);
  };

  const requestOptions = () => {
    axios({
      method: "POST",
      url: "http://localhost:4000/post/submit",
      data: { title, text, category, file, price },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Course sent.");
        this.restForm();
      } else if (response.data.status === "fail") {
        alert("Course failed to send. ");
      }
    });
  };

  return (
    <div>
      <h1 className="title">Proposer un cours</h1>

      <div className="CourseForm">
        <form onSubmit={requestOptions}>
          <h1>Course form</h1>

          <div className="form-group courseTitle">
            <label>Titre</label>
            <input
              name="title"
              type="text"
              className="form-control"
              placeholder="Titre du cours"
              value={title}
              onChange={handleTitle}
            />
          </div>

          <div className="form-group courseDescrib">
            <label>Description</label>
            <input
              name="text"
              type="text"
              className="form-control"
              placeholder="Description du cours"
              value={text}
              onChange={handleText}
            />
          </div>

          <div className="form-group courseCategory">
            <label>
              Catégories
              <select
                name="category"
                className="form-control"
                placeholder="Cours de ..."
                value={category}
                onChange={handleCategory}
              >
                <option value="Basse">Basse</option>
                <option value="Batterie">Batterie</option>
                <option value="Chant">Chant</option>
                <option value="Composition">Composition</option>
                <option value="Guitare">Guitare</option>
                <option value="Harpe">Harpe</option>
                <option value="Piano">Piano</option>
                <option value="Solfège">Solfège</option>
                <option value="Violon">Violon</option>
                <option value="Autre">Autre...</option>
              </select>
            </label>
          </div>

          <div className="form-group contenu">
            <label>Contenu</label>
            <input
              name="file"
              type="text"
              className="form-control"
              placeholder="lien du contenu (video, pdf, podcast..."
              value={file}
              onChange={handleFile}
            />
          </div>

          <div className="form-group price">
            <label>Prix</label>
            <input
              name="price"
              type="number"
              className="form-control"
              placeholder="Prix"
              value={price}
              onChange={hanldePrice}
            />
          </div>

          <div className="button-forms d-grid gap-2 col-12 mx-auto">
            <button
              type="submit"
              className="btn btn-outline-dark btn-extend-lg btn-block"
            >
              Proposer mon cours
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
