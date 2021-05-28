import React from "react";
import "./Header.styles.css";

import { Link } from "@reach/router";

const Header = () => {
  return (
    <header className="header">
      <Link to="/" title="Início">
        Início
      </Link>
      <nav>
        <ul className="nav">
          <li>
            <Link to="/eventos" title="Eventos">
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/cadastro" title="Cadastrar">
              Cadastro
            </Link>
          </li>
          <li>
            <Link to="/login" title="Fazer Log in">
              Log in
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
***REMOVED***

export default Header;
