import React from "react";
import { Link } from "@reach/router";

import "./styles.scss";

const Header = () => (
  <header className="app-header">
    <Link to="/">
      <h1 className="app-header__title">Agrupador</h1>
    </Link>
  </header>
);

export default Header;
