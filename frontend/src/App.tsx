import React from "react";
import { Router } from "@reach/router";

import { connect } from "react-redux";
import { setUserLogout } from "./redux/actions";

//Components
import Header from "./components/Header/Header.component";
import Home from "./components/Home/Home.component";
import Login from "./components/Login/Login.component";
import Cadastro from "./components/Cadastro/Cadastro.component";
import Eventos from "./components/Eventos/Eventos.component";

interface AppProps {
  user: object;
  displayName: string;
  userID: string;
  onUserLogout: Function;
}
interface AppState {
  user: {
    user: object;
    displayName: string;
    userID: string;
  ***REMOVED***
}

const App = (props: AppProps): JSX.Element => {
  const { user, onUserLogout } = props;

  return (
    <div className="App">
      <Header user={user} onUserLogout={onUserLogout} />
      <Router>
        <Home path="/" />
        <Login path="/login" />
        <Cadastro path="/cadastro" />
        <Eventos path="/eventos" />
      </Router>
    </div>
  );
***REMOVED***

const mapStateToProps = (state: AppState) => {
  return {
    user: state.user.user,
    displayName: state.user.displayName,
    userID: state.user.userID,
  ***REMOVED***
***REMOVED***
const mapDispatchToProps = (dispatch: Function) => {
  return {
    onUserLogout: (event: React.FormEvent<HTMLFormElement>) =>
      dispatch(setUserLogout(event)),
  ***REMOVED***
***REMOVED***

export default connect(mapStateToProps, mapDispatchToProps)(App);
