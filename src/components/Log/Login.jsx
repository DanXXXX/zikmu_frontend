import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");

    axios({
      method: "POST",
      url: `http://localhost:4000/user/login`,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Incrivez-vous</h1>
      <form action="" onSubmit={handleLogin}>
        <input
          type="text"
          name="email"
          id="email"
          placeholder="email..."
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <div className="email error"></div>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="password..."
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <div className="password error"></div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
