import React, { useState } from "react";
import axios from "axios";
import Login from "./Login";

export default function Signup() {
  const [formSubmit, setFormSubmit] = useState(false);
  const [fullName, setFullName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const terms = document.getElementById("terms");
    const pseudoError = document.querySelector(".pseudo.error");
    const emailError = document.querySelector(".email.error");
    const passwordError = document.querySelector(".password.error");
    const passwordConfirmError = document.querySelector(
      ".password-confirm.error"
    );
    const termsError = document.querySelector(".terms.error");

    passwordConfirmError.innerHTML = "";
    termsError.innerHTML = "";

    if (password !== confirmPass || !terms.checked) {
      if (password !== confirmPass)
        passwordConfirmError.innerHTML =
          "Les mots de passe ne correspondent pas";

      if (!terms.checked)
        termsError.innerHTML = "Veuillez valider les conditions générales";
    } else {
      await axios({
        method: "POST",
        url: "http://localhost:4000/user/register",
        data: { fullName, surname, password, email, gender },
      })
        .then((res) => {
          console.log(res);
          if (res.data.errors) {
            pseudoError.innerHTML = res.data.errors.fullName;
            emailError.innerHTML = res.data.errors.email;
            passwordError.innerHTML = res.data.errors.password;
          } else {
            setFormSubmit(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      {formSubmit ? (
        <>
          <Login />
          <span></span>
          <h4 className="success">
            Enregistrement réussi, veuillez-vous connecter
          </h4>
        </>
      ) : (
        <form action="" onSubmit={handleRegister} className="form signup">
          <h2 className="signup__title">Welcome on board !</h2>
          <h3 className="signup__subtitle">Sign up to join the community</h3>

          <input
            type="text"
            name="fullName"
            className="fullname"
            placeholder="enter your fullname"
            id="fullName"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
          <div className="fullName error"></div>

          <input
            type="text"
            placeholder="surname"
            name="surname"
            id="surname"
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
          />
          <div className="surname error"></div>

          {/* <input
            type="text"
            name="gender"
            placeholder="gender"
            id="gender"
            onChange={(e) => setGender(e.target.value)}
            value={gender}
          />
          <div className="gender error"></div> */}

          <input
            type="text"
            name="email"
            placeholder="enter your Email"
            className="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>

          <input
            type="password"
            name="password"
            placeholder="Confirm password"
            id="password-conf"
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
          <div className="password-confirm error"></div>

          <input type="checkbox" className="terms" id="terms" />
          <p className="para">
            <a href="/" target="_blank" rel="noopener noreferrer">
              J'accepte les conditions générales
            </a>
          </p>
          <div className="terms error"></div>

          <input
            type="submit"
            placeholder="Valider inscription"
            className="btn"
          />
        </form>
      )}
    </>
  );
}
