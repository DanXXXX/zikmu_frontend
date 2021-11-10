import React, { useState, useEffect, useContext } from "react";
//import { UserContext } from "../App.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Update from "./components/pages/admin/Update";
import Register from "./components/pages/Register";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import Error404 from "./components/pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js.map";
import "./styles/main.scss";
import ListEvent from "./components/pages/ListEvent";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/event" component={ListEvent} />
            <Route path="/Signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/contact" component={Contact} />
            <Route path="*" component={Error404} />
          </Switch>
        </div>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
