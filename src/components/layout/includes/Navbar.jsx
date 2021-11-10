import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nana">
      <div class="icon-bar">
        <Link to="/">
          <i className="fa fa-search">Home</i>
        </Link>
        <Link to="/login">
          <i class="fa fa-envelope">Login</i>
        </Link>
        <Link to="/Signup">
          <i class="fa fa-envelope">Sign up</i>
        </Link>
        <Link to="/Register">
          <i class="">Register</i>
        </Link>
        <Link to="/event" className="active">
          <i class="fa fa-globe">Event</i>
        </Link>
        <Link to="/admin">
          <i class="fa fa-trash">Admin</i>
        </Link>
        <Link to="/conversation">
          <i class="fa fa-trash">Conversation</i>
        </Link>
        <Link to="/Tchat">
          <i class="fa fa-trash">chat</i>
        </Link>
        <Link to="/Contact">
          <i class="fa fa-envelope">Contact</i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
