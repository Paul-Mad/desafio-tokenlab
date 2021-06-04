import React from "react";
import { RouteComponentProps } from "@reach/router";

import { connect } from "react-redux";

import { setRegNewUser } from "../../redux/actions/user.actions";

import { setInputChangeHandler } from "../../redux/actions/input.actions";

import "./Cadastro.styles.css";

interface CadProps {
  displayName: string;
  email: string;
  password: string;
  passTwo: string;
  errorMessage: any;
  path: RouteComponentProps;
  onInputChangeHandler: Function;
  onRegNewUser: Function;
}
interface CadState {
  searchEvents: object;
  userInputChangeHandler: {
    displayName: string;
    email: string;
    password: string;
    passTwo: string;
    errorMessage: string | null;
  };
}

const Cadastro = (props: CadProps) => {
  const {
    displayName,
    email,
    password,
    passTwo,
    errorMessage,
    onInputChangeHandler,
    onRegNewUser,
  } = props;
  return (
    <div className="data-form cadastro">
      <form
        className="form"
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          onRegNewUser(event, displayName, email, passTwo)
        }
      >
        <div>
          <h1>Cadastro</h1>
          <input
            type="text"
            name="displayName"
            value={displayName}
            onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            placeholder="Nome"
            required
          />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            placeholder="Email"
            required
          />
        </div>
        <label
          className={`password-not-match ${
            errorMessage === null ? "hidden" : ""
          }`}
        >
          Senhas diferentes
        </label>
        <div className="password">
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            placeholder="Senha"
            required
          />

          <input
            type="password"
            name="passTwo"
            value={passTwo}
            onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
              onInputChangeHandler(event)
            }
            placeholder="Repetir senha"
            required
          />
        </div>
        <button className="btn">Registrar</button>
      </form>
    </div>
  );
};

//Envia o state como props para o component
const mapStateToProps = (state: CadState) => {
  return {
    displayName: state.userInputChangeHandler.displayName,
    email: state.userInputChangeHandler.email,
    password: state.userInputChangeHandler.password,
    passTwo: state.userInputChangeHandler.passTwo,
    errorMessage: state.userInputChangeHandler.errorMessage,
  };
};

//Envia as actions como props  para o component
const mapDispatchToProps = (dispatch: Function) => {
  return {
    onInputChangeHandler: (event: React.SyntheticEvent<HTMLInputElement>) =>
      dispatch(setInputChangeHandler(event)),
    onRegNewUser: (
      event: React.FormEvent<HTMLFormElement>,
      displayName: string,
      email: string,
      password: string
    ) => dispatch(setRegNewUser(event, displayName, email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
