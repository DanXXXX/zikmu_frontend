import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nana">
      <div className="icon-bar">
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>

        <Link to="/event">
          <i class="fa fa-envelope"></i>
        </Link>

        <Link to="/event/submit">
          <i class="fa fa-envelope">+</i>
        </Link>
        <Link to="/conversation">
          <i class="fa fa-trash"></i>
        </Link>

        <Link to="/user/profil">
          <i class="fa fa-user"></i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
