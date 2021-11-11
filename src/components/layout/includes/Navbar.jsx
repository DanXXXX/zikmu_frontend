import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className="nana">
      <div className="icon-bar">
        <Link to="/">
          <i className="fa fa-home"></i>
        </Link>
        <Link to="/login">
          <i class="fa fa-globe"></i>
        </Link>
        <Link to="/signup">
          <i class="fa fa-globe"></i>
        </Link>

        <Link to="/event" className="active">
          <i class="fa fa-envelope"></i>
        </Link>
        <Link to="/admin">
          <i class="fa fa-trash"></i>
        </Link>
        <Link to="/conversation">
          <i class="fa fa-trash"></i>
        </Link>
        <Link to="/contact">
          <i class="fa fa-envelope"></i>
        </Link>
        <Link to="/post/submit">
          <i class="fa fa-envelope">+</i>
        </Link>
        <Link>
          {" "}
          to="/course/submit">
          <i class="fa fa-envelope">Cours</i>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
