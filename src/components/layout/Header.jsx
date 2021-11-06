import React from "react";
import Brand from "./includes/Brand";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

function Header(props) {
  return (
    <header className="header">
      <Brand />
    </header>
  );
}

export default Header;
