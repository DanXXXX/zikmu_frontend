import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function Brand(props) {
  return (
    <div className="brand">
        <h1 className="brand__icon">
          <Link to="/">
            <i class="far fa-play-circle" classname="brand__icon-play"></i>
          </Link>
        </h1>
        
    </div>
  );
}

export default Brand;
