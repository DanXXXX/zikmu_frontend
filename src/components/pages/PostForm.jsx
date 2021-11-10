import react from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";
export default function PostForm() {
  const {
    formState: { errors },
  } = useForm();

  const [posterId, setPosterId] = useState("");
  const [message, setMessage] = useState("");
  const [picture, setPicture] = useState("");
  const [video, setVideo] = useState("");

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handlePicture = (e) => {
    setPicture(e.target.value);
  };
  const handleVideo = (e) => {
    setVideo(e.target.value);
  };

  const requestOptions = () => {
    axios({
      method: "POST",
      url: "http://localhost:4000/post/submit",
      data: { message, picture, video },
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Post sent.");
        this.restForm();
      } else if (response.data.status === "fail") {
        alert("Post failed to send. ");
      }
    });
  };

  return (
    <div>
      <h1 className="title">Rédiger un post</h1>
      <div className="PostForm">
        <form onSubmit={requestOptions}>
          <h1>Post form</h1>
          <div className="form-group message">
            <label>Message</label>
            <input
              name="message"
              type="text"
              className="form-control"
              placeholder="Message"
              value={message}
              onChange={handleMessage}
            />
          </div>

          <div className="form-group picture">
            <label>Image</label>
            <input
              name="picture"
              type="file"
              className="form-control"
              placeholder="Insérer une image"
              value={picture}
              onChange={handlePicture}
            />
          </div>

          <div className="form-group video">
            <label>Vidéo</label>
            <input
              name="video"
              type="text"
              className="form-control"
              placeholder="Partager une vidéo"
              value={video}
              onChange={handleVideo}
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
