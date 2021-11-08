import React, { useState, useEffect, useContext } from "react";
//import { UserContext } from "../App.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Message from "./components/pages/Message";
import Update from "./components/pages/admin/Update";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Error404 from "./components/pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js.map";
import "./styles/main.scss";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Login" component={Login} />
            <Route path="/Register" component={Register} />
            <Route patch="/Tchat" component={Message} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
