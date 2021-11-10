import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import axios from "axios";

export default function SignUp() {
  const {
    // register,
    // handleSubmit,
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
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleName = (e) => {
    setFullName(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleGender = (e) => {
    setGender(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  axios({
    method: "POST",
    url: "http: localhost:4000/Signup",
    data: { setData },
  }).then((response) => {
    if (response.data.status === "success") {
      alert("Registration sent.");
      this.restForm();
    } else if (response.data.status === "fail") {
      alert("Registration failed to send. ");
    }
  });

  return (
    <div className="outer">
      <div className="inner">
        <div className="SignUpForm">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>

            <div className="form-group fullName">
              <label>Full name</label>
              <input
                name="fullName"
                type="text"
                className="form-control"
                placeholder="Full name"
                value={fullName}
                onChange={handleName}
              />
            </div>

            <div className="form-group surName">
              <label>Surname</label>
              <input
                name="surName"
                type="text"
                className="form-control"
                placeholder="Surname"
                value={surname}
                onChange={handleSurname}
              />
            </div>

            <div className="form-group userEmail">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmail}
              />
            </div>

            <div className="form-group userGender">
              <label>
                Sex
                <select
                  name="userGender"
                  className="form-control"
                  placeholder="Sex"
                  value={gender}
                  onChange={handleGender}
                >
                  <option value="men">Homme</option>
                  <option value="women">Femme</option>
                </select>
              </label>
            </div>

            <div className="form-group userPassword">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={password}
                onChange={handlePassword}
              />
            </div>

            <div className="form-group userPassword">
              <label>Confirm password</label>
              <input
                name="confirmPassword"
                type="password"
                className="form-control"
                placeholder="Confirm your password"
                value={confirmPass}
                onChange={handleConfirmPass}
              />
            </div>

            <div className="button-forms d-grid gap-2 col-12 mx-auto">
              <button
                type="submit"
                className="btn btn-outline-dark btn-extend-lg btn-block"
              >
                Register
              </button>
              <p className="text-right">
                Déjà inscrit ? <a href="#login">S'identifier</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
