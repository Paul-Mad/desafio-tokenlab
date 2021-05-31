import React from "react";
import { RouteComponentProps } from "@reach/router";

import { connect } from "react-redux";

import { setInputChangeHandler, setRegNewUser } from "../../redux/actions";
import "./Cadastro.styles.css";

interface CadProps {
  displayName: string;
  email: string;
  passOne: string;
  passTwo: string;
  errorMessage: any;
  path: RouteComponentProps;
  onInputChangeHandler: Function;
  onRegNewUser: Function;
}
interface CadState {
  searchEvents: object;
  inputChangeHandler: {
    displayName: string;
    email: string;
    passOne: string;
    passTwo: string;
    errorMessage: string | null;
  ***REMOVED***
}

const Cadastro = (props: CadProps) => {
  const {
    displayName,
    email,
    passOne,
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
        <div className="password">
          <input
            type="password"
            name="passOne"
            value={passOne}
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
***REMOVED***

//Envia o state como props para o component
const mapStateToProps = (state: CadState) => {
  return {
    displayName: state.inputChangeHandler.displayName,
    email: state.inputChangeHandler.email,
    passOne: state.inputChangeHandler.passOne,
    passTwo: state.inputChangeHandler.passTwo,
    errorMessage: state.inputChangeHandler.errorMessage,
  ***REMOVED***
***REMOVED***

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
  ***REMOVED***
***REMOVED***

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
