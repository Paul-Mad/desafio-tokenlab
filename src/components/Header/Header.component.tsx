import React from "react";
import "./Header.styles.css";

import { Link } from "@reach/router";

interface headerProps {
  user: object;
  onUserLogout: Function;
}

const Header = ({ user, onUserLogout }: headerProps) => {
  return (
    <header className="header">
      {!user ? (
        <Link to="/" title="Início" className="start">
          Início
        </Link>
      ) : (
        <Link to="/" title="Início"></Link>
      )}
      <nav>
        <ul className="nav">
          {user && (
            <li>
              <Link to="/eventos" title="Eventos">
                Eventos
              </Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/cadastro" title="Cadastrar">
                Cadastro
              </Link>
            </li>
          )}
          {!user && (
            <li>
              <Link to="/login" title="Fazer Log in">
                Log in
              </Link>
            </li>
          )}
          {user && (
            <li>
              <Link
                to="/"
                onClick={(event) => onUserLogout(event)}
                title="Fazer Log out"
              >
                Log out
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
***REMOVED***

export default Header;
