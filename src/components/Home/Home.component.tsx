import React from "react";
import { RouteComponentProps, Link } from "@reach/router";

import "./Home.styles.css";

const Home = (props: RouteComponentProps) => {
  return (
    <div className="data-form">
      <div className=" home">
        <h1>Controle de eventos</h1>

        <Link className="btn" to="/login">
          Log in
        </Link>
        <Link className="btn" to="/cadastro">
          Cadastro
        </Link>
      </div>
    </div>
  );
};

export default Home;
