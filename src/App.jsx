import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
//import { UserContext } from "../App.js";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js.map";
import "./styles/main.scss";
import Routes from "./components/Routes";

function App() {
  const [id, setId] = useState({});

  axios.get("http://localhost:4000/user");

  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
}

export default App;
