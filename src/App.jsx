import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
//import { UserContext } from "../App.js";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js.map";
import "./styles/main.scss";
import Routes from "./components/Routes";
import { UidContext } from "./components/AppContext";
import { useDispatch } from "react-redux";
import { getUser } from "./actions/user.actions";

const App = () => {
  const [uid, setUid] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("useeffect");
    const fetchToken = async () => {
      await axios({
        method: "get",
        url: `/jwtid`,
      })
        .then((res) => {
          console.log(
            res.data,
            "<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< DATA"
          );
          setUid(res.data);
        })
        .catch((err) => console.log("No token"));
    };
    fetchToken();

    if (uid) dispatch(getUser(uid));
  }, [uid, dispatch]);

  return (
    <UidContext.Provider value={uid}>
      <Routes />
      <Footer />
    </UidContext.Provider>
  );
};

export default App;
