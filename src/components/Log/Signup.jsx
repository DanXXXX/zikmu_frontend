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
        url: "http://localhost:4000/user/signup",
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
        <form action="" onSubmit={handleRegister} id="sign-up-form">
          <div className="form-group fullName">
            <label htmlFor="fullName">Fullname</label>
            <br />
            <input
              type="text"
              name="fullName"
              id="fullName"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <div className="fullName error"></div>
          </div>
          <div className="form-group surName">
            <label htmlFor="surname">Surname</label>
            <br />
            <input
              type="text"
              name="surname"
              id="surname"
              onChange={(e) => setSurname(e.target.value)}
              value={surname}
            />
            <div className="surname error"></div>
          </div>
          <br />
          <div className="form-group userGender">
            <label htmlFor="gender">Gender</label>
            <br />
            <input
              type="text"
              name="gender"
              id="gender"
              onChange={(e) => setGender(e.target.value)}
              value={gender}
            />
            <div className="gender error"></div>
          </div>
          <br />
          <div className="form-group userEmail">
            <label htmlFor="email">Email</label>
            <br />
            <input
              type="text"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <div className="email error"></div>
          </div>
          <div className="form-group userPassword">
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <div className="password error"></div>
          </div>
          <br />
          <div className="form-group userPassword">
            <label htmlFor="password-conf">Confirmer mot de passe</label>
            <br />
            <input
              type="password"
              name="password"
              id="password-conf"
              onChange={(e) => setConfirmPass(e.target.value)}
              value={confirmPass}
            />
            <div className="password-confirm error"></div>
          </div>
          <br />
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">
            J'accepte les{" "}
            <a href="/" target="_blank" rel="noopener noreferrer">
              conditions générales
            </a>
          </label>
          <div className="terms error"></div>
          <br />
          <input type="submit" value="Valider inscription" />
        </form>
      )}
    </>
  );
}
