import React from "react";
import "./Header.styles.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/">Inicio</a>
      <nav>
        <ul className="nav">
          <li>
            <a href="/registro">Cadastrar</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
***REMOVED***

export default Header;
