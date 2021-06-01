import React from "react";
import { RouteComponentProps } from "@reach/router";
import { connect } from "react-redux";
import { setInputChangeHandler, setLoginUser } from "../../redux/actions";

interface LoginProps {
  email: string;
  password: string;
  path: RouteComponentProps;
  onInputChangeHandler: Function;
  onLoginUser: Function;
}
interface UserState {
  inputChangeHandler: {
    email: string;
    password: string;
  ***REMOVED***
}
const Login = (props: LoginProps) => {
  const { email, password, onInputChangeHandler, onLoginUser } = props;
  return (
    <div className="data-form">
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          onLoginUser(event, email, password)
        }
      >
        <h1>Log in</h1>

        <input
          type="email"
          name="email"
          value={email}
          onChange={(event: React.SyntheticEvent<HTMLInputElement>) =>
            onInputChangeHandler(event)
          }
          placeholder="Email"
        />
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
        <button className="btn">Log in</button>
      </form>
    </div>
  );
***REMOVED***

//Envia as actions como props  para o component
const mapDispatchToProps = (dispatch: Function) => {
  return {
    onInputChangeHandler: (event: React.SyntheticEvent<HTMLInputElement>) =>
      dispatch(setInputChangeHandler(event)),
    onLoginUser: (
      event: React.FormEvent<HTMLFormElement>,
      email: string,
      password: string
    ) => dispatch(setLoginUser(event, email, password)),
  ***REMOVED***
***REMOVED***
//Envia o state como props para o component
const mapStateToProps = (state: UserState) => {
  return {
    email: state.inputChangeHandler.email,
    password: state.inputChangeHandler.password,
  ***REMOVED***
***REMOVED***

export default connect(mapStateToProps, mapDispatchToProps)(Login);
