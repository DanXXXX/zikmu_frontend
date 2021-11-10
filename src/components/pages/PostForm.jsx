import react from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function PostForm() {
  const {
    formState: { errors },
  } = useForm();

  const [data, setData] = useState([]);
  const [status, setStatus] = useState("Submit");

  const [posterId, setPosterId] = useState("");
  const [message, setMessage] = useState("");
  const [picture, setPicture] = useState("");
  const [video, setVideo] = useState("");
  const [likers, setLikers] = useState("");
  const [comments, setComments] = useState("");

  const handlePosterId = (e) => {
    setPosterId(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const handlePicture = (e) => {
    setPicture(e.target.value);
  };
  const handleVideo = (e) => {
    setVideo(e.target.value);
  };
  const handleLikers = (e) => {
    setLikers(e.target.value);
  };
  const handleComments = (e) => {
    setComments(e.target.value);
  };

  const requestOptions = () => {
    axios({
      method: "POST",
      url: "http://localhost:4000/user/signup",
      data: { posterId, message, picture, video, likers, comments },
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
    </div>
  );
}
