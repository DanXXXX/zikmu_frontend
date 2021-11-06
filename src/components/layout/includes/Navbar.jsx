import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nana">
      <div class="icon-bar">
        <Link to="/">
          <i className="fa fa-search">Home</i>
        </Link>
        <Link to="/Login">
          <i class="fa fa-envelope">Login</i>
        </Link>
        <Link to="/Register">
          <i class="">Register</i>
        </Link>
        <Link to="/Event" className="active">
          <i class="fa fa-globe">Event</i>
        </Link>
        <Link to="/Admin">
          <i class="fa fa-trash">Admin</i>
        </Link>
        <Link to="/Tchat">
          <i class="fa fa-trash">Tchat</i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
