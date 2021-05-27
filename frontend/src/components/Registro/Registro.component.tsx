import React from "react";

const Cadastro = () => {
  return (
    <div>
      <form>
        <div className="data-form">
          <h1>Cadastro Usuário</h1>
          <input type="text" name="displayname" placeholder="Nome" required />
          <input type="email" name="email" placeholder="Email" required />

          <span>
            <input
              type="password"
              name="password"
              placeholder="Senha"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Repetir senha"
              required
            />
          </span>
          <a href="" className="btn">
            Registrar
          </a>
        </div>
      </form>
    </div>
  );
***REMOVED***

export default Cadastro;
