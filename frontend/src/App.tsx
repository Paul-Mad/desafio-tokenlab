import React from "react";

//Components

import Header from "./components/Header/Header.component";
import Home from "./components/Home/Home.component";
import Login from "./components/Login/Login.component";
import Registro from "./components/Registro/Registro.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Registro />
    </div>
  );
}

export default App;
