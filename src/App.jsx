import React, { useState, useEffect, useContext } from "react";
//import { UserContext } from "../App.js";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./components/pages/Home";
import Update from "./components/pages/admin/Update";
import Register from "./components/pages/Register";
import SignUp from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Contact from "./components/pages/Contact";
import PostForm from "./components/pages/PostForm";
import EventForm from "./components/pages/EventForm";
import MusicForm from "./components/pages/MusicForm";
import Error404 from "./components/pages/Error404";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js.map";
import "./styles/main.scss";
import ListEvent from "./components/pages/ListEvent";
import Actu from "./components/pages/Actu";
import Map from "./components/pages/Map";
import CourseForm from "./components/pages/CourseForm";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />

        <Switch>
          <Route exact path="/" component={Actu} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/contact" component={Contact} />
          <Route exact path="/event" component={ListEvent} />
          <Route path="/event/map" component={Map} />
          <Route path="/event/submit" component={EventForm} />
          <Route path="/post/submit" component={PostForm} />
          <Route path="/course/submit" component={CourseForm} />
          <Route path="/songs/submit" component={MusicForm} />
          <Route path="*" component={Error404} />
        </Switch>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
