import React, { useEffect } from "react";
import { Router } from "@reach/router";

//Components
import Header from "./components/Header/Header.component";
import Home from "./components/Home/Home.component";
import Login from "./components/Login/Login.component";
import Cadastro from "./components/Cadastro/Cadastro.component";
import Eventos from "./components/Eventos/Eventos.component";

const App = (): JSX.Element => {
  useEffect((): void => {}, []);

  return (
    <div className="App">
      <Header />
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Cadastro path="/cadastro" />
        <Eventos path="/eventos" />
      </Router>
    </div>
  );
***REMOVED***

export default App;
