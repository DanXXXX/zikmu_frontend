import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function Contact() {
  const {
    // register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const [data, setData] = useState([]);
  const [status, setStatus] = useState("Submit");

  const handleSubmit = (e) => {
    console.log("click on submit");
    e.preventDefault();
    setStatus("Sending...");
  };

  const [fullName, setFullName] = useState("");
  const [object, setObject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleName = (e) => {
    setFullName(e.target.value);
  };
  const handleObject = (e) => {
    setObject(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  axios({
    method: "POST",
    url: "http: localhost:4000/Contact",
    data: { setData },
  }).then((response) => {
    if (response.data.status === "success") {
      alert("Message sent.");
      this.restForm();
    } else if (response.data.status === "fail") {
      alert("Message failed to send. ");
    }
  });

  return (
    <div className="contact-form">
      <h1 className="title">Contact</h1>
      <form
        className="containerForm container py-5"
        id="contact-form"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={handleName}
          />
        </div>
        <div className="form-group">
          <label htmlFor="Object">Object</label>
          <input
            type="text"
            className="form-control"
            name="object"
            id="object"
            value={object}
            onChange={handleObject}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            className="form-control"
            rows="5"
            type="text"
            name="message"
            id="message"
            value={message}
            onChange={handleMessage}
            // {...register("message", {
            //   required: "Message is required !",
            //   pattern: { maxLength: 500 },
            // })}
          />
          <p style={{ color: "red" }}>
            {errors.message && errors.message.message}
          </p>
        </div>
        <button type="submit" className="btn btn-outline-dark">
          Submit
        </button>
      </form>
    </div>
  );
}
