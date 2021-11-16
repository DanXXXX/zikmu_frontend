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
      method: "post",
      url: `/user/login`,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res.jwt);
        console.log(res.cookie);
        // debugger;
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = "/";
          console.log("itsok");
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
          onChange={(e) => {
            console.log(e.target.value);
            setEmail(e.target.value);
          }}
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
        {/* <input type="submit" value="Login" /> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
