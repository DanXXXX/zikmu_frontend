import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";

export default function SignUp() {
  const {
    register,
    handleSubmit,
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
  const [password, setPassword] = useState("");
  const [confirmPass, SetConfirmPass] = useState("");

  const handleName = (e) => {
    setFullName(e.target.value);
  };
  const handleSurname = (e) => {
    setSurname(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setConfirmPass(e.target.value);
  };

  return (
    <div className="outer">
      <div className="inner">
        <div className="SignUpForm">
          <form onSubmit={handleSubmit}>
            <h1>Sign Up</h1>

            <div className="form-group firstName">
              <label>First name</label>
              <input
                name="firstName"
                type="text"
                className="form-control"
                placeholder="First name"
                value={fullName}
                onChange={(e) => setState({ firstName: e.target.value })}
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
                onChange={(e) => this.setState({ surName: e.target.value })}
              />
            </div>

            <div className="form-group userName">
              <label>Username</label>
              <input
                name="userName"
                type="text"
                className="form-control"
                placeholder="Username"
                value={this.state.userName}
                onChange={(e) => this.setState({ userName: e.target.value })}
              />
            </div>

            <div className="form-group userEmail">
              <label>Email</label>
              <input
                name="email"
                type="email"
                className="form-control"
                placeholder="Enter your email"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
            </div>

            <div className="form-group userPassword">
              <label>Password</label>
              <input
                name="password"
                type="password"
                className="form-control"
                placeholder="Enter your password"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>
            <div className="form-group userPassword">
              <label>Confirm password</label>
              <input
                name="confirmPassword"
                type="password"
                className="form-control"
                placeholder="Confirm your password"
                value={this.state.confirmPassword}
                onChange={(e) =>
                  this.setState({ confirmPassword: e.target.value })
                }
              />
            </div>
            <div className="button-forms d-grid gap-2 col-12 mx-auto">
              <button
                type="submit"
                className="btn btn-outline-dark btn-extend-lg btn-block"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
