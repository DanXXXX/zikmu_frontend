import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function Brand(props) {
  return (
    <div className="brand">
      <Link to="/">
        <i class="far fa-play-circle" classname="brand__icon-play"></i>
      </Link>
    </div>
  );
}

export default Brand;
