import React from "react";
import { RouteComponentProps } from "@reach/router";

const Cadastro = (props: RouteComponentProps) => {
  return (
    <div className="data-form">
      <form>
        <h1>Cadastro</h1>
        <input type="text" name="displayname" placeholder="Nome" required />
        <input type="email" name="email" placeholder="Email" required />

        <span>
          <input type="password" name="password" placeholder="Senha" required />
          <input
            type="password"
            name="password"
            placeholder="Repetir senha"
            required
          />
        </span>
        <button className="btn">Registrar</button>
      </form>
    </div>
  );
***REMOVED***

export default Cadastro;
