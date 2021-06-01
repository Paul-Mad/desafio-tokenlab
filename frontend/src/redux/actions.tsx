import {
  CHANGE_SEARCH,
  GET_EVENTS_PENDING,
  GET_EVENTS_FAILURE,
  GET_EVENTS_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  LOGOUT_USER,
  REG_NEW_USER_SUCCESS,
  REG_NEW_USER_FAILURE,
  INPUT_CHANGE_SUCCESS,
  INPUT_CHANGE_ERROR,
} from "./constants";

import { store } from "./store";

import firebase from "../utils/firebase";
import { navigate } from "@reach/router";

interface Istate {
  searchEvents: object;
  inputChangeHandler: {
    displayName: string;
    email: string;
    password: string;
    passTwo: string;
    errorMessage: string | null;
  ***REMOVED***
}
//Declara  state apenas para verificação e validação
const state: Istate | null = store.getState();

//Action de pesquisa de Eventos
export const setSearchField = (data: string): object => ({
  type: CHANGE_SEARCH,
  payload: data,
});

//Obtem dados dos eventos
export const getEventsAction = () => async (dispatch: Function) => {
  try {
    dispatch({ type: GET_EVENTS_PENDING });
  } catch (error) {}
***REMOVED***

export const setLoginUser =
  (event: React.FormEvent<HTMLFormElement>, email: string, password: string) =>
  (dispatch: Function) => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        firebase.auth().onAuthStateChanged((FBUser) => {
          if (FBUser) {
            dispatch({
              type: LOGIN_USER_SUCCESS,
              payload: {
                user: FBUser,
                displayName: FBUser.displayName,
                userID: FBUser.uid,
              },
            });
            navigate("/eventos");
          } else {
            dispatch({ type: LOGIN_USER_FAILURE, payload: null });
          }
        });
      })
      .catch((error) => (error.message != null ? alert(error.message) : ""));
  ***REMOVED***

// desloga o usuario
export const setUserLogout =
  (event: React.FormEvent<HTMLFormElement>) => (dispatch: Function) => {
    event.preventDefault();
    //limpa os campos do state de usuario
    dispatch({
      type: LOGOUT_USER,
      payload: null,
    });

    //log out do usuario
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigate("/");
      });
  ***REMOVED***

//----------------------Cadastro de usuario-----------------------

//altera o state do cadastro
export const setInputChangeHandler =
  (event: React.SyntheticEvent<HTMLInputElement>) => (dispatch: Function) => {
    const itemName = event.currentTarget.name;
    const itemValue = event.currentTarget.value;
    state.inputChangeHandler.password !== state.inputChangeHandler.passTwo
      ? dispatch({
          type: INPUT_CHANGE_ERROR,
          payload: "As senhas não são iguais",
        })
      : dispatch({
          type: INPUT_CHANGE_ERROR,
          payload: null,
        });

    dispatch({
      type: INPUT_CHANGE_SUCCESS,
      payload: { name: itemName, value: itemValue },
    });
  ***REMOVED***

// Regista o cadastro do usuario
export const setRegNewUser =
  (
    event: React.FormEvent<HTMLFormElement>,
    displayName: string,
    email: string,
    password: string
  ) =>
  (dispatch: Function) => {
    event.preventDefault();
    //Cria o usuario no firebase usando email e password
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        //registra o nome de usuario ao usuario criado
        firebase.auth().onAuthStateChanged((FBUser) => {
          FBUser?.updateProfile({ displayName: displayName }).then(() => {
            dispatch({
              type: REG_NEW_USER_SUCCESS,
              payload: {
                user: FBUser,
                displayName: FBUser.displayName,
                userID: FBUser.uid,
              },
            });
            //navega para a pagina de eventos
            navigate("/eventos");
          });
        });
      })
      .catch((error) => alert(error.message));
  ***REMOVED***
