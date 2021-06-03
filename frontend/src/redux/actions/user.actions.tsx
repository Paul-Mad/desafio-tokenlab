import {
  LOGIN_USER_SUCCESS,
  LOGOUT_USER,
  USER_INPUT_CHANGE_CLEAN,
} from "../constants";

import { store } from "../store";

import firebase from "../../utils/firebase";
import { navigate } from "@reach/router";

interface Istate {
  eventInputChange: object;
  userInputChangeHandler: {
    displayName: string;
    email: string;
    password: string;
    passTwo: string;
    errorMessage: string | null;
  ***REMOVED***
  user: {
    user: object;
    displayName: string;
    userID: string;
  ***REMOVED***
}

// -------------------------------------------------- AUTENTICÃO DO USUÁRIO -----------------------------------

// LOG IN DO USUARIO-------------------
export const setLoginUser =
  (event: React.FormEvent<HTMLFormElement>, email: string, password: string) =>
  (dispatch: Function) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigate("/eventos");
      })
      .catch(() => alert("Usuário ou senha inválidos"));
  ***REMOVED***

// LOG OUT do USUARIO-------------------
export const setUserLogout =
  (event: React.FormEvent<HTMLFormElement>) => (dispatch: Function) => {
    event.preventDefault();
    //limpa os campos do state de USUARIO
    dispatch({
      type: LOGOUT_USER,
      payload: null,
    });

    //log out do USUARIO
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/");
      });
  ***REMOVED***

// CADASTRO DO USUARIO-------------------
export const setRegNewUser =
  (
    event: React.FormEvent<HTMLFormElement>,
    displayName: string,
    email: string,
    password: string
  ) =>
  (dispatch: Function) => {
    event.preventDefault();
    //Declara  state apenas para verificação e validação
    const state: Istate | null = store.getState();

    if (state.userInputChangeHandler.errorMessage !== null) {
      alert(state.userInputChangeHandler.errorMessage);
    } else {
      //Cria o usuario no firebase usando email e password
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          //registra o nome de usuario ao usuario criado
          firebase.auth().onAuthStateChanged((FBUser) => {
            FBUser?.updateProfile({ displayName: displayName }).then(() => {
              dispatch({
                type: LOGIN_USER_SUCCESS,
                payload: {
                  user: FBUser,
                  displayName: FBUser.displayName,
                  userID: FBUser.uid,
                },
              });
              //limpa os campos do state
              dispatch({ type: USER_INPUT_CHANGE_CLEAN });
              //navega para a pagina de eventos
              navigate("/eventos");
            });
          });
        })
        .catch((error) => alert(error.message));
    }
  ***REMOVED***
